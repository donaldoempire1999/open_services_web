var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/service', function(req, res, next) {
  res.render('service', { title: 'Express' });
});


router.get('/profile', function(req, res, next) {
  res.render('profile', { title: 'Express' });
});


router.get('/registration', function(req, res, next) {
  res.render('registration', { title: 'Express' });
});

router.get('/team', function(req, res, next) {
  res.render('team', { title: 'Express' });
});


router.get('/about', function(req, res, next) {
  res.render('about');
});

module.exports = router;
