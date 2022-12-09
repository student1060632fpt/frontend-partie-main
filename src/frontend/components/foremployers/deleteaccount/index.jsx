import React , {useEffect} from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { Sidebar } from '../sidebar';
    
const DeleteAccount = (props) => {   
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
                    <Link className="nav-link" to="/change-password">
                      Change Password
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/delete-account">
                      Delete Account
                    </Link>
                  </li>
              </ul>
            </nav>
            <div className="setting-content">
              <div className="pro-card">
                <div className="pro-head">
                  <h3 className="pro-title without-border mb-0">
                    Delete Account
                  </h3>
                </div>
                <div className="pro-body">
                  <form >
                    <div className="form-group">
                      <label>Please Explain Further**</label>
                      <textarea
                        className="form-control"
                        rows={5}
                        defaultValue={""}
                      />
                    </div>
                    <div className="form-group">
                      <label>Password*</label>
                      <input type="password" className="form-control" />
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <a
                          className="btn btn-primary click-btn btn-plan"
                          data-bs-toggle="modal"
                          href="#delete-acc"
                        >
                          Delete Account
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* /Page Content */}
     {/* The Modal */}
  <div className="modal fade custom-modal" id="delete-acc">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-body del-modal">
          <form>
            <div className="text-center pt-0 mb-5">
              <i className="fas fa-exclamation-triangle fa-3x" />
              <h3>Are you sure? Want to delete Account</h3>
            </div>
            <div className="submit-section text-center">
              <button
                data-bs-dismiss="modal"
                className="btn btn-primary black-btn click-btn"
              >
                Cancel
              </button>&nbsp;
              <button type="submit" className="btn btn-primary click-btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* /The Modal */}
  </>
      )
  
}
export default DeleteAccount;