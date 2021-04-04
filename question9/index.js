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

    con.query("DROP DATABASE IF EXISTS QUESTION9")
    con.query("CREATE DATABASE QUESTION9")
    con.query("USE QUESTION9")
    con.query("CREATE TABLE CUSTOMER(id integer primary key, name varchar(80), address varchar(100))")

    const insertQuery = "INSERT INTO CUSTOMER(id, name, address) VALUES (1, 'Ismail', 'Gagan Apartment, Flat no 5., Bhairav Nagar, Pune -15'), (2, 'Arbaaz', 'S/230, Keshav Nagari, Viman Nagar, Pune -15'), (3, 'Asif', '438, Fashion Street, Camp, Pune -1')"
    con.query(insertQuery, (err, result)=>{
        if(err){
            console.log(err)
            return
        }
    })
    const selectQuery = "SELECT * FROM CUSTOMER";
    con.query(selectQuery, (err, result)=>{
        if(err){
            console.log(err)
            return
        }
        console.log(result)
    })
})