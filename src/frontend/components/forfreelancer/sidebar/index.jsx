import React from "react";
import { Link } from "react-router-dom";
import { Img_04 } from "../../imagepath"

const Sidebar = (props) => { 

        const pathname = window.location.pathname.split("/")[1];
        return (
            <>
                <div className="settings-widget">
                    <div className="settings-header d-sm-flex flex-row flex-wrap text-center text-sm-start align-items-center">
                        <Link to="freelancer-profile">
                            <img
                            alt="profile image"
                            src={Img_04}
                            className="avatar-lg rounded-circle"
                            />
                        </Link>
                        <div className="ms-sm-3 ms-md-0 ms-lg-3 mt-2 mt-sm-0 mt-md-2 mt-lg-0">
                            <p className="mb-2">Welcome,</p>
                            <h3 className="mb-0">
                            <Link to="/freelancer-profile">John Danie S.</Link>
                            </h3>
                            <p className="mb-0">@johndaniee</p>
                        </div>
                    </div>
                    <div className="settings-menu">
                        <ul>
                            <li className="nav-item">
                            <Link to="/freelancer-dashboard" className={`nav-link ${pathname === "freelancer-dashboard" ? "active" : ""}`}>
                                <i className="material-icons">verified_user</i> Dashboard
                            </Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/freelancer-project-proposals"
                                className={`nav-link ${pathname === "freelancer-project-proposals" ? "active" : ""}`}
                            >
                                <i className="material-icons">business_center</i> Projects
                            </Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/freelancer-favourites" className={`nav-link ${pathname === "freelancer-favourites" ? "active" : ""}`}>
                                <i className="material-icons">local_play</i> Favourites
                            </Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/freelancer-review" className={`nav-link ${pathname === "freelancer-review" ? "active" : ""}`}>
                                <i className="material-icons">record_voice_over</i> Reviews
                            </Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/freelancer-portfolio" className={`nav-link ${pathname === "freelancer-portfolio" ? "active" : ""}`}>
                                <i className="material-icons">pie_chart</i> Portfolio
                            </Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/freelancer-chats" className={`nav-link ${pathname === "freelancer-chats" ? "active" : ""}`}>
                                <i className="material-icons">chat</i> Messages
                            </Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/freelancer-membership" className={`nav-link ${pathname === "freelancer-membership" ? "active" : ""}`}>
                                <i className="material-icons">person_add</i> Membership
                            </Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/freelancer-verify-identity"
                                className={`nav-link ${pathname === "freelancer-verify-identity" ? "active" : ""}`}
                            >
                                <i className="material-icons">person_pin</i> Verify Identity
                            </Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/freelancer-withdraw-money"
                                className={`nav-link ${pathname === "freelancer-withdraw-money" ? "active" : ""}`}
                            >
                                <i className="material-icons">wifi_tethering</i> Payments
                            </Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/freelancer-profile-settings"
                                className={`nav-link ${pathname === "freelancer-profile-settings" ? "active" : ""}`}
                            >
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