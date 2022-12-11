import React from "react";
import { Link } from "react-router-dom";
// Import Images
import { company_img1 } from "../../../imagepath";
const ShowingAndTagProject = () => {
  return (
    <>
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
                <select className="custom-select">
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
          USA{" "}
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
    </>
  );
};

export default ShowingAndTagProject;
