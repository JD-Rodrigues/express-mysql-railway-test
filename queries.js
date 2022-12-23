const mysql = require('mysql2/promise')

const connection = async () => {
  const connection = await mysql.createConnection("mysql://root:MH3JQfAuj3RVqLJK4gix@containers-us-west-176.railway.app:7843/railway"); 
  console.log('Conectou ao mysql')
  return connection
}

const get = async () => {
  const conn = await connection()
  const data = await conn.query('SELECT * FROM tasks')
  return data[0]  
}

 
 


module.exports = {get}

