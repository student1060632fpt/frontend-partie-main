import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
// Import Slick Slider
import Slider from "react-slick";
// Import Images
import { Avatar_1, Avatar_2, Avatar_3, Avatar_4, Avatar_5, quote_01 } from "../../imagepath";
import AOS from "aos";
import "aos/dist/aos.css";



const SayAbout = (props) => {

  //Aos
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true
    });

  }, []);

  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  //i dont seem to need this
  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);


  return (
    <>

      <div>
        <Slider className="slider say-about slider-for aos" data-aos="fade-up" asNavFor={nav2} ref={slider1}>
          <div>
            <div className="testimonial-all d-flex justify-content-center">
              <div className="row">
                <div className="col-lg-3">
                  <div className="img-reviews">
                    <div className="review-quote">
                      <img src={quote_01} alt="" />
                    </div>
                    <img src={Avatar_1} alt="" />
                  </div>
                </div>
                <div className="col-lg-9">
                  <div className="testimonial-two-head ">
                    <h3>George Wells</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Cursus nibh mauris, nec turpis orci lectus maecenas.
                      Suspendisse sed magna eget nibh in turpis. Consequat duis
                      diam lacus arcu. Faucibus venenatis felis id augue sit
                      cursus pellentesque enim arcu. Elementum felis magna pretium
                      in tincidunt. Suspendisse sed magna eget nibh in turpis.
                      Consequat duis diam lacus arcu. urpis orci lectus maecenas.
                      Suspendisse sed magna eget nibh in turpis. Consequat duis
                      diam lacus arcu. Faucibus venenatis felis id augue sit
                      cursus pellentesque enim arcu
                    </p>
                    <div className="review-date">
                      <span>May 8, 2020</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="testimonial-all d-flex justify-content-center">
              <div className="row">
                <div className="col-lg-3">
                  <div className="img-reviews">
                    <div className="review-quote">
                      <img src={quote_01} alt="" />
                    </div>
                    <img src={Avatar_2} alt="" />
                  </div>
                </div>
                <div className="col-lg-9">
                  <div className="testimonial-two-head ">
                    <h3>Timothy Smith</h3>
                    <p>
                      Suspendisse sed magna eget nibh in turpis. Consequat duis
                      diam lacus arcu. Faucibus venenatis felis id augue sit
                      cursus pellentesque enim arcu. Elementum felis magna pretium
                      in tincidunt. Suspendisse sed magna eget nibh in turpis.
                      Suspendisse sed magna eget nibh in turpis. Consequat duis
                      diam lacus arcu. Faucibus venenatis felis id augue sit
                      cursus pellentesque enim arcu. Elementum felis magna pretium
                      in tincidunt. Suspendisse sed magna eget nibh in turpis.
                      Consequat duis diam lacus arcu. urpis orci lectus maecenas.
                      Suspendisse sed magna eget nibh in turpis.{" "}
                    </p>
                    <div className="review-date">
                      <span>Jun 18, 2022</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="testimonial-all d-flex justify-content-center">
              <div className="row">
                <div className="col-lg-3">
                  <div className="img-reviews">
                    <div className="review-quote">
                      <img src={quote_01} alt="" />
                    </div>
                    <img src={Avatar_3} alt="" />
                  </div>
                </div>
                <div className="col-lg-9">
                  <div className="testimonial-two-head ">
                    <h3>Janet Paden</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Cursus nibh mauris, nec turpis orci lectus maecenas.
                      Suspendisse sed magna eget nibh in turpis. Consequat duis
                      diam lacus arcu. Faucibus venenatis felis id augue sit
                      cursus pellentesque enim arcu. Elementum felis magna pretium
                      in tincidunt. Suspendisse sed magna eget nibh in turpis.
                      Consequat duis diam lacus arcu. urpis orci lectus maecenas.
                      Suspendisse sed magna eget nibh in turpis. Consequat duis
                      diam lacus arcu. Faucibus venenatis felis id augue sit
                      cursus pellentesque enim arcu
                    </p>
                    <div className="review-date">
                      <span>May 20, 2021</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="testimonial-all d-flex justify-content-center">
              <div className="row">
                <div className="col-lg-3">
                  <div className="img-reviews">
                    <div className="review-quote">
                      <img src={quote_01} alt="" />
                    </div>
                    <img src={Avatar_4} alt="" />
                  </div>
                </div>
                <div className="col-lg-9">
                  <div className="testimonial-two-head ">
                    <h3>James Douglas</h3>
                    <p>
                      Suspendisse sed magna eget nibh in turpis. Consequat duis
                      diam lacus arcu. Faucibus venenatis felis id augue sit
                      cursus pellentesque enim arcu. Elementum felis magna pretium
                      in tincidunt. . Suspendisse sed magna eget nibh in turpis.
                      Consequat duis diam lacus arcu. urpis orci lectus maecenas.
                      Suspendisse sed magna eget nibh in turpis. Consequat duis
                      diam lacus arcu. Faucibus venenatis felis id augue sit
                      cursus pellentesque enim arcu
                    </p>
                    <div className="review-date">
                      <span>Jan 10, 2020</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="testimonial-all d-flex justify-content-center">
              <div className="row">
                <div className="col-lg-3">
                  <div className="img-reviews">
                    <div className="review-quote">
                      <img src={quote_01} alt="" />
                    </div>
                    <img src={Avatar_5} alt="" />
                  </div>
                </div>
                <div className="col-lg-9">
                  <div className="testimonial-two-head ">
                    <h3>Timothy Smith</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Cursus nibh mauris, nec turpis orci lectus maecenas.
                      Suspendisse sed magna eget nibh in turpis. Consequat duis
                      diam lacus arcu. Faucibus venenatis felis id augue sit
                      cursus pellentesque enim arcu. Elementum felis magna pretium
                      in tincidunt. Suspendisse sed magna eget nibh in turpis.
                      Consequat duis diam lacus arcu. urpis orci lectus maecenas.
                      Suspendisse sed magna eget nibh in turpis. Consequat duis
                      diam lacus arcu. Faucibus venenatis felis id augue sit
                      cursus pellentesque enim arcu
                    </p>
                    <div className="review-date">
                      <span>May 8, 2020</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>

        <Slider
          asNavFor={nav1}
          ref={slider2}
          slidesToShow={4}
          slidesToScroll={1}
          arrows={false}
          swipeToSlide={true}
          focusOnSelect={true}
          className=" slider client-img slider-nav aos " data-aos="fade-up"
        >
          <div className="testimonial-thumb">
            <img src={Avatar_1} alt="" />
          </div>
          <div className="testimonial-thumb">
            <img src={Avatar_2} alt="" />
          </div>
          <div className="testimonial-thumb">
            <img src={Avatar_3} alt="" />
          </div>
          <div className="testimonial-thumb">
            <img src={Avatar_4} alt="" />
          </div>
          <div className="testimonial-thumb">
            <img src={Avatar_5} alt="" />
          </div>
        </Slider>
      </div>
    </>

  )

}
export default SayAbout;