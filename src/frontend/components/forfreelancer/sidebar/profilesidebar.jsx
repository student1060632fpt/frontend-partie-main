import React from "react";
import { Link } from "react-router-dom";
import { Img_04 } from "../../imagepath"

const ProfileSidebar = (props) => { 

        const pathname = window.location.pathname.split("/")[1];
        return (
            <>
               {/* profile Sidebar */}
              
                            {/* About Widget */}
                            <div className="pro-post widget-box about-widget profile-overview">
                                <div className="profile-head">
                                    <h4 className="pro-title mb-0">Profile Overview</h4>
                                </div>
                                <ul className="latest-posts pro-content">
                                    <li>
                                        <p>Company Name</p>
                                        <h6>Amaze Tech PVT LTD.</h6>
                                    </li>
                                    <li>
                                        <p>Company Established</p>
                                        <h6>02-12-2005</h6>
                                    </li>
                                    <li>
                                        <p>No of Employees</p>
                                        <h6>1500 - 1850</h6>
                                    </li>
                                    <li>
                                        <p>Owner Name</p>
                                        <h6>Charles Dickens</h6>
                                    </li>
                                    <li>
                                        <p>Email</p>
                                        <h6>amazetechpvt.ltd@gmail.com</h6>
                                    </li>
                                    <li>
                                        <p>Website</p>
                                        <h6>www.amazetechpvt.ltd.com</h6>
                                    </li>
                                </ul>
                                <div className="contact-btn">
                                    <Link to="#" className="btn btn-primary">
                                        <i className="fas fa-phone-alt" /> Contact
                                    </Link>
                                </div>
                            </div>
                            {/* /About Widget */}
                            {/* Company Location */}
                            <div className="pro-post widget-box location-widget">
                                <div className="profile-head">
                                    <h4 className="pro-title">Company Location</h4>
                                </div>
                                <div className="map-location">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319" />
                                </div>
                            </div>
                            {/* /Company Location */}
                            {/* Working Widget */}
                            <div className="pro-post widget-box  working-days">
                                <div className="profile-head">
                                    <h4 className="pro-title mb-0">Working Days</h4>
                                </div>
                                <ul className="latest-posts pro-content">
                                    <li>
                                        <p>Monday</p>
                                        <h6>9AM - 5PM</h6>
                                    </li>
                                    <li>
                                        <p>Tuesday </p>
                                        <h6>9AM - 5PM</h6>
                                    </li>
                                    <li>
                                        <p>Wednesday </p>
                                        <h6>9AM - 5PM</h6>
                                    </li>
                                    <li>
                                        <p>Thursday </p>
                                        <h6>9AM - 5PM</h6>
                                    </li>
                                    <li>
                                        <p>Friday </p>
                                        <h6>9AM - 5PM</h6>
                                    </li>
                                    <li>
                                        <p>Saturday </p>
                                        <h6>9AM - 5PM</h6>
                                    </li>
                                    <li>
                                        <p>Sunday </p>
                                        <h6>
                                            <span>Close</span>
                                        </h6>
                                    </li>
                                </ul>
                            </div>
                            {/* /Working Widget */}
                            {/* Social Widget */}
                            <div className="pro-post widget-box social-widget">
                                <div className="profile-head">
                                    <h4 className="pro-title">SOCIAL LINKS</h4>
                                </div>
                                <ul className="social-link-profile">
                                    <li>
                                        <Link to="#">
                                            <i className="fab fa-facebook" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <i className="fab fa-twitter" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <i className="fab fa-instagram" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <i className="fab fa-linkedin" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <i className="fab fa-telegram" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            {/* /Social Widget */}
                       
                        {/* /Profile Sidebar */}
            </>
         )
        
}
export { ProfileSidebar };