var http = require('http')

var server = http.createServer(function(req,res){
    console.log('Server initiated')

    res.write("<h1>Hello Browser!</h1>")
    res.write('<p>This is coming from Node.js server </p>')

    res.end()
})

server.listen(5003,()=>{
    console.log('Server is running at port 5003')
})