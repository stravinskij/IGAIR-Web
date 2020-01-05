const express = require('express');
const router = express.Router();

router.get('/news', (req, res, next) => {
    res.set('Cache-control', 'public, max-age=300, s-maxage=600');
    res.render('news.hbs', {newsArticleList});
});

router.get('news/:id', (req, res, next) => {
    res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
    res.render('newsArticle.hbs', {articleTitle, articleContent, commentObject});
});

router.get('news/:id/edit', (req, res, next) => {
    // TODO: check to see if permissions to edit are OK first
    res.render('newsArticleEditor.hbs', {articleTitle, articleContent});
});

// router.post('news/:id/edit', (req, res, next) => {
//     // TODO: Check to see if permissions to edit are OK first
// });

module.exports = router;