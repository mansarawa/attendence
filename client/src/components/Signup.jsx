import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Signup() {
  const navigate=useNavigate();
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [username, setUsername] = useState()
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const res=await fetch('http://localhost:3000/signup',{
      method:"post",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        username:username,
        email:email,
        password:password
      })
    })
    const result= await res.json();

    if(result.success)
    {
      navigate('/userdashboard')
      localStorage.setItem('user',JSON.stringify(result.user))
      localStorage.setItem('token',JSON.stringify(result.token))
    }
    else{
      console.log("faild")
    }
  }
  return (
    <div className='container'><form>
      <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">
       Username
      </label>
      <input
        type="text"
        onChange={(e)=>setUsername(e.target.value)}
        className="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
      />
     
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">
        Email address
      </label>
      <input
        type="email"
        className="form-control"
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
      />
    </div>
   
    <button type="submit" onClick={handleSubmit} className="btn btn-primary">
      Submit
    </button>
  </form>
  </div>
  )
}

export default Signup