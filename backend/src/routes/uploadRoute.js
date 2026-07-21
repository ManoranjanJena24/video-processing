const express = require("express");

const router = express.Router();

const upload = require("../middlewares/upload");

const { uploadVideo } = require("../controllers/uploadController");

router.post("/upload", upload.single("video"), uploadVideo);

module.exports = router;
