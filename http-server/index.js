var http = require('http')

http.createServer((req,res)=>{
    // res.writeHead(200,{'content-Type':'text'})
    res.end('hello azad')
}).listen(4001)


console.log('loading');
