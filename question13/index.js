const http = require('http')
const fs = require('fs')
const querystring = require('querystring')
const mysql = require('mysql')

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Admin@9615'
})

con.connect((err) => {
    if (err) {
        console.log(err)
        return
    }

    con.query("USE USER_AUTHENTICATION")
})

function checkForError(res, err) {
    if (err) {
        res.writeHead(404, { 'Content-type': 'text/html' })
        res.write("Something went wrong")
        res.end()
        return true
    }
    return false
}

const server = http.createServer((req, res) => {

    console.log(req.url)
    const loginRegex = /^[/]*\/login[/]*$/
    if (req.url == "/") {

    }
    else if (loginRegex.test(req.url)) {
        if (req.method == "GET") {
            fs.readFile('login/index.html', (err, data) => {
                if (checkForError(res, err)) return
                res.writeHead(200, { 'Content-type': 'text/html' })
                res.write(data)
                res.end()
            })
        } else if (req.method == "POST") {
            var body = ''
            req.on('data', (chunk) => {
                body += chunk

                if (body.length > 1e6) {
                    req.socket.destroy()
                }
            })

            req.on('end', () => {
                var post = querystring.parse(body)
                con.query(`SELECT * FROM USERS WHERE EMAIL='${post.email}' AND PASSWORD='${post.password}'`, (err, result) => {
                    if (err) {

                    }
                })
            })
        }
    } else if (req.url == "/register") {
        fs.readFile('register/index.html', (err, data) => {
            if (checkForError(res, err)) return
            res.writeHead(200, { 'Content-type': 'text/html' })
            res.write(data)
            res.end()
        })
    } else {
        const urlArray = req.url.split("/")
        const name = urlArray[urlArray.length - 1]
        try {
            const stream = fs.createReadStream(req.url.substr(1))

            stream.on('error', (err) => {
                console.log(err)
                res.end()
            })
            console.log(name, req.headers['accept'])
            res.writeHead(200, {
                'Content-Disposition': `inline`,
                'Content-type': req.headers.accept.split(",")[0]
            })
            const result = stream.pipe(res)
            result.on('finish', () => {
                res.end()
            })
            result.on('error', (err) => {
                console.log(err)
                res.end()
            })
        } catch (err) {
            res.writeHead(404)
            res.end()
        }
    }
})

server.listen(8888, () => {
    console.log("Server listening on port 8888")
})