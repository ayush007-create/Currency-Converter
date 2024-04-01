const http = require('http')
const fs = require('fs')
const main = fs.readFileSync('./index.html')

const hostname = '127.0.0.1'
const port = 80;

const server = http.createServer((req,res)=>{
    res.statusCode = 200
    res.setHeader('content-type','text/html')
    res.end(main)
})
server.listen(port,hostname,()=>{
    console.log(`server running at http://${hostname}:${port}/`)
})