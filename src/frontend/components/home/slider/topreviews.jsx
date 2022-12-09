import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// Import Images
import { Review_01, Review_02, Review_03 } from "../../imagepath";
import AOS from "aos";
import "aos/dist/aos.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const TopReviews = (props) => {

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
    slidespeed: 500,
    dots: false,
    nav: true,
    arrow: "true",
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>'
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
      992: {
        items: 1
      },
      1170: {
        items: 1
      }
    }
  };


  return (
    <>
      {/* Review */}
      <section className="section testimonial-section review review-two">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="section-header review-head text-left aos"
                data-aos="fade-up"
              >
                <h2 className="header-title">
                  Top <span>Reviews</span>
                </h2>
                <p>High Performing Developers To Your</p>
              </div>
            </div>
          </div>
          <div
          // id="testimonial-two"
          // className="owl-carousel owl-theme testimonial-two testimonial-slider aos"
          // data-aos="fade-up"
          >
            <OwlCarousel {...settings} className="owl-carousel owl-theme testimonial-two testimonial-slider aos" data-aos="fade-up">
              {/* Review Widget */}
              <div className="item">
                <div className="review-blog review-two-blog">
                  <div className="row">
                    <div className="col-lg-3 col-md-3">
                      <div className="review-img">
                        <Link to="/review">
                          <img
                            className="img-fluid"
                            src={Review_01}
                            alt="Post Image"
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-9 col-md-9">
                      <div className="review-info">
                        <h3>
                          <Link to="/review">Hannah Schmitt</Link>
                        </h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Cursus nibh mauris, nec turpis orci lectus maecenas.
                          Suspendisse sed magna eget nibh in turpis. Consequat duis diam
                          lacus arcu. Faucibus venenatis felis id augue sit cursus
                          pellentesque enim Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit. Cursus nibh mauris, nec turpis orci lectus
                          maecenas. Suspendisse{" "}
                        </p>
                        <span>May 8, 2020</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* / Review Widget */}
              {/* Review Widget */}
              <div className="item">
                <div className="review-blog review-two-blog">
                  <div className="row">
                    <div className="col-lg-3 col-md-3">
                      <div className="review-img">
                        <Link to="/review">
                          <img
                            className="img-fluid"
                            src={Review_02}
                            alt="Post Image"
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-9 col-md-9">
                      <div className="review-info">
                        <h3>
                          <Link to="/review">Davis Payerf</Link>
                        </h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Cursus nibh mauris, nec turpis orci lectus maecenas.
                          Suspendisse sed magna eget nibh in turpis. Consequat duis diam
                          lacus arcu. Faucibus venenatis felis id augue sit cursus
                          pellentesque enim Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit. Cursus nibh mauris, nec turpis orci lectus
                          maecenas. Suspendisse{" "}
                        </p>
                        <span>Jun 18, 2022</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Review Widget */}
              {/* Review Widget */}
              <div className="item">
                <div className="review-blog review-two-blog">
                  <div className="row">
                    <div className="col-lg-3 col-md-3">
                      <div className="review-img">
                        <Link to="/review">
                          <img
                            className="img-fluid"
                            src={Review_03}
                            alt="Post Image"
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-9 col-md-9">
                      <div className="review-info">
                        <h3>
                          <Link to="/review">Hannah Schmitt</Link>
                        </h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Cursus nibh mauris, nec turpis orci lectus maecenas.
                          Suspendisse sed magna eget nibh in turpis. Consequat duis diam
                          lacus arcu. Faucibus venenatis felis id augue sit cursus
                          pellentesque enim Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit. Cursus nibh mauris, nec turpis orci lectus
                          maecenas. Suspendisse{" "}
                        </p>
                        <span>May 10, 2021</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Review Widget */}
              {/* Review Widget */}
              <div className="item">
                <div className="review-blog review-two-blog">
                  <div className="row">
                    <div className="col-lg-3 col-md-3">
                      <div className="review-img">
                        <Link to="/review">
                          <img
                            className="img-fluid"
                            src={Review_02}
                            alt="Post Image"
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-9 col-md-9">
                      <div className="review-info">
                        <h3>
                          <Link to="/review">Davis Payerf</Link>
                        </h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Cursus nibh mauris, nec turpis orci lectus maecenas.
                          Suspendisse sed magna eget nibh in turpis. Consequat duis diam
                          lacus arcu. Faucibus venenatis felis id augue sit cursus
                          pellentesque enim Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit. Cursus nibh mauris, nec turpis orci lectus
                          maecenas. Suspendisse{" "}
                        </p>
                        <span>Feb 20, 2022</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Review Widget */}
            </OwlCarousel>
          </div>
        </div>
      </section>
      {/* / Review */}
    </>
  )

}
export default TopReviews;
