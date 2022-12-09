import React , {useEffect} from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { Img_04,Flags_en  } from "../../imagepath";
import { Sidebar } from '../sidebar';
    
const Task = (props) => {  
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
                  <Link className="nav-link active" to="/tasks">
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
          {/* project list */}
          <div className="my-projects-view">
            <div className="row">
              <div className="col-lg-12">
                <div className="">
                  <div className="card">
                    <div className="card-header">
                      <div className="row justify-content-between align-items-center">
                        <div className="col">
                          <h5 className="card-title">Tasks</h5>
                        </div>
                        <div className="col-auto">
                          <a
                            data-bs-toggle="modal"
                            href="#file"
                            className="btn btn-primary btn-rounded"
                          >
                            <i className="fas fa-plus" /> Add tasks
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive table-box">
                        <table className="table table-center table-hover datatable">
                          <thead className="thead-pink">
                            <tr>
                              <th>Task Name</th>
                              <th>Milestone</th>
                              <th>Due Date</th>
                              <th>Description</th>
                              <th>Status</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Research</td>
                              <td>Research</td>
                              <td> 20th Oct 2021 </td>
                              <td>
                                <p className="mb-0">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit
                                </p>
                                <a href="#" className="read-text">
                                  Readmore
                                </a>
                              </td>
                              <td className="text-success">Completed</td>
                              <td>
                                <div className="action">
                                  <a
                                    data-bs-toggle="modal"
                                    href="#edit-file"
                                    className="file-circle me-2"
                                  >
                                    <i className="fas fa-pen" />
                                  </a>
                                  <a
                                    href=""
                                    className="file-circle"
                                  >
                                    <i className="fas fa-trash-alt" />
                                  </a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>Design</td>
                              <td>Design</td>
                              <td> 21th Nov 2021 </td>
                              <td>
                                <p className="mb-0">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit
                                </p>
                                <a href="#" className="read-text">
                                  Readmore
                                </a>
                              </td>
                              <td className="text-danger">Todo</td>
                              <td>
                                <div className="action">
                                  <a
                                    data-bs-toggle="modal"
                                    href="#edit-file"
                                    className="file-circle me-2"
                                  >
                                    <i className="fas fa-pen" />
                                  </a>
                                  <a
                                    href=""
                                    className="file-circle"
                                  >
                                    <i className="fas fa-trash-alt" />
                                  </a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>Development</td>
                              <td>Development</td>
                              <td> 23rd Nov 2021 </td>
                              <td>
                                <p className="mb-0">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit
                                </p>
                                <a href="#" className="read-text">
                                  Readmore
                                </a>
                              </td>
                              <td className="text-success">Completed</td>
                              <td>
                                <div className="action">
                                  <a
                                    data-bs-toggle="modal"
                                    href="#edit-file"
                                    className="file-circle me-2"
                                  >
                                    <i className="fas fa-pen" />
                                  </a>
                                  <a
                                    href=""
                                    className="file-circle"
                                  >
                                    <i className="fas fa-trash-alt" />
                                  </a>
                                </div>
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
          <form>
            <div className="modal-info">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Add Task</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Select Milestone</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Due Date</label>
                    <input type="text" className="form-control" />
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
                <div className="col-md-6">
                  <select className="form-control select">
                    <option>To do </option>
                    <option>Completed</option>
                  </select>
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
  {/* /The Modal */}
  {/* The Modal */}
  <div className="modal fade" id="edit-file">
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Edit Files</h4>
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
                    <label>Add Task</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="Research"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Select Milestone</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="Research"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Due Date</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="20th October 2021"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Description</label>
                    <textarea
                      className="form-control"
                      rows={5}
                      defaultValue={
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                      }
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <select className="form-control select">
                    <option>To do </option>
                    <option>Completed</option>
                  </select>
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
  {/* /The Modal */}
</>
      )
  
}
export default Task;