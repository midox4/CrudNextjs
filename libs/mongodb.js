

// connection to mongodb db 

import mongoose from "mongoose"

const connectMongoDb =async ()=>{

    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("connected to mongodb successfully")
        
    } catch (error) {
        console.log("error to connect to db")
        
    }
}

export default connectMongoDb;