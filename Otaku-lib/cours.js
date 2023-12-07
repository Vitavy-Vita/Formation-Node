const fs = require('fs')
const http = require('http')
// `readFileSync` permet de lire un fichier tous extensions
// const textIn = fs.readFileSync('./text.txt', 'utf-8')

// console.log('synchone',textIn);


/* -------------------------------------------------------------------------- */
/*                                  SYNCHRONE                                  */
/* -------------------------------------------------------------------------- */
// ecrire un fichier:
// const textOut = `John Doe says ${textIn}`

/* 
`writeFileSync` permet de créer un fichier en ajoutant les données
qu'on veut dedans

par exemple: on veux un fichier nommé `textOut.txt` contenant une phrase
"John Doe says Hello world"

fs.writeFileSync(chemin_du_fichier_a_créer, data, encodage)
*/
// fs.writeFileSync('./textOut.txt', textOut, 'utf-8')

/* -------------------------------------------------------------------------- */
/*                                 ASYNCHRONE                                 */
/* -------------------------------------------------------------------------- */

// fs.readFile('text.txt', 'utf-8', (err,data) =>{
//     if(err) console.log(err);
//     console.log('asynchone',data);
// })



/* -------------------------------------------------------------------------- */
/*                               CREATE A SERVER                              */
/* -------------------------------------------------------------------------- */

const server = http.createServer()
// Creer un server au port 3000 => localhost:3000
// server.listen(3000, console.log('App running on port 3000'))

// // attend une requète
// server.on('request', (request, response) =>{

//         response.writeHead(200, 'ok')
//     response.end('hello world')
// })