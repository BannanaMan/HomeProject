var mysql = require('mysql');
var conn = mysql.createConnection({
  host: '10.30.1.45', // Replace with your host name
  user: 'spravce',      // Replace with your database username
  password: '48psum',      // Replace with your database password
  database: 'predavaky_db' // // Replace with your database Name
}); 
conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});
module.exports = conn;