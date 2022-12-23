const {MySqlConnection} = require('mysqlconnector')

const connection = new MySqlConnection({
  hostname: "containers-us-west-176.railway.applocalhost",
  username: "root",
  password: "MH3JQfAuj3RVqLJK4gix",
  port: 7843,
}); 

const get = async () => {
  connection.connectAsync().then(() => { 
        
    connection.queryAsync('SELECT * FROM tasks').then((results) => {
    
        results.forEach(user => { console.log(user); });
        
        connection.closeAsync().then(() => { console.log('connection closed'); })
      });
  });
}


module.exports = {get}
