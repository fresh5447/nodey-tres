var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.get('/siginin', function(req, res){
	res.render('siginin');
});

module.exports = router;
