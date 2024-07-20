const {createConnection} = require('../db');

async function getuserbyusername(username) {
    const connection = await createConnection();
    const [rows] = await connection.query`'SELECT * FROM tbl_60_users WHERE username ='${username}'`;
    await connection.end();
    return rows[0];
   
} 
async function createuser(username, password , accesscode){
    const connection = await createConnection();
    const [rows] = await connection.query('INSERT INTO tbl_60_users (username, password, accesscode) VALUES (?, ?, ?)', [username, password, accesscode]);
    await connection.end();
    return rows.insertId;

}

module.exports = {getuserbyusername, createuser}
