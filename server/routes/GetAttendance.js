import express from 'express';
import atten from '../model/attendance.js';
import verifyToken from '../middleware/auth.js';
import User from '../model/userSchema.js';

const getAtten = express.Router();

getAtten.post('/yourattendance', verifyToken, async (req, res) => {
  try {
    const { userid } = req.body; 
    if (!userid) {
      return res.status(400).json({ message: "User ID is required", success: false });
    }

    
    const attendance = await atten.find({ userid: userid });

    if (!attendance.length) {
      return res.status(404).json({ message: "No attendance records found", success: false });
    }

    const formattedAttendance = attendance.map(entry => ({
      date: new Date(entry.date).toISOString().split('T')[0],
      title: entry.title
    }));
    
    console.log(formattedAttendance)
    return res.json({ attendance: formattedAttendance, success: true });
    
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "An internal server error occurred", success: false });
  }
});

export default getAtten;
