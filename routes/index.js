global.router = require('express').Router();
var router = global.router;
router = require('./users');
router = require('./customer');
module.exports = router;
router.get('/', (req, res) => {
    res.render('index', { title: 'Web admin' });
  });