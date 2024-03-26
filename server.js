import express from 'express';
import dotenv from 'dotenv'
import { Connection } from './database/db.js';
import Defaultdata from './Default.js';
import router from './routes/route.js';


import cors from 'cors'
import bodyParser from 'body-parser'


const app = express()
dotenv.config()

app.use(cors())
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))

app.use('/',router)
const PORT = process.env.PORT || 8000
const URL = `mongodb+srv://aki748434:${passward}@cluster0.iwjlix8.mongodb.net/?retryWrites=true&w=majority`




const userName = process.env.userName;
const passward = process.env.passward

app.get('/',(req,res)=>{
    res.end("hello node")
})

Connection(URL);

app.listen(8000,(req,res)=>{
    console.log("server started")
})

Defaultdata();