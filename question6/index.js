const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    const resourceArray = req.url.split("/")
    const name = resourceArray[resourceArray.length - 1]
    const resource = fs.createReadStream(name)

    resource.on('open', () => {
        res.writeHead(200, {'Content-dispositon':`attachment;${name}`})
        const result = resource.pipe(res)
        result.on('finish', () => {
            res.end()
        })
    })

    resource.on('error', (err)=>{
        res.writeHead(404)
        res.end()
    })
})

server.listen(8888, () => {
    console.log(`server is listening on port 8888`)
})