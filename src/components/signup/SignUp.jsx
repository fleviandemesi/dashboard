import React, { useState } from 'react';
import axiosInstance from '../../helpers/axiosInstance'
import './signup.css';

const SignUp = () => {
  const [name,setName] = useState("");
    const [permit,setPermit] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const[password,setPassword] = useState("");
    //add states to see whether its loading its succes or failure
    const [loading, setLoading] = useState(false);
    const [failure, setFailure] = useState (null);
    const [success, setSuccess] = useState (null);
    //handle lab singup
    const handleSignUp = (e)=>{
      //this action is going to be triggered when user clicks submit button
      // alert("You Clicked Submit Button" + name + ""+ email)
      e. preventDefault()
      setLoading(true)
      // use axiosInstance to post data to api 
      axiosInstance.post('/labsignup',{
        lab_name: name,
        permit_id:permit,
        email:email,
        phone,phone,
        password:password
      })
        .then((response)=>{
          setSuccess(response?.data?.message) 
          // console.log(response)
          setLoading(false)
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
    <section className='form'>
      {/* return response for success  */}
      {success && <div className='success'>{success}</div>}
      {/* return response for failure  */}
      {failure && <div className='failure'>{failure}</div>}
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp}>
        <div className='form-group'>
          <label htmlFor='name'>Enter Lab Name</label>
          <input
            type='text'
            id='name'
            name='name'
            onChange={(e)=> setName(e.target.value)}
            value={name}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='name'>Enter Permit Id</label>
          <input
            type='text'
            id='name'
            name='name'
            onChange={(e)=> setPermit(e.target.value)}
            value={permit}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Enter Email</label>
          <input
            type='email'
            id='email'
            name='email'
            onChange={(e)=> setEmail(e.target.value)}
            value={email}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='name'>Enter Phone</label>
          <input
            type='text'
            id='name'
            name='name'
            onChange={(e)=> setPhone(e.target.value)}
            value={phone}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Enter Password</label>
          <input
            type='password'
            id='password'
            name='password'
            onChange={(e)=> setPassword(e.target.value)}
            value={password}
            required
          />
        </div>
        <button type='submit'>Sign Up</button>
        
      </form>
      {/* {name} <br />
      {permit} <br />
      {email} <br />
      {phone} <br />
      {password} <br /> */}
      {/* Link to Create Account page */}
      <p>Don't have an account? <a href="/signin">Create Account</a></p>
    </section>
  );
};

export default SignUp;

