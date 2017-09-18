var Products=require('../services/product')
var paramMatchCheck=true;
var paramTypeCheck=true;
module.exports=function(req,res){
	Object.keys(req.query).forEach((key)=>{
		if(paramMatchCheck &&
			(key=='min_price'
			||key=='max_price'||
			key=='limit')){
			paramMatchCheck=true;
		}
		else{			
			paramMatchCheck=false;
		}
	});
	Object.keys(req.query).forEach((key)=>{
		if(paramMatchCheck&&paramTypeCheck&&!isNaN(req.query[key])){
			paramTypeCheck=true;
		}
		else{
			paramTypeCheck=false;
		}
	})
	if(!paramTypeCheck){

		var err={
			status:422,
			error:"Invalid Parameters"
		}
		paramMatchCheck=true;
		paramTypeCheck=true;
		return res.send(err);
	}
	minPrice=parseInt(req.query.min_price)||0;
	maxPrice=parseInt(req.query.max_price)||1000000;
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
