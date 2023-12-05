const { generateRandomNum } = require("./math");

console.log("Tentez de deviner un nombre entre 1 et 100");

// Ne pas rentrer les variables dans la boucle
let numLife = 10;
const random = generateRandomNum(1, 100);
process.stdin.on("data", (chunk) => {
  const guessNum = Number(chunk.toString());

  //   if (numLife === 0) {
  //     process.stdout.write(
  //       `Vous avez perdu! Le nombre à deviner était ${random}\n`
  //     );
  //   }

  //   if (guessNum > 100) {
  //     process.stdout.write(
  //       `Merci de saisir un nombre entre 1 et 100! Il vous reste ${numLife} tentatives\n`
  //     );
  //   } else if (guessNum > random) {
  //     numLife--;
  //     process.stdout.write(
  //       `Vous chauffez, le nombre est plus petit! Il vous reste ${numLife} tentatives\n`
  //     );
  //   } else if (guessNum < random) {
  //     numLife--;
  //     process.stdout.write(
  //       `Vous chauffez, le nombre est plus grand! Il vous reste ${numLife} tentatives\n`
  //     );
  //   } else {
  //     process.stdout.write("Vous avez gagné!\n");
  //   }

  switch (guessNum) {
    case guessNum > 100:
      process.stdout.write(
        `Merci de saisir un nombre entre 1 et 100! Il vous reste ${numLife} tentatives\n`
      );
      break;
    case guessNum > random:
      numLife--;
      process.stdout.write(
        `Vous chauffez, le nombre est plus petit! Il vous reste ${numLife} tentatives\n`
      );
      break;
    case guessNum < random:
      numLife--;
      process.stdout.write(
        `Vous chauffez, le nombre est plus grand! Il vous reste ${numLife} tentatives\n`
      );
      break;
    case guessNum === random:
      process.stdout.write("Vous avez gagné!\n");
      process.exit();
     
    default:
      process.stdout.write(
        `Vous avez perdu! Le nombre à deviner était ${random}\n`
      );
      process.exit()
      break;
  }
});
