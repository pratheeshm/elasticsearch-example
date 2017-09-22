var elasticsearch = require('elasticsearch');
var env=require('../config/development/env/index');
var client = new elasticsearch.Client({
    host: env.url
  });
  module.exports=client;