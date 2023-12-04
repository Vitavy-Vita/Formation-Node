const chalk = require("chalk");
const loto = function (min, max, num) {
  const lotteryNumbers = [];
  while (lotteryNumbers.length < num) {
    const randomNumbers = Math.floor(Math.random() * (max - min) + min);
    if (!lotteryNumbers.includes(randomNumbers)) {
      lotteryNumbers.push(chalk.red(randomNumbers));
    }
  }

  return lotteryNumbers;
};

const gagnant = function () {
  const participants = ["Alice", "Bob", "Charlie"];
  const randomWinner = Math.floor(Math.random() * participants.length);
  return participants[randomWinner];
};

exports.loto = loto;
exports.gagnant = gagnant;

// COURS - classe new set()
//
// const loto = function ({min, max, count}) {
//   const draw = new Set();

//   // `size` permet de récuperer le nombre d'element dans un Set
//   while (draw.size < count) {
//     const random = Math.floor(Math.random() * (max - min) + 1);
//     draw.add(random);
//   }
//   Array.from(draw)
// };

// const gagnant = function () {};

// loto({min: 10, max: 20, count: 5});
// loto(10, 20, 5)

// module.exports = { loto, gagnant };
