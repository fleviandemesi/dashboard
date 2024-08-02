import React, { useEffect, useState } from 'react';
import CheckSession from '../../helpers/CheckSession';
import axiosinstanceToken from '../../helpers/axiosinstanceToken';
import classNames from 'classnames'; // Import classnames
import './labtests.css';
import Layout from '../layout/Layout';

const LabTests = () => {
  const { lab_name, access_token } = CheckSession();
  const [loading, setLoading] = useState(false);
  const [labtests, setLabtest] = useState([]);
  const [failure, setFailure] = useState(null);
  const lab_id = localStorage.getItem ("lab_id")

  useEffect(() => {
    // Set loading to be true
    setLoading(true);
    axiosinstanceToken.post("/viewlabtests", { lab_id })
      .then((response) => {
        setLabtest(response.data.message);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setFailure(error.message);
      });
  }, [lab_id]);
  console.log(labtests)

  return (
    <div className="lab-tests-container">
      <Layout />
      <div>
        <h2>Lab Tests Information</h2>
        {loading && <div className="loading">Loading...</div>}
        {failure && <div className="error">{failure}</div>}
        <table className={classNames({ 'loading-table': loading })}>
          <thead>
            <tr>
              <th>Lab Name</th>
              <th>Test Description</th>
              <th>Test Cost</th>
              <th>Test Discount</th>
            </tr>
          </thead>
          <tbody>
            {labtests.map((test, index) => (
              <tr key={index}>
                <td>{test.lab_name}</td>
                <td>{test.test_description}</td>
                <td>{test.test_cost}</td>
                <td>{test.test_discount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LabTests;
