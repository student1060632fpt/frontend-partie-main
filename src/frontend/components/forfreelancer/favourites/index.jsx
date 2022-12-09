import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { Flags_us,Flags_de,company_img1,company_img2,company_img3,company_img4,company_img9 } from "../../imagepath";
import { Sidebar } from '../sidebar';
    
const FreelancerFavourites = (props) => {  
  useEffect(() => {
    document.body.className = 'dashboard-page';
    return () => { document.body.className = ''; }
  });
  return (
    <>
    {/* Page Content */}
    <div className="content bookmark">
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
                  <Link
                    className="nav-link active"
                    to="/freelancer-favourites"
                  >
                    Bookmarked Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/freelancer-invitations">
                    Invitations
                  </Link>
                </li>
              </ul>
            </nav>
            {/* project list */}
            <div className="my-projects-view">
              <div className="row">
                <div className="col-lg-12">
                  <div className="pro-post mb-4">
                    <div className="project-table">
                      <div className="table-responsive">
                        <h3>BOOKMARKED PROJECTS</h3>
                        <table className="table table-hover table-center mb-0 datatable">
                          <thead className="thead-pink">
                            <tr>
                              <th>Project name</th>
                              <th>Client Detail</th>
                              <th>Location</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                3D Renders and Amazon Product Store images/Video
                              </td>
                              <td>
                                <h2 className="table-avatar">
                                  <Link
                                    to="/project-details"
                                    className="avatar avatar-md tab-imgcircle me-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src={company_img1}
                                      alt="User Image"
                                    />
                                  </Link>
                                  <Link to="/project-details">
                                    <span className="profile-name">
                                      Amaze Tech
                                    </span>
                                    <span>UI/UX Designer</span>
                                    <span className="rating mt-2">
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star" />
                                    </span>
                                  </Link>
                                </h2>
                              </td>
                              <td>
                                <h2 className="table-avatar">
                                  <img
                                    src={Flags_de}
                                    className="me-2"
                                    alt=""
                                    height={16}
                                  />{" "}
                                  GERMANY
                                </h2>
                              </td>
                              <td>
                                <a href="" className="fav">
                                  <i className="fas fa-heart filled" />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                Website Designer Required For Directory Theme
                              </td>
                              <td>
                                <h2 className="table-avatar">
                                  <Link
                                    to="/project-details"
                                    className="avatar avatar-md tab-imgcircle me-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src={company_img2}
                                      alt="User Image"
                                    />
                                  </Link>
                                  <Link to="/project-details">
                                    <span className="profile-name">
                                      Park Inc{" "}
                                    </span>
                                    <span>PHP Developer</span>
                                    <span className="rating mt-2">
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star" />
                                    </span>
                                  </Link>
                                </h2>
                              </td>
                              <td>
                                <h2 className="table-avatar">
                                  <img
                                    src={Flags_us}
                                    className="me-2"
                                    alt=""
                                    height={16}
                                  />{" "}
                                  USA
                                </h2>
                              </td>
                              <td>
                                <a href="" className="fav">
                                  <i className="fas fa-heart filled" />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                WooCommerce Product Page Back Up Restoration
                              </td>
                              <td>
                                <h2 className="table-avatar">
                                  <Link
                                    to="/project-details"
                                    className="avatar avatar-md tab-imgcircle me-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src={company_img3}
                                      alt="User Image"
                                    />
                                  </Link>
                                  <Link to="/project-details">
                                    <span className="profile-name">
                                      Tech Zone{" "}
                                    </span>
                                    <span>Graphic Designer</span>
                                    <span className="rating mt-2">
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star" />
                                    </span>
                                  </Link>
                                </h2>
                              </td>
                              <td>
                                <h2 className="table-avatar">
                                  <img
                                    src={Flags_de}
                                    className="me-2"
                                    alt=""
                                    height={16}
                                  />{" "}
                                  GERMANY
                                </h2>
                              </td>
                              <td>
                                <a href="" className="fav">
                                  <i className="fas fa-heart filled" />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                Laravel Backend Developer to finish ongoing
                                project
                              </td>
                              <td>
                                <h2 className="table-avatar">
                                  <Link
                                    to="/project-details"
                                    className="avatar avatar-md tab-imgcircle me-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src={company_img4}
                                      alt="User Image"
                                    />
                                  </Link>
                                  <Link to="/project-details">
                                    <span className="profile-name">
                                      Abc Software
                                    </span>
                                    <span>iOS Developer</span>
                                    <span className="rating mt-2">
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star" />
                                    </span>
                                  </Link>
                                </h2>
                              </td>
                              <td>
                                <h2 className="table-avatar">
                                  <img
                                    src={Flags_us}
                                    className="me-2"
                                    alt=""
                                    height={16}
                                  />{" "}
                                  USA
                                </h2>
                              </td>
                              <td>
                                <a href="" className="fav">
                                  <i className="fas fa-heart filled" />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                3D Renders and Amazon Product Store images/Video
                              </td>
                              <td>
                                <h2 className="table-avatar">
                                  <Link
                                    to="/project-details"
                                    className="avatar avatar-md tab-imgcircle me-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src={company_img9}
                                      alt="User Image"
                                    />
                                  </Link>
                                  <Link to="/project-details">
                                    <span className="profile-name">
                                      Soft Technologies{" "}
                                    </span>
                                    <span>UI/UX Designer</span>
                                    <span className="rating mt-2">
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star" />
                                    </span>
                                  </Link>
                                </h2>
                              </td>
                              <td>39 Oct 2021</td>
                              <td>
                                <h2 className="table-avatar">
                                  <img
                                    src={Flags_us}
                                    className="me-2"
                                    alt=""
                                    height={16}
                                  />{" "}
                                  USA
                                </h2>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* project list */}
          </div>
        </div>
      </div>
    </div>
    {/* /Page Content */}
    {/* The Modal */}
  <div className="modal fade" id="bookmark">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">INVITE FREELANCER</h4>
          <span className="modal-close">
            <a href="#" data-bs-dismiss="modal" aria-label="Close">
              <i className="far fa-times-circle orange-text" />
            </a>
          </span>
        </div>
        <div className="modal-body">
          <form action="#">
            <div className="modal-info">
              <div className="row">
                <div className="col-md-12">
                  <div className="average-bids">
                    <p>
                      Contact <span className="text-highlight">John Doe </span>{" "}
                      about your Project
                    </p>
                  </div>
                  <div className="form-group">
                    <label>Invite title</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Send a private message</label>
                    <textarea
                      className="form-control"
                      rows={5}
                      defaultValue={
                        "Hi  John Doe, I noticed your profile and would like to offer you my project. We can discuss any details over chat."
                      }
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Hire for</label>
                    <div className="radio">
                      <label className="custom_radio">
                        <input
                          type="radio"
                          defaultValue="fix"
                          name="fix"
                          defaultChecked
                        />
                        <span className="checkmark" /> Fixed Price
                      </label>
                      <label className="custom_radio">
                        <input type="radio" defaultValue="fix" name="fix" />
                        <span className="checkmark" /> Hourly Rate
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Hire for</label>
                    <div className="radio">
                      <label className="custom_radio">
                        <input type="radio" defaultValue="fix" name="fix" />
                        <span className="checkmark" /> Fixed Price
                      </label>
                      <label className="custom_radio">
                        <input type="radio" defaultValue="fix" name="fix" />
                        <span className="checkmark" /> Hourly Rate
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Budget</label>
                    <div className="form-row">
                      <div className="col-6">
                        <div className="input-group">
                          <div className="input-group-prepend bg-pink">
                            <span className="input-group-text" id="basic-add">
                              $
                            </span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            placeholder={20.0}
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        <select className="form-control select">
                          <option value={0}>USD</option>
                          <option value={0}>USD</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Budget</label>
                    <div className="form-row">
                      <div className="col-6">
                        <div className="input-group form-inline">
                          <div className="input-group-prepend bg-pink">
                            <span className="input-group-text" id="basic-addon">
                              $
                            </span>
                          </div>
                          <input
                            type="text"
                            className="form-control me-1"
                            placeholder={20.0}
                          />{" "}
                          <label>/ hr</label>
                        </div>
                      </div>
                      <div className="col-6">
                        <select className="form-control select">
                          <option value={0}>USD</option>
                          <option value={0}>USD</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Project</label>
                    <select className="form-control select">
                      <option value={0}>
                        3D Renders and Amazon Product Store images/Video
                      </option>
                      <option value={0}>
                        3D Renders and Amazon Product Store Video
                      </option>
                      <option value={0}>
                        3D Renders and Amazon Product Store images
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="submit-section text-end">
              <button type="submit" className="btn btn-primary submit-btn">
                Send Invite
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
export default FreelancerFavourites;