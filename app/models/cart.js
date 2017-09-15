var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var productSchema=new Schema({
    productID:{
        type:String
    },
    name:{
        type:String
    },
    price:{
        type:Number
    },
    quantity:{
        type:Number
    }
},{ versionKey: false });
const Cart=module.exports=mongoose.model("Model",productSchema,"cart");