const http = require('http')
const fs = require('fs')
const formidable = require('formidable')
const stream = require('stream')

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        fs.readFile('index.html', (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end()
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' })
                res.write(data)
                res.end()
            }
        })
    } else if (req.url == '/fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            const file1 = files.file1
            const file2 = files.file2
            console.log(file1)
            if (!file1) {
                res.writeHead(404, { 'Content-Type': 'text/html' })
                res.write("File 1 not found")
                res.end();
            } else if (!file2) {
                res.writeHead(404, { 'Content-Type': 'text/html' })
                res.write("File 2 not found")
                res.end();
            } else if (file1.type != 'text/plain') {
                res.writeHead(404, { 'Content-Type': 'text/html' })
                res.write(`File 1 has invalid type, Doesn't support ${file1.type} type`)
                res.end();
            } else if (file2.type != 'text/plain') {
                res.writeHead(404, { 'Content-Type': 'text/html' })
                res.write(`File 2 has invalid type, Doesn't support ${file2.type} type`)
                res.end();
            } else {
                fs.readFile(file2.path, (err, data) => {
                    fs.appendFile(file1.path, data, (err) => {
                        if (err) {
                            res.writeHead(404, { 'Content-Type': 'text/html' })
                            res.write("Something went wrong")
                            res.end()
                        } else {
                            const fileToSend = fs.createReadStream(file1.path)

                            fileToSend.on('open', () => {
                                console.log(fileToSend)

                                res.writeHead(200, {
                                    'Content-disposition': `attachment; filename=${file1.name}`
                                })
                                const result = fileToSend.pipe(res)
                                result.on('finish', ()=>{
                                    res.end()
                                })
                            })
                            fileToSend.on('error', (err) => {
                                res.writeHead(404, { 'Content-Type': 'text/html' })
                                res.write("Something went wrong")
                                res.end()
                            })
                        }

                    })
                })

            }
        });
    } else {
        res.writeHead(404)
        res.end()
    }
})

server.listen(8888, () => {
    console.log("Server listening on port 8888")
})