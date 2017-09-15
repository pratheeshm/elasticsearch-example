var product=require('../controllers/product');
var cart=require('../controllers/cart');
module.exports=function(app){
app.get('/products',product);
app.post('/cart',cart);
}