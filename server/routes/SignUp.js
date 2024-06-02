import express from 'express'
import User from '../model/userSchema.js';

import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config();
const signup = express.Router();

signup.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;
    const existUser = await User.findOne({ email: email })
    if (!existUser) {
        const newUser = await User.create({
            username: username,
            email: email,
            password: password
        })
        await newUser.save;
        const obj={userid:newUser._id}
        var token=jwt.sign(obj,process.env.JWT_SECRET)
        return res.json({ message: "user created successfull",token:token, user:newUser,success: true })
    }
    else {
        return res.json({ message: "already exist", success: false })
    }
})

export default signup