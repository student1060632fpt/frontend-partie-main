import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { truncateText } from "../../../../shared/help";
import { Img_04 } from "../../imagepath";

const Sidebar = (props) => {
  const pathname = window.location.pathname.split("/")[1];
  const {wallet} = useSelector(state=> state.wallet)

  return (
    <>
      <div className="settings-widget">
        <div className="settings-header d-sm-flex flex-row flex-wrap text-center text-sm-start align-items-center">
          <Link to="/user-account-details">
            <img
              alt="profile"
              src={Img_04}
              className="avatar-lg rounded-circle"
            />
          </Link>
          <div className="ms-sm-3 ms-md-0 ms-lg-3 mt-2 mt-sm-0 mt-md-2 mt-lg-0">
            <p className="mb-2">Welcome,</p>
            <Link to="user-account-details">
              <h3 className="mb-2">{truncateText(wallet?.accountId, 15)}</h3>
            </Link>
            {/* <p className="mb-0">@johndaniee</p> */}
          </div>
        </div>
        <div className="settings-menu">
          <ul>
            <li className="nav-item">
              <Link
                to="/dashboard"
                className={`nav-link ${
                  pathname === "dashboard" ? "active" : ""
                }`}
              >
                <i className="material-icons">verified_user</i> Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/manage-projects"
                className={`nav-link ${
                  pathname === "-projects" ? "active" : ""
                }`}
              >
                <i className="material-icons">business_center</i> Projects
              </Link>
            </li>
           
            <li className="nav-item">
              <Link
                to="/chats"
                className={`nav-link ${pathname === "chats" ? "active" : ""}`}
              >
                <i className="material-icons">chat</i> Messages
              </Link>
            </li>
           
            <li className="nav-item">
              <Link
                to="/profile-settings"
                className={`nav-link ${
                  pathname === "profile-settings" ||
                  pathname === "change-password" ||
                  pathname === "delete-account"
                    ? "active"
                    : ""
                }`}
              >
                <i className="material-icons">settings</i> Settings
              </Link>
            </li>
            <li className="nav-item">
              <a href="#" onClick={() => wallet.signOut()} className="nav-link">
                <i className="material-icons">power_settings_new</i> Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export { Sidebar };
