const functions = require('firebase-functions');
const firebase = require('firebase-admin');

module.exports = function(req, res, next) {
    if (!req.session) {
        res.status(401).send('unauthorized');
    } else {
        next();
    }
}
