const fs = require('fs')

fs.unlink('./myFolder/myFile.txt',(err)=>{
    if(err){
        console.log(err)
        return
    }
    else{
        console.log('File Deleted Successfully!')
    }
})