import React, { useEffect, useState } from 'react';
import axiosInstance from '../../helpers/axiosinstanceToken';
import './mybooking.css';
import Layout from '../layout/Layout';
import CheckSession from '../../helpers/CheckSession';

const MyBooking = () => {
  const { lab_name, lab_id, access_token } = CheckSession();
  const [loading, setLoading] = useState(false);
  const [failure, setFailure] = useState(null);
  const [bookings, setBookings] = useState([]);
  //filter data
  const [filterdata, setFilterData] = useState([])

  // search query 
  const [query, setQuery] = useState("")

  // function to handle live search 

  const handleSearch = (value)=>{
    // the value is the text you type 
    setQuery(value)
    //check if lab tests are not empty
    const filterresult = bookings && bookings.filter((item)=>item.key?.surname?.toLowerCase().includes(value.toLowerCase()))
    //update setFilterData with filtered items
    setFilterData(filterresult)
  }


  useEffect(() => {
    setLoading(true);
    axiosInstance.post("/view_bookings", { lab_id }) // Update this endpoint according to your API
      .then((response) => {
        console.log(response.data);
        setBookings(response.data); // Assuming response.data is an array of bookings
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setFailure(error.message);
      });
  }, [lab_id]); // Added lab_id as a dependency

  return (
    <div>
      <Layout />
      <section className="my-booking-section">
        <h1>My Bookings</h1>
        {loading && <div className="loading">Loading...</div>}
        {failure && <div className="error">{failure}</div>}
        {bookings.length === 0 && !loading && <div className="no-bookings">No bookings found.</div>}
        {/* search input  */}
          
        <input type="text"  
        placeholder='serch bookings'
         className='form-control mb-3'
         
          value={query}
         onChange={(e)=>handleSearch(e.target.value)} />
        {bookings.length > 0 && (
          <table className="bookings-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Where Taken</th>
                <th>Surname</th>
                
                <th>Invoice</th>
              </tr>
            </thead>
            <tbody>
              {filterdata.map((booking, index) => (
                <tr key={index}>
                  <td>{booking.appointment_date || 'N/A'}</td>
                  <td>{booking.appointment_time || 'N/A'}</td>
                  
                  <td>{booking.where_taken || 'N/A'}</td>
                  <td>{booking?.key?.surname || 'N/A'}</td>
                  <td>{booking.invoice_no || 'N/A'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </div>
  );
};

export default MyBooking;
