var Cart=require('../services/cart');
module.exports=function(req,res){
	// if(!req.body.length){
	// 	var err={
	// 		status:422,
	// 		error:"parameter required"
	// 	}
	// 	res.send(err);
	// }
	Cart.addCart(req.body.item,(err, products) => {
		if(err){
		
			res.send("Error");
		}
		console.log(products)
		var result={
			status:200,
			total:1,
			result:products
		}	
	
		res.json(result);
	});
}
