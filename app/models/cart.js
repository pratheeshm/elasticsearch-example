var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var productSchema=new Schema({
    productID:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    }
},{ versionKey: false });
const Cart=module.exports=mongoose.model("Model",productSchema,"cart");