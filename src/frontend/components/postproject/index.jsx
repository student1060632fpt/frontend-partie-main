import React from "react";
import { Link } from "react-router-dom";
import ReactSummernote from 'react-summernote';
import 'react-summernote/dist/react-summernote.css'; 
    
const PostProject = (props) => {  
          
  return (
    <>
    {/* Breadcrumb */}
    <div className="breadcrumb-bar">
      <div className="container">
        <div className="row align-items-center inner-banner">
          <div className="col-md-12 col-12 text-center">
            <h2 className="breadcrumb-title">Post a Project</h2>
            <nav aria-label="breadcrumb" className="page-breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/index">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {" "}
                  Post a Project
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
    {/* /Breadcrumb */}
    {/* Page Content */}
    <div className="content">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="select-project mb-4">
              <form >
                <div className="title-box widget-box">
                  {/* Project Title */}
                  <div className="title-content">
                    <div className="title-detail">
                      <h3>Project Name</h3>
                      <div className="form-group mb-0">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Project title"
                        />
                      </div>
                    </div>
                  </div>
                  {/* /Project Title */}
                  {/* Category Content */}
                  <div className="title-content">
                    <div className="title-detail">
                      <h3>Category Type</h3>
                      <div className="form-group mb-0">
                        <select className="form-control select">
                          <option value={0}>Select</option>
                          <option value={1}>Apps Development</option>
                          <option value={2}>UI Development</option>
                          <option value={3}>Jaa</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  {/* /Category Content */}
                  {/* Price Content */}
                  <div className="title-content">
                    <div className="title-detail">
                      <h3>Pricing Type</h3>
                      <div className="form-group price-cont mb-0" id="price_type">
                        <select name="price" className="form-control select">
                          <option value={0}>Select</option>
                          <option value={1}>Fixed Budget Price</option>
                          <option value={2}>Hourly Pricing</option>
                          <option value={3}>Biding Price</option>
                        </select>
                      </div>
                      <div
                        className="form-group mt-3"
                        id="price_id"
                        style={{ display: "none" }}
                      >
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <button
                              type="button"
                              className="btn btn-white dropdown-toggle"
                              data-bs-toggle="dropdown"
                            >
                              $
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="#">
                                Dollars
                              </a>
                              <a className="dropdown-item" href="#">
                                Euro
                              </a>
                              <a className="dropdown-item" href="#">
                                Bitcoin
                              </a>
                            </div>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            placeholder={20.0}
                          />
                        </div>
                      </div>
                      <div
                        className="form-group mt-3"
                        id="hour_id"
                        style={{ display: "none" }}
                      >
                        <div className="row">
                          <div className="col-md-6 mb-2">
                            <div className="input-group form-inline">
                              <div className="input-group-prepend">
                                <button
                                  type="button"
                                  className="btn btn-white dropdown-toggle"
                                  data-bs-toggle="dropdown"
                                >
                                  $
                                </button>
                                <div className="dropdown-menu">
                                  <a className="dropdown-item" href="#">
                                    Dollars
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    Euro
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    Bitcoin
                                  </a>
                                </div>
                              </div>
                              <input
                                type="text"
                                className="form-control mr-2"
                                placeholder={20.0}
                              />{" "}
                              <label> / hr</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-group form-inline">
                              <label>For </label>{" "}
                              <input
                                type="text"
                                className="form-control ml-2"
                                placeholder=" ( eg: 2 Weeks)"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Price Content */}
                  {/* Skills Content */}
                  <div className="title-content">
                    <div className="title-detail">
                      <h3>Desired areas of expertise </h3>
                      <div className="form-group mb-0">
                        <input
                          type="text"
                          data-role="tagsinput"
                          className="input-tags form-control"
                          name="services"
                          defaultValue="Web Design"
                          id="services"
                          placeholder="UX, UI, App Design, Wireframing, Branding"
                        />
                        <p className="text-muted mb-0">
                          Enter skills for needed for project
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* /Skills Content */}
                  {/* Project Period Content */}
                  <div className="title-content">
                    <div className="title-detail">
                      <h3>Period of Project</h3>
                      <div className="form-group mb-0" id="pro_period">
                        <div className="radio">
                          <label className="custom_radio">
                            <input
                              type="radio"
                              defaultValue="period"
                              name="period"
                            />
                            <span className="checkmark" /> Start immediately after
                            the candidate is selected
                          </label>
                        </div>
                        <div className="radio">
                          <label className="custom_radio">
                            <input
                              type="radio"
                              defaultValue="job"
                              name="period"
                              defaultChecked
                            />
                            <span className="checkmark" /> Job will Start On
                          </label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-4">
                          <div className="filter-widget mb-0" id="period_date">
                            <div className="cal-icon">
                              <input
                                type="text"
                                className="form-control datetimepicker"
                                placeholder="Select Date"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Project Period Content */}
                  {/* /Add Document */}
                  <div className="title-content">
                    <div className="title-detail">
                      <h3>Add Documents</h3>
                      <div className="custom-file">
                        <input type="file" className="custom-file-input" />
                        <label className="custom-file-label" />
                      </div>
                      <p className="mb-0">
                        Size of the Document should be Below 2MB
                      </p>
                    </div>
                  </div>
                  {/* /Add Document */}
                  {/* Add Links */}
                  <div className="title-content">
                    <div className="title-detail">
                      <h3>Add Links</h3>
                      <div className="links-info">
                        <div className="row form-row links-cont">
                          <div className="col-12 col-md-11">
                            <div className="form-group mb-0">
                              <input type="text" className="form-control" />
                              <p className="mb-0">Add Reference links if any</p>
                            </div>
                          </div>
                          <div className="col-12 col-md-1">
                            <a
                              href=""
                              className="btn add-links"
                            >
                              <i className="fas fa-plus" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Add Links */}
                  {/* Project Title */}
                  <div className="title-content pb-0">
                    <div className="title-detail">
                      <h3>Write Description of Projects </h3>
                      <div className="form-group mb-0">                                              
                        <ReactSummernote
                          value="Default value"
                          options={{
                            lang: 'ru-RU',
                            height: 350,
                            dialogsInBody: true,
                            toolbar: [
                              ['style', ['style']],
                              ['font', ['bold', 'underline', 'clear']],
                              ['fontname', ['fontname']],
                              ['para', ['ul', 'ol', 'paragraph']],
                              ['table', ['table']],
                              ['insert', ['link', 'picture', 'video']],
                              ['view', ['fullscreen', 'codeview']]
                            ]
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  {/* /Project Title */}
                  <div className="row">
                    <div className="col-md-12 text-end">
                      <div className="btn-item">
                        <button type="submit" className="btn next-btn">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Project Title */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* /Page Content */}
  </>
      )
  
}
export default PostProject;