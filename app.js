const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const fs = require("fs");
const csv = require("csv-parse");
const results = [];

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

const csvFilePath = path.join(__dirname, "public", "contacts.csv");

fs.createReadStream(csvFilePath)
  .pipe(csv.parse({ columns: true, trim: true }))
  .on("data", (data) => results.push(data))
  .on("end", () => {
    console.log("CSV FILE OK");

  });

app.get("/", (req, res) => {
  res.render("home", { results });
});

app.get("/add", (req, res) => {
  res.render("add");
});

app.get("/contact/:name", (req, res) => {
  csv.parse(
    fs.readFileSync(csvFilePath, "utf-8"),
    { columns: true, trim: true },
    (err, data) => {
      const params = req.params;

      const item = data.find((el)=> el.name === params.name)
      // console.log(rows);
      res.render("detail", { detail: item });
    }
  );
});

module.exports = app;
