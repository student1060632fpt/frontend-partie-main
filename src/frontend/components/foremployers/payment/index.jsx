import React , {useEffect} from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { company_img1,company_img2,company_img3,company_img4,company_img5  } from "../../imagepath";
import { Sidebar } from '../sidebar';
    
const Payment = (props) => {  
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
          <nav className="user-tabs mb-4">
            <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
            <li className="nav-item">
                  <Link className="nav-link" to="/view-project-detail">
                    Overview &amp; Discussions
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/milestones">
                    Milestones
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/tasks">
                    Tasks
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/files">
                    Files
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/project-payment">
                    Payments
                  </Link>
                </li>
            </ul>
          </nav>
          {/* project list */}
          <div className="my-projects-view">
            <div className="row">
              <div className="col-lg-12">
                <div className="">
                  <div className="card">
                    <div className="card-header">
                      <h5 className="card-title">Payments</h5>
                    </div>
                    <div className="card-body">
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
                            <tr>
                              <td>
                                <div className="d-flex align-items-center">
                                  <span>
                                    <img
                                      src={company_img4}
                                      className="img-fluid avatar-md rounded-circle me-2"
                                      alt="Logo"
                                    />
                                  </span>{" "}
                                  <span>Abc Software</span>
                                </div>
                              </td>
                              <td>Research</td>
                              <td>
                                <span className="badge badge-pill bg-outline-red">
                                  Milestone
                                </span>
                              </td>
                              <td>$25</td>
                              <td>
                                <span className="badge badge-pill bg-outline-green">
                                  Completed
                                </span>
                              </td>
                              <td> 29th October 2018</td>
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
                                      src={company_img5}
                                      className="img-fluid avatar-md rounded-circle me-2"
                                      alt="Logo"
                                    />
                                  </span>{" "}
                                  <span>Host Technologies</span>
                                </div>
                              </td>
                              <td>Development</td>
                              <td>
                                <span className="badge badge-pill bg-outline-red">
                                  Milestone
                                </span>
                              </td>
                              <td>$32</td>
                              <td>
                                <span className="badge badge-pill bg-outline-green">
                                  Completed
                                </span>
                              </td>
                              <td> 24th October 2018</td>
                              <td>
                                <a href="#" className="file-circle">
                                  <i className="far fa-copy" />
                                </a>
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
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Page Content */}
    </>
      )
  
}
export default Payment;