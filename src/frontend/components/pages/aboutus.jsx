import React from "react";
import { Link } from "react-router-dom";
// Import Slick Slider
import Slider from "react-slick";
// Import Images
import { About_img,About_01,Review_01,Review_02,Review_03 } from "../imagepath";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const Aboutus = () => {
   
        var settings = {
            dots: false,
            infinite: "true",
            nav: true,
            margin: 25,
            slidestoshow: 3,
        
            navText: [
              '<i class="fas fa-chevron-left"></i>',
              '<i class="fas fa-chevron-right"></i>'
            ],
            slidestoscroll: 1,
            responsive: [{
                breakpoint: 992,
                    settings: {
                        centerMode:true,
                        slidesToShow: 3
                      }
            },
            {
                breakpoint: 776,
                    settings: {
                        centerMode:true,
                        slidesToShow: 2
                      }
            },
            {
                breakpoint: 567,
                    settings: {
                        centerMode:true,
                        slidesToShow: 1
                    }
            }]
          }; 
        return (
          <>
          {/* Breadcrumb */}
          <div className="breadcrumb-bar">
            <div className="container">
              <div className="row align-items-center inner-banner">
                <div className="col-md-12 col-12 text-center">
                  <h2 className="breadcrumb-title">ABOUT US</h2>
                  <nav aria-label="breadcrumb" className="page-breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/index">Home</Link>
                      </li>
                      <li className="breadcrumb-item active" aria-current="page">
                        {" "}
                        About us
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          {/* /Breadcrumb */}
          {/* About */}
          <section className="section about">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-6 d-flex align-items-center">
                  <div className="about-content">
                    <h2>
                      About <span className="orange-text">Kofejob</span>
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
                      modi, saepe hic esse maxime quasi, sapiente ex debitis quis
                      dolorum unde, neque quibusdam eveniet nobis enim porro repudiandae
                      nesciunt quidem.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
                      delectus soluta adipisci beatae ullam quisquam, quia recusandae
                      rem assumenda, praesentium porro sequi eaque doloremque tenetur
                      incidunt officiis explicabo optio perferendis.
                    </p>
                    <Link to="/project" className="btn learn-btn">
                      LEARN MORE
                    </Link>
                  </div>
                </div>
                <div className="offset-lg-1 col-lg-5">
                  <div className="about-img">
                    <img
                      className="img-fluid"
                      src={About_img}
                      alt="Post Image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* /About */}
          {/* Counter */}
          <section className="section job-counter">
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <div className="counter">
                    <h2>800+</h2>
                    <h4>Jobs Posted</h4>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="counter">
                    <h2>80+</h2>
                    <h4>Companies</h4>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="counter">
                    <h2>900+</h2>
                    <h4> Developers</h4>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="counter">
                    <h2>90+</h2>
                    <h4>Development Services</h4>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Review */}
          <section className="section testimonial-section review">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="section-header text-center">
                    <div className="section-line" />
                    <h2 className="header-title">Top Reviews</h2>
                    <p>High Performing Developers To Your</p>
                  </div>
                </div>
              </div>
              <OwlCarousel {...settings} className="owl-carousel owl-theme review-slider owl-loaded owl-drag">
                {/* Review Widget */}
                <div className="review-blog">
                  <div className="review-top d-flex align-items-center">
                    <div className="review-img">
                      <Link to="/review">
                        <img
                          className="img-fluid"
                          src={Review_01}
                          alt="Post Image"
                        />
                      </Link>
                    </div>
                    <div className="review-info">
                      <h3>Davis Payerf</h3>
                      <h5>CEO</h5>
                      <div className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star" />
                        <span className="average-rating">4.7</span>
                      </div>
                    </div>
                  </div>
                  <div className="review-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
                      orci enim, mattis nibh aliquam dui, nibh faucibus aenean.
                    </p>
                  </div>
                </div>
                {/* / Review Widget */}
                {/* Review Widget */}
                <div className="review-blog">
                  <div className="review-top d-flex align-items-center">
                    <div className="review-img">
                      <Link to="/review">
                        <img
                          className="img-fluid"
                          src={Review_02}
                          alt="Post Image"
                        />
                      </Link>
                    </div>
                    <div className="review-info">
                      <h3>Davis Payerf</h3>
                      <h5>PROJECT LEAD</h5>
                      <div className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star" />
                        <span className="average-rating">4.8</span>
                      </div>
                    </div>
                  </div>
                  <div className="review-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
                      orci enim, mattis nibh aliquam dui, nibh faucibus aenean.
                    </p>
                  </div>
                </div>
                {/* /Review Widget */}
                {/* Review Widget */}
                <div className="review-blog">
                  <div className="review-top d-flex align-items-center">
                    <div className="review-img">
                      <Link to="/review">
                        <img
                          className="img-fluid"
                          src={Review_03}
                          alt="Post Image"
                        />
                      </Link>
                    </div>
                    <div className="review-info">
                      <h3>Davis Payerf</h3>
                      <h5>TEAM LEAD</h5>
                      <div className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star" />
                        <span className="average-rating">5.0</span>
                      </div>
                    </div>
                  </div>
                  <div className="review-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
                      orci enim, mattis nibh aliquam dui, nibh faucibus aenean.
                    </p>
                  </div>
                </div>
                {/* /Review Widget */}
                {/* Review Widget */}
                <div className="review-blog">
                  <div className="review-top d-flex align-items-center">
                    <div className="review-img">
                      <Link to="/review">
                        <img
                          className="img-fluid"
                          src={Review_02}
                          alt="Post Image"
                        />
                      </Link>
                    </div>
                    <div className="review-info">
                      <h3>Davis Payerf</h3>
                      <h5>PROJECT LEAD</h5>
                      <div className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star" />
                        <span className="average-rating">3.2</span>
                      </div>
                    </div>
                  </div>
                  <div className="review-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
                      orci enim, mattis nibh aliquam dui, nibh faucibus aenean.
                    </p>
                  </div>
                </div>
                {/* /Review Widget */}
                </OwlCarousel>
            </div>
          </section>
          {/* / Review */}
          {/* Agency */}
          <section className="section agency">
            <div className="container-fluid">
              <div className="row align-items-center black-bg">
                <div className="col-md-6 agency-box">
                  <img src={About_01} alt="" className="img-fluid" />
                </div>
                <div className="col-md-6 agency-box black-bg">
                  <div className="agency-content">
                    <h2>
                      Used by over <span className="orange-text">1500</span> of World
                      Leading Agencies work
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
                      orci enim, mattis nibh aliquam dui, nibh faucibus aenean.
                    </p>
                    <Link to="/project" className="btn learn-btn">
                      LEARN MORE
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* / Agency */}
          {/* Experts */}
          <section className="section expert">
            <div className="container">
              <div className="row">
                <div className="col-md-8 mx-auto">
                  <h5>SINCE THE START</h5>
                  <h2>We Provide Stable Service With Experts</h2>
                  <p>
                    Experience state-of-the-art marketplace platform with the Exertio.
                    We combine the experience of our global community around the globe
                    for a best marketplace theme.
                  </p>
                  <p>
                    With Exertio, you can develop a website for remote freelancers that
                    will provide their best to the clients who are looking for remote
                    resources.
                  </p>
                  <div className="btn-item">
                    <Link className="btn get-btn" to="/login">
                      Get Started
                    </Link>
                    <Link className="btn courses-btn" to="/project">
                      ViEW SERVICES
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* /Experts */}
        </>
         )
    
}
export default Aboutus;