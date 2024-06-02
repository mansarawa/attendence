import mongoose, { Schema } from "mongoose";

const attendanceSchema=new Schema({
    title:String,
    userid:String,
    username:String,
    date: { type: String, required: true } ,
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const atten=mongoose.model('atten',attendanceSchema)

export default atten