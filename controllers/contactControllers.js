const fs = require("fs");
const csv = require("csv-parse");

const { stringify } = require("csv-stringify");
const results = [];


exports.getOverview = (req, res) => {
  res.render("home", { results });
};
exports.getViewAddContact = (req, res) => {
  res.render("add", {results});
};

exports.getViewUpdateContact = (req, res) => {
  csv.parse(
    fs.readFileSync(csvFilePath, "utf-8"),
    { columns: true, trim: true },
    (err, data) => {
      const params = req.params;

      const contactToUpdate = data.find((el) => el.name === params.name);

      res.render("update", { update: contactToUpdate });
    }
  );
};
exports.postCreateContact = (req, res) => {
  const newContact = req.body;
  const writeStream = fs.createWriteStream(csvFilePath);

  if (!newContact) {
    return res.send("Please make sure to fill all inputs");
  }

  results.push(newContact);

  stringify(results, { header: true }, (err, csv) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    } else {
      writeStream.write(csv);
      writeStream.end();
      res.redirect("/");
    }
  });
};

exports.postUpdateContact = (req, res) => {
  csv.parse(
    fs.readFileSync(csvFilePath, "utf-8"),
    { columns: true, trim: true },
    (err, data) => {
      const params = req.params;
      const indexContactToUpdate = data.findIndex(
        (el) => el.name === params.name
      );
      const contactToUpdate = data.find((el) => el.name === params.name);

      const keys = Object.keys(req.body);
      for (const key of keys) {
        if (req.body[key].trim()) {
          contactToUpdate[key] = req.body[key];
        }
      }
      data[indexContactToUpdate] === contactToUpdate;

      const writeStream = fs.createWriteStream(csvFilePath);
      stringify(data, { header: true }, (err, csvData) => {
        if (err) {
          console.error(err);
          res.status(500).send("Contact not found");
        } else {
          writeStream.write(csvData);
          writeStream.end();

          results.length = 0;
          data.forEach((data) => results.push(data));
          res.redirect("/");
        }
      });
    }
  );
};

exports.postDeleteContact = (req, res) => {
  csv.parse(
    fs.readFileSync(csvFilePath, "utf-8"),
    { columns: true, trim: true },
    (err, data) => {
      const params = req.params;
      const contactToDeleteIndex = data.findIndex(
        (el) => el.name === params.name
      );

      if (contactToDeleteIndex === -1) {
        return res.render("error");
      }

      data.splice(contactToDeleteIndex, 1);

      const writeStream = fs.createWriteStream(csvFilePath);
      stringify(data, { header: true }, (err, csvData) => {
        if (err) {
          console.error(err);
          return res.status(500).send("Contact not found");
        }

        writeStream.write(csvData);
        writeStream.end();

        results.length = 0;
        data.forEach((row) => results.push(row));

        res.redirect("/");
      });
    }
  );
};

exports.getContact = (req, res) => {
  csv.parse(
    fs.readFileSync(csvFilePath, "utf-8"),
    { columns: true, trim: true },
    (err, data) => {
      const params = req.params;

      const item = data.find((el) => el.name === params.name);

      res.render("detail", { detail: item });
    }
  );
};
