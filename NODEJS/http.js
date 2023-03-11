const http = require('http');

const server = http.createServer((req, res) => {
    // console.log(req)
    // res.write('Welcome to the webpage');
    // res.end()
    if (req.url === '/') {
        res.end('Welcome to the home page')
    }
    if (req.url === '/about') {
        res.end('This is the about section')
    }
    res.end(`
    <h1>Sorry!</h1>
    <p> We cannot find the resource you are looking for </p>
    <a href='/'> back to home page </a>
    `)
})

server.listen(5000);