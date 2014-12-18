var models = require('../models');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  models.User.findAll({
    include: [models.Task]
  }).then(function(users){
    res.render('sqlize',{
      title: 'Sequelize Testing',
      users: users
    });
  });

});


router.get('/:socks', function(req,res){
  res.render(req.params.socks, {title: 'Nerdique'});
});

module.exports = router;
