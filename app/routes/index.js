var student=require('../controllers/student');
module.exports=function(app){
app.get('/students',student);
}