const Video = require("../models/Video");
const videoQueue = require("../queues/videoQueue");

const uploadVideo = async (req, res) => {
  try {
    // Save video metadata to MongoDB
    const video = await Video.create({
      originalName: req.file.originalname,
      filename: req.file.filename,
      path: req.file.path,
      status: "Uploaded",
    });

    // Add job to Redis queue
    await videoQueue.add("transcode-video", {
      videoId: video._id.toString(),
    });

    // Update status
    video.status = "Queued";
    await video.save();

    res.status(201).json({
      success: true,
      message: "Video uploaded and added to queue successfully",
      video,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  uploadVideo,
};
