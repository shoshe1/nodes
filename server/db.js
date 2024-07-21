
const mysql = require('mysql2/promise');
require('dotenv').config(); 

async function createConnection() {
    let connection;
    try {
        connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME
        });
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Error establishing database connection:', error);
    }
    return connection;
}

exports.createConnection = createConnection;