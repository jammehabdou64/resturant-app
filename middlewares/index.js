const fileupload = require("express-fileupload");
const mongoSanitize = require("express-mongo-sanitize");
const helmet = require("helmet");
const hpp = require("hpp");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const xss = require("xss-clean");

module.exports = (express, app) => {
  express.json();
  app.use(cors());
  app.use(helmet());
  app.use(hpp());
  app.use(xss());
  app.use(cookieParser());
  app.use(mongoSanitize());
  app.use(fileupload());
  return;
};
