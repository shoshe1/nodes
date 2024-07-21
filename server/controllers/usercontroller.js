const usermodel = require('../models/usermodel');
//const bcrypt = require('bcrypt');


async function registeruser(req, res) {
    const {username, password} = req.body;
try {
    const existinguser = await usermodel.getuserbyusername(username);
    if(existinguser) {
        return res.status(409).json({message: 'username already exists'});
    }

    const hashedpassword = await bcrypt.hash(password, 10);
    const accesscode =uuid.v4();

    await usermodel.createuser(username, hashedpassword, accesscode);

    res.status(201).json({message: 'user created successfully',accesscode});

} catch (error) {
    console.error(error);
    res.status(500).json({message: 'internal server error'});
}

}

async function authenticateuser(req, res) {
    const {username, password} = req.body;
    try {
        const user = await usermodel.getuserbyusername(username);
        if(!user) {
            return res.status(401).json({message: 'invalid credentials'});
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid) {
            return res.status(401).json({message: 'invalid credentials'});
        }

        const accesscode = user.accesscode;
        res.status(200).json({accesscode});
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'internal server error'});
    }
}

module.exports = {registeruser, authenticateuser};