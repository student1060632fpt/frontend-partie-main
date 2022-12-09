import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// Import Slick Slider
import Slider from "react-slick";
// Import Images
import { Img_03, Avatar_1, Avatar_2, Avatar_3 } from "../../imagepath"
import AOS from "aos";
import "aos/dist/aos.css";
import $ from "jquery"


const TopDevelopers = (props) => {

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
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  useEffect(() => {
    $(".slick-prev").html('<i class="fa fa-chevron-left"></i>');
    $(".slick-next").html('<i class="fa fa-chevron-right"></i>');
  });
  return (
    <>
      {/* Top Instructor */}
      <section className="section developer">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-sm-12 col-12 mx-auto">
              <div className="section-header text-center aos" data-aos="fade-up">
                <div className="section-line" />
                <h2 className="header-title">Most Hired Developers</h2>
                <p>Work with talented people at the most affordable price</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              {/* <div className="developer-slider slider"> */}
              <Slider {...settings} className="developer-slider aos" data-aos="fade-up">

                <div className="freelance-widget">
                  <div className="freelance-content">
                    <a data-toggle="modal" href="#rating" className="favourite">
                      <i className="fas fa-star" />
                    </a>
                    <div className="freelance-img">
                      <a href="#">
                        <img src={Avatar_1} alt="User Image" />
                        <span className="verified">
                          <i className="fas fa-check-circle" />
                        </span>
                      </a>
                    </div>
                    <div className="freelance-info">
                      <h3>
                        <a href="#">George Wells</a>
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
                        <span className="average-rating"> 4.7 (32)</span>
                      </div>
                      <div className="freelance-tags">
                        <a href="">
                          <span className="badge badge-pill badge-design">
                            Web Design
                          </span>
                        </a>
                        <a href="">
                          <span className="badge badge-pill badge-design">
                            UI Design
                          </span>
                        </a>
                        <a href="">
                          <span className="badge badge-pill badge-design">Node Js</span>
                        </a>
                      </div>
                      <div className="freelancers-price">$25 Hourly</div>
                    </div>
                  </div>
                  <div className="cart-hover">
                    <Link to="/developer-details" className="btn-cart" tabIndex={-1}>
                      View Profile
                    </Link>
                  </div>
                </div>
                <div className="freelance-widget">
                  <div className="freelance-content">
                    <a data-toggle="modal" href="#rating" className="favourite">
                      <i className="fas fa-star" />
                    </a>
                    <div className="freelance-img">
                      <a href="#">
                        <img src={Avatar_2} alt="User Image" />
                        <span className="verified">
                          <i className="fas fa-check-circle" />
                        </span>
                      </a>
                    </div>
                    <div className="freelance-info">
                      <h3>
                        <a href="#">Timothy Smith</a>
                      </h3>
                      <div className="freelance-specific">PHP Developer</div>
                      <div className="freelance-location">
                        <i className="fas fa-map-marker-alt me-1" />
                        Illinois, USA
                      </div>
                      <div className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <span className="average-rating"> 3.5 (25)</span>
                      </div>
                      <div className="freelance-tags">
                        <a href="">
                          <span className="badge badge-pill badge-design">
                            Web Design
                          </span>
                        </a>
                        <a href="">
                          <span className="badge badge-pill badge-design">
                            UI Design
                          </span>
                        </a>
                        <a href="">
                          <span className="badge badge-pill badge-design">Node Js</span>
                        </a>
                      </div>
                      <div className="freelancers-price">Free</div>
                    </div>
                  </div>
                  <div className="cart-hover">
                    <Link to="/developer-details" className="btn-cart" tabIndex={-1}>
                      View Profile
                    </Link>
                  </div>
                </div>
                <div className="freelance-widget">
                  <div className="freelance-content">
                    <a data-toggle="modal" href="#rating" className="favourite">
                      <i className="fas fa-star" />
                    </a>
                    <div className="freelance-img">
                      <a href="#">
                        <img src={Avatar_3} alt="User Image" />
                        <span className="verified">
                          <i className="fas fa-check-circle" />
                        </span>
                      </a>
                    </div>
                    <div className="freelance-info">
                      <h3>
                        <a href="#">Janet Paden</a>
                      </h3>
                      <div className="freelance-specific">Graphic Designer</div>
                      <div className="freelance-location">
                        <i className="fas fa-map-marker-alt me-1" />
                        New York, USA
                      </div>
                      <div className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star" />
                        <span className="average-rating"> 4.1 (30)</span>
                      </div>
                      <div className="freelance-tags">
                        <a href="">
                          <span className="badge badge-pill badge-design">
                            Web Design
                          </span>
                        </a>
                        <a href="">
                          <span className="badge badge-pill badge-design">
                            UI Design
                          </span>
                        </a>
                        <a href="">
                          <span className="badge badge-pill badge-design">Node Js</span>
                        </a>
                      </div>
                      <div className="freelancers-price">$27 Hourly</div>
                    </div>
                  </div>
                  <div className="cart-hover">
                    <Link to="/developer-details" className="btn-cart" tabIndex={-1}>
                      View Profile
                    </Link>
                  </div>
                </div>
                <div className="freelance-widget">
                  <div className="freelance-content">
                    <a data-toggle="modal" href="#rating" className="favourite">
                      <i className="fas fa-star" />
                    </a>
                    <div className="freelance-img">
                      <a href="#">
                        <img src={Img_03} alt="User Image" />
                        <span className="verified">
                          <i className="fas fa-check-circle" />
                        </span>
                      </a>
                    </div>
                    <div className="freelance-info">
                      <h3>
                        <a href="#">James Douglas</a>
                      </h3>
                      <div className="freelance-specific">iOS Developer</div>
                      <div className="freelance-location">
                        <i className="fas fa-map-marker-alt me-1" />
                        Florida, USA
                      </div>
                      <div className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star" />
                        <span className="average-rating"> 4.3 (31)</span>
                      </div>
                      <div className="freelance-tags">
                        <a href="">
                          <span className="badge badge-pill badge-design">
                            Web Design
                          </span>
                        </a>
                        <a href="">
                          <span className="badge badge-pill badge-design">
                            UI Design
                          </span>
                        </a>
                        <a href="">
                          <span className="badge badge-pill badge-design">Node Js</span>
                        </a>
                      </div>
                      <div className="freelancers-price">$23 Hourly</div>
                    </div>
                  </div>
                  <div className="cart-hover">
                    <Link to="/developer-details" className="btn-cart" tabIndex={-1}>
                      View Profile
                    </Link>
                  </div>
                </div>
                <div className="freelance-widget">
                  <div className="freelance-content">
                    <a data-toggle="modal" href="#rating" className="favourite">
                      <i className="fas fa-star" />
                    </a>
                    <div className="freelance-img">
                      <a href="#">
                        <img src={Img_03} alt="User Image" />
                        <span className="verified">
                          <i className="fas fa-check-circle" />
                        </span>
                      </a>
                    </div>
                    <div className="freelance-info">
                      <h3>
                        <a href="#">Richard Wilson</a>
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
                        <span className="average-rating"> 4.7 (32)</span>
                      </div>
                      <div className="freelance-tags">
                        <a href="">
                          <span className="badge badge-pill badge-design">
                            Web Design
                          </span>
                        </a>
                        <a href="">
                          <span className="badge badge-pill badge-design">
                            UI Design
                          </span>
                        </a>
                        <a href="">
                          <span className="badge badge-pill badge-design">Node Js</span>
                        </a>
                      </div>
                      <div className="freelancers-price">$25 Hourly</div>
                    </div>
                  </div>
                  <div className="cart-hover">
                    <Link to="/developer-details" className="btn-cart" tabIndex={-1}>
                      View Profile
                    </Link>
                  </div>
                </div>
                <div className="freelance-widget">
                  <div className="freelance-content">
                    <a data-toggle="modal" href="#rating" className="favourite">
                      <i className="fas fa-star" />
                    </a>
                    <div className="freelance-img">
                      <a href="#">
                        <img src={Img_03} alt="User Image" />
                        <span className="verified">
                          <i className="fas fa-check-circle" />
                        </span>
                      </a>
                    </div>
                    <div className="freelance-info">
                      <h3>
                        <a href="#">Richard Wilson</a>
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
                        <span className="average-rating"> 4.7 (32)</span>
                      </div>
                      <div className="freelance-tags">
                        <a href="">
                          <span className="badge badge-pill badge-design">
                            Web Design
                          </span>
                        </a>
                        <a href="">
                          <span className="badge badge-pill badge-design">
                            UI Design
                          </span>
                        </a>
                        <a href="">
                          <span className="badge badge-pill badge-design">Node Js</span>
                        </a>
                      </div>
                      <div className="freelancers-price">$25 Hourly</div>
                    </div>
                  </div>
                  <div className="cart-hover">
                    <Link to="/developer-details" className="btn-cart" tabIndex={-1}>
                      View Profile
                    </Link>
                  </div>
                </div>
                <div className="freelance-widget">
                  <div className="freelance-content">
                    <a data-toggle="modal" href="#rating" className="favourite">
                      <i className="fas fa-star" />
                    </a>
                    <div className="freelance-img">
                      <a href="#">
                        <img src={Img_03} alt="User Image" />
                        <span className="verified">
                          <i className="fas fa-check-circle" />
                        </span>
                      </a>
                    </div>
                    <div className="freelance-info">
                      <h3>
                        <a href="#">Richard Wilson</a>
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
                        <span className="average-rating"> 4.7 (32)</span>
                      </div>
                      <div className="freelance-tags">
                        <a href="">
                          <span className="badge badge-pill badge-design">
                            Web Design
                          </span>
                        </a>
                        <a href="">
                          <span className="badge badge-pill badge-design">
                            UI Design
                          </span>
                        </a>
                        <a href="">
                          <span className="badge badge-pill badge-design">Node Js</span>
                        </a>
                      </div>
                      <div className="freelancers-price">$25 Hourly</div>
                    </div>
                  </div>
                  <div className="cart-hover">
                    <Link to="/developer-details" className="btn-cart" tabIndex={-1}>
                      View Profile
                    </Link>
                  </div>
                </div>
                <div className="freelance-widget">
                  <div className="freelance-content">
                    <a data-toggle="modal" href="#rating" className="favourite">
                      <i className="fas fa-star" />
                    </a>
                    <div className="freelance-img">
                      <a href="#">
                        <img src={Img_03} alt="User Image" />
                        <span className="verified">
                          <i className="fas fa-check-circle" />
                        </span>
                      </a>
                    </div>
                    <div className="freelance-info">
                      <h3>
                        <a href="#">Richard Wilson</a>
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
                        <span className="average-rating"> 4.7 (32)</span>
                      </div>
                      <div className="freelance-tags">
                        <a href="">
                          <span className="badge badge-pill badge-design">
                            Web Design
                          </span>
                        </a>
                        <a href="">
                          <span className="badge badge-pill badge-design">
                            UI Design
                          </span>
                        </a>
                        <a href="">
                          <span className="badge badge-pill badge-design">Node Js</span>
                        </a>
                      </div>
                      <div className="freelancers-price">$25 Hourly</div>
                    </div>
                  </div>
                  <div className="cart-hover">
                    <Link to="/developer-details" className="btn-cart" tabIndex={-1}>
                      View Profile
                    </Link>
                  </div>
                </div>
                <div className="freelance-widget">
                  <div className="freelance-content">
                    <a
                      data-toggle="modal"
                      href="#rating"
                      className="favourite favourited"
                    >
                      <i className="fas fa-star" />
                    </a>
                    <div className="freelance-img">
                      <a href="#">
                        <img src={Img_03} alt="User Image" />
                        <span className="verified">
                          <i className="fas fa-check-circle" />
                        </span>
                      </a>
                    </div>
                    <div className="freelance-info">
                      <h3>
                        <a href="#">Richard Wilson</a>
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
                        <span className="average-rating"> 4.8 (55)</span>
                      </div>
                      <div className="freelance-tags">
                        <a href="">
                          <span className="badge badge-pill badge-design">
                            Web Design
                          </span>
                        </a>
                        <a href="">
                          <span className="badge badge-pill badge-design">
                            UI Design
                          </span>
                        </a>
                        <a href="">
                          <span className="badge badge-pill badge-design">Node Js</span>
                        </a>
                      </div>
                      <div className="freelancers-price">$25 Hourly</div>
                    </div>
                  </div>
                  <div className="cart-hover">
                    <Link to="/developer-details" className="btn-cart" tabIndex={-1}>
                      View Profile
                    </Link>
                  </div>
                </div>
                <div className="freelance-widget">
                  <div className="freelance-content">
                    <a data-toggle="modal" href="#rating" className="favourite">
                      <i className="fas fa-star" />
                    </a>
                    <div className="freelance-img">
                      <a href="#">
                        <img src={Img_03} alt="User Image" />
                        <span className="verified">
                          <i className="fas fa-check-circle" />
                        </span>
                      </a>
                    </div>
                    <div className="freelance-info">
                      <h3>
                        <a href="#">Richard Wilson</a>
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
                        <span className="average-rating"> 5.0 (4)</span>
                      </div>
                      <div className="freelance-tags">
                        <a href="">
                          <span className="badge badge-pill badge-design">
                            Web Design
                          </span>
                        </a>
                        <a href="">
                          <span className="badge badge-pill badge-design">
                            UI Design
                          </span>
                        </a>
                        <a href="">
                          <span className="badge badge-pill badge-design">Node Js</span>
                        </a>
                      </div>
                      <div className="freelancers-price">Free</div>
                    </div>
                  </div>
                  <div className="cart-hover">
                    <Link to="/developer-details" className="btn-cart" tabIndex={-1}>
                      View Profile
                    </Link>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
      {/* End Developer */}
    </>
  )

}
export { TopDevelopers };