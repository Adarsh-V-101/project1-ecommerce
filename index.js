import express from 'express';
import dotenv from 'dotenv'
import helmet from 'helmet'
import cors from 'cors'
import connectDb from './config/db.js';
import userRoute from './routes/userRoute.js'

dotenv.config()
connectDb()

const app = express()

app.use(helmet())
app.use(cors())
app.use(express.json())

app.use('/api/users', userRoute)

app.get('/', (req,res )=>{
    console.log('working');
    
})

const port = process.env.PORT || 5000;
app.listen(port)