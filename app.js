const express = require('express')
const path = require('path')

const public = path.join(__dirname,'public')
const app = express()

app.get('/',(req,res)=>{
    res.sendFile(path.join(public,'index.html'))
})

//app.listen(3000,()=>console.log("List on port 3000"))