import React , {useEffect} from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { FileLogo } from "../../imagepath";
import { Sidebar } from '../sidebar';
    
const File = (props) => {  
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
                  <Link className="nav-link active" to="/files">
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
                          <h5 className="card-title">Files</h5>
                        </div>
                        <div className="col-auto">
                          <a
                            data-bs-toggle="modal"
                            href="#file"
                            className="btn btn-primary btn-rounded"
                          >
                            <i className="fas fa-plus" /> Add files
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive table-box">
                        <table className="table table-center table-hover datatable">
                          <thead className="thead-pink">
                            <tr>
                              <th>File Preview</th>
                              <th>Title</th>
                              <th>Description</th>
                              <th>Type</th>
                              <th>Size</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <img
                                  src={FileLogo}
                                  className="img-fluid"
                                  alt="Logo"
                                />
                              </td>
                              <td> Image for Section background</td>
                              <td>
                                <p className="mb-0">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit
                                </p>
                                <a href="#" className="read-text">
                                  Readmore
                                </a>
                              </td>
                              <td>Png</td>
                              <td>20KB</td>
                              <td>
                                <div className="action">
                                  <a
                                    href=""
                                    className="file-circle me-2"
                                  >
                                    <i className="fas fa-cloud-download-alt" />
                                  </a>
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
                              <td>
                                <img
                                  src={FileLogo}
                                  className="img-fluid"
                                  alt="Logo"
                                />
                              </td>
                              <td> Image for Footer </td>
                              <td>
                                <p className="mb-0">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit
                                </p>
                                <a href="#" className="read-text">
                                  Readmore
                                </a>
                              </td>
                              <td>Png</td>
                              <td>22KB</td>
                              <td>
                                <div className="action">
                                  <a
                                    href=""
                                    className="file-circle me-2"
                                  >
                                    <i className="fas fa-cloud-download-alt" />
                                  </a>
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
                              <td>
                                <img
                                  src={FileLogo}
                                  className="img-fluid"
                                  alt="Logo"
                                />
                              </td>
                              <td> Image for Login</td>
                              <td>
                                <p className="mb-0">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit
                                </p>
                                <a href="#" className="read-text">
                                  Readmore
                                </a>
                              </td>
                              <td>Png</td>
                              <td>12KB</td>
                              <td>
                                <div className="action">
                                  <a
                                    href=""
                                    className="file-circle me-2"
                                  >
                                    <i className="fas fa-cloud-download-alt" />
                                  </a>
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
          <h4 className="mb-0">Add Files</h4>
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
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label>Link</label>
                    <input type="text" className="form-control" />
                  </div>
                  <label className="br-0 file-upload image-upbtn">
                    upload Files <input type="file" />
                  </label>
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
  {/* Edit Modal */}
  <div className="modal fade" id="edit-file">
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="mb-0">Edit Files</h4>
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
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Title</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="Image for Section background"
                    />
                  </div>
                  <div className="form-group">
                    <label>Link</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                    />
                  </div>
                  <div className="d-flex align-items-center">
                    <img
                      src={FileLogo}
                      className="img-fluid me-2"
                      alt="Logo"
                    />
                    <label className="br-0 file-upload image-upbtn">
                      upload Files <input type="file" />
                    </label>
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
  {/* /Edit Modal */}
  </>
      )
  
}
export default File;