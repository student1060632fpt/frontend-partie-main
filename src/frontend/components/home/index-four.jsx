import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import Select2 from 'react-select2-wrapper';
import 'react-select2-wrapper/css/select2.css';

// Import Images
import {
  logo_footer, Avatar_1, Avatar_2, Avatar_3, Blog_11, feature_icon04, project4, project5, subscribe_01, feature_icon_04, feature_icon_05, quote_01, Appstore, Googleplay, Project_15, Project_16, Project_17, Project_18,
  Avatar_4, Avatar_5, Avatar_6, Avatar_7, Avatar_8, Blog_01, Blog_02, Blog_03
} from "../imagepath";
import AOS from "aos";
import "aos/dist/aos.css";
import HeaderFour from "../header/header-four"
import SayAbout from "../home/slider/say-about"
import config from "config"

const Home4 = () => {

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
    document.body.classList.add("body-four");

    return () => document.body.classList.remove("body-four");
  }, []);

  return (
    <>

      {/* Start Navigation */}
      {/* Header */}
      <HeaderFour />
      {/* /Header */}
      <>
        {/* Home Banner */}
        <section className="section home-banner row-middle home-four">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-10 col-lg-8">
                <div className="market-place d-flex align-items-center">
                  <div className="banner-content aos" data-aos="fade-up">
                    <p>With the world's #1 Developers marketplace</p>
                    <h1>
                      Get the perfect{" "}
                      <span className="orange-text">Developers &amp; Projects</span>{" "}
                      every time
                    </h1>
                    <form action={`${config.publicPath}project`}
                      className="form"

                    >
                      <div className="form-inner">
                        <div className="input-group">
                          <div className="category-project">
                            <label>Category</label>
                            <span className="drop-detail">
                              <Select2
                                className="select form-control"
                                data={options}
                                options={{
                                  placeholder: 'Projects',
                                }} />
                            </span>
                          </div>
                          <div className="what-search">
                            <label>What</label>
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Job title, keywords, or company"
                            />
                          </div>
                          <button className="btn btn-primary sub-btn" type="submit">
                            Search Now
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Home Banner */}
        {/* Our Feature */}
        <section className="section feature feature-four">
          <div className="container">
            <div className="row justify-content-center">
              {/* Feature Item */}
              <div className="col-xl-4 col-lg-6 col-md-6 d-flex">
                <div className="feature-item freelance-count aos" data-aos="fade-up">
                  <div className="row">
                    <div className="col">
                      <div className="feature-content">
                        <p>Freelance Developers</p>
                        <h3>919,207</h3>
                      </div>
                    </div>
                    <div className="col">
                      <div className="feature-icon">
                        <img
                          src={feature_icon04}
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Feature Item */}
              {/* Feature Item */}
              <div className="col-xl-4 col-lg-6 col-md-6 d-flex">
                <div className="feature-item aos" data-aos="fade-up">
                  <div className="row">
                    <div className="col">
                      <div className="feature-content">
                        <p>Developers per project</p>
                        <h3>25 - 100+</h3>
                      </div>
                    </div>
                    <div className="col ">
                      <div className="feature-icon">
                        <img
                          src={feature_icon_04}
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Feature Item */}
              {/* Feature Item */}
              <div className="col-xl-4 col-lg-6 col-md-6 d-flex">
                <div className="feature-item comp-project aos" data-aos="fade-up">
                  <div className="row">
                    <div className="col">
                      <div className="feature-content">
                        <p>Completed Projects</p>
                        <h3>388,615</h3>
                      </div>
                    </div>
                    <div className="col ">
                      <div className="feature-icon">
                        <img
                          src={feature_icon_05}
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Feature Item */}
            </div>
          </div>
        </section>
        {/* /Our Feature */}
        {/*- Developed Project  */}
        <section className="section most-hired-four">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 d-flex">
                <div className="hired-group-four aos" data-aos="fade-up">
                  <h2>I NEED A DEVELOPED PROJECT</h2>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="perfect-four">
                        <p>
                          Get the perfect Developed project for your budget from our
                          creative community.
                        </p>
                        <div className="more-learn">
                          <Link to="/project" className="btn btn-primary">
                            Learn More
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="img-perfect">
                        <img src={project4} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 d-flex">
                <div className="hired-group-four want-to-work aos" data-aos="fade-up">
                  <h2>I WANT TO WORK</h2>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="perfect-four">
                        <p>
                          Get the perfect Developed project for your budget from our
                          creative community.
                        </p>
                        <div className="more-learn">
                          <Link to="/developer" className="btn btn-primary">
                            Learn More
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="img-perfect">
                        <img src={project5} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*- /Developed Project  */}
        {/* Projects */}
        <section className="section projects-two projects-four">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-12 mx-auto">
                <ul className="dot-head aos" data-aos="fade-up">
                  <li>
                    <i className="fas fa-circle" />
                  </li>
                  <li>
                    <i className="fas fa-circle" />
                  </li>
                  <li>
                    <i className="fas fa-circle" />
                  </li>
                  <li>
                    <i className="fas fa-circle" />
                  </li>
                  <li>
                    <i className="fas fa-circle" />
                  </li>
                </ul>
                <div
                  className="section-header section-header-two text-left aos"
                  data-aos="fade-up"
                >
                  <h2 className="header-title">
                    Get Inspired
                    <br /> By Development Projects
                  </h2>
                  <div className="browse-all d-flex align-items-center">
                    <Link to="/project" className="btn btn-primary">
                      Browse All Projects <i className="fas fa-angle-right" />
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
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="project-item aos" data-aos="fade-up">
                  <div className="project-img">
                    <Link to="/project">
                      <img
                        src={Project_15}
                        alt=""
                        className="img-fluid"
                      />
                    </Link>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="develope-group">
                      <div className="inspired-group d-flex">
                        <h5>
                          <Link to="/project">ANGULAR</Link>
                        </h5>
                        <div className="count-number count-pink">
                          <h4>
                            <i className="fas fa-folder" />
                            24
                          </h4>
                        </div>
                      </div>
                      <div className="inspired-group d-flex">
                        <h5>
                          <Link to="/project">DEVELOPER</Link>
                        </h5>
                        <div className="count-number count-sky">
                          <h4>
                            <i className="fas fa-user-friends" />
                            30
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*- /Project Item  */}
              {/*- Project Item  */}
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="project-item aos" data-aos="fade-up">
                  <div className="project-img">
                    <Link to="/project">
                      <img
                        src={Project_16}
                        alt=""
                        className="img-fluid"
                      />
                    </Link>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="develope-group">
                      <div className="inspired-group d-flex">
                        <h5>
                          <Link to="/project">JAVA</Link>
                        </h5>
                        <div className="count-number count-pink">
                          <h4>
                            <i className="fas fa-folder" />
                            24
                          </h4>
                        </div>
                      </div>
                      <div className="inspired-group d-flex">
                        <h5>
                          <Link to="/project">DEVELOPER</Link>
                        </h5>
                        <div className="count-number count-sky">
                          <h4>
                            <i className="fas fa-user-friends" />
                            30
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*- /Project Item  */}
              {/*- Project-Item  */}
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="project-item aos" data-aos="fade-up">
                  <div className="project-img">
                    <Link to="/project">
                      <img
                        src={Project_17}
                        alt=""
                        className="img-fluid"
                      />
                    </Link>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="develope-group">
                      <div className="inspired-group d-flex">
                        <h5>
                          <Link to="/project">PHP</Link>
                        </h5>
                        <div className="count-number count-pink">
                          <h4>
                            <i className="fas fa-folder" />
                            24
                          </h4>
                        </div>
                      </div>
                      <div className="inspired-group d-flex">
                        <h5>
                          <Link to="/project">DEVELOPER</Link>
                        </h5>
                        <div className="count-number count-sky">
                          <h4>
                            <i className="fas fa-user-friends" />
                            30
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*- /Project Item  */}
              {/*- Project Item  */}
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="project-item aos" data-aos="fade-up">
                  <div className="project-img">
                    <Link to="/project">
                      <img
                        src={Project_17}
                        alt=""
                        className="img-fluid"
                      />
                    </Link>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="develope-group">
                      <div className="inspired-group d-flex">
                        <h5>
                          <Link to="/project">REACT</Link>
                        </h5>
                        <div className="count-number count-pink">
                          <h4>
                            <i className="fas fa-folder" />
                            24
                          </h4>
                        </div>
                      </div>
                      <div className="inspired-group d-flex">
                        <h5>
                          <Link to="/project">DEVELOPER</Link>
                        </h5>
                        <div className="count-number count-sky">
                          <h4>
                            <i className="fas fa-user-friends" />
                            30
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*- /Project Item  */}
              {/*- Project Item  */}
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="project-item aos" data-aos="fade-up">
                  <div className="project-img">
                    <Link to="/project">
                      <img
                        src={Project_18}
                        alt=""
                        className="img-fluid"
                      />
                    </Link>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="develope-group">
                      <div className="inspired-group d-flex">
                        <h5>
                          <Link to="/project">LARAVEL</Link>
                        </h5>
                        <div className="count-number count-pink">
                          <h4>
                            <i className="fas fa-folder" />
                            24
                          </h4>
                        </div>
                      </div>
                      <div className="inspired-group d-flex">
                        <h5>
                          <Link to="/project">DEVELOPER</Link>
                        </h5>
                        <div className="count-number count-sky">
                          <h4>
                            <i className="fas fa-user-friends" />
                            30
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*- /Project Item  */}
              {/*- Project Item  */}
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="project-item aos" data-aos="fade-up">
                  <div className="project-img">
                    <Link to="/project">
                      <img
                        src={Project_16}
                        alt=""
                        className="img-fluid"
                      />
                    </Link>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="develope-group">
                      <div className="inspired-group d-flex">
                        <h5>
                          <Link to="/project">ANDROID APPS</Link>
                        </h5>
                        <div className="count-number count-pink">
                          <h4>
                            <i className="fas fa-folder" />
                            24
                          </h4>
                        </div>
                      </div>
                      <div className="inspired-group d-flex">
                        <h5>
                          <Link to="/project">DEVELOPER</Link>
                        </h5>
                        <div className="count-number count-sky">
                          <h4>
                            <i className="fas fa-user-friends" />
                            30
                          </h4>
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
        {/* Subscribe */}
        <section className="section subscribe subscribe-four">
          <div className="container">
            <div className="discount-four aos" data-aos="fade-up">
              <div className="row align-items-center">
                <div className="col-md-7">
                  <div className="aos" data-aos="fade-up">
                    <h3>Subscribe To Get Discounts, Updates &amp; More</h3>
                    <p>Monthly product updates, industry news and more!</p>
                    <form action="#" method="POST">
                      <div className="form-inner">
                        <div className="input-group">
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
                <div className="col-md-5">
                  <div className="subscribe-image text-center aos" data-aos="fade-up">
                    <img
                      src={subscribe_01}
                      className="img-fluid"
                      alt="subscribe"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Subscribe */}
        {/* Top Instructor */}
        <section className="section  developer-four">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-12 mx-auto">
                <ul className="dot-head aos" data-aos="fade-up">
                  <li>
                    <i className="fas fa-circle" />
                  </li>
                  <li>
                    <i className="fas fa-circle" />
                  </li>
                  <li>
                    <i className="fas fa-circle" />
                  </li>
                  <li>
                    <i className="fas fa-circle" />
                  </li>
                  <li>
                    <i className="fas fa-circle" />
                  </li>
                </ul>
                <div
                  className="section-header section-header-two text-left aos"
                  data-aos="fade-up"
                >
                  <h2 className="header-title">
                    Most Hired <br /> Developers
                  </h2>
                  <div className="browse-all developer-all d-flex align-items-center">
                    <Link to="/developer-details" className="btn btn-primary">
                      Browse All Developers <i className="fas fa-angle-right" />
                    </Link>
                  </div>
                </div>
                <div className="section-text aos" data-aos="fade-up">
                  <p>Work with talented people at the most affordable price</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="freelance-widget aos" data-aos="fade-up">
                  <div className="freelance-content">
                    <div className="designation d-flex ">
                      <Link to="/developer-details" className="sky">
                        <i className="fas fa-circle" /> Web design
                      </Link>
                      <div className="mark-book d-flex align-items-center">
                        <i className="far fa-bookmark" />
                      </div>
                    </div>
                    <div className="freelance-info">
                      <h3>
                        <Link to="/developer-details">
                          George Wells <i className="fas fa-check-circle" />
                        </Link>
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
                    </div>
                    <div className="develop-bottom d-flex">
                      <div className="user-four">
                        <Link to="/developer-details">
                          <img
                            src={Avatar_1}
                            className="img-fluid"
                            alt="subscribe"
                          />
                        </Link>
                      </div>
                      <h5>
                        <span>$25</span> Hourly
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="freelance-widget aos" data-aos="fade-up">
                  <div className="freelance-content">
                    <div className="designation d-flex ">
                      <Link to="/developer-details" className="pink">
                        <i className="fas fa-circle" /> Angular
                      </Link>
                      <div className="mark-book d-flex align-items-center">
                        <i className="far fa-bookmark" />
                      </div>
                    </div>
                    <div className="freelance-info">
                      <h3>
                        <Link to="/developer-details">
                          Timothy Smith <i className="fas fa-check-circle" />
                        </Link>
                      </h3>
                      <div className="freelance-specific">PHP Developer</div>
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
                    </div>
                    <div className="develop-bottom d-flex">
                      <div className="user-four">
                        <Link to="/developer-details">
                          <img
                            src={Avatar_2}
                            className="img-fluid"
                            alt="subscribe"
                          />
                        </Link>
                      </div>
                      <h5>
                        <span>$45</span> Hourly
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="freelance-widget aos" data-aos="fade-up">
                  <div className="freelance-content">
                    <div className="designation d-flex ">
                      <Link to="/developer-details" className="orange">
                        <i className="fas fa-circle" /> Node js
                      </Link>
                      <div className="mark-book d-flex align-items-center">
                        <i className="far fa-bookmark" />
                      </div>
                    </div>
                    <div className="freelance-info">
                      <h3>
                        <Link to="/developer-details">
                          Janet Paden <i className="fas fa-check-circle" />
                        </Link>
                      </h3>
                      <div className="freelance-specific">Graphic Designer</div>
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
                        <span className="average-rating">4.7 (32)</span>
                      </div>
                    </div>
                    <div className="develop-bottom d-flex">
                      <div className="user-four">
                        <Link to="/developer-details">
                          <img
                            src={Avatar_3}
                            className="img-fluid"
                            alt="subscribe"
                          />
                        </Link>
                      </div>
                      <h5>
                        <span>$23</span> Hourly
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="freelance-widget aos" data-aos="fade-up">
                  <div className="freelance-content">
                    <div className="designation d-flex ">
                      <Link to="/developer-details" className="sky">
                        <i className="fas fa-circle" /> Web design
                      </Link>
                      <div className="mark-book d-flex align-items-center">
                        <i className="far fa-bookmark" />
                      </div>
                    </div>
                    <div className="freelance-info">
                      <h3>
                        <Link to="/developer-details">
                          James Douglas <i className="fas fa-check-circle" />
                        </Link>
                      </h3>
                      <div className="freelance-specific">iOS Developer</div>
                      <div className="freelance-location">
                        <i className="fas fa-map-marker-alt me-1" />
                        Missouri, USA
                      </div>
                      <div className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star " />
                        <i className="fas fa-star " />
                        <i className="fas fa-star" />
                        <span className="average-rating">3.7 (32)</span>
                      </div>
                    </div>
                    <div className="develop-bottom d-flex">
                      <div className="user-four">
                        <Link to="/developer-details">
                          <img
                            src={Avatar_4}
                            className="img-fluid"
                            alt="subscribe"
                          />
                        </Link>
                      </div>
                      <h5>
                        <span>$45</span> Hourly
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="freelance-widget aos" data-aos="fade-up">
                  <div className="freelance-content">
                    <div className="designation d-flex">
                      <Link to="/developer-details" className="sky">
                        <i className="fas fa-circle" /> Web design
                      </Link>
                      <div className="mark-book d-flex align-items-center">
                        <i className="far fa-bookmark" />
                      </div>
                    </div>
                    <div className="freelance-info">
                      <h3>
                        <Link to="/developer-details">
                          Floyd Lewis <i className="fas fa-check-circle" />
                        </Link>
                      </h3>
                      <div className="freelance-specific">SEO Developer</div>
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
                        <span className="average-rating">4.9 (32)</span>
                      </div>
                    </div>
                    <div className="develop-bottom d-flex">
                      <div className="user-four">
                        <Link to="/developer-details">
                          <img
                            src={Avatar_5}
                            className="img-fluid"
                            alt="subscribe"
                          />
                        </Link>
                      </div>
                      <h5>
                        <span>$34</span> Hourly
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="freelance-widget aos" data-aos="fade-up">
                  <div className="freelance-content">
                    <div className="designation d-flex ">
                      <Link to="/developer-details" className="pink">
                        <i className="fas fa-circle" /> Angular
                      </Link>
                      <div className="mark-book d-flex align-items-center">
                        <i className="far fa-bookmark" />
                      </div>
                    </div>
                    <div className="freelance-info">
                      <h3>
                        <Link to="#">
                          Jacqueline Daye <i className="fas fa-check-circle" />
                        </Link>
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
                        <i className="fas fa-star " />
                        <i className="fas fa-star" />
                        <span className="average-rating">4.2 (32)</span>
                      </div>
                    </div>
                    <div className="develop-bottom d-flex">
                      <div className="user-four">
                        <Link to="/developer-details">
                          <img
                            src={Avatar_6}
                            className="img-fluid"
                            alt="subscribe"
                          />
                        </Link>
                      </div>
                      <h5>
                        <span>$45</span> Hourly
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="freelance-widget aos" data-aos="fade-up">
                  <div className="freelance-content">
                    <div className="designation d-flex ">
                      <Link to="/developer-details" className="orange">
                        <i className="fas fa-circle" /> Node js
                      </Link>
                      <div className="mark-book d-flex align-items-center">
                        <i className="far fa-bookmark" />
                      </div>
                    </div>
                    <div className="freelance-info">
                      <h3>
                        <Link to="#">
                          Tony Ingle <i className="fas fa-check-circle" />
                        </Link>
                      </h3>
                      <div className="freelance-specific">Business Analyst</div>
                      <div className="freelance-location">
                        <i className="fas fa-map-marker-alt me-1" />
                        Missouri, USA
                      </div>
                      <div className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star " />
                        <i className="fas fa-star" />
                        <span className="average-rating">4.3 (32)</span>
                      </div>
                    </div>
                    <div className="develop-bottom d-flex">
                      <div className="user-four">
                        <Link to="/developer-details">
                          <img
                            src={Avatar_7}
                            className="img-fluid"
                            alt="subscribe"
                          />
                        </Link>
                      </div>
                      <h5>
                        <span>$15</span> Hourly
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="freelance-widget aos" data-aos="fade-up">
                  <div className="freelance-content">
                    <div className="designation d-flex">
                      <Link to="/developer-details" className="sky">
                        <i className="fas fa-circle" /> Web design
                      </Link>
                      <div className="mark-book d-flex align-items-center">
                        <i className="far fa-bookmark" />
                      </div>
                    </div>
                    <div className="freelance-info">
                      <h3>
                        <Link to="#">
                          Kathleen Kaiser <i className="fas fa-check-circle" />
                        </Link>
                      </h3>
                      <div className="freelance-specific">UI/UX Designer</div>
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
                        <span className="average-rating">4.7 (32)</span>
                      </div>
                    </div>
                    <div className="develop-bottom d-flex">
                      <div className="user-four">
                        <Link to="/developer-details">
                          <img
                            src={Avatar_8}
                            className="img-fluid"
                            alt="subscribe"
                          />
                        </Link>
                      </div>
                      <h5>
                        <span>$25</span> Hourly
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Top Instructor */}
        {/* Say Review */}
        <section className="review-four">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <ul className="dot-head aos" data-aos="fade-up">
                  <li>
                    <i className="fas fa-circle" />
                  </li>
                  <li>
                    <i className="fas fa-circle" />
                  </li>
                  <li>
                    <i className="fas fa-circle" />
                  </li>
                  <li>
                    <i className="fas fa-circle" />
                  </li>
                  <li>
                    <i className="fas fa-circle" />
                  </li>
                </ul>
                <div
                  className="section-header section-header-two text-left aos"
                  data-aos="fade-up"
                >
                  <h2 className="header-title">Top Review</h2>
                </div>
                <div className="section-text aos" data-aos="fade-up">
                  <p>High Performing Developers To Your</p>
                </div>
              </div>
            </div>

            <SayAbout />


          </div>
        </section>
        {/* /Say Review Two */}
        {/* News */}
        <section className="section news news-four">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <ul className="dot-head aos" data-aos="fade-up">
                  <li>
                    <i className="fas fa-circle" />
                  </li>
                  <li>
                    <i className="fas fa-circle" />
                  </li>
                  <li>
                    <i className="fas fa-circle" />
                  </li>
                  <li>
                    <i className="fas fa-circle" />
                  </li>
                  <li>
                    <i className="fas fa-circle" />
                  </li>
                </ul>
                <div
                  className="section-header section-header-two text-left aos"
                  data-aos="fade-up"
                >
                  <h2 className="header-title">Feature Blog</h2>
                  <div className="browse-all all-browse d-flex align-items-center">
                    <Link to="/blog-details" className="btn btn-primary">
                      Browse All <i className="fas fa-angle-right" />
                    </Link>
                  </div>
                </div>
                <div className="section-text aos" data-aos="fade-up">
                  <p>High Performing Developers To Your</p>
                </div>
              </div>
            </div>
            <div>
              <div className="row blog-grid-row">
                <div className="col-lg-3 col-md-6 d-flex">
                  {/* Blog Post */}
                  <div className="blog grid-blog aos" data-aos="fade-up">
                    <div className="blog-image">
                      <Link to="/blog-details">
                        <img
                          className="img-fluid"
                          src={Blog_01}
                          alt="Post Image"
                        />
                      </Link>
                    </div>
                    <div className="blog-content">
                      <div className="designation d-flex">
                        <Link to="#" className="sky">
                          <i className="fas fa-circle" /> Web design
                        </Link>
                      </div>
                      <h3 className="blog-title">
                        <Link to="/blog-details">
                          Your next job starts right here
                        </Link>
                      </h3>
                      <ul className="entry-meta meta-item">
                        <li> Aug 23, 2021</li>
                      </ul>
                      <div className="blog-read">
                        <Link to="/blog-details" className="btn btn-primary">
                          Read More <i className="fas fa-angle-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* /Blog Post */}
                </div>
                <div className="col-lg-3 col-md-6 d-flex">
                  {/* Blog Post */}
                  <div className="blog grid-blog aos" data-aos="fade-up">
                    <div className="blog-image">
                      <Link to="/blog-details">
                        <img
                          className="img-fluid"
                          src={Blog_02}
                          alt="Post Image"
                        />
                      </Link>
                    </div>
                    <div className="blog-content">
                      <div className="designation d-flex">
                        <Link to="#" className="pink">
                          <i className="fas fa-circle" />
                          Ui Design
                        </Link>
                      </div>
                      <h3 className="blog-title">
                        <Link to="/blog-details">
                          Your next job starts right here
                        </Link>
                      </h3>
                      <ul className="entry-meta meta-item">
                        <li> Aug 23, 2021</li>
                      </ul>
                      <div className="blog-read">
                        <Link to="/blog-details" className="btn btn-primary">
                          Read More <i className="fas fa-angle-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* /Blog Post */}
                </div>
                <div className="col-lg-3 col-md-6 d-flex">
                  {/* Blog Post */}
                  <div className="blog grid-blog aos" data-aos="fade-up">
                    <div className="blog-image">
                      <Link to="/blog-details">
                        <img
                          className="img-fluid"
                          src={Blog_03}
                          alt="Post Image"
                        />
                      </Link>
                    </div>
                    <div className="blog-content">
                      <div className="designation d-flex">
                        <Link to="#" className="orange">
                          <i className="fas fa-circle" /> Node js
                        </Link>
                      </div>
                      <h3 className="blog-title">
                        <Link to="/blog-details">
                          Your next job starts right here
                        </Link>
                      </h3>
                      <ul className="entry-meta meta-item">
                        <li> Aug 23, 2021</li>
                      </ul>
                      <div className="blog-read">
                        <Link to="/blog-details" className="btn btn-primary">
                          Read More <i className="fas fa-angle-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* /Blog Post */}
                </div>
                <div className="col-lg-3 col-md-6">
                  {/* Blog Post */}
                  <div className="blog grid-blog aos" data-aos="fade-up">
                    <div className="blog-image">
                      <Link to="/blog-details">
                        <img
                          className="img-fluid"
                          src={Blog_02}
                          alt="Post Image"
                        />
                      </Link>
                    </div>
                    <div className="blog-content">
                      <div className="designation d-flex">
                        <Link to="#" className="sky">
                          <i className="fas fa-circle" /> Web design
                        </Link>
                      </div>
                      <h3 className="blog-title">
                        <Link to="/blog-details">
                          Your next job starts right here
                        </Link>
                      </h3>
                      <ul className="entry-meta meta-item">
                        <li> Aug 23, 2021</li>
                      </ul>
                      <div className="blog-read">
                        <Link to="/blog-details" className="btn btn-primary">
                          Read More <i className="fas fa-angle-right" />
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
        {/* Footer */}
        <footer className="footer footer-four">
          <div className="footer-top aos" data-aos="fade-up">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div className="logo-footer">
                    <Link to="/index" className="navbar-brand logo">
                      <img
                        src={logo_footer}
                        className="img-fluid"
                        alt="Logo"
                      />
                    </Link>
                  </div>
                  <div className="footer-address">
                    <div className="off-address">
                      <p className="mb-2">New York, USA (HQ)</p>
                      <address className="mb-0">
                        750 Sing Sing Rd, Horseheads, NY, 14845
                      </address>
                      <p>
                        <Link to="#">
                          <span>469-537-2410</span> (Toll-free)
                        </Link>{" "}
                      </p>
                    </div>
                    <div className="off-address">
                      <p className="mb-2">Sydney, Australia </p>
                      <address className="mb-0">
                        24 Farrar Parade COOROW WA 6515
                      </address>
                      <p>
                        <Link to="#">
                          <span>(08) 9064 9807</span> (Toll-free)
                        </Link>{" "}
                      </p>
                    </div>
                  </div>
                  <div className="social-icon">
                    <ul>
                      <li>
                        <Link to="#" className="icon" target="_blank">
                          <i className="fab fa-facebook-f" />
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
                  <div className="col-md-12 col-lg-12">
                    <div className="copyright-text text-center">
                      <p className="mb-0">© 2022 All Rights Reserved</p>
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




    </>


  )
}
export default Home4;