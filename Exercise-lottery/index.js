// Module provenant de npm
const { loto } = require("./lottery");
const { gagnant } = require("./lottery");
const chalk = require("chalk");

console.log(chalk.red(loto(1, 50, 5)).replaceAll(",", chalk.green("-")));
const participants = ["Alice", "Bob", "Charlie"];
console.log(chalk.red(gagnant(participants)));


// to call on terminal:
// node ./Exercise-Lottery/index.js