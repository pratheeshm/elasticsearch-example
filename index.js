var express=require('express');
var bodyParser = require('body-parser');
var server=require('./app/config/server');
var routes=require('./app/client/routes/index');
var app=express();
app.use(bodyParser.json());
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
res.header("Access-Control-Allow-Headers", "origin, content-type, accept, authorization");
next();})
routes(app);
require('./app/config/connect.js');
app.listen(server.port);
