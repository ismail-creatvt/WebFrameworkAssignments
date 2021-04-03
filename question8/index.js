const mysql = require('mysql')
const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Admin@9615'
})

con.connect((err)=>{
    if(err) {
        console.log(err)
        return
    }
    con.query("DROP DATABASE IF EXISTS QUESTION8")
    con.query("CREATE DATABASE QUESTION8")
    con.query("USE QUESTION8")
    con.query("CREATE TABLE Student(id integer primary key, name varchar(50))")
    console.log("Database created!!")
})