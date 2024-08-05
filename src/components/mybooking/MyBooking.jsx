import React,{useEffect,useState} from 'react'
import axiosInstance from '../../helpers/axiosinstanceToken'
import "./mybooking.css"
import Layout from '../layout/Layout'
import CheckSession from '../../helpers/CheckSession'



const MyBooking = () => {
  const {lab_name,lab_id,access_token} = CheckSession()
  const [loading, setLoading] = useState(false)
  const [failure, setFailure] = useState(null);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    
    setLoading(true);
    axiosInstance.post("/viewlabookings", {lab_id} ) // Update this endpoint according to your API
      .then((response) => {
        console.log(response.data)
        // setBookings(response.data);
        setLoading(false);
      })
      // .catch((error) => {
      //   setLoading(false);
      //   setFailure(error.message);
      // });
  }, []);
  return (
    <div>
      <Layout/>
      <section className="">
        <h1>Mybooking</h1>
      </section>
    </div>
  )
}

export default MyBooking
