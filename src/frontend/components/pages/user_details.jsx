import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
// Import Images
import { Img_01,Img_02,Img_03,Img_04,Flags_pl,Tab_icon_01,Logo_01,Tab_icon_02,Tab_icon_05,Tab_icon_06,Tab_icon_07,
        Tab_icon_08,Project_img,Project_1,Project_2,Project_3,Project_4,Project_5,Project_6,Project_7,
          Redeem_icon,Pay_icon_01,Pay_icon_02,Pay_icon_03,company_img1,company_img2,company_img3,
          company_img4,company_img5 } from "../imagepath";


const UserDetails = () => {
    
        
        return (
          <>
            {/* Breadcrumb */}
            <div className="breadcrumb-bar">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 text-end">
                    <div className="inner-content">
                      <label className="file-upload image-btn">
                        Change Image <input type="file" />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Breadcrumb */}
            {/* Page Content */}
            <div className="content">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    {/* User Profile Details */}
                    <div className="profile">
                      <div className="profile-box">
                        <div className="provider-widget">
                          <div className="pro-info-left">
                            <div className="provider-img">
                              <img src={Img_04} alt="User" />
                              <div className="camera-bg">
                                <i className="fa fa-camera" />
                              </div>
                            </div>
                            <div className="profile-info profile-edit-form">
                              <h2 className="profile-title">John Danie</h2>
                              <div className="pro-text3">
                                <p className="profile-position">iOS Expert + Node Dev</p>
                                <div>
                                  <a href="#" className="btn full-btn">
                                    Full time
                                  </a>
                                </div>
                                <ul className="profile-preword">
                                  <li>
                                    <img src={Flags_pl} alt="" height={16} />{" "}
                                    Poland
                                  </li>
                                  <li>
                                    <div className="rating">
                                      <span className="average-rating">4.6</span>
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div className="pro-new3">
                                <div className="row">
                                  <div className="col-12">
                                    <form>
                                      <div className="form-row">
                                        <div className="form-group col-lg-4">
                                          <label>Professional Headline</label>
                                          <input
                                            type="text"
                                            className="form-control"
                                            placeholder="IOS Developer"
                                          />
                                        </div>
                                        <div className="form-group col-lg-4">
                                          <label>Select Work type</label>
                                          <select className="form-control select">
                                            <option>Select woktype</option>
                                          </select>
                                        </div>
                                        <div className="form-group col-lg-4">
                                          <label>Professional Headline</label>
                                          <input
                                            type="text"
                                            className="form-control"
                                            placeholder="IOS Developer"
                                          />
                                        </div>
                                      </div>
                                      <div className="form-row">
                                        <div className="form-group col-lg-4">
                                          <label>Hourly Rate</label>
                                          <div className="input-group">
                                            <div className="input-group-prepend">
                                              <span className="input-group-text">$</span>
                                            </div>
                                            <input
                                              type="text"
                                              className="form-control"
                                              placeholder="Username"
                                            />
                                            <div className="input-group-append">
                                              <span className="input-group-text">
                                                USD / HR
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="form-group col-lg-4">
                                          <label>Select Country</label>
                                          <select className="form-control select">
                                            <option>-</option>
                                          </select>
                                        </div>
                                        <div className="form-group col-lg-4">
                                          <label />
                                          <div className=" submit-profile-sec">
                                            <a
                                              href="#"
                                              className="btn btn-primary profile-update-btn"
                                            >
                                              Update
                                            </a>
                                            <a
                                              href="#"
                                              className="btn btn-light profile-cancel-btn"
                                            >
                                              Cancel
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="pro-info-right profile-inf">
                            <a href="#" id="edit_name" className="sub-title edit-sub-title" >
                              <i className="fa fa-pencil-alt me-1" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="profile-list">
                        <ul>
                          <li>
                            <span className="cont bg-blue">22</span>
                            <strong className="proj-title"> Completed Projects</strong>
                          </li>
                          <li>
                            <span className="cont bg-red">5</span>
                            <strong className="proj-title"> Ongoing Projects</strong>
                          </li>
                          <li>
                            <span className="cont bg-violet">89%</span>
                            <strong className="proj-title"> Recommended</strong>
                          </li>
                          <li>
                            <span className="cont bg-yellow">12</span>
                            <strong className="proj-title"> Rehired</strong>
                          </li>
                          <li>
                            <span className="cont bg-pink">48</span>
                            <strong className="proj-title"> Clients</strong>
                          </li>
                          <li>
                            <span className="cont bg-navy">5</span>
                            <strong className="proj-title"> Feedbacks</strong>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* /User Profile Details */}
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-8 col-md-12">
                    <div className="pro-view">
                      {/* Tab Heading */}
                      <nav className="provider-tabs mb-4">
                        <ul className="nav nav-tabs nav-tabs-solid nav-justified">
                          <li className="nav-item">
                            <a
                              className="nav-link active"
                              href="#overview"
                              data-bs-toggle="tab"
                            >
                              <img
                                className="img-fluid"
                                alt="User Image"
                                src={Tab_icon_01}
                              />
                              <p className="bg-red">Overview</p>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#bids" data-bs-toggle="tab">
                              <img
                                className="img-fluid"
                                alt="User Image"
                                src={Tab_icon_02}
                              />
                              <p className="bg-blue">Bids</p>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#jobs" data-bs-toggle="tab">
                              <img
                                className="img-fluid"
                                alt="User Image"
                                src={Tab_icon_05}
                              />
                              <p className="bg-pink">Jobs</p>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              href="#portfolio"
                              data-bs-toggle="tab"
                            >
                              <img
                                className="img-fluid"
                                alt="User Image"
                                src={Tab_icon_07}
                              />
                              <p className="bg-yellow">Portfolio</p>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              href="#feedbacks"
                              data-bs-toggle="tab"
                            >
                              <img
                                alt="User Image"
                                height={28}
                                src={Tab_icon_06}
                              />
                              <p className="bg-green">Feedbacks</p>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#payments" data-bs-toggle="tab">
                              <img
                                className="img-fluid"
                                alt="User Image"
                                src={Tab_icon_08}
                              />
                              <p className="bg-violet">Payments</p>
                            </a>
                          </li>
                        </ul>
                      </nav>
                      {/* /Tab Heading */}
                      {/* Tab Details */}
                      <div className="tab-content pt-0">
                        {/* Overview Tab Content */}
                        <div
                          role="tabpanel"
                          id="overview"
                          className="tab-pane fade show active"
                        >
                          <div className="pro-post widget-box">
                            <div className="row">
                              <div className="col-10">
                                <h3 className="pro-title">Overview</h3>
                              </div>
                              <div className="col-2 text-end">
                                <a
                                  href="#"
                                  id="edit_overview"
                                  className="sub-title edit-sub-title"
                                >
                                  <i className="fa fa-pencil-alt me-1" />
                                </a>
                              </div>
                            </div>
                            <div className="pro-overview">
                              <div className="pro-content">
                                <div className="pro-text1">
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim veniam, quis
                                    nostrud exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu
                                    fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia
                                    deserunt mollit anim id est laborum.
                                  </p>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Donec eget vestibulum lorem. Lorem ipsum dolor
                                    sit amet, consectetur adipiscing elit. Quisque tempor
                                    aliquam felis, nec condimentum ipsum commodo id.
                                    Vivamus sit amet augue nec urna efficitur tincidunt.
                                    Vivamus consectetur aliquam lectus commodo viverra.
                                    Nunc eu augue nec arcu efficitur faucibus.
                                  </p>
                                  <h4 className="widget-title">My services include:</h4>
                                  <ul className="pro-list">
                                    <li>Cross-platform games</li>
                                    <li>Game concept and level designing</li>
                                    <li>Multiplayer integration</li>
                                    <li>Re-skin</li>
                                    <li>
                                      Ads and in-app purchase (Maximize your Revenue)
                                    </li>
                                    <li>Game Optimisations</li>
                                    <li>2D/3D Animation</li>
                                  </ul>
                                  <p>
                                    Graphic DesigningSocial Network IntegrationVirtual
                                    Reality (VR)Augmented Reality (AR)Game con promotional
                                    graphics and video app store and Playstore publishing{" "}
                                  </p>
                                </div>
                                <div className="pro-new1">
                                  <div
                                    className="pro-edit scrollable"
                                    contentEditable="true" suppressContentEditableWarning={true}
                                  >
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur adipiscing
                                      elit, sed do eiusmod tempor incididunt ut labore et
                                      dolore magna aliqua. Ut enim ad minim veniam, quis
                                      nostrud exercitation ullamco laboris nisi ut aliquip
                                      ex ea commodo consequat. Duis aute irure dolor in
                                      reprehenderit in voluptate velit esse cillum dolore
                                      eu fugiat nulla pariatur. Excepteur sint occaecat
                                      cupidatat non proident, sunt in culpa qui officia
                                      deserunt mollit anim id est laborum.
                                    </p>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur adipiscing
                                      elit. Donec eget vestibulum lorem. Lorem ipsum dolor
                                      sit amet, consectetur adipiscing elit. Quisque
                                      tempor aliquam felis, nec condimentum ipsum commodo
                                      id. Vivamus sit amet augue nec urna efficitur
                                      tincidunt. Vivamus consectetur aliquam lectus
                                      commodo viverra. Nunc eu augue nec arcu efficitur
                                      faucibus.
                                    </p>
                                    <h4 className="widget-title">My services include:</h4>
                                    <ul className="pro-list">
                                      <li>Cross-platform games</li>
                                      <li>Game concept and level designing</li>
                                      <li>Multiplayer integration</li>
                                      <li>Re-skin</li>
                                      <li>
                                        Ads and in-app purchase (Maximize your Revenue)
                                      </li>
                                      <li>Game Optimisations</li>
                                      <li>2D/3D Animation</li>
                                    </ul>
                                    <p>
                                      Graphic DesigningSocial Network IntegrationVirtual
                                      Reality (VR)Augmented Reality (AR)Game con
                                      promotional graphics and video app store and
                                      Playstore publishing{" "}
                                    </p>
                                    <div className="row">
                                      <div className="col-lg-12 text-end">
                                        <a
                                          href="#"
                                          className="btn btn-primary profile-update-btn"
                                        >
                                          Update
                                        </a>
                                        <a
                                          href="#"
                                          className="btn btn-light profile-cancel-btn"
                                        >
                                          Cancel
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Experience */}
                          <div className="pro-post project-widget widget-box">
                            <div className="row">
                              <div className="col-md-6">
                                <h3 className="pro-title">Experience</h3>
                              </div>
                              <div className="col-md-6 text-end">
                                <a href="#" className="sub-title me-2">
                                  <i className="fa fa-plus me-1" /> Add Experience
                                </a>
                                <a
                                  href="#"
                                  id="edit_experiance"
                                  className="sub-title edit-sub-title"
                                >
                                  <i className="fa fa-pencil-alt me-1" />
                                </a>
                              </div>
                            </div>
                            <div className="pro-content">
                              <div className="widget-list mb-0 profile-edit-form">
                                <ul className="clearfix pro-text">
                                  <li>
                                    <h4>Logo Designer</h4>
                                    <h5>Techline march 19, 2019 - March 18, 2021</h5>
                                    <p>
                                      I am a professional graphic designer. I have more
                                      than 10-years of experience in graphics design. If
                                      you are looking for any graphic related work,
                                      contact me, I'll glad to help you.
                                    </p>
                                  </li>
                                  <li>
                                    <h4>Logo Designer</h4>
                                    <h5>Techline march 19, 2015 - March 18, 2019</h5>
                                    <p>
                                      I am a professional graphic designer. I have more
                                      than 8-years of experience in graphics design. If
                                      you are looking for any graphic related work,
                                      contact me, I'll glad to help you.
                                    </p>
                                  </li>
                                  <li>
                                    <h4>Logo Designer</h4>
                                    <h5>Techline July 9, 2010 - March 18, 2015</h5>
                                    <p>
                                      I am a professional graphic designer. I have more
                                      than 5-years of experience in graphics design. If
                                      you are looking for any graphic related work,
                                      contact me, I'll glad to help you.
                                    </p>
                                  </li>
                                </ul>
                                <div className="pro-overview pro-new">
                                  <form>
                                    <div className="form-row">
                                      <div className="form-group col-md-6">
                                        <label>Title</label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="Enter Position ot title"
                                        />
                                      </div>
                                      <div className="form-group col-md-6">
                                        <label>Company Name</label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="Enter Company name"
                                        />
                                      </div>
                                    </div>
                                    <div className="form-row">
                                      <div className="form-group col-md-6">
                                        <label>Start</label>
                                        <div className="form-row">
                                          <div className="col-md-6">
                                            <select className="form-control select">
                                              <option>Select</option>
                                            </select>
                                          </div>
                                          <div className="col-md-6">
                                            <select className="form-control select col-md-6">
                                              <option>Select</option>
                                            </select>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="form-group col-md-6">
                                        <label>End</label>
                                        <div className="form-row">
                                          <div className="col-md-6">
                                            <select className="form-control select">
                                              <option>Select</option>
                                            </select>
                                          </div>
                                          <div className="col-md-6">
                                            <select className="form-control select col-md-6">
                                              <option>Select</option>
                                            </select>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="form-check">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue
                                        id="defaultCheck1"
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="defaultCheck1"
                                      >
                                        I'm currently working here
                                      </label>
                                    </div>
                                    <div className="form-group">
                                      <label>Select</label>
                                      <textarea
                                        rows={6}
                                        className="form-control"
                                        defaultValue={""}
                                      />
                                    </div>
                                    <div className="row">
                                      <div className="col-lg-12 text-end">
                                        <a
                                          href="#"
                                          className="btn btn-primary profile-update-btn"
                                        >
                                          Update
                                        </a>
                                        <a
                                          href="#"
                                          className="btn btn-light profile-cancel-btn"
                                        >
                                          Cancel
                                        </a>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* /Experience */}
                          {/* Educational */}
                          <div className="pro-post project-widget widget-box">
                            <div className="row">
                              <div className="col-lg-6">
                                <h3 className="pro-title">Educational Details</h3>
                              </div>
                              <div className="col-lg-6 text-end">
                                <a href="#" className="sub-title me-2">
                                  <i className="fa fa-plus me-1" /> Add Education
                                </a>
                                <a
                                  href="#"
                                  id="edit_education"
                                  className="sub-title edit-sub-title"
                                >
                                  <i className="fa fa-pencil-alt me-1" />
                                </a>
                              </div>
                            </div>
                            <div className="pro-content">
                              <div className="widget-list mb-0">
                                <div className="pro-text2">
                                  <ul className="clearfix">
                                    <li>
                                      <div className="dropdown profile-action">
                                        <a
                                          href="#"
                                          className="action-icon dropdown-toggle"
                                          data-bs-toggle="dropdown"
                                          aria-expanded="false"
                                        >
                                          <i className="fa fa-ellipsis-v" />
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                          <a
                                            className="dropdown-item"
                                            href="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#"
                                          >
                                            <i className="fas fa-pencil-alt me-1" /> Edit
                                          </a>
                                          <a
                                            className="dropdown-item"
                                            href="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#"
                                          >
                                            <i className="far fa-trash-alt me-1" /> Delete
                                          </a>
                                        </div>
                                      </div>
                                      <h4>
                                        Bachelor of Science in Game Programming &amp;
                                        Development
                                      </h4>
                                      <h5>
                                        Hampshire University January 12, 2015 - January
                                        19, 2019
                                      </h5>
                                      <p>
                                        Graphic Designing artworks through making plans
                                        and utilizing the helpful analysis of companions,
                                        educators, and bosses to improve those plans.
                                        Careful discipline brings about promising results,
                                        and the capacity to acknowledge and gain from
                                        analysis from peers and even the purchaser
                                        everywhere is pivotal for accomplishment in this
                                        field.
                                      </p>
                                    </li>
                                    <li>
                                      <h4>Master in Gaming STudi Design</h4>
                                      <h5>Techline July 9, 2018 - March 18, 2021</h5>
                                      <p>
                                        I am a professional graphic designer. I have more
                                        than 10-years of experience in graphics design. If
                                        you are looking for any graphic related work,
                                        contact me, I'll glad to help you.
                                      </p>
                                    </li>
                                  </ul>
                                </div>
                                <div className="pro-overview profile-edit-form pro-new2">
                                  <form>
                                    <div className="form-row">
                                      <div className="form-group col-md-6">
                                        <label>Country</label>
                                        <select className="form-control select">
                                          <option>Select Country</option>
                                        </select>
                                      </div>
                                      <div className="form-group col-md-6">
                                        <label>University/College</label>
                                        <select className="form-control select">
                                          <option>Select University/College </option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="form-row">
                                      <div className="form-group col-md-6">
                                        <label>Start year</label>
                                        <select className="form-control select">
                                          <option>-</option>
                                        </select>
                                      </div>
                                      <div className="form-group col-md-6">
                                        <label>End year</label>
                                        <select className="form-control select">
                                          <option>-</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="form-group">
                                      <label>Degree</label>
                                      <input
                                        type="text"
                                        name="degree"
                                        className="form-control"
                                        placeholder="Enter Degree"
                                      />
                                    </div>
                                    <div className="row">
                                      <div className="col-lg-12 text-end">
                                        <a
                                          href="#"
                                          className="btn btn-primary profile-update-btn"
                                        >
                                          Update
                                        </a>
                                        <a
                                          href="#"
                                          className="btn btn-light profile-cancel-btn"
                                        >
                                          Cancel
                                        </a>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* /Educational */}
                          {/* Skills */}
                          <div className="pro-post project-widget widget-box">
                            <div className="row">
                              <div className="col-lg-6">
                                <h3 className="pro-title">Technical Skills</h3>
                              </div>
                              <div className="col-lg-6 text-end">
                                {" "}
                                <a
                                  href="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#add-skills"
                                  className="sub-title me-2"
                                >
                                  <i className="fa fa-plus me-1" /> Add Skills
                                </a>
                                <a href="#" className="sub-title">
                                  <i className="fa fa-pencil-alt me-1" />
                                </a>
                              </div>
                            </div>
                            <div className="pro-content">
                              <div className="tags">
                                <span className="badge badge-pill badge-skills">
                                  + Web Design
                                </span>
                                <span className="badge badge-pill badge-skills">
                                  + UI Design
                                </span>
                                <span className="badge badge-pill badge-skills">
                                  + Node Js
                                </span>
                                <span className="badge badge-pill badge-skills">
                                  + Javascript
                                </span>
                              </div>
                            </div>
                          </div>
                          {/* /Skills */}
                        </div>
                        {/* /Overview Tab Content */}
                        {/* Bids Tab Content */}
                        <div role="tabpanel" id="bids" className="tab-pane fade">
                          <div className="pro-post project-widget widget-box">
                            <nav className="user-tabs mb-4">
                              <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                                <li className="nav-item">
                                  <a
                                    className="nav-link active"
                                    href="#manage_bids"
                                    data-bs-toggle="tab"
                                  >
                                    Manage Bids
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    className="nav-link"
                                    href="#manage_bidders"
                                    data-bs-toggle="tab"
                                  >
                                    Manage Bidders
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    className="nav-link"
                                    href="#active_bids"
                                    data-bs-toggle="tab"
                                  >
                                    My Active Bids
                                  </a>
                                </li>
                              </ul>
                            </nav>
                            {/* Bids Tab Details */}
                            <div className="tab-content pt-0">
                              {/* Manage Bids Tab Content */}
                              <div
                                role="tabpanel"
                                id="manage_bids"
                                className="tab-pane fade show active"
                              >
                                <div className="row">
                                  <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                      <div className="freelance-content">
                                        <a
                                          data-bs-toggle="modal"
                                          href="#rating"
                                          className="favourite"
                                        >
                                          <i className="fas fa-star" />
                                        </a>
                                        <div className="author-heading">
                                          <div className="profile-img">
                                            <a href="#">
                                              <img
                                                src={company_img1}
                                                alt="author"
                                              />
                                            </a>
                                          </div>
                                          <div className="profile-name">
                                            <div className="author-location">
                                              Amaze Tech{" "}
                                              <i className="fas fa-check-circle text-success verified" />
                                            </div>
                                          </div>
                                          <div className="freelance-info">
                                            <h3>
                                              <a href="#">UI/UX Developer</a>
                                            </h3>
                                            <div className="freelance-location mb-1">
                                              <i className="fas fa-clock" /> Posted Just
                                              Now
                                            </div>
                                            <div className="freelance-location">
                                              <i className="fas fa-map-marker-alt me-1" />
                                              Georgia, USA
                                            </div>
                                          </div>
                                          <div className="freelance-tags">
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                After Effects
                                              </span>
                                            </a>
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                Illustrator
                                              </span>
                                            </a>
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                HTML
                                              </span>
                                            </a>
                                          </div>
                                          <div className="freelancers-price">
                                            $40-$500
                                          </div>
                                        </div>
                                        <div className="counter-stats">
                                          <ul>
                                            <li>
                                              <h3 className="counter-value">
                                                4 Days Left
                                              </h3>
                                              <h5>Expiry</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">15</h3>
                                              <h5>Proposals</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">
                                                <span className="jobtype">Full Time</span>
                                              </h3>
                                              <h5>Job Type</h5>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="cart-hover">
                                        <Link
                                          to="/project-details"
                                          className="btn-cart"
                                          tabIndex={-1}
                                        >
                                          Bid Now
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                      <div className="freelance-content">
                                        <a
                                          data-bs-toggle="modal"
                                          href="#rating"
                                          className="favourite"
                                        >
                                          <i className="fas fa-star" />
                                        </a>
                                        <div className="author-heading">
                                          <div className="profile-img">
                                            <a href="#">
                                              <img
                                                src={company_img2}
                                                alt="author"
                                              />
                                            </a>
                                          </div>
                                          <div className="profile-name">
                                            <div className="author-location">
                                              Park INC{" "}
                                              <i className="fas fa-check-circle text-success verified" />
                                            </div>
                                          </div>
                                          <div className="freelance-info">
                                            <h3>
                                              <a href="#">PHP Developer</a>
                                            </h3>
                                            <div className="freelance-location mb-1">
                                              <i className="fas fa-clock" /> Posted 1 min
                                              ago
                                            </div>
                                            <div className="freelance-location">
                                              <i className="fas fa-map-marker-alt me-1" />
                                              California, USA
                                            </div>
                                          </div>
                                          <div className="freelance-tags">
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                After Effects
                                              </span>
                                            </a>
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                Illustrator
                                              </span>
                                            </a>
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                HTML
                                              </span>
                                            </a>
                                          </div>
                                          <div className="freelancers-price">
                                            $30-$300
                                          </div>
                                        </div>
                                        <div className="counter-stats">
                                          <ul>
                                            <li>
                                              <h3 className="counter-value">
                                                5 Days Left
                                              </h3>
                                              <h5>Expiry</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">22</h3>
                                              <h5>Proposals</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">
                                                <span className="jobtype">Full Time</span>
                                              </h3>
                                              <h5>Job Type</h5>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="cart-hover">
                                        <Link
                                          to="/project-details"
                                          className="btn-cart"
                                          tabIndex={-1}
                                        >
                                          Bid Now
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                      <div className="freelance-content">
                                        <a
                                          data-bs-toggle="modal"
                                          href="#rating"
                                          className="favourite"
                                        >
                                          <i className="fas fa-star" />
                                        </a>
                                        <div className="author-heading">
                                          <div className="profile-img">
                                            <a href="#">
                                              <img
                                                src={company_img3}
                                                alt="author"
                                              />
                                            </a>
                                          </div>
                                          <div className="profile-name">
                                            <div className="author-location">
                                              Tech Zone{" "}
                                              <i className="fas fa-check-circle text-success verified" />
                                            </div>
                                          </div>
                                          <div className="freelance-info">
                                            <h3>
                                              <a href="#">Graphic Designer</a>
                                            </h3>
                                            <div className="freelance-location mb-1">
                                              <i className="fas fa-clock" /> Posted 30
                                              mins ago
                                            </div>
                                            <div className="freelance-location">
                                              <i className="fas fa-map-marker-alt me-1" />
                                              New York, USA
                                            </div>
                                          </div>
                                          <div className="freelance-tags">
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                After Effects
                                              </span>
                                            </a>
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                Illustrator
                                              </span>
                                            </a>
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                HTML
                                              </span>
                                            </a>
                                          </div>
                                          <div className="freelancers-price">
                                            $15-$500
                                          </div>
                                        </div>
                                        <div className="counter-stats">
                                          <ul>
                                            <li>
                                              <h3 className="counter-value">
                                                8 Days Left
                                              </h3>
                                              <h5>Expiry</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">30</h3>
                                              <h5>Proposals</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">
                                                <span className="jobtype">Full Time</span>
                                              </h3>
                                              <h5>Job Type</h5>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="cart-hover">
                                        <Link
                                          to="/project-details"
                                          className="btn-cart"
                                          tabIndex={-1}
                                        >
                                          Bid Now
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                      <div className="freelance-content">
                                        <a
                                          data-bs-toggle="modal"
                                          href="#rating"
                                          className="favourite"
                                        >
                                          <i className="fas fa-star" />
                                        </a>
                                        <div className="author-heading">
                                          <div className="profile-img">
                                            <a href="#">
                                              <img
                                                src={company_img4}
                                                alt="author"
                                              />
                                            </a>
                                          </div>
                                          <div className="profile-name">
                                            <div className="author-location">
                                              ABC Software{" "}
                                              <i className="fas fa-check-circle text-success verified" />
                                            </div>
                                          </div>
                                          <div className="freelance-info">
                                            <h3>
                                              <a href="#">iOS Developer</a>
                                            </h3>
                                            <div className="freelance-location mb-1">
                                              <i className="fas fa-clock" /> Posted 1 day
                                              ago
                                            </div>
                                            <div className="freelance-location">
                                              <i className="fas fa-map-marker-alt me-1" />
                                              Florida, USA
                                            </div>
                                          </div>
                                          <div className="freelance-tags">
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                After Effects
                                              </span>
                                            </a>
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                Illustrator
                                              </span>
                                            </a>
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                HTML
                                              </span>
                                            </a>
                                          </div>
                                          <div className="freelancers-price">
                                            $25-$250
                                          </div>
                                        </div>
                                        <div className="counter-stats">
                                          <ul>
                                            <li>
                                              <h3 className="counter-value">
                                                1 Days Left
                                              </h3>
                                              <h5>Expiry</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">16</h3>
                                              <h5>Proposals</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">
                                                <span className="jobtype">Full Time</span>
                                              </h3>
                                              <h5>Job Type</h5>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="cart-hover">
                                        <Link
                                          to="/project-details"
                                          className="btn-cart"
                                          tabIndex={-1}
                                        >
                                          Bid Now
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                      <div className="freelance-content">
                                        <a
                                          data-bs-toggle="modal"
                                          href="#rating"
                                          className="favourite"
                                        >
                                          <i className="fas fa-star" />
                                        </a>
                                        <div className="author-heading">
                                          <div className="profile-img">
                                            <a href="#">
                                              <img
                                                src={company_img5}
                                                alt="author"
                                              />
                                            </a>
                                          </div>
                                          <div className="profile-name">
                                            <div className="author-location">
                                              Host Technologies{" "}
                                              <i className="fas fa-check-circle text-success verified" />
                                            </div>
                                          </div>
                                          <div className="freelance-info">
                                            <h3>
                                              <a href="#">SEO Developer</a>
                                            </h3>
                                            <div className="freelance-location mb-1">
                                              <i className="fas fa-clock" /> Posted 3 days
                                              ago
                                            </div>
                                            <div className="freelance-location">
                                              <i className="fas fa-map-marker-alt me-1" />
                                              Texas, USA
                                            </div>
                                          </div>
                                          <div className="freelance-tags">
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                After Effects
                                              </span>
                                            </a>
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                Illustrator
                                              </span>
                                            </a>
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                HTML
                                              </span>
                                            </a>
                                          </div>
                                          <div className="freelancers-price">
                                            $50-$700
                                          </div>
                                        </div>
                                        <div className="counter-stats">
                                          <ul>
                                            <li>
                                              <h3 className="counter-value">
                                                10 Days Left
                                              </h3>
                                              <h5>Expiry</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">25</h3>
                                              <h5>Proposals</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">
                                                <span className="jobtype">Full Time</span>
                                              </h3>
                                              <h5>Job Type</h5>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="cart-hover">
                                        <Link
                                          to="/project-details"
                                          className="btn-cart"
                                          tabIndex={-1}
                                        >
                                          Bid Now
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* /Manage Bids Tab Content */}
                              {/* Manage Bidders Tab Content */}
                              <div
                                role="tabpanel"
                                id="manage_bidders"
                                className="tab-pane fade"
                              >
                                <div className="row">
                                  <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                      <div className="freelance-content">
                                        <a
                                          data-bs-toggle="modal"
                                          href="#rating"
                                          className="favourite"
                                        >
                                          <i className="fas fa-star" />
                                        </a>
                                        <div className="author-heading">
                                          <div className="profile-img">
                                            <a href="#">
                                              <img
                                                src={company_img1}
                                                alt="author"
                                              />
                                            </a>
                                          </div>
                                          <div className="profile-name">
                                            <div className="author-location">
                                              Amaze Tech{" "}
                                              <i className="fas fa-check-circle text-success verified" />
                                            </div>
                                          </div>
                                          <div className="freelance-info">
                                            <h3>
                                              <a href="#">UI/UX Developer</a>
                                            </h3>
                                            <div className="freelance-location mb-1">
                                              <i className="fas fa-clock" /> Posted Just
                                              Now
                                            </div>
                                            <div className="freelance-location">
                                              <i className="fas fa-map-marker-alt me-1" />
                                              Georgia, USA
                                            </div>
                                          </div>
                                          <div className="freelance-tags">
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                After Effects
                                              </span>
                                            </a>
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                Illustrator
                                              </span>
                                            </a>
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                HTML
                                              </span>
                                            </a>
                                          </div>
                                          <div className="freelancers-price">
                                            $40-$500
                                          </div>
                                        </div>
                                        <div className="counter-stats">
                                          <ul>
                                            <li>
                                              <h3 className="counter-value">
                                                4 Days Left
                                              </h3>
                                              <h5>Expiry</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">15</h3>
                                              <h5>Proposals</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">
                                                <span className="jobtype">Full Time</span>
                                              </h3>
                                              <h5>Job Type</h5>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="cart-hover">
                                        <Link
                                          to="/project-details"
                                          className="btn-cart"
                                          tabIndex={-1}
                                        >
                                          Bid Now
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                      <div className="freelance-content">
                                        <a
                                          data-bs-toggle="modal"
                                          href="#rating"
                                          className="favourite"
                                        >
                                          <i className="fas fa-star" />
                                        </a>
                                        <div className="author-heading">
                                          <div className="profile-img">
                                            <a href="#">
                                              <img
                                                src={company_img2}
                                                alt="author"
                                              />
                                            </a>
                                          </div>
                                          <div className="profile-name">
                                            <div className="author-location">
                                              Park INC{" "}
                                              <i className="fas fa-check-circle text-success verified" />
                                            </div>
                                          </div>
                                          <div className="freelance-info">
                                            <h3>
                                              <a href="#">PHP Developer</a>
                                            </h3>
                                            <div className="freelance-location mb-1">
                                              <i className="fas fa-clock" /> Posted 1 min
                                              ago
                                            </div>
                                            <div className="freelance-location">
                                              <i className="fas fa-map-marker-alt me-1" />
                                              California, USA
                                            </div>
                                          </div>
                                          <div className="freelance-tags">
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                After Effects
                                              </span>
                                            </a>
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                Illustrator
                                              </span>
                                            </a>
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                HTML
                                              </span>
                                            </a>
                                          </div>
                                          <div className="freelancers-price">
                                            $30-$300
                                          </div>
                                        </div>
                                        <div className="counter-stats">
                                          <ul>
                                            <li>
                                              <h3 className="counter-value">
                                                5 Days Left
                                              </h3>
                                              <h5>Expiry</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">22</h3>
                                              <h5>Proposals</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">
                                                <span className="jobtype">Full Time</span>
                                              </h3>
                                              <h5>Job Type</h5>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="cart-hover">
                                        <Link
                                          to="/project-details"
                                          className="btn-cart"
                                          tabIndex={-1}
                                        >
                                          Bid Now
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                      <div className="freelance-content">
                                        <a
                                          data-bs-toggle="modal"
                                          href="#rating"
                                          className="favourite"
                                        >
                                          <i className="fas fa-star" />
                                        </a>
                                        <div className="author-heading">
                                          <div className="profile-img">
                                            <a href="#">
                                              <img
                                                src={company_img3}
                                                alt="author"
                                              />
                                            </a>
                                          </div>
                                          <div className="profile-name">
                                            <div className="author-location">
                                              Tech Zone{" "}
                                              <i className="fas fa-check-circle text-success verified" />
                                            </div>
                                          </div>
                                          <div className="freelance-info">
                                            <h3>
                                              <a href="#">Graphic Designer</a>
                                            </h3>
                                            <div className="freelance-location mb-1">
                                              <i className="fas fa-clock" /> Posted 30
                                              mins ago
                                            </div>
                                            <div className="freelance-location">
                                              <i className="fas fa-map-marker-alt me-1" />
                                              New York, USA
                                            </div>
                                          </div>
                                          <div className="freelance-tags">
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                After Effects
                                              </span>
                                            </a>
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                Illustrator
                                              </span>
                                            </a>
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                HTML
                                              </span>
                                            </a>
                                          </div>
                                          <div className="freelancers-price">
                                            $15-$500
                                          </div>
                                        </div>
                                        <div className="counter-stats">
                                          <ul>
                                            <li>
                                              <h3 className="counter-value">
                                                8 Days Left
                                              </h3>
                                              <h5>Expiry</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">30</h3>
                                              <h5>Proposals</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">
                                                <span className="jobtype">Full Time</span>
                                              </h3>
                                              <h5>Job Type</h5>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="cart-hover">
                                        <Link
                                          to="/project-details"
                                          className="btn-cart"
                                          tabIndex={-1}
                                        >
                                          Bid Now
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                      <div className="freelance-content">
                                        <a
                                          data-bs-toggle="modal"
                                          href="#rating"
                                          className="favourite"
                                        >
                                          <i className="fas fa-star" />
                                        </a>
                                        <div className="author-heading">
                                          <div className="profile-img">
                                            <a href="#">
                                              <img
                                                src={company_img4}
                                                alt="author"
                                              />
                                            </a>
                                          </div>
                                          <div className="profile-name">
                                            <div className="author-location">
                                              ABC Software{" "}
                                              <i className="fas fa-check-circle text-success verified" />
                                            </div>
                                          </div>
                                          <div className="freelance-info">
                                            <h3>
                                              <a href="#">iOS Developer</a>
                                            </h3>
                                            <div className="freelance-location mb-1">
                                              <i className="fas fa-clock" /> Posted 1 day
                                              ago
                                            </div>
                                            <div className="freelance-location">
                                              <i className="fas fa-map-marker-alt me-1" />
                                              Florida, USA
                                            </div>
                                          </div>
                                          <div className="freelance-tags">
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                After Effects
                                              </span>
                                            </a>
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                Illustrator
                                              </span>
                                            </a>
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                HTML
                                              </span>
                                            </a>
                                          </div>
                                          <div className="freelancers-price">
                                            $25-$250
                                          </div>
                                        </div>
                                        <div className="counter-stats">
                                          <ul>
                                            <li>
                                              <h3 className="counter-value">
                                                1 Days Left
                                              </h3>
                                              <h5>Expiry</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">16</h3>
                                              <h5>Proposals</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">
                                                <span className="jobtype">Full Time</span>
                                              </h3>
                                              <h5>Job Type</h5>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="cart-hover">
                                        <Link
                                          to="/project-details"
                                          className="btn-cart"
                                          tabIndex={-1}
                                        >
                                          Bid Now
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                      <div className="freelance-content">
                                        <a
                                          data-bs-toggle="modal"
                                          href="#rating"
                                          className="favourite"
                                        >
                                          <i className="fas fa-star" />
                                        </a>
                                        <div className="author-heading">
                                          <div className="profile-img">
                                            <a href="#">
                                              <img
                                                src={company_img5}
                                                alt="author"
                                              />
                                            </a>
                                          </div>
                                          <div className="profile-name">
                                            <div className="author-location">
                                              Host Technologies{" "}
                                              <i className="fas fa-check-circle text-success verified" />
                                            </div>
                                          </div>
                                          <div className="freelance-info">
                                            <h3>
                                              <a href="#">SEO Developer</a>
                                            </h3>
                                            <div className="freelance-location mb-1">
                                              <i className="fas fa-clock" /> Posted 3 days
                                              ago
                                            </div>
                                            <div className="freelance-location">
                                              <i className="fas fa-map-marker-alt me-1" />
                                              Texas, USA
                                            </div>
                                          </div>
                                          <div className="freelance-tags">
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                After Effects
                                              </span>
                                            </a>
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                Illustrator
                                              </span>
                                            </a>
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                HTML
                                              </span>
                                            </a>
                                          </div>
                                          <div className="freelancers-price">
                                            $50-$700
                                          </div>
                                        </div>
                                        <div className="counter-stats">
                                          <ul>
                                            <li>
                                              <h3 className="counter-value">
                                                10 Days Left
                                              </h3>
                                              <h5>Expiry</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">25</h3>
                                              <h5>Proposals</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">
                                                <span className="jobtype">Full Time</span>
                                              </h3>
                                              <h5>Job Type</h5>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="cart-hover">
                                        <Link
                                          to="/project-details"
                                          className="btn-cart"
                                          tabIndex={-1}
                                        >
                                          Bid Now
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* /Manage Bidders Tab Content */}
                              {/* Active Bids Tab Content */}
                              <div
                                role="tabpanel"
                                id="active_bids"
                                className="tab-pane fade"
                              >
                                <div className="row">
                                  <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                      <div className="freelance-content">
                                        <a
                                          data-bs-toggle="modal"
                                          href="#rating"
                                          className="favourite"
                                        >
                                          <i className="fas fa-star" />
                                        </a>
                                        <div className="author-heading">
                                          <div className="profile-img">
                                            <a href="#">
                                              <img
                                                src={company_img1}
                                                alt="author"
                                              />
                                            </a>
                                          </div>
                                          <div className="profile-name">
                                            <div className="author-location">
                                              Amaze Tech{" "}
                                              <i className="fas fa-check-circle text-success verified" />
                                            </div>
                                          </div>
                                          <div className="freelance-info">
                                            <h3>
                                              <a href="#">UI/UX Developer</a>
                                            </h3>
                                            <div className="freelance-location mb-1">
                                              <i className="fas fa-clock" /> Posted Just
                                              Now
                                            </div>
                                            <div className="freelance-location">
                                              <i className="fas fa-map-marker-alt me-1" />
                                              Georgia, USA
                                            </div>
                                          </div>
                                          <div className="freelance-tags">
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                After Effects
                                              </span>
                                            </a>
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                Illustrator
                                              </span>
                                            </a>
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                HTML
                                              </span>
                                            </a>
                                          </div>
                                          <div className="freelancers-price">
                                            $40-$500
                                          </div>
                                        </div>
                                        <div className="counter-stats">
                                          <ul>
                                            <li>
                                              <h3 className="counter-value">
                                                4 Days Left
                                              </h3>
                                              <h5>Expiry</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">15</h3>
                                              <h5>Proposals</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">
                                                <span className="jobtype">Full Time</span>
                                              </h3>
                                              <h5>Job Type</h5>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="cart-hover">
                                        <Link
                                          to="/project-details"
                                          className="btn-cart"
                                          tabIndex={-1}
                                        >
                                          Bid Now
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                      <div className="freelance-content">
                                        <a
                                          data-bs-toggle="modal"
                                          href="#rating"
                                          className="favourite"
                                        >
                                          <i className="fas fa-star" />
                                        </a>
                                        <div className="author-heading">
                                          <div className="profile-img">
                                            <a href="#">
                                              <img
                                                src={company_img2}
                                                alt="author"
                                              />
                                            </a>
                                          </div>
                                          <div className="profile-name">
                                            <div className="author-location">
                                              Park INC{" "}
                                              <i className="fas fa-check-circle text-success verified" />
                                            </div>
                                          </div>
                                          <div className="freelance-info">
                                            <h3>
                                              <a href="#">PHP Developer</a>
                                            </h3>
                                            <div className="freelance-location mb-1">
                                              <i className="fas fa-clock" /> Posted 1 min
                                              ago
                                            </div>
                                            <div className="freelance-location">
                                              <i className="fas fa-map-marker-alt me-1" />
                                              California, USA
                                            </div>
                                          </div>
                                          <div className="freelance-tags">
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                After Effects
                                              </span>
                                            </a>
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                Illustrator
                                              </span>
                                            </a>
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                HTML
                                              </span>
                                            </a>
                                          </div>
                                          <div className="freelancers-price">
                                            $30-$300
                                          </div>
                                        </div>
                                        <div className="counter-stats">
                                          <ul>
                                            <li>
                                              <h3 className="counter-value">
                                                5 Days Left
                                              </h3>
                                              <h5>Expiry</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">22</h3>
                                              <h5>Proposals</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">
                                                <span className="jobtype">Full Time</span>
                                              </h3>
                                              <h5>Job Type</h5>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="cart-hover">
                                        <Link
                                          to="/project-details"
                                          className="btn-cart"
                                          tabIndex={-1}
                                        >
                                          Bid Now
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                      <div className="freelance-content">
                                        <a
                                          data-bs-toggle="modal"
                                          href="#rating"
                                          className="favourite"
                                        >
                                          <i className="fas fa-star" />
                                        </a>
                                        <div className="author-heading">
                                          <div className="profile-img">
                                            <a href="#">
                                              <img
                                                src={company_img3}
                                                alt="author"
                                              />
                                            </a>
                                          </div>
                                          <div className="profile-name">
                                            <div className="author-location">
                                              Tech Zone{" "}
                                              <i className="fas fa-check-circle text-success verified" />
                                            </div>
                                          </div>
                                          <div className="freelance-info">
                                            <h3>
                                              <a href="#">Graphic Designer</a>
                                            </h3>
                                            <div className="freelance-location mb-1">
                                              <i className="fas fa-clock" /> Posted 30
                                              mins ago
                                            </div>
                                            <div className="freelance-location">
                                              <i className="fas fa-map-marker-alt me-1" />
                                              New York, USA
                                            </div>
                                          </div>
                                          <div className="freelance-tags">
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                After Effects
                                              </span>
                                            </a>
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                Illustrator
                                              </span>
                                            </a>
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                HTML
                                              </span>
                                            </a>
                                          </div>
                                          <div className="freelancers-price">
                                            $15-$500
                                          </div>
                                        </div>
                                        <div className="counter-stats">
                                          <ul>
                                            <li>
                                              <h3 className="counter-value">
                                                8 Days Left
                                              </h3>
                                              <h5>Expiry</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">30</h3>
                                              <h5>Proposals</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">
                                                <span className="jobtype">Full Time</span>
                                              </h3>
                                              <h5>Job Type</h5>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="cart-hover">
                                        <Link
                                          to="/project-details"
                                          className="btn-cart"
                                          tabIndex={-1}
                                        >
                                          Bid Now
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                      <div className="freelance-content">
                                        <a
                                          data-bs-toggle="modal"
                                          href="#rating"
                                          className="favourite"
                                        >
                                          <i className="fas fa-star" />
                                        </a>
                                        <div className="author-heading">
                                          <div className="profile-img">
                                            <a href="#">
                                              <img
                                                src={company_img4}
                                                alt="author"
                                              />
                                            </a>
                                          </div>
                                          <div className="profile-name">
                                            <div className="author-location">
                                              ABC Software{" "}
                                              <i className="fas fa-check-circle text-success verified" />
                                            </div>
                                          </div>
                                          <div className="freelance-info">
                                            <h3>
                                              <a href="#">iOS Developer</a>
                                            </h3>
                                            <div className="freelance-location mb-1">
                                              <i className="fas fa-clock" /> Posted 1 day
                                              ago
                                            </div>
                                            <div className="freelance-location">
                                              <i className="fas fa-map-marker-alt me-1" />
                                              Florida, USA
                                            </div>
                                          </div>
                                          <div className="freelance-tags">
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                After Effects
                                              </span>
                                            </a>
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                Illustrator
                                              </span>
                                            </a>
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                HTML
                                              </span>
                                            </a>
                                          </div>
                                          <div className="freelancers-price">
                                            $25-$250
                                          </div>
                                        </div>
                                        <div className="counter-stats">
                                          <ul>
                                            <li>
                                              <h3 className="counter-value">
                                                1 Days Left
                                              </h3>
                                              <h5>Expiry</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">16</h3>
                                              <h5>Proposals</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">
                                                <span className="jobtype">Full Time</span>
                                              </h3>
                                              <h5>Job Type</h5>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="cart-hover">
                                        <Link
                                          to="/project-details"
                                          className="btn-cart"
                                          tabIndex={-1}
                                        >
                                          Bid Now
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                      <div className="freelance-content">
                                        <a
                                          data-bs-toggle="modal"
                                          href="#rating"
                                          className="favourite"
                                        >
                                          <i className="fas fa-star" />
                                        </a>
                                        <div className="author-heading">
                                          <div className="profile-img">
                                            <a href="#">
                                              <img
                                                src={company_img5}
                                                alt="author"
                                              />
                                            </a>
                                          </div>
                                          <div className="profile-name">
                                            <div className="author-location">
                                              Host Technologies{" "}
                                              <i className="fas fa-check-circle text-success verified" />
                                            </div>
                                          </div>
                                          <div className="freelance-info">
                                            <h3>
                                              <a href="#">SEO Developer</a>
                                            </h3>
                                            <div className="freelance-location mb-1">
                                              <i className="fas fa-clock" /> Posted 3 days
                                              ago
                                            </div>
                                            <div className="freelance-location">
                                              <i className="fas fa-map-marker-alt me-1" />
                                              Texas, USA
                                            </div>
                                          </div>
                                          <div className="freelance-tags">
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                After Effects
                                              </span>
                                            </a>
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                Illustrator
                                              </span>
                                            </a>
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                HTML
                                              </span>
                                            </a>
                                          </div>
                                          <div className="freelancers-price">
                                            $50-$700
                                          </div>
                                        </div>
                                        <div className="counter-stats">
                                          <ul>
                                            <li>
                                              <h3 className="counter-value">
                                                10 Days Left
                                              </h3>
                                              <h5>Expiry</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">25</h3>
                                              <h5>Proposals</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">
                                                <span className="jobtype">Full Time</span>
                                              </h3>
                                              <h5>Job Type</h5>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="cart-hover">
                                        <Link
                                          to="/project-details"
                                          className="btn-cart"
                                          tabIndex={-1}
                                        >
                                          Bid Now
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* /Active Bids Tab Content */}
                            </div>
                          </div>
                        </div>
                        {/* Jobs Tab Content */}
                        <div role="tabpanel" id="jobs" className="tab-pane fade">
                          <div className="pro-post project-widget widget-box">
                            <nav className="user-tabs mb-4">
                              <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                                <li className="nav-item">
                                  <a
                                    className="nav-link active"
                                    href="#manage_jobs"
                                    data-bs-toggle="tab"
                                  >
                                    Manage Jobs
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    className="nav-link"
                                    href="#saved_jobs"
                                    data-bs-toggle="tab"
                                  >
                                    Saved Jobs
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    className="nav-link"
                                    href="#applied_jobs"
                                    data-bs-toggle="tab"
                                  >
                                    Applied Jobs
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    className="nav-link"
                                    href="#applied_candidates"
                                    data-bs-toggle="tab"
                                  >
                                    Applied Candidates
                                  </a>
                                </li>
                              </ul>
                            </nav>
                            <div className="tab-content pt-0">
                              {/* Manage Jobs Tab Content */}
                              <div
                                role="tabpanel"
                                id="manage_jobs"
                                className="tab-pane fade show active"
                              >
                                <div className="row">
                                  <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                      <div className="freelance-content">
                                        <a
                                          data-bs-toggle="modal"
                                          href="#rating"
                                          className="favourite"
                                        >
                                          <i className="fas fa-star" />
                                        </a>
                                        <div className="author-heading">
                                          <div className="profile-img">
                                            <a href="#">
                                              <img
                                                src={company_img1}
                                                alt="author"
                                              />
                                            </a>
                                          </div>
                                          <div className="profile-name">
                                            <div className="author-location">
                                              Amaze Tech{" "}
                                              <i className="fas fa-check-circle text-success verified" />
                                            </div>
                                          </div>
                                          <div className="freelance-info">
                                            <h3>
                                              <a href="#">UI/UX Developer</a>
                                            </h3>
                                            <div className="freelance-location mb-1">
                                              <i className="fas fa-clock" /> Posted Just
                                              Now
                                            </div>
                                            <div className="freelance-location">
                                              <i className="fas fa-map-marker-alt me-1" />
                                              Georgia, USA
                                            </div>
                                          </div>
                                          <div className="freelance-tags">
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                After Effects
                                              </span>
                                            </a>
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                Illustrator
                                              </span>
                                            </a>
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                HTML
                                              </span>
                                            </a>
                                          </div>
                                          <div className="freelancers-price">
                                            $40-$500
                                          </div>
                                        </div>
                                        <div className="counter-stats">
                                          <ul>
                                            <li>
                                              <h3 className="counter-value">
                                                4 Days Left
                                              </h3>
                                              <h5>Expiry</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">15</h3>
                                              <h5>Proposals</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">
                                                <span className="jobtype">Full Time</span>
                                              </h3>
                                              <h5>Job Type</h5>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="cart-hover">
                                        <Link
                                          to="/project-details"
                                          className="btn-cart"
                                          tabIndex={-1}
                                        >
                                          Bid Now
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                      <div className="freelance-content">
                                        <a
                                          data-bs-toggle="modal"
                                          href="#rating"
                                          className="favourite"
                                        >
                                          <i className="fas fa-star" />
                                        </a>
                                        <div className="author-heading">
                                          <div className="profile-img">
                                            <a href="#">
                                              <img
                                                src={company_img2}
                                                alt="author"
                                              />
                                            </a>
                                          </div>
                                          <div className="profile-name">
                                            <div className="author-location">
                                              Park INC{" "}
                                              <i className="fas fa-check-circle text-success verified" />
                                            </div>
                                          </div>
                                          <div className="freelance-info">
                                            <h3>
                                              <a href="#">PHP Developer</a>
                                            </h3>
                                            <div className="freelance-location mb-1">
                                              <i className="fas fa-clock" /> Posted 1 min
                                              ago
                                            </div>
                                            <div className="freelance-location">
                                              <i className="fas fa-map-marker-alt me-1" />
                                              California, USA
                                            </div>
                                          </div>
                                          <div className="freelance-tags">
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                After Effects
                                              </span>
                                            </a>
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                Illustrator
                                              </span>
                                            </a>
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                HTML
                                              </span>
                                            </a>
                                          </div>
                                          <div className="freelancers-price">
                                            $30-$300
                                          </div>
                                        </div>
                                        <div className="counter-stats">
                                          <ul>
                                            <li>
                                              <h3 className="counter-value">
                                                5 Days Left
                                              </h3>
                                              <h5>Expiry</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">22</h3>
                                              <h5>Proposals</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">
                                                <span className="jobtype">Full Time</span>
                                              </h3>
                                              <h5>Job Type</h5>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="cart-hover">
                                        <Link
                                          to="/project-details"
                                          className="btn-cart"
                                          tabIndex={-1}
                                        >
                                          Bid Now
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                      <div className="freelance-content">
                                        <a
                                          data-bs-toggle="modal"
                                          href="#rating"
                                          className="favourite"
                                        >
                                          <i className="fas fa-star" />
                                        </a>
                                        <div className="author-heading">
                                          <div className="profile-img">
                                            <a href="#">
                                              <img
                                                src={company_img3}
                                                alt="author"
                                              />
                                            </a>
                                          </div>
                                          <div className="profile-name">
                                            <div className="author-location">
                                              Tech Zone{" "}
                                              <i className="fas fa-check-circle text-success verified" />
                                            </div>
                                          </div>
                                          <div className="freelance-info">
                                            <h3>
                                              <a href="#">Graphic Designer</a>
                                            </h3>
                                            <div className="freelance-location mb-1">
                                              <i className="fas fa-clock" /> Posted 30
                                              mins ago
                                            </div>
                                            <div className="freelance-location">
                                              <i className="fas fa-map-marker-alt me-1" />
                                              New York, USA
                                            </div>
                                          </div>
                                          <div className="freelance-tags">
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                After Effects
                                              </span>
                                            </a>
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                Illustrator
                                              </span>
                                            </a>
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                HTML
                                              </span>
                                            </a>
                                          </div>
                                          <div className="freelancers-price">
                                            $15-$500
                                          </div>
                                        </div>
                                        <div className="counter-stats">
                                          <ul>
                                            <li>
                                              <h3 className="counter-value">
                                                8 Days Left
                                              </h3>
                                              <h5>Expiry</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">30</h3>
                                              <h5>Proposals</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">
                                                <span className="jobtype">Full Time</span>
                                              </h3>
                                              <h5>Job Type</h5>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="cart-hover">
                                        <Link
                                          to="/project-details"
                                          className="btn-cart"
                                          tabIndex={-1}
                                        >
                                          Bid Now
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                      <div className="freelance-content">
                                        <a
                                          data-bs-toggle="modal"
                                          href="#rating"
                                          className="favourite"
                                        >
                                          <i className="fas fa-star" />
                                        </a>
                                        <div className="author-heading">
                                          <div className="profile-img">
                                            <a href="#">
                                              <img
                                                src={company_img4}
                                                alt="author"
                                              />
                                            </a>
                                          </div>
                                          <div className="profile-name">
                                            <div className="author-location">
                                              ABC Software{" "}
                                              <i className="fas fa-check-circle text-success verified" />
                                            </div>
                                          </div>
                                          <div className="freelance-info">
                                            <h3>
                                              <a href="#">iOS Developer</a>
                                            </h3>
                                            <div className="freelance-location mb-1">
                                              <i className="fas fa-clock" /> Posted 1 day
                                              ago
                                            </div>
                                            <div className="freelance-location">
                                              <i className="fas fa-map-marker-alt me-1" />
                                              Florida, USA
                                            </div>
                                          </div>
                                          <div className="freelance-tags">
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                After Effects
                                              </span>
                                            </a>
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                Illustrator
                                              </span>
                                            </a>
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                HTML
                                              </span>
                                            </a>
                                          </div>
                                          <div className="freelancers-price">
                                            $25-$250
                                          </div>
                                        </div>
                                        <div className="counter-stats">
                                          <ul>
                                            <li>
                                              <h3 className="counter-value">
                                                1 Days Left
                                              </h3>
                                              <h5>Expiry</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">16</h3>
                                              <h5>Proposals</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">
                                                <span className="jobtype">Full Time</span>
                                              </h3>
                                              <h5>Job Type</h5>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="cart-hover">
                                        <Link
                                          to="/project-details"
                                          className="btn-cart"
                                          tabIndex={-1}
                                        >
                                          Bid Now
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                      <div className="freelance-content">
                                        <a
                                          data-bs-toggle="modal"
                                          href="#rating"
                                          className="favourite"
                                        >
                                          <i className="fas fa-star" />
                                        </a>
                                        <div className="author-heading">
                                          <div className="profile-img">
                                            <a href="#">
                                              <img
                                                src={company_img5}
                                                alt="author"
                                              />
                                            </a>
                                          </div>
                                          <div className="profile-name">
                                            <div className="author-location">
                                              Host Technologies{" "}
                                              <i className="fas fa-check-circle text-success verified" />
                                            </div>
                                          </div>
                                          <div className="freelance-info">
                                            <h3>
                                              <a href="#">SEO Developer</a>
                                            </h3>
                                            <div className="freelance-location mb-1">
                                              <i className="fas fa-clock" /> Posted 3 days
                                              ago
                                            </div>
                                            <div className="freelance-location">
                                              <i className="fas fa-map-marker-alt me-1" />
                                              Texas, USA
                                            </div>
                                          </div>
                                          <div className="freelance-tags">
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                After Effects
                                              </span>
                                            </a>
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                Illustrator
                                              </span>
                                            </a>
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                HTML
                                              </span>
                                            </a>
                                          </div>
                                          <div className="freelancers-price">
                                            $50-$700
                                          </div>
                                        </div>
                                        <div className="counter-stats">
                                          <ul>
                                            <li>
                                              <h3 className="counter-value">
                                                10 Days Left
                                              </h3>
                                              <h5>Expiry</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">25</h3>
                                              <h5>Proposals</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">
                                                <span className="jobtype">Full Time</span>
                                              </h3>
                                              <h5>Job Type</h5>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="cart-hover">
                                        <Link
                                          to="/project-details"
                                          className="btn-cart"
                                          tabIndex={-1}
                                        >
                                          Bid Now
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* /Manage Jobs Tab Content */}
                              {/* Saved Jobs Tab Content */}
                              <div
                                role="tabpanel"
                                id="saved_jobs"
                                className="tab-pane fade"
                              >
                                <div className="row">
                                  <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                      <div className="freelance-content">
                                        <a
                                          data-bs-toggle="modal"
                                          href="#rating"
                                          className="favourite"
                                        >
                                          <i className="fas fa-star" />
                                        </a>
                                        <div className="author-heading">
                                          <div className="profile-img">
                                            <a href="#">
                                              <img
                                                src={company_img1}
                                                alt="author"
                                              />
                                            </a>
                                          </div>
                                          <div className="profile-name">
                                            <div className="author-location">
                                              Amaze Tech{" "}
                                              <i className="fas fa-check-circle text-success verified" />
                                            </div>
                                          </div>
                                          <div className="freelance-info">
                                            <h3>
                                              <a href="#">UI/UX Developer</a>
                                            </h3>
                                            <div className="freelance-location mb-1">
                                              <i className="fas fa-clock" /> Posted Just
                                              Now
                                            </div>
                                            <div className="freelance-location">
                                              <i className="fas fa-map-marker-alt me-1" />
                                              Georgia, USA
                                            </div>
                                          </div>
                                          <div className="freelance-tags">
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                After Effects
                                              </span>
                                            </a>
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                Illustrator
                                              </span>
                                            </a>
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                HTML
                                              </span>
                                            </a>
                                          </div>
                                          <div className="freelancers-price">
                                            $40-$500
                                          </div>
                                        </div>
                                        <div className="counter-stats">
                                          <ul>
                                            <li>
                                              <h3 className="counter-value">
                                                4 Days Left
                                              </h3>
                                              <h5>Expiry</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">15</h3>
                                              <h5>Proposals</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">
                                                <span className="jobtype">Full Time</span>
                                              </h3>
                                              <h5>Job Type</h5>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="cart-hover">
                                        <Link
                                          to="/project-details"
                                          className="btn-cart"
                                          tabIndex={-1}
                                        >
                                          Bid Now
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                      <div className="freelance-content">
                                        <a
                                          data-bs-toggle="modal"
                                          href="#rating"
                                          className="favourite"
                                        >
                                          <i className="fas fa-star" />
                                        </a>
                                        <div className="author-heading">
                                          <div className="profile-img">
                                            <a href="#">
                                              <img
                                                src={company_img2}
                                                alt="author"
                                              />
                                            </a>
                                          </div>
                                          <div className="profile-name">
                                            <div className="author-location">
                                              Park INC{" "}
                                              <i className="fas fa-check-circle text-success verified" />
                                            </div>
                                          </div>
                                          <div className="freelance-info">
                                            <h3>
                                              <a href="#">PHP Developer</a>
                                            </h3>
                                            <div className="freelance-location mb-1">
                                              <i className="fas fa-clock" /> Posted 1 min
                                              ago
                                            </div>
                                            <div className="freelance-location">
                                              <i className="fas fa-map-marker-alt me-1" />
                                              California, USA
                                            </div>
                                          </div>
                                          <div className="freelance-tags">
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                After Effects
                                              </span>
                                            </a>
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                Illustrator
                                              </span>
                                            </a>
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                HTML
                                              </span>
                                            </a>
                                          </div>
                                          <div className="freelancers-price">
                                            $30-$300
                                          </div>
                                        </div>
                                        <div className="counter-stats">
                                          <ul>
                                            <li>
                                              <h3 className="counter-value">
                                                5 Days Left
                                              </h3>
                                              <h5>Expiry</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">22</h3>
                                              <h5>Proposals</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">
                                                <span className="jobtype">Full Time</span>
                                              </h3>
                                              <h5>Job Type</h5>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="cart-hover">
                                        <Link
                                          to="/project-details"
                                          className="btn-cart"
                                          tabIndex={-1}
                                        >
                                          Bid Now
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                      <div className="freelance-content">
                                        <a
                                          data-bs-toggle="modal"
                                          href="#rating"
                                          className="favourite"
                                        >
                                          <i className="fas fa-star" />
                                        </a>
                                        <div className="author-heading">
                                          <div className="profile-img">
                                            <a href="#">
                                              <img
                                                src={company_img3}
                                                alt="author"
                                              />
                                            </a>
                                          </div>
                                          <div className="profile-name">
                                            <div className="author-location">
                                              Tech Zone{" "}
                                              <i className="fas fa-check-circle text-success verified" />
                                            </div>
                                          </div>
                                          <div className="freelance-info">
                                            <h3>
                                              <a href="#">Graphic Designer</a>
                                            </h3>
                                            <div className="freelance-location mb-1">
                                              <i className="fas fa-clock" /> Posted 30
                                              mins ago
                                            </div>
                                            <div className="freelance-location">
                                              <i className="fas fa-map-marker-alt me-1" />
                                              New York, USA
                                            </div>
                                          </div>
                                          <div className="freelance-tags">
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                After Effects
                                              </span>
                                            </a>
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                Illustrator
                                              </span>
                                            </a>
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                HTML
                                              </span>
                                            </a>
                                          </div>
                                          <div className="freelancers-price">
                                            $15-$500
                                          </div>
                                        </div>
                                        <div className="counter-stats">
                                          <ul>
                                            <li>
                                              <h3 className="counter-value">
                                                8 Days Left
                                              </h3>
                                              <h5>Expiry</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">30</h3>
                                              <h5>Proposals</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">
                                                <span className="jobtype">Full Time</span>
                                              </h3>
                                              <h5>Job Type</h5>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="cart-hover">
                                        <Link
                                          to="/project-details"
                                          className="btn-cart"
                                          tabIndex={-1}
                                        >
                                          Bid Now
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                      <div className="freelance-content">
                                        <a
                                          data-bs-toggle="modal"
                                          href="#rating"
                                          className="favourite"
                                        >
                                          <i className="fas fa-star" />
                                        </a>
                                        <div className="author-heading">
                                          <div className="profile-img">
                                            <a href="#">
                                              <img
                                                src={company_img4}
                                                alt="author"
                                              />
                                            </a>
                                          </div>
                                          <div className="profile-name">
                                            <div className="author-location">
                                              ABC Software{" "}
                                              <i className="fas fa-check-circle text-success verified" />
                                            </div>
                                          </div>
                                          <div className="freelance-info">
                                            <h3>
                                              <a href="#">iOS Developer</a>
                                            </h3>
                                            <div className="freelance-location mb-1">
                                              <i className="fas fa-clock" /> Posted 1 day
                                              ago
                                            </div>
                                            <div className="freelance-location">
                                              <i className="fas fa-map-marker-alt me-1" />
                                              Florida, USA
                                            </div>
                                          </div>
                                          <div className="freelance-tags">
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                After Effects
                                              </span>
                                            </a>
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                Illustrator
                                              </span>
                                            </a>
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                HTML
                                              </span>
                                            </a>
                                          </div>
                                          <div className="freelancers-price">
                                            $25-$250
                                          </div>
                                        </div>
                                        <div className="counter-stats">
                                          <ul>
                                            <li>
                                              <h3 className="counter-value">
                                                1 Days Left
                                              </h3>
                                              <h5>Expiry</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">16</h3>
                                              <h5>Proposals</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">
                                                <span className="jobtype">Full Time</span>
                                              </h3>
                                              <h5>Job Type</h5>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="cart-hover">
                                        <Link
                                          to="/project-details"
                                          className="btn-cart"
                                          tabIndex={-1}
                                        >
                                          Bid Now
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                      <div className="freelance-content">
                                        <a
                                          data-bs-toggle="modal"
                                          href="#rating"
                                          className="favourite"
                                        >
                                          <i className="fas fa-star" />
                                        </a>
                                        <div className="author-heading">
                                          <div className="profile-img">
                                            <a href="#">
                                              <img
                                                src={company_img5}
                                                alt="author"
                                              />
                                            </a>
                                          </div>
                                          <div className="profile-name">
                                            <div className="author-location">
                                              Host Technologies{" "}
                                              <i className="fas fa-check-circle text-success verified" />
                                            </div>
                                          </div>
                                          <div className="freelance-info">
                                            <h3>
                                              <a href="#">SEO Developer</a>
                                            </h3>
                                            <div className="freelance-location mb-1">
                                              <i className="fas fa-clock" /> Posted 3 days
                                              ago
                                            </div>
                                            <div className="freelance-location">
                                              <i className="fas fa-map-marker-alt me-1" />
                                              Texas, USA
                                            </div>
                                          </div>
                                          <div className="freelance-tags">
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                After Effects
                                              </span>
                                            </a>
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                Illustrator
                                              </span>
                                            </a>
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                HTML
                                              </span>
                                            </a>
                                          </div>
                                          <div className="freelancers-price">
                                            $50-$700
                                          </div>
                                        </div>
                                        <div className="counter-stats">
                                          <ul>
                                            <li>
                                              <h3 className="counter-value">
                                                10 Days Left
                                              </h3>
                                              <h5>Expiry</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">25</h3>
                                              <h5>Proposals</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">
                                                <span className="jobtype">Full Time</span>
                                              </h3>
                                              <h5>Job Type</h5>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="cart-hover">
                                        <Link
                                          to="/project-details"
                                          className="btn-cart"
                                          tabIndex={-1}
                                        >
                                          Bid Now
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* /Saved Jobs Tab Content */}
                              {/* Applied Jobs Tab Content */}
                              <div
                                role="tabpanel"
                                id="applied_jobs"
                                className="tab-pane fade"
                              >
                                <div className="row">
                                  <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                      <div className="freelance-content">
                                        <a
                                          data-bs-toggle="modal"
                                          href="#rating"
                                          className="favourite"
                                        >
                                          <i className="fas fa-star" />
                                        </a>
                                        <div className="author-heading">
                                          <div className="profile-img">
                                            <a href="#">
                                              <img
                                                src={company_img1}
                                                alt="author"
                                              />
                                            </a>
                                          </div>
                                          <div className="profile-name">
                                            <div className="author-location">
                                              Amaze Tech{" "}
                                              <i className="fas fa-check-circle text-success verified" />
                                            </div>
                                          </div>
                                          <div className="freelance-info">
                                            <h3>
                                              <a href="#">UI/UX Developer</a>
                                            </h3>
                                            <div className="freelance-location mb-1">
                                              <i className="fas fa-clock" /> Posted Just
                                              Now
                                            </div>
                                            <div className="freelance-location">
                                              <i className="fas fa-map-marker-alt me-1" />
                                              Georgia, USA
                                            </div>
                                          </div>
                                          <div className="freelance-tags">
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                After Effects
                                              </span>
                                            </a>
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                Illustrator
                                              </span>
                                            </a>
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                HTML
                                              </span>
                                            </a>
                                          </div>
                                          <div className="freelancers-price">
                                            $40-$500
                                          </div>
                                        </div>
                                        <div className="counter-stats">
                                          <ul>
                                            <li>
                                              <h3 className="counter-value">
                                                4 Days Left
                                              </h3>
                                              <h5>Expiry</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">15</h3>
                                              <h5>Proposals</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">
                                                <span className="jobtype">Full Time</span>
                                              </h3>
                                              <h5>Job Type</h5>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="cart-hover">
                                        <Link
                                          to="/project-details"
                                          className="btn-cart"
                                          tabIndex={-1}
                                        >
                                          Bid Now
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                      <div className="freelance-content">
                                        <a
                                          data-bs-toggle="modal"
                                          href="#rating"
                                          className="favourite"
                                        >
                                          <i className="fas fa-star" />
                                        </a>
                                        <div className="author-heading">
                                          <div className="profile-img">
                                            <a href="#">
                                              <img
                                                src={company_img2}
                                                alt="author"
                                              />
                                            </a>
                                          </div>
                                          <div className="profile-name">
                                            <div className="author-location">
                                              Park INC{" "}
                                              <i className="fas fa-check-circle text-success verified" />
                                            </div>
                                          </div>
                                          <div className="freelance-info">
                                            <h3>
                                              <a href="#">PHP Developer</a>
                                            </h3>
                                            <div className="freelance-location mb-1">
                                              <i className="fas fa-clock" /> Posted 1 min
                                              ago
                                            </div>
                                            <div className="freelance-location">
                                              <i className="fas fa-map-marker-alt me-1" />
                                              California, USA
                                            </div>
                                          </div>
                                          <div className="freelance-tags">
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                After Effects
                                              </span>
                                            </a>
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                Illustrator
                                              </span>
                                            </a>
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                HTML
                                              </span>
                                            </a>
                                          </div>
                                          <div className="freelancers-price">
                                            $30-$300
                                          </div>
                                        </div>
                                        <div className="counter-stats">
                                          <ul>
                                            <li>
                                              <h3 className="counter-value">
                                                5 Days Left
                                              </h3>
                                              <h5>Expiry</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">22</h3>
                                              <h5>Proposals</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">
                                                <span className="jobtype">Full Time</span>
                                              </h3>
                                              <h5>Job Type</h5>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="cart-hover">
                                        <Link
                                          to="/project-details"
                                          className="btn-cart"
                                          tabIndex={-1}
                                        >
                                          Bid Now
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                      <div className="freelance-content">
                                        <a
                                          data-bs-toggle="modal"
                                          href="#rating"
                                          className="favourite"
                                        >
                                          <i className="fas fa-star" />
                                        </a>
                                        <div className="author-heading">
                                          <div className="profile-img">
                                            <a href="#">
                                              <img
                                                src={company_img3}
                                                alt="author"
                                              />
                                            </a>
                                          </div>
                                          <div className="profile-name">
                                            <div className="author-location">
                                              Tech Zone{" "}
                                              <i className="fas fa-check-circle text-success verified" />
                                            </div>
                                          </div>
                                          <div className="freelance-info">
                                            <h3>
                                              <a href="#">Graphic Designer</a>
                                            </h3>
                                            <div className="freelance-location mb-1">
                                              <i className="fas fa-clock" /> Posted 30
                                              mins ago
                                            </div>
                                            <div className="freelance-location">
                                              <i className="fas fa-map-marker-alt me-1" />
                                              New York, USA
                                            </div>
                                          </div>
                                          <div className="freelance-tags">
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                After Effects
                                              </span>
                                            </a>
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                Illustrator
                                              </span>
                                            </a>
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                HTML
                                              </span>
                                            </a>
                                          </div>
                                          <div className="freelancers-price">
                                            $15-$500
                                          </div>
                                        </div>
                                        <div className="counter-stats">
                                          <ul>
                                            <li>
                                              <h3 className="counter-value">
                                                8 Days Left
                                              </h3>
                                              <h5>Expiry</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">30</h3>
                                              <h5>Proposals</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">
                                                <span className="jobtype">Full Time</span>
                                              </h3>
                                              <h5>Job Type</h5>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="cart-hover">
                                        <Link
                                          to="/project-details"
                                          className="btn-cart"
                                          tabIndex={-1}
                                        >
                                          Bid Now
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                      <div className="freelance-content">
                                        <a
                                          data-bs-toggle="modal"
                                          href="#rating"
                                          className="favourite"
                                        >
                                          <i className="fas fa-star" />
                                        </a>
                                        <div className="author-heading">
                                          <div className="profile-img">
                                            <a href="#">
                                              <img
                                                src={company_img4}
                                                alt="author"
                                              />
                                            </a>
                                          </div>
                                          <div className="profile-name">
                                            <div className="author-location">
                                              ABC Software{" "}
                                              <i className="fas fa-check-circle text-success verified" />
                                            </div>
                                          </div>
                                          <div className="freelance-info">
                                            <h3>
                                              <a href="#">iOS Developer</a>
                                            </h3>
                                            <div className="freelance-location mb-1">
                                              <i className="fas fa-clock" /> Posted 1 day
                                              ago
                                            </div>
                                            <div className="freelance-location">
                                              <i className="fas fa-map-marker-alt me-1" />
                                              Florida, USA
                                            </div>
                                          </div>
                                          <div className="freelance-tags">
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                After Effects
                                              </span>
                                            </a>
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                Illustrator
                                              </span>
                                            </a>
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                HTML
                                              </span>
                                            </a>
                                          </div>
                                          <div className="freelancers-price">
                                            $25-$250
                                          </div>
                                        </div>
                                        <div className="counter-stats">
                                          <ul>
                                            <li>
                                              <h3 className="counter-value">
                                                1 Days Left
                                              </h3>
                                              <h5>Expiry</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">16</h3>
                                              <h5>Proposals</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">
                                                <span className="jobtype">Full Time</span>
                                              </h3>
                                              <h5>Job Type</h5>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="cart-hover">
                                        <Link
                                          to="/project-details"
                                          className="btn-cart"
                                          tabIndex={-1}
                                        >
                                          Bid Now
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                      <div className="freelance-content">
                                        <a
                                          data-bs-toggle="modal"
                                          href="#rating"
                                          className="favourite"
                                        >
                                          <i className="fas fa-star" />
                                        </a>
                                        <div className="author-heading">
                                          <div className="profile-img">
                                            <a href="#">
                                              <img
                                                src={company_img5}
                                                alt="author"
                                              />
                                            </a>
                                          </div>
                                          <div className="profile-name">
                                            <div className="author-location">
                                              Host Technologies{" "}
                                              <i className="fas fa-check-circle text-success verified" />
                                            </div>
                                          </div>
                                          <div className="freelance-info">
                                            <h3>
                                              <a href="#">SEO Developer</a>
                                            </h3>
                                            <div className="freelance-location mb-1">
                                              <i className="fas fa-clock" /> Posted 3 days
                                              ago
                                            </div>
                                            <div className="freelance-location">
                                              <i className="fas fa-map-marker-alt me-1" />
                                              Texas, USA
                                            </div>
                                          </div>
                                          <div className="freelance-tags">
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                After Effects
                                              </span>
                                            </a>
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                Illustrator
                                              </span>
                                            </a>
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                HTML
                                              </span>
                                            </a>
                                          </div>
                                          <div className="freelancers-price">
                                            $50-$700
                                          </div>
                                        </div>
                                        <div className="counter-stats">
                                          <ul>
                                            <li>
                                              <h3 className="counter-value">
                                                10 Days Left
                                              </h3>
                                              <h5>Expiry</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">25</h3>
                                              <h5>Proposals</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">
                                                <span className="jobtype">Full Time</span>
                                              </h3>
                                              <h5>Job Type</h5>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="cart-hover">
                                        <Link
                                          to="/project-details"
                                          className="btn-cart"
                                          tabIndex={-1}
                                        >
                                          Bid Now
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* /Applied Jobs Tab Content */}
                              {/* Applied Candidates Tab Content */}
                              <div
                                role="tabpanel"
                                id="applied_candidates"
                                className="tab-pane fade"
                              >
                                <div className="row">
                                  <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                      <div className="freelance-content">
                                        <a
                                          data-bs-toggle="modal"
                                          href="#rating"
                                          className="favourite"
                                        >
                                          <i className="fas fa-star" />
                                        </a>
                                        <div className="author-heading">
                                          <div className="profile-img">
                                            <a href="#">
                                              <img
                                                src={company_img1}
                                                alt="author"
                                              />
                                            </a>
                                          </div>
                                          <div className="profile-name">
                                            <div className="author-location">
                                              Amaze Tech{" "}
                                              <i className="fas fa-check-circle text-success verified" />
                                            </div>
                                          </div>
                                          <div className="freelance-info">
                                            <h3>
                                              <a href="#">UI/UX Developer</a>
                                            </h3>
                                            <div className="freelance-location mb-1">
                                              <i className="fas fa-clock" /> Posted Just
                                              Now
                                            </div>
                                            <div className="freelance-location">
                                              <i className="fas fa-map-marker-alt me-1" />
                                              Georgia, USA
                                            </div>
                                          </div>
                                          <div className="freelance-tags">
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                After Effects
                                              </span>
                                            </a>
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                Illustrator
                                              </span>
                                            </a>
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                HTML
                                              </span>
                                            </a>
                                          </div>
                                          <div className="freelancers-price">
                                            $40-$500
                                          </div>
                                        </div>
                                        <div className="counter-stats">
                                          <ul>
                                            <li>
                                              <h3 className="counter-value">
                                                4 Days Left
                                              </h3>
                                              <h5>Expiry</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">15</h3>
                                              <h5>Proposals</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">
                                                <span className="jobtype">Full Time</span>
                                              </h3>
                                              <h5>Job Type</h5>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="cart-hover">
                                        <Link
                                          to="/project-details"
                                          className="btn-cart"
                                          tabIndex={-1}
                                        >
                                          Bid Now
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                      <div className="freelance-content">
                                        <a
                                          data-bs-toggle="modal"
                                          href="#rating"
                                          className="favourite"
                                        >
                                          <i className="fas fa-star" />
                                        </a>
                                        <div className="author-heading">
                                          <div className="profile-img">
                                            <a href="#">
                                              <img
                                                src={company_img2}
                                                alt="author"
                                              />
                                            </a>
                                          </div>
                                          <div className="profile-name">
                                            <div className="author-location">
                                              Park INC{" "}
                                              <i className="fas fa-check-circle text-success verified" />
                                            </div>
                                          </div>
                                          <div className="freelance-info">
                                            <h3>
                                              <a href="#">PHP Developer</a>
                                            </h3>
                                            <div className="freelance-location mb-1">
                                              <i className="fas fa-clock" /> Posted 1 min
                                              ago
                                            </div>
                                            <div className="freelance-location">
                                              <i className="fas fa-map-marker-alt me-1" />
                                              California, USA
                                            </div>
                                          </div>
                                          <div className="freelance-tags">
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                After Effects
                                              </span>
                                            </a>
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                Illustrator
                                              </span>
                                            </a>
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                HTML
                                              </span>
                                            </a>
                                          </div>
                                          <div className="freelancers-price">
                                            $30-$300
                                          </div>
                                        </div>
                                        <div className="counter-stats">
                                          <ul>
                                            <li>
                                              <h3 className="counter-value">
                                                5 Days Left
                                              </h3>
                                              <h5>Expiry</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">22</h3>
                                              <h5>Proposals</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">
                                                <span className="jobtype">Full Time</span>
                                              </h3>
                                              <h5>Job Type</h5>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="cart-hover">
                                        <Link
                                          to="/project-details"
                                          className="btn-cart"
                                          tabIndex={-1}
                                        >
                                          Bid Now
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                      <div className="freelance-content">
                                        <a
                                          data-bs-toggle="modal"
                                          href="#rating"
                                          className="favourite"
                                        >
                                          <i className="fas fa-star" />
                                        </a>
                                        <div className="author-heading">
                                          <div className="profile-img">
                                            <a href="#">
                                              <img
                                                src={company_img3}
                                                alt="author"
                                              />
                                            </a>
                                          </div>
                                          <div className="profile-name">
                                            <div className="author-location">
                                              Tech Zone{" "}
                                              <i className="fas fa-check-circle text-success verified" />
                                            </div>
                                          </div>
                                          <div className="freelance-info">
                                            <h3>
                                              <a href="#">Graphic Designer</a>
                                            </h3>
                                            <div className="freelance-location mb-1">
                                              <i className="fas fa-clock" /> Posted 30
                                              mins ago
                                            </div>
                                            <div className="freelance-location">
                                              <i className="fas fa-map-marker-alt me-1" />
                                              New York, USA
                                            </div>
                                          </div>
                                          <div className="freelance-tags">
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                After Effects
                                              </span>
                                            </a>
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                Illustrator
                                              </span>
                                            </a>
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                HTML
                                              </span>
                                            </a>
                                          </div>
                                          <div className="freelancers-price">
                                            $15-$500
                                          </div>
                                        </div>
                                        <div className="counter-stats">
                                          <ul>
                                            <li>
                                              <h3 className="counter-value">
                                                8 Days Left
                                              </h3>
                                              <h5>Expiry</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">30</h3>
                                              <h5>Proposals</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">
                                                <span className="jobtype">Full Time</span>
                                              </h3>
                                              <h5>Job Type</h5>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="cart-hover">
                                        <Link
                                          to="/project-details"
                                          className="btn-cart"
                                          tabIndex={-1}
                                        >
                                          Bid Now
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                      <div className="freelance-content">
                                        <a
                                          data-bs-toggle="modal"
                                          href="#rating"
                                          className="favourite"
                                        >
                                          <i className="fas fa-star" />
                                        </a>
                                        <div className="author-heading">
                                          <div className="profile-img">
                                            <a href="#">
                                              <img
                                                src={company_img4}
                                                alt="author"
                                              />
                                            </a>
                                          </div>
                                          <div className="profile-name">
                                            <div className="author-location">
                                              ABC Software{" "}
                                              <i className="fas fa-check-circle text-success verified" />
                                            </div>
                                          </div>
                                          <div className="freelance-info">
                                            <h3>
                                              <a href="#">iOS Developer</a>
                                            </h3>
                                            <div className="freelance-location mb-1">
                                              <i className="fas fa-clock" /> Posted 1 day
                                              ago
                                            </div>
                                            <div className="freelance-location">
                                              <i className="fas fa-map-marker-alt me-1" />
                                              Florida, USA
                                            </div>
                                          </div>
                                          <div className="freelance-tags">
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                After Effects
                                              </span>
                                            </a>
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                Illustrator
                                              </span>
                                            </a>
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                HTML
                                              </span>
                                            </a>
                                          </div>
                                          <div className="freelancers-price">
                                            $25-$250
                                          </div>
                                        </div>
                                        <div className="counter-stats">
                                          <ul>
                                            <li>
                                              <h3 className="counter-value">
                                                1 Days Left
                                              </h3>
                                              <h5>Expiry</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">16</h3>
                                              <h5>Proposals</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">
                                                <span className="jobtype">Full Time</span>
                                              </h3>
                                              <h5>Job Type</h5>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="cart-hover">
                                        <Link
                                          to="/project-details"
                                          className="btn-cart"
                                          tabIndex={-1}
                                        >
                                          Bid Now
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-lg-12 col-xl-6">
                                    <div className="freelance-widget widget-author">
                                      <div className="freelance-content">
                                        <a
                                          data-bs-toggle="modal"
                                          href="#rating"
                                          className="favourite"
                                        >
                                          <i className="fas fa-star" />
                                        </a>
                                        <div className="author-heading">
                                          <div className="profile-img">
                                            <a href="#">
                                              <img
                                                src={company_img5}
                                                alt="author"
                                              />
                                            </a>
                                          </div>
                                          <div className="profile-name">
                                            <div className="author-location">
                                              Host Technologies{" "}
                                              <i className="fas fa-check-circle text-success verified" />
                                            </div>
                                          </div>
                                          <div className="freelance-info">
                                            <h3>
                                              <a href="#">SEO Developer</a>
                                            </h3>
                                            <div className="freelance-location mb-1">
                                              <i className="fas fa-clock" /> Posted 3 days
                                              ago
                                            </div>
                                            <div className="freelance-location">
                                              <i className="fas fa-map-marker-alt me-1" />
                                              Texas, USA
                                            </div>
                                          </div>
                                          <div className="freelance-tags">
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                After Effects
                                              </span>
                                            </a>
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                Illustrator
                                              </span>
                                            </a>
                                            <a href="#">
                                              <span className="badge badge-pill badge-design">
                                                HTML
                                              </span>
                                            </a>
                                          </div>
                                          <div className="freelancers-price">
                                            $50-$700
                                          </div>
                                        </div>
                                        <div className="counter-stats">
                                          <ul>
                                            <li>
                                              <h3 className="counter-value">
                                                10 Days Left
                                              </h3>
                                              <h5>Expiry</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">25</h3>
                                              <h5>Proposals</h5>
                                            </li>
                                            <li>
                                              <h3 className="counter-value">
                                                <span className="jobtype">Full Time</span>
                                              </h3>
                                              <h5>Job Type</h5>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="cart-hover">
                                        <Link
                                          to="/project-details"
                                          className="btn-cart"
                                          tabIndex={-1}
                                        >
                                          Bid Now
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* /Applied Candidates Tab Content */}
                            </div>
                          </div>
                        </div>
                        {/* /Job Tab Content */}
                        {/* Portfolio Tab Content */}
                        <div role="tabpanel" id="portfolio" className="tab-pane fade">
                          <div className="pro-post project-widget widget-box">
                            <h3 className="pro-title">Portfolio</h3>
                            <div className="pro-content">
                              <div className="row">
                                <div className="col-sm-6 col-lg-4 col-xl-3">
                                  <div className="project-widget">
                                    <div className="pro-image">
                                      <Link to="/project-details">
                                        <img
                                          className="img-fluid"
                                          alt="User Image"
                                          src={Project_img}
                                        />
                                      </Link>
                                    </div>
                                    <div className="pro-detail">
                                      <h3 className="pro-name">
                                        <Link to="/project-details">Project name</Link>
                                      </h3>
                                      <p className="pro-designation">Web design</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-lg-4 col-xl-3">
                                  <div className="project-widget">
                                    <div className="pro-image">
                                      <Link to="/project-details">
                                        <img
                                          className="img-fluid"
                                          alt="User Image"
                                          src={Project_1}
                                        />
                                      </Link>
                                    </div>
                                    <div className="pro-detail">
                                      <h3 className="pro-name">
                                        <Link to="/project-details">Project name</Link>
                                      </h3>
                                      <p className="pro-designation">Web design</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-lg-4 col-xl-3">
                                  <div className="project-widget">
                                    <div className="pro-image">
                                      <Link to="/project-details">
                                        <img
                                          className="img-fluid"
                                          alt="User Image"
                                          src={Project_2}
                                        />
                                      </Link>
                                    </div>
                                    <div className="pro-detail">
                                      <h3 className="pro-name">
                                        <Link to="/roject-details">Project name</Link>
                                      </h3>
                                      <p className="pro-designation">Web design</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-lg-4 col-xl-3">
                                  <div className="project-widget">
                                    <div className="pro-image">
                                      <Link to="/project-details">
                                        <img
                                          className="img-fluid"
                                          alt="User Image"
                                          src={Project_3}
                                        />
                                      </Link>
                                    </div>
                                    <div className="pro-detail">
                                      <h3 className="pro-name">
                                        <Link to="/project-details">Project name</Link>
                                      </h3>
                                      <p className="pro-designation">Web design</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-lg-4 col-xl-3">
                                  <div className="project-widget">
                                    <div className="pro-image">
                                      <Link to="/project-details">
                                        <img
                                          className="img-fluid"
                                          alt="User Image"
                                          src={Project_4}
                                        />
                                      </Link>
                                    </div>
                                    <div className="pro-detail">
                                      <h3 className="pro-name">
                                        <Link to="/project-details">Project name</Link>
                                      </h3>
                                      <p className="pro-designation">Web design</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-lg-4 col-xl-3">
                                  <div className="project-widget">
                                    <div className="pro-image">
                                      <Link to="/project-details">
                                        <img
                                          className="img-fluid"
                                          alt="User Image"
                                          src={Project_5}
                                        />
                                      </Link>
                                    </div>
                                    <div className="pro-detail">
                                      <h3 className="pro-name">
                                        <Link to="/project-details">Project name</Link>
                                      </h3>
                                      <p className="pro-designation">Web design</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-lg-4 col-xl-3">
                                  <div className="project-widget">
                                    <div className="pro-image">
                                      <Link to="/project-details">
                                        <img
                                          className="img-fluid"
                                          alt="User Image"
                                          src={Project_6}
                                        />
                                      </Link>
                                    </div>
                                    <div className="pro-detail">
                                      <h3 className="pro-name">
                                        <Link to="/project-details">Project name</Link>
                                      </h3>
                                      <p className="pro-designation">Web design</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-lg-4 col-xl-3">
                                  <div className="project-widget">
                                    <div className="pro-image">
                                      <Link to="/project-details">
                                        <img
                                          className="img-fluid"
                                          alt="User Image"
                                          src={Project_7}
                                        />
                                      </Link>
                                    </div>
                                    <div className="pro-detail">
                                      <h3 className="pro-name">
                                        <Link to="/project-details">Project name</Link>
                                      </h3>
                                      <p className="pro-designation">Web design</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-lg-4 col-xl-3">
                                  <div className="project-widget">
                                    <div className="pro-image">
                                      <Link to="/project-details">
                                        <img
                                          className="img-fluid"
                                          alt="User Image"
                                          src={Project_2}
                                        />
                                      </Link>
                                    </div>
                                    <div className="pro-detail">
                                      <h3 className="pro-name">
                                        <Link to="/project-details">Project name</Link>
                                      </h3>
                                      <p className="pro-designation">Web design</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-lg-4 col-xl-3">
                                  <div className="project-widget">
                                    <div className="pro-image">
                                      <Link to="/project-details">
                                        <img
                                          className="img-fluid"
                                          alt="User Image"
                                          src={Project_3}
                                        />
                                      </Link>
                                    </div>
                                    <div className="pro-detail">
                                      <h3 className="pro-name">
                                        <Link to="/project-details">Project name</Link>
                                      </h3>
                                      <p className="pro-designation">Web design</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-lg-4 col-xl-3">
                                  <div className="project-widget">
                                    <div className="pro-image">
                                      <Link to="/project-details">
                                        <img
                                          className="img-fluid"
                                          alt="User Image"
                                          src={Project_5}
                                        />
                                      </Link>
                                    </div>
                                    <div className="pro-detail">
                                      <h3 className="pro-name">
                                        <Link to="/project-details">Project name</Link>
                                      </h3>
                                      <p className="pro-designation">Web design</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-lg-4 col-xl-3">
                                  <div className="project-widget">
                                    <div className="pro-image">
                                      <Link to="/project-details">
                                        <img
                                          className="img-fluid"
                                          alt="User Image"
                                          src={Project_6}
                                        />
                                      </Link>
                                    </div>
                                    <div className="pro-detail">
                                      <h3 className="pro-name">
                                        <Link to="/project-details">Project name</Link>
                                      </h3>
                                      <p className="pro-designation">Web design</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Portfolio Tab Content */}
                        {/* Feedback Tab Content */}
                        <div role="tabpanel" id="feedbacks" className="tab-pane fade">
                          <div className="pro-post project-widget widget-box">
                            <h3 className="pro-title mb-3">Feedbacks</h3>
                            <div className="pro-post mt-4">
                              <div className="about-author">
                                <div className="about-author-img">
                                  <div className="author-img-wrap">
                                    <Link to="/review">
                                      <img
                                        className="img-fluid"
                                        alt = ""
                                        src={Img_01}
                                      />
                                    </Link>
                                  </div>
                                </div>
                                <div className="author-details">
                                  <Link to="/review" className="blog-author-name">
                                    Logo Designer
                                  </Link>
                                  <h5>Techline Oct 25, 2021 - Nov 18, 2021</h5>
                                  <p className="mb-0">
                                    I am a professional graphic designer. I have more than
                                    10-years of experience in graphics design. If you are
                                    looking for any graphic related work, contact me, I'll
                                    glad to help you.
                                  </p>
                                </div>
                              </div>
                              <div className="about-author">
                                <div className="about-author-img">
                                  <div className="author-img-wrap">
                                    <Link to="/review">
                                      <img
                                        className="img-fluid"
                                        alt = ""
                                        src={Img_02}
                                      />
                                    </Link>
                                  </div>
                                </div>
                                <div className="author-details">
                                  <Link to="/review" className="blog-author-name">
                                    Logo Designer
                                  </Link>
                                  <h5>Techline Oct 12, 2021 - Nov 18, 2021</h5>
                                  <p className="mb-0">
                                    I am a professional graphic designer. I have more than
                                    10-years of experience in graphics design. If you are
                                    looking for any graphic related work, contact me, I'll
                                    glad to help you.
                                  </p>
                                </div>
                              </div>
                              <div className="about-author">
                                <div className="about-author-img">
                                  <div className="author-img-wrap">
                                    <Link to="/review">
                                      <img
                                        className="img-fluid"
                                        alt = ""
                                        src={Img_03}
                                      />
                                    </Link>
                                  </div>
                                </div>
                                <div className="author-details">
                                  <a href="#" className="blog-author-name">
                                    Logo Designer
                                  </a>
                                  <h5>Techline Oct 18, 2021 - Nov 22, 2021</h5>
                                </div>
                                <div className="form-group reply-group mt-5 mb-0">
                                  <div className="input-group">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Reply"
                                    />
                                    <div className="input-group-append">
                                      <button
                                        className="btn btn-success sub-btn"
                                        type="submit"
                                      >
                                        SEND
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Feedback Tab Content */}
                        {/* Payment Tab Content */}
                        <div role="tabpanel" id="payments" className="tab-pane fade">
                          <div className="pro-post project-widget">
                            <div className="widget-title-box ">
                              <h3 className="pro-title mb-3">PAYMENTS</h3>
                            </div>
                            <div className="widget-box">
                              <div className="pro-post billing-method">
                                <p className="mb-0">
                                  Add Billing Method{" "}
                                  <a
                                    href="#"
                                    className="add-bill float-end"
                                  >
                                    <i className="fa fa-plus-circle orange-text" />
                                  </a>
                                </p>
                              </div>
                              <h4 className="pb-2">PAYMENT ACTIVITY</h4>
                              <div className="row">
                                <div className="col-12 col-sm-4">
                                  <div className="pro-post payment-detail">
                                    <img
                                      className="img-fluid"
                                      alt = ""
                                      src={Pay_icon_01}
                                    />
                                    <h2 className="bg-blue">$4,745</h2>
                                    <p>Total Income</p>
                                  </div>
                                </div>
                                <div className="col-12 col-sm-4">
                                  <div className="pro-post payment-detail">
                                    <img
                                      className="img-fluid"
                                      alt = ""
                                      src={Pay_icon_02}
                                    />
                                    <h2 className="bg-pink">$4,450</h2>
                                    <p>Withdrawn</p>
                                  </div>
                                </div>
                                <div className="col-12 col-sm-4">
                                  <div className="pro-post payment-detail">
                                    <img
                                      className="img-fluid"
                                      alt = ""
                                      src={Pay_icon_03}
                                    />
                                    <h2 className="bg-yellow">$1,145</h2>
                                    <p>Sent</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="transaction">
                              <img
                                className="img-fluid"
                                alt=""
                                src={Redeem_icon}
                              />
                              <h5>All your transactions are saved here.</h5>
                              <a href="#" className="btn-primary click-btn">
                                Click Here{" "}
                              </a>
                            </div>
                          </div>
                          <div className="card">
                            <div className="card-header">
                              <p className="mb-0">
                                With workwise payment protection , only pay for work
                                delivered
                              </p>
                            </div>
                            <div className="card-body">
                              <div className="payment-list">
                                <h3>Add Billing Method</h3>
                                <label className="payment-radio credit-card-option mb-3">
                                  <input type="radio" name="radio" defaultChecked />
                                  <span className="checkmark" />
                                  Credit or Debit Cards
                                </label>
                                <div className="row">
                                  <div className="col-md-12">
                                    <div className="form-group">
                                      <label htmlFor="card_number">Card Number</label>
                                      <input
                                        className="form-control"
                                        id="card_number"
                                        type="text"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <label>First Name</label>
                                      <input
                                        className="form-control"
                                        id="first_name"
                                        type="text"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <label>Last Name</label>
                                      <input
                                        className="form-control"
                                        id="last_name"
                                        type="text"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="form-group">
                                      <label>Expires on</label>
                                      <input
                                        className="form-control"
                                        id="expiry_on"
                                        type="text"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-8">
                                    <div className="form-group">
                                      <label htmlFor="cvv">CVV (Security Code) </label>
                                      <input
                                        className="form-control"
                                        id="cvv"
                                        type="text"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-8 btn-pad">
                                    <a href="#" className="btn-primary click-btn">
                                      Continue
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card-footer">
                              <label className="payment-radio credit-card-option">
                                <input type="radio" name="paypal" defaultChecked />
                                <span className="checkmark" />
                                Add Paypal Account
                              </label>
                            </div>
                          </div>
                        </div>
                        {/* Payment Tab Content */}
                      </div>
                    </div>
                  </div>
                  {/* Blog Sidebar */}
                  <div className="col-lg-4 col-md-12 sidebar-right theiaStickySidebar">
                  <StickyBox offsetTop={20} offsetBottom={20}>
                    {/* Verifications */}
                    <div className="pro-post widget-box about-widget">
                      <div className="row">
                        <div className="col-12">
                          <h4 className="pro-title">Verifications</h4>
                        </div>
                      </div>
                      <ul className="latest-posts pro-content">
                        <li className="border-bottom-0">
                          <span>
                            <i className="fas fa-check-circle text-success me-4 f-20" />
                          </span>
                          <span>
                            <b>Identity Verified</b>
                          </span>
                          <span className="float-end text-success">Verified</span>
                        </li>
                        <li className="border-bottom-0">
                          <span>
                            <i className="fas fa-check-circle text-success me-4 f-20" />
                          </span>
                          <span>
                            <b> Payment Verified</b>
                          </span>
                          <span className="float-end text-success">Verified</span>
                        </li>
                        <li className="border-bottom-0">
                          <span>
                            <i className="fas fa-check-circle text-success me-4 f-20" />
                          </span>
                          <span>
                            <b> Phone Verified</b>
                          </span>
                          <span className="float-end text-success">Verified</span>
                        </li>
                        <li className="border-bottom-0">
                          <span>
                            <i className="fas fa-times-circle text-danger me-4 f-20" />
                          </span>
                          <span>
                            <b>Email Verified</b>
                          </span>
                          <span className="float-end text-danger">Verify Now</span>
                        </li>
                      </ul>
                    </div>
                    {/* /Verifications */}
                    {/* Follow Widget */}
                    <div className="pro-post">
                      <div className="follow-widget">
                        <div className="text-end custom-edit-btn">
                          <Link
                            to="/freelancer-profile-settings"
                            className="sub-title"
                          >
                            <i className="fa fa-pencil-alt me-1" />
                          </Link>
                        </div>
                        <a href="#" className="btn follow-btn">
                          + Follow
                        </a>
                        <ul className="follow-posts pro-post">
                          <li>
                            <p>Following</p>
                            <h6>49</h6>
                          </li>
                          <li>
                            <p>Followers</p>
                            <h6>422</h6>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* /Follow Widget */}
                    {/* Language Widget */}
                    <div className="pro-post widget-box language-widget">
                      <div className="row">
                        <div className="col-10">
                          <h4 className="pro-title mb-0">Language Skills</h4>
                        </div>
                        <div className="col-2 text-end">
                          <Link
                            to="/freelancer-profile-settings"
                            className="sub-title"
                          >
                            <i className="fa fa-pencil-alt me-1" />
                          </Link>
                        </div>
                      </div>
                      <ul className="latest-posts pro-content">
                        <li>
                          <p>English</p>
                          <div className="progress progress-md mb-0">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "50%" }}
                              aria-valuenow={75}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </li>
                        <li>
                          <p>Russian</p>
                          <div className="progress progress-md mb-0">
                            <div
                              className="progress-bar bg-success"
                              role="progressbar"
                              style={{ width: "65%" }}
                              aria-valuenow={25}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </li>
                        <li>
                          <p>German</p>
                          <div className="progress progress-md mb-0">
                            <div
                              className="progress-bar bg-warning"
                              role="progressbar"
                              style={{ width: "50%" }}
                              aria-valuenow={75}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/* /Language Widget */}
                    {/* About Widget */}
                    <div className="pro-post widget-box about-widget">
                      <div className="row">
                        <div className="col-10">
                          <h4 className="pro-title mb-0">ABOUT ME</h4>
                        </div>
                        <div className="col-2 text-end">
                          <Link
                            to="/freelancer-profile-settings"
                            className="sub-title"
                          >
                            <i className="fa fa-pencil-alt me-1" />
                          </Link>
                        </div>
                      </div>
                      <ul className="latest-posts pro-content pt-0">
                        <li>
                          <p>Gender</p>
                          <h6>Male</h6>
                        </li>
                        <li>
                          <p>Experience</p>
                          <h6>5 Years</h6>
                        </li>
                        <li>
                          <p>Location</p>
                          <h6>Istanbul/Turkey</h6>
                        </li>
                      </ul>
                    </div>
                    {/* /About Widget */}
                    {/* Categories */}
                    <div className="pro-post category-widget">
                      <div className="widget-title-box">
                        <div className="row">
                          <div className="col-10">
                            <h3 className="pro-title">SOCIAL LINKS</h3>
                          </div>
                          <div className="col-2 text-end">
                            <Link
                              to="/freelancer-profile-settings"
                              className="sub-title"
                            >
                              <i className="fa fa-pencil-alt me-1" />
                            </Link>
                          </div>
                        </div>
                      </div>
                      <ul className="latest-posts pro-content">
                        <li>
                          <a href="#">http://www.facebook.com/john...</a>
                        </li>
                        <li>
                          <a href="#">http://www.Twitter.com/john...</a>
                        </li>
                        <li>
                          <a href="#">Http://www.googleplus.com/john... </a>
                        </li>
                        <li>
                          <a href="#"> Http://www.behance.com/john...</a>
                        </li>
                        <li>
                          <a href="#"> Http://www.pinterest.com/john...</a>
                        </li>
                      </ul>
                    </div>
                    {/* /Categories */}
                    {/* LInk Widget */}
                    <div className="pro-post widget-box post-widget">
                      <div className="row">
                        <div className="col-10">
                          <h3 className="pro-title">Profile Link</h3>
                        </div>
                        <div className="col-2 text-end">
                          <Link
                            to="/freelancer-profile-settings"
                            className="sub-title"
                          >
                            <i className="fa fa-pencil-alt me-1" />
                          </Link>
                        </div>
                      </div>
                      <div className="pro-content">
                        <div className="form-group profile-group mb-0">
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="https://www.kofejob.com/developer/daren/12454687"
                            />
                            <div className="input-group-append">
                              <button className="btn btn-success sub-btn" type="submit">
                                <i className="fa fa-clone" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /Link Widget */}
                    {/* Share Widget */}
                    <div className="pro-post widget-box post-widget">
                      <h3 className="pro-title">Share</h3>
                      <div className="pro-content">
                        <a href="#" className="share-icon">
                          <i className="fas fa-share-alt" /> Share
                        </a>
                      </div>
                    </div>
                    {/* /Share Widget */}
                  </StickyBox>
                  </div>
                  {/* /Blog Sidebar */}
                </div>
              </div>
            </div>
            {/* /Page Content */}
            <>
              {/* add skills Modal */}
              <div
                className="modal fade add-skills"
                id="add-skills"
                data-backdrop="static"
                tabIndex={-1}
              >
                <div className="modal-dialog modal-dialog-centered modal-xl">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button
                        type="button"
                        className="close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">×</span>
                      </button>
                      <img src={Logo_01} alt="" className="img-fluid mb-3" />
                      <h3 className="modal-title text-center">
                        Select your skills and expertise
                      </h3>
                    </div>
                    <div className="modal-body profile-edit-form">
                      <form>
                        <div className="row">
                          <div className="col-12">
                            <div className="form-group profile-group mb-2">
                              <label>Select your skills and expertise</label>
                              <div className="input-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Search project"
                                />
                                <div className="input-group-append">
                                  <button type="submit" className="bg-none">
                                    <i className="fa fa-search orange-text me-2" />
                                  </button>
                                </div>
                              </div>
                            </div>
                            <hr className="hr-text" data-content="or" />
                            <div className="row">
                              <div className="col-md-4">
                                <div className="card">
                                  <div className="card-header bg-primary">
                                    <h4 className="card-title text-white">
                                      Select A Category
                                    </h4>
                                  </div>
                                  <div className="card-body p-0">
                                    <div
                                      className="nav flex-column nav-pills list-group scrollable"
                                      id="v-pills-tab"
                                      role="tablist"
                                      aria-orientation="vertical"
                                    >
                                      <a
                                        className="nav-link list-group-item list-group-item-action active"
                                        id="v-pills-home-tab"
                                        data-bs-toggle="pill"
                                        href="#v-pills-home"
                                        role="tab"
                                        aria-controls="v-pills-home"
                                        aria-selected="true"
                                      >
                                        <i className="fa fa-circle f-7 me-2 text-primary" />
                                        <span>Writing &amp; Content</span>{" "}
                                        <span className="float-end">
                                          <i
                                            className="fa fa-caret-right"
                                            aria-hidden="true"
                                          />
                                        </span>
                                      </a>
                                      <a
                                        className="nav-link list-group-item list-group-item-action"
                                        id="v-pills-profile-tab"
                                        data-bs-toggle="pill"
                                        href="#v-pills-profile"
                                        role="tab"
                                        aria-controls="v-pills-profile"
                                        aria-selected="false"
                                      >
                                        <i className="fa fa-circle f-7 me-2 text-primary" />{" "}
                                        Design, Media &amp; Architecture
                                        <span className="float-end">
                                          <i
                                            className="fa fa-caret-right"
                                            aria-hidden="true"
                                          />
                                        </span>
                                      </a>
                                      <a
                                        className="nav-link list-group-item list-group-item-action"
                                        id="v-pills-messages-tab"
                                        data-bs-toggle="pill"
                                        href="#v-pills-messages"
                                        role="tab"
                                        aria-controls="v-pills-messages"
                                        aria-selected="false"
                                      >
                                        <i className="fa fa-circle f-7 me-2 text-primary" />{" "}
                                        Data Entry &amp; Admin
                                        <span className="float-end">
                                          <i
                                            className="fa fa-caret-right"
                                            aria-hidden="true"
                                          />
                                        </span>
                                      </a>
                                      <a
                                        className="nav-link list-group-item list-group-item-action"
                                        id="v-pills-settings-tab"
                                        data-bs-toggle="pill"
                                        href="#v-pills-settings"
                                        role="tab"
                                        aria-controls="v-pills-settings"
                                        aria-selected="false"
                                      >
                                        <i className="fa fa-circle f-7 me-2 text-primary" />{" "}
                                        Engineering &amp; Science
                                        <span className="float-end">
                                          <i
                                            className="fa fa-caret-right"
                                            aria-hidden="true"
                                          />
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="card">
                                  <div className="card-header bg-primary">
                                    <h4 className="card-title text-white">
                                      Select Sub Category
                                    </h4>
                                  </div>
                                  <div className="card-body p-0 scrollable">
                                    <div
                                      className="tab-content p-0"
                                      id="v-pills-tabContent"
                                    >
                                      <div
                                        className="tab-pane fade show active  list-group"
                                        id="v-pills-home"
                                        role="tabpanel"
                                        aria-labelledby="v-pills-home-tab"
                                      >
                                        <button
                                          type="button"
                                          className="list-group-item list-group-item-action"
                                        >
                                          <i className="fa fa-circle f-7 me-2 text-primary" />{" "}
                                          PHP
                                          <span className="ms-2 text-primary">
                                            (3729 jobs)
                                          </span>
                                          <span className="float-end">
                                            <i
                                              className="fa fa-caret-right"
                                              aria-hidden="true"
                                            />
                                          </span>
                                        </button>
                                        <button
                                          type="button"
                                          className="list-group-item list-group-item-action"
                                        >
                                          <i className="fa fa-circle f-7 me-2 text-primary" />
                                          HTML
                                          <span className="ms-2 text-primary">
                                            (3729 jobs)
                                          </span>
                                          <span className="float-end">
                                            <i
                                              className="fa fa-caret-right"
                                              aria-hidden="true"
                                            />
                                          </span>
                                        </button>
                                        <button
                                          type="button"
                                          className="list-group-item list-group-item-action"
                                        >
                                          <i className="fa fa-circle f-7 me-2 text-primary" />
                                          Software Architecture
                                          <span className="ms-2 text-primary">
                                            (3729 jobs)
                                          </span>
                                          <span className="float-end">
                                            <i
                                              className="fa fa-caret-right"
                                              aria-hidden="true"
                                            />
                                          </span>
                                        </button>
                                        <button
                                          type="button"
                                          className="list-group-item list-group-item-action"
                                        >
                                          <i className="fa fa-circle f-7 me-2 text-primary" />
                                          JavaScript
                                          <span className="ms-2 text-primary">
                                            (3729 jobs)
                                          </span>
                                          <span className="float-end">
                                            <i
                                              className="fa fa-caret-right"
                                              aria-hidden="true"
                                            />
                                          </span>
                                        </button>
                                      </div>
                                      <div
                                        className="tab-pane fade list-group"
                                        id="v-pills-profile"
                                        role="tabpanel"
                                        aria-labelledby="v-pills-profile-tab"
                                      >
                                        <button
                                          type="button"
                                          className="list-group-item list-group-item-action"
                                        >
                                          <i className="fa fa-circle f-7 me-2 text-primary" />{" "}
                                          PHP
                                          <span className="ms-2 text-primary">
                                            (3729 jobs)
                                          </span>
                                          <span className="float-end">
                                            <i
                                              className="fa fa-caret-right"
                                              aria-hidden="true"
                                            />
                                          </span>
                                        </button>
                                        <button
                                          type="button"
                                          className="list-group-item list-group-item-action"
                                        >
                                          <i className="fa fa-circle f-7 me-2 text-primary" />
                                          HTML
                                          <span className="ms-2 text-primary">
                                            (3729 jobs)
                                          </span>
                                          <span className="float-end">
                                            <i
                                              className="fa fa-caret-right"
                                              aria-hidden="true"
                                            />
                                          </span>
                                        </button>
                                        <button
                                          type="button"
                                          className="list-group-item list-group-item-action"
                                        >
                                          <i className="fa fa-circle f-7 me-2 text-primary" />
                                          Software Architecture
                                          <span className="ms-2 text-primary">
                                            (3729 jobs)
                                          </span>
                                          <span className="float-end">
                                            <i
                                              className="fa fa-caret-right"
                                              aria-hidden="true"
                                            />
                                          </span>
                                        </button>
                                        <button
                                          type="button"
                                          className="list-group-item list-group-item-action"
                                        >
                                          <i className="fa fa-circle f-7 me-2 text-primary" />
                                          JavaScript
                                          <span className="ms-2 text-primary">
                                            (3729 jobs)
                                          </span>
                                          <span className="float-end">
                                            <i
                                              className="fa fa-caret-right"
                                              aria-hidden="true"
                                            />
                                          </span>
                                        </button>
                                      </div>
                                      <div
                                        className="tab-pane fade list-group"
                                        id="v-pills-messages"
                                        role="tabpanel"
                                        aria-labelledby="v-pills-messages-tab"
                                      >
                                        <button
                                          type="button"
                                          className="list-group-item list-group-item-action"
                                        >
                                          <i className="fa fa-circle f-7 me-2 text-primary" />{" "}
                                          PHP
                                          <span className="ms-2 text-primary">
                                            (3729 jobs)
                                          </span>
                                          <span className="float-end">
                                            <i
                                              className="fa fa-caret-right"
                                              aria-hidden="true"
                                            />
                                          </span>
                                        </button>
                                        <button
                                          type="button"
                                          className="list-group-item list-group-item-action"
                                        >
                                          <i className="fa fa-circle f-7 me-2 text-primary" />
                                          HTML
                                          <span className="ms-2 text-primary">
                                            (3729 jobs)
                                          </span>
                                          <span className="float-end">
                                            <i
                                              className="fa fa-caret-right"
                                              aria-hidden="true"
                                            />
                                          </span>
                                        </button>
                                        <button
                                          type="button"
                                          className="list-group-item list-group-item-action"
                                        >
                                          <i className="fa fa-circle f-7 me-2 text-primary" />
                                          Software Architecture
                                          <span className="ms-2 text-primary">
                                            (3729 jobs)
                                          </span>
                                          <span className="float-end">
                                            <i
                                              className="fa fa-caret-right"
                                              aria-hidden="true"
                                            />
                                          </span>
                                        </button>
                                        <button
                                          type="button"
                                          className="list-group-item list-group-item-action"
                                        >
                                          <i className="fa fa-circle f-7 me-2 text-primary" />
                                          JavaScript
                                          <span className="ms-2 text-primary">
                                            (3729 jobs)
                                          </span>
                                          <span className="float-end">
                                            <i
                                              className="fa fa-caret-right"
                                              aria-hidden="true"
                                            />
                                          </span>
                                        </button>
                                      </div>
                                      <div
                                        className="tab-pane fade list-group"
                                        id="v-pills-settings"
                                        role="tabpanel"
                                        aria-labelledby="v-pills-settings-tab"
                                      >
                                        <button
                                          type="button"
                                          className="list-group-item list-group-item-action"
                                        >
                                          <i className="fa fa-circle f-7 me-2 text-primary" />{" "}
                                          PHP
                                          <span className="ms-2 text-primary">
                                            (3729 jobs)
                                          </span>
                                          <span className="float-end">
                                            <i
                                              className="fa fa-caret-right"
                                              aria-hidden="true"
                                            />
                                          </span>
                                        </button>
                                        <button
                                          type="button"
                                          className="list-group-item list-group-item-action"
                                        >
                                          <i className="fa fa-circle f-7 me-2 text-primary" />
                                          HTML
                                          <span className="ms-2 text-primary">
                                            (3729 jobs)
                                          </span>
                                          <span className="float-end">
                                            <i
                                              className="fa fa-caret-right"
                                              aria-hidden="true"
                                            />
                                          </span>
                                        </button>
                                        <button
                                          type="button"
                                          className="list-group-item list-group-item-action"
                                        >
                                          <i className="fa fa-circle f-7 me-2 text-primary" />
                                          Software Architecture
                                          <span className="ms-2 text-primary">
                                            (3729 jobs)
                                          </span>
                                          <span className="float-end">
                                            <i
                                              className="fa fa-caret-right"
                                              aria-hidden="true"
                                            />
                                          </span>
                                        </button>
                                        <button
                                          type="button"
                                          className="list-group-item list-group-item-action"
                                        >
                                          <i className="fa fa-circle f-7 me-2 text-primary" />
                                          JavaScript
                                          <span className="ms-2 text-primary">
                                            (3729 jobs)
                                          </span>
                                          <span className="float-end">
                                            <i
                                              className="fa fa-caret-right"
                                              aria-hidden="true"
                                            />
                                          </span>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="card">
                                  <div className="card-header">
                                    <h4 className="card-title">
                                      1 out of 20 skills selected
                                    </h4>
                                  </div>
                                  <div className="card-body scrollable">
                                    <a
                                      href="#"
                                      className="btn btn-outline-primary rounded-pill"
                                    >
                                      Primary
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-12 text-end">
                            <a
                              href="#"
                              className="btn btn-primary profile-update-btn"
                              data-bs-dismiss="modal"
                            >
                              Update
                            </a>
                            <a
                              href="#"
                              className="btn btn-light profile-cancel-btn"
                              data-bs-dismiss="modal"
                            >
                              Cancel
                            </a>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* /add skills Modal */}
            </>
          </>
        
         )
    
}
export default UserDetails;