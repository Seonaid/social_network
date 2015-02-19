/**
 * Created by seonaid on 15-02-19.
 */


var models = require('../models');
var express = require('express');
var router = express.Router();


router.get('/communities', function(request, response) {
    console.log('in api communities route');
        models.Community.findAll({ where: { public: true, adult_content: false }}
            ).then(function(communities){
            console.log('returning list of public communities');
            response.statusCode = 200;
            return response.json(communities);
        });
});

module.exports = router;
