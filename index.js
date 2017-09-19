var express=require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var database=require('./config/db');
var server=require('./config/server');
var routes=require('./app/routes/index');
var app=express();
app.use(bodyParser.json());
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
res.header("Access-Control-Allow-Headers", "origin, content-type, accept, authorization");
next();})
routes(app);
mongoose.connect(database.url);
app.listen(server.port);
