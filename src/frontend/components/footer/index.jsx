import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Googleplay, Appstore } from '../imagepath';

const Footer =(props)=> {
 
  const pathname = props.location.pathname.split("/")[1];
    
  const exclusionArray = [

  ];
  if (exclusionArray.indexOf(props.location.pathname) >= 0) {
    return "";
  }
    return (
      <>
        {/* Footer */}
        <footer className="footer">
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <h2 className="footer-title">Office Address</h2>
                  <div className="footer-address">
                    <div className="off-address">
                      <p className="mb-2">New York, USA (HQ)</p>
                      <address className="mb-0">
                        750 Sing Sing Rd, Horseheads, NY, 14845
                      </address>
                      <p>
                        Call:{" "}
                        <a href="#">
                          <u>469-537-2410</u> (Toll-free)
                        </a>{" "}
                      </p>
                    </div>
                    <div className="off-address">
                      <p className="mb-2">Sydney, Australia </p>
                      <address className="mb-0">
                        24 Farrar Parade COOROW WA 6515
                      </address>
                      <p>
                        Call:{" "}
                        <a href="#">
                          <u>(08) 9064 9807</u> (Toll-free)
                        </a>{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="footer-widget footer-menu">
                    <h2 className="footer-title">Useful Links</h2>
                    <ul>
                      <li>
                        <a href="/about">About Us</a>
                      </li>
                      <li>
                        <a href="/blog-list">Blog</a>
                      </li>
                      <li>
                        <a href="/index">Login</a>
                      </li>
                      <li>
                        <a href="/register">Register</a>
                      </li>
                      <li>
                        <a href="/forgot-password">Forgot Password</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="footer-widget footer-menu">
                    <h2 className="footer-title">Help &amp; Support</h2>
                    <ul>
                      <li>
                        <a href="/chats">Chat</a>
                      </li>
                      <li>
                        <a href="#">Faq</a>
                      </li>
                      <li>
                        <a href="/review">Reviews</a>
                      </li>
                      <li>
                        <a href="/privacy-policy">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="#">Terms of use</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="footer-widget footer-menu">
                    <h2 className="footer-title">Other Links</h2>
                    <ul>
                      <li>
                        <a href="/freelancer-dashboard">Freelancers</a>
                      </li>
                      <li>
                        <a href="/project">Project</a>
                      </li>
                      <li>
                        <a href="post-/project">Post Project</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="footer-widget footer-menu">
                    <h2 className="footer-title">Mobile Application</h2>
                    <p>
                      Download our App and get the latest Breaking News Alerts and
                      latest headlines and daily articles near you.
                    </p>
                    <div className="row g-2">
                      <div className="col">
                        <a href="#">
                          <img
                            className="img-fluid"
                            src={Appstore}
                            alt="app-store"
                          />
                        </a>
                      </div>
                      <div className="col">
                        <a href="#">
                          <img
                            className="img-fluid"
                            src={Googleplay}
                            alt="google-play"
                          />
                        </a>
                      </div>
                    </div>
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
                      <p className="mb-0">© 2021 All Rights Reserved</p>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6 right-text">
                    <div className="social-icon">
                      <ul>
                        <li>
                          <a href="#" className="icon" target="_blank">
                            <i className="fab fa-instagram" />{" "}
                          </a>
                        </li>
                        <li>
                          <a href="#" className="icon" target="_blank">
                            <i className="fab fa-linkedin-in" />{" "}
                          </a>
                        </li>
                        <li>
                          <a href="#" className="icon" target="_blank">
                            <i className="fab fa-twitter" />{" "}
                          </a>
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
    );
  }


export default Footer;
