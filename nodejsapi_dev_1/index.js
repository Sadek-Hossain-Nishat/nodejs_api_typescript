const express = require("express")
const mongoose = require("mongoose")

const routes = require("./routes/routes")

require("dotenv").config()


const app = express()

const mongoString = process.env.DATABASE_URL




app.use(express.json())

mongoose.connect(mongoString)
const database = mongoose.connection

database.on('error',(error)=>{
    console.log('error is '+error)
})

database.once('connected',()=>{
    console.log("Database has been connected")
})


app.use('/api',routes)
app.listen(3000,()=>{

    console.log(`Server Started at ${3000}`)

})

