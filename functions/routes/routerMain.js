const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.set('Cache-control', 'public, max-age=300, s-maxage=600');
    res.render('home.hbs', {title: 'Intergalactic Airlines'});
});

router.get('/about', (req, res, next) => {
    res.set('Cache-control', 'public, max-age=300, s-maxage=600');
    res.render('about.hbs', {title: 'About IGAIR'});
});

router.get('/structure', (req, res, next) => {
    res.set('Cache-control', 'public, max-age=300, s-maxage=600');
    res.render('structure.hbs', {title: 'IGAIR Structure'});
});

router.get('/store', (req, res, next) => {
    res.set('Cache-control', 'public, max-age=300, s-maxage=600');
    res.render('store.hbs', {title: 'IGAIR Store'});
});

router.get('404', (req, res, next) => {
    res.set('Cache-Control', 'public, max-age=300, s-maxage=3600');
    res.render('404.hbs');
});

module.exports = router;