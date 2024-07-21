const {createConnection} = require('../db');

async function getuserbyusername(username) {
    const connection = await createConnection();
   try{ const [rows] = await connection.query`'SELECT * FROM tbl_60_users WHERE username ='${username}'`;
    
    return rows[0];
   } catch (error) {
       console.error('error in getuserbyusername',error);
   }
   finally{
       await connection.end();
   }
   
} 
async function createuser(username, password , accesscode){
    const connection = await createConnection();
    try{ await connection.query('INSERT INTO tbl_60_users (username, password, accesscode) VALUES (?, ?, ?)', [username, password, accesscode]);

    } catch (error) {
        console.error('error in createuser',error);
    }
    finally{
        await connection.end();
    }

}

module.exports = {getuserbyusername, createuser}
