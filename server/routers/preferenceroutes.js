const express = require("express");
const preferencecontroller = require("../controllers/preferencescontroller");
const router = express.Router();

router.get("/:userid", preferencecontroller.getpreferencesbyuserid);
router.post("/", preferencecontroller.updatepreference);
router.get('/', preferencecontroller.getallpreferences);
router.get('/compute', preferencecontroller.computevacation);
module.exports = router;