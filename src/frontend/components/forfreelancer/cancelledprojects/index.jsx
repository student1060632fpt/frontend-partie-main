import React , {useEffect} from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { Developer_02,Developer_01,Developer_03 } from "../../imagepath";
import { Sidebar } from '../sidebar';
    
const FreelacerCancelledProjects = (props) => {  
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
              <h3>Manage Projects</h3>
            </div>
            <nav className="user-tabs mb-4">
              <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                <li className="nav-item">
                  <Link
                    className="nav-link"
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
                    className="nav-link active"
                    to="/freelancer-cancelled-projects"
                  >
                    Cancelled Projects
                  </Link>
                </li>
              </ul>
            </nav>
            {/* project list */}
            <div className="my-projects-list">
              <div className="row">
                <div className="col-lg-12 flex-wrap">
                  <div className="projects-cancelled-card flex-fill">
                    <div className="card-body">
                      <div className="projects-details align-items-center">
                        <div className="project-info project">
                          <span>Dreamguystech</span>
                          <h2>Website Designer Required For Directory Theme</h2>
                          <div className="proposal-client">
                            <h4 className="title-info">Client Price</h4>
                            <div className="d-flex">
                              <h3 className="client-price me-2">$599.00</h3>
                              <p className="amnt-type">( FIXED )</p>
                            </div>
                          </div>
                        </div>
                        <div className="project-hire-info project">
                          <div className="content-divider" />
                          <div className="proposer-info project">
                            <div className="proposer-img">
                              <img
                                src={Developer_01}
                                alt=""
                                className="img-fluid"
                              />
                            </div>
                            <div className="proposer-detail">
                              <h4>Hannah Finn</h4>
                              <ul className="proposal-details">
                                <li> October 15, 2021</li>
                                <li>
                                  <i className="fas fa-star text-primary" /> 4
                                  Reviews
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="content-divider" />
                          <div className="projects-action text-center project">
                            <a href="#" className="projects-btn">
                              Remove Project
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /project list */}
            {/* project list */}
            <div className="my-projects-list">
              <div className="row">
                <div className="col-lg-12 flex-wrap">
                  <div className="projects-cancelled-card flex-fill">
                    <div className="card-body">
                      <div className="projects-details align-items-center">
                        <div className="project-info project">
                          <span>Dreamguystech</span>
                          <h2>
                            PHP Laravel Developer Required (Contractual
                            Employement)
                          </h2>
                          <div className="proposal-client">
                            <h4 className="title-info">Client Price</h4>
                            <div className="d-flex">
                              <h3 className="client-price me-2">$350.00</h3>
                              <p className="amnt-type">( FIXED )</p>
                            </div>
                          </div>
                        </div>
                        <div className="project-hire-info project">
                          <div className="content-divider" />
                          <div className="proposer-info project">
                            <div className="proposer-img">
                              <img
                                src={Developer_02}
                                alt=""
                                className="img-fluid"
                              />
                            </div>
                            <div className="proposer-detail">
                              <h4>James Douglas</h4>
                              <ul className="proposal-details">
                                <li> October 20, 2021</li>
                                <li>
                                  <i className="fas fa-star text-primary" /> 4
                                  Reviews
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="content-divider" />
                          <div className="projects-action text-center project">
                            <a href="#" className="projects-btn">
                              Remove Project
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /project list */}
            {/* project list */}
            <div className="my-projects-list">
              <div className="row">
                <div className="col-lg-12 flex-wrap">
                  <div className="projects-cancelled-card flex-fill">
                    <div className="card-body">
                      <div className="projects-details align-items-center">
                        <div className="project-info project">
                          <span>Dreamguystech</span>
                          <h2>
                            Laravel Backend Developer to finish ongoing project
                          </h2>
                          <div className="proposal-client">
                            <h4 className="title-info">Client Price</h4>
                            <div className="d-flex">
                              <h3 className="client-price me-2">$500.00</h3>
                              <p className="amnt-type">( FIXED )</p>
                            </div>
                          </div>
                        </div>
                        <div className="project-hire-info project">
                          <div className="content-divider" />
                          <div className="proposer-info project">
                            <div className="proposer-img">
                              <img
                                src={Developer_03}
                                alt=""
                                className="img-fluid"
                              />
                            </div>
                            <div className="proposer-detail">
                              <h4>Tony Ingle</h4>
                              <ul className="proposal-details">
                                <li> October 26, 2021</li>
                                <li>
                                  <i className="fas fa-star text-primary" /> 4
                                  Reviews
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="content-divider" />
                          <div className="projects-action text-center project">
                            <a href="#" className="projects-btn">
                              Remove Project
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /project list */}
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
  </>
      )
  
}
export default FreelacerCancelledProjects;