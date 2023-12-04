// import chalk from "chalk";

// Module provenant de npm
const { loto } = require("./modules/lottery");
const { gagnant } = require("./modules/lottery");
const chalk = require("chalk");
// const slugify = require('slugify')

// const {calc} = require('./modules/calc')

// console.log(calc(2,5))
console.log(chalk.red(loto(1, 50, 5)).replaceAll(",", chalk.green("-")));
const participants = ["Alice", "Bob", "Charlie"];
console.log(chalk.red(gagnant(participants)));
// console.log(chalk.blue("Hello world!"));
// console.log(slugify('Bienvenu à Paris',{lower:true, replacement: ' '}));
