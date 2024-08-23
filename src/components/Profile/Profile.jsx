import React, { useEffect, useState } from "react";
import './profile.css';
import Layout from '../layout/Layout';
import Doctor from '../../images/Doctor.jpeg';
import CheckSession from '../../helpers/CheckSession';
import images1 from  '../../images/images1.jpeg'
const Profile = () => {
  const { username, admin_id, access_token } = CheckSession();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Assuming there might be some async operations for loading profile data
    setLoading(true);

    // Example async function, adjust if necessary
    // fetchProfileData() would be a function to fetch profile data if needed
    const fetchProfileData = async () => {
      try {
        // Replace with actual API call if needed
        const emailFromStorage = localStorage.getItem("email");
        setEmail(emailFromStorage);
      } catch (err) {
        setError('Failed to load profile data');
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  return (
    <>
      <Layout />

      <h1 className="h1">Admin Profile</h1>
      <div className='profile-card'>
        {loading && <p className="text-warning">Loading ...</p>}
        {error && <p className="text-danger">Error occurred. Try later.</p>}

        <div className='profile-header'>
          <div className='profile-picture'>
            {/* Replace with user's actual picture */}
            <img src={images1} alt='Profile' />
          </div>
          <h2 className='profile-title'>{username}</h2>
        </div>
        <div className='profile-content'>
          <div className='profile-detail'>
            <strong>ID:</strong> <span>{admin_id}</span>
          </div>
          <div className='profile-detail'>
            <strong>Permit:</strong> <span>admin.p</span>
          </div>
          <div className='profile-detail'>
            <strong>Email:</strong> <span>{email}</span>
          </div>
          <div className='profile-detail'>
            <strong>Phone:</strong> <span>user.phone</span>
          </div>
          <div className='profile-detail'>
            <strong>Registration Date:</strong> <span>admin.date</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
