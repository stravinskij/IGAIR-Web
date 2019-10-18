const functions = require('firebase-functions');
const firebase = require('firebase-admin');
const express = require('express');
const engines = require('consolidate');
/* Routers */
const mainRouter = require("./routes/routerMain");

const firebaseApp = firebase.initializeApp(functions.config().firebase);


const app = express();
app.disable("x-powered-by"); // Security best practices

// configure Routers
app.use("/", mainRouter.router);

app.engine('hbs', engines.handlebars);
app.set('views', './views');
app.set('view engine', 'hbs');

exports.app = functions.https.onRequest(app);
