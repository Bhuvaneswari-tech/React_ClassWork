const os = require('os')

let currentOS = {
    name: os.type(),
    architecture: os.arch(),
    platform: os.platform(),
    release: os.release(),
    version: os.version()
}

console.log(currentOS)

console.log(`The server has been up for ${os.uptime()} seconds.`)

console.log(os.userInfo())

console.log(os.totalmem())

console.log(os.freemem())