import React, { Component } from "react";
import { Link } from "react-router-dom";
import Pagecontent from "./pagecontent"

class MembershipPlans extends Component {
   
    render() {
        
        return (
            <>
                <div className="breadcrumb-bar">
                    <div className="container">
                        <div className="row align-items-center inner-banner">
                            <div className="col-md-12 col-12 text-center">
                                <h2 className="breadcrumb-title">Try a Membership</h2>
                                <nav aria-label="breadcrumb" className="page-breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Membership</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <Pagecontent/>
                <div className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <ul className="nav btn-group tab-btn">
                                    <li className="nav-item btn in-btn "><a className="nav-link active" href="#plan1" data-toggle="tab">Montly Plan</a></li>
                                    <li className="nav-item btn out-btn "><a className="nav-link" href="#plan2" data-toggle="tab">Annual Plan</a></li>
                                </ul>
                                <div className="tab-content mt-4">
                                    <div className="tab-pane show active" id="plan1">
                                        <div className="row">							
                                        <div className="column-5">							
                                            <div className="price-plan">
                                            <ul className="price-features">
                                                <li className="header-price">
                                                <h3>Intro</h3>
                                                <p>Monthly Price</p>
                                                </li>
                                                <li className="yr-price">
                                                <h3>$1200</h3>
                                                <p>Duration: One Year</p>
                                                </li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li className="footer-price"><a href="#" className="btn btn-block plan-btn">Select Plan</a></li>
                                            </ul>
                                            </div>
                                        </div>
                                        <div className="column-5">							
                                            <div className="price-plan">
                                            <ul className="price-features">
                                                <li className="header-price">
                                                <h3>Intro</h3>
                                                <p>Monthly Price</p>
                                                </li>
                                                <li className="yr-price">
                                                <h3>$1200</h3>
                                                <p>Duration: One Year</p>
                                                </li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li className="footer-price"><a href="#" className="btn btn-block plan-btn">Select Plan</a></li>
                                            </ul>
                                            </div>
                                        </div>
                                        <div className="column-5">							
                                            <div className="price-plan">
                                            <ul className="price-features plus-price">
                                                <li className="header-price">
                                                <h3>Plus</h3>
                                                <p>Monthly Price</p>
                                                </li>
                                                <li className="subheader-price">
                                                <p>FROM ₹729.00 INR</p>
                                                <p>TRY ONE MONTH</p>										
                                                </li>
                                                <li className="yr-price">
                                                <h3>FREE</h3>
                                                <p>or <span className="orange-text">purchase now!</span></p>
                                                </li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li className="footer-price"><a href="#" className="btn btn-block plan-btn">Try Free Trial</a></li>
                                            </ul>
                                            </div>
                                        </div>
                                        <div className="column-5">							
                                            <div className="price-plan">
                                            <ul className="price-features">
                                                <li className="header-price">
                                                <h3>Professional </h3>
                                                <p>Monthly Price</p>
                                                </li>
                                                <li className="yr-price">
                                                <h3>$1200</h3>
                                                <p>Duration: One Year</p>
                                                </li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li className="footer-price"><a href="#" className="btn btn-block plan-btn">Select Plan</a></li>
                                            </ul>
                                            </div>
                                        </div>
                                        <div className="column-5">							
                                            <div className="price-plan">
                                            <ul className="price-features">
                                                <li className="header-price">
                                                <h3>Premier </h3>
                                                <p>Monthly Price</p>
                                                </li>
                                                <li className="yr-price">
                                                <h3>$1200</h3>
                                                <p>Duration: One Year</p>
                                                </li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li className="footer-price"><a href="#" className="btn btn-block plan-btn">Select Plan</a></li>
                                            </ul>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="plan2">
                                        <div className="row">							
                                        <div className="column-5">							
                                            <div className="price-plan">
                                            <ul className="price-features">
                                                <li className="header-price">
                                                <h3>Intro</h3>
                                                <p>Monthly Price</p>
                                                </li>
                                                <li className="yr-price">
                                                <h3>$1200</h3>
                                                <p>Duration: One Year</p>
                                                </li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li className="footer-price"><a href="#" className="btn btn-block plan-btn">Select Plan</a></li>
                                            </ul>
                                            </div>
                                        </div>
                                        <div className="column-5">							
                                            <div className="price-plan">
                                            <ul className="price-features">
                                                <li className="header-price">
                                                <h3>Intro</h3>
                                                <p>Monthly Price</p>
                                                </li>
                                                <li className="yr-price">
                                                <h3>$1200</h3>
                                                <p>Duration: One Year</p>
                                                </li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li className="footer-price"><a href="#" className="btn btn-block plan-btn">Select Plan</a></li>
                                            </ul>
                                            </div>
                                        </div>
                                        <div className="column-5">							
                                            <div className="price-plan">
                                            <ul className="price-features plus-price">
                                                <li className="header-price">
                                                <h3>Plus</h3>
                                                <p>Monthly Price</p>
                                                </li>
                                                <li className="subheader-price">
                                                <p>FROM ₹729.00 INR</p>
                                                <p>TRY ONE MONTH</p>										
                                                </li>
                                                <li className="yr-price">
                                                <h3>FREE</h3>
                                                <p>or <span className="orange-text">purchase now!</span></p>
                                                </li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li className="footer-price"><a href="#" className="btn btn-block plan-btn">Try Free Trial</a></li>
                                            </ul>
                                            </div>
                                        </div>
                                        <div className="column-5">							
                                            <div className="price-plan">
                                            <ul className="price-features">
                                                <li className="header-price">
                                                <h3>Professional </h3>
                                                <p>Monthly Price</p>
                                                </li>
                                                <li className="yr-price">
                                                <h3>$1200</h3>
                                                <p>Duration: One Year</p>
                                                </li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li className="footer-price"><a href="#" className="btn btn-block plan-btn">Select Plan</a></li>
                                            </ul>
                                            </div>
                                        </div>
                                        <div className="column-5">							
                                            <div className="price-plan">
                                            <ul className="price-features">
                                                <li className="header-price">
                                                <h3>Premier </h3>
                                                <p>Monthly Price</p>
                                                </li>
                                                <li className="yr-price">
                                                <h3>$1200</h3>
                                                <p>Duration: One Year</p>
                                                </li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li>One listing submission</li>
                                                <li className="footer-price"><a href="#" className="btn btn-block plan-btn">Select Plan</a></li>
                                            </ul>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
         )
    }
}
export default MembershipPlans;