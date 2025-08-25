//Blocking code - data is taking time to read input.txt
var fs = require('fs')
var data = fs.readFileSync('input.txt')

console.log(data.toString())
console.log('Program Ended')