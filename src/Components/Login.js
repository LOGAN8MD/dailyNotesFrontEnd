import React, { useState } from 'react';
// import {useHistory} from 'react-router-dom';                      useHistory is replaced with navigate in react-router-dom version 6
import { useNavigate } from "react-router-dom";

const Login = (props) => {

const [credentials,setCredentials]=useState({email:"",password:""});
// let history =useHistory();                                        useHistory is replaced with navigate in react-router-dom version 6
let navigate = useNavigate();


    const handleSubmit= async (e)=>{
        e.preventDefault();
        const response = await fetch("https://dailynotes-api-xj1d.onrender.com/api/auth/login", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              },
              body: JSON.stringify({email:credentials.email, password:credentials.password})
          });
          const json = await response.json()
          if(json.success){
            // Save the auth token and redirect
            localStorage.setItem('token',json.authtoken);
            props.showAlert("Logged in Successfully","success")   
            navigate("/");
           
          }
          else{
           
            props.showAlert("Invalid credentials","danger")
          }
    }

    const onChange=(e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
     }
  return (
    <div className='mt-3' style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>Login to make Daily Notes</h2>
      <form onSubmit={handleSubmit} >
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" value={credentials.email} name='email' onChange={onChange} aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" value={credentials.password} name="password" onChange={onChange} id="password" />
  </div>
  <button type="submit" className="btn btn-primary" >Submit</button>
</form>
    </div>
  )
}

export default Login
