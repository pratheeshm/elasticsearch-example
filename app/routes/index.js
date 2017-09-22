var student=require('../controllers/student');
var studentUpdate=require('../controllers/studentUpdate');
module.exports=function(app){
app.get('/students',student);
app.put('/students',studentUpdate);
}