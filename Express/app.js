// Importe le module 'http-errors' pour gérer les erreurs HTTP facilement.
const createError = require('http-errors');

// Importe Express.js, un framework pour créer des applications web en Node.js.
const express = require('express');

// Importe le module 'path' pour travailler avec les chemins de fichiers et répertoires.
const path = require('path');

// Importe 'cookie-parser' pour analyser les cookies des requêtes HTTP.
const cookieParser = require('cookie-parser');

// Importe 'morgan', un middleware de journalisation des requêtes HTTP.
const logger = require('morgan');

// Crée une instance de l'application Express.
const app = express();

// view engine setup
// Définit le dossier contenant les templates de vues.
app.set('views', path.join(__dirname, 'views'));

// Utilise EJS comme moteur de template.
app.set('view engine', 'ejs');

// Utilise Morgan pour journaliser les requêtes en mode 'développement'.
app.use(logger('dev'));

// Permet à Express de reconnaître les requêtes entrantes comme des objets JSON.
app.use(express.json());

// Permet à Express de reconnaître les requêtes entrantes comme des chaînes ou tableaux.
app.use(express.urlencoded({ extended: false }));

// Active le middleware 'cookie-parser' pour analyser les cookies des requêtes.
app.use(cookieParser());

// Sert les fichiers statiques (comme CSS, JS, images) dans le dossier 'public'.
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res)=>{
res.render('home', {title: 'My Title'})

})

module.exports = app;
