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
const data = fs.readFileSync(csvFilePath, "utf-8");

app.get("/", (req, res) => {
  // const contacts = csv.parse(data);
  fs.createReadStream("contacts.csv")
    .pipe(csv.parse({ columns: true }))
    .on("data", (data) => results.push(data))
    .on("end", () => {
      console.log("CSV FILE OK");
    });
  console.log(results);
  res.render("home", { results });
});
app.get("/add", (req, res) => {
  res.render("add");
});

app.get("/:name", (req, res) => {
  const contacts = csv.parse(data);
  const params = req.params;

  const contactDetails = contacts.find((el) => el.name === params.name);
  if (!contactDetails) res.render("error");

  res.render("detail", { detail: contactDetails });
});

module.exports = app;
