import bcrypt from 'bcryptjs';

export async function comparePwd(pwd, hash) {
    return await bcrypt.compare(pwd, hash);
}
