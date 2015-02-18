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

    .get('/register', function(req, res){
        res.render('register');
    })

// Handle logins
    .post('/login', function(req, res){
        var password = req.body.password;
        var redirect = req.body.redirect;
        console.log(password);
        console.log('logging in with ' + JSON.stringify(req.session));
        if(password === "I4BHIoeXobce") {
            req.session.username  = req.body.username;
            if(redirect){
                console.log("redirecting to " + redirect);
                res.render(redirect);
            } else{
                res.render('success');
            }

        } else {
            res.render('failure');
        }
    })

    .post('/register', function(req, res){
        var username = req.body.username;
        console.log('registering ' + username);
        res.render('success');
    })

// GET a page with an arbitrary name (as long as the jade file exists)

    .get('/:name', function(req,res) {
        console.log('getting ' + req.params.name);
        console.log('session is stored in ' + req.session.username);
        console.log('session id is hidden in ' + JSON.stringify(req.cookies));
        if(req.session.username) {
            res.render(req.params.name, {title: 'Nerdique'});
        } else {
            res.render('login',  {redirect: req.params.name});
        }
    });

module.exports = router;
