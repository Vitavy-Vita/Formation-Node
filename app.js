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

// scope issue, cant make it reach
const csvFilePath = ["public", "contacts.csv"];
app.use((req, res, next) => {
  const results = [];
  // fs.createReadStream(csvFilePath)
  try {
    fs.createReadStream(path.join(...csvFilePath))
      .pipe(csv.parse({ columns: true, trim: true }))
      .on("data", (data) => results.push(data))
      .on("end", () => {
        req.filePath = [...csvFilePath];
        req.csvResults = results;
        next();
      });
  } catch (error) {

    res.render("Contact-not-found", { error });
  }
});

app.use("/", contactRouter);
app.use('/*', (req,res)=>{
  res.render('error')
})
module.exports = app;
