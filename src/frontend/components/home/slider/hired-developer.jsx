import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// Import Images
import { Developer_1, Avatar_1, Avatar_2, Avatar_3, Img_03, } from "../../imagepath";
import AOS from "aos";
import "aos/dist/aos.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const HiredDeveloper = (props) => {

  //Aos
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true
    });

  }, []);

  var settings = {
    //autoWidth: true,
    items: 2,
    margin: 25,
    dots: true,
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
        items: 2
      },
     
    }
  };

  return (
    <>
      {/* Review */}
      <div className="row">
        <div className="col-lg-8 col-md-7">
          <OwlCarousel {...settings} id="developers-slider-three" className="owl-carousel owl-theme developers-slider-three aos" data-aos="fade-up">
            <div className="freelance-widget widget-three">
              <div className="freelance-content free-one">
                <Link to="#" className="favourite">
                  <i className="far fa-bookmark" />
                </Link>
                <div className="freelance-img">
                  <Link to="/developer-details">
                    <img
                      src={Avatar_1}
                      alt="User Image"
                    />
                    <span className="verified">
                      <i className="fas fa-check-circle" />
                    </span>
                  </Link>
                </div>
                <div className="freelance-info">
                  <h3>
                    <Link to="/developer-details">George Wells</Link>
                  </h3>
                  <div className="freelance-specific">UI/UX Designer</div>
                  <div className="rating">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star" />
                  </div>
                </div>
                <div className="develop-footer d-flex align-items-center">
                  <h4>$25 Hourly</h4>
                  <div className="blue-view">
                    <Link
                      to="/developer-details"
                      className="btn btn-primary"
                    >
                      View Profile
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="freelance-widget freelance-group widget-three">
              <div className="freelance-content free-two">
                <Link to="#" className="favourite">
                  <i className="far fa-bookmark" />
                </Link>
                <div className="freelance-img">
                  <Link to="/developer-details">
                    <img
                      src={Avatar_2}
                      alt="User Image"
                    />
                    <span className="verified">
                      <i className="fas fa-check-circle" />
                    </span>
                  </Link>
                </div>
                <div className="freelance-info">
                  <h3>
                    <Link to="/developer-details">Timothy Smith</Link>
                  </h3>
                  <div className="freelance-specific">PHP Developer</div>
                  <div className="rating">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                </div>
                <div className="develop-footer d-flex align-items-center">
                  <h4>$25 Hourly</h4>
                  <div className="green-view">
                    <Link
                      to="/developer-details"
                      className="btn btn-primary"
                    >
                      View Profile
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="freelance-widget widget-three">
              <div className="freelance-content free-one">
                <Link to="#" className="favourite">
                  <i className="far fa-bookmark" />
                </Link>
                <div className="freelance-img">
                  <Link to="/developer-details">
                    <img
                      src={Avatar_3}
                      alt="User Image"
                    />
                    <span className="verified">
                      <i className="fas fa-check-circle" />
                    </span>
                  </Link>
                </div>
                <div className="freelance-info">
                  <h3>
                    <Link to="/developer-details">Janet Paden</Link>
                  </h3>
                  <div className="freelance-specific">Graphic Designer</div>
                  <div className="rating">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star" />
                  </div>
                </div>
                <div className="develop-footer d-flex align-items-center">
                  <h4>$25 Hourly</h4>
                  <div className="blue-view">
                    <Link
                      to="/developer-details"
                      className="btn btn-primary"
                    >
                      View Profile
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="freelance-widget freelance-group widget-three">
              <div className="freelance-content free-two">
                <Link to="#" className="favourite">
                  <i className="far fa-bookmark" />
                </Link>
                <div className="freelance-img">
                  <Link to="/developer-details">
                    <img src={Img_03} alt="User Image" />
                    <span className="verified">
                      <i className="fas fa-check-circle" />
                    </span>
                  </Link>
                </div>
                <div className="freelance-info">
                  <h3>
                    <Link to="/developer-details">James Douglas</Link>
                  </h3>
                  <div className="freelance-specific">iOS Developer</div>
                  <div className="rating">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star" />
                  </div>
                </div>
                <div className="develop-footer d-flex align-items-center">
                  <h4>$25 Hourly</h4>
                  <div className="green-view">
                    <Link
                      to="/developer-details"
                      className="btn btn-primary"
                    >
                      View Profile
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="freelance-widget widget-three">
              <div className="freelance-content free-one">
                <Link to="#" className="favourite">
                  <i className="far fa-bookmark" />
                </Link>
                <div className="freelance-img">
                  <Link to="/developer-details">
                    <img src={Img_03} alt="User Image" />
                    <span className="verified">
                      <i className="fas fa-check-circle" />
                    </span>
                  </Link>
                </div>
                <div className="freelance-info">
                  <h3>
                    <Link to="/developer-details">Richard Wilson</Link>
                  </h3>
                  <div className="freelance-specific">UI/UX Designer</div>
                  <div className="rating">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star" />
                  </div>
                </div>
                <div className="develop-footer d-flex align-items-center">
                  <h4>$25 Hourly</h4>
                  <div className="blue-view">
                    <Link
                      to="/developer-details"
                      className="btn btn-primary"
                    >
                      View Profile
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="freelance-widget widget-three">
              <div className="freelance-content free-two">
                <Link to="#" className="favourite">
                  <i className="far fa-bookmark" />
                </Link>
                <div className="freelance-img">
                  <Link to="/developer-details">
                    <img src={Img_03} alt="User Image" />
                    <span className="verified">
                      <i className="fas fa-check-circle" />
                    </span>
                  </Link>
                </div>
                <div className="freelance-info">
                  <h3>
                    <Link to="/developer-details">Janet Paden</Link>
                  </h3>
                  <div className="freelance-specific">iOS Developer</div>
                  <div className="rating">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star" />
                  </div>
                </div>
                <div className="develop-footer d-flex align-items-center">
                  <h4>$25 Hourly</h4>
                  <div className="green-view">
                    <Link
                      to="/developer-details"
                      className="btn btn-primary"
                    >
                      View Profile
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </OwlCarousel>

        </div>
        <div className="col-lg-4 col-md-5">
          <div className="developer-image aos" data-aos="fade-up">
            <img src={Developer_1} alt="Image" />
          </div>
        </div>
      </div>

      {/* / Review */}
    </>
  )

}
export default HiredDeveloper;
