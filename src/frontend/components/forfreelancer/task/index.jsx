import React , {useEffect} from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { Img_04,Flags_en  } from "../../imagepath";
import { Sidebar } from '../sidebar';
    
const Freelancertask = (props) => {  
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
            <div className="col-xl-9 col-md-8 mb-5">
              <div className="page-title">
                <h3>Manage Projects</h3>
              </div>
              <nav className="user-tabs mb-4">
                <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="/freelancer-view-project-detail"
                      >
                        Overview &amp; Discussions
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="/freelancer-milestones"
                      >
                        Milestones
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link active" to="/freelancer-task">
                        Tasks
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/freelancer-files">
                        Files
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/freelancer-payment">
                        Payments
                      </Link>
                    </li>
                </ul>
              </nav>
              {/* project list */}
              <div className="my-projects-view">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="pro-post">
                      <div className="project-table">
                        <div className="card-body">
                          <h4>TASKS</h4>
                          <div className="table-responsive table-box">
                            <table className="table table-center table-hover datatable">
                              <thead className="thead-pink">
                                <tr>
                                  <th>Task Name</th>
                                  <th>Milestone</th>
                                  <th>Due Date</th>
                                  <th>Description</th>
                                  <th>Status</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Research 101</td>
                                  <td>Research</td>
                                  <td>20th Oct 2021</td>
                                  <td>
                                    <p className="mb-0">
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit
                                    </p>
                                    <a href="#" className="read-text">
                                      Readmore
                                    </a>
                                  </td>
                                  <td>
                                    <span className="badge badge-pill bg-outline-green">
                                      Completed
                                    </span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Research 102</td>
                                  <td>Research</td>
                                  <td>25th Oct 2021</td>
                                  <td>
                                    <p className="mb-0">
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit
                                    </p>
                                    <a href="#" className="read-text">
                                      Readmore
                                    </a>
                                  </td>
                                  <td>
                                    <span className="badge badge-pill bg-outline-red">
                                      Pending
                                    </span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Research 103</td>
                                  <td>Research</td>
                                  <td>27th Oct 2021</td>
                                  <td>
                                    <p className="mb-0">
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit
                                    </p>
                                    <a href="#" className="read-text">
                                      Readmore
                                    </a>
                                  </td>
                                  <td>
                                    <span className="badge badge-pill bg-outline-red">
                                      Pending
                                    </span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Research 104</td>
                                  <td>Research</td>
                                  <td>27th Oct 2021</td>
                                  <td>
                                    <p className="mb-0">
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit
                                    </p>
                                    <a href="#" className="read-text">
                                      Readmore
                                    </a>
                                  </td>
                                  <td>
                                    <span className="badge badge-pill bg-outline-red">
                                      Pending
                                    </span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="text-end mt-3">
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
    </>
      )
  
}
export default Freelancertask;