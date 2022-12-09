import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// Import Slick Slider
import Slider from "react-slick";
// Import Images
import { Review_01, Review_02 } from "../imagepath"
import AOS from "aos";
import "aos/dist/aos.css";

const Reviews = (props) => {

  //Aos

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true
    });

  }, []);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    margin: 30,
    slidesToShow: 3,
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>'
    ],
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  return (
    <>
      <section className="section testimonial-section review">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-header text-center aos" data-aos="fade-up">
                <div className="section-line" />
                <h2 className="header-title">Top Reviews</h2>
                <p>High Performing Developers To Your</p>
              </div>
            </div>
          </div>

          {/* Review Widget */}
          {/* <div className="row">
                  <div className="col-md-12"> */}
          {/* <div className="review-slider slider"> */}
          <Slider {...settings} className="owl-carousel owl-theme review-slider owl-loaded owl-drag aos" data-aos="fade-up">
            {/* Review Widget */}
            <div className="review-blog">
              <div className="review-top d-flex align-items-center">
                <div className="review-img">
                  <Link to="/review">
                    <img className="img-fluid" src={Review_01} alt="Post Image" />
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
                      src={Review_01}
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
          </Slider>
          {/* </div>					
                </div> */}
        </div>
      </section>
      {/* / Review */}
    </>
  )

}
export { Reviews };