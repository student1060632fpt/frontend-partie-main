import React, { Component } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
// Import Images
import { Dev_img,Profile,Flags_en,Flags_pl,Flags_de,Developer_01,Developer_02 } from "../imagepath";

class Search extends Component {
   
    render() {
        
        return (
            <>
            {/* Breadcrumb */}
        <div className="breadcrumb-bar">
          <div className="container">
            <div className="row align-items-center inner-banner">
              <div className="col-md-12 col-12 text-center">
                <h2 className="breadcrumb-title">DEVELOPERS</h2>
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page"> DEVELOPERS</li>
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
              <div className="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar">
                <StickyBox offsetTop={20} offsetBottom={20}>		
                {/* Search Filter */}
                <div className="card search-filter">
                  <div className="card-header d-flex justify-content-between">
                    <h4 className="card-title mb-0">FILTERS</h4>
                    <h6>Clear filters</h6>
                  </div>
                  <div className="card-body">
                    <div className="filter-widget">
                      <h4>Category</h4>
                      <div className="form-group">
                        <select className="form-control select" defaultValue="UI/UX Developer">
                          <option>Select Category</option>
                          <option>Developer</option>
                          <option value="UI/UX Developer">UI/UX Developer</option>
                        </select>
                      </div>
                    </div>
                    <div className="filter-widget">
                      <h4>Location</h4>
                      <div className="form-group">
                        <select className="form-control select" defaultValue="Germany">
                          <option>Country, City, Zipcode</option>
                          <option>UK</option>
                          <option value="Germany">Germany</option>
                          <option>London</option>
                        </select>
                      </div>
                    </div>
                    <div className="filter-widget">
                      <h4>Completed Projects</h4>
                      <div className="form-group">
                        <select className="form-control select" defaultValue="5">
                          <option>Select Projects</option>
                          <option value="5">5</option>
                          <option>3</option>
                        </select>
                      </div>
                    </div>
                    <div className="filter-widget">
                      <h4>Pricing Type</h4>
                      <div className="form-group">
                        <select className="form-control select" defaultValue="Hourly">
                          <option value="Hourly">Hourly</option>
                          <option>Full Day Rate</option>
                          <option>Half Day Rate</option>
                        </select>
                      </div>
                    </div>								
                    <div className="filter-widget">
                      <h4>Add Skills</h4>
                      <div className="form-group">
                        <span className="badge badge-pill badge-skill">+ Web Design</span><span className="badge badge-pill badge-skill">+ UI Design</span><span className="badge badge-pill badge-skill">+ Node Js</span><span className="badge badge-pill badge-skill">+ Angular</span><span className="badge badge-pill badge-skill">+ Wordpress</span>
                        <input type="text" className="form-control" />
                      </div>
                    </div>	
                    <div className="filter-widget">
                      <h4>Avalability</h4>
                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="select_time" defaultChecked />
                          <span className="checkmark" /> Hourly 
                        </label>
                      </div>
                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="select_time" />
                          <span className="checkmark" /> Part Time
                        </label>
                      </div>
                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="select_time" />
                          <span className="checkmark" />  Full Time
                        </label>
                      </div>
                    </div>
                    <div className="filter-widget">
                      <h4>Experience</h4>
                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="select_specialist" />
                          <span className="checkmark" />  0-1 years
                        </label>
                      </div>
                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="select_exp" defaultChecked />
                          <span className="checkmark" /> 2-5 years
                        </label>
                      </div>
                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="select_exp" />
                          <span className="checkmark" />  5-8 years
                        </label>
                      </div>
                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="select_exp" />
                          <span className="checkmark" />  9-12 years
                        </label>
                      </div>
                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="select_exp" />
                          <span className="checkmark" />  Mastered
                        </label>
                      </div>
                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="select_exp" />
                          <span className="checkmark" /> Professional
                        </label>
                      </div>
                    </div>	
                    <div className="filter-widget">
                      <h4>Hourly Rate</h4>
                      <div id="slider-range" />
                      <div className="row slider-labels">
                        <div className="col-xs-12 caption">
                          <span id="slider-range-value1" /> - <span id="slider-range-value2" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <form>
                            <input type="hidden" name="min-value" defaultValue />
                            <input type="hidden" name="max-value" defaultValue />
                          </form>
                        </div>
                      </div>
                    </div>								
                    <div className="filter-widget">
                      <h4>Keywords</h4>
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Website" />
                      </div>
                    </div>
                    <div className="filter-widget">
                      <h4>Currency</h4>
                      <div className="form-group">
                        <select className="form-control select" defaultValue="USD">
                          <option value="USD">USD</option>
                          <option>Euro</option>
                        </select>
                      </div>
                    </div>								
                    <div className="filter-widget">
                      <h4>Profile type</h4>
                      <div className="form-group">
                        <select className="form-control select" defaultValue="Individual">
                          <option value="Individual">Individual</option>
                          <option>Individual</option>
                          <option>Individual</option>
                        </select>
                      </div>
                    </div>																
                    <div className="filter-widget">
                      <h4>Feedbacks</h4>
                      <div className="form-group">
                        <select className="form-control select" defaultValue="0-1">
                          <option value="0-1">0-1</option>
                          <option>1-2</option>
                          <option>2-3</option>
                        </select>
                      </div>
                    </div>
                    <div className="btn-search">
                      <button type="button" className="btn btn-block">Search</button>
                    </div>	
                  </div>
                </div>
                {/* /Search Filter */}
                </StickyBox>
              </div>
              <div className="col-md-12 col-lg-8 col-xl-9">
                <div className="row align-items-center result bg-white">
                  <div className="col-md-6 col-12">
                    <h4>Browse 7 UI/UX Developers</h4>
                  </div>
                  <div className="col-md-6 col-12 d-md-block d-none">
                    <div className="sort-by">
                      <span className="sort-title">Sort by</span>
                      <span className="sortby-fliter">
                        <select className="select">
                          <option>Relevance</option>
                          <option className="sorting">Rating</option>
                          <option className="sorting">Popular</option>
                          <option className="sorting">Latest</option>
                          <option className="sorting">Free</option>
                        </select>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bootstrap-tags text-left">
                  <span className="badge badge-pill badge-skills">UI/UX Developer <span data-role="remove" /></span> 
                  <span className="badge badge-pill badge-skills">Germany <span data-role="remove" /></span> 
                  <span className="badge badge-pill badge-skills">5 <span data-role="remove" /></span> 
                  <span className="badge badge-pill badge-skills">Hourly <span data-role="remove" /></span> 
                  <span className="badge badge-pill badge-skills">0-1 years <span data-role="remove" /></span> 
                  <span className="badge badge-pill badge-skills">5-22 <span data-role="remove" /></span> 
                  <span className="badge badge-pill badge-skills">USD <span data-role="remove" /></span>
                </div>
                <div className="row">
                  <div className="col-md-6 col-lg-6 col-xl-4">
                    <div className="card widget-profile pat-widget-profile">
                      <div className="card-top">
                        <Link to="/developer-details">
                          <img alt="Card Image" src={Dev_img} className="card-img-top" />
                        </Link>
                        <div className="dev-text d-flex justify-content-between">
                          <div className="left"><img alt="Image" src={Flags_en} height={16} className="img-fluid" /> UNITED KINGDOM</div>
                          <div className="right"><i className="fas fa-star" /></div>
                        </div>
                        <div className="dev-user">
                          <img src={Developer_02} alt="" className="img-fluid" />
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="pro-widget-content">
                          <div className="profile-info-widget">
                            <div className="profile-det-info">
                              <h3><Link to="/developer-details">Akshay Handge</Link></h3>
                              <div className="customer-details">
                                <h5>UI/UX Designer</h5>
                                <div className="rating">
                                  <span className="average-rating">4.6</span>
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bootstrap-tags">
                        <span className="badge badge-pill badge-design">Web Design</span><span className="badge badge-pill badge-design">UI Design</span><span className="badge badge-pill badge-design">Node Js</span><span className="badge badge-pill badge-design">Javascript</span>
                      </div>
                      <div className="card-footer">
                        <div className="customer-info">
                          <ul className="d-flex justify-content-between">
                            <li>
                              <div className="slot">
                                <p>Location</p>
                                <h5><i className="fas fa-map-marker-alt" /> London</h5>
                              </div>
                            </li>
                            <li>
                              <div className="slot">
                                <p>Pricing</p>
                                <h5>$40 / Hr</h5>
                              </div>
                            </li>
                            <li>
                              <div className="slot">
                                <p>Job Success</p>
                                <h5>95%</h5>
                              </div>
                            </li>
                            <li>
                              <div className="slot">
                                <p>Completed Projects</p>
                                <h5>15</h5>
                              </div>
                            </li>
                          </ul>
                          <a href="#" className="btn btn-block profile-btn">View Profile</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6 col-xl-4">
                    <div className="card widget-profile pat-widget-profile">
                      <div className="card-top">
                        <Link to="/developer-details">
                          <img alt="Card Image" src={Dev_img} className="card-img-top" />
                        </Link>
                        <div className="dev-text d-flex justify-content-between">
                          <div className="left"><img alt="Image" src={Flags_de} height={16} /> Germany</div>
                          <div className="right bg-grey"><i className="fas fa-star" /></div>
                        </div>
                        <div className="dev-user">
                          <img src={Developer_01} alt="" className="img-fluid" />
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="pro-widget-content">
                          <div className="profile-info-widget">
                            <div className="profile-det-info">
                              <h3><Link to="/developer-details">David Peterson</Link></h3>
                              <div className="customer-details">
                                <h5>iOS Expert + Node Dev</h5>
                                <div className="rating">
                                  <span className="average-rating">4.6</span>
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bootstrap-tags">
                        <span className="badge badge-pill badge-design">Web Design</span><span className="badge badge-pill badge-design">UI Design</span><span className="badge badge-pill badge-design">Node Js</span><span className="badge badge-pill badge-design">Javascript</span>
                      </div>
                      <div className="card-footer">
                        <div className="customer-info">
                          <ul className="d-flex justify-content-between">
                            <li>
                              <div className="slot">
                                <p>Location</p>
                                <h5><i className="fas fa-map-marker-alt" /> London</h5>
                              </div>
                            </li>
                            <li>
                              <div className="slot">
                                <p>Pricing</p>
                                <h5>$40 / Hr</h5>
                              </div>
                            </li>
                            <li>
                              <div className="slot">
                                <p>Job Success</p>
                                <h5>95%</h5>
                              </div>
                            </li>
                            <li>
                              <div className="slot">
                                <p>Completed Projects</p>
                                <h5>15</h5>
                              </div>
                            </li>
                          </ul>
                          <a href="#" className="btn btn-block profile-btn">View Profile</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6 col-xl-4">
                    <div className="card widget-profile pat-widget-profile">
                      <div className="card-top">
                        <Link to="/developer-details">
                          <img alt="Card Image" src={Dev_img} className="card-img-top" />
                        </Link>
                        <div className="dev-text d-flex justify-content-between">
                          <div className="left"><img alt="Image" src={Flags_pl} height={16} /> poland</div>
                          <div className="right bg-grey"><i className="fas fa-star" /></div>
                        </div>
                        <div className="bg-none dev-user">
                          <img src={Profile} alt="" className="img-fluid" />
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="pro-widget-content">
                          <div className="profile-info-widget">
                            <div className="profile-det-info">
                              <h3><Link to="/developer-details">Marcin Kowalski </Link></h3>
                              <div className="customer-details">
                                <h5>Front-End Developer</h5>
                                <div className="rating">
                                  <span className="vote">Minimum 3 Votes Required</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bootstrap-tags">
                        <span className="badge badge-pill badge-design">Web Design</span><span className="badge badge-pill badge-design">UI Design</span><span className="badge badge-pill badge-design">Node Js</span><span className="badge badge-pill badge-design">Javascript</span>
                      </div>
                      <div className="card-footer">
                        <div className="customer-info">
                          <ul className="d-flex justify-content-between">
                            <li>
                              <div className="slot">
                                <p>Location</p>
                                <h5><i className="fas fa-map-marker-alt" /> London</h5>
                              </div>
                            </li>
                            <li>
                              <div className="slot">
                                <p>Pricing</p>
                                <h5>$40 / Hr</h5>
                              </div>
                            </li>
                            <li>
                              <div className="slot">
                                <p>Job Success</p>
                                <h5>95%</h5>
                              </div>
                            </li>
                            <li>
                              <div className="slot">
                                <p>Completed Projects</p>
                                <h5>15</h5>
                              </div>
                            </li>
                          </ul>
                          <a href="#" className="btn btn-block profile-btn">View Profile</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6 col-xl-4">
                    <div className="card widget-profile pat-widget-profile">
                      <div className="card-top">
                        <Link to="/developer-details">
                          <img alt="Card Image" src={Dev_img} className="card-img-top" />
                        </Link>
                        <div className="dev-text d-flex justify-content-between">
                          <div className="left"><img alt="Image" src={Flags_en} height={16} className="img-fluid" /> UNITED KINGDOM</div>
                          <div className="right"><i className="fas fa-star" /></div>
                        </div>
                        <div className="dev-user">
                          <img src={Developer_02} alt="" className="img-fluid" />
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="pro-widget-content">
                          <div className="profile-info-widget">
                            <div className="profile-det-info">
                              <h3><Link to="/developer-details">Akshay Handge</Link></h3>
                              <div className="customer-details">
                                <h5>UI/UX Designer</h5>
                                <div className="rating">
                                  <span className="average-rating">4.6</span>
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bootstrap-tags">
                        <span className="badge badge-pill badge-design">Web Design</span><span className="badge badge-pill badge-design">UI Design</span><span className="badge badge-pill badge-design">Node Js</span><span className="badge badge-pill badge-design">Javascript</span>
                      </div>
                      <div className="card-footer">
                        <div className="customer-info">
                          <ul className="d-flex justify-content-between">
                            <li>
                              <div className="slot">
                                <p>Location</p>
                                <h5><i className="fas fa-map-marker-alt" /> London</h5>
                              </div>
                            </li>
                            <li>
                              <div className="slot">
                                <p>Pricing</p>
                                <h5>$40 / Hr</h5>
                              </div>
                            </li>
                            <li>
                              <div className="slot">
                                <p>Job Success</p>
                                <h5>95%</h5>
                              </div>
                            </li>
                            <li>
                              <div className="slot">
                                <p>Completed Projects</p>
                                <h5>15</h5>
                              </div>
                            </li>
                          </ul>
                          <a href="#" className="btn btn-block profile-btn">View Profile</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6 col-xl-4">
                    <div className="card widget-profile pat-widget-profile">
                      <div className="card-top">
                        <Link to="/developer-details">
                          <img alt="Card Image" src={Dev_img} className="card-img-top" />
                        </Link>
                        <div className="dev-text d-flex justify-content-between">
                          <div className="left"><img alt="Image" src={Flags_de} height={16} /> Germany</div>
                          <div className="right bg-grey"><i className="fas fa-star" /></div>
                        </div>
                        <div className="dev-user">
                          <img src={Developer_01} alt="" className="img-fluid" />
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="pro-widget-content">
                          <div className="profile-info-widget">
                            <div className="profile-det-info">
                              <h3><Link to="/developer-details">David Peterson</Link></h3>
                              <div className="customer-details">
                                <h5>iOS Expert + Node Dev</h5>
                                <div className="rating">
                                  <span className="average-rating">4.6</span>
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bootstrap-tags">
                        <span className="badge badge-pill badge-design">Web Design</span><span className="badge badge-pill badge-design">UI Design</span><span className="badge badge-pill badge-design">Node Js</span><span className="badge badge-pill badge-design">Javascript</span>
                      </div>
                      <div className="card-footer">
                        <div className="customer-info">
                          <ul className="d-flex justify-content-between">
                            <li>
                              <div className="slot">
                                <p>Location</p>
                                <h5><i className="fas fa-map-marker-alt" /> London</h5>
                              </div>
                            </li>
                            <li>
                              <div className="slot">
                                <p>Pricing</p>
                                <h5>$40 / Hr</h5>
                              </div>
                            </li>
                            <li>
                              <div className="slot">
                                <p>Job Success</p>
                                <h5>95%</h5>
                              </div>
                            </li>
                            <li>
                              <div className="slot">
                                <p>Completed Projects</p>
                                <h5>15</h5>
                              </div>
                            </li>
                          </ul>
                          <a href="#" className="btn btn-block profile-btn">View Profile</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6 col-xl-4">
                    <div className="card widget-profile pat-widget-profile">
                      <div className="card-top">
                        <Link to="/developer-details">
                          <img alt="Card Image" src={Dev_img} className="card-img-top" />
                        </Link>
                        <div className="dev-text d-flex justify-content-between">
                          <div className="left"><img alt="Image" src={Flags_pl} height={16} /> poland</div>
                          <div className="right bg-grey"><i className="fas fa-star" /></div>
                        </div>
                        <div className="bg-none dev-user">
                          <img src={Profile} alt="" className="img-fluid" />
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="pro-widget-content">
                          <div className="profile-info-widget">
                            <div className="profile-det-info">
                              <h3><Link to="/developer-details">Marcin Kowalski </Link></h3>
                              <div className="customer-details">
                                <h5>Front-End Developer</h5>
                                <div className="rating">
                                  <span className="vote">Minimum 3 Votes Required</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bootstrap-tags">
                        <span className="badge badge-pill badge-design">Web Design</span><span className="badge badge-pill badge-design">UI Design</span><span className="badge badge-pill badge-design">Node Js</span><span className="badge badge-pill badge-design">Javascript</span>
                      </div>
                      <div className="card-footer">
                        <div className="customer-info">
                          <ul className="d-flex justify-content-between">
                            <li>
                              <div className="slot">
                                <p>Location</p>
                                <h5><i className="fas fa-map-marker-alt" /> London</h5>
                              </div>
                            </li>
                            <li>
                              <div className="slot">
                                <p>Pricing</p>
                                <h5>$40 / Hr</h5>
                              </div>
                            </li>
                            <li>
                              <div className="slot">
                                <p>Job Success</p>
                                <h5>95%</h5>
                              </div>
                            </li>
                            <li>
                              <div className="slot">
                                <p>Completed Projects</p>
                                <h5>15</h5>
                              </div>
                            </li>
                          </ul>
                          <a href="#" className="btn btn-block profile-btn">View Profile</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6 col-xl-4">
                    <div className="card widget-profile pat-widget-profile">
                      <div className="card-top">
                        <Link to="/developer-details">
                          <img alt="Card Image" src={Dev_img} className="card-img-top" />
                        </Link>
                        <div className="dev-text d-flex justify-content-between">
                          <div className="left"><img alt="Image" src={Flags_en} height={16} className="img-fluid" /> UNITED KINGDOM</div>
                          <div className="right"><i className="fas fa-star" /></div>
                        </div>
                        <div className="dev-user">
                          <img src={Developer_02} alt="" className="img-fluid" />
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="pro-widget-content">
                          <div className="profile-info-widget">
                            <div className="profile-det-info">
                              <h3><Link to="/developer-details">Akshay Handge</Link></h3>
                              <div className="customer-details">
                                <h5>UI/UX Designer</h5>
                                <div className="rating">
                                  <span className="average-rating">4.6</span>
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bootstrap-tags">
                        <span className="badge badge-pill badge-design">Web Design</span><span className="badge badge-pill badge-design">UI Design</span><span className="badge badge-pill badge-design">Node Js</span><span className="badge badge-pill badge-design">Javascript</span>
                      </div>
                      <div className="card-footer">
                        <div className="customer-info">
                          <ul className="d-flex justify-content-between">
                            <li>
                              <div className="slot">
                                <p>Location</p>
                                <h5><i className="fas fa-map-marker-alt" /> London</h5>
                              </div>
                            </li>
                            <li>
                              <div className="slot">
                                <p>Pricing</p>
                                <h5>$40 / Hr</h5>
                              </div>
                            </li>
                            <li>
                              <div className="slot">
                                <p>Job Success</p>
                                <h5>95%</h5>
                              </div>
                            </li>
                            <li>
                              <div className="slot">
                                <p>Completed Projects</p>
                                <h5>15</h5>
                              </div>
                            </li>
                          </ul>
                          <a href="#" className="btn btn-block profile-btn">View Profile</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6 col-xl-4">
                    <div className="card widget-profile pat-widget-profile">
                      <div className="card-top">
                        <Link to="/developer-details">
                          <img alt="Card Image" src={Dev_img} className="card-img-top" />
                        </Link>
                        <div className="dev-text d-flex justify-content-between">
                          <div className="left"><img alt="Image" src={Flags_de} height={16} /> Germany</div>
                          <div className="right bg-grey"><i className="fas fa-star" /></div>
                        </div>
                        <div className="dev-user">
                          <img src={Developer_01} alt="" className="img-fluid" />
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="pro-widget-content">
                          <div className="profile-info-widget">
                            <div className="profile-det-info">
                              <h3><Link to="/developer-details">David Peterson</Link></h3>
                              <div className="customer-details">
                                <h5>iOS Expert + Node Dev</h5>
                                <div className="rating">
                                  <span className="average-rating">4.6</span>
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bootstrap-tags">
                        <span className="badge badge-pill badge-design">Web Design</span><span className="badge badge-pill badge-design">UI Design</span><span className="badge badge-pill badge-design">Node Js</span><span className="badge badge-pill badge-design">Javascript</span>
                      </div>
                      <div className="card-footer">
                        <div className="customer-info">
                          <ul className="d-flex justify-content-between">
                            <li>
                              <div className="slot">
                                <p>Location</p>
                                <h5><i className="fas fa-map-marker-alt" /> London</h5>
                              </div>
                            </li>
                            <li>
                              <div className="slot">
                                <p>Pricing</p>
                                <h5>$40 / Hr</h5>
                              </div>
                            </li>
                            <li>
                              <div className="slot">
                                <p>Job Success</p>
                                <h5>95%</h5>
                              </div>
                            </li>
                            <li>
                              <div className="slot">
                                <p>Completed Projects</p>
                                <h5>15</h5>
                              </div>
                            </li>
                          </ul>
                          <a href="#" className="btn btn-block profile-btn">View Profile</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6 col-xl-4">
                    <div className="card widget-profile pat-widget-profile">
                      <div className="card-top">
                        <Link to="/developer-details">
                          <img alt="Card Image" src={Dev_img} className="card-img-top" />
                        </Link>
                        <div className="dev-text d-flex justify-content-between">
                          <div className="left"><img alt="Image" src={Flags_pl} height={16} /> poland</div>
                          <div className="right bg-grey"><i className="fas fa-star" /></div>
                        </div>
                        <div className="bg-none dev-user">
                          <img src={Profile} alt="" className="img-fluid" />
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="pro-widget-content">
                          <div className="profile-info-widget">
                            <div className="profile-det-info">
                              <h3><Link to="/developer-details">Marcin Kowalski </Link></h3>
                              <div className="customer-details">
                                <h5>Front-End Developer</h5>
                                <div className="rating">
                                  <span className="vote">Minimum 3 Votes Required</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bootstrap-tags">
                        <span className="badge badge-pill badge-design">Web Design</span><span className="badge badge-pill badge-design">UI Design</span><span className="badge badge-pill badge-design">Node Js</span><span className="badge badge-pill badge-design">Javascript</span>
                      </div>
                      <div className="card-footer">
                        <div className="customer-info">
                          <ul className="d-flex justify-content-between">
                            <li>
                              <div className="slot">
                                <p>Location</p>
                                <h5><i className="fas fa-map-marker-alt" /> London</h5>
                              </div>
                            </li>
                            <li>
                              <div className="slot">
                                <p>Pricing</p>
                                <h5>$40 / Hr</h5>
                              </div>
                            </li>
                            <li>
                              <div className="slot">
                                <p>Job Success</p>
                                <h5>95%</h5>
                              </div>
                            </li>
                            <li>
                              <div className="slot">
                                <p>Completed Projects</p>
                                <h5>15</h5>
                              </div>
                            </li>
                          </ul>
                          <a href="#" className="btn btn-block profile-btn">View Profile</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6 col-xl-4">
                    <div className="card widget-profile pat-widget-profile">
                      <div className="card-top">
                        <Link to="/developer-details">
                          <img alt="Card Image" src={Dev_img} className="card-img-top" />
                        </Link>
                        <div className="dev-text d-flex justify-content-between">
                          <div className="left"><img alt="Image" src={Flags_en} height={16} className="img-fluid" /> UNITED KINGDOM</div>
                          <div className="right"><i className="fas fa-star" /></div>
                        </div>
                        <div className="dev-user">
                          <img src={Developer_02} alt="" className="img-fluid" />
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="pro-widget-content">
                          <div className="profile-info-widget">
                            <div className="profile-det-info">
                              <h3><Link to="/developer-details">Akshay Handge</Link></h3>
                              <div className="customer-details">
                                <h5>UI/UX Designer</h5>
                                <div className="rating">
                                  <span className="average-rating">4.6</span>
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bootstrap-tags">
                        <span className="badge badge-pill badge-design">Web Design</span><span className="badge badge-pill badge-design">UI Design</span><span className="badge badge-pill badge-design">Node Js</span><span className="badge badge-pill badge-design">Javascript</span>
                      </div>
                      <div className="card-footer">
                        <div className="customer-info">
                          <ul className="d-flex justify-content-between">
                            <li>
                              <div className="slot">
                                <p>Location</p>
                                <h5><i className="fas fa-map-marker-alt" /> London</h5>
                              </div>
                            </li>
                            <li>
                              <div className="slot">
                                <p>Pricing</p>
                                <h5>$40 / Hr</h5>
                              </div>
                            </li>
                            <li>
                              <div className="slot">
                                <p>Job Success</p>
                                <h5>95%</h5>
                              </div>
                            </li>
                            <li>
                              <div className="slot">
                                <p>Completed Projects</p>
                                <h5>15</h5>
                              </div>
                            </li>
                          </ul>
                          <a href="#" className="btn btn-block profile-btn">View Profile</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6 col-xl-4">
                    <div className="card widget-profile pat-widget-profile">
                      <div className="card-top">
                        <Link to="/developer-details">
                          <img alt="Card Image" src={Dev_img} className="card-img-top" />
                        </Link>
                        <div className="dev-text d-flex justify-content-between">
                          <div className="left"><img alt="Image" src={Flags_de} height={16} /> Germany</div>
                          <div className="right bg-grey"><i className="fas fa-star" /></div>
                        </div>
                        <div className="dev-user">
                          <img src={Developer_01} alt="" className="img-fluid" />
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="pro-widget-content">
                          <div className="profile-info-widget">
                            <div className="profile-det-info">
                              <h3><Link to="/developer-details">David Peterson</Link></h3>
                              <div className="customer-details">
                                <h5>iOS Expert + Node Dev</h5>
                                <div className="rating">
                                  <span className="average-rating">4.6</span>
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bootstrap-tags">
                        <span className="badge badge-pill badge-design">Web Design</span><span className="badge badge-pill badge-design">UI Design</span><span className="badge badge-pill badge-design">Node Js</span><span className="badge badge-pill badge-design">Javascript</span>
                      </div>
                      <div className="card-footer">
                        <div className="customer-info">
                          <ul className="d-flex justify-content-between">
                            <li>
                              <div className="slot">
                                <p>Location</p>
                                <h5><i className="fas fa-map-marker-alt" /> London</h5>
                              </div>
                            </li>
                            <li>
                              <div className="slot">
                                <p>Pricing</p>
                                <h5>$40 / Hr</h5>
                              </div>
                            </li>
                            <li>
                              <div className="slot">
                                <p>Job Success</p>
                                <h5>95%</h5>
                              </div>
                            </li>
                            <li>
                              <div className="slot">
                                <p>Completed Projects</p>
                                <h5>15</h5>
                              </div>
                            </li>
                          </ul>
                          <a href="#" className="btn btn-block profile-btn">View Profile</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6 col-xl-4">
                    <div className="card widget-profile pat-widget-profile">
                      <div className="card-top">
                        <Link to="/developer-details">
                          <img alt="Card Image" src={Dev_img} className="card-img-top" />
                        </Link>
                        <div className="dev-text d-flex justify-content-between">
                          <div className="left"><img alt="Image" src={Flags_pl} height={16} /> poland</div>
                          <div className="right bg-grey"><i className="fas fa-star" /></div>
                        </div>
                        <div className="bg-none dev-user">
                          <img src={Profile} alt="" className="img-fluid" />
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="pro-widget-content">
                          <div className="profile-info-widget">
                            <div className="profile-det-info">
                              <h3><Link to="/developer-details">Marcin Kowalski </Link></h3>
                              <div className="customer-details">
                                <h5>Front-End Developer</h5>
                                <div className="rating">
                                  <span className="vote">Minimum 3 Votes Required</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bootstrap-tags">
                        <span className="badge badge-pill badge-design">Web Design</span><span className="badge badge-pill badge-design">UI Design</span><span className="badge badge-pill badge-design">Node Js</span><span className="badge badge-pill badge-design">Javascript</span>
                      </div>
                      <div className="card-footer">
                        <div className="customer-info">
                          <ul className="d-flex justify-content-between">
                            <li>
                              <div className="slot">
                                <p>Location</p>
                                <h5><i className="fas fa-map-marker-alt" /> London</h5>
                              </div>
                            </li>
                            <li>
                              <div className="slot">
                                <p>Pricing</p>
                                <h5>$40 / Hr</h5>
                              </div>
                            </li>
                            <li>
                              <div className="slot">
                                <p>Job Success</p>
                                <h5>95%</h5>
                              </div>
                            </li>
                            <li>
                              <div className="slot">
                                <p>Completed Projects</p>
                                <h5>15</h5>
                              </div>
                            </li>
                          </ul>
                          <a href="#" className="btn btn-block profile-btn">View Profile</a>
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
}
export default Search;