/**
 * Created by seonaid on 14-12-18.
 */

var express = require('express');
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended: false});
var router = express.Router();
var models = require('../models');
var expressValidator = require('express-validator');

/*  communities listing. */

router.use(expressValidator());

router
 /*   .get('/communities', function(req, res){
        response.render('communities');
        console.log('From the communities route file');
    }) */

    .post('/create', parseUrlencoded, validatePhoto, function(request, response) {
        var newCommunity = request.body;
        models.Community.create({
            community_name: newCommunity.community_name,
            description: newCommunity.description,
            featured_image: newCommunity.featured_image
        }).success(function(community){
            response.send('added ' + community.community_name + ' to the database')});
    });

function validatePhoto(req, res, next) {
    req.checkBody('community_name', 'Name cannot be blank').notEmpty();
    req.checkBody('description', 'Description cannot be blank').notEmpty();
    req.checkBody('featured_image', 'Photo cannot be empty').notEmpty();

    var errors = req.validationErrors();
    if (errors) {
        var response = { errors: [] };
        errors.forEach(function(err) {
            response.errors.push(err.msg);
        });
        res.statusCode = 400;
        return res.json(response);
    }
    return next();
};

module.exports = router;