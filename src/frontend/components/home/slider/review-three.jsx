import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// Import Images
import { Review_1, Review_01, } from "../../imagepath";
import AOS from "aos";
import "aos/dist/aos.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const ReviewThree = (props) => {

  //Aos
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true
    });

  }, []);


  var settings = {
    items: 5,
    margin: 30,
    dots: "true",
    arrow: "true",
    nav: true,
    navText: [
      '<i class="fas fa-arrow-left"></i>',
      '<i class="fas fa-arrow-right"></i>'
    ],
    loop: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      1170: {
        items: 1
      },
     
    }
  };


  return (
    <>
      {/* Review */}

      <div className="col-lg-6 col-md-6 d-flex align-items-center">
        <OwlCarousel {...settings} id="testimonial-slider-three" className="owl-carousel owl-theme testimonial-slider-three aos" data-aos="fade-up">
          {/* Review Widget */}
          <div className="review-blog item">
            <div className="review-content">
              <p>
                Eget aenean accumsan Search School, OLorem ipsum dolor sit
                amet, consectetur adipiscing elit. Eget aenean accumsan Eget
                Eget aenean accumsan Search School, OLorem ipsum dolor sit
                amet, consectetur adipiscing elit. Eget aenean accumsan Eget{" "}
              </p>
            </div>
            <div className="review-top d-flex align-items-center">
              <div className="review-img">
                <a href="/review">
                  <img
                    className="img-fluid"
                    src={Review_01}
                    alt="Post Image"
                  />
                </a>
              </div>
              <div className="review-info">
                <h3>Janet Paden</h3>
                <h5>iOS Developer</h5>
              </div>
            </div>
            <div className="rating">
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <i className="fas fa-star" />
            </div>
          </div>
          {/* / Review Widget */}
          {/* Review Widget */}
          <div className="review-blog item">
            <div className="review-content">
              <p>
                Eget aenean accumsan Search School, OLorem ipsum dolor sit
                amet, consectetur adipiscing elit. Eget aenean accumsan Eget
                Eget aenean accumsan Search School, OLorem ipsum dolor sit
                amet, consectetur adipiscing elit. Eget aenean accumsan Eget{" "}
              </p>
            </div>
            <div className="review-top d-flex align-items-center">
              <div className="review-img">
                <a href="/review">
                  <img
                    className="img-fluid"
                    src={Review_01}
                    alt="Post Image"
                  />
                </a>
              </div>
              <div className="review-info">
                <h3>Davis Payerf</h3>
                <h5>CEO</h5>
              </div>
            </div>
            <div className="rating">
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <i className="fas fa-star" />
            </div>
          </div>
          {/* /Review Widget */}
          {/* Review Widget */}
          <div className="review-blog item">
            <div className="review-content">
              <p>
                Eget aenean accumsan Search School, OLorem ipsum dolor sit
                amet, consectetur adipiscing elit. Eget aenean accumsan Eget
                Eget aenean accumsan Search School, OLorem ipsum dolor sit
                amet, consectetur adipiscing elit. Eget aenean accumsan Eget{" "}
              </p>
            </div>
            <div className="review-top d-flex align-items-center">
              <div className="review-img">
                <a href="/review">
                  <img
                    className="img-fluid"
                    src={Review_01}
                    alt="Post Image"
                  />
                </a>
              </div>
              <div className="review-info">
                <h3>Timothy Smith</h3>
                <h5>PHP Developer</h5>
              </div>
            </div>
            <div className="rating">
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <i className="fas fa-star filled" />
              <i className="fas fa-star" />
            </div>
          </div>
        </OwlCarousel>
        {/* /Review Widget */}

      </div>

      {/* / Review */}
    </>
  )

}
export default ReviewThree;
