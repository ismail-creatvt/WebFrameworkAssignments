const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    fs.readFile("index.html", (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-type': 'text/html' })
            res.write("Something went wrong")
            res.end()
        }

        res.writeHead(200, { 'Content-type': 'text/html' })
        res.write(data)
        res.end()

    })
})

server.listen(8888, () => {
    console.log("Server is listening on port 8888")
})