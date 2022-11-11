import { Router } from 'express';
import jwt from 'jsonwebtoken';
import poolP from '../services/dbPaidify.js';
import poolU from '../services/dbUniv.js';
import { comparePwd } from '../helpers/pwd.js';
import { JWT_SECRET } from '../config/index.config.js';
import { JWT_EXP } from '../config/constants.js';
import { readOne } from '../helpers/crud.js';
import { ROLE_ADMIN, ROLE_DEFAULT } from '../config/constants.js';

const router = Router()

router.post('/', async (req, res) => {
    const { username, email, password } = req.body;
    if(!password) return res.status(400).json({ message: 'Password is required' });
    if(!username && !email) return res.status(400).json({ message: 'Username or email is required' });

    let person, user;

    const personWhere = { $or: true };
    if(username) personWhere.username = username;
    if(email) personWhere.email = email;
    try {
        person = await readOne(
            'person',
            { 'person': ['id', 'password'] },
            ['LEFT JOIN univ_actor ON univ_actor.person_id = person.id'],
            personWhere,
            poolU
        );
    } catch (err) {}

    if(person) {
        try {
            user = await readOne('user', { 'user': ['id'] }, [], { 'person_id': person.id }, poolP);
        } catch (err) {}
    } else {
        try {
            user = await readOne(
                'user_admin',
                { 'user_admin': ['id', 'password'] },
                [],
                { username },
                poolP
            );
        } catch (err) {}
    }
    if(!user) return res.status(404).json({ message: 'User not found' });
    
    if(!(await comparePwd(password, person ? person.password : user.password))) {
        return res.status(401).json({ message: 'Invalid password' });
    }

    const token = jwt.sign(
        { id: user.id, role: person ? ROLE_DEFAULT : ROLE_ADMIN }, JWT_SECRET, { expiresIn: JWT_EXP }
    );
    res.status(200).json({ token });
});

export default router;
