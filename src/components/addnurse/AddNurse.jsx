import React, { useState } from 'react';
import "./addnurse.css";
import Layout from '../layout/Layout';
import CheckSession from '../../helpers/CheckSession';
import axiosinstanceToken from '../../helpers/axiosinstanceToken';
import "../../index.css"

const AddNurse = () => {
  const {lab_name,lab_id,access_token} = CheckSession()
  const [surname,setSurname] = useState("");
  const [others,setOthers] = useState("");
  const [gender,setGender] = useState("");
  const [phone,setPhone] = useState("");
  const [password,setPassword] = useState("");
  
  //add states to see whether its loading its succes or failure
  const [loading, setLoading] = useState(false);
  const [failure, setFailure] = useState (null);
  const [success, setSuccess] = useState (null);

  const handNurse = (e)=>{
    
    e. preventDefault()
    setLoading(true)
    // use axiosInstance to post data to api 
    axiosinstanceToken.post('/addnurse',{
      lab_id:lab_id,
      surname: surname,
      others:others,
      gender:gender,
      phone:phone,
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
    <div>
      <Layout />
      <section className="container" >
        {/* return response for success  */}
      {success && <div className='success'>{success}</div>}
      {/* return response for failure  */}
      {failure && <div className='failure'>{failure}</div>}
        <h1>Add Nurse</h1>
        <form onSubmit={handNurse}>
          <div className="form-group">
            <label htmlFor="surname">Surname</label>
            <input
              type="text"
              id="surname"
              name="surname"
              onChange={(e)=> setSurname(e.target.value)}
              value={surname}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="others">Other Names</label>
            <input
              type="text"
              id="others"
              name="others"
              onChange={(e)=> setOthers(e.target.value)}
              value={others}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select
              id="gender"
              name="gender"
              onChange={(e)=> setGender(e.target.value)}
              value={gender}
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              onChange={(e)=> setPhone(e.target.value)}
              value={phone}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e)=> setPassword(e.target.value)}
              value={password}
              required
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? 'Adding...' : 'Add Nurse'}
          </button>
        </form>
      </section>
    </div>
  );
};

export default AddNurse;
