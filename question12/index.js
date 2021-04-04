const http = require('http');

const server = http.createServer((request, res) => {
    if(request.url == "/"){
        res.writeHead(200, {'Content-type':'text/html'})
        res.write("<h1>Home</h1>")
        res.write("<p style=\"font-size:18px;\">As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. In the following \"hello world\" example, many connections can be handled concurrently. Upon each connection, the callback is fired, but if there is no work to be done, Node.js will sleep.</p>")
        res.end()
    } else if(request.url == "/creator"){
        res.writeHead(200, {'Content-type':'text/html'})
        res.write("<h1>About the Creator</h1>")
        res.write("<p style=\"font-size:18px;\">Ryan Dahl (born 1981) is an American software engineer and the original developer of the Node.js JavaScript runtime and the Deno JavaScript and TypeScript runtime.</p>")
        res.end()
    } else if(request.url == "/gettingstarted"){
        res.writeHead(200, {'Content-type':'text/html'})
        res.write("<h1>Getting Started</h1>")
        res.write(`<p style="font-size:18px;">Once we have installed Node.js, let's build our first web server. Create a file named app.js containing the following contents:</p>
        <div style="background-color:#292929; color:#fff; padding:20px; width:400px;">
        <code><br/>const http = require('http');

        <br/>const hostname = '127.0.0.1';
        <br/>const port = 3000;
        
        <br/>const server = http.createServer((req, res) => {
                        <br/>res.statusCode = 200;
                        <br/>res.setHeader('Content-Type', 'text/plain');
                        <br/>res.end('Hello World');
        <br/>});
        
        <br/>server.listen(port, hostname, () => {
            <br/>console.log(\`Server running at http://\${hostname}:\${port}/\`);
        <br/>});<code></div>`)
        res.end()
    } else{
        res.writeHead(400, {'Content-type':'text/html'})
        res.write("<h1>Error</h1>")
        res.write("<p>Nothing to show here!</p>")
        res.end()
    }
});

server.listen(8888, ()=>{
    console.log("Server is listening at port 8888")
});