import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { Sidebar } from '../sidebar';
    
const ChangePassword = (props) => {  
  useEffect(() => {
    document.body.className = 'dashboard-page';
    return () => { document.body.className = ''; }
  });  
  return (
    <>
    {/* Page Content */}
    <div className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-3 col-md-4 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                  <Sidebar/>
              </StickyBox>
          </div>
          <div className="col-xl-9 col-md-8">
            <nav className="user-tabs mb-4">
              <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
              <li className="nav-item">
                    <Link className="nav-link" to="/profile-settings">
                      Basic Settings
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/change-password">
                      Change Password
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/delete-account">
                      Delete Account
                    </Link>
                  </li>
              </ul>
            </nav>
            {/* Password Content */}
            <div className="account-content setting-content">
              <div className="pro-card">
                <div className="pro-head">
                  <h3 className="pro-title without-border mb-0">
                    Change Password
                  </h3>
                </div>
                <div className="pro-body">
                  <div className="row">
                    <div className="col-md-8">
                      <form>
                        <div className="form-group">
                          <label>Old Password</label>
                          <input type="password" className="form-control" />
                        </div>
                        <div className="form-group">
                          <label>New Password</label>
                          <input type="password" className="form-control" />
                        </div>
                        <div className="form-group">
                          <label>Confirm Password</label>
                          <input type="password" className="form-control" />
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <button
                              className="btn btn-primary click-btn btn-plan"
                              type="submit"
                            >
                              Update
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Password Content */}
          </div>
        </div>
      </div>
    </div>
    {/* /Page Content */}
  </>
      )
  
}
export default ChangePassword;