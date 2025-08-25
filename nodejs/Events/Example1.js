const EventEmitter = require('events')
const myEmitter = new EventEmitter()

const welcomeUser = () =>{
    console.log('Hi There, Welcome to the server!')
}

myEmitter.on('userJoined', welcomeUser)
myEmitter.emit('userJoined')