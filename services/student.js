const client = require('./connect')

module.exports.getStudents = (callback) => {
    client.search({
        index:"students",
        body:{
            query:{
                regexp:{
                    name:".*r.*"
                }
            }
        }
      },callback);
}

module.exports.updateStudent=(callback)=>{
    client.updateByQuery({
        index:"students",
        type:"student",
        body: {
            query: 
            { 
                match: 
                { 
                    name:"rahul"
                 } 
            },
            script:{"inline":"ctx._source.age=20"}
            
           }
    },callback);

}
 