import React, { Component } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
// Import Images
import { Dev_img,Flags_en,Flags_de,Company_img,Company_img_01 } from "../imagepath";

class SearchProject extends Component {
   
    render() {
        
        return (
            <>
             {/* Breadcrumb */}
        <div className="breadcrumb-bar">
          <div className="container">
            <div className="row align-items-center inner-banner">
              <div className="col-md-12 col-12 text-center">
                <h2 className="breadcrumb-title">PROJECTS</h2>
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page"> PROJECTS</li>
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
                        <select className="form-control select">
                          <option>Select Category</option>
                          <option>Developer</option>
                          <option>UI Developer</option>
                        </select>
                      </div>
                    </div>
                    <div className="filter-widget">
                      <h4>Location</h4>
                      <div className="form-group">
                        <select className="form-control select">
                          <option>Country, City, Zipcode</option>
                          <option>UK</option>
                          <option>London</option>
                        </select>
                      </div>
                    </div>
                    <div className="filter-widget">
                      <h4>Completed Projects</h4>
                      <div className="form-group">
                        <select className="form-control select">
                          <option>Select Projects</option>
                          <option>Node Projects</option>
                          <option>UI Projects</option>
                        </select>
                      </div>
                    </div>
                    <div className="filter-widget">
                      <h4>Pricing Type</h4>
                      <div className="form-group">
                        <select className="form-control select">
                          <option>Hourly Rate</option>
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
                      {/* <div id="slider-range" /> */}
                      <Nouislider range={{ min: 0, max: 50 }} start={[15, 22]} connect />
                      {/* <div className="row slider-labels">
                        <div className="col-xs-12 caption">
                          <span id="slider-range-value1" /> - <span id="slider-range-value2" />
                        </div>
                      </div> */}
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
                        <input type="text" className="form-control" placeholder="Enter Keywords" />
                      </div>
                    </div>
                    <div className="filter-widget">
                      <h4>Currency</h4>
                      <div className="form-group">
                        <select className="form-control select">
                          <option>USD</option>
                          <option>Euro</option>
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
                <div className="row align-items-center bg-white result">
                  <div className="col-md-6 col-12">
                    <h4>Found <span>455</span> Results</h4>
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
                  <span className="badge badge-pill badge-skills">UI/UX Developer <span data-role="remove" />
                  </span> <span className="badge badge-pill badge-skills">Germany <span data-role="remove" />
                  </span> <span className="badge badge-pill badge-skills">5 <span data-role="remove" /></span>
                  <span className="badge badge-pill badge-skills">Hourly <span data-role="remove" /></span>
                  <span className="badge badge-pill badge-skills">0-1 years <span data-role="remove" /></span>
                  <span className="badge badge-pill badge-skills">5-22 <span data-role="remove" /></span>
                  <span className="badge badge-pill badge-skills">USD <span data-role="remove" /></span>
                </div>
                <div className="row">
                  <div className="col-md-6 col-lg-12 col-xl-6">
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
                            <div className="d-flex justify-content-between">
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
                  <div className="col-md-6 col-lg-12 col-xl-6">
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
                              <h4><Link to="/project-details">Website Designer Required For Directory Theme</Link></h4>
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
                            <div className="d-flex justify-content-between">
                              <span className="badge badge-pill badge-design">After Effects</span>
                              <span className="badge badge-pill badge-design">Illustrator</span>
                              <span className="badge badge-pill badge-design">HTML</span>
                              <span className="badge badge-pill badge-design">Whiteboard</span>
                            </div>	
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-12 col-xl-6">
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
                            <div className="d-flex justify-content-between">
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
                  <div className="col-md-6 col-lg-12 col-xl-6">
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
                              <h4><Link to="/project-details">Website Designer Required For Directory Theme</Link></h4>
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
                            <div className="list-details">
                              <span className="badge badge-pill badge-design">After Effects</span><span className="badge badge-pill badge-design">Illustrator</span><span className="badge badge-pill badge-design">HTML</span><span className="badge badge-pill badge-design">Whiteboard</span>
                            </div>	
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-12 col-xl-6">
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
                          <ul className="d-flex justify-content-between">
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
                            <div className="d-flex justify-content-between">
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
        </div>
        {/* /Page Content */}
            </>
         )
    }
}
export default SearchProject;