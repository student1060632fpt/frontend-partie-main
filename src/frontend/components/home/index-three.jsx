import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import Select2 from 'react-select2-wrapper';
import 'react-select2-wrapper/css/select2.css';
// Import Images
import { Project2, Project3, Project_12, Developer_1, Review_1, logo_footer, Avatar_1, Avatar_2, Avatar_3, Project_13, Project_14, Img_03, Review_01, Blog_10, Blog_11, } from "../imagepath";
import AOS from "aos";
import "aos/dist/aos.css";
import HeaderThree from "../header/header-three"
import HiredDeveloper from "../home/slider/hired-developer"
import ReviewThree from '../home/slider/review-three'
import config from "config"

const Home3 = () => {

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
    document.body.classList.add("body-three");

    return () => document.body.classList.remove("body-three");
  }, []);

  return (
    <>

      {/* Start Navigation */}
      {/* Header */}
      <HeaderThree />
      {/* /Header */}
      <>
        {/* Home Banner */}
        <section className="section home-banner row-middle home-three">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-8 col-lg-7 ">
                <div className="get-the-project d-flex align-items-center">
                  <div className="banner-content aos" data-aos="fade-up">
                    <div className="rating d-flex">
                      <i className="fas fa-star checked" />
                      <i className="fas fa-star checked" />
                      <i className="fas fa-star checked" />
                      <i className="fas fa-star checked" />
                      <i className="fas fa-star checked" />
                    </div>
                    <h5>TRUSTED BY OVER 2M+ USERS</h5>
                    <h1>
                      Get the perfect{" "}
                      <span className="orange-text">Developers &amp; Projects</span>
                    </h1>
                    <form
                      className="form"
                      action={`${config.publicPath}project`}
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
                            type="email"
                            className="form-control"
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
              </div>
            </div>
          </div>
        </section>
        {/* /Home Banner */}
        {/*- Developed Project  */}
        <section className="work-three">
          <div className="need-position">
            <div className="container">
              <div className="work-three-widget">
                <div className="row">
                  <div className="col-lg-3 col-md-6">
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
                  <div className="col-lg-3 col-md-6 d-flex align-items-end">
                    <div className="perfect-img aos" data-aos="fade-up">
                      <img src={Project2} alt="" />
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
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
                  <div className="col-lg-3 col-md-6 d-flex align-items-end">
                    <div className="perfect-img aos" data-aos="fade-up">
                      <img src={Project3} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*- /Developed Project  */}
        {/* Our Feature */}
        <section className="section feature feature-three">
          <div className="container">
            <div
              className="section-header section-three text-center aos"
              data-aos="fade-up"
            >
              <h2 className="header-title">
                Strength in <span>Numbers</span>
              </h2>
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
        {/* Projects */}
        <section className="section projects projects-three">
          <div className="project-back">
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-12 mx-auto">
                  <div
                    className="section-header section-three text-center aos"
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
        <section className="hired-developer">
          <div className="position-three">
            <div className="container">
              <div className="section-header section-three aos" data-aos="fade-up">
                <h2 className="header-title">
                  Most <span> Hired Developers</span>
                </h2>
                <p>Work with talented people at the most affordable price</p>
              </div>
              <HiredDeveloper />
            </div>
          </div>
        </section>
        {/* /Most Hired */}
        {/* Review */}
        <section className="review-three">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="review-develop aos" data-aos="fade-up">
                  <img src={Review_1} alt="Image" />
                </div>
              </div>
              <ReviewThree />
            </div>
          </div>
        </section>
        {/* /Review */}
        {/* News */}
        <section className="section news news-three">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div
                  className="section-header section-three text-center aos"
                  data-aos="fade-up"
                >
                  <h2 className="header-title">
                    Latest <span> Blog</span>
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
        <section className="subscribe-three">
          <div className="container">
            <div className="discount-more ">
              <div
                className="section-header section-three text-center aos"
                data-aos="fade-up"
              >
                <h2 className="header-title">
                  Subscribe To Get Discounts,<span> Updates &amp; More</span>
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
                      <button className="subscribe-three btn btn-primary sub-btn" type="submit">
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
        <footer className="footer footer-three">
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
                  <div className="social-icon">
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


  )
}
export default Home3;