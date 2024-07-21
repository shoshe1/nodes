const preferencemodel = require('../models/preferencemodel');


async function getpreferencesbyuserid(req, res) {
    const userid = req.params.userid;
    try {
        const preferences = await preferencemodel.getpreferencebyuserid(userid);
        res.status(200).json(preferences);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Internal server error'});
    }
}
async function updatepreference(req, res) {
  
    const {userid,startdate,enddate, destination, vacationtype} = req.body;
    try {
        await preferencemodel.createpreference(userid,startdate,enddate, destination, vacationtype);
        res.status(200).json({message: 'Preferences updated successfully'});
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'preferences controller not updated. Internal server error'});
    }
}
module.exports = {getpreferencesbyuserid, updatepreference}