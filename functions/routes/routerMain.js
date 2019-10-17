var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('main.hbs');
});

router.get('404', function(req, res, next) {
    res.set('Cache-Control', 'public, max-age=300, s-maxage=3600');
    res.render('404.hbs');
});

router.get('news', function(req, res, next) {
    res.render('news.hbs', {newsArticleList});
});

router.get('news/:id', function(req, res, next) {
    res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
    res.render('newsArticle.hbs', {articleTitle, articleContent, commentObject});
});
