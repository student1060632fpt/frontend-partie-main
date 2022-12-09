import React from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
// Import Images
import { Avatar_1,Avatar_2,Avatar_3,Avatar_4,Avatar_5,Avatar_6,Avatar_7,Avatar_8,Avatar_9,
    Avatar_10,Avatar_11,Avatar_12 } from "../../imagepath";

const Developer = (props) => {  
   
    return (
        <>
  {/* Breadcrumb */}
  <div className="breadcrumb-bar">
    <div className="container">
      <div className="row align-items-center inner-banner">
        <div className="col-md-12 col-12 text-center">
          <h2 className="breadcrumb-title">Developers</h2>
          <nav aria-label="breadcrumb" className="page-breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/index">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Developers
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
        <div className="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar">
            <StickyBox offsetTop={20} offsetBottom={20}>
                {/* Search Filter */}
                <div className="card search-filter">
                    <div className="card-header d-flex justify-content-between">
                    <h4 className="card-title mb-0">FILTERS</h4>
                    <a href="">Clear All</a>
                    </div>
                    <div className="card-body">
                    <div className="filter-widget">
                        <h4>Keywords</h4>
                        <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Keywords"
                        />
                        </div>
                    </div>
                    <div className="filter-widget">
                        <h4>Location</h4>
                        <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Location"
                        />
                        </div>
                    </div>
                    <div className="filter-widget">
                        <h4>Category</h4>
                        <div className="form-group">
                        <select className="form-control select">
                            <option>Select Category</option>
                            <option>Developer</option>
                            <option>UI Developer</option>
                            <option>React Developer</option>
                            <option>.Net Developer</option>
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
                        <span className="badge badge-pill badge-skill">
                            + Web Design
                        </span>
                        <span className="badge badge-pill badge-skill">
                            + UI Design
                        </span>
                        <span className="badge badge-pill badge-skill">
                            + Node Js
                        </span>
                        <span className="badge badge-pill badge-skill">
                            + Angular
                        </span>
                        <span className="badge badge-pill badge-skill">
                            + Wordpress
                        </span>
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
                            <span className="checkmark" /> Full Time
                        </label>
                        </div>
                    </div>
                    <div className="filter-widget">
                        <h4>Experience</h4>
                        <div>
                        <label className="custom_check">
                            <input type="checkbox" name="select_specialist" />
                            <span className="checkmark" /> 0-1 years
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
                            <span className="checkmark" /> 5-8 years
                        </label>
                        </div>
                        <div>
                        <label className="custom_check">
                            <input type="checkbox" name="select_exp" />
                            <span className="checkmark" /> 9-12 years
                        </label>
                        </div>
                        <div>
                        <label className="custom_check">
                            <input type="checkbox" name="select_exp" />
                            <span className="checkmark" /> Mastered
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
                        {/* <Nouislider range={{ min: 0, max: 100 }} start={[20, 80]} connect /> */}
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
                    <div className="filter-widget">
                        <h4>Profile type</h4>
                        <div className="form-group">
                        <select className="form-control select">
                            <option>Individual</option>
                            <option>Individual</option>
                            <option>Individual</option>
                        </select>
                        </div>
                    </div>
                    <div className="filter-widget">
                        <h4>Reviews</h4>
                        <div>
                        <label className="custom_check">
                            <input type="checkbox" name="pro_ratings" />
                            <span className="checkmark" />
                            <span className="rating">
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <span className="average-rating">(5)</span>
                            </span>
                        </label>
                        </div>
                        <div>
                        <label className="custom_check">
                            <input type="checkbox" name="pro_ratings" />
                            <span className="checkmark" />
                            <span className="rating">
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="far fa-star" />
                            <span className="average-rating">(4)</span>
                            </span>
                        </label>
                        </div>
                        <div>
                        <label className="custom_check">
                            <input type="checkbox" name="pro_ratings" />
                            <span className="checkmark" />
                            <span className="rating">
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="far fa-star" />
                            <i className="far fa-star" />
                            <span className="average-rating">(6)</span>
                            </span>
                        </label>
                        </div>
                        <div>
                        <label className="custom_check">
                            <input type="checkbox" name="pro_ratings" />
                            <span className="checkmark" />
                            <span className="rating">
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="far fa-star" />
                            <i className="far fa-star" />
                            <i className="far fa-star" />
                            <span className="average-rating">(7)</span>
                            </span>
                        </label>
                        </div>
                        <div>
                        <label className="custom_check">
                            <input type="checkbox" name="pro_ratings" />
                            <span className="checkmark" />
                            <span className="rating">
                            <i className="fas fa-star filled" />
                            <i className="far fa-star" />
                            <i className="far fa-star" />
                            <i className="far fa-star" />
                            <i className="far fa-star" />
                            <span className="average-rating">(8)</span>
                            </span>
                        </label>
                        </div>
                    </div>
                    <div className="btn-search">
                        <button type="button" className="btn btn-block">
                        Search
                        </button>
                    </div>
                    </div>
                </div>
                {/* /Search Filter */}
            </StickyBox>
        </div>
        <div className="col-md-12 col-lg-8 col-xl-9">
          <div className="sort-tab">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                <div className="d-flex align-items-center">
                  <div className="freelance-view">
                    <h4>Showing 1 - 12 of 455</h4>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                <div className="d-flex justify-content-sm-end">
                  <div className="sort-by">
                    <select className="custom-select form-select">
                      <option>Relevance</option>
                      <option>Rating</option>
                      <option>Popular</option>
                      <option>Latest</option>
                      <option>Free</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bootstrap-tags text-start pl-0">
            <span className="badge badge-pill badge-skills">
              UI/UX Developer{" "}
              <span className="tag-close" data-role="remove">
                <i className="fas fa-times" />
              </span>
            </span>
            <span className="badge badge-pill badge-skills">
              Germany{" "}
              <span className="tag-close" data-role="remove">
                <i className="fas fa-times" />
              </span>
            </span>
            <span className="badge badge-pill badge-skills">
              Hourly{" "}
              <span className="tag-close" data-role="remove">
                <i className="fas fa-times" />
              </span>
            </span>
            <span className="badge badge-pill badge-skills">
              0-1 years{" "}
              <span className="tag-close" data-role="remove">
                <i className="fas fa-times" />
              </span>
            </span>
            <span className="badge badge-pill badge-skills">
              USD{" "}
              <span className="tag-close" data-role="remove">
                <i className="fas fa-times" />
              </span>
            </span>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-4">
              <div className="freelance-widget">
                <div className="freelance-content">
                  <a
                    data-bs-toggle="modal"
                    href="#rating"
                    className="favourite"
                  >
                    <i className="fas fa-star" />
                  </a>
                  <div className="freelance-img">
                    <a href="#">
                      <img
                        src={Avatar_1}
                        alt="User Image"
                      />
                      <span className="verified">
                        <i className="fas fa-check-circle" />
                      </span>
                    </a>
                  </div>
                  <div className="freelance-info">
                    <h3>
                      <a href="#">George Wells</a>
                    </h3>
                    <div className="freelance-specific">UI/UX Designer</div>
                    <div className="freelance-location">
                      <i className="fas fa-map-marker-alt me-1" />
                      Alabama, USA
                    </div>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span className="average-rating">4.7 (32)</span>
                    </div>
                    <div className="freelance-tags">
                      <a href="">
                        <span className="badge badge-pill badge-design">
                          Web Design
                        </span>
                      </a>
                      <a href="">
                        <span className="badge badge-pill badge-design">
                          UI Design
                        </span>
                      </a>
                      <a href="">
                        <span className="badge badge-pill badge-design">
                          Node Js
                        </span>
                      </a>
                    </div>
                    <div className="freelancers-price">$25 Hourly</div>
                  </div>
                </div>
                <div className="cart-hover">
                  <Link
                    to="/developer-details"
                    className="btn-cart"
                    tabIndex={-1}
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-4">
              <div className="freelance-widget">
                <div className="freelance-content">
                  <a
                    data-bs-toggle="modal"
                    href="#rating"
                    className="favourite favourited"
                  >
                    <i className="fas fa-star" />
                  </a>
                  <div className="freelance-img">
                    <a href="#">
                      <img
                        src={Avatar_2}
                        alt="User Image"
                      />
                      <span className="verified">
                        <i className="fas fa-check-circle" />
                      </span>
                    </a>
                  </div>
                  <div className="freelance-info">
                    <h3>
                      <a href="#">Timothy Smith</a>
                    </h3>
                    <div className="freelance-specific">PHP Developer</div>
                    <div className="freelance-location">
                      <i className="fas fa-map-marker-alt me-1" />
                      Illinois, USA
                    </div>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span className="average-rating">4.8 (55)</span>
                    </div>
                    <div className="freelance-tags">
                      <a href="">
                        <span className="badge badge-pill badge-design">
                          Web Design
                        </span>
                      </a>
                      <a href="">
                        <span className="badge badge-pill badge-design">
                          UI Design
                        </span>
                      </a>
                      <a href="">
                        <span className="badge badge-pill badge-design">
                          Node Js
                        </span>
                      </a>
                    </div>
                    <div className="freelancers-price">$21 Hourly</div>
                  </div>
                </div>
                <div className="cart-hover">
                  <Link
                    to="/developer-details"
                    className="btn-cart"
                    tabIndex={-1}
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-4">
              <div className="freelance-widget">
                <div className="freelance-content">
                  <a
                    data-bs-toggle="modal"
                    href="#rating"
                    className="favourite"
                  >
                    <i className="fas fa-star" />
                  </a>
                  <div className="freelance-img">
                    <a href="#">
                      <img
                        src={Avatar_3}
                        alt="User Image"
                      />
                      <span className="verified">
                        <i className="fas fa-check-circle" />
                      </span>
                    </a>
                  </div>
                  <div className="freelance-info">
                    <h3>
                      <a href="#">Janet Paden</a>
                    </h3>
                    <div className="freelance-specific">Graphic Designer</div>
                    <div className="freelance-location">
                      <i className="fas fa-map-marker-alt me-1" />
                      New York, USA
                    </div>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span className="average-rating">4.1 (30)</span>
                    </div>
                    <div className="freelance-tags">
                      <a href="">
                        <span className="badge badge-pill badge-design">
                          Web Design
                        </span>
                      </a>
                      <a href="">
                        <span className="badge badge-pill badge-design">
                          UI Design
                        </span>
                      </a>
                      <a href="">
                        <span className="badge badge-pill badge-design">
                          Node Js
                        </span>
                      </a>
                    </div>
                    <div className="freelancers-price">Free</div>
                  </div>
                </div>
                <div className="cart-hover">
                  <Link
                    to="/developer-details"
                    className="btn-cart"
                    tabIndex={-1}
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-4">
              <div className="freelance-widget">
                <div className="freelance-content">
                  <a
                    data-bs-toggle="modal"
                    href="#rating"
                    className="favourite"
                  >
                    <i className="fas fa-star" />
                  </a>
                  <div className="freelance-img">
                    <a href="#">
                      <img
                        src={Avatar_4}
                        alt="User Image"
                      />
                      <span className="verified">
                        <i className="fas fa-check-circle" />
                      </span>
                    </a>
                  </div>
                  <div className="freelance-info">
                    <h3>
                      <a href="#">James Douglas</a>
                    </h3>
                    <div className="freelance-specific">iOS Developer</div>
                    <div className="freelance-location">
                      <i className="fas fa-map-marker-alt me-1" />
                      Florida, USA
                    </div>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <span className="average-rating">3.2 (22)</span>
                    </div>
                    <div className="freelance-tags">
                      <a href="">
                        <span className="badge badge-pill badge-design">
                          Web Design
                        </span>
                      </a>
                      <a href="">
                        <span className="badge badge-pill badge-design">
                          UI Design
                        </span>
                      </a>
                      <a href="">
                        <span className="badge badge-pill badge-design">
                          Node Js
                        </span>
                      </a>
                    </div>
                    <div className="freelancers-price">Free</div>
                  </div>
                </div>
                <div className="cart-hover">
                  <Link
                    to="/developer-details"
                    className="btn-cart"
                    tabIndex={-1}
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-4">
              <div className="freelance-widget">
                <div className="freelance-content">
                  <a
                    data-bs-toggle="modal"
                    href="#rating"
                    className="favourite"
                  >
                    <i className="fas fa-star" />
                  </a>
                  <div className="freelance-img">
                    <a href="#">
                      <img
                        src={Avatar_5}
                        alt="User Image"
                      />
                      <span className="verified">
                        <i className="fas fa-check-circle" />
                      </span>
                    </a>
                  </div>
                  <div className="freelance-info">
                    <h3>
                      <a href="#">Floyd Lewis</a>
                    </h3>
                    <div className="freelance-specific">SEO Developer</div>
                    <div className="freelance-location">
                      <i className="fas fa-map-marker-alt me-1" />
                      Texas, USA
                    </div>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span className="average-rating">4.9 (40)</span>
                    </div>
                    <div className="freelance-tags">
                      <a href="">
                        <span className="badge badge-pill badge-design">
                          Web Design
                        </span>
                      </a>
                      <a href="">
                        <span className="badge badge-pill badge-design">
                          UI Design
                        </span>
                      </a>
                      <a href="">
                        <span className="badge badge-pill badge-design">
                          Node Js
                        </span>
                      </a>
                    </div>
                    <div className="freelancers-price">$30 Hourly</div>
                  </div>
                </div>
                <div className="cart-hover">
                  <Link
                    to="/developer-details"
                    className="btn-cart"
                    tabIndex={-1}
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-4">
              <div className="freelance-widget">
                <div className="freelance-content">
                  <a
                    data-bs-toggle="modal"
                    href="#rating"
                    className="favourite"
                  >
                    <i className="fas fa-star" />
                  </a>
                  <div className="freelance-img">
                    <a href="#">
                      <img
                        src={Avatar_6}
                        alt="User Image"
                      />
                      <span className="verified">
                        <i className="fas fa-check-circle" />
                      </span>
                    </a>
                  </div>
                  <div className="freelance-info">
                    <h3>
                      <a href="#">Jacqueline Daye</a>
                    </h3>
                    <div className="freelance-specific">SM Developer</div>
                    <div className="freelance-location">
                      <i className="fas fa-map-marker-alt me-1" />
                      California, USA
                    </div>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span className="average-rating">4.3 (35)</span>
                    </div>
                    <div className="freelance-tags">
                      <a href="">
                        <span className="badge badge-pill badge-design">
                          Web Design
                        </span>
                      </a>
                      <a href="">
                        <span className="badge badge-pill badge-design">
                          UI Design
                        </span>
                      </a>
                      <a href="">
                        <span className="badge badge-pill badge-design">
                          Node Js
                        </span>
                      </a>
                    </div>
                    <div className="freelancers-price">$12 Hourly</div>
                  </div>
                </div>
                <div className="cart-hover">
                  <Link
                    to="/developer-details"
                    className="btn-cart"
                    tabIndex={-1}
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-4">
              <div className="freelance-widget">
                <div className="freelance-content">
                  <a
                    data-bs-toggle="modal"
                    href="#rating"
                    className="favourite"
                  >
                    <i className="fas fa-star" />
                  </a>
                  <div className="freelance-img">
                    <a href="#">
                      <img
                        src={Avatar_7}
                        alt="User Image"
                      />
                      <span className="verified">
                        <i className="fas fa-check-circle" />
                      </span>
                    </a>
                  </div>
                  <div className="freelance-info">
                    <h3>
                      <a href="#">Crystal Kemper</a>
                    </h3>
                    <div className="freelance-specific">Network Engineer</div>
                    <div className="freelance-location">
                      <i className="fas fa-map-marker-alt me-1" />
                      Maryland, USA
                    </div>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <span className="average-rating">3.5 (28)</span>
                    </div>
                    <div className="freelance-tags">
                      <a href="">
                        <span className="badge badge-pill badge-design">
                          Web Design
                        </span>
                      </a>
                      <a href="">
                        <span className="badge badge-pill badge-design">
                          UI Design
                        </span>
                      </a>
                      <a href="">
                        <span className="badge badge-pill badge-design">
                          Node Js
                        </span>
                      </a>
                    </div>
                    <div className="freelancers-price">$20 Hourly</div>
                  </div>
                </div>
                <div className="cart-hover">
                  <Link
                    to="/developer-details"
                    className="btn-cart"
                    tabIndex={-1}
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-4">
              <div className="freelance-widget">
                <div className="freelance-content">
                  <a
                    data-bs-toggle="modal"
                    href="#rating"
                    className="favourite"
                  >
                    <i className="fas fa-star" />
                  </a>
                  <div className="freelance-img">
                    <a href="#">
                      <img
                        src={Avatar_8}
                        alt="User Image"
                      />
                      <span className="verified">
                        <i className="fas fa-check-circle" />
                      </span>
                    </a>
                  </div>
                  <div className="freelance-info">
                    <h3>
                      <a href="#">Tony Ingle</a>
                    </h3>
                    <div className="freelance-specific">Business Analyst</div>
                    <div className="freelance-location">
                      <i className="fas fa-map-marker-alt me-1" />
                      Missouri, USA
                    </div>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <span className="average-rating">2.1 (15)</span>
                    </div>
                    <div className="freelance-tags">
                      <a href="">
                        <span className="badge badge-pill badge-design">
                          Web Design
                        </span>
                      </a>
                      <a href="">
                        <span className="badge badge-pill badge-design">
                          UI Design
                        </span>
                      </a>
                      <a href="">
                        <span className="badge badge-pill badge-design">
                          Node Js
                        </span>
                      </a>
                    </div>
                    <div className="freelancers-price">Free</div>
                  </div>
                </div>
                <div className="cart-hover">
                  <Link
                    to="/developer-details"
                    className="btn-cart"
                    tabIndex={-1}
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-4">
              <div className="freelance-widget">
                <div className="freelance-content">
                  <a
                    data-bs-toggle="modal"
                    href="#rating"
                    className="favourite"
                  >
                    <i className="fas fa-star" />
                  </a>
                  <div className="freelance-img">
                    <a href="#">
                      <img
                        src={Avatar_9}
                        alt="User Image"
                      />
                      <span className="verified">
                        <i className="fas fa-check-circle" />
                      </span>
                    </a>
                  </div>
                  <div className="freelance-info">
                    <h3>
                      <a href="#">Kathleen Kaiser</a>
                    </h3>
                    <div className="freelance-specific">IT Project Manager</div>
                    <div className="freelance-location">
                      <i className="fas fa-map-marker-alt me-1" />
                      Kansas, USA
                    </div>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span className="average-rating">4.5 (36)</span>
                    </div>
                    <div className="freelance-tags">
                      <a href="">
                        <span className="badge badge-pill badge-design">
                          Web Design
                        </span>
                      </a>
                      <a href="">
                        <span className="badge badge-pill badge-design">
                          UI Design
                        </span>
                      </a>
                      <a href="">
                        <span className="badge badge-pill badge-design">
                          Node Js
                        </span>
                      </a>
                    </div>
                    <div className="freelancers-price">$25 Hourly</div>
                  </div>
                </div>
                <div className="cart-hover">
                  <Link
                    to="/developer-details"
                    className="btn-cart"
                    tabIndex={-1}
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-4">
              <div className="freelance-widget">
                <div className="freelance-content">
                  <a
                    data-bs-toggle="modal"
                    href="#rating"
                    className="favourite"
                  >
                    <i className="fas fa-star" />
                  </a>
                  <div className="freelance-img">
                    <a href="#">
                      <img
                        src={Avatar_10}
                        alt="User Image"
                      />
                      <span className="verified">
                        <i className="fas fa-check-circle" />
                      </span>
                    </a>
                  </div>
                  <div className="freelance-info">
                    <h3>
                      <a href="#">Veronica Cheek</a>
                    </h3>
                    <div className="freelance-specific">Software Architect</div>
                    <div className="freelance-location">
                      <i className="fas fa-map-marker-alt me-1" />
                      Vermont, USA
                    </div>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <span className="average-rating">2.3 (20)</span>
                    </div>
                    <div className="freelance-tags">
                      <a href="">
                        <span className="badge badge-pill badge-design">
                          Web Design
                        </span>
                      </a>
                      <a href="">
                        <span className="badge badge-pill badge-design">
                          UI Design
                        </span>
                      </a>
                      <a href="">
                        <span className="badge badge-pill badge-design">
                          Node Js
                        </span>
                      </a>
                    </div>
                    <div className="freelancers-price">$26 Hourly</div>
                  </div>
                </div>
                <div className="cart-hover">
                  <Link
                    to="/developer-details"
                    className="btn-cart"
                    tabIndex={-1}
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-4">
              <div className="freelance-widget">
                <div className="freelance-content">
                  <a
                    data-bs-toggle="modal"
                    href="#rating"
                    className="favourite"
                  >
                    <i className="fas fa-star" />
                  </a>
                  <div className="freelance-img">
                    <a href="#">
                      <img
                        src={Avatar_11}
                        alt="User Image"
                      />
                      <span className="verified">
                        <i className="fas fa-check-circle" />
                      </span>
                    </a>
                  </div>
                  <div className="freelance-info">
                    <h3>
                      <a href="#">Andrew Glover</a>
                    </h3>
                    <div className="freelance-specific">Software Developer</div>
                    <div className="freelance-location">
                      <i className="fas fa-map-marker-alt me-1" />
                      Virginia, USA
                    </div>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span className="average-rating">5.0 (4)</span>
                    </div>
                    <div className="freelance-tags">
                      <a href="">
                        <span className="badge badge-pill badge-design">
                          Web Design
                        </span>
                      </a>
                      <a href="">
                        <span className="badge badge-pill badge-design">
                          UI Design
                        </span>
                      </a>
                      <a href="">
                        <span className="badge badge-pill badge-design">
                          Node Js
                        </span>
                      </a>
                    </div>
                    <div className="freelancers-price">$8 Hourly</div>
                  </div>
                </div>
                <div className="cart-hover">
                  <Link
                    to="/developer-details"
                    className="btn-cart"
                    tabIndex={-1}
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-4">
              <div className="freelance-widget">
                <div className="freelance-content">
                  <a
                    data-bs-toggle="modal"
                    href="#rating"
                    className="favourite"
                  >
                    <i className="fas fa-star" />
                  </a>
                  <div className="freelance-img">
                    <a href="#">
                      <img
                        src={Avatar_12}
                        alt="User Image"
                      />
                      <span className="verified">
                        <i className="fas fa-check-circle" />
                      </span>
                    </a>
                  </div>
                  <div className="freelance-info">
                    <h3>
                      <a href="#">Mickey Bernier</a>
                    </h3>
                    <div className="freelance-specific">QA Engineer</div>
                    <div className="freelance-location">
                      <i className="fas fa-map-marker-alt me-1" />
                      Colorado, USA
                    </div>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span className="average-rating">5.0 (4)</span>
                    </div>
                    <div className="freelance-tags">
                      <a href="">
                        <span className="badge badge-pill badge-design">
                          Web Design
                        </span>
                      </a>
                      <a href="">
                        <span className="badge badge-pill badge-design">
                          UI Design
                        </span>
                      </a>
                      <a href="">
                        <span className="badge badge-pill badge-design">
                          Node Js
                        </span>
                      </a>
                    </div>
                    <div className="freelancers-price">Free</div>
                  </div>
                </div>
                <div className="cart-hover">
                  <Link
                    to="/developer-details"
                    className="btn-cart"
                    tabIndex={-1}
                  >
                    View Profile
                  </Link>
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
  <div className="modal fade" id="rating">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header d-block b-0 pb-0">
          <span className="modal-close float-end">
            <a href="#" data-bs-dismiss="modal" aria-label="Close">
              <i className="far fa-times-circle orange-text" />
            </a>
          </span>
        </div>
        <div className="modal-body">
          <form >
            <div className="modal-info">
              <div className="text-center pt-0 mb-5">
                <h3>Please login to Favourite Freelancer</h3>
              </div>
              <div className="submit-section text-center">
                <button
                  data-bs-dismiss="modal"
                  className="btn btn-primary black-btn click-btn"
                >
                  Cancel
                </button>&nbsp;
                <button type="submit" className="btn btn-primary click-btn">
                  Submit
                </button>
              </div>
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
export default Developer;