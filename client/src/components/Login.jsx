import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

function Login() {
  const navigate=useNavigate();
  const currentDate = new Date().toISOString().split('T')[0];
  const [email, setEmail] = useState('')

  const [password, setPassword] = useState('')
  const handleSubmit=async(e)=>{
    try {
    
    e.preventDefault();
    const res=await fetch("http://localhost:3000/login",{
      method:"post",
      headers:{
        'Content-Type':"application/json",
      
      },
      body:JSON.stringify({
         email:email,
        password:password,
       
      })
    })
    const result=await res.json();
   
    if(result.success)
    {
      console.log(result.token)
      localStorage.setItem('user',JSON.stringify(result.user))
      localStorage.setItem('token',JSON.stringify(result.token))
      toast.success('login Success')
      console.log(currentDate)
      navigate('/userdashboard')
    }
    else{
      console.log("faild")
      console.log(email+password)
    }
      
  } catch (error) {
    console.log(error)
  }
  }
  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">
        Email address
      </label>
      <input
        type="email"
        className="form-control"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
      />
      <div id="emailHelp" className="form-text">
        We'll never share your email with anyone else.
      </div>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">
        Password
      </label>
      <input
        type="password"
        onChange={(e)=>setPassword(e.target.value)}
        className="form-control"
        id="exampleInputPassword1"
        value={password}
      />
    </div>
    <div className="mb-3 form-check">
      <input type="checkbox" className="form-check-input" id="exampleCheck1" />
      <label className="form-check-label" htmlFor="exampleCheck1">
        Check me out
      </label>
    </div>
    <button type="submit"  className="btn btn-primary">
      Submit
    </button>
  </form>
  </div>
  )
}

export default Login