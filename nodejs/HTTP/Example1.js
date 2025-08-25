var http = require('http')

const server = http.createServer((req,res)=>{
    res.end('Hello World')
})

server.listen(1124,()=>{
    console.log('Server listening at port 1124')
})