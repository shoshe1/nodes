const usermodel = require('../models/usermodel');

async function authenticateuser(req, res, next) {
    const {accesscode} = req.body;
    try {
        const user = await usermodel.getuserbyaccesscode(accesscode);
        if(!user) {
            return res.status(401).json({message: 'Invalid access code'});
        }

        req.user = user;
        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'authentication middleware error. Internal server error'});
    }
}

module.exports = {authenticateuser}