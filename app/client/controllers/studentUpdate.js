var students=require('../services/student')
module.exports=function(req,res){
		students.updateStudent((err,data,status) => {
			if(err){
				res.send(err);
				return;
			}
			console.log("callback",data);
			res.send(data);
		});
	}
