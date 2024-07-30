import React from 'react'
import "./maincontent.css"
import Layout from '../layout/Layout'

const MainContent = () => {
  return (
    <div>
      <Layout/>
      <section className="container">
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
