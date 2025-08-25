const fs = require('fs')

const data = '\nThis is Appending the newFile.txt'

fs.writeFile('./myFolder/myFile.txt',data,{flag:'a'},(err)=>{
    if(err){
        console.log(err)
        return
    }
    else{
        console.log('File Appended.')
    }
})