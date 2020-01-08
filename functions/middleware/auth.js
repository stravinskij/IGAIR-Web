const functions = require('firebase-functions');
const firebase = require('firebase-admin');

//FIXME:: sample usage of middleware; needs actual wiring to passport
module.exports = function(req, res, next) {
    if (!req.session) {
        res.status(401).send('unauthorized');
    } else {
        next();
    }
}
