import express from 'express'
import * as dotenv from 'dotenv'
import routes from './routes/routes'
import mongoose,{Error} from 'mongoose'
import {urlencoded,json} from 'body-parser'






dotenv.config()




const app = express()

app.use(express.json())

app.use(urlencoded({extended:true}))


const PORT = process.env.PORT

const mongoString = process.env.DATABASE_URL

mongoose.connect(mongoString as string)


const database = mongoose.connection


app.use(express.json())


database.on('error',(error:Error)=>{
    console.log("error is "+error)
})

database.once('connected', () => {
    console.log('Database has been connected');
  });






app.use('/api',routes)

app.listen(PORT,()=>{
    console.log("typescript is running on port=== @@@ === "+PORT)
})