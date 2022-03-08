const http = require("http");
const express = require("express");
const cors = require("cors");
const socketIO = require("socket.io");

const app = express();
const port = process.env.PORT || 4000;

const users = [{}];

app.use(cors());
app.get("/", (req, res) => {
  res.send("HELL ITS WORKING");
});

const server = http.createServer(app);

const io = socketIO(server);

io.on("connection", () => {
  console.log("New Connection");
});

io.on("disconnect", () => {
  console.log(`user left`);
});
server.listen(port, () => {
  console.log(`Server is Working on http://localhost:${port}`);
});
