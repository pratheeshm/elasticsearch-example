const client = require('../../config/connect.js')

module.exports.getStudents = (callback) => {
    client.search({
        q: '*'
      },callback);
}
 