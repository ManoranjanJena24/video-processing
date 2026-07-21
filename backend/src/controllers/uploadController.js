// const uploadVideo = (req, res) => {
//   console.log(req.file);

//   res.status(200).json({
//     success: true,
//     message: "Video uploaded successfully",
//     file: req.file,
//   });
// };

// module.exports = {
//   uploadVideo,
// };



const Video = require("../models/Video");

const uploadVideo = async (req, res) => {
  try {
    const video = await Video.create({
      originalName: req.file.originalname,
      filename: req.file.filename,
      path: req.file.path,
      status: "Uploaded",
    });

    res.status(201).json({
      success: true,
      video,
    });
  } catch (error) {
    console.log(error); // Important
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { uploadVideo };
