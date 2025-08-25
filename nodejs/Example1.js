// console.log('Directory: ',__dirname)
// console.log('FileName: ',__filename)

// global.myVar = 'Hello World'
// console.log(myVar)

//Primitive Types in Node.js

//String
let name="Node js"
console.log("String Value: ",name, "Type: ", typeof name)

//Number
let version = 18
console.log("Number: ", version, "Type: ", typeof version)

//Boolean
let isServerRunning = true
console.log("Boolean value: ", isServerRunning, "Type: ", typeof isServerRunning)

//undefined
let notAssigned;
console.log("Undefined value: ", notAssigned, "Type: ", typeof notAssigned)

//null
let emptyValue = null
console.log("Null Value: ", emptyValue, "Type: ", typeof emptyValue)

//Symbol (unique value)
let sym = Symbol("id")
console.log("Symbol value: ", sym, "Type: ", typeof sym)

//RegExp
let pattern = /nodejs/i
console.log("RegExp Test: ", pattern.test("I love NodeJS"))
console.log("Type of RegExp: ", typeof pattern)