import express from 'express';
import dotenv from 'dotenv'
import connectDb from './config/db.js';
import userRoute from './routes/userRoute.js'
import orderRoute from './routes/orderRoute.js'
import productRoute from './routes/productRoute.js'

dotenv.config()
connectDb()

const app = express()
app.use(express.json())

app.use('/api/users', userRoute)
app.use('/api/product', productRoute)
app.use('/api/order',orderRoute)

app.get('/', (req,res )=>{
    console.log('working');
    
})

const port = process.env.PORT || 3000;
app.listen(port)