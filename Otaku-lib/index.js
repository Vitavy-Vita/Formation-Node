const fs = require("fs");
const http = require("http");
const books = require("./data/data.json");
const path = require("path");
// const url = require("url");

const server = http.createServer();

server.listen(3000, console.log("App running on port 3000"));

server.on("request", (request, response) => {
  //     // url.parse is deperecated
  //   const pathName = url.parse(request.url)
  const url = new URL(`http://${request.headers.host}${request.url}`);
  if (url.pathname === "/") {
    const file = `${__dirname}/templates/template-overview.html`;
    fs.readFile(file, "utf-8", (err, data) => {
      const allCards = [];
      const templateCard = fs.readFileSync(
        `${__dirname}/templates/template-card.html`,
        "utf-8"
      );

      const replaceDataTemplate = function (item, index) {
        let replaceCard = templateCard
          .replace("{% RELEASE DATE %}", item.releaseDate)
          .replace("{% NAME %}", item.title)
          .replace("{% DESCRIPTION %}", item.description)
          .replace("{% CATEGORY %}", item.category)
          .replace(`{% AUTHOR %}`, item.author)
          .replace(`{% LINK %}`, `/book?id=${index}`);

        return replaceCard;
      };
      for (const [index, item] of books.entries()) {
        allCards.push(replaceDataTemplate(item, index));
        console.log(
          `Constructed Image URL for ${item.title}: http://${request.headers.host}${item.image}`
        );
      }
      const card = data.replace("{% CARD %}", allCards.join(" "));
      response.end(card);
    });
    response.writeHead(200, "ok", {
      "Content-Type": "text/html",
    });
  } else if (url.pathname === "/book") {
    const params = new URLSearchParams(url.search);
    const id = params.get("id");
    const item = books[id];

    response.writeHead(200, "ok", {'Content-Type': 'text/html'});
    response.end(item.title);
  } else {
    response.writeHead(404, "Not Found");
    response.end("This page does not exist");
  }
});
