var students=require('../services/student')
module.exports=function(req,res){
	var arr=[];
	
		students.getStudents((err,data,status) => {
			if(err){
				res.send("error");
				return;
			}
			data.hits.hits.map((student)=>{
				arr.push(student._source);
			});
				var response={
					status:200,
					total:arr.length,
					result:arr
				}
			res.json(response);
		});
	}
