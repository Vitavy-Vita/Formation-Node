const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const fs = require("fs");
const csv = require("csv-parse");
const contactRouter = require("./routes/contactRoutes");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

const csvFilePath = path.join(__dirname, "public", "contacts.csv");

app.use((req, res, next) => {
  const results = [];
  fs.createReadStream(csvFilePath)
    .pipe(csv.parse({ columns: true, trim: true }))
    .on("data", (data) => results.push(data))
    .on("end", () => {
      req.csvResults = results;
      next();
    });
});

app.use("/", contactRouter);
module.exports = app;
