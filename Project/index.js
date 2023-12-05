const os = require("os");
require("dotenv").config();

console.log(os.homedir());
console.log(process.env.API_STRIP);
// console.log(process.env.NODE_ENV);

// const pizzas = [
//   {
//     name: "4 fromages",
//     price: 10
//   },
//   {
//     name: "canibale",
//     price: 12
//   }
// ];

// console.log('quelle pizza voulez vous?');

// process.stdin.on("data", (chunk) => {
// récupère le flux et le converti en chaine de caractères, puis transforme le texte en majuscule
//   const answer = chunk.toString().trim().toLowerCase();

//   const pizzaFilter = pizzas.filter((item) => item.name === answer)
//   console.log(`Price : ${pizzaFilter[0].price} €`);

// });

// process.stdout.write('yo \n')
// process.stderr.write('erreur \n')

console.log("Quel est votre age?");

process.stdin.on("data", (chunk) => {
  const age = chunk.toString();

  Number(age) >= 18
    ? process.stdout.write("Vous pouvez conduire\n")
    : process.stderr.write("Vous ne pouvez pas conduire\n");
});


