import mongoose from "mongoose"

export const Connection = async (URL)=>{
    
    try {
        await mongoose.connect(URL)
        console.log("database connsected")
    } catch (error) {
        console.log('error is' , error.message)
    }
}