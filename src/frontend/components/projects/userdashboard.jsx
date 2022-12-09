import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Company_img,Company_img_01,Flags_en,Flags_de,Dev_img,Logo_01 } from "../imagepath"
import Projects from "./index"

class Userdashboard extends Component {
   
    render() {
     
        return (
            <>
             <div className="breadcrumb-bar">
                <div className="container">
                <div className="row align-items-center inner-banner">
                    <div className="col-md-12 col-12 text-center">
                    <h2 className="breadcrumb-title">Dashboard</h2>
                    <nav aria-label="breadcrumb" className="page-breadcrumb">
                        <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
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
            <div className="col-md-4 mb-5">
              <div className="myprofile-widget">
                <div className="myprofile-header">
                  <p>Welcome back,</p>
                  <h2>Gokulakrishnan S.</h2>
                  <p> @gokulakrishnans4</p>
                  <a href="#" className="btn member-btn">Free Member</a>
                </div>
                <div className="myprofile-body">
                  <div className="prog-acc">
                    <h5>Set up your account</h5>
                    <p>50%</p>
                  </div>
                  <div className="progress progress-sm">
                    <div className="progress-bar bg-info" role="progressbar" style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                  </div>	
                  <div className="prog-card">
                    <h5 className="mb-0"><i className="fa fa-file icon-circle" aria-hidden="true" /> Add your address</h5>
                    <p>+5%</p>
                  </div>
                  <div className="prog-card">
                    <h5 className="mb-0"><i className="fa fa-file icon-circle" aria-hidden="true" /> Add your Full name</h5>
                    <p>+5%</p>
                  </div>
                  <div className="bal-card">
                    <div className="acc-bal">
                      <p className="mb-1">Account Balance</p>
                      <h4>₹ 0.00 INR</h4>
                    </div>
                    <a href="#" className="btn fund-btn">Deposit Funds</a>
                  </div>
                </div>
              </div>					
            </div>	
            <div className="col-md-8 mb-5">
              <div className="pro-card">
                <div className="pro-head">
                  <h2>Recent Projects</h2>
                  <a href="#" className="btn fund-btn">View All</a>
                </div>
                <div className="pro-body">
                  <div className="reproject-slider slider">
                    <div className="card widget-profile pro-widget-profile">
                      <div className="card-top">
                        <Link to="/project-details">
                          <img alt="Card Image" src={Dev_img} className="card-img-top" />
                        </Link>
                        <div className="dev-text d-flex justify-content-between align-items-center">
                          <div className="left">
                            <Link to="/project-details">
                              <img alt="Image" src={Company_img_01} className="img-fluid" />
                            </Link>
                            <div className="left-content">
                              <h6>Dreamtech <i className="fas fa-check-circle verified" /></h6>
                              <h4><Link to="/project-details">Website Designer Required For Directory Theme</Link></h4>
                              <p><i className="fas fa-clock" /> Poster 1 hour ago</p>
                            </div>
                          </div>
                          <div className="dev-right">
                            <p>$40-$500</p>
                            <Link to="/project-details" className="btn bid-btn">Bid now <i className="fas fa-long-arrow-alt-right" /></Link>
                          </div>
                        </div>
                        <div className="bg-none dev-user">
                          <div className="star"><i className="fas fa-star" /></div>
                        </div>
                      </div>
                      <div className="card-header">
                        <div className="customer-info">
                          <ul className="list-details">
                            <li>
                              <div className="slot">
                                <p>Location</p>
                                <h5><img src={Flags_en} height={13} alt="Lang" /> UK</h5>
                              </div>
                            </li>
                            <li>
                              <div className="slot">
                                <p>Expiry</p>
                                <h5>4 Days Left</h5>
                              </div>
                            </li>
                            <li>
                              <div className="slot">
                                <p>Proposals</p>
                                <h5>3 Received</h5>
                              </div>
                            </li>
                            <li>
                              <div className="slot">
                                <p>Price type</p>
                                <h5>Fixed</h5>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="pro-widget-content">
                          <div className="profile-info-widget">													
                            <div className="profile-det-info">
                              <h4><Link to="/project-details">Senior Wordpress Developer</Link></h4>
                              <p>We are searching for a quality substance essayist who can take up an undertaking that is dire. I earnestly need experienced authors who can think…</p>
                            </div>
                            <div className="badge-tag">
                              <span className="badge badge-pill badge-design">Web Design</span>
                              <span className="badge badge-pill badge-design">UI Design</span>
                              <span className="badge badge-pill badge-design">Node Js</span>
                              <span className="badge badge-pill badge-design">Javascript</span>
                            </div>	
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card widget-profile pro-widget-profile">
                      <div className="card-top">
                        <Link to="/project-details">
                          <img alt="Card Image" src={Dev_img} className="card-img-top" />
                        </Link>
                        <div className="dev-text d-flex justify-content-between align-items-center">
                          <div className="left">
                            <Link to="/project-details">
                              <img alt="Image" src={Company_img} className="img-fluid" />
                            </Link>
                            <div className="left-content">
                              <h6>Hr management <i className="fas fa-check-circle verified" /></h6>
                              <h4><Link to="/project-details">Senior Animator Required For Directory Theme</Link></h4>
                              <p><i className="fas fa-clock" /> Poster 1 hour ago</p>
                            </div>
                          </div>
                          <div className="dev-right">
                            <p>$400</p>
                            <Link to="/project-details" className="btn bid-btn">Bid now <i className="fas fa-long-arrow-alt-right" /></Link>
                          </div>
                        </div>
                        <div className="bg-none dev-user">
                          <div className="star"><i className="fas fa-star" /></div>
                        </div>
                      </div>
                      <div className="card-header">
                        <div className="customer-info">
                          <ul className="list-details">
                            <li>
                              <div className="slot">
                                <p>Location</p>
                                <h5><img src={Flags_de} height={13} alt="Lang" /> GERmany</h5>
                              </div>
                            </li>
                            <li>
                              <div className="slot">
                                <p>Expiry</p>
                                <h5>4 Days Left</h5>
                              </div>
                            </li>
                            <li>
                              <div className="slot">
                                <p>Proposals</p>
                                <h5>15 Received</h5>
                              </div>
                            </li>
                            <li>
                              <div className="slot">
                                <p>Price type</p>
                                <h5>Hourly</h5>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="pro-widget-content">
                          <div className="profile-info-widget">													
                            <div className="profile-det-info">
                              <h4><Link to="/project-details">Senior Animator</Link></h4>
                              <p>We are searching for a quality substance essayist who can take up an undertaking that is dire. I earnestly need experienced authors who can think…</p>
                            </div>
                            <div className="badge-tag">
                              <span className="badge badge-pill badge-design">After Effects</span>
                              <span className="badge badge-pill badge-design">Illustrator</span>
                              <span className="badge badge-pill badge-design">HTML</span>
                              <span className="badge badge-pill badge-design">Whiteboard</span>
                            </div>	
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card widget-profile pro-widget-profile">
                      <div className="card-top">
                        <Link to="/project-details">
                          <img alt="Card Image" src={Dev_img} className="card-img-top" />
                        </Link>
                        <div className="dev-text d-flex justify-content-between align-items-center">
                          <div className="left">
                            <Link to="/project-details">
                              <img alt="Image" src={Company_img_01} className="img-fluid" />
                            </Link>
                            <div className="left-content">
                              <h6>Dreamtech <i className="fas fa-check-circle verified" /></h6>
                              <h4><Link to="/project-details">Website Designer Required For Directory Theme</Link></h4>
                              <p><i className="fas fa-clock" /> Poster 1 hour ago</p>
                            </div>
                          </div>
                          <div className="dev-right">
                            <p>$40-$500</p>
                            <Link to="/project-details" className="btn bid-btn">Bid now <i className="fas fa-long-arrow-alt-right" /></Link>
                          </div>
                        </div>
                        <div className="bg-none dev-user">
                          <div className="star"><i className="fas fa-star" /></div>
                        </div>
                      </div>
                      <div className="card-header">
                        <div className="customer-info">
                          <ul className="list-details">
                            <li>
                              <div className="slot">
                                <p>Location</p>
                                <h5><img src={Flags_en} height={13} alt="Lang" /> UK</h5>
                              </div>
                            </li>
                            <li>
                              <div className="slot">
                                <p>Expiry</p>
                                <h5>4 Days Left</h5>
                              </div>
                            </li>
                            <li>
                              <div className="slot">
                                <p>Proposals</p>
                                <h5>3 Received</h5>
                              </div>
                            </li>
                            <li>
                              <div className="slot">
                                <p>Price type</p>
                                <h5>Fixed</h5>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="pro-widget-content">
                          <div className="profile-info-widget">													
                            <div className="profile-det-info">
                              <h4><Link to="/project-details">Senior Wordpress Developer</Link></h4>
                              <p>We are searching for a quality substance essayist who can take up an undertaking that is dire. I earnestly need experienced authors who can think…</p>
                            </div>
                            <div className="badge-tag">
                              <span className="badge badge-pill badge-design">Web Design</span>
                              <span className="badge badge-pill badge-design">UI Design</span>
                              <span className="badge badge-pill badge-design">Node Js</span>
                              <span className="badge badge-pill badge-design">Javascript</span>
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
          <div className="row">
            <div className="col-md-7 col-lg-8">
              <div className="pro-card mb-4">
                <div className="pro-head">
                  <h2>News Feed</h2>
                  <a href="#" className="btn fund-btn">View All</a>
                </div>
                <div className="pro-body p-0">
                  <div className="news-feature">
                    <img src={Logo_01} alt="logo" className="img-fluid" />
                    <p>You are almost ready to start earning money as a freelancer, simply complete the following steps:</p>
                    <h6><span className="orange-text mr-2">3 days ago</span> Project Task</h6>
                  </div>
                  <div className="news-feature">
                    <img src={Logo_01} alt="logo" className="img-fluid" />
                    <p>You are almost ready to start earning money as a freelancer, simply complete the following steps:</p>
                    <h6><span className="orange-text mr-2">3 days ago</span> Project Task</h6>
                  </div>
                  <div className="news-feature">
                    <img src={Logo_01} alt="logo" className="img-fluid" />
                    <p>You are almost ready to start earning money as a freelancer, simply complete the following steps:</p>
                    <h6><span className="orange-text mr-2">3 days ago</span> Feedback</h6>
                  </div>
                  <div className="news-feature">
                    <img src={Logo_01} alt="logo" className="img-fluid" />
                    <p>You are almost ready to start earning money as a freelancer, simply complete the following steps:</p>
                    <h6><span className="orange-text mr-2">3 days ago</span> Feedback</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-lg-4">
              <div className="pro-card">
                <div className="pro-head">
                  <h2>Local Jobs</h2>
                  <a href="#" className="btn fund-btn">View All</a>
                </div>
                <div className="pro-body p-0">
                  <div className="dev-feature">
                    <h4>Senior Wordpress Developer</h4>
                    <p>We are searching for a quality substance  essayist who can take up an undertaking</p>
                    <h5>$600.00 – $601.00 INR</h5>
                    <a href="#" className="btn bid-btn">Bid now <i className="fas fa-long-arrow-alt-right" /></a>
                  </div>
                  <div className="dev-feature">
                    <h4>Senior Wordpress Developer</h4>
                    <p>We are searching for a quality substance  essayist who can take up an undertaking</p>
                    <h5>$600.00 – $601.00 INR</h5>
                    <a href="#" className="btn bid-btn">Bid now <i className="fas fa-long-arrow-alt-right" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
            </>
         )
    }
}
export default Userdashboard;