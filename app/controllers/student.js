var students=require('../services/student')
var arr=[];
module.exports=function(req,res){
		students.getStudents((err,data,status) => {
			if(err){
				res.send("error");
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
