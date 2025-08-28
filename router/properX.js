// const express = require("express");
// const router = express.Router();
// const { handlerSend } = require("../controller/sample");
// const multer = require("multer");
// const path = require("path");

// const { upload } = require("../config/cloudinary");

// // Multer storage config
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => cb(null, "uploads/"),
//     filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
// });

// const upload = multer({ storage });

// // POST route with file upload
// router.post("/sell", upload.array("photos", 20), handlerSend);

// module.exports = router;


// // const { upload } = require("../config/cloudinary");


const express = require("express");
const router = express.Router();
const { handlerSend } = require("../controller/sample");
const { upload } = require("../config/cloudinary"); // use cloudinary setup

// POST route with file upload
router.post("/sell", upload.array("photos", 20), handlerSend);

module.exports = router;
