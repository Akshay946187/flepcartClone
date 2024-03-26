import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    Firstname:{
        type:String,
        required:true,
        trim:true
    },
    Lastname:{
        type:String,
        required:true,
        trim:true
    },
    Username:{
        type:String,
        required:true,
        trim:true,
        lowercase:true
    },
    Email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        unique:true
    },
    Passward:{
        type:String,
        required:true,
        trim:true
    },
    Phone:{
        type:Number,
        required:true,
        trim:true
    }
})

const User = mongoose.model('user',userSchema);

export default User ;