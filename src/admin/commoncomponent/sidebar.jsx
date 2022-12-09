import React, { useEffect, useState, } from 'react';
import { Link, withRouter } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars";
import FeatherIcon from 'feather-icons-react';

const Sidebar = (props) => {

  let pathname = props.location.pathname;

  const [isSideMenu, setSideMenu] = useState("");
  const [isSideMenuNew, setSideMenuNew] = useState("");
  const [isSideMenuTwo, setSideMenuTwo] = useState("");
  const toggleSidebar = (value) => {
    console.log(value);
    setSideMenu(value);
  };

  const toggleSidebarNew = (value) => {
    console.log(value);
    setSideMenuNew(value);

  };
  const toggleSidebarTwo = (value) => {
    console.log(value);
    setSideMenuTwo(value);

  };

  return (
    <>

      <div className="sidebar" id="sidebar">
        <Scrollbars
          autoHide
          autoHideTimeout={1000}
          autoHideDuration={200}
          autoHeight
          autoHeightMin={0}
          autoHeightMax="95vh"
          thumbMinSize={30}
          universal={false}
          hideTracksWhenNotNeeded={true}
        >
          <div className="sidebar-inner slimscroll">
            <div id="sidebar-menu" className="sidebar-menu">
              <ul>
                <li className="menu-title">
                  <span>Main</span>
                </li>
                <li className={pathname === '/admin/index' ? "active" : ""}>
                  <Link to="/admin/index">
                    <FeatherIcon icon="home" /> <span>Dashboard</span>
                  </Link>
                </li>
                <li className={pathname === '/admin/categories' ? 'active' : ""}>
                  <Link to="/admin/categories">
                    <FeatherIcon icon="copy" /> <span>Categories</span>
                  </Link>
                </li>
                <li className={pathname === '/admin/projects' ? 'active' : ""}>
                  <Link to="/admin/projects">
                    <FeatherIcon icon="database" /> <span>Projects</span>
                  </Link>
                </li>
                <li className={pathname === '/admin/users'  ? 'active' : '' || pathname === '/admin/user-active' ? 'active' : '' || pathname === '/admin/user-inactive' ? 'active' : ''|| pathname === '/admin/user-suspended' ? 'active' : ''|| pathname === '/admin/user-administrator' ? 'active' : ''}>
                  <Link to="/admin/users">
                    <FeatherIcon icon="users" /> <span>Freelancer</span>
                  </Link>
                </li>
                <li className={pathname === '/admin/deposit' ? 'active' : '' || pathname === 'admin/deposit-pending' ? 'active' : '' || pathname === '/admin/deposit-hold' ? 'active':'' || pathname === '/admin/deposit-cancelled' ? 'active' : '' || pathname === '/admin/deposit-completed' ? 'active' : ''}>
                  <Link to="/admin/deposit">
                    <FeatherIcon icon="user-check" /> <span>Deposit</span>
                  </Link>
                </li>
                <li className={pathname === '/admin/withdrawn' ? 'active' : '' || pathname === '/admin/withdrawn-pending' ? 'active' : '' || pathname === '/admin/withdrawn-cancelled' ? 'active': '' || pathname === '/admin/withdrawn-completed' ? 'active': ''}>
                  <Link to="/admin/withdrawn">
                    <FeatherIcon icon="user-check" /> <span>Withdrawn</span>
                  </Link>
                </li>
                <li className={pathname === '/admin/transaction' ? 'active' : '' || pathname === '/admin/transaction-deposit' ? 'active' : '' || pathname === '/admin/transaction-withdraw' ? 'active': '' || pathname === '/admin/transaction-pending' ? 'active' : '' || pathname === '/admin/transaction-onhold' ? 'active': '' || pathname === '/admin/transaction-completed' ? 'active': ''}>
                  <Link to="/admin/transaction">
                    <FeatherIcon icon="clipboard" /> <span>Transaction</span>
                  </Link>
                </li>
                <li className={pathname === '/admin/providers' ? 'active' : ''}>
                  <Link to="/admin/providers">
                    <FeatherIcon icon="user-check" /> <span>Providers</span>
                  </Link>
                </li>
                <li className={pathname === '/admin/subscription' ? 'active' : '' || pathname === '/admin/subscripe-freelancer'? 'active' : '' || pathname ==='/admin/view-price-employe'?'active':'' || pathname ==='/admin/employe-list'?'active':'' || pathname ==='/admin/freelance-list'?'active':''|| pathname ==='/admin/view-price-freelance'?'active':''}>
                  <Link to="/admin/subscription">
                    <FeatherIcon icon="user-check" /> <span>Subscription</span>
                  </Link>
                </li>
                <li className={pathname === '/admin/reports' ? 'active' : ''}>
                  <Link to="/admin/reports">
                    <FeatherIcon icon="pie-chart" /> <span>Reports</span>
                  </Link>
                </li>
                <li className={pathname === '/admin/roles' ? 'active' : ''}>
                  <Link to="/admin/roles">
                    <FeatherIcon icon="clipboard" /> <span>Roles</span>
                  </Link>
                </li>
                <li className={pathname === '/admin/skills' ? 'active' : ''}>
                  <Link to="/admin/skills">
                    <FeatherIcon icon="award" /> <span>Skills</span>
                  </Link>
                </li>
                <li className={pathname === '/admin/verify-identity' ? 'active' : ''}>
                  <Link to="/admin/verify-identity">
                    <FeatherIcon icon="user-check" /> <span>Verify Identity</span>
                  </Link>
                </li>
                <li className={pathname === '/admin/settings' ? 'active' : ''}>
                  <Link to="/admin/settings">
                    <FeatherIcon icon="settings" /> <span>Settings</span>
                  </Link>
                </li>
                <li className="menu-title">
                  <span>UI Interface</span>
                </li>
                <li className={pathname === '/admin/components' ? 'active' : ''}>
                  <Link to="/admin/components">
                    <FeatherIcon icon="pocket" /> <span>Components</span>
                  </Link>
                </li>
                <li className="submenu">
                  <Link to="#" className={isSideMenu === 'forms' ? 'subdrop': ''} onClick={()=> toggleSidebar(isSideMenu === "forms" ? "" : "forms")}>
                    <FeatherIcon icon="file-minus" /> <span> Forms</span>{" "}
                    <span className="menu-arrow" />
                  </Link>
                  <ul style={{ display: isSideMenu === "forms" ? "block" : "none" }}>
                    <li className={pathname === '/admin/form-basic-inputs' ? 'active' : ''}>
                      <Link to="/admin/form-basic-inputs">Basic Inputs</Link>
                    </li>
                    <li className={pathname === '/admin/form-input-groups' ? 'active' : ''}>
                      <Link to="/admin/form-input-groups">Input Groups</Link>
                    </li>
                    <li className={pathname === '/admin/form-horizontal' ? 'active' : ''}>
                      <Link to="/admin/form-horizontal">Horizontal Form</Link>
                    </li>
                    <li className={pathname === '/admin/form-vertical' ? 'active' : ''}>
                      <Link to="/admin/form-vertical">Vertical Form</Link>
                    </li>
                    <li className={pathname === '/admin/form-mask' ? 'active' : ''}>
                      <Link to="/admin/form-mask">Form Mask</Link>
                    </li>
                    <li className={pathname === '/admin/form-validation' ? 'active' : ''}>
                      <Link to="/admin/form-validation">Form Validation</Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link to="#" className={isSideMenu === "tables" ? "subdrop" : ""} onClick={() => toggleSidebar(isSideMenu === "tables" ? "" : "tables")}><FeatherIcon icon="align-justify" /> <span> Tables </span> <span className="menu-arrow" /></Link>
                  <ul style={{ display: isSideMenu === "tables" ? "block" : "none" }}>
                    <li className={pathname.includes('tables-basic') ? "active" : ""}><Link to="/admin/tables-basic">Basic Tables </Link></li>
                    <li className={pathname.includes('data-tables') ? "active" : ""}><Link to="/admin/data-tables"> Data Table </Link></li>
                  </ul>
                </li>

              </ul>
            </div>
          </div>
        </Scrollbars>
      </div>
    </>
  );
}


export default withRouter(Sidebar);
