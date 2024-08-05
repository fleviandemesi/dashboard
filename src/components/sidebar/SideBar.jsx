import React from 'react'
import { CiBank } from "react-icons/ci";
import { Outlet, Link } from "react-router-dom";
import { CiCirclePlus } from "react-icons/ci";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineLibraryAddCheck } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdAddToPhotos } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { RiDashboardHorizontalLine } from "react-icons/ri";
import { RiLogoutCircleLine } from "react-icons/ri";
import { LiaUserNurseSolid } from "react-icons/lia";
import ReactLogout from '../../helpers/Logout';

import "./sidebar.css"
import CheckSession from '../../helpers/CheckSession';

const SideBar = () => {
  const {lab_name,lab_id,access_token} = CheckSession()
  const {logout} = ReactLogout()
  return <section className='sidebar'>
    {/* links */}
    <div className="sidebar-top">
     <div className="sidebar-brand">
     <CiBank />
     <span>MEDILAB</span>

     </div>
     {/* sidebar links  */}
     <div className="sidebar-links">
<ul>
<li>
            <Link to="/"><RxDashboard/> Dashboard</Link>
          </li>
          <li>
            <Link to="/profile"><CgProfile/> My Profile</Link>
          </li>
          <li>
            <Link to="/addtests">< CiCirclePlus/> Add Tests</Link>
          </li>
          <li>
            <Link to="/labtests"><MdOutlineLibraryAddCheck/> Lab Tests</Link>
          </li>
          <li>
            <Link to="/mybooking"><IoMdAddCircleOutline/> My Bookings</Link>
          </li>
          <li>
            <Link to="/addnurse"><MdAddToPhotos/> Add Nurse</Link>
          </li>
          <li>
            <Link to="/viewnurse"><LiaUserNurseSolid /> Nurses</Link>
          </li>
</ul>

     </div>
    </div>
        {/* go pro division */}
    <div className='sidebar-bottom'>
    <RiDashboardHorizontalLine />
      <span>GREATE UI. <button>Go Pro</button></span>
      
      <br />
      <span><strong>Upgrade Now</strong></span>
      </div>
      {/* logout division  */}
      <div className="p-4 sidebar-logout">
      <button className="btn btn-dark btn-sm" onClick={logout}>
      <RiLogoutCircleLine />LogOut

      </button>
      </div>
  </section>
    
  
}

export default SideBar
