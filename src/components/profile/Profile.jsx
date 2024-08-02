import React from 'react';
import './profile.css';
import Layout from '../layout/Layout';
import CheckSession from '../../helpers/CheckSession';


const Profile = () => {
  const {lab_name,lab_id,access_token} = CheckSession()
  // get lab details from local storage 
  // const lab_id = localStorage.getItem("lab_id")
  const permit_id = localStorage.getItem("permit_id")
  const email = localStorage.getItem("email")
  const reg_date = localStorage.getItem("reg_date")
  
  return (
    <div>
      <Layout />
      <section className="container">
        <div className="profile-header">
         
          <div className="profile-info">
          <img
            src="/image/profile.webp" // Replace with a real image URL
            alt="Profile"
            className="profile-image"
          />
            <p className='id'>ID: {lab_id}</p> 
            <p className='permit'>Permit: {permit_id}</p>
            <p className='tel'>Email: {email}</p>
            <p className='reg'>Registration: {reg_date}</p>
            {/* Add more details or components as needed */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
