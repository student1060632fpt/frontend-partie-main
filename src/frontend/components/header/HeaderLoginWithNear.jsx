import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const HeaderLoginWithNear = () => {
  let location = useLocation()
  const {wallet} = useSelector(state => state.wallet)


  const pathname = location.pathname.split("/")[1];
  return (
    <ul className="nav header-navbar-rht">
      <li className={pathname === "register" ? "active" : ""}>
        <Link to="/register" className="reg-btn">
          <i className="fas fa-user" /> Register
        </Link>
      </li>
      <li className={pathname === "login" ? "active" : ""}>
        <a  className="log-btn" onClick={() => wallet.signIn()}>
          <i className="fas fa-lock" /> Login with Near
        </a>
      </li>
      <li className={pathname === "post-project" ? "active" : ""}>
        <Link to="/post-project" className="login-btn">
          Post a Project{" "}
        </Link>
      </li>
    </ul>
  );
}

export default HeaderLoginWithNear