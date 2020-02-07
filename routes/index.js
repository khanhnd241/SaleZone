global.router = require('express').Router();
var router = global.router;
router = require('./admin/users');
router = require('./customer');
module.exports = router;
router.get('/', (req, res) => {
    res.render('index', { title: 'Web admin' });
  });
  router.get('/create', (req, res) => {
    res.render('create', { title: 'Create a new user' });
  });