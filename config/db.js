import mongoose from "mongoose";

const connectDb = async()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log('mongodb connected');
    }
    catch(err){
        console.log('error: ',err);
        process.exit(1)
    }
}

export default connectDb;