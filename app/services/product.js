const Products = require('../models/product')

module.exports.getProducts = (minPrice,maxPrice,threshold,callback) => {
    if(minPrice==0&&maxPrice==0){
        Products.find({},{ _id: 0 },callback);
        
    }
    Products.find({price:{$gte:minPrice,$lte:maxPrice}}, { _id: 0 },callback).limit(threshold);
    
   
}
 