import React, { useState } from 'react';
import './signin.css';
import axiosInstance from '../../helpers/axiosInstance'
import { useNavigate, Link } from 'react-router-dom';

const SignIn = () => {
  const [email,setEmail] = useState("")
  const[password,setpassword] = useState("")
 //add states to see whether its loading its succes or failure
 const [loading, setLoading] = useState(false);
 const [failure, setFailure] = useState (null);
 const [success, setSuccess] = useState (null);
 const navigate = useNavigate()
 //handle lab singup
 const handleSignIn = (e)=>{
   //this action is going to be triggered when user clicks submit button
   // alert("You Clicked Submit Button" + name + ""+ email)
   e. preventDefault()
   setLoading(true)
   // use axiosInstance to post data to api 
   axiosInstance.post('/labsignin',{
     email:email,
     password:password
   })
     .then((response)=>{
      //  setSuccess(response?.data?.message) 
       // console.log(response)
       setLoading(false)
      //  handle the response 
      if(response?.data && response?.data?.access_token && response?.data?.message){
        // alert("Login Successful")
        // save data to local storage 
        localStorage.setItem("lab_id",response?.data?.message?.lab_id)
        localStorage.setItem("lab_name",response?.data?.message?.lab_name)
        localStorage.setItem("email",response?.data?.message?.email)
        localStorage.setItem("permit_id",response?.data?.message?.permit_id)
        localStorage.setItem("phone",response?.data?.message?.phone)
        localStorage.setItem("access_token",response?.data?.access_token)
        localStorage.setItem("reg_date",response?.data?.message?.reg_date)


// redirect user to home page 
        navigate("/")

      }else{
      // Login Failed 
      setFailure("Login Failed")
      }
     })
     .catch((error)=>{
       setLoading(false)
       setFailure(error.message)
     })
 
     
 }
 //loading page
 if(loading){
   return <p>Loading...Please wait.</p>
 }
  

  return (
    
    <div className="signin-container">
       {/* return response for success  */}
       {success && <div className='success'>{success}</div>}
      {/* return response for failure  */}
      {failure && <div className='failure'>{failure}</div>}
      <h2>Login Lab</h2>

      <form onSubmit={handleSignIn}>
        
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e)=> setEmail(e.target.value)}
            value={email}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={(e)=> setpassword(e.target.value)}
            value={password}
            required
          />
        </div>
        <button type="submit" className="signin-button">Login Account</button>
      </form><br />
      {/* Link to Create Account page */}
      <p>Don't have an account? <a href="/signup">Create Account</a></p>
      
      {/* {email} <br />
      {password} <br /> */}
</div>
  );
};

export default SignIn;
