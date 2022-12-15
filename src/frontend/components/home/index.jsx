import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { TopDevelopers } from "./slider/topdevelopers"
import { Reviews } from "./review"
// Import Images
import {
  Banner_img, Icon_01, Icon_02, Icon_03, Project_01, Project_02, Project_03, Project_04,
  Img_02, Img_03, Img_04, Subscribe, Blog_01, Blog_02, Blog_03
} from "../imagepath";
import AOS from "aos";
import "aos/dist/aos.css";
import Select2 from 'react-select2-wrapper';
// import 'react-select2-wrapper/css/select2.css';
import config from "config"

const Home = () => {

  //Aos

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true
    });

  }, []);


  const options = [
    { id: 1, text: 'Freelancers', },
    { id: 2, text: 'Projects', },
  ];
  return (
    <>
      {/* Home Banner */}
      <section className="section home-banner row-middle">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8 col-lg-7">
              <div className="banner-content aos" data-aos="fade-up">
                <div className="rating d-flex">
                  <i className="fas fa-star checked" />
                  <i className="fas fa-star checked" />
                  <i className="fas fa-star checked" />
                  <i className="fas fa-star checked" />
                  <i className="fas fa-star checked" />
                  <h5>Trused by over 2M+ users</h5>
                </div>
                <h1>
                  Get the perfect{" "}
                  <span className="orange-text">Developers &amp; Projects</span>
                </h1>
                <p>With the world's #1 Developers marketplace</p>
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
                        Search Now
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-4 col-lg-5">
              <div className="banner-img aos" data-aos="fade-up">
                <img
                  src={Banner_img}
                  className="img-fluid"
                  alt="banner"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Home Banner */}
      {/* Our Feature */}
      <section className="section feature">
        <div className="container">
          <div className="row">
            {/* Feature Item */}
            <div className="col-md-4">
              <div className="feature-item freelance-count aos" data-aos="fade-up">
                <div className="feature-icon">
                  <img
                    src={Icon_01}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="feature-content">
                  <h3>919,207</h3>
                  <p>freelance Developers</p>
                </div>
              </div>
            </div>
            {/* /Feature Item */}
            {/* Feature Item */}
            <div className="col-md-4">
              <div className="feature-item aos" data-aos="fade-up">
                <div className="feature-icon">
                  <img
                    src={Icon_02}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="feature-content">
                  <h3>25 - 100+</h3>
                  <p>Developers per project</p>
                </div>
              </div>
            </div>
            {/* /Feature Item */}
            {/* Feature Item */}
            <div className="col-md-4">
              <div className="feature-item comp-project aos" data-aos="fade-up">
                <div className="feature-icon">
                  <img
                    src={Icon_03}
                    className="img-fluid"
                    alt=""
                  />
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
      {/*- Developed Project  */}
      <section className="section work">
        <div className="container-fluid">
          <div className="row">
            {/* Feature Item */}
            <div className="col-md-6 work-box bg1">
              <div className="work-content aos" data-aos="fade-up">
                <h2>
                  I need a Developed <span>Project</span>
                </h2>
                <p>
                  Get the perfect Developed project for your budget from our
                  creative community.
                </p>
                <Link to="/project">
                  <i className="fas fa-long-arrow-alt-right long-arrow" />
                </Link>
              </div>
            </div>
            {/* /Feature Item */}
            <div className="col-md-6 work-box bg2">
              <div className="work-content aos" data-aos="fade-up">
                <h2>
                  I want to <span>work</span>
                </h2>
                <p>
                  Do you want to earn money, find unlimited clients and build your
                  freelance career?
                </p>
                <Link to="/developer">
                  <i className="fas fa-long-arrow-alt-right long-arrow" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*- /Developed Project  */}
      {/* Projects */}
      <section className="section projects">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 mx-auto">
              <div className="section-header text-center aos" data-aos="fade-up">
                <div className="section-line" />
                <h2 className="header-title">
                  Get Inspired
                  <br /> By Development Projects
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
                      src={Project_01}
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="project-content">
                    <h4>45</h4>
                    <h5>ANDROID APPS</h5>
                  </div>
                  <div className="pro-icon">
                    <div className="project-icon"></div>
                  </div>
                  <div className="project-content">
                    <h4>20</h4>
                    <h5>Developers</h5>
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
                      src={Project_02}
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="project-content">
                    <h4>45</h4>
                    <h5>LARAVEL</h5>
                  </div>
                  <div className="pro-icon">
                    <div className="project-icon"></div>
                  </div>
                  <div className="project-content">
                    <h4>20</h4>
                    <h5>Developers</h5>
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
                      src={Project_03}
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="project-content">
                    <h4>45</h4>
                    <h5>React</h5>
                  </div>
                  <div className="pro-icon">
                    <div className="project-icon"></div>
                  </div>
                  <div className="project-content">
                    <h4>20</h4>
                    <h5>Developers</h5>
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
                      src={Project_04}
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="project-content">
                    <h4>45</h4>
                    <h5>GOLANG</h5>
                  </div>
                  <div className="pro-icon">
                    <div className="project-icon"></div>
                  </div>
                  <div className="project-content">
                    <h4>20</h4>
                    <h5>Developers</h5>
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
                      src={Project_01}
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="project-content">
                    <h4>45</h4>
                    <h5>.NET</h5>
                  </div>
                  <div className="pro-icon">
                    <div className="project-icon"></div>
                  </div>
                  <div className="project-content">
                    <h4>20</h4>
                    <h5>Developers</h5>
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
                      src={Project_04}
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="project-content">
                    <h4>45</h4>
                    <h5>JAVA</h5>
                  </div>
                  <div className="pro-icon">
                    <div className="project-icon"></div>
                  </div>
                  <div className="project-content">
                    <h4>20</h4>
                    <h5>Developers</h5>
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
                      src={Project_03}
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="project-content">
                    <h4>45</h4>
                    <h5>PYTHON</h5>
                  </div>
                  <div className="pro-icon">
                    <div className="project-icon"></div>
                  </div>
                  <div className="project-content">
                    <h4>20</h4>
                    <h5>Developers</h5>
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
                      src={Project_01}
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="project-content">
                    <h4>45</h4>
                    <h5>ANGULAR</h5>
                  </div>
                  <div className="pro-icon">
                    <div className="project-icon"></div>
                  </div>
                  <div className="project-content">
                    <h4>20</h4>
                    <h5>Developers</h5>
                  </div>
                </div>
              </div>
            </div>
            {/*- /Project Item  */}
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="see-all aos" data-aos="fade-up">
                <Link to="/project" className="btn all-btn">
                  SEE ALL PROJECT
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Projects */}
      {/* Top Instructor */}
      <TopDevelopers />
      {/* End Developer */}

    </>


  )
}
export default Home;