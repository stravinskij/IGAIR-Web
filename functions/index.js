const functions = require('firebase-functions');
const firebase = require('firebase-admin');
const express = require('express');
const path = require('path');
var exphbs = require('express-handlebars')
var hbs = exphbs.create({
    layoutsDir: path.join(__dirname, "views/layouts"),
    partialsDir: path.join(__dirname, "views/partials"),
    defaultLayout: 'layout',
    extname: 'hbs'
});

/* Routers */
const mainRouter = require("./routes/routerMain");
const externalRouter = require("./routes/externalRouter");
const accountRouter = require("./routes/routerUserAccount");
const newsRouter = require("./routes/routerNews");

const firebaseApp = firebase.initializeApp(functions.config().firebase);
const app = express();

app.disable("x-powered-by"); // Security best practices

// configure Routers
app.use('/', mainRouter);
app.use('/ext', externalRouter);
app.use('/news', newsRouter);
app.use('/user', accountRouter);

app.engine('hbs', hbs.engine);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

exports.app = functions.https.onRequest(app);
