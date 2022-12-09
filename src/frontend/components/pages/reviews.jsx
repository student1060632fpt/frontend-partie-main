import React, { Component } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
// Import Images
import { Dev_img,Profile,Flags_en,Flags_pl,Flags_de,Developer_01,Developer_02 } from "../imagepath";

class Reviews extends Component {
   
    render() {
        
        return (
            <>
             {/* Breadcrumb */}
            <div className="breadcrumb-bar">
                <div className="container">
                    <div className="row align-items-center inner-banner">
                        <div className="col-md-12 col-12 text-center">
                            <h2 className="breadcrumb-title">REVIEWS</h2>
                            <nav aria-label="breadcrumb" className="page-breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">REVIEWS</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Breadcrumb */}
            {/* Page Content */}
            <div className="content">
                <div className="container">
                    <div className="row">
                    <div className="col-md-12">
                        <div className="title-box">
                        <div className="title">
                            <h3>REVIEW COMPANY</h3>
                        </div>
                        <div className="reviews">
                            <div className="review-content">		
                            <h4>Fix Python Selenium Code</h4>
                            <div className="rating">							
                                <span className="average-rating">4.6</span>
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                            </div>
                            <p>Great clarity in specification and communication. I got payment really fast. Really recommend this employer for his professionalism. I will work for him again with pleasure.</p>
                            <a className="btn review-btn" data-toggle="modal" href="#review"><i className="fas fa-flag" /> Write Review</a>
                            </div>	
                            <div className="review-content">		
                            <h4>Adsense Expert</h4>
                            <div className="rating">							
                                <span className="average-rating">4.6</span>
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                            </div>
                            <p>Great clarity in specification and communication. I got payment really fast. Really recommend this employer for his professionalism. I will work for him again with pleasure.</p>
                            <a className="btn review-btn grey-btn" data-toggle="modal" href="#editreview"><i className="fas fa-pencil-alt" /> Edit Review</a>
                            </div>										
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>					
            {/* /Page Content */}
            </>
         )
    }
}
export default Reviews;