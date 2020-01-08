const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.redirect('/')
});

router.get('/org', function(req, res, next) {
    res.redirect("https://robertsspaceindustries.com/orgs/IGAIR");
});

router.get('/discord', function(req,res,next) {
    res.redirect("https://discord.gg/zRyvbAy");
});

router.get('/spectrum', function(req,res,next) {
    res.redirect("https://robertsspaceindustries.com/spectrum/community/IGAIR");
});