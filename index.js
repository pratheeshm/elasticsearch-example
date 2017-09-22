var express=require('express');
var bodyParser = require('body-parser');
var env=require('./config/development/env/index');
var routes=require('./routes/index');
var app=express();
app.use(bodyParser.json());
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
res.header("Access-Control-Allow-Headers", "origin, content-type, accept, authorization");
next();})
routes(app);
require('./services/connect');
app.listen(env.port);
