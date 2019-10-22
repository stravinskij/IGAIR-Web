const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.set('Cache-control', 'public, max-age=300, s-maxage=600');
    res.render('home.hbs');
});

router.get('404', function(req, res, next) {
    res.set('Cache-Control', 'public, max-age=300, s-maxage=3600');
    res.render('404.hbs');
});

module.exports = router;