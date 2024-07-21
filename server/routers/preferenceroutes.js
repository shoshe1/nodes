const express = require("express");
const preferencecontroller = require("../controllers/preferencescontroller");
const router = express.Router();

router.get("/:userid", preferencecontroller.getpreferencesbyuserid);
router.post("/", preferencecontroller.updatepreference);

module.exports = router;