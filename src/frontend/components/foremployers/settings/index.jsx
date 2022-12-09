import React , {useEffect} from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { Img_02 } from "../../imagepath";
import { Sidebar } from '../sidebar';
    
const Settings = (props) => {   
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
          {/* sidebar */}
          <div className="col-xl-3 col-md-4 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <Sidebar/>
              </StickyBox>
          </div>
          {/* /sidebar */}
          <div className="col-xl-9 col-md-8">
            <div className="pro-pos">
              <nav className="user-tabs mb-4">
                <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                  <li className="nav-item">
                    <Link className="nav-link active" to="/profile-settings">
                      Basic Settings
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/change-password">
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
              <div className="setting-content">
                <div className="card">
                  <div className="pro-head">
                    <h3 className="pro-title without-border mb-0">
                      Profile Basics{" "}
                    </h3>
                  </div>
                  <form >
                    <div className="pro-body p-0">
                      <div className="form-row pro-pad">
                        <div className="form-group col-md-6">
                          <label>Username</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="form-group col-md-6">
                          <label>Email Address</label>
                          <input type="email" className="form-control" />
                        </div>
                        <div className="form-group col-md-6">
                          <label>Dispaly Name</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="form-group col-md-6">
                          <label>Tagline</label>
                          <input type="email" className="form-control" />
                        </div>
                        <div className="form-group col-md-6">
                          <label>Contact Number</label>
                          <input type="email" className="form-control" />
                        </div>
                        <div className="form-group col-md-6">
                          <label>Category</label>
                          <select className="form-control select">
                            <option value={0}>Male</option>
                            <option value={1}>Female</option>
                          </select>
                        </div>
                        <div className="form-group col-md-6">
                          <label>Gender</label>
                          <select className="form-control select">
                            <option value={0}>Male</option>
                            <option value={1}>Female</option>
                          </select>
                        </div>
                        <div className="form-group col-md-6">
                          <label>Language </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="form-row pro-pad pt-0">
                        <div className="form-group col-md-6 pro-pic">
                          <label>Profile Picture</label>
                          <div className="d-flex align-items-center">
                            <div className="upload-images">
                              <img src={Img_02} alt="Image" />
                              <a
                                href=""
                                className="btn btn-icon btn-danger btn-sm"
                              >
                                <i className="far fa-trash-alt" />
                              </a>
                            </div>
                            <label className="file-upload image-upbtn ms-3">
                              Change Image <input type="file" />
                            </label>
                          </div>
                          <p>Image size 300*300</p>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="card">
                  <div className="pro-head">
                    <h3 className="pro-title without-border mb-0">Location</h3>
                  </div>
                  <div className="pro-body">
                    <div className="row">
                      <div className="form-group col-md-12">
                        <label>Address</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group col-md-6">
                        <label>State</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group col-md-6">
                        <label>Zipcode</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group col-md-6">
                        <label>Country</label>
                        <select className="form-control select">
                          <option value={0}>India</option>
                          <option value={1}>China</option>
                          <option value={2}>Japan</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="pro-head">
                    <h3 className="pro-title without-border mb-0">Overview</h3>
                  </div>
                  <div className="pro-body">
                    <div className="row">
                      <div className="form-group col-md-12">
                        <textarea
                          className="form-control"
                          rows={5}
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="pro-head">
                    <h3 className="pro-title without-border mb-0">
                      Social Links
                    </h3>
                  </div>
                  <div className="pro-body">
                    <div className="row">
                      <div className="form-group col-md-6">
                        <label>Facebook</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group col-md-6">
                        <label>Dribble</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group col-md-6">
                        <label>Twitter</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group col-md-6">
                        <label>LinkedIn</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group col-md-6">
                        <label>Behance</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group col-md-6">
                        <label>Behance</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="text-end">
                    <div className="pro-body">
                      <button
                        className="btn btn-secondary click-btn btn-plan"
                        type="submit"
                      >
                        Cancel
                      </button>&nbsp;
                      <button
                        className="btn btn-primary click-btn btn-plan"
                        type="submit"
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* /Page Content */}
  </>
      )
  
}
export default Settings;