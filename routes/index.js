var express = require('express');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index');
});


router.get('/search', function(req, res, next) {
  res.render('pages/search_home');
});



router.get('/search_result', function(req, res, next) {
  res.render('pages/searchpage');
});



router.get('/profile', function(req, res, next) {
  res.render('pages/profile');
});


router.get('/registration', function(req, res, next) {
  res.render('pages/registration');
});

router.get('/team', function(req, res, next) {
  res.render('pages/team');
});


router.get('/about', function(req, res, next) {
  res.render('pages/about');
});

module.exports = router;
