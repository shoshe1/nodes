const express = require("express");
const usercontroller = require("../controllers/usercontroller");
const router = express.Router();

router.post("/register", usercontroller.registeruser);
router.post("/login", usercontroller.authenticateuser);

module.exports = router;