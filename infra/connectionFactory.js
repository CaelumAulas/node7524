const mysql = require('mysql')

module.exports = function () {
  const connection = mysql.createConnection({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST
  })

  return connection
}    
