const express = require('express');
const router = express.Router();

router.get('/', function(req,res,next) {

});

router.get('/:category', function(req,res,next) {
    // Check viewership permissions

});

router.get('/:category/:thread', function(req,res,next) {
    // Check viewership permissions

});

router.get('/:category/:thread-:post', function(req,res,next) {
    // Check viewership permissions at the category level

});

module.exports = router;