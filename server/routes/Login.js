import express from 'express'
import User from '../model/userSchema.js';
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config();
const login = express.Router();

login.post('/login', async (req, res) => {
   
    const {  email, password } = req.body;
    const secrete='secret'
    const existUser = await User.findOne({ email: email })
    if (existUser) {
        const obj={userId:existUser._id}
        var token = jwt.sign(obj, process.env.JWT_SECRET, { expiresIn: '1d' })
        if(password===existUser.password)
        {
            return res.json({ message: "loign successfull",user:existUser, success: true ,token:token})
        }
        
    }
    else {
        return res.json({ message: "already exist", success: false })
    }
})

export default login