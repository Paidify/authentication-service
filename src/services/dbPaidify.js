import { createPool } from 'mysql2/promise';
import {
    NODE_ENV,
    DB_HOST,
    DB_PORT,
    DB_SSL_CA,
    DB_PAIDIFY_USER,
    DB_PAIDIFY_PASSWORD,
    DB_PAIDIFY_SCHEMA,
} from '../config/index.config.js';

const pool = createPool({
    port: DB_PORT,
    host: DB_HOST,
    ssl: NODE_ENV === 'production' ? { ca: DB_SSL_CA } : undefined,
    user: DB_PAIDIFY_USER,
    password: DB_PAIDIFY_PASSWORD,
    database: DB_PAIDIFY_SCHEMA,
});

pool.on('connection', (connection) => {
    console.log('MySQL connected');
});

pool.on('enqueue', () => {
    console.log('Waiting for available connection slot');
});

pool.on('release', (connection) => {
    console.log('Connection %d released', connection.threadId);
});

pool.on('acquire', (connection) => {
    console.log('Connection %d acquired', connection.threadId);
});

export default pool;
