// Module provenant de npm

const slugify = require("slugify");

const { calc } = require("./calc");

console.log(calc(2, 5));

console.log(chalk.blue("Hello world!"));
console.log(slugify("Bienvenu à Paris", { lower: true, replacement: " " }));

// to call on terminal:
// node ./Exercise-lottery/index.js