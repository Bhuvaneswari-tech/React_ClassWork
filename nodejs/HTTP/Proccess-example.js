console.log("Process ID: ", process.pid) // Current process ID
console.log("Node Version: ", process.version) //Node.js version
console.log("Platofrm: ",process.platform)    //OS platform

//Environment variables
console.log("User HOME: ", process.env.HOME)

//Exit process after 2 seconds
setTimeout(()=>{
    console.log('Exiting process...')
    process.exit(0)
}, 2000)