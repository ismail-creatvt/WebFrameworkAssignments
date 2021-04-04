const mysql = require('mysql')
const http = require('http')

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

    con.query("USE STUDENTDB")

    const server = http.createServer((req, res)=>{
        if(req.url == "/"){
            
        }
    })

    server.listen(8888)
})

console.log("Database done")