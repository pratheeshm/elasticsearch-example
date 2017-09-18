const Cart=require('../models/cart');

module.exports.addCart = function(product, callback){
    Cart.find({productID:product.productID},(err,result)=>{
        if(err){
            res.send("error in find");
            return;
        }
        if(result.length!=0){
            Cart.findOneAndUpdate({productID:product.productID},{quantity:(result[0].quantity+product.quantity)},callback);
        }
        else if(result.length==0){

        Cart.create(product,callback);
        }
    });
}