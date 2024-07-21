const preferencemodel = require('../models/preferencemodel');


async function getpreferencesbyuserid(req, res) {
    const userid = req.params.userid;
    try {
        const preferences = await preferencemodel.getpreferencebyuserid(userid);
        res.status(200).json(preferences);
    } catch (error) {
        console.error('Error in getPreferencesByUserId:', error);
        res.status(500).json({message: 'Internal server error'});
    }
}
async function updatepreference(req, res) {
  
    const {userid,startdate,enddate, destination, vacationtype} = req.body;
    try {
        await preferencemodel.createpreference(userid,startdate,enddate, destination, vacationtype);
        res.status(200).json({message: 'Preferences updated successfully'});
    } catch (error) {
        console.error('Error in updatePreference:', error);
        res.status(500).json({message: 'preferences controller not updated. Internal server error'});
    }
}
async function getallpreferences(req, res) {
    const preferences= req.params.userid;
    try {
        const preferences = await preferencemodel.getallpreferences();
        res.status(200).json(preferences);
    } catch (error) {
        console.error('error in get all preferences',error);
        res.status(500).json({message: 'Internal server error'});
    }
}

async function computevacation(req, res) {
    try{
        const preferences = await preferencemodel.getallpreferences();
        if(preferences.length <5) {
            return res.status(400).json({message: 'Not enough preferences. Please add more preferences'});
        }
        const result = calculatevacation(preferences);
        res.status(200).json(result);
    } catch (error) {
        console.error('error in get all preferences',error);
        res.status(500).json({message: 'Internal server error'});
    }
}
async function calculatevacation(preferences) {
    const destination ={};
    const typecount = {};
    const daterange = [];

    

}

module.exports = {getpreferencesbyuserid, updatepreference}