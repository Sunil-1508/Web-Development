import mongoose from 'mongoose'
import dotenv from 'dotenv';
dotenv.config();

const DB = process.env.DB_URL;

mongoose.connect(DB).then(()=>console.log("Data base connected"))
.catch(err => console.log(err))