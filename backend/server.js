const express=require('express')
const cors=require('cors')
const bodyParser=require('body-parser')
const connectDB = require('./database/db')
const employeeRoute=require("./Routes/employeeRoute")
require('dotenv').config()


const app=express()
app.use(cors())
connectDB()

app.use(bodyParser.json())
app.use('/api',employeeRoute)
const PORT=process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})