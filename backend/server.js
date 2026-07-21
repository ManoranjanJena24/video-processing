const express = require("express");

const uploadRoutes = require("./src/routes/uploadRoute");

const app = express();

app.use(express.json());

// Register routes
app.use("/", uploadRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});