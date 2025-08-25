const mysql = require('mysql2');
const { connected } = require('process');

//create a connection
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'sqldb'
})

connection.connect((err)=>{
    if(err) throw err;
    console.log('Connected to MySQL!')
})

const insertQuery = `INSERT INTO users(name, email) VALUES(?,?)`
connection.query(insertQuery,['John','john@example.com'],(err,result)=>{
    if(err) throw err;
    console.log('User inserted: ', result.insertId)
})

connection.query('SELECT * FROM users',(err,rows)=>{
    if(err) throw err;
    console.log('Users:',rows)
})
connection.end();