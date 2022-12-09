import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import Select2 from 'react-select2-wrapper';
import 'react-select2-wrapper/css/select2.css';
// Import Images
import {
  logo_two, object_two, project_01, discount,
  Project_06, Project_07, Project_08, Project_09, Project_10, Project_11, Avatar_13, Avatar_14, Avatar_15, Avatar_16, Avatar_17, Avatar_18, Avatar_19, Avatar_20,
  Blog_07, Blog_08, Blog_09, Appstore, Googleplay, feature_icon_01, feature_icon_02
} from "../imagepath";
import AOS from "aos";
import "aos/dist/aos.css";
import HeaderTwo from "../header/headertwo"
import TopReviews from "../home/slider/topreviews"
import config from "config"

const Home2 = () => {

  const options = [
    { id: 1, text: 'Freelancers', },
    { id: 2, text: 'Projects', },
  ];
  //Aos

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true
    });

  }, []);

  useEffect(() => {
    document.body.classList.add("body-two");

    return () => document.body.classList.remove("body-two");
  }, []);

  return (
    <>

      {/* Start Navigation */}
      {/* Header */}
      <HeaderTwo />
      {/* /Header */}
      {/* Home Banner */}
      <section className="section home-banner row-middle home-two">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8 col-lg-7">
              <div className="banner-content aos" data-aos="fade-up">
                <h1>
                  Get the perfect{" "}
                  <span className="orange-text">Developers &amp; Projects</span>{" "}
                  every time
                </h1>
                <p>With the world's #1 Developers marketplace</p>
                <form
                  className="form"
                  action={`${config.publicPath}project`}
                >
                  <div className="form-inner">
                    <div className="input-group">
                      <i className="fas fa-search icon-search" />
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Search here"
                      />
                      <span className="drop-detail">
                        <Select2
                          className="select form-control"
                          data={options}
                          options={{
                            placeholder: 'Projects',
                          }} />
                        {/* <select className="form-control select" name="storeID">
                            <option value="/developer">Freelancers</option>
                            <option value="/project">Projects</option>
                          </select> */}
                      </span>
                      <button className="btn btn-primary sub-btn" type="submit">
                        Search Now
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-4 col-lg-5">
              <div className="banner-img aos" data-aos="fade-up">
                <img
                  src={object_two}
                  className="img-fluid"
                  alt="banner"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Home Banner */}
      {/* Our Feature */}
      <section className="section feature feature-two">
        <div className="feature-position">
          <div className="container">
            <div className="row justify-content-center">
              {/* Feature Item */}
              <div className="col-lg-4 col-md-6">
                <div
                  className="feature-item freelance-count aos"
                  data-aos="fade-up"
                >
                  <div className="feature-group d-flex align-items-center justify-content-center">
                    <div className="feature-icon">
                      <img
                        src={feature_icon_01}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="feature-content">
                      <h3>919,207</h3>
                    </div>
                  </div>
                  <div className="feature-bottom">
                    <p>freelance Developers</p>
                  </div>
                </div>
              </div>
              {/* /Feature Item */}
              {/* Feature Item */}
              <div className="col-lg-4 col-md-6">
                <div className="feature-item feature-bg aos" data-aos="fade-up">
                  <div className="feature-group d-flex align-items-center justify-content-center">
                    <div className="feature-icon">
                      <img
                        src={feature_icon_02}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="feature-content">
                      <h3>25 - 100+</h3>
                    </div>
                  </div>
                  <div className="feature-bottom feature-border">
                    <p>Developers per project</p>
                  </div>
                </div>
              </div>
              {/* /Feature Item */}
              {/* Feature Item */}
              <div className="col-lg-4 col-md-6">
                <div className="feature-item comp-project aos" data-aos="fade-up">
                  <div className="feature-group d-flex align-items-center justify-content-center">
                    <div className="feature-icon">
                      <img
                        src={feature_icon_01}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="feature-content">
                      <h3>388,615</h3>
                    </div>
                  </div>
                  <div className="feature-bottom">
                    <p>completed projects</p>
                  </div>
                </div>
              </div>
              {/* /Feature Item */}
            </div>
          </div>
        </div>
      </section>
      {/* /Our Feature */}
      {/*- Developed Project  */}
      <section className="section develope-project">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 d-flex align-items-center">
              <div className="need-project aos" data-aos="fade-up">
                <h2>
                  I NEED A <span>DEVELOPED</span> PROJECT
                </h2>
                <p>
                  Get the perfect Developed project for your budget from our
                  creative community.
                </p>
                <div className="learn-more">
                  <Link to="/project" className="btn btn-primary">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="pro-ject-img aos" data-aos="fade-up">
                <img src={project_01} alt="" />
                <div className="project-position">
                  <div className="rating">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                  </div>
                  <span>5.0</span>
                  <p>
                    TRUSED BY OVER <br /> 2M+ USERS
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex align-items-center">
              <div className="need-project want-work aos" data-aos="fade-up">
                <h2>
                  I WANT <span>TO Work</span>
                </h2>
                <p>
                  Do you want to earn money, find unlimited clients and build your
                  freelance career?
                </p>
                <div className="learn-more">
                  <Link to="/developer" className="btn btn-primary">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*- /Developed Project  */}
      {/* Projects */}
      <section className="section projects projects-two">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 mx-auto">
              <div
                className="section-header section-header-two text-left aos"
                data-aos="fade-up"
              >
                <h2 className="header-title">
                  Get Inspired
                  <br /> By <span>Development</span> Projects
                </h2>
                <div className="all-see project-all d-flex align-items-center">
                  <Link to="/project" className="btn btn-primary">
                    See All Projects
                  </Link>
                </div>
              </div>
              <div className="section-text aos" data-aos="fade-up">
                <p>High Performing Solutions To Your</p>
              </div>
            </div>
          </div>
          <div className="row">
            {/*- Project Item  */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="project-item aos" data-aos="fade-up">
                <div className="project-img">
                  <Link to="/project">
                    <img
                      src={Project_06}
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="develope-group">
                    <div className="inspired-group d-flex">
                      <h5>
                        <Link to="/project">
                          <i className="fas fa-folder" />
                          ANDROID APPS
                        </Link>
                      </h5>
                      <div className="count-number">
                        <h4>24</h4>
                      </div>
                    </div>
                    <div className="inspired-group d-flex">
                      <h5>
                        <Link to="/project">
                          <i className="fas fa-user-friends" />
                          ANDROID APPS
                        </Link>
                      </h5>
                      <div className="count-number">
                        <h4>30</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*- /Project Item  */}
            {/*- Project Item  */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="project-item aos" data-aos="fade-up">
                <div className="project-img">
                  <Link to="/project">
                    <img
                      src={Project_07}
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="develope-group">
                    <div className="inspired-group d-flex">
                      <h5>
                        <Link to="/project">
                          <i className="fas fa-folder" />
                          LARAVEL
                        </Link>
                      </h5>
                      <div className="count-number">
                        <h4>45</h4>
                      </div>
                    </div>
                    <div className="inspired-group d-flex">
                      <h5>
                        <Link to="/project">
                          <i className="fas fa-user-friends" />
                          DEVELOPERS
                        </Link>
                      </h5>
                      <div className="count-number">
                        <h4>15</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*- /Project Item  */}
            {/*- Project-Item  */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="project-item aos" data-aos="fade-up">
                <div className="project-img">
                  <Link to="/project">
                    <img
                      src={Project_08}
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="develope-group">
                    <div className="inspired-group d-flex">
                      <h5>
                        <Link to="/project">
                          <i className="fas fa-folder" />
                          REACT
                        </Link>
                      </h5>
                      <div className="count-number">
                        <h4>20</h4>
                      </div>
                    </div>
                    <div className="inspired-group d-flex">
                      <h5>
                        <Link to="/project">
                          <i className="fas fa-user-friends" />
                          DEVELOPERS
                        </Link>
                      </h5>
                      <div className="count-number">
                        <h4>12</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*- /Project Item  */}
            {/*- Project Item  */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="project-item aos" data-aos="fade-up">
                <div className="project-img">
                  <Link to="/project">
                    <img
                      src={Project_09}
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="develope-group">
                    <div className="inspired-group d-flex">
                      <h5>
                        <Link to="/project">
                          <i className="fas fa-folder" />
                          GOLANG
                        </Link>
                      </h5>
                      <div className="count-number">
                        <h4>22</h4>
                      </div>
                    </div>
                    <div className="inspired-group d-flex">
                      <h5>
                        <Link to="/project">
                          <i className="fas fa-user-friends" />
                          DEVELOPERS
                        </Link>
                      </h5>
                      <div className="count-number">
                        <h4>10</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*- /Project Item  */}
            {/*- Project Item  */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="project-item aos" data-aos="fade-up">
                <div className="project-img">
                  <Link to="/project">
                    <img
                      src={Project_10}
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="develope-group">
                    <div className="inspired-group d-flex">
                      <h5>
                        <Link to="/project">
                          <i className="fas fa-folder" />
                          .NET
                        </Link>
                      </h5>
                      <div className="count-number">
                        <h4>14</h4>
                      </div>
                    </div>
                    <div className="inspired-group d-flex">
                      <h5>
                        <Link to="/project">
                          <i className="fas fa-user-friends" />
                          DEVELOPERS
                        </Link>
                      </h5>
                      <div className="count-number">
                        <h4>14</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*- /Project Item  */}
            {/*- Project Item  */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="project-item aos" data-aos="fade-up">
                <div className="project-img">
                  <Link to="/project">
                    <img
                      src={Project_11}
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="develope-group">
                    <div className="inspired-group d-flex">
                      <h5>
                        <Link to="/project">
                          <i className="fas fa-folder" />
                          JAVA
                        </Link>
                      </h5>
                      <div className="count-number">
                        <h4>24</h4>
                      </div>
                    </div>
                    <div className="inspired-group d-flex">
                      <h5>
                        <Link to="/project">
                          <i className="fas fa-user-friends" />
                          DEVELOPERS
                        </Link>
                      </h5>
                      <div className="count-number">
                        <h4>21</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*- /Project Item  */}
            {/*- Project Item  */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="project-item aos" data-aos="fade-up">
                <div className="project-img">
                  <Link to="/project">
                    <img
                      src={Project_06}
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="develope-group">
                    <div className="inspired-group d-flex">
                      <h5>
                        <Link to="/project">
                          <i className="fas fa-folder" />
                          ANGULAR
                        </Link>
                      </h5>
                      <div className="count-number">
                        <h4>45</h4>
                      </div>
                    </div>
                    <div className="inspired-group d-flex">
                      <h5>
                        <Link to="/project">
                          <i className="fas fa-user-friends" />
                          DEVELOPERS
                        </Link>
                      </h5>
                      <div className="count-number">
                        <h4>20</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*- /Project Item  */}
            {/*- Project-Item  */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="project-item aos" data-aos="fade-up">
                <div className="project-img">
                  <Link to="/project">
                    <img
                      src={Project_07}
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="develope-group">
                    <div className="inspired-group d-flex">
                      <h5>
                        <Link to="/project">
                          <i className="fas fa-folder" />
                          PYTHON
                        </Link>
                      </h5>
                      <div className="count-number">
                        <h4>35</h4>
                      </div>
                    </div>
                    <div className="inspired-group d-flex">
                      <h5>
                        <Link to="/project">
                          <i className="fas fa-user-friends" />
                          DEVELOPERS
                        </Link>
                      </h5>
                      <div className="count-number">
                        <h4>23</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*- /Project Item  */}
          </div>
        </div>
      </section>
      {/* /Projects */}
      {/* Most Hired Developers */}
      <section className="section projects most-hired">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 mx-auto">
              <div
                className="section-header section-header-two text-left aos"
                data-aos="fade-up"
              >
                <h2 className="header-title">
                  Most Hired <br />
                  <span>Developers</span>
                </h2>
                <div className="all-see develop-all d-flex align-items-center">
                  <Link to="/developer-details" className="btn btn-primary">
                    See All Developers
                  </Link>
                </div>
              </div>
              <div className="section-text aos" data-aos="fade-up">
                <p>Work with talented people at the most affordable price</p>
              </div>
            </div>
          </div>
          <div className="row">
            {/*- Developers Team  */}
            <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
              <div className="project-item group-project aos" data-aos="fade-up">
                <Link to="#rating" className="favourite team-star">
                  <i className="fas fa-star" />
                </Link>
                <div className="project-img">
                  <Link to="/developer-details">
                    <img
                      src={Avatar_13}
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="d-flex justify-content-between align-items-center hour-position">
                  <div className="hour-price">
                    <h5>
                      $30 <span>Hourly</span>
                    </h5>
                  </div>
                  <div className="freelance-info team-group">
                    <h3>
                      <Link to="/developer-details">
                        George Wells <i className="fas fa-check-circle" />
                      </Link>
                    </h3>
                    <div className="freelance-specific">UI/UX Designer</div>
                    <div className="freelance-location">
                      <svg
                        viewBox="0 0 24 24"
                        width={16}
                        height={16}
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="css-i6dzq1"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx={12} cy={10} r={3} />
                      </svg>
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
                  </div>
                </div>
              </div>
            </div>
            {/*- /Developers Team  */}
            {/*- Developers Team  */}
            <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
              <div className="project-item group-project aos" data-aos="fade-up">
                <Link to="#rating" className="favourite team-star">
                  <i className="fas fa-star" />
                </Link>
                <div className="project-img">
                  <Link to="/developer-details">
                    <img
                      src={Avatar_14}
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="d-flex justify-content-between align-items-center hour-position">
                  <div className="hour-price">
                    <h5>
                      $45 <span>Hourly</span>
                    </h5>
                  </div>
                  <div className="freelance-info team-group">
                    <h3>
                      <Link to="/developer-details">
                        Timothy Smith <i className="fas fa-check-circle" />
                      </Link>
                    </h3>
                    <div className="freelance-specific">PHP Developer</div>
                    <div className="freelance-location">
                      <svg
                        viewBox="0 0 24 24"
                        width={16}
                        height={16}
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="css-i6dzq1"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx={12} cy={10} r={3} />
                      </svg>
                      Illinois, USA
                    </div>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star " />
                      <i className="fas fa-star" />
                      <span className="average-rating">4.3 (22)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*- /Developers Team  */}
            {/*- Developers Team  */}
            <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
              <div className="project-item group-project aos" data-aos="fade-up">
                <Link to="#rating" className="favourite team-star">
                  <i className="fas fa-star" />
                </Link>
                <div className="project-img">
                  <Link to="/developer-details">
                    <img
                      src={Avatar_15}
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="d-flex justify-content-between align-items-center hour-position">
                  <div className="hour-price">
                    <h5>
                      $25 <span>Hourly</span>
                    </h5>
                  </div>
                  <div className="freelance-info team-group">
                    <h3>
                      <Link to="/developer-details">
                        Janet Paden <i className="fas fa-check-circle" />
                      </Link>
                    </h3>
                    <div className="freelance-specific">Graphic Designer</div>
                    <div className="freelance-location">
                      <svg
                        viewBox="0 0 24 24"
                        width={16}
                        height={16}
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="css-i6dzq1"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx={12} cy={10} r={3} />
                      </svg>
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
                  </div>
                </div>
              </div>
            </div>
            {/*- /Developers Team  */}
            {/*- Developers Team  */}
            <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
              <div className="project-item group-project aos" data-aos="fade-up">
                <Link to="#rating" className="favourite team-star">
                  <i className="fas fa-star" />
                </Link>
                <div className="project-img">
                  <Link to="/developer-details">
                    <img
                      src={Avatar_16}
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="d-flex justify-content-between align-items-center hour-position">
                  <div className="hour-price">
                    <h5>
                      $30 <span>Hourly</span>
                    </h5>
                  </div>
                  <div className="freelance-info team-group">
                    <h3>
                      <Link to="/developer-details">
                        James Douglas <i className="fas fa-check-circle" />
                      </Link>
                    </h3>
                    <div className="freelance-specific">iOS Developer</div>
                    <div className="freelance-location">
                      <svg
                        viewBox="0 0 24 24"
                        width={16}
                        height={16}
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="css-i6dzq1"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx={12} cy={10} r={3} />
                      </svg>
                      iOS Developer
                    </div>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star " />
                      <i className="fas fa-star" />
                      <span className="average-rating">4.2 (32)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*- /Developers Team  */}
            {/*- Project Item  */}
            <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
              <div className="project-item group-project aos" data-aos="fade-up">
                <Link to="#rating" className="favourite team-star">
                  <i className="fas fa-star" />
                </Link>
                <div className="project-img">
                  <Link to="/developer-details">
                    <img
                      src={Avatar_17}
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="d-flex justify-content-between align-items-center hour-position">
                  <div className="hour-price">
                    <h5>
                      $15 <span>Hourly</span>
                    </h5>
                  </div>
                  <div className="freelance-info team-group">
                    <h3>
                      <Link to="#">
                        Floyd Lewis <i className="fas fa-check-circle" />
                      </Link>
                    </h3>
                    <div className="freelance-specific">SEO Developer</div>
                    <div className="freelance-location">
                      <svg
                        viewBox="0 0 24 24"
                        width={16}
                        height={16}
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="css-i6dzq1"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx={12} cy={10} r={3} />
                      </svg>
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
                  </div>
                </div>
              </div>
            </div>
            {/*- /Developers Team  */}
            {/*- Developers Team  */}
            <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
              <div className="project-item group-project aos" data-aos="fade-up">
                <Link to="#rating" className="favourite team-star">
                  <i className="fas fa-star" />
                </Link>
                <div className="project-img">
                  <Link to="/developer-details">
                    <img
                      src={Avatar_18}
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="d-flex justify-content-between align-items-center hour-position">
                  <div className="hour-price">
                    <h5>
                      $34 <span>Hourly</span>
                    </h5>
                  </div>
                  <div className="freelance-info team-group">
                    <h3>
                      <Link to="/developer-details">
                        Jacqueline Daye <i className="fas fa-check-circle" />
                      </Link>
                    </h3>
                    <div className="freelance-specific">SM Developer</div>
                    <div className="freelance-location">
                      <svg
                        viewBox="0 0 24 24"
                        width={16}
                        height={16}
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="css-i6dzq1"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx={12} cy={10} r={3} />
                      </svg>
                      California, USA
                    </div>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <span className="average-rating">4.9 (34)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*- /Developers Team  */}
            {/*- Developers Team  */}
            <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
              <div className="project-item group-project aos" data-aos="fade-up">
                <Link to="#rating" className="favourite team-star">
                  <i className="fas fa-star" />
                </Link>
                <div className="project-img">
                  <Link to="/developer-details">
                    <img
                      src={Avatar_19}
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="d-flex justify-content-between align-items-center hour-position">
                  <div className="hour-price">
                    <h5>
                      $65 <span>Hourly</span>
                    </h5>
                  </div>
                  <div className="freelance-info team-group">
                    <h3>
                      <Link to="/developer-details">
                        Tony Ingle <i className="fas fa-check-circle" />
                      </Link>
                    </h3>
                    <div className="freelance-specific">Business Analyst</div>
                    <div className="freelance-location">
                      <svg
                        viewBox="0 0 24 24"
                        width={16}
                        height={16}
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="css-i6dzq1"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx={12} cy={10} r={3} />
                      </svg>
                      Missouri, USA
                    </div>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star " />
                      <i className="fas fa-star" />
                      <span className="average-rating">3.7 (22)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*- /Developers Team  */}
            {/*- Developers Team  */}
            <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
              <div className="project-item group-project aos" data-aos="fade-up">
                <Link to="#rating" className="favourite team-star">
                  <i className="fas fa-star" />
                </Link>
                <div className="project-img">
                  <Link to="/developer-details">
                    <img
                      src={Avatar_20}
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="d-flex justify-content-between align-items-center hour-position">
                  <div className="hour-price">
                    <h5>
                      $23 <span>Hourly</span>
                    </h5>
                  </div>
                  <div className="freelance-info team-group">
                    <h3>
                      <Link to="/developer-details">
                        Kathleen Kaiser <i className="fas fa-check-circle" />
                      </Link>
                    </h3>
                    <div className="freelance-specific">IT Project Manager</div>
                    <div className="freelance-location">
                      <svg
                        viewBox="0 0 24 24"
                        width={16}
                        height={16}
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="css-i6dzq1"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx={12} cy={10} r={3} />
                      </svg>
                      Kansas, USA
                    </div>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span className="average-rating">4.7 (32)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*- /Developers Team  */}
          </div>
        </div>
      </section>
      {/* /Most Hired Developer */}
      {/* Review */}
      <TopReviews />
      {/* / Review */}
      {/* News */}
      <section className="section news news-two">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="section-header section-header-two text-left aos"
                data-aos="fade-up"
              >
                <h2 className="header-title">
                  Feature <span>Blog</span>
                </h2>
                <div className="all-see blogs-all d-flex align-items-center">
                  <Link to="/blog-details" className="btn btn-primary">
                    See All Blogs
                  </Link>
                </div>
              </div>
              <div className="section-text aos" data-aos="fade-up">
                <p>High Performing Developers To Your</p>
              </div>
            </div>
          </div>
          <div>
            <div className="row blog-grid-row justify-content-center">
              <div className="col-lg-4 col-md-6 d-flex">
                {/* Blog Post */}
                <div className="blog group-blog aos" data-aos="fade-up">
                  <div className="blog-image">
                    <Link to="/blog-details">
                      <img
                        className="img-fluid"
                        src={Blog_07}
                        alt="Post Image"
                      />
                    </Link>
                  </div>
                  <div className="blog-content">
                    <div className="hour-price">
                      <h5>
                        <i className="far fa-clock" /> 10 Oct 2021
                      </h5>
                    </div>
                    <h3 className="blog-title">
                      <Link to="/blog-details">
                        Your next job starts right here
                      </Link>
                    </h3>
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet, consectetur em adipiscing elit,
                      sed do eiusmod tempor.
                    </p>
                    <div className="all-see more-read">
                      <Link to="/blog-details" className="btn btn-primary">
                        Readmore
                      </Link>
                    </div>
                  </div>
                </div>
                {/* /Blog Post */}
              </div>
              <div className="col-lg-4 col-md-6 d-flex">
                {/* Blog Post */}
                <div className="blog group-blog aos" data-aos="fade-up">
                  <div className="blog-image">
                    <Link to="/blog-details">
                      <img
                        className="img-fluid"
                        src={Blog_08}
                        alt="Post Image"
                      />
                    </Link>
                  </div>
                  <div className="blog-content">
                    <div className="hour-price">
                      <h5>
                        <i className="far fa-clock" /> 30 Jun 2021
                      </h5>
                    </div>
                    <h3 className="blog-title">
                      <Link to="/blog-details">People who completed NAND?</Link>
                    </h3>
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet, consectetur em adipiscing elit,
                      sed do eiusmod tempor.
                    </p>
                    <div className="all-see more-read">
                      <Link to="/blog-details" className="btn btn-primary">
                        Readmore
                      </Link>
                    </div>
                  </div>
                </div>
                {/* /Blog Post */}
              </div>
              <div className="col-lg-4 col-md-6 d-flex">
                {/* Blog Post */}
                <div className="blog group-blog aos" data-aos="fade-up">
                  <div className="blog-image">
                    <Link to="/blog-details">
                      <img
                        className="img-fluid"
                        src={Blog_09}
                        alt="Post Image"
                      />
                    </Link>
                  </div>
                  <div className="blog-content">
                    <div className="hour-price">
                      <h5>
                        <i className="far fa-clock" /> 20 Feb 2021
                      </h5>
                    </div>
                    <h3 className="blog-title">
                      <Link to="/blog-details">
                        Kofejob - How to get job through online?
                      </Link>
                    </h3>
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet, consectetur em adipiscing elit,
                      sed do eiusmod tempor.
                    </p>
                    <div className="all-see more-read">
                      <Link to="/blog-details" className="btn btn-primary">
                        Readmore
                      </Link>
                    </div>
                  </div>
                </div>
                {/* /Blog Post */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* / News */}
      {/* Subscibe */}
      <section className="get-discount">
        <div className="container">
          <div className="discount-group">
            <div className="row">
              <div className="col-lg-8 d-flex align-items-center justify-content-center">
                <div className="head-subscibe aos" data-aos="fade-up">
                  <h2>Subscribe To Get Discounts, Updates &amp; More</h2>
                  <p>Monthly product updates, industry news and more!</p>
                  <div className="banner-content discount-box">
                    <form
                      className="form"
                      name="store"
                      method="post"
                      action="/project"
                    >
                      <div className="form-inner">
                        <div className="input-group all-see">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Enter Email Address"
                          />
                          <button className="btn btn-primary sub-btn" type="submit">
                            Search Now
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="discount-img aos" data-aos="fade-up">
                  <img src={discount} alt="Logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Subscibe */}
      {/* Footer */}
      <footer className="footer footer-two">
        <div className="footer-top aos" data-aos="fade-up">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="logo-footer">
                  <Link to="/index" className="navbar-brand logo">
                    <img
                      src={logo_two}
                      className="img-fluid"
                      alt="Logo"
                    />
                  </Link>
                </div>
                <div className="footer-address">
                  <div className="off-address">
                    <p>New York, USA (HQ)</p>
                    <address className="mb-0">
                      <i className="fas fa-map-marker-alt" />
                      750 Sing Sing Rd, Horseheads, NY, 14845
                    </address>
                    <p>
                      <i className="fas fa-phone-alt" />
                      <Link to="#">
                        <span>469-537-2410</span> (Toll-free)
                      </Link>{" "}
                    </p>
                  </div>
                  <div className="off-address">
                    <p>Sydney, Australia </p>
                    <address className="mb-0">
                      <i className="fas fa-map-marker-alt" />
                      24 Farrar Parade COOROW WA 6515
                    </address>
                    <p>
                      <i className="fas fa-phone-alt" />
                      <Link to="#">
                        <span>(08) 9064 9807</span> (Toll-free)
                      </Link>{" "}
                    </p>
                  </div>
                </div>
                <div className="social-icon one-icon">
                  <ul>
                    <li>
                      <Link to="#" className="icon" target="_blank">
                        <i className="fab fa-instagram" />{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="icon" target="_blank">
                        <i className="fab fa-linkedin-in" />{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="icon" target="_blank">
                        <i className="fab fa-twitter" />{" "}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6">
                <div className="footer-widget footer-menu">
                  <h2 className="footer-title">Useful Links</h2>
                  <ul>
                    <li>
                      <Link to="/about">About Us</Link>
                    </li>
                    <li>
                      <Link to="/blog-list">Blog</Link>
                    </li>
                    <li>
                      <Link to="/index">Login</Link>
                    </li>
                    <li>
                      <Link to="/register">Register</Link>
                    </li>
                    <li>
                      <Link to="/forgot-password">Forgot Password</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6">
                <div className="footer-widget footer-menu">
                  <h2 className="footer-title">Help &amp; Support</h2>
                  <ul>
                    <li>
                      <Link to="/chats">Chat</Link>
                    </li>
                    <li>
                      <Link to="#">Faq</Link>
                    </li>
                    <li>
                      <Link to="/review">Reviews</Link>
                    </li>
                    <li>
                      <Link to="/privacy-policy">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="#">Terms of use</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6">
                <div className="footer-widget footer-menu">
                  <h2 className="footer-title">Other Links</h2>
                  <ul>
                    <li>
                      <Link to="/freelancer-dashboard">Freelancers</Link>
                    </li>
                    <li>
                      <Link to="/freelancer-portfolio">Freelancer Details</Link>
                    </li>
                    <li>
                      <Link to="/project">Project</Link>
                    </li>
                    <li>
                      <Link to="/project-details">Project Details</Link>
                    </li>
                    <li>
                      <Link to="post-/project">Post Project</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget footer-menu">
                  <h2 className="footer-title">Mobile Application</h2>
                  <p>
                    Download our App and get the latest Breaking News Alerts and
                    latest headlines and daily articles near you.
                  </p>
                  <div className="row g-2">
                    <div className="col">
                      <Link to="#">
                        <img
                          className="img-fluid"
                          src={Appstore}
                          alt="app-store"
                        />
                      </Link>
                    </div>
                    <div className="col">
                      <Link to="#">
                        <img
                          className="img-fluid"
                          src={Googleplay}
                          alt="google-play"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Footer Top */}
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="container">
            {/* Copyright */}
            <div className="copyright">
              <div className="row">
                <div className="col-md-12">
                  <div className="copyright-text">
                    <p className="mb-0"> © 2021-2022, All Rights Reserved</p>
                  </div>
                </div>
              </div>
            </div>
            {/* /Copyright */}
          </div>
        </div>
        {/* /Footer Bottom */}
      </footer>
      {/* /Footer */}


    </>


  )
}
export default Home2;