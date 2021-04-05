const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    const stream = fs.createReadStream("syllabus.pdf")
    stream.on('error', (err) => {
        res.writeHead(404)
        res.end()
    })
    stream.on('open', () => {
        res.writeHead(200, { 'Content-disposition': 'attachment; filename=syllabus.pdf' })
        const result = stream.pipe(res)
        result.on('end', () => {
            res.end()
        })
    })
})

server.listen(8888, () => {
    console.log("Server listening on port 8888")
})