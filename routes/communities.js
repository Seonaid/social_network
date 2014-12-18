/**
 * Created by seonaid on 14-12-18.
 */

var express = require('express');
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended: false});
var router = express.Router();
var models = require('../models');

/*  communities listing. */

router
 /*   .get('/communities', function(req, res){
        response.render('communities');
        console.log('From the communities route file');
    }) */

    .post('/create', parseUrlencoded, function(request, response) {
        var newCommunity = request.body;
        models.Community.create({
            community_name: newCommunity.community_name,
            description: newCommunity.description,
            featured_image: newCommunity.featured_image
        }).success(function(community){
            response.send('added ' + community.community_name + ' to the database')});
    });

module.exports = router;