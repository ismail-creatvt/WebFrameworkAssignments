const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res)=>{
    fs.readFile('index.html', (err, data)=>{
        if(err){
            res.writeHead(404, "File not found")
            res.end()
        } else{
            res.writeHead(200, {'Content-type':'text/html'})
            res.write(data)
            res.end()
        }
    })
})

server.listen(8888, ()=>{
    console.log("Server is listening at port 8888")
})