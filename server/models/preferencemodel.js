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
    if (existingpreference.length >0){
        const updatequery = `UPDATE tbl_60_preferences SET startdate = '${startdate}', enddate = '${enddate}', destination = '${destination}', vacationtype = '${vacationtype}' WHERE userid = '${userid}'`;
        await connection.execute(updatequery);

    } else {
        const insertquery = `INSERT INTO tbl_60_preferences(userid,startdate, enddate, destination, vacationtype) VALUES ('${userid}','${startdate}','${enddate}','${destination}','${vacationtype}')`;
        await connection.execute(insertquery);
    }
    await connection.end();
}
