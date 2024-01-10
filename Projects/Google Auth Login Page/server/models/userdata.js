import mongoose from 'mongoose'

const User = new mongoose.Schema({
    googleId : String,
    name : String,
    email : String,
    image : String
}, {timestamps:true});

export  default mongoose.model('users',User);