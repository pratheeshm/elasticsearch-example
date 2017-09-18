var product=require('../controllers/product');
var cart=require('../controllers/cart');
module.exports=function(app){
app.get('/productListing',product);
app.post('/add_to_cart',cart);
}