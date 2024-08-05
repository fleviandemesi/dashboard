import React, { useEffect, useState } from 'react';
import axiosinstanceToken from '../../helpers/axiosinstanceToken'; // Make sure this is the correct path
import classNames from 'classnames'; // Import classnames for conditional classes
import './nurse.css'; // Ensure this CSS file exists and contains the appropriate styles
import Layout from '../layout/Layout';
import CheckSession from '../../helpers/CheckSession';


const Nurses = () => {
  const {lab_name,lab_id,access_token} = CheckSession()
  const [loading, setLoading] = useState(false);
  const [nurses, setNurses] = useState([]);
  const [failure, setFailure] = useState(null);

  useEffect(() => {
    // Set loading to true
    setLoading(true);
    axiosinstanceToken.post("/viewnurses", {lab_id} ) // Update this endpoint according to your API
      .then((response) => {
        setNurses(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setFailure(error.message);
      });
  }, []);
  console.log(nurses)

  return (
    <div className="nurses-cont">
      <Layout />
      <div>
        <h2>Nurse Information</h2>
        {loading && <div className="loading">Loading...</div>}
        {failure && <div className="error">{failure}</div>}
        <table className={classNames({ 'loading-table': loading })}>
          <thead>
            <tr>
              <th>Surname</th>
              <th>Others</th>
             
              <th>Gender</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
  {nurses.length === 0 ? (
    <tr>
      <td colSpan="5" className="no-data">No nurses available</td>
    </tr>
  ) : (
    nurses?.map((nurse, index) => (
      <tr key={index}>
        <td>{nurse.surname || 'N/A'}</td>
        <td>{nurse.others || 'N/A'}</td>
        
        <td>{nurse.gender || 'N/A'}</td>
        <td>{nurse.phone || 'N/A'}</td>
      </tr>
    ))
  )}
</tbody>

        </table>
      </div>
    </div>
  );
};

export default Nurses;
