const mysql = require('mysql')

const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Admin@9615'
})

con.connect((err)=>{
    if(err){
        console.log(err)
        return
    }

    con.query("DROP DATABASE IF EXISTS QUESTION10")
    con.query("CREATE DATABASE QUESTION10")
    con.query("USE QUESTION10")
    con.query("CREATE TABLE STUDENT(id integer primary key, name varchar(80), age integer)")

    const insertQuery = "INSERT INTO STUDENT(id, name, age) VALUES (1, 'Ismail', 23), (2, 'Arbaaz', 24), (3, 'Asif', 20)"
    con.query(insertQuery, (err, result)=>{
        if(err){
            console.log(err)
            return
        }
        console.log(result)
    })
})