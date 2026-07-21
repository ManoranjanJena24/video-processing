const multer = require("multer");
const path = require("path");

// Configure how and where files should be stored
const storage = multer.diskStorage({
  // Folder where uploaded videos will be stored
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },

  // Rename the uploaded file
  filename: function (req, file, cb) {
    // Example:
    // Original name = movie.mp4
    // New name = 1753102456123.mp4

    const uniqueName = Date.now() + path.extname(file.originalname);

    cb(null, uniqueName);
  },
});

// Create multer instance
const upload = multer({
  storage: storage,
});

// Export it
module.exports = upload;