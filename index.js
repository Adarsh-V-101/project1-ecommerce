import express from 'express';
import dotenv from 'dotenv'
import connectDb from './config/db.js';
import userRoute from './routes/userRoute.js'

dotenv.config()
connectDb()

const app = express()
app.use(express.json())

app.use('/api/users', userRoute)

app.get('/', (req,res )=>{
    console.log('working');
    
})

const port = process.env.PORT || 3000;
app.listen(port)