import React from "react";
import { Link } from "react-router-dom";
import { Img_04 } from "../../imagepath"

const Sidebar = (props) => { 

    const pathname = window.location.pathname.split("/")[1];
   
        return (
            <>
               <div className="settings-widget">
                    <div className="settings-header d-sm-flex flex-row flex-wrap text-center text-sm-start align-items-center">
                        <Link to="/user-account-details">
                        <img
                            alt="profile image"
                            src={Img_04}
                            className="avatar-lg rounded-circle"
                        />
                        </Link>
                        <div className="ms-sm-3 ms-md-0 ms-lg-3 mt-2 mt-sm-0 mt-md-2 mt-lg-0">
                            <p className="mb-2">Welcome,</p>
                            <Link to="user-account-details">
                                <h3 className="mb-0">John Danie S.</h3>
                            </Link>
                            <p className="mb-0">@johndaniee</p>
                        </div>
                    </div>
                <div className="settings-menu">
                    <ul>
                        <li className="nav-item">
                            <Link to="/dashboard" className={`nav-link ${pathname === "dashboard" ? "active" : ""}`}>
                            <i className="material-icons">verified_user</i> Dashboard
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/manage-projects" className={`nav-link ${pathname === "-projects" ? "active" : ""}`}>
                            <i className="material-icons">business_center</i> Projects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/favourites" className={`nav-link ${pathname === "favourites" || 
                             pathname === "invited-freelancer" ? "active" : ""}`}>
                            <i className="material-icons">local_play</i> Favourites
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/review" className={`nav-link ${pathname === "review" ? "active" : ""}`}>
                            <i className="material-icons">record_voice_over</i> Reviews
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/chats" className={`nav-link ${pathname === "chats" ? "active" : ""}`}>
                            <i className="material-icons">chat</i> Messages
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/membership-plans" className={`nav-link ${pathname === "membership-plans" ? "active" : ""}`}>
                            <i className="material-icons">person_add</i> Membership
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/milestones" className={`nav-link ${pathname === "milestones" ? "active" : ""}`}>
                            <i className="material-icons">pie_chart</i> Milestones
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/verify-identity" className={`nav-link ${pathname === "verify-identity" ? "active" : ""}`}>
                            <i className="material-icons">person_pin</i> Verify Identity
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/deposit-funds" className={`nav-link ${pathname === "deposit-funds" ||
                            pathname === "withdraw-money" || pathname === "transaction-history" ? "active" : ""}`}>
                            <i className="material-icons">wifi_tethering</i> Payments
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/profile-settings" className={`nav-link ${pathname === "profile-settings" || 
                            pathname === "change-password" || pathname === "delete-account" ? "active" : ""}`}>
                            <i className="material-icons">settings</i> Settings
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/index" className="nav-link">
                            <i className="material-icons">power_settings_new</i> Logout
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            </>
         )
          
}
export { Sidebar };