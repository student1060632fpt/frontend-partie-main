import React , {useEffect} from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { Developer_01 } from "../../imagepath";
import { Sidebar } from '../sidebar';
import ReactSummernote from 'react-summernote';
import 'react-summernote/dist/react-summernote.css'; // import styles
    
const Freelancer = (props) => {  
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
            <div className="page-title">
              <h3>Proposals</h3>
            </div>
            <nav className="user-tabs mb-4">
              <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    to="/freelancer-project-proposals"
                  >
                    My Proposals
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/freelancer-ongoing-projects">
                    Ongoing Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/freelancer-completed-projects"
                  >
                    Completed Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/freelancer-cancelled-projects"
                  >
                    Cancelled Projects
                  </Link>
                </li>
              </ul>
            </nav>
            {/* Proposals list */}
            <div className="proposals-section">
              <h3 className="page-subtitle">My Proposals</h3>
              {/* Proposals */}
              <div className="freelancer-proposals">
                <div className="project-proposals align-items-center freelancer">
                  <div className="proposals-info">
                    <div className="proposals-detail">
                      <h3 className="proposals-title">
                        3D Renders and Amazon Product Store images/Video
                      </h3>
                      <div className="proposals-content">
                        <div className="proposal-img">
                          <div className="text-md-center">
                            <img
                              src={Developer_01}
                              alt=""
                              className="img-fluid"
                            />
                            <h4>John Doe</h4>
                            <span className="info-btn">client</span>
                          </div>
                        </div>
                        <div className="proposal-client">
                          <h4 className="title-info">Client Price</h4>
                          <h2 className="client-price">$599.00</h2>
                          <span className="price-type">( FIXED )</span>
                        </div>
                        <div className="proposal-type">
                          <h4 className="title-info">Job Type</h4>
                          <h3>Hourly</h3>
                        </div>
                      </div>
                    </div>
                    <div className="project-hire-info">
                      <div className="content-divider-1" />
                      <div className="projects-amount">
                        <p>Your Price</p>
                        <h3>$500.00</h3>
                        <h5>in 12 Days</h5>
                      </div>
                      <div className="content-divider-1" />
                      <div className="projects-action text-center">
                        <a
                          data-bs-toggle="modal"
                          href="#file"
                          className="projects-btn"
                        >
                          Edit Proposals{" "}
                        </a>
                        <Link
                          to="/freelancer-view-project-detail"
                          className="projects-btn"
                        >
                          View Project
                        </Link>
                        <a href="#" className="proposal-delete">
                          Delete Proposal
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
                      praesent porttitor cursus sed cum....
                      <a href="#" className="text-primary font-bold">
                        Readmore
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              {/* Proposals */}
              {/* Proposals */}
              <div className="freelancer-proposals">
                <div className="project-proposals align-items-center freelancer">
                  <div className="proposals-info">
                    <div className="proposals-detail">
                      <h3 className="proposals-title">
                        Landing Page Redesign / Sales Page Redesign (Not Entire
                        Web)
                      </h3>
                      <div className="proposals-content">
                        <div className="proposal-img">
                          <div className="text-md-center">
                            <img
                              src={Developer_01}
                              alt=""
                              className="img-fluid"
                            />
                            <h4>John Doe</h4>
                            <span className="info-btn">client</span>
                          </div>
                        </div>
                        <div className="proposal-client">
                          <h4 className="title-info">Client Price</h4>
                          <h2 className="client-price">$320.00</h2>
                          <span className="price-type">( FIXED )</span>
                        </div>
                        <div className="proposal-type">
                          <h4 className="title-info">Job Type</h4>
                          <h3>Hourly</h3>
                        </div>
                      </div>
                    </div>
                    <div className="project-hire-info">
                      <div className="content-divider-1" />
                      <div className="projects-amount">
                        <p>Your Price</p>
                        <h3>$300.00</h3>
                        <h5>in 15 Days</h5>
                      </div>
                      <div className="content-divider-1" />
                      <div className="projects-action text-center">
                        <a
                          data-bs-toggle="modal"
                          href="#file"
                          className="projects-btn"
                        >
                          Edit Proposals{" "}
                        </a>
                        <Link
                          to="/freelancer-view-project-detail"
                          className="projects-btn"
                        >
                          View Project
                        </Link>
                        <a href="#" className="proposal-delete">
                          Delete Proposal
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
                      praesent porttitor cursus sed cum....
                      <a href="#" className="text-primary font-bold">
                        Readmore
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              {/* Proposals */}
              {/* Proposals */}
              <div className="freelancer-proposals">
                <div className="project-proposals align-items-center freelancer">
                  <div className="proposals-info">
                    <div className="proposals-detail">
                      <h3 className="proposals-title">
                        WooCommerce Product Page Back Up Restoration
                      </h3>
                      <div className="proposals-content">
                        <div className="proposal-img">
                          <div className="text-md-center">
                            <img
                              src={Developer_01}
                              alt=""
                              className="img-fluid"
                            />
                            <h4>John Doe</h4>
                            <span className="info-btn">client</span>
                          </div>
                        </div>
                        <div className="proposal-client">
                          <h4 className="title-info">Client Price</h4>
                          <h2 className="client-price">$500.00</h2>
                          <span className="price-type">( FIXED )</span>
                        </div>
                        <div className="proposal-type">
                          <h4 className="title-info">Job Type</h4>
                          <h3>Hourly</h3>
                        </div>
                      </div>
                    </div>
                    <div className="project-hire-info">
                      <div className="content-divider-1" />
                      <div className="projects-amount">
                        <p>Your Price</p>
                        <h3>$450.00</h3>
                        <h5>in 18 Days</h5>
                      </div>
                      <div className="content-divider-1" />
                      <div className="projects-action text-center">
                        <a
                          data-bs-toggle="modal"
                          href="#file"
                          className="projects-btn"
                        >
                          Edit Proposals{" "}
                        </a>
                        <Link
                          to="/freelancer-view-project-detail"
                          className="projects-btn"
                        >
                          View Project
                        </Link>
                        <a href="#" className="proposal-delete">
                          Delete Proposal
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
                      praesent porttitor cursus sed cum....
                      <a href="#" className="text-primary font-bold">
                        Readmore
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              {/* Proposals */}
            </div>
            {/* /Proposals list */}
            {/* pagination */}
            <div className="row">
              <div className="col-md-12">
                <ul className="paginations freelancer">
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
    <div className="modal fade" id="file">
      <div className="modal-dialog modal-dialog-centered modal-md">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">EDIT PROPOSAL</h4>
            <span className="modal-close">
              <a href="#" data-bs-dismiss="modal" aria-label="Close">
                <i className="far fa-times-circle" />
              </a>
            </span>
          </div>
          <div className="modal-body">
            <form action="#">
              <div className="modal-info">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Cost</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Days</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Description</label>
                      <ReactSummernote
                          value="Default value"
                          options={{
                            lang: 'ru-RU',
                            height: 350,
                            dialogsInBody: true,
                            toolbar: [
                              ['style', ['style']],
                              ['font', ['bold', 'underline', 'clear']],
                              ['fontname', ['fontname']],
                              ['para', ['ul', 'ol', 'paragraph']],
                              ['table', ['table']],
                              ['insert', ['link', 'picture', 'video']],
                              ['view', ['fullscreen', 'codeview']]
                            ]
                          }}
                        />
                    </div>
                  </div>
                </div>
              </div>
              <div className="submit-section text-end">
                <button type="submit" className="btn btn-primary submit-btn">
                  Save Proposal
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
export default Freelancer;