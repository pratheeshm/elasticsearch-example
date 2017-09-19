var Cart=require('../services/cart');
var error={
	status:422,
	error:"parameter required"
}
module.exports=function(req,res){
	res.header("Access-Control-Allow-Origin","*");
	
	if(!req.body.hasOwnProperty('item')){
		
		res.send(error);
		return;
	}
	Cart.addCart(req.body.item,(err, products) => {
		if(err){
			res.send(error);
			return;
		}
		var result={
			status:200,
			total:1,
			result:{
				name:products.name,
				quantity:products.quantity,
				price:products.price,
				productID:products.productID
				}
		}	
	
		res.json(result);
	});
}
