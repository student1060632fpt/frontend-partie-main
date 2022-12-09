import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { Flags_us,Flags_de,Img_01,Img_02,Img_03,Img_04,Img_05 } from "../../imagepath";
import { Sidebar } from '../sidebar';
    
const Favourites = (props) => {  
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
              {/* sidebar */}
              <div className="col-xl-3 col-md-4 theiaStickySidebar">
                <StickyBox offsetTop={20} offsetBottom={20}>
                    <Sidebar/>
                </StickyBox>
              </div>
              {/* /sidebar */}
              <div className="col-xl-9 col-md-8">
                <nav className="user-tabs mb-4">
                  <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                    <li className="nav-item">
                      <Link className="nav-link active" to="/favourites">
                        Bookmarked Freelancers
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/invited-freelancer">
                        Invited Freelancers
                      </Link>
                    </li>
                  </ul>
                </nav>
                {/* project list */}
                <div className="my-projects-view">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="card">
                        <div className="card-header">
                          <h5 className="card-title">Bookmarked Freelancers</h5>
                        </div>
                        <div className="card-body">
                          <div className="table-responsive table-box">
                            <table className="table table-hover table-center mb-0 datatable">
                              <thead className="thead-pink">
                                <tr>
                                  <th>Freelancer Detail</th>
                                  <th>Hourly Rate</th>
                                  <th>Projects Completed</th>
                                  <th>Location</th>
                                  <th>Status</th>
                                  <th />
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <h2 className="table-avatar">
                                      <Link
                                        to="/freelancer-profile"
                                        className="avatar avatar-md tab-imgcircle me-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src={Img_02}
                                          alt="User Image"
                                        />
                                      </Link>
                                      <Link to="/freelancer-profile">
                                        <span className="profile-name">
                                          Andrew Glover
                                        </span>
                                        <span>Software Developer</span>
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
                                  <td>300 /Hr</td>
                                  <td>40</td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <img
                                        src={Flags_de}
                                        className="me-2"
                                        alt = ""
                                        height={16}
                                      />{" "}
                                      Germany
                                    </h2>
                                  </td>
                                  <td>
                                    <a href="" className="fav">
                                      <i className="fas fa-heart filled" />
                                    </a>
                                  </td>
                                  <td className="text-end">
                                    <div className="table-action">
                                      <a
                                        data-bs-toggle="modal"
                                        href="#bookmark"
                                        className="btn btn-primary btn-invite"
                                      >
                                        Invite Project
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <h2 className="table-avatar">
                                      <Link
                                        to="/freelancer-profile"
                                        className="avatar avatar-md tab-imgcircle me-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src={Img_03}
                                          alt="User Image"
                                        />
                                      </Link>
                                      <Link to="/freelancer-profile">
                                        <span className="profile-name">
                                          Mickey Bernier
                                        </span>{" "}
                                        <span>QA Engineer</span>
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
                                  <td>150 /Hr</td>
                                  <td>20</td>
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
                                      <i className="far fa-heart" />
                                    </a>
                                  </td>
                                  <td className="text-end">
                                    <div className="table-action">
                                      <a
                                        data-bs-toggle="modal"
                                        href="#bookmark"
                                        className="btn btn-primary btn-invite"
                                      >
                                        Invite Project
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <h2 className="table-avatar">
                                      <Link
                                        to="/freelancer-profile"
                                        className="avatar avatar-md tab-imgcircle me-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src={Img_04}
                                          alt="User Image"
                                        />
                                      </Link>
                                      <Link to="freelancer-profile">
                                        <span className="profile-name">
                                          Tony Ingle
                                        </span>{" "}
                                        <span>Business Analyst</span>
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
                                  <td>220 /Hr</td>
                                  <td>35</td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <img
                                        src={Flags_de}
                                        className="me-2"
                                        alt=""
                                        height={16}
                                      />{" "}
                                      Germany
                                    </h2>
                                  </td>
                                  <td>
                                    <a href="" className="fav">
                                      <i className="fas fa-heart filled" />
                                    </a>
                                  </td>
                                  <td className="text-end">
                                    <div className="table-action">
                                      <a
                                        data-bs-toggle="modal"
                                        href="#bookmark"
                                        className="btn btn-primary btn-invite"
                                      >
                                        Invite Project
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <h2 className="table-avatar">
                                      <Link
                                        to="/freelancer-profile"
                                        className="avatar avatar-md tab-imgcircle me-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src={Img_05}
                                          alt="User Image"
                                        />
                                      </Link>
                                      <Link to="/freelancer-profile">
                                        <span className="profile-name">
                                          Timothy Smith
                                        </span>{" "}
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
                                  <td>420 /Hr</td>
                                  <td>60</td>
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
                                      <i className="far fa-heart" />
                                    </a>
                                  </td>
                                  <td className="text-end">
                                    <div className="table-action">
                                      <a
                                        data-bs-toggle="modal"
                                        href="#bookmark"
                                        className="btn btn-primary btn-invite"
                                      >
                                        Invite Project
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <h2 className="table-avatar">
                                      <Link
                                        to="/freelancer-profile"
                                        className="avatar avatar-md tab-imgcircle me-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src={Img_01}
                                          alt="User Image"
                                        />
                                      </Link>
                                      <Link to="freelancer-profile">
                                        <span className="profile-name">
                                          David Peterson
                                        </span>{" "}
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
                                  <td>200 /Hr</td>
                                  <td>25</td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <img
                                        src={Flags_de}
                                        className="me-2"
                                        alt=""
                                        height={16}
                                      />{" "}
                                      Germany
                                    </h2>
                                  </td>
                                  <td>
                                    <a href="" className="fav">
                                      <i className="far fa-heart" />
                                    </a>
                                  </td>
                                  <td className="text-end">
                                    <div className="table-action">
                                      <a
                                        data-bs-toggle="modal"
                                        href="#bookmark"
                                        className="btn btn-primary btn-invite"
                                      >
                                        Invite Project
                                      </a>
                                    </div>
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
                <form>
                  <div className="modal-info">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="average-bids mb-4">
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
                            <label className="custom_radio me-2">
                              <input type="radio" defaultValue="fix" defaultChecked />
                              <span className="checkmark" /> Fixed Price
                            </label>
                            <label className="custom_radio">
                              <input type="radio" defaultValue="fix" />
                              <span className="checkmark" /> Hourly Rate
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Hire for</label>
                          <div className="radio">
                            <label className="custom_radio me-2">
                              <input
                                type="radio"
                                defaultValue="rate"
                                defaultChecked
                              />
                              <span className="checkmark" /> Fixed Price
                            </label>
                            <label className="custom_radio">
                              <input type="radio" defaultValue="rate" />
                              <span className="checkmark" /> Hourly Rate
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Budget</label>
                          <div className="form-row">
                            <div className="col-7">
                              <div className="input-group">
                                <div className="input-group-prepend bg-pink d-flex">
                                  <span
                                    className="input-group-text"
                                    id="basic-addon1"
                                  >
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
                            <div className="col-5">
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
                            <div className="col-sm-7">
                              <div className="input-group form-inline mb-2">
                                <div className="input-group-prepend bg-pink d-flex">
                                  <span className="input-group-text" id="basic-add">
                                    $
                                  </span>
                                </div>
                                <input
                                  type="text"
                                  className="form-control me-1"
                                  placeholder={20.0}
                                />
                                <label className="invited-freelancer-label">
                                  / hr
                                </label>
                              </div>
                            </div>
                            <div className="col-sm-5">
                              <select className="form-control select form-select">
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
                          <select className="form-control select form-select">
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
export default Favourites;