const Cart=require('../models/cart');

module.exports.addCart = function(product, callback){
    Cart.find({productID:product.productID},(err,result)=>{
        if(err){
            res.send("error in find")
        }
        if(result.length!=0){
            console.log("update===>");
            Cart.update({productID:product.productID},{quantity:product.quantity},callback);
        }
        else if(result.length==0){
            console.log("create===>");

        Cart.create(product,callback);
        }
    });
}