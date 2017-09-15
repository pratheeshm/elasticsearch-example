var Products=require('../services/product')
module.exports=function(req,res){
	minPrice=parseInt(req.query.min_price)|0;
	maxPrice=parseInt(req.query.max_price)|1000000;
	limit=parseInt(req.query.limit)|0;
		Products.getProducts(minPrice,maxPrice,limit,(err, products) => {
			if(err){
				res.send("error");
			}
			var result={
				status:200,
				total:products.length,
				result:products
		 	}	
		
			res.json(result);
		});
	}
