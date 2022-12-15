import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Logo, Img_04 } from "../imagepath";
import config from "config";
import HeaderLoginWithNear from "./HeaderLoginWithNear";
import { useSelector } from "react-redux";
import HeaderUserAccountDetail from "./HeaderUserAccountDetail";

const Header = (props) => {
  const [isSideMenu, setSideMenu] = useState("");
  const [isSideMenu1, setSideMenu1] = useState("");
  const [isSideMenu2, setSideMenu2] = useState("");
  const [isSideMenu3, setSideMenu3] = useState("");
  const isSignedIn = useSelector((state) => state.wallet.isSignedIn);

  const renderFreelancerInvoiceViewInvoice = () => {
    return (
      <ul className="nav header-navbar-rht">
        <li className="nav-item dropdown account-item">
          <Link
            to="#"
            className="dropdown-toggle nav-link"
            data-toggle="dropdown"
          >
            MY ACCOUNT
          </Link>
          <div className="dropdown-menu emp">
            <div className="drop-head">Account Details</div>
            <Link className="dropdown-item" to="/user-account-details">
              <i className="material-icons">verified_user</i> View profile
            </Link>
            <div className="drop-head">Jobs Settings</div>
            <Link className="dropdown-item" to="/manage-projects">
              <i className="material-icons">business_center</i> Jobs
            </Link>
            <Link className="dropdown-item" to="/favourites">
              <i className="material-icons">local_play</i> Favourites
            </Link>
            <Link className="dropdown-item" to="/review">
              <i className="material-icons">pie_chart</i> Reviews
            </Link>
            <div className="drop-head">Account Details</div>
            <Link className="dropdown-item" to="/profile-settings">
              {" "}
              <i className="material-icons">settings</i> Profile Settings
            </Link>
            <Link className="dropdown-item" to="/index">
              <i className="material-icons">power_settings_new</i> Logout
            </Link>
          </div>
        </li>
        <li className={pathname === "post-project" ? "active" : ""}>
          <Link to="/post-project" className="login-btn">
            Post a Project{" "}
          </Link>
        </li>
      </ul>
    );
  };

  const renderRightHeader = () => {
    //If user is login
    if (isSignedIn) {
      return <HeaderUserAccountDetail />;
    }
    //If user is not login
    return pathname === "freelancer-invoices" ||
      pathname === "view-invoice" ||
      pathname.includes("freelancer-") ? (
      renderFreelancerInvoiceViewInvoice()
    ) : (
      <HeaderLoginWithNear />
    );
  };

  const toggleSidebar = (value) => {
    setSideMenu(value);
  };
  const toggleSidebar1 = (value) => {
    setSideMenu1(value);
  };
  const toggleSidebar2 = (value) => {
    setSideMenu2(value);
  };
  const toggleSidebar3 = (value) => {
    setSideMenu3(value);
  };
  const onHandleMobileMenu = () => {
    var root = document.getElementsByTagName("html")[0];
    root.classList.add("menu-opened");
  };

  const onhandleCloseMenu = () => {
    var root = document.getElementsByTagName("html")[0];
    root.classList.remove("menu-opened");
  };

  const pathname = props.location.pathname.split("/")[1];

  //nav transparent

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [navbar, setNavbar] = useState(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);

  const changeBackground = () => {
    if (window.scrollY >= 95) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <>
      {/* Header */}

      <header className={`header ${navbar ? "sticky" : ""} `}>
        <nav className="navbar navbar-expand-lg header-nav">
          <div className="navbar-header">
            <Link id="mobile_btn" to="#" onClick={() => onHandleMobileMenu()}>
              <span className="bar-icon">
                <span />
                <span />
                <span />
              </span>
            </Link>
            <Link to="/index" className="navbar-brand logo">
              <img src={Logo} className="img-fluid" alt="Logo" />
            </Link>
          </div>
          <div className="main-menu-wrapper">
            <div className="menu-header">
              <Link to="/index" className="menu-logo">
                <img src={Logo} className="img-fluid" alt="Logo" />
              </Link>
              <Link
                id="menu_close"
                className="menu-close"
                to="#"
                onClick={() => onhandleCloseMenu()}
              >
                <i className="fas fa-times" />
              </Link>
            </div>
            <ul className="main-nav">
              <li
                className={`has-submenu ${
                  pathname.includes("index") ||
                  pathname.includes("index-two") ||
                  pathname.includes("index-three") ||
                  pathname.includes("index-four") ||
                  pathname.includes("index-five")
                    ? "active"
                    : ""
                }`}
              >
                <Link
                  to="/index"
                  className={isSideMenu === "home" ? "subdrop" : ""}
                >
                  Home
                </Link>
              </li>

              <li
                className={`has-submenu ${
                  pathname.includes("staking") ? "active" : ""
                }`}
              >
                <Link to="/staking">Staking</Link>
              </li>

              <li
                className={`has-submenu ${
                  pathname === "developer" ||
                  pathname === "developer-details" ||
                  pathname === "dashboard" ||
                  pathname === "manage-projects" ||
                  pathname === "favourites" ||
                  pathname === "invited-freelancer" ||
                  pathname === "membership-plans" ||
                  pathname === "milestones" ||
                  pathname === "chats" ||
                  pathname === "review" ||
                  pathname === "deposit-funds" ||
                  pathname === "withdraw-money" ||
                  pathname === "transaction-history" ||
                  pathname === "verify-identity" ||
                  pathname === "profile-settings" ||
                  pathname === "tasks" ||
                  pathname === "files" ||
                  pathname === "view-project-detail" ||
                  pathname === "project-payment"
                    ? "active"
                    : ""
                }`}
              >
                <Link
                  to="#"
                  className={isSideMenu === "foremployers" ? "subdrop" : ""}
                  onClick={() =>
                    toggleSidebar(
                      isSideMenu === "foremployers" ? "" : "foremployers"
                    )
                  }
                >
                  {" "}
                  For Employers
                  <i className="fas fa-chevron-down" />
                </Link>
                {isSideMenu === "foremployers" ? (
                  <ul className="submenu">
                    <li className={pathname === "developer" ? "active" : ""}>
                      <Link to="/developer">Chats</Link>
                    </li>
                    <li className={pathname === "dashboard" ? "active" : ""}>
                      <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li
                      className={pathname === "company-profile" ? "active" : ""}
                    >
                      <Link to="/company-profile">My Profile</Link>
                    </li>
                    <li
                      className={
                        pathname === "developer-details" ? "active" : ""
                      }
                    >
                      <Link to="/developer-details">Freelancer Details</Link>
                    </li>
                    <li
                      className={pathname === "manage-projects" ? "active" : ""}
                    >
                      <Link to="/manage-projects">Manage Projects</Link>
                    </li>

                    <li className={pathname === "chats" ? "active" : ""}>
                      <Link to="/chats">Chats</Link>
                    </li>

                    <li
                      className={
                        pathname === "profile-settings" ? "active" : ""
                      }
                    >
                      <Link to="/profile-settings">Settings</Link>
                    </li>
                  </ul>
                ) : (
                  ""
                )}
              </li>
              <li
                className={`has-submenu ${
                  pathname === "project" ||
                  pathname === "project-details" ||
                  pathname === "freelancer-dashboard" ||
                  pathname === "company-profile" ||
                  pathname === "freelancer-project-proposals" ||
                  pathname === "freelancer-favourites" ||
                  pathname === "freelancer-invitations" ||
                  pathname === "freelancer-membership" ||
                  pathname === "freelancer-change-password" ||
                  pathname === "freelancer-chats" ||
                  pathname === "freelancer-review" ||
                  pathname === "freelancer-completed-projects" ||
                  pathname === "freelancer-cancelled-projects" ||
                  pathname === "freelancer-withdraw-money" ||
                  pathname === "freelancer-verify-identity" ||
                  pathname === "freelancer-ongoing-projects" ||
                  pathname === "freelancer-profile-settings" ||
                  pathname === "freelancer-transaction-history" ||
                  pathname === "freelancer-project-proposals" ||
                  pathname === "freelancer-view-project-detail" ||
                  pathname === "freelancer-milestones" ||
                  pathname === "freelancer-task" ||
                  pathname === "freelancer-files" ||
                  pathname === "freelancer-payment"
                    ? "active"
                    : ""
                }`}
              >
                <Link
                  to="#"
                  className={isSideMenu === "forfreelancer" ? "subdrop" : ""}
                  onClick={() =>
                    toggleSidebar(
                      isSideMenu === "forfreelancer" ? "" : "forfreelancer"
                    )
                  }
                >
                  {" "}
                  For Freelancer
                  <i className="fas fa-chevron-down" />
                </Link>
                {isSideMenu === "forfreelancer" ? (
                  <ul className="submenu">
                    <li>
                      <Link to="/project">Project</Link>
                    </li>
                    <li
                      className={
                        pathname === "freelancer-dashboard" ? "active" : ""
                      }
                    >
                      <Link to="/freelancer-dashboard">Dashboard</Link>
                    </li>
                    <li>
                      <Link to="/developer-profile">My Profile</Link>
                    </li>

                    <li
                      className={
                        pathname === "freelancer-project-proposals" ||
                        pathname === "freelancer-ongoing-projects" ||
                        pathname === "freelancer-completed-projects" ||
                        pathname === "freelancer-cancelled-projects" ||
                        pathname === "freelancer-project-proposals" ||
                        pathname === "freelancer-view-project-detail" ||
                        pathname === "freelancer-milestones" ||
                        pathname === "freelancer-task" ||
                        pathname === "freelancer-files" ||
                        pathname === "freelancer-payment"
                          ? "active"
                          : ""
                      }
                    >
                      <Link to="/freelancer-project-proposals">Projects</Link>
                    </li>

                    <li
                      className={
                        pathname === "freelancer-chats" ? "active" : ""
                      }
                    >
                      <Link to="/freelancer-chats">Chats</Link>
                    </li>

                    <li
                      className={
                        pathname === "freelancer-profile-settings"
                          ? "active"
                          : ""
                      }
                    >
                      <Link to="/freelancer-profile-settings">Settings</Link>
                    </li>
                  </ul>
                ) : (
                  ""
                )}
              </li>
              <li
                className={`has-submenu ${
                  pathname === "about" ||
                  pathname === "blank-page" ||
                  pathname === "404-page" ||
                  pathname === "user-account-details" ||
                  pathname === "login" ||
                  pathname === "register" ||
                  pathname === "forgot-password" ||
                  pathname === "change-password" ||
                  pathname === "freelancer-invoices" ||
                  pathname === "view-invoice"
                    ? "active"
                    : ""
                }`}
              ></li>
               <li
                className={`has-submenu ${
                  pathname.includes("voting") ? "active" : ""
                }`}
              >
                <Link to="/voting">Voting</Link>
              </li>
            </ul>
          </div>
          {renderRightHeader()}
        </nav>
      </header>

      {/* /Header */}
    </>
  );
};

export default Header;
