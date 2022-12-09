import React , {useEffect} from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { Img,Img_02 } from "../../imagepath";
import { Sidebar } from '../sidebar';
    
const FreelancerSettings = (props) => {   
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
            <div className="pro-pos">
              <nav className="user-tabs mb-4">
                <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                  <li className="nav-item">
                  <Link className="nav-link active" to="/freelancer-profile-settings">
                    Profile Settings
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/freelancer-change-password"
                  >
                    Change Password
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/freelancer-delete-account">
                    Delete Account
                  </Link>
                  </li>
                </ul>
              </nav>
              <div className="setting-content">
                <form >
                  <div className="card">
                    <div className="pro-head">
                      <h3 className="pro-title without-border mb-0">
                        Profile Basics{" "}
                      </h3>
                    </div>
                    <div className="pro-body">
                      <div className="row">
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
                          <label>Designation</label>
                          <input type="email" className="form-control" />
                        </div>
                        <div className="form-group col-md-6">
                          <label>Hourly Rate</label>
                          <input type="text" className="form-control" />
                          <p className="light-pink-text mb-0">
                            Provide your hourly rate without currency symbol
                          </p>
                        </div>
                        <div className="form-group col-md-6">
                          <label>Contact Number</label>
                          <input type="email" className="form-control" />
                        </div>
                        <div className="form-group col-md-6">
                          <label>Gender</label>
                          <select name="price" className="form-control select">
                            <option value={0}>Male</option>
                            <option value={1}>Female</option>
                          </select>
                        </div>
                        <div className="form-group col-md-6">
                          <label>Type</label>
                          <select name="price" className="form-control select">
                            <option value={0}>Select Freelancer Type</option>
                            <option value={1}>Freelancer</option>
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
                        <div className="form-group col-md-6 pro-pic">
                          <label>Banner Image</label>
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
                          <p>Image size 1024*100</p>
                        </div>
                      </div>
                    </div>
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
                          <select name="price" className="form-control select">
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
                  <div className="form-row">
                    <div className="col-md-12 col-xl-4 d-flex">
                      <div className="pro-card flex-fill mb-3">
                        <div className="pro-head">
                          <h3 className="pro-title without-border mb-0">
                            Skills
                          </h3>
                          <a href="#" className="btn fund-btn skill-add">
                            Add More
                          </a>
                        </div>
                        <div className="pro-body skill-info">
                          <div className="form-row align-items-center skill-cont">
                            <div className="form-group col-md-10">
                              <input
                                type="text"
                                className="form-control"
                                defaultValue="Front End Developer"
                              />
                            </div>
                            <div className="form-group col-md-2">
                              <a href="#" className="btn trash-icon">
                                <i className="far fa-trash-alt" />
                              </a>
                            </div>
                          </div>
                          <div className="form-row align-items-center skill-cont">
                            <div className="form-group col-md-10">
                              <input
                                type="text"
                                className="form-control"
                                defaultValue="Front End Developer"
                              />
                            </div>
                            <div className="form-group col-md-2">
                              <a href="#" className="btn trash-icon">
                                <i className="far fa-trash-alt" />
                              </a>
                            </div>
                          </div>
                          <div className="form-row align-items-center skill-cont">
                            <div className="form-group col-md-10">
                              <input
                                type="text"
                                className="form-control"
                                defaultValue="Front End Developer"
                              />
                            </div>
                            <div className="form-group col-md-2">
                              <a href="#" className="btn trash-icon">
                                <i className="far fa-trash-alt" />
                              </a>
                            </div>
                          </div>
                          <div className="form-row align-items-center skill-cont">
                            <div className="form-group col-md-10">
                              <input
                                type="text"
                                className="form-control"
                                defaultValue="Front End Developer"
                              />
                            </div>
                            <div className="form-group col-md-2">
                              <a href="#" className="btn trash-icon">
                                <i className="far fa-trash-alt" />
                              </a>
                            </div>
                          </div>
                          <div className="form-row align-items-center skill-cont">
                            <div className="form-group col-md-10">
                              <input
                                type="text"
                                className="form-control"
                                defaultValue="Front End Developer"
                              />
                            </div>
                            <div className="form-group col-md-2">
                              <a href="#" className="btn trash-icon">
                                <i className="far fa-trash-alt" />
                              </a>
                            </div>
                          </div>
                          <div className="form-row align-items-center skill-cont">
                            <div className="form-group col-md-10">
                              <input
                                type="text"
                                className="form-control"
                                defaultValue="Front End Developer"
                              />
                            </div>
                            <div className="form-group col-md-2">
                              <a href="#" className="btn trash-icon">
                                <i className="far fa-trash-alt" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 col-xl-8">
                      <div className="card">
                        <div className="pro-head">
                          <h3 className="pro-title without-border mb-0">
                            Awards / Certificates
                          </h3>
                          <a href="#" className="btn fund-btn add-award">
                            Add More
                          </a>
                        </div>
                        <div className="pro-body  award-info">
                          <div className="form-row align-items-center award-cont">
                            <div className="form-group col-md-2">
                              <img
                                alt="profile image"
                                src={Img}
                                className="avatar-medium"
                              />
                            </div>
                            <div className="form-group col-md-5">
                              <input
                                type="text"
                                className="form-control"
                                defaultValue="Best Game Designer"
                              />
                            </div>
                            <div className="form-group col-md-3">
                              <input
                                type="text"
                                className="form-control datetimepicker"
                                defaultValue="05/10/2020"
                              />
                            </div>
                            <div className="form-group col-md-2">
                              <a href="#" className="btn trash-icon">
                                <i className="far fa-trash-alt" />
                              </a>
                            </div>
                          </div>
                          <div className="form-row align-items-center award-cont">
                            <div className="form-group col-md-2">
                              <img
                                alt="profile image"
                                src={Img}
                                className="avatar-medium"
                              />
                            </div>
                            <div className="form-group col-md-5">
                              <input
                                type="text"
                                className="form-control"
                                defaultValue="Best Game Designer"
                              />
                            </div>
                            <div className="form-group col-md-3">
                              <input
                                type="text"
                                className="form-control datetimepicker"
                                defaultValue="05/10/2020"
                              />
                            </div>
                            <div className="form-group col-md-2">
                              <a href="#" className="btn trash-icon">
                                <i className="far fa-trash-alt" />
                              </a>
                            </div>
                          </div>
                          <div className="form-row align-items-center award-cont">
                            <div className="form-group col-md-2">
                              <img
                                alt="profile image"
                                src={Img}
                                className="avatar-medium"
                              />
                            </div>
                            <div className="form-group col-md-5">
                              <input
                                type="text"
                                className="form-control"
                                defaultValue="Best Game Designer"
                              />
                            </div>
                            <div className="form-group col-md-3">
                              <input
                                type="text"
                                className="form-control datetimepicker"
                                defaultValue="05/10/2020"
                              />
                            </div>
                            <div className="form-group col-md-2">
                              <a href="#" className="btn trash-icon">
                                <i className="far fa-trash-alt" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="pro-head">
                          <h3 className="pro-title without-border mb-0">
                            Languages
                          </h3>
                          <a href="#" className="btn fund-btn add-lang">
                            Add More
                          </a>
                        </div>
                        <div className="pro-body  lang-info">
                          <div className="form-row align-items-center lang-cont">
                            <div className="form-group col-md-7">
                              <input
                                type="text"
                                className="form-control"
                                defaultValue="English"
                              />
                            </div>
                            <div className="form-group col-md-3">
                              <input
                                type="text"
                                className="form-control"
                                defaultValue={100}
                              />
                            </div>
                            <div className="form-group col-md-2">
                              <a href="#" className="btn trash-icon">
                                <i className="far fa-trash-alt" />
                              </a>
                            </div>
                          </div>
                          <div className="form-row align-items-center lang-cont">
                            <div className="form-group col-md-7">
                              <input
                                type="text"
                                className="form-control"
                                defaultValue="Russian"
                              />
                            </div>
                            <div className="form-group col-md-3">
                              <input
                                type="text"
                                className="form-control"
                                defaultValue={90}
                              />
                            </div>
                            <div className="form-group col-md-2">
                              <a href="#" className="btn trash-icon">
                                <i className="far fa-trash-alt" />
                              </a>
                            </div>
                          </div>
                          <div className="form-row align-items-center lang-cont">
                            <div className="form-group col-md-7">
                              <input
                                type="text"
                                className="form-control"
                                defaultValue="Germany"
                              />
                            </div>
                            <div className="form-group col-md-3">
                              <input
                                type="text"
                                className="form-control"
                                defaultValue={90}
                              />
                            </div>
                            <div className="form-group col-md-2">
                              <a href="#" className="btn trash-icon">
                                <i className="far fa-trash-alt" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="pro-head">
                      <h3 className="pro-title without-border mb-0">
                        Experience
                      </h3>
                      <a href="#" className="btn fund-btn add-exp">
                        Add More
                      </a>
                    </div>
                    <div className="pro-body">
                      <div className="exp-info">
                        <div className="row exp-cont">
                          <div className="form-group col-md-6">
                            <label>Title</label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="form-group col-md-6">
                            <label>Company name</label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="form-group col-md-6">
                            <label>Start date</label>
                            <input
                              type="text"
                              className="form-control datetimepicker"
                              placeholder="Select Date"
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label>End Date</label>
                            <input
                              type="text"
                              className="form-control datetimepicker"
                              placeholder="Select Date"
                            />
                          </div>
                          <div className="form-group col-md-12">
                            <label className="custom_check">
                              <input type="checkbox" name="rem_password" />
                              <span className="checkmark" /> I'm currently working
                              here
                            </label>
                          </div>
                          <div className="form-group col-md-12">
                            <label>Summary</label>
                            <textarea
                              className="form-control"
                              rows={5}
                              defaultValue={""}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="pro-head">
                      <h3 className="pro-title without-border mb-0">
                        Educational Details
                      </h3>
                      <a href="#" className="btn fund-btn">
                        Add More Skills
                      </a>
                    </div>
                    <div className="pro-body">
                      <div className="row">
                        <div className="form-group col-md-12">
                          <label>Degree Title</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="form-group col-md-6">
                          <label>University/College</label>
                          <select name="price" className="form-control select">
                            <option value={0}>Select University/College </option>
                            <option value={1}>University</option>
                            <option value={2}>University</option>
                          </select>
                        </div>
                        <div className="form-group col-md-6">
                          <label>Start year</label>
                          <input
                            type="text"
                            className="form-control datetimepicker"
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label>End year</label>
                          <input
                            type="text"
                            className="form-control datetimepicker"
                          />
                        </div>
                        <div className="form-group col-md-12">
                          <label>Summary</label>
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
                  <div className="card text-end">
                    <div className="pro-body">
                      <button className="btn btn-secondary click-btn btn-plan">
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
                </form>
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
export default FreelancerSettings;