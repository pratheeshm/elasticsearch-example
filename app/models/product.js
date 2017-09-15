var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var productSchema=new Schema({
    productID:{
        type:Number
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

const Products = module.exports=mongoose.model("products",productSchema);





