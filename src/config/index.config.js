import { config } from 'dotenv';

config();

// app
export const PORT = process.env.PORT || 3000;
export const NODE_ENV = process.env.NODE_ENV || 'development';

// db
export const DB_HOST = process.env.DB_HOST || 'localhost';
export const DB_PORT = process.env.DB_PORT || 3306;
export const DB_SSL_CA = NODE_ENV === 'production' ? Buffer.from(process.env.DB_SSL_CA, 'base64').toString('ascii') : undefined;

// db schema paidify
export const DB_PAIDIFY_SCHEMA = process.env.DB_PAIDIFY_SCHEMA || 'paidify';
export const DB_PAIDIFY_USER = process.env.DB_PAIDIFY_USER || 'api';
export const DB_PAIDIFY_PASSWORD = process.env.DB_PAIDIFY_PASSWORD || 'secret';

// db schema univ
export const DB_UNIV_SCHEMA = process.env.DB_UNIV_SCHEMA || 'paidify';
export const DB_UNIV_USER = process.env.DB_UNIV_USER || 'api';
export const DB_UNIV_PASSWORD = process.env.DB_UNIV_PASSWORD || 'secret';

// jwt
export const JWT_SECRET = process.env.JWT_SECRET || 'secret';
