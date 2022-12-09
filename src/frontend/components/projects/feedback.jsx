import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Comment_img,Img_01 } from "../imagepath"
import Projects from "./index"

class Feedback extends Component {
   
    render() {
     
        return (
            <>
              <div className="breadcrumb-bar">
                <div className="container">
                <div className="row align-items-center inner-banner">
                    <div className="col-md-12 col-12 text-center">
                    <h2 className="breadcrumb-title">Feedback</h2>
                    <nav aria-label="breadcrumb" className="page-breadcrumb">
                        <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Feedback</li>
                        </ol>
                    </nav>
                    </div>
                </div>
                </div>
            </div>
            <Projects/>
            <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="filter-form">
                <div className="row align-items-end">
                  <div className="col-md-3">
                    <div className="form-group">
                      <label htmlFor="card_number">Filter By Projects</label>
                      <select className="form-control select">
                        <option>Select</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      <label htmlFor="card_number">Filter By Client</label>
                      <select className="form-control select">
                        <option>Select</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      <label htmlFor="card_number">Filter By Ratings</label>
                      <select className="form-control select">
                        <option>Select</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      <label htmlFor="card_number" />
                      <a href="#" className="btn-primary btn-block click-btn">Submit</a>
                    </div>
                  </div>
                </div>								
              </div>					
            </div>	
            {/* Feedback Box */}
            <div className="col-md-6 col-lg-4">
              <div className="feedback-box">
                <div className="feed-text d-flex justify-content-between">
                  <div className="left"><img alt="Image" src={Comment_img} className="img-fluid" /></div>
                  <div className="right rate-box">4.0</div>
                </div>
                <div className="client-img"><img src={Img_01} alt="image" className="img-fluid" /></div>
                <h3 className="client-name">Mr. John Doe</h3>
                <h3 className="company-name">Company / Client name</h3>
                <h3 className="feed-date">July 9, 2018 - March 18, 2021</h3>
                <p>I am a professional graphic designer. I have more than 10-years of experience in graphics design. If you are looking for any graphic related work, contact me, I'll glad to help you.</p>
                <div className="project-type">
                  <h6>Project Name : Hayka</h6>
                  <h6>Project Type : Hourly Project</h6>
                </div>
                <div className="rating-type">
                  <div className="rating red">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star" />
                  </div>
                  <a data-toggle="modal" href="#write-review" className="edit-text">Edit</a>
                  <a data-toggle="modal" href="#client_feedback" className="btn-primary click-btn">Reply</a>
                </div>
              </div>
            </div>
            {/* /Feedback Box */}
            {/* Feedback Box */}
            <div className="col-md-6 col-lg-4">
              <div className="feedback-box">
                <div className="feed-text d-flex justify-content-between">
                  <div className="left"><img alt="Image" src={Comment_img} className="img-fluid" /></div>
                  <div className="right rate-box">4.0</div>
                </div>
                <div className="client-img"><img src={Img_01} alt="image" className="img-fluid" /></div>
                <h3 className="client-name">Mr. John Doe</h3>
                <h3 className="company-name">Company / Client name</h3>
                <h3 className="feed-date">July 9, 2018 - March 18, 2021</h3>
                <p>I am a professional graphic designer. I have more than 10-years of experience in graphics design. If you are looking for any graphic related work, contact me, I'll glad to help you.</p>
                <div className="project-type">
                  <h6>Project Name : Hayka</h6>
                  <h6>Project Type : Hourly Project</h6>
                </div>
                <div className="rating-type">
                  <div className="rating red">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star" />
                  </div>
                  <a data-toggle="modal" href="#write-review" className="edit-text">Edit</a>
                  <a data-toggle="modal" href="#client_feedback" className="btn-primary click-btn">Reply</a>
                </div>
              </div>
            </div>
            {/* /Feedback Box */}
            {/* Feedback Box */}
            <div className="col-md-6 col-lg-4">
              <div className="feedback-box">
                <div className="feed-text d-flex justify-content-between">
                  <div className="left"><img alt="Image" src={Comment_img} className="img-fluid" /></div>
                  <div className="right rate-box">4.0</div>
                </div>
                <div className="client-img"><img src={Img_01} alt="image" className="img-fluid" /></div>
                <h3 className="client-name">Mr. John Doe</h3>
                <h3 className="company-name">Company / Client name</h3>
                <h3 className="feed-date">July 9, 2018 - March 18, 2021</h3>
                <p>I am a professional graphic designer. I have more than 10-years of experience in graphics design. If you are looking for any graphic related work, contact me, I'll glad to help you.</p>
                <div className="project-type">
                  <h6>Project Name : Hayka</h6>
                  <h6>Project Type : Hourly Project</h6>
                </div>
                <div className="rating-type">
                  <div className="rating red">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star" />
                  </div>
                  <a data-toggle="modal" href="#write-review" className="edit-text">Edit</a>
                  <a data-toggle="modal" href="#client_feedback" className="btn-primary click-btn">Reply</a>
                </div>
              </div>
            </div>
            {/* /Feedback Box */}
            {/* Feedback Box */}
            <div className="col-md-6 col-lg-4">
              <div className="feedback-box">
                <div className="feed-text d-flex justify-content-between">
                  <div className="left"><img alt="Image" src={Comment_img} className="img-fluid" /></div>
                  <div className="right rate-box">4.0</div>
                </div>
                <div className="client-img"><img src={Img_01} alt="image" className="img-fluid" /></div>
                <h3 className="client-name">Mr. John Doe</h3>
                <h3 className="company-name">Company / Client name</h3>
                <h3 className="feed-date">July 9, 2018 - March 18, 2021</h3>
                <p>I am a professional graphic designer. I have more than 10-years of experience in graphics design. If you are looking for any graphic related work, contact me, I'll glad to help you.</p>
                <div className="project-type">
                  <h6>Project Name : Hayka</h6>
                  <h6>Project Type : Hourly Project</h6>
                </div>
                <div className="rating-type">
                  <div className="rating red">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star" />
                  </div>
                  <a data-toggle="modal" href="#write-review" className="edit-text">Edit</a>
                  <a data-toggle="modal" href="#client_feedback" className="btn-primary click-btn">Reply</a>
                </div>
              </div>
            </div>
            {/* /Feedback Box */}
            {/* Feedback Box */}
            <div className="col-md-6 col-lg-4">
              <div className="feedback-box">
                <div className="feed-text d-flex justify-content-between">
                  <div className="left"><img alt="Image" src={Comment_img} className="img-fluid" /></div>
                  <div className="right rate-box">4.0</div>
                </div>
                <div className="client-img"><img src={Img_01} alt="image" className="img-fluid" /></div>
                <h3 className="client-name">Mr. John Doe</h3>
                <h3 className="company-name">Company / Client name</h3>
                <h3 className="feed-date">July 9, 2018 - March 18, 2021</h3>
                <p>I am a professional graphic designer. I have more than 10-years of experience in graphics design. If you are looking for any graphic related work, contact me, I'll glad to help you.</p>
                <div className="project-type">
                  <h6>Project Name : Hayka</h6>
                  <h6>Project Type : Hourly Project</h6>
                </div>
                <div className="rating-type">
                  <div className="rating red">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star" />
                  </div>
                  <a data-toggle="modal" href="#write-review" className="edit-text">Edit</a>
                  <a data-toggle="modal" href="#client_feedback" className="btn-primary click-btn">Reply</a>
                </div>
              </div>
            </div>
            {/* /Feedback Box */}
            {/* Feedback Box */}
            <div className="col-md-6 col-lg-4">
              <div className="feedback-box">
                <div className="feed-text d-flex justify-content-between">
                  <div className="left"><img alt="Image" src={Comment_img} className="img-fluid" /></div>
                  <div className="right rate-box">4.0</div>
                </div>
                <div className="client-img"><img src={Img_01} alt="image" className="img-fluid" /></div>
                <h3 className="client-name">Mr. John Doe</h3>
                <h3 className="company-name">Company / Client name</h3>
                <h3 className="feed-date">July 9, 2018 - March 18, 2021</h3>
                <p>I am a professional graphic designer. I have more than 10-years of experience in graphics design. If you are looking for any graphic related work, contact me, I'll glad to help you.</p>
                <div className="project-type">
                  <h6>Project Name : Hayka</h6>
                  <h6>Project Type : Hourly Project</h6>
                </div>
                <div className="rating-type">
                  <div className="rating red">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star" />
                  </div>
                  <a data-toggle="modal" href="#write-review" className="edit-text">Edit</a>
                  <a data-toggle="modal" href="#client_feedback" className="btn-primary click-btn">Reply</a>
                </div>
              </div>
            </div>
            {/* /Feedback Box */}
            {/* Feedback Box */}
            <div className="col-md-6 col-lg-4">
              <div className="feedback-box">
                <div className="feed-text d-flex justify-content-between">
                  <div className="left"><img alt="Image" src={Comment_img} className="img-fluid" /></div>
                  <div className="right rate-box">4.0</div>
                </div>
                <div className="client-img"><img src={Img_01} alt="image" className="img-fluid" /></div>
                <h3 className="client-name">Mr. John Doe</h3>
                <h3 className="company-name">Company / Client name</h3>
                <h3 className="feed-date">July 9, 2018 - March 18, 2021</h3>
                <p>I am a professional graphic designer. I have more than 10-years of experience in graphics design. If you are looking for any graphic related work, contact me, I'll glad to help you.</p>
                <div className="project-type">
                  <h6>Project Name : Hayka</h6>
                  <h6>Project Type : Hourly Project</h6>
                </div>
                <div className="rating-type">
                  <div className="rating red">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star" />
                  </div>
                  <a data-toggle="modal" href="#write-review" className="edit-text">Edit</a>
                  <a data-toggle="modal" href="#client_feedback" className="btn-primary click-btn">Reply</a>
                </div>
              </div>
            </div>
            {/* /Feedback Box */}
            {/* Feedback Box */}
            <div className="col-md-6 col-lg-4">
              <div className="feedback-box">
                <div className="feed-text d-flex justify-content-between">
                  <div className="left"><img alt="Image" src={Comment_img} className="img-fluid" /></div>
                  <div className="right rate-box">4.0</div>
                </div>
                <div className="client-img"><img src={Img_01} alt="image" className="img-fluid" /></div>
                <h3 className="client-name">Mr. John Doe</h3>
                <h3 className="company-name">Company / Client name</h3>
                <h3 className="feed-date">July 9, 2018 - March 18, 2021</h3>
                <p>I am a professional graphic designer. I have more than 10-years of experience in graphics design. If you are looking for any graphic related work, contact me, I'll glad to help you.</p>
                <div className="project-type">
                  <h6>Project Name : Hayka</h6>
                  <h6>Project Type : Hourly Project</h6>
                </div>
                <div className="rating-type">
                  <div className="rating red">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star" />
                  </div>
                  <a data-toggle="modal" href="#write-review" className="edit-text">Edit</a>
                  <a data-toggle="modal" href="#client_feedback" className="btn-primary click-btn">Reply</a>
                </div>
              </div>
            </div>
            {/* /Feedback Box */}
            {/* Feedback Box */}
            <div className="col-md-6 col-lg-4">
              <div className="feedback-box">
                <div className="feed-text d-flex justify-content-between">
                  <div className="left"><img alt="Image" src={Comment_img} className="img-fluid" /></div>
                  <div className="right rate-box">4.0</div>
                </div>
                <div className="client-img"><img src={Img_01} alt="image" className="img-fluid" /></div>
                <h3 className="client-name">Mr. John Doe</h3>
                <h3 className="company-name">Company / Client name</h3>
                <h3 className="feed-date">July 9, 2018 - March 18, 2021</h3>
                <p>I am a professional graphic designer. I have more than 10-years of experience in graphics design. If you are looking for any graphic related work, contact me, I'll glad to help you.</p>
                <div className="project-type">
                  <h6>Project Name : Hayka</h6>
                  <h6>Project Type : Hourly Project</h6>
                </div>
                <div className="rating-type">
                  <div className="rating red">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star" />
                  </div>
                  <a data-toggle="modal" href="#write-review" className="edit-text">Edit</a>
                  <a data-toggle="modal" href="#client_feedback" className="btn-primary click-btn">Reply</a>
                </div>
              </div>
            </div>
            {/* /Feedback Box */}
          </div>
        </div>
      </div>
            </>
         )
    }
}
export default Feedback;