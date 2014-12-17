var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Nerdique' });
});

router.get('/:socks', function(req,res){
  res.render(req.params.socks, {title: 'Nerdique'});
});

module.exports = router;