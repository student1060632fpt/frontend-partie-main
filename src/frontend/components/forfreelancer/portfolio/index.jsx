import React , {useEffect} from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { Sidebar } from '../sidebar';
import { Project_1,Project_2,Project_3,Project_4,Project_5,Project_6 } from "../../imagepath";
    
const FreelancerPortfolio = (props) => {    
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
          <div className="portfolio-item">
            <div className="pro-head p-0 pb-4">
              <h3 className="mb-0">Portfolio</h3>
              <a
                className="btn btn-primary back-btn br-0"
                data-bs-toggle="modal"
                href="#portfolio"
              >
                + Add Portfolio
              </a>
            </div>
            <div className="pro-content pt-4 pb-4">
              <div className="row">
                <div className="col-sm-6 col-lg-4">
                  <div className="project-widget">
                    <div className="portfolio-img">
                      <img
                        className="img-fluid"
                        alt="User Image"
                        src={Project_1}
                      />
                      <div className="portfolio-live">
                        <div className="portfolio-content">
                          <a
                            data-bs-toggle="modal"
                            href="#portfolio-edit"
                            className="port-icon"
                          >
                            <i className="fas fa-pen" />
                          </a>
                          <a href="#" className="port-icon">
                            <i className="fas fa-trash-alt" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-detail">
                      <h3 className="pro-name">Razor Website Design</h3>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="project-widget">
                    <div className="portfolio-img">
                      <img
                        className="img-fluid"
                        alt="User Image"
                        src={Project_2}
                      />
                      <div className="portfolio-live">
                        <div className="portfolio-content">
                          <a
                            data-bs-toggle="modal"
                            href="#portfolio-edit"
                            className="port-icon"
                          >
                            <i className="fas fa-pen" />
                          </a>
                          <a href="#" className="port-icon">
                            <i className="fas fa-trash-alt" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-detail">
                      <h3 className="pro-name">Transport Website</h3>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="project-widget">
                    <div className="portfolio-img">
                      <img
                        className="img-fluid"
                        alt="User Image"
                        src={Project_3}
                      />
                      <div className="portfolio-live">
                        <div className="portfolio-content">
                          <a
                            data-bs-toggle="modal"
                            href="#portfolio-edit"
                            className="port-icon"
                          >
                            <i className="fas fa-pen" />
                          </a>
                          <a href="#" className="port-icon">
                            <i className="fas fa-trash-alt" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-detail">
                      <h3 className="pro-name">Wordpress Website</h3>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="project-widget">
                    <div className="portfolio-img">
                      <img
                        className="img-fluid"
                        alt="User Image"
                        src={Project_4}
                      />
                      <div className="portfolio-live">
                        <div className="portfolio-content">
                          <a
                            data-bs-toggle="modal"
                            href="#portfolio-edit"
                            className="port-icon"
                          >
                            <i className="fas fa-pen" />
                          </a>
                          <a href="#" className="port-icon">
                            <i className="fas fa-trash-alt" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-detail">
                      <h3 className="pro-name">Mobile App</h3>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="project-widget">
                    <div className="portfolio-img">
                      <img
                        className="img-fluid"
                        alt="User Image"
                        src={Project_5}
                      />
                      <div className="portfolio-live">
                        <div className="portfolio-content">
                          <a
                            data-bs-toggle="modal"
                            href="#portfolio-edit"
                            className="port-icon"
                          >
                            <i className="fas fa-pen" />
                          </a>
                          <a href="#" className="port-icon">
                            <i className="fas fa-trash-alt" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-detail">
                      <h3 className="pro-name">Healthcare Website</h3>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="project-widget">
                    <div className="portfolio-img">
                      <img
                        className="img-fluid"
                        alt="User Image"
                        src={Project_6}
                      />
                      <div className="portfolio-live">
                        <div className="portfolio-content">
                          <a
                            data-bs-toggle="modal"
                            href="#portfolio-edit"
                            className="port-icon"
                          >
                            <i className="fas fa-pen" />
                          </a>
                          <a href="#" className="port-icon">
                            <i className="fas fa-trash-alt" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-detail">
                      <h3 className="pro-name">Injury Website</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
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
  {/* /Page Content */}
  {/* The Modal */}
  <div className="modal fade" id="portfolio">
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h4>Add Portfolio</h4>
          <span className="modal-close">
            <a href="#" data-bs-dismiss="modal" aria-label="Close">
              <i className="far fa-times-circle orange-text" />
            </a>
          </span>
        </div>
        <div className="modal-body">
          <div className="port-title">
            <h3>Simple &amp; Best Way To Showcase Your Work</h3>
          </div>
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
            <div className="submit-section text-right">
              <a
                data-bs-dismiss="modal"
                className="btn btn-primary black-btn submit-btn"
              >
                Cancel
              </a>
              <button type="submit" className="btn btn-primary submit-btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* The Modal */}
  <div className="modal fade" id="portfolio-edit">
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Add Portfolio</h4>
          <span className="modal-close">
            <a href="#" data-bs-dismiss="modal" aria-label="Close">
              <i className="far fa-times-circle orange-text" />
            </a>
          </span>
        </div>
        <div className="modal-body">
          <div className="port-title">
            <h3>Simple &amp; Best Way To Showcase Your Work</h3>
          </div>
          <form >
            <div className="modal-info">
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Title</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="Portfolio Name"
                    />
                  </div>
                  <div className="form-group">
                    <label>Link</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="Http://www.example.com//john..."
                    />
                  </div>
                  <label className="br-0 file-upload image-upbtn">
                    upload Files <input type="file" />
                  </label>
                </div>
              </div>
            </div>
            <div className="submit-section text-right">
              <a
                data-bs-dismiss="modal"
                className="btn btn-primary black-btn submit-btn"
              >
                Cancel
              </a>
              <Link
                to="/freelancer-portfolio"
                className="btn btn-primary submit-btn"
              >
                Submit
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</>
      )
  
}
export default FreelancerPortfolio;