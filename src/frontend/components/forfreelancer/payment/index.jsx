import React , {useEffect} from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { company_img1,company_img2,company_img3  } from "../../imagepath";
import { Sidebar } from '../sidebar';
    
const FreelancerPayment = (props) => {  
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
                    <Link className="nav-link" to="/freelancer-task">
                      Tasks
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/freelancer-files">
                      Files
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/freelancer-payment">
                      Payments
                    </Link>
                  </li>
                </ul>
              </nav>
              {/* project list */}
              <div className="my-projects-view">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="card">
                      <div className="project-table">
                        <div className="card-body">
                          <h4>PAYMENTS PAID FOR THIS PROJECT</h4>
                          <div className="table-responsive table-box">
                            <table className="table table-center table-hover datatable">
                              <thead className="thead-pink">
                                <tr>
                                  <th>Client </th>
                                  <th>Name </th>
                                  <th>Type of Payment</th>
                                  <th>Payment</th>
                                  <th>Status</th>
                                  <th>Date Paid</th>
                                  <th>Invoice</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <div className="d-flex align-items-center">
                                      <span>
                                        <img
                                          src={company_img1}
                                          className="img-fluid avatar-md rounded-circle me-2"
                                          alt="Logo"
                                        />
                                      </span>{" "}
                                      <span>Amaze Tech</span>
                                    </div>
                                  </td>
                                  <td>Research</td>
                                  <td>
                                    <span className="badge badge-pill bg-outline-red">
                                      Milestone
                                    </span>
                                  </td>
                                  <td>$54</td>
                                  <td>
                                    <span className="badge badge-pill bg-outline-green">
                                      Completed
                                    </span>
                                  </td>
                                  <td> 20th October 2018</td>
                                  <td>
                                    <a href="#" className="file-circle">
                                      <i className="far fa-copy" />
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="d-flex align-items-center">
                                      <span>
                                        <img
                                          src={company_img2}
                                          className="img-fluid avatar-md rounded-circle me-2"
                                          alt="Logo"
                                        />
                                      </span>{" "}
                                      <span>Park Inc</span>
                                    </div>
                                  </td>
                                  <td>Design</td>
                                  <td>
                                    <span className="badge badge-pill bg-outline-red">
                                      Milestone
                                    </span>
                                  </td>
                                  <td>$52</td>
                                  <td>
                                    <span className="badge badge-pill bg-outline-green">
                                      Completed
                                    </span>
                                  </td>
                                  <td> 25th October 2018</td>
                                  <td>
                                    <a href="#" className="file-circle">
                                      <i className="far fa-copy" />
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="d-flex align-items-center">
                                      <span>
                                        <img
                                          src={company_img3}
                                          className="img-fluid avatar-md rounded-circle me-2"
                                          alt="Logo"
                                        />
                                      </span>{" "}
                                      <span>Tech Zone</span>
                                    </div>
                                  </td>
                                  <td>Development</td>
                                  <td>
                                    <span className="badge badge-pill bg-outline-red">
                                      Milestone
                                    </span>
                                  </td>
                                  <td>$40</td>
                                  <td>
                                    <span className="badge badge-pill bg-outline-green">
                                      Completed
                                    </span>
                                  </td>
                                  <td> 28th October 2018</td>
                                  <td>
                                    <a href="#" className="file-circle">
                                      <i className="far fa-copy" />
                                    </a>
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
export default FreelancerPayment;