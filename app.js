const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const fs = require("fs");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

const data = fs.readFileSync(`${__dirname}/public/contacts.json`, "utf-8");

app.get("/", (req, res) => {
  const contacts = JSON.parse(data);

  res.render("add", { contacts });

});
app.get("/add")

module.exports = app;
