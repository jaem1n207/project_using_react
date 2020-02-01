const express = require("express");
const router = express.Router();
// const { Video } = require("../models/Video");

const { auth } = require("../middleware/auth");
const multer = require("multer");

let storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "uploads/");
  },
  filename: (req, file, callback) => {
    callback(null, `${Date.now()}_${file.originalname}`);
  },
  fileFilter: (req, file, callback) => {
    const ext = path.extname(file.originalname);
    if (ext !== ".mp4") {
      return callback(res.status(400).end("only mp4 is allowed"), false);
    }
    callback(null, true);
  }
});

const upload = multer({ storage: storage }).single("file");

//=================================
//             Video
//=================================

router.post("/uploadfiles", (req, res) => {
  // 비디오를 서버에 저장
  upload(req, res, err => {
    if (err) {
      return res.json({ success: false, err });
    }
    return res.json({
      success: true,
      url: res.req.file.path,
      fileName: res.req.file.filename
    });
  });
});

module.exports = router;
