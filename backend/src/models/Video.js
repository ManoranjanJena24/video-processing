const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema(
  {
    originalName: {
      type: String,
      required: true,
    },

    filename: {
      type: String,
      required: true,
    },

    path: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["Uploaded", "Queued", "Processing", "Completed", "Failed"],
      default: "Uploaded",
    },

    progress: {
      type: Number,
      default: 0,
    },

    queuePosition: {
      type: Number,
      default: null,
    },

    estimatedTime: {
      type: String,
      default: null,
    },

    streamUrl: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Video", videoSchema);
