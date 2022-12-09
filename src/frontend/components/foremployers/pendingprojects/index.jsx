import React , {useEffect} from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { Developer_01,Flags_en } from "../../imagepath";
import { Sidebar } from '../sidebar';
    
const Pendingprojects = (props) => {   
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
            <div className="page-title">
              <h3>Manage Projects</h3>
            </div>
            <nav className="user-tabs project-tabs">
              <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                <li className="nav-item">
                  <Link className="nav-link" to="/manage-projects">
                    All Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/pending-projects">
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
            {/* Warning */}
            <div className="row">
              <div className="col-12">
                <div className="warning-card">
                  <p>
                    <i className="fas fa-exclamation-triangle" /> Pending for
                    admin Approval.
                  </p>
                </div>
              </div>
            </div>
            {/* /Warning */}
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
                          <div className="content-divider" />
                          <div className="projects-amount">
                            <h3>$500.00</h3>
                            <h5>in 12 Days</h5>
                          </div>
                          <div className="content-divider" />
                          <div className="projects-action text-center">
                            <Link
                              to="/project-proposals"
                              className="projects-btn"
                            >
                              View Proposals{" "}
                            </Link>
                            <Link to="/edit-project" className="projects-btn">
                              Edit Project
                            </Link>
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
                        <span>0</span>
                        <h3 className="mb-0">Proposals</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* project list */}
            {/* project list */}
            <div className="my-projects-list">
              <div className="row">
                <div className="col-lg-10 flex-wrap">
                  <div className="projects-card flex-fill">
                    <div className="card-body">
                      <div className="projects-details align-items-center">
                        <div className="project-info">
                          <span>Dreamguystech</span>
                          <h2>
                            Landing Page Redesign / Sales Page Redesign (Not
                            Entire Web)
                          </h2>
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
                          <div className="content-divider" />
                          <div className="projects-amount">
                            <h3>$500.00</h3>
                            <h5>in 12 Days</h5>
                          </div>
                          <div className="content-divider" />
                          <div className="projects-action text-center">
                            <Link
                              to="/project-proposals"
                              className="projects-btn"
                            >
                              View Proposals{" "}
                            </Link>
                            <Link to="/edit-project" className="projects-btn">
                              Edit Project
                            </Link>
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
                        <span>0</span>
                        <h3 className="mb-0">Proposals</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* project list */}
            {/* project list */}
            <div className="my-projects-list">
              <div className="row">
                <div className="col-lg-10 flex-wrap">
                  <div className="projects-card flex-fill">
                    <div className="card-body">
                      <div className="projects-details align-items-center">
                        <div className="project-info">
                          <span>Dreamguystech</span>
                          <h2>WooCommerce Product Page Back Up Restoration</h2>
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
                          <div className="content-divider" />
                          <div className="projects-amount">
                            <h3>$500.00</h3>
                            <h5>in 12 Days</h5>
                          </div>
                          <div className="content-divider" />
                          <div className="projects-action text-center">
                            <Link
                              to="/project-proposals"
                              className="projects-btn"
                            >
                              View Proposals{" "}
                            </Link>
                            <Link to="/edit-project" className="projects-btn">
                              Edit Project
                            </Link>
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
                        <span>0</span>
                        <h3 className="mb-0">Proposals</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* project list */}
            {/* project list */}
            <div className="my-projects-list">
              <div className="row">
                <div className="col-lg-10 flex-wrap">
                  <div className="projects-card flex-fill">
                    <div className="card-body">
                      <div className="projects-details align-items-center">
                        <div className="project-info">
                          <span>Dreamguystech</span>
                          <h2>
                            PHP Laravel Developer Required (Contractual
                            Employement)
                          </h2>
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
                          <div className="content-divider" />
                          <div className="projects-amount">
                            <h3>$500.00</h3>
                            <h5>in 12 Days</h5>
                          </div>
                          <div className="content-divider" />
                          <div className="projects-action text-center">
                            <Link
                              to="/project-proposals"
                              className="projects-btn"
                            >
                              View Proposals{" "}
                            </Link>
                            <Link to="/edit-project" className="projects-btn">
                              Edit Project
                            </Link>
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
                        <span>0</span>
                        <h3 className="mb-0">Proposals</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* project list */}
            {/* project list */}
            <div className="my-projects-list">
              <div className="row">
                <div className="col-lg-10 flex-wrap">
                  <div className="projects-card flex-fill">
                    <div className="card-body">
                      <div className="projects-details align-items-center">
                        <div className="project-info">
                          <span>Dreamguystech</span>
                          <h2>
                            Laravel Backend Developer to finish ongoing project
                          </h2>
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
                          <div className="content-divider" />
                          <div className="projects-amount">
                            <h3>$500.00</h3>
                            <h5>in 12 Days</h5>
                          </div>
                          <div className="content-divider" />
                          <div className="projects-action text-center">
                            <Link
                              to="/project-proposals"
                              className="projects-btn"
                            >
                              View Proposals{" "}
                            </Link>
                            <Link to="/edit-project" className="projects-btn">
                              Edit Project
                            </Link>
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
                        <span>0</span>
                        <h3 className="mb-0">Proposals</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* project list */}
            {/* pagination */}
            <div className="row">
              <div className="col-md-12">
                <ul className="paginations list-pagination">
                  <li>
                    <a href="#">
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
  </>
      )
  
}
export default Pendingprojects;