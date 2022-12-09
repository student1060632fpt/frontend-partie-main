import React from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { Avatar_1,Avatar_2,Avatar_3,Flags_en,Logo_01 } from "../../imagepath";
import { Sidebar } from '../sidebar';
    
const Projectproposal = (props) => {  
 
  return (
    <>
  <div className="breadcrumb-bar">
    <div className="container">
      <div className="row align-items-center inner-banner">
        <div className="col-md-12 col-12 text-center">
          <h2 className="breadcrumb-title">Dashboard</h2>
          <nav aria-label="breadcrumb" className="page-breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/index">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Dashboard
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
  {/* Page Content */}
  <div className="content">
    <div className="container">
      <div className="row">
        {/* sidebar */}
        <div className="col-xl-3 col-md-4 theiaStickySidebar">
            <StickyBox offsetTop={20} offsetBottom={20}>
                <Sidebar/>
            </StickyBox>
        </div>
        {/* /sidebar */}
        <div className="col-xl-9 col-md-8">
          <div className="page-title">
            <h3>Proposals</h3>
          </div>
          <nav className="user-tabs mb-4">
            <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
              <li className="nav-item">
                <Link className="nav-link" to="/manage-projects">
                  All Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pending-projects">
                  Pending Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ongoing-projects">
                  Ongoing Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/completed-projects">
                  Completed Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cancelled-projects">
                  Cancelled Projects
                </Link>
              </li>
            </ul>
          </nav>
          {/* project list */}
          <div className="my-projects-list">
            <div className="row">
              <div className="col-lg-10 flex-wrap">
                <div className="projects-card flex-fill">
                  <div className="card-body">
                    <div className="projects-details align-items-center">
                      <div className="project-info">
                        <span>Dreamguystech</span>
                        <h2>Website Designer Required For Directory Theme</h2>
                        <div className="customer-info">
                          <ul className="list-details">
                            <li>
                              <div className="slot">
                                <p>Price type</p>
                                <h5>Fixed</h5>
                              </div>
                            </li>
                            <li>
                              <div className="slot">
                                <p>Location</p>
                                <h5>
                                  <img
                                    src={Flags_en}
                                    height={13}
                                    alt="Lang"
                                  />{" "}
                                  UK
                                </h5>
                              </div>
                            </li>
                            <li>
                              <div className="slot">
                                <p>Expiry</p>
                                <h5>4 Days Left</h5>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="project-hire-info">
                        <div className="projects-amount proposals">
                          <h3>$500.00</h3>
                          <h5>in 12 Days</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 d-flex flex-wrap">
                <div className="projects-card flex-fill">
                  <div className="card-body p-2">
                    <div className="prj-proposal-count text-center">
                      <span>5</span>
                      <h3>Proposals</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /project list */}
          {/* Proposals list */}
          <div className="proposals-section mb-4">
            <h3 className="page-subtitle">Proposals By freelancer</h3>
            <div className="proposal-card">
              {/* Proposals */}
              <div className="project-proposals align-items-center">
                <div className="proposals-info">
                  <div className="proposer-info">
                    <div className="proposer-img">
                      <img
                        src={Avatar_1}
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="proposer-detail">
                      <h4>George Wells</h4>
                      <ul className="proposal-details">
                        <li> February 26, 2021</li>
                        <li>
                          <i className="fas fa-star text-primary" /> 4 Reviews
                        </li>
                        <li>
                          {" "}
                          <Link
                            to="/freelancer-profile"
                            className="font-semibold text-primary"
                          >
                            View Profile
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="proposer-bid-info">
                    <div className="proposer-bid">
                      <h3>$480.00</h3>
                      <h5>in 11 Days</h5>
                    </div>
                    <div className="proposer-confirm">
                      <a
                        data-bs-toggle="modal"
                        href="#hire"
                        className="projects-btn"
                      >
                        Hire Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="description-proposal">
                  <h5 className="desc-title">Description</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                    diam sit erat et eros. Et cursus tellus viverra adipiscing
                    suspendisse. Semper arcu est eget eleifend. Faucibus elit
                    massa sollicitudin elementum ut feugiat nunc ac. Turpis quam
                    sed in sed curabitur netus laoreet. In tortor neque sapien
                    praesent porttitor cursus sed cum
                    <span id="dots">...</span>
                    <span id="more">
                      Turpis quam sed in sed curabitur netus laoreet. In tortor
                      neque sapien praesent porttitor cursus
                    </span>
                    <span
                      id="myBtn"
                      className="text-primary font-bold readmore"
                    >
                      Readmore
                    </span>
                  </p>
                </div>
              </div>
              {/* Proposals */}
              {/* Proposals */}
              <div className="project-proposals align-items-center">
                <div className="proposals-info">
                  <div className="proposer-info">
                    <div className="proposer-img">
                      <img
                        src={Avatar_2}
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="proposer-detail">
                      <h4>Hannah Finn</h4>
                      <ul className="proposal-details">
                        <li> October 26, 2021</li>
                        <li>
                          <i className="fas fa-star text-primary" /> 4 Reviews
                        </li>
                        <li>
                          {" "}
                          <Link
                            to="/freelancer-profile"
                            className="font-semibold text-primary"
                          >
                            View Profile
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="proposer-bid-info">
                    <div className="proposer-bid">
                      <h3>$220.00</h3>
                      <h5>in 15 Days</h5>
                    </div>
                    <div className="proposer-confirm">
                      <a
                        data-bs-toggle="modal"
                        href="#hire"
                        className="projects-btn"
                      >
                        Hire Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="description-proposal">
                  <h5 className="desc-title">Description</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                    diam sit erat et eros. Et cursus tellus viverra adipiscing
                    suspendisse. Semper arcu est eget eleifend. Faucibus elit
                    massa sollicitudin elementum ut feugiat nunc ac. Turpis quam
                    sed in sed curabitur netus laoreet. In tortor neque sapien
                    praesent porttitor cursus sed cum
                    <span id="dots1">...</span>
                    <span
                      id="myBtn1"
                      className="text-primary font-bold readmore"
                    >
                      Readmore
                    </span>
                  </p>
                </div>
              </div>
              {/* Proposals */}
              {/* Proposals */}
              <div className="project-proposals align-items-center mb-0">
                <div className="proposals-info">
                  <div className="proposer-info">
                    <div className="proposer-img">
                      <img
                        src={Avatar_3}
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="proposer-detail">
                      <h4>Timothy Smith</h4>
                      <ul className="proposal-details">
                        <li> October 28, 2021</li>
                        <li>
                          <i className="fas fa-star text-primary" /> 4 Reviews
                        </li>
                        <li>
                          {" "}
                          <Link
                            to="/freelancer-profile"
                            className="font-semibold text-primary"
                          >
                            View Profile
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="proposer-bid-info">
                    <div className="proposer-bid">
                      <h3>$300.00</h3>
                      <h5>in 12 Days</h5>
                    </div>
                    <div className="proposer-confirm">
                      <a
                        data-bs-toggle="modal"
                        href="#hire"
                        className="projects-btn"
                      >
                        Hire Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="description-proposal">
                  <h5 className="desc-title">Description</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                    diam sit erat et eros. Et cursus tellus viverra adipiscing
                    suspendisse. Semper arcu est eget eleifend. Faucibus elit
                    massa sollicitudin elementum ut feugiat nunc ac. Turpis quam
                    sed in sed curabitur netus laoreet. In tortor neque sapien
                    praesent porttitor cursus sed cum
                    <span id="dots2">...</span>
                    <span
                      id="myBtn2"
                      className="text-primary font-bold readmore"
                    >
                      Readmore
                    </span>
                  </p>
                </div>
              </div>
              {/* Proposals */}
            </div>
          </div>
          {/* /Proposals list */}
          {/* pagination */}
          <div className="row">
            <div className="col-md-12">
              <ul className="paginations">
                <li>
                  <a href="#">
                    {" "}
                    <i className="fas fa-angle-left" /> Previous
                  </a>
                </li>
                <li>
                  <a href="#">1</a>
                </li>
                <li>
                  <a href="#" className="active">
                    2
                  </a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li>
                  <a href="#">4</a>
                </li>
                <li>
                  <a href="#">
                    Next <i className="fas fa-angle-right" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* /pagination */}
        </div>
      </div>
    </div>
  </div>
  {/* /Page Content */}
  {/* The Modal */}
  <div className="modal fade custom-modal" id="hire">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content bg-modal">
        <div className="modal-header">
          <button
            type="button"
            className="close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          <div className="text-center pt-0 mb-4">
            <img
              src={Logo_01}
              alt="logo"
              className="img-fluid mb-1"
            />
            <h5 className="modal-title">Discuss your project with David</h5>
          </div>
          <form >
            <div className="modal-info">
              <div className="row">
                <div className="col-12 col-md-12">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="First name & Lastname"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="name"
                      className="form-control"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      name="message"
                      rows={5}
                      placeholder="Message"
                      defaultValue={""}
                    />
                  </div>
                  <div className="form-group row">
                    <div className="col-12 col-md-4 pr-0">
                      <label className="file-upload">
                        Add Attachment <input type="file" />
                      </label>
                    </div>
                    <div className="col-12 col-md-8">
                      <p className="mb-1">
                        Allowed file types: zip, pdf, png, jpg
                      </p>
                      <p>Max file size: 50 MB</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="submit-section text-center">
              <button
                type="submit"
                className="btn btn-primary btn-block submit-btn"
              >
                Hire Now
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
export default Projectproposal;