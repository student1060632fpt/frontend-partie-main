import React, { useEffect } from 'react';
import Select2 from 'react-select2-wrapper';
import 'react-select2-wrapper/css/select2.css';
// Import Images
import { object_03, project_06, review_02, Project_12, logo_footer, Project_13, Project_14, Blog_10, Blog_11, } from "../imagepath";
import AOS from "aos";
import "aos/dist/aos.css";
import HeaderFive from "../header/header-five"
import HiredDeveloper from "../home/slider/hired-developer"
import ReviewThree from '../home/slider/review-three'
import { Link } from "react-router-dom";
import config from "config"

const Home5 = () => {

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
    document.body.classList.add("body-five");

    return () => document.body.classList.remove("body-five");
  }, []);

  return (
    <>

      {/* Start Navigation */}
      {/* Header */}
      <HeaderFive />
      {/* /Header */}
      <>
        <>
          {/* Home Banner */}
          <section className="section home-banner row-middle home-five">
            <div className="container">
              <div className="dark-group d-flex align-items-center">
                <div className="row align-items-center">
                  <div className="col-md-8 col-lg-7">
                    <div className="banner-content aos" data-aos="fade-up">
                      <div className="rating d-flex">
                        <i className="fas fa-star checked" />
                        <i className="fas fa-star checked" />
                        <i className="fas fa-star checked" />
                        <i className="fas fa-star checked" />
                        <i className="fas fa-star checked" />
                      </div>
                      <h5>Trused by over 2M+ users</h5>
                      <h1>
                        Get the perfect{" "}
                        <span className="orange-text">Developers &amp; Projects</span>
                      </h1>
                      <form action={`${config.publicPath}project`}
                        className="form"

                      >
                        <div className="form-inner">
                          <div className="input-group">
                            <span className="drop-detail">
                              <Select2
                                className="select form-control"
                                data={options}
                                options={{
                                  placeholder: 'Projects',
                                }} />
                            </span>
                            <input
                              type="text"
                              className="form-control search-text-bg"
                              placeholder="Search here"
                            />
                            <button className="btn btn-primary sub-btn" type="submit">
                              Search
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-5">
                    <div className="banner-five-img aos" data-aos="fade-up">
                      <img
                        src={object_03}
                        className="img-fluid"
                        alt="banner"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* /Home Banner */}
          {/*- Developed Project  */}
          <section className="work-three work-five">
            <div className="need-position">
              <div className="container">
                <div className="work-three-widget aos" data-aos="fade-up">
                  <div className="creative-img">
                    <img src={project_06} alt="" className="img-fluid" />
                  </div>
                  <div className="widget-group">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 budget-position">
                        <div className="budget-creative">
                          <div className="perfect-group aos" data-aos="fade-up">
                            <h2>I NEED A DEVELOPED PROJECT</h2>
                            <p>
                              Get the perfect Developed project for your budget from our
                              creative community.
                            </p>
                            <div className="view-face">
                              <Link to="/project" className="btn btn-primary">
                                <i className="fas fa-arrow-right" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="perfect-group work-to aos" data-aos="fade-up">
                          <h2>I WANT TO WORK</h2>
                          <p>
                            Do you want to earn money, find unlimited clients and build
                            your freelance career?
                          </p>
                          <div className="view-work">
                            <Link to="/developer" className="btn btn-primary">
                              <i className="fas fa-arrow-right" />
                            </Link>
                          </div>
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
          <section className="section projects projects-three projects-five">
            <div className="project-back">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-md-12 mx-auto">
                    <div
                      className="section-header section-three section-five text-center aos"
                      data-aos="fade-up"
                    >
                      <h2 className="header-title">
                        Get Inspired By <span> Development Projects</span>
                      </h2>
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
                            src={Project_12}
                            alt=""
                            className="img-fluid"
                          />
                        </Link>
                      </div>
                      <div className="develop-role d-flex justify-content-between align-items-center">
                        <div className="project-content">
                          <h4>45</h4>
                          <h5>
                            <Link to="/project">ANDROID </Link>
                          </h5>
                        </div>
                        <div className="pro-icon">
                          <div className="project-icon"></div>
                        </div>
                        <div className="project-content">
                          <h4>20</h4>
                          <h5>
                            <Link to="/project">Developers</Link>
                          </h5>
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
                            src={Project_13}
                            alt=""
                            className="img-fluid"
                          />
                        </Link>
                      </div>
                      <div className="develop-role apps-color d-flex justify-content-between align-items-center">
                        <div className="project-content">
                          <h4>45</h4>
                          <h5>
                            <Link to="/project">LARAVEL</Link>
                          </h5>
                        </div>
                        <div className="pro-icon">
                          <div className="project-icon"></div>
                        </div>
                        <div className="project-content">
                          <h4>20</h4>
                          <h5>
                            <Link to="/project">Developers</Link>
                          </h5>
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
                            src={Project_14}
                            alt=""
                            className="img-fluid"
                          />
                        </Link>
                      </div>
                      <div className="develop-role d-flex justify-content-between align-items-center">
                        <div className="project-content">
                          <h4>45</h4>
                          <h5>
                            <Link to="/project">React</Link>
                          </h5>
                        </div>
                        <div className="pro-icon">
                          <div className="project-icon"></div>
                        </div>
                        <div className="project-content">
                          <h4>20</h4>
                          <h5>
                            <Link to="/project">Developers</Link>
                          </h5>
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
                            src={Project_12}
                            alt=""
                            className="img-fluid"
                          />
                        </Link>
                      </div>
                      <div className="develop-role apps-color d-flex justify-content-between align-items-center">
                        <div className="project-content">
                          <h4>45</h4>
                          <h5>
                            <Link to="/project">GOLANG</Link>
                          </h5>
                        </div>
                        <div className="pro-icon">
                          <div className="project-icon"></div>
                        </div>
                        <div className="project-content">
                          <h4>20</h4>
                          <h5>
                            <Link to="/project">Developers</Link>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*- /Project Item  */}
                </div>
                <div className="row">
                  <div className="col-md-12 text-center">
                    <div className="see-all btn-three aos" data-aos="fade-up">
                      <Link to="/project" className="btn all-btn">
                        SEE ALL PROJECT <i className="fas fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* /Projects */}
          {/* Most Hired */}
          <section className="hired-developer hired-developer-five">
            <div className="position-three position-five">
              <div className="container">
                <div
                  className="section-header section-three section-five aos"
                  data-aos="fade-up"
                >
                  <h2 className="header-title">
                    <span>Most Hired</span> Developers
                  </h2>
                  <p>Work with talented people at the most affordable price</p>
                </div>
                <HiredDeveloper />
              </div>
            </div>
          </section>
          {/* /Most Hired */}
          {/* Our Feature */}
          <section className="section feature feature-three feature-five">
            <div className="container">
              <div
                className="section-header section-three section-five text-center aos"
                data-aos="fade-up"
              >
                <h2 className="header-title">
                  Strength in <span>Numbers</span>
                </h2>
                <p>Work with talented people at the most affordable price</p>
              </div>
              <div className="row justify-content-center">
                {/* Feature Item */}
                <div className="col-lg-4 col-md-6 d-flex">
                  <div className="feature-item freelance-count aos" data-aos="fade-up">
                    <div className="feature-icon">
                      <i className="fas fa-laptop-code" />
                    </div>
                    <div className="feature-content">
                      <h3>919,207</h3>
                      <p>freelance Developers</p>
                    </div>
                  </div>
                </div>
                {/* /Feature Item */}
                {/* Feature Item */}
                <div className="col-lg-4 col-md-6 d-flex">
                  <div className="feature-item aos" data-aos="fade-up">
                    <div className="feature-icon">
                      <i className="fas fa-project-diagram" />
                    </div>
                    <div className="feature-content">
                      <h3>25 - 100+</h3>
                      <p>Developers per project</p>
                    </div>
                  </div>
                </div>
                {/* /Feature Item */}
                {/* Feature Item */}
                <div className="col-lg-4 col-md-6 d-flex">
                  <div className="feature-item comp-project aos" data-aos="fade-up">
                    <div className="feature-icon">
                      <i className="fas fa-list" />
                    </div>
                    <div className="feature-content">
                      <h3>388,615</h3>
                      <p>completed projects</p>
                    </div>
                  </div>
                </div>
                {/* /Feature Item */}
              </div>
            </div>
          </section>
          {/* /Our Feature */}
          {/* Review */}
          <section className="review-three review-five">
            <div className="container">
              <div className="review-bg">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="review-develop aos" data-aos="fade-up">
                      <img src={review_02} alt="Image" />
                    </div>
                  </div>
                  <ReviewThree />
                </div>
              </div>
            </div>
          </section>
          {/* /Review */}
          {/* News */}
          <section className="section news news-three news-five">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div
                    className="section-header section-three section-five text-center aos"
                    data-aos="fade-up"
                  >
                    <h2 className="header-title">
                      <span>Latest</span> Blog
                    </h2>
                    <p>Have a Look Our Blog</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="row blog-grid-row justify-content-center">
                  <div className="col-lg-4 col-md-6">
                    {/* Blog Post */}
                    <div className="blog grid-blog aos" data-aos="fade-up">
                      <div className="blog-image">
                        <Link to="/blog-details">
                          <img
                            className="img-fluid"
                            src={Blog_10}
                            alt="Post Image"
                          />
                        </Link>
                      </div>
                      <div className="blog-content">
                        <h3 className="blog-title">
                          <Link to="/blog-details">
                            Your next job starts right here starts right here
                          </Link>
                        </h3>
                        <ul className="entry-meta meta-item">
                          <li>
                            {" "}
                            3 Nov 2021 <i className="fas fa-calendar-week" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* /Blog Post */}
                  </div>
                  <div className="col-lg-4 col-md-6">
                    {/* Blog Post */}
                    <div className="blog grid-blog aos" data-aos="fade-up">
                      <div className="blog-image">
                        <Link to="/blog-details">
                          <img
                            className="img-fluid"
                            src={Blog_11}
                            alt="Post Image"
                          />
                        </Link>
                      </div>
                      <div className="blog-content blog-blue">
                        <h3 className="blog-title">
                          <Link to="/blog-details">
                            Kofejob - How to get job through online?
                          </Link>
                        </h3>
                        <ul className="entry-meta meta-item">
                          <li>
                            3 Nov 2021 <i className="fas fa-calendar-week" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* /Blog Post */}
                  </div>
                  <div className="col-lg-4 col-md-6">
                    {/* Blog Post */}
                    <div className="blog grid-blog aos" data-aos="fade-up">
                      <div className="blog-image">
                        <Link to="/blog-details">
                          <img
                            className="img-fluid"
                            src={Blog_10}
                            alt="Post Image"
                          />
                        </Link>
                      </div>
                      <div className="blog-content">
                        <h3 className="blog-title">
                          <Link to="/blog-details">
                            Your next job starts right here starts right here
                          </Link>
                        </h3>
                        <ul className="entry-meta meta-item">
                          <li>
                            {" "}
                            3 Nov 2021 <i className="fas fa-calendar-week" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* /Blog Post */}
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* / News */}
          {/*  Subscribe */}
          <section className="subscribe-three subscribe-five">
            <div className="container">
              <div className="discount-more ">
                <div
                  className="section-header section-three section-five text-center aos"
                  data-aos="fade-up"
                >
                  <h2 className="header-title">
                    <span>Subscribe To Get Discounts,</span> Updates &amp; More
                  </h2>
                  <p>HMonthly product updates, industry news and more!</p>
                </div>
                <div className="banner-content aos" data-aos="fade-up">
                  <form
                    className="form"
                    name="store"
                    method="post"
                    action="/project"
                  >
                    <div className="form-inner">
                      <div className="input-group">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter Email Address"
                        />
                        <button className="btn btn-primary sub-btn" type="submit">
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
          {/*  /Subscribe */}
          {/* Footer */}
          <footer className="footer footer-five">
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
                    <div className="text-footer">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                    </div>
                    <div className="social-icon icon-list">
                      <ul>
                        <li>
                          <Link to="#" className="icon" target="_blank">
                            <i className="fab fa-facebook" />{" "}
                          </Link>
                        </li>
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
                  <div className="col-lg-3 col-md-6">
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
                  <div className="col-lg-3 col-md-6">
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
                      <h2 className="footer-title">Address</h2>
                      <ul className="address-box">
                        <li>
                          <i className="fas fa-map-marker-alt" /> 3556 Beech Street, San
                          Francisco, California, CA 94108.
                        </li>
                        <li>
                          <i className="fas fa-phone-alt" /> +154 6546 5640
                        </li>
                        <li>
                          <i className="far fa-envelope" />
                          Kofejob@gmail.com
                        </li>
                      </ul>
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
                    <div className="col-md-6 col-lg-6">
                      <div className="copyright-text">
                        <p className="mb-0">© 2022 All Rights Reserved</p>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6 right-text">
                      <div className="social-icon footer-policy">
                        <ul>
                          <li>
                            <Link to="#" target="_blank">
                              Terms and Conditions{" "}
                            </Link>
                          </li>
                          <li>
                            <Link to="#" target="_blank">
                              Policy{" "}
                            </Link>
                          </li>
                        </ul>
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




    </>


  )
}
export default Home5;