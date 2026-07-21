const IORedis = require("ioredis");

const connection = new IORedis({
  host: "127.0.0.1",
  port: 6379,
  maxRetriesPerRequest: null,
});

connection.on("connect", () => {
  console.log("Redis Connected");
});

connection.on("error", (error) => {
  console.log("Redis Error:", error.message);
});

module.exports = connection;
