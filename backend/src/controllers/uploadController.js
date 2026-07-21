const uploadVideo = (req, res) => {
  console.log(req.file);

  res.status(200).json({
    success: true,
    message: "Video uploaded successfully",
    file: req.file,
  });
};

module.exports = {
  uploadVideo,
};
