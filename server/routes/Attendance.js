import express from 'express'
import atten from '../model/attendance.js';

import verifyToken from '../middleware/auth.js';
import dotenv from 'dotenv';
  dotenv.config();
const addattendance=express.Router();

addattendance.post('/addattendance',verifyToken,async(req,res)=>{
    const {title,userid,date}=req.body;
    const currentDate = new Date().toISOString().split('T')[0];
        const existingAttendance = await atten.findOne({
            userid: userid,
            date: currentDate
        });
        if(!existingAttendance){
    const addData=await atten.create({
        title:title,
        userid:userid,
        date:date
    })
    await addData.save;

    return res.json({message:"add success",success:true})
        }
        else{
          return res.json({message:"add unjsuccess",success:false})
        }
})
export default addattendance