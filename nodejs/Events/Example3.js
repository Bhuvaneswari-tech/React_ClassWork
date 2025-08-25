const EventEmitter = require('events')
const myEmitter = new EventEmitter()

const greetBirthday = (name, newAge) =>{
    console.log(`Happy Birthday ${name}, You are now ${newAge}!`)
}

myEmitter.on('birthdayEvent',greetBirthday)
myEmitter.emit('birthdayEvent','John',24)