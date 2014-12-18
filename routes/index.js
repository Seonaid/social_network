var models = require('../models');
var express = require('express');
var router = express.Router();

/* GET home page. */
router
    .get('/', function(req, res) {
      models.User.findAll({
        include: [models.Task]
      }).then(function(users){
        res.render('index',{
          title: 'Nerdique',
          users: users
        });
      });
    })

    .get('/communities', function(req, res) {
      models.Community.findAll({
        include: [models.Alias]
      }).then(function(communities){
        res.render('communities',{
          title: 'Nerdique Communities',
          communities: communities
        });
        console.log('From the communities route in index');
      });

    })

// anything else

    .get('/:socks', function(req,res){
      res.render(req.params.socks, {title: 'Nerdique'});
    });

module.exports = router;
