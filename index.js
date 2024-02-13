require('dotenv').config()
const express= require('express')
const cors=require('cors')
const router=require('./Routes/routes')
require('./DB/connection')
const rpServer= express()

rpServer.use(cors()) 

rpServer.use(express.json())
rpServer.use(router)

const PORT=3000

rpServer.listen(PORT,()=>{
    console.log('server started at port 3000');
})

rpServer.get('/',(req,res)=>{
    res.status(200).send("<h1>Project Server started</h1>")
})
