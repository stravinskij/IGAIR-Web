const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.set('Cache-control', 'public, max-age=300, s-maxage=600');
    res.render('');
});

router.get('/:item', function(req, res, next) {
    res.set('Cache-control', 'public, max-age=300, s-maxage=600');
});