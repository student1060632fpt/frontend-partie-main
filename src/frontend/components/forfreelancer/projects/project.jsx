import moment from "moment";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// Import Images
// Import Images
import { company_img1,company_img2,company_img3,company_img4,company_img5,company_img6,
    company_img7,company_img8,company_img9,company_img10 } from "../../imagepath";
import FilterProject from "./components/FilterProject";
import ShowingAndTagProject from "./components/ShowingAndTagProject";

const Projects = (props) => {
  const [jobs, setJobs] = useState([]);
  const listImg = [company_img1,company_img2,company_img3,company_img4,company_img5,company_img6,
    company_img7,company_img8,company_img9,company_img10]

  const { contract_id, wallet, isSignedIn } = useSelector(
    (state) => state.wallet
  );
  const fetJobs = async () => {
    try {
      console.log({contract_id});
      if(!contract_id){
        return
      }
      let data = await contract_id.get("stakingContractId").get_list_jobs();
      setJobs(Object.entries(data));
      console.log("jobs: ", Object.entries(data));
      console.log("user address", wallet.accountId);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetJobs();
  }, [isSignedIn]);
  const  daysRemaining = (time)=> {
    var eventdate = moment.unix(time);
    var todaysdate = moment();
    return eventdate.diff(todaysdate, 'days');
}
  const renderListJob = () => {
    return jobs.map((jobItem, index) => {
      console.log("jobItem[0]",jobItem[0]);
      return (
        <div className="col-md-6 col-lg-12 col-xl-6" key={index}>
          <div className="freelance-widget widget-author">
            <div className="freelance-content">
              <a data-bs-toggle="modal" href="#rating" className="favourite">
                <i className="fas fa-star" />
              </a>
              <div className="author-heading">
                <div className="profile-img">
                  <a href="#">
                    <img src={listImg[index]} alt="author" />
                  </a>
                </div>
                <div className="profile-name">
                  <div className="author-location">
                    {jobItem[1].creator_id} 
                    <i className="fas fa-check-circle text-success verified" />
                  </div>
                </div>
                <div className="freelance-info">
                  <h3>
                    <a href="#">UI/UX Developer</a>
                  </h3>
                  <div className="freelance-location mb-1">
                    <i className="fas fa-clock" /> Posted Just Now
                  </div>
                  <div className="freelance-location">
                    <i className="fas fa-map-marker-alt me-1" />
                    Georgia, USA
                  </div>
                </div>
                <div className="freelance-tags">
                  <a href="">
                    <span className="badge badge-pill badge-design">
                      After Effects
                    </span>
                  </a>
                  <a href="">
                    <span className="badge badge-pill badge-design">
                      Illustrator
                    </span>
                  </a>
                  <a href="">
                    <span className="badge badge-pill badge-design">HTML</span>
                  </a>
                </div>
                <div className="freelancers-price">
                  {jobItem[1].budget / 10 ** 18} PAT
                </div>
              </div>
              <div className="counter-stats">
                <ul>
                  <li>
                    <h3 className="counter-value"> {daysRemaining(jobItem[1].is_end)} Days Left</h3>
                    <h5>Expiry</h5>
                  </li>
                  <li>
                    <h3 className="counter-value">15</h3>
                    <h5>Proposals</h5>
                  </li>
                  <li>
                    <h3 className="counter-value">
                      <span className="jobtype">Full Time</span>
                    </h3>
                    <h5>Job Type</h5>
                  </li>
                </ul>
              </div>
            </div>
            <div className="cart-hover">
              <Link to={`/project-details/${jobItem[0]}`} className="btn-cart" tabIndex={-1}>
                Bid Now
              </Link>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-bar">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <h2 className="breadcrumb-title">Jobs</h2>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/index">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Jobs
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
          {/* Start Row, out of row is modal only */}
          <div className="row">
            <FilterProject />
            <div className="col-md-12 col-lg-8 col-xl-9">
              <div className="row">
                <ShowingAndTagProject />
                {renderListJob()}
              </div>
            </div>
          </div>
          {/* end Row, out of row is modal only */}
        </div>
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
                <form>
                  <div className="modal-info">
                    <div className="text-center pt-0 mb-5">
                      <h3>Please login to Favourite Project</h3>
                    </div>
                    <div className="submit-section text-center">
                      <a
                        data-bs-dismiss="modal"
                        href="#"
                        className="btn btn-primary black-btn click-btn"
                      >
                        Cancel
                      </a>
                      <button
                        type="submit"
                        className="btn btn-primary click-btn"
                      >
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
      </div>
      {/* /Page Content */}
    </>
  );
};
export default Projects;
