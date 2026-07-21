require("dotenv").config();

const { Worker } = require("bullmq");

const connection = require("../config/redis");
const connectDB = require("../config/db");
const Video = require("../models/Video");

connectDB();

const videoWorker = new Worker(
  "video-processing",

  async (job) => {
    try {
      console.log("--------------------------------");

      console.log("New Job Received");

      console.log(job.data);

      const { videoId } = job.data;

      const video = await Video.findById(videoId);

      if (!video) {
        throw new Error("Video not found");
      }

      // Update status
      video.status = "Processing";

      await video.save();

      console.log("Status Updated : Processing");

      console.log("Processing Video :", video.originalName);

      // Fake processing time
      await new Promise((resolve) => setTimeout(resolve, 5000));

      video.status = "Completed";

      await video.save();

      console.log("Status Updated : Completed");

      console.log("--------------------------------");
    } catch (error) {
      console.log(error.message);
    }
  },

  {
    connection,
  },
);

console.log("Worker Started...");
