import React, { useEffect, useState, useContext } from 'react';
import { Link } from "react-router-dom";
import {logo_small,logo,avatar_02,avatar_03,avatar_04,avatar_07,} from '../../admin/component/pages/imagepath'
import FeatherIcon from 'feather-icons-react';

// import config from "config";

const Header = (props) => {


  const [task, settask] = useState(true);
  const [task1, settask1] = useState(true);

  const handlesidebar=()=>{
		document.body.classList.toggle('mini-sidebar');
	}
  const handlesidebarmobilemenu=()=>{
		document.body.classList.toggle('slide-nav');
	}



  if ( !window.location.pathname.includes("client") ) {
        require('../assets/css/bootstrap.min.css')
    require('../assets/css/feather.css')
    require('../assets/js/feather.min.js')
    require('../assets/plugins/fontawesome/css/fontawesome.min.css')
    require('../assets/plugins/fontawesome/css/all.min.css')
    require('antd/dist/antd.css')
    require('../assets/css/style.css')

  }

  
  const exclusionArray =[
    '/admin/login',
    '/admin/forgot-password',
    '/admin/register'
  ]
  if (exclusionArray.indexOf(window.location.pathname) >= 0) {
		return '';
	}
    


  return (
    <>
      {/* Header */}
      <div className="header">
        {/* Logo */}
        <div className="header-left">
          <Link to="/admin/index" className="logo">
            <img src={logo} alt="Logo" />
          </Link>
          <Link to="/admin/index" className="logo logo-small">
            <img
              src={logo_small}
              alt="Logo"
              width={30}
              height={30}
            />
          </Link>
          {/* Sidebar Toggle */}
          <Link to="#;" id="toggle_btn" onClick={handlesidebar}>
          <FeatherIcon icon="chevrons-left" />
          </Link>
          {/* /Sidebar Toggle */}
          {/* Mobile Menu Toggle */}
          <Link to="#"className="mobile_btn" id="mobile_btn" onClick={() => handlesidebarmobilemenu()}>
          <FeatherIcon icon="chevrons-left" />
          </Link>
          {/* /Mobile Menu Toggle */}
        </div>
        {/* /Logo */}
        {/* Search */}
        <div className="top-nav-search">
          <form>
            <input
              type="text"
              className="form-control"
              placeholder="Start typing your Search..."
            />
            <button className="btn" type="submit">
            <FeatherIcon icon="search" />
            </button>
          </form>
        </div>
        {/* /Search */}
        {/* Header Menu */}
        <ul className="nav user-menu">
          {/* Notifications */}
          <li className="nav-item dropdown">
            <Link
              to="#"
              className="dropdown-toggle nav-link"
              data-bs-toggle="dropdown"
            >
              <FeatherIcon icon="bell" />{" "}
              <span className="badge badge-pill">5</span>
            </Link>
            <div className="dropdown-menu notifications">
              <div className="topnav-dropdown-header">
                <span className="notification-title">Notifications</span>
                <Link to="#" className="clear-noti">
                  {" "}
                  Clear All
                </Link>
              </div>
              <div className="noti-content">
                <ul className="notification-list">
                  <li className="notification-message">
                    <Link to="#">
                      <div className="media d-flex">
                        <span className="avatar avatar-sm flex-shrink-0">
                          <img
                            className="avatar-img rounded-circle"
                            alt=""
                            src={avatar_02}
                          />
                        </span>
                        <div className="media-body flex-grow-1">
                          <p className="noti-details">
                            <span className="noti-title">Brian Johnson</span> paid
                            the invoice <span className="noti-title">#DF65485</span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">4 mins ago</span>
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="notification-message">
                    <Link to="#">
                      <div className="media d-flex">
                        <span className="avatar avatar-sm flex-shrink-0">
                          <img
                            className="avatar-img rounded-circle"
                            alt=""
                            src={avatar_03}
                          />
                        </span>
                        <div className="media-body flex-grow-1">
                          <p className="noti-details">
                            <span className="noti-title">Marie Canales</span> has
                            accepted your estimate{" "}
                            <span className="noti-title">#GTR458789</span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">6 mins ago</span>
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="notification-message">
                    <Link to="#">
                      <div className="media d-flex">
                        <div className="avatar avatar-sm flex-shrink-0">
                          <span className="avatar-title rounded-circle bg-primary-light">
                            <i className="far fa-user" />
                          </span>
                        </div>
                        <div className="media-body flex-grow-1">
                          <p className="noti-details">
                            <span className="noti-title">New user registered</span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">8 mins ago</span>
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="notification-message">
                    <Link to="#">
                      <div className="media d-flex">
                        <span className="avatar avatar-sm flex-shrink-0">
                          <img
                            className="avatar-img rounded-circle"
                            alt=""
                            src={avatar_04}
                          />
                        </span>
                        <div className="media-body flex-grow-1">
                          <p className="noti-details">
                            <span className="noti-title">Barbara Moore</span>{" "}
                            declined the invoice{" "}
                            <span className="noti-title">#RDW026896</span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">12 mins ago</span>
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="notification-message">
                    <Link to="#">
                      <div className="media d-flex">
                        <div className="avatar avatar-sm flex-shrink-0">
                          <span className="avatar-title rounded-circle bg-info-light">
                            <i className="far fa-comment" />
                          </span>
                        </div>
                        <div className="media-body flex-grow-1">
                          <p className="noti-details">
                            <span className="noti-title">
                              You have received a new message
                            </span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">2 days ago</span>
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="topnav-dropdown-footer">
                <Link to="#">View all Notifications</Link>
              </div>
            </div>
          </li>
          {/* /Notifications */}
          {/* User Menu */}
          <li className="nav-item dropdown has-arrow main-drop">
            <Link
              to="#"
              className="dropdown-toggle nav-link"
              data-bs-toggle="dropdown"
            >
              <span className="user-img">
                <img src={avatar_07} alt="" />
                <span className="status online" />
              </span>
            </Link>
            <div className="dropdown-menu">
              <Link className="dropdown-item" to="/admin/profile">
              <FeatherIcon icon="user" className="me-1" /> Profile
              </Link>
              <Link className="dropdown-item" to="/admin/settings">
              <FeatherIcon icon="settings" className="me-1" /> Settings
              </Link>
              <Link className="dropdown-item" to="/admin/login">
              <FeatherIcon icon="log-out" className="me-1" /> Logout
              </Link>
            </div>
          </li>
          {/* /User Menu */}
        </ul>
        {/* /Header Menu */}
      </div>
      {/* /Header */}
    </>

  );
}


export default Header;
