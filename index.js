'use strict';
/**
 * ELSIO CATALOG SERVER
 * Author: Bob van Luijt <bob.vanluijt@elsevier.io>
 */
var express = require('express'),
	bodyParser = require('body-parser'),
	app = express(),
	FalcorServer = require('falcor-express'),
	Router = require('falcor-router'),
	jsonGraph = require('falcor-json-graph'),
	ElsioRouter = require('falcor-ioredis');

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/model.json', FalcorServer.dataSourceRoute(function(req, res) {
    return new FalcorIoredis('redis://explorer004.timkyf.0001.euw1.cache.amazonaws.com:6379');    
}));

app.use(express.static('.'));

var server = app.listen(80, function(err) {
    if (err) {
        console.error(err);
        return;
    }
    console.log('navigate to http://localhost:80');
});
