const net = require('net')

const server = net.createServer((socket)=>{
    console.log('Client connected')

    socket.write('Welcome to Node TCP Server\n')

    socket.on('data',(data)=>{
        console.log('Received from client: ', data.toString())
        socket.write('You said: ${data}')

    })

    socket.on('end',()=>{
        console.log('Client disconnected')
    })
})

server.listen(5004, ()=>{
    console.log('TCP Server running on port 5004')
})