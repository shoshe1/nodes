const {createConnection} = require('../db');

async function getpreferencebyuserid(userid) {
    const connection = await createConnection();
    const [rows] = await connection.execute`'SELECT * FROM tbl_60_preferences WHERE userid ='${userid}'`;
    await connection.end();
    return rows[0];
}


async function createpreference(userid,startdate,enddate, destination, vacationtype) {
    const connection = await createConnection();
    const [existingpreference] = await connection.execute`'SELECT * FROM tbl_60_preferences WHERE userid ='${userid}'`;
    
}
