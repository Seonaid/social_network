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
    .get('/communities', function(req, res){
        response.render('communities');
        console.log('From the communities route file');
    });

module.exports = router;