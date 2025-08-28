

const express = require("express");
const router = express.Router();
const { handlerSend } = require("../controller/sample");
const { upload } = require("../config/cloud"); // use cloudinary setup

// POST route with file upload
router.post("/sell", upload.array("photos", 20), handlerSend);

module.exports = router;
