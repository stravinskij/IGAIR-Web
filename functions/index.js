const functions = require('firebase-functions');
const firebase = require('firebase-admin');
const express = require('express');
const path = require('path');
const session = require('express-session');
const passport = require('passport');


var exphbs = require('express-handlebars')
var hbs = exphbs.create({
    layoutsDir: path.join(__dirname, "views/layouts"),
    partialsDir: path.join(__dirname, "views/partials"),
    defaultLayout: 'layout',
    extname: 'hbs'
});

/* Routers */
const mainRouter = require("./routes/routerMain");
const externalRouter = require("./routes/routerExternal");
const accountRouter = require("./routes/routerUserAccount");
const newsRouter = require("./routes/routerNews");

/* Middlewares */
const mainMiddleware = require("./middleware/main");
const authMiddleware = require("./middleware/auth");

const firebaseApp = firebase.initializeApp(functions.config().firebase);
const app = express();

app.disable("x-powered-by"); // Security best practices

//Auth Init (Assumes Profile will change navbar somehow)
app.use(session({secret: 'notYet', resave: false, saveUninitialized: true}));
//TODO:: do we wire the strategy before or after the initialize
require('./auth/discordStrategy');
app.use(passport.initialize());
app.use(passport.session());


//Main Middleware
app.use('/', mainMiddleware);

// configure Routers
app.use('/', mainRouter);
app.use('/ext', externalRouter);
app.use('/news', newsRouter);
// app.use('/user',  authMiddleware, accountRouter);
app.use('/user',  authMiddleware, accountRouter);

//Keep here or move to other file?
app.get('/auth/fail', function(req, res) {
    console.log('auth fail', res.send('AUTH FAIL AT REDIRECT'));
});
app.get('/auth/discord', passport.authenticate('discord'));
app.get('/auth/discord/callback', passport.authenticate('discord', {
    failureRedirect: '/auth/fail'
}), function(req, res) {
    console.log('callback sucessful AUTH');
    console.log(req.session);
    req.session.save(function (err) {
        console.log('SESSION SAVE ERR', err);
    })
    res.redirect('/user') // Successful auth
});


//404
app.use(function(req, res, next) {
    res.status(404).render('404.hbs');
})

//TODO:: wire error handler


//FIXME:: confirm template and view engine should be set last
app.engine('hbs', hbs.engine);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


exports.app = functions.https.onRequest(app);
