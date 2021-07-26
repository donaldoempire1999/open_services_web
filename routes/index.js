var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', { title: 'Express' });
});


router.get('/service', function(req, res, next) {
  res.render('pages/service', { title: 'Express' });
});


router.get('/profile', function(req, res, next) {
  res.render('pages/profile', { title: 'Express' });
});


router.get('/registration', function(req, res, next) {
  res.render('pages/registration', { title: 'Express' });
});

router.get('/team', function(req, res, next) {
  res.render('pages/team', { title: 'Express' });
});


router.get('/about', function(req, res, next) {
  res.render('pages/about');
});

module.exports = router;
