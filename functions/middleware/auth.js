const functions = require('firebase-functions');
const firebase = require('firebase-admin');
const passport = require('passport');

//FIXME:: sample usage of middleware; needs actual wiring to passport
module.exports = function(req, res, next) {
    console.log('AUTH MiddleWare req.session', req.session);
    if (!!req.session && !!req.session.passport) {
        next();
    } else {
        res.redirect('/auth/discord');
    }
    next();
}
