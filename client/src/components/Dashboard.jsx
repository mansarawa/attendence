import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
  const [data,setData]=useState([]);
  const user=JSON.parse(localStorage.getItem('user'))
  useEffect(()=>{
  const fetchPresent=async()=>{
    try {
       const res=await fetch('http://localhost:3000/yourattendance',{
      method:'get',
      headers:{
        'Content-Type':'application/josn',
        'token':localStorage.getItem('token')
      },
      body:JSON.stringify({
        userid:user._id
      })
    })
    const result=await res.json();
    if(result.success){
      setData(result.total)
    } else {
      setData([]);
    }
  } catch (error) {
      console.log(error)
  }
  }
})
  return (
    <div className='container'>
        <h1>WelCome To Attendance App</h1>
        {
        
          data.map((item, index) => (
            <div key={index}>{item.title}</div>
          ))
        
      }
        <p>Please login or sign up to continue.</p>
        <div>
        <Link to="/login" style={{marginRight:'10px'}} className="btn btn-primary">Login</Link>
        <Link to="/signup" className="btn btn-primary">Signup</Link>
        </div>
    </div>
  )
}

export default Dashboard