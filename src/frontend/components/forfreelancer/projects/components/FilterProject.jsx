import React from "react";
import StickyBox from "react-sticky-box";

const FilterProject = () => {
  return (
    <>
      {" "}
      <div className="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar">
        {/* Search Filter */}
        <StickyBox offsetTop={20} offsetBottom={20}>
          <div className="card search-filter">
            <div className="card-header d-flex justify-content-between">
              <h4 className="card-title mb-0">FILTERS</h4>
              <a href="">Clear All</a>
            </div>
            <div className="card-body">
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
                <h4>Completed Jobs</h4>
                <div className="form-group">
                  <select className="form-control select">
                    <option>Select Jobs</option>
                    <option>Node Jobs</option>
                    <option>UI Jobs</option>
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
              </div>
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
                <h4>Currency</h4>
                <div className="form-group">
                  <select className="form-control select">
                    <option>USD</option>
                    <option>Euro</option>
                  </select>
                </div>
              </div>
              <div className="btn-search">
                <button type="button" className="btn btn-block">
                  Search
                </button>
              </div>
            </div>
          </div>
        </StickyBox>
        {/* /Search Filter */}
      </div>
    </>
  );
};

export default FilterProject;
