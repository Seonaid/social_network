/**
 * Created by seonaid on 14-12-18.
 */

var express = require('express');
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended: false});
var router = express.Router();
var models = require('../models');
var expressValidator = require('express-validator');
var multer = require('multer');

/*  communities listing. */

router.use(expressValidator());
router.use(multer({dest: 'public/images/'}));

router
 /*   .get('/communities', function(req, res){
        response.render('communities');
        console.log('From the communities route file');
    }) */


//  Here I need to figure out how to make a readable name for the uploaded file and put it in the database.
/* request.files looks like this:
 { featured_image:
 { fieldname: 'featured_image',
 originalname: 'IMG_0452.JPG',
 name: '661beb53327de00d88cdf9c57abf8e43.JPG',
 encoding: '7bit',
 mimetype: 'image/jpeg',
 path: 'public/images/661beb53327de00d88cdf9c57abf8e43.JPG',
 extension: 'JPG',
 size: 941546,
 truncated: false,
 buffer: null } }
     */

    .post('/create', parseUrlencoded, multer(), validatePhoto, function(request, response) {
        console.log(request.files);
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