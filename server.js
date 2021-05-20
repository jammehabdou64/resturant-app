const http = require("http");
const express = require("express");
const dotenv = require("dotenv");
const socketIo = require("socket.io");
const routeHandler = require("./routes");
dotenv.config();

const middlwares = require("./middlewares");
const dbConnection = require("./database");

const app = express();
const server = http.Server(app);
//middlwares
middlwares(express, app);
//database connection
dbConnection();

//all routes
routeHandler(app);
//all socket
const io = socketIo(server);
io.on("connection", (socket) => {});

const port = process.env.PORT || process.env.NODE_ENV;
server.listen(port, () =>
  console.log(`Server running on port http://localhost:${port}`)
);
