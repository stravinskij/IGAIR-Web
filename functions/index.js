const functions = require('firebase-functions');
const firebase = require('firebase-admin');
const express = require('express');
const engines = require('consolidate');
/* Routers */
import * as mainRouter from "./routers/routerMain";
import * as userRouter from "./routers/routerUsers";
import * as forumRouter from "./routers/routerForums";

const firebaseApp = firebase.initializeApp(functions.config().firebase);


const app = express();
app.disable("x-powered-by"); // Security best practices

// configure Routers
app.use("/", mainRouter.router);
app.use("/users", userRouter.router);
app.use("/forum", forumRouter.router);

app.engine('hbs', engines.handlebars);
app.set('views', './views');
app.set('view engine', 'hbs');

exports.app = functions.https.onRequest(app);
