global.router = require('express').Router();
var router = global.router;
router = require('../../api/routes/admin/usersRoute');
// router = require('./api/customer');
module.exports = router;
// router.get('/', (req, res) => {
//     res.render('index', { title: 'Web admin' });
//   });
//   router.get('/create', (req, res) => {
//     res.render('create', { title: 'Create a new user' });
//   });