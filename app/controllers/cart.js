var Cart=require('../services/cart');
module.exports=function(req,res){
	if(!req.body.hasOwnProperty('item')){
		var err={
			status:422,
			error:"parameter required"
		}
		res.send(err);
		return;
	}
	Cart.addCart(req.body.item,(err, products) => {
		if(err){
		
			res.send("Error");
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
