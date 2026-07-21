require("dotenv").config();
const express = require("express");

const uploadRoutes = require("./src/routes/uploadRoute");
const connectDB = require("./src/config/db.js");

require("./src/config/redis");

const app = express();

connectDB();

app.use(express.json());

// Register routes
app.use("/", uploadRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
