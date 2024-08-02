import React from 'react'
import "./maincontent.css"
import Layout from '../layout/Layout'
import CheckSession from '../../helpers/CheckSession'


const MainContent = () => {
  // check if user is logged in using check session 
  const {lab_name,lab_id,access_token} = CheckSession()
 
  return (
    <div>
      <Layout/>
      <section className="containerr">
        <h1>Dashboard</h1>
        <div className="row">
          <div className="col-md-4">
            <div className="card shadow p-4">
              creative
              {/* Card body  */}
              <div className="card-boddy">
                creative boddy
              </div>
            </div>
          </div>
          <div className="col-md-4">
          <div className="card shadow p-4">
            Affordable
            <div className="card-boddy">
                Affordable boddy
              </div>
          </div>
          </div>
          <div className="col-md-4">
          <div className="card shadow p-4">
            Effective
            <div className="card-boddy">
                Effective boddy
              </div>
          </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MainContent
