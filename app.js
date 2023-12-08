const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const fs = require("fs");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

const data = fs.readFileSync(`${__dirname}/public/kittens.json`, "utf-8");
app.get("/", (req, res) => {
  // fs.readFile(`${__dirname}/public/kittens.json`, "utf-8", (err, data) => {
  // });
  const cards = JSON.parse(data);

  res.render("home", { cards });
});

app.get("/kittens/:id", (req, res) => {
  // fs.readFile(`${__dirname}/public/kittens.json`, 'utf-8', (err,data)=>{
  // })

  const cards = JSON.parse(data);
  const params = req.params;

  const item = cards.find((el) => el.id === Number(params.id));

  if (!item) res.render("error");

  res.render("detail", { card: item });
});

module.exports = app;
