import express from 'express'
import cors from 'cors'
import connectToDb from './config/dbConfig.js';
import signup from './routes/SignUp.js';
import login from './routes/Login.js';
import addattendance from './routes/Attendance.js';
import getAtten from './routes/GetAttendance.js';
import dotenv from 'dotenv';
  dotenv.config();

const app=express();
app.use(express.json());
app.use(cors());

await connectToDb();
app.use('/',signup)
app.use('/',addattendance)
app.use('/',login)
app.use('/',getAtten)
app.listen(3000,()=>{
    console.log("start")
})