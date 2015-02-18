
var express = require('express');
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended: false});
var router = express.Router();
var models = require('../models');

/*  users listing. */
router

    .get('/', function(request, response){
        response.send('this would be a grand list of users');
    })

    .get('/add', function(request,response){
        response.render('register', {
            title: 'Nerdique'
        });
    })

    .post('/add', parseUrlencoded, function(request, response) {
      var newUser = request.body;
      models.User.create({username: newUser.username}).success(function(user){
        response.send('added ' + user.username + ' to the database')});
      })


    .get('/:name', function(request, response){
      response.send('Show the page for a user! If they exist. Otherwise, send an error. Code to come later.')
    });

module.exports = router;
