import React , {useEffect} from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { Sidebar } from '../sidebar';
    
const Milestone = (props) => {  
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
                  <Link className="nav-link active" to="/milestones">
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
                  <Link className="nav-link" to="/project-payment">
                    Payments
                  </Link>
                </li>
                </ul>
              </nav>
              <div className="my-projects-view">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="">
                      <div className="card ">
                        <div className="card-header">
                          <div className="row justify-content-between align-items-center">
                            <div className="col">
                              <h5 className="card-title">Milestone</h5>
                            </div>
                            <div className="col-auto">
                              <a
                                data-bs-toggle="modal"
                                href="#file"
                                className="btn btn-primary btn-rounded"
                              >
                                <i className="fas fa-plus" /> Add Milestone
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="table-responsive table-box">
                            <table className="table table-center table-hover datatable">
                              <thead className="thead-pink">
                                <tr>
                                  <th>Name</th>
                                  <th>Budget</th>
                                  <th>Progress</th>
                                  <th>Start Date</th>
                                  <th>End Date</th>
                                  <th>Paid</th>
                                  <th>Action</th>
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
                                  <td>20th October 2021</td>
                                  <td>31th October 2021</td>
                                  <td>
                                    <span className="badge badge-pill bg-success-dark">
                                      Paid
                                    </span>
                                  </td>
                                  <td>
                                    <a href="">
                                      <span className="badge badge-pill bg-grey-light">
                                        Pay now
                                      </span>
                                    </a>
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
                                  <td>02th October 2021</td>
                                  <td>31th October 2021</td>
                                  <td>
                                    <span className="badge badge-pill bg-success-dark">
                                      Paid
                                    </span>
                                  </td>
                                  <td>
                                    <a href="">
                                      <span className="badge badge-pill bg-pink-dark">
                                        Pay now
                                      </span>
                                    </a>
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
                                  <td>05th October 2021</td>
                                  <td>12th October 2021</td>
                                  <td>
                                    <span className="badge badge-pill bg-grey-dark">
                                      UnPaid
                                    </span>
                                  </td>
                                  <td>
                                    <a href="">
                                      <span className="badge badge-pill bg-pink-dark">
                                        Pay now
                                      </span>
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Development</td>
                                  <td>$50</td>
                                  <td>
                                    <p className="mb-0 orange-text text-center">
                                      60%
                                    </p>
                                    <div className="progress progress-md mb-0">
                                      <div
                                        className="progress-bar bg-danger"
                                        role="progressbar"
                                        style={{ width: "60%" }}
                                        aria-valuenow={25}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                      />
                                    </div>
                                  </td>
                                  <td>15th October 2021</td>
                                  <td>18th October 2021</td>
                                  <td>
                                    <span className="badge badge-pill bg-grey-dark">
                                      UnPaid
                                    </span>
                                  </td>
                                  <td>
                                    <a href="">
                                      <span className="badge badge-pill bg-pink-dark">
                                        Pay now
                                      </span>
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
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
      {/* The Modal */}
      <div className="modal fade" id="file">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Add Files</h4>
              <span className="modal-close">
                <a href="#" data-bs-dismiss="modal" aria-label="Close">
                  <i className="far fa-times-circle orange-text" />
                </a>
              </span>
            </div>
            <div className="modal-body">
              <form >
                <div className="modal-info">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Milestone Name</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Budget</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Start Date</label>
                        <input
                          type="text"
                          className="form-control datetimepicker"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>End Date</label>
                        <input
                          type="text"
                          className="form-control datetimepicker"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Progress</label>
                        <div className="slidecontainer">
                          <input
                            type="range"
                            min={1}
                            max={100}
                            defaultValue={50}
                            className="rangslider"
                            id="myRange"
                          />
                          <p className="text-muted">
                            Progress <span id="demo" /> %
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Description</label>
                        <textarea
                          className="form-control"
                          rows={5}
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="submit-section text-end">
                  <button type="submit" className="btn btn-primary submit-btn">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
      )
  
}
export default Milestone;