const mysql = require('mysql')
const http = require('http')
const urlModule = require('url')
const fs = require('fs')

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Admin@9615'
})

con.connect()

con.query("USE CUSTOMERDB")


const server = http.createServer((req, res) => {
    const url = urlModule.parse(req.url, true)
    console.log(url.pathname)
    console.log(req.method)
    if(req.url == "/"){
        fs.readFile('index.html', (err, data)=>{
            if(err){
                res.writeHead(400, {'Content-type':'text/html'})
                res.write("Something went wrong")
                res.end()
                return
            } 

            res.writeHead(200, {'Content-type':'text/html'})
            res.write(data)
            res.end()
        })
    }
    else if (url.pathname == "/customers" && req.method == "GET") {
        con.query("SELECT * FROM CUSTOMER", (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-type': 'text/html' })
                res.write("Error while processing request")
                res.end()
                return
            }

            //Successfully got the data
            const customers = data.map((item) => (
                {
                    id: item.id,
                    name: item.cust_name,
                    age: item.age
                }
            ))
            res.writeHead(200, { 'Content-type': 'text/json', 'Access-Control-Allow-Origin': '*' })
            res.write(JSON.stringify(customers))
            res.end()
        })
    } else if (url.pathname.includes("/customers") && req.method == "DELETE") {
        const queryObject = url.query
        console.log(`Request for delete : ${queryObject.id}`)
        if (!('id' in queryObject)) {
            res.writeHead(400, { 'Content-type': 'text/json' })
            res.write(JSON.stringify({
                message: 'Invalid request: Query parameter id not passed'
            }))
            res.end()
        } else {
            con.query(`DELETE FROM CUSTOMER WHERE id = ${queryObject.id}`, (err, data) => {
                if (err) {
                    res.writeHead(400, { 'Content-type': 'text/json' })
                    res.write(JSON.stringify({
                        message: 'Something went wrong while deleting item'
                    }))
                    return
                }
                console.log(`Customer deleted : ${data}`)

                con.query(`SELECT * FROM CUSTOMER`, (err, data) => {
                    if (err) {
                        res.writeHead(400, { 'Content-type': 'text/json' })
                        res.write(JSON.stringify({
                            message: 'Something went wrong while fetching list'
                        }))
                        res.end()
                        return
                    }
                    res.writeHead(200, { 'Content-type': 'text/json' })
                    const customers = data.map(item =>(
                        {
                            id: item.id,
                            name: item.cust_name,
                            age: item.age
                        }
                    ))
                    res.write(JSON.stringify(customers))
                    res.end()
                })
            })

        }
    }
})

server.listen(8888, () => {
    console.log("Server listening at port 8888")
})

console.log("Database done")