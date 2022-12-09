import React , {useEffect} from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { Sidebar } from '../sidebar';
    
const FreelancerMilestone = (props) => {  
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
                        className="nav-link active"
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
                      <div className="card">
                        <div className="project-table">
                          <div className="card-body">
                            <h4>MILESTONES</h4>
                            <div className="table-responsive table-box">
                              <table className="table table-center table-hover datatable">
                                <thead className="thead-pink">
                                  <tr>
                                    <th>Name</th>
                                    <th>Budget</th>
                                    <th>Progress</th>
                                    <th>Date to start</th>
                                    <th>Date to end</th>
                                    <th>Status</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>Research</td>
                                    <td>$60</td>
                                    <td>
                                      <p className="mb-0 orange-text text-center">
                                        25%
                                      </p>
                                      <div className="progress progress-md mb-0">
                                        <div
                                          className="progress-bar bg-danger"
                                          role="progressbar"
                                          style={{ width: "25%" }}
                                          aria-valuenow={25}
                                          aria-valuemin={0}
                                          aria-valuemax={100}
                                        />
                                      </div>
                                    </td>
                                    <td>20th Oct 2021</td>
                                    <td>29th Oct 2021</td>
                                    <td>
                                      <span className="badge badge-pill bg-success-dark">
                                        Paid
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Design</td>
                                    <td>$60</td>
                                    <td>
                                      <p className="mb-0 orange-text text-center">
                                        50%
                                      </p>
                                      <div className="progress progress-md mb-0">
                                        <div
                                          className="progress-bar bg-danger"
                                          role="progressbar"
                                          style={{ width: "50%" }}
                                          aria-valuenow={25}
                                          aria-valuemin={0}
                                          aria-valuemax={100}
                                        />
                                      </div>
                                    </td>
                                    <td>21st Oct 2021</td>
                                    <td>25th Oct 2021</td>
                                    <td>
                                      <span className="badge badge-pill bg-success-dark">
                                        Paid
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Research</td>
                                    <td>$60</td>
                                    <td>
                                      <p className="mb-0 orange-text text-center">
                                        75%
                                      </p>
                                      <div className="progress progress-md mb-0">
                                        <div
                                          className="progress-bar bg-danger"
                                          role="progressbar"
                                          style={{ width: "75%" }}
                                          aria-valuenow={25}
                                          aria-valuemin={0}
                                          aria-valuemax={100}
                                        />
                                      </div>
                                    </td>
                                    <td>19th Oct 2021</td>
                                    <td>29th Oct 2021</td>
                                    <td>
                                      <span className="badge badge-pill bg-grey-dark">
                                        UnPaid
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Design</td>
                                    <td>$55</td>
                                    <td>
                                      <p className="mb-0 orange-text text-center">
                                        50%
                                      </p>
                                      <div className="progress progress-md mb-0">
                                        <div
                                          className="progress-bar bg-danger"
                                          role="progressbar"
                                          style={{ width: "50%" }}
                                          aria-valuenow={25}
                                          aria-valuemin={0}
                                          aria-valuemax={100}
                                        />
                                      </div>
                                    </td>
                                    <td>21st Oct 2021</td>
                                    <td>25th Oct 2021</td>
                                    <td>
                                      <span className="badge badge-pill bg-success-dark">
                                        Paid
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Testing</td>
                                    <td>$52</td>
                                    <td>
                                      <p className="mb-0 orange-text text-center">
                                        35%
                                      </p>
                                      <div className="progress progress-md mb-0">
                                        <div
                                          className="progress-bar bg-danger"
                                          role="progressbar"
                                          style={{ width: "35%" }}
                                          aria-valuenow={35}
                                          aria-valuemin={0}
                                          aria-valuemax={100}
                                        />
                                      </div>
                                    </td>
                                    <td>20th Oct 2021</td>
                                    <td>29th Oct 2021</td>
                                    <td>
                                      <span className="badge badge-pill bg-grey-dark">
                                        UnPaid
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Development</td>
                                    <td>$26</td>
                                    <td>
                                      <p className="mb-0 orange-text text-center">
                                        42%
                                      </p>
                                      <div className="progress progress-md mb-0">
                                        <div
                                          className="progress-bar bg-danger"
                                          role="progressbar"
                                          style={{ width: "42%" }}
                                          aria-valuenow={42}
                                          aria-valuemin={0}
                                          aria-valuemax={100}
                                        />
                                      </div>
                                    </td>
                                    <td>12th Oct 2021</td>
                                    <td>22th Oct 2021</td>
                                    <td>
                                      <span className="badge badge-pill bg-success-dark">
                                        Paid
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Design</td>
                                    <td>$55</td>
                                    <td>
                                      <p className="mb-0 orange-text text-center">
                                        50%
                                      </p>
                                      <div className="progress progress-md mb-0">
                                        <div
                                          className="progress-bar bg-danger"
                                          role="progressbar"
                                          style={{ width: "50%" }}
                                          aria-valuenow={50}
                                          aria-valuemin={0}
                                          aria-valuemax={100}
                                        />
                                      </div>
                                    </td>
                                    <td>15th Oct 2021</td>
                                    <td>18th Oct 2021</td>
                                    <td>
                                      <span className="badge badge-pill bg-grey-dark">
                                        UnPaid
                                      </span>
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
                {/* project list */}
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
      </>
      )
  
}
export default FreelancerMilestone;