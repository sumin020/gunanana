const express = require("express");
const router = express.Router();
const reportController = require("../controllers/reportController"); 

router.get("/", reportController.getReports); 

module.exports = router;
