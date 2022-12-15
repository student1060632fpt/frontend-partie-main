import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Googleplay, Appstore } from "../imagepath";

const Footer = (props) => {
  const pathname = props.location.pathname.split("/")[1];

  const exclusionArray = [];
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
                    <p className="mb-2">Viet Nam</p>
                    <address className="mb-0">
                    Ho Chi Minh City University of Technology
                    </address>
                    <p>
                      Call:{" "}
                      <a href="#">
                        <u>123-456-789</u> (Toll-free)
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
                      <a href="/index">Home</a>
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
              <div className="col-lg-2">
                <div className="footer-widget footer-menu">
                  <h2 className="footer-title">Help &amp; Support</h2>
                  <ul>
                    <li>
                      <a href="/chats">Chat</a>
                    </li>

                    <li>
                      <a href="#">Privacy Policy</a>
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
                  </ul>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="footer-widget footer-menu">
                  
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
                    <p className="mb-0">© 2022 Partie Team All Rights Reserved</p>
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
};

export default Footer;
