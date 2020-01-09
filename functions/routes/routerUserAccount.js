const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/', function(req, res) {
    console.log(req.session);
    res.send('Auth Area Test <pre>' + JSON.stringify(req.session, null, 2) + '</pre>');
    // req.session.destroy();
});



module.exports = router;