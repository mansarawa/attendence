import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
const secrete='secret'
 dotenv.config();
const verifyToken = (req, res, next) => {
  
  const token = req.header('token');
 // console.log('token'+token)
  if (!token) {
    return res.status(403).json({ message: "Invalid token", success: false });
  }
  try {
    const decodedUser = jwt.verify(token, process.env.JWT_SECRET);
   
    req.user = decodedUser;
    next(); 
  } catch (error) {
    console.log('error'+error)
    return res.status(401).json({ message: "Token verification unsuccessful",chat:error, success: false });
  }
};

export default verifyToken;
