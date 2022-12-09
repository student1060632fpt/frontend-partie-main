import React, { Component } from "react";
import { Link } from "react-router-dom";
import Pagecontent from "./pagecontent"
// Import Images
import { Redeem_icon } from "../imagepath";

class Managemembership extends Component {
   
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
                        <div className="col-md-8 mx-auto">
                            <div className="plan-detail">
                                <div className="plan-top">
                                    <h2>Plan Details</h2>
                                    <i className="fa fa-check-circle" aria-hidden="true" />
                                </div>
                                <div className="plan-body row">
                                    <div className="col-6 plan-left">
                                        <h2>Professional</h2>
                                        <p>Anually Price</p>
                                    </div>
                                    <div className="col-6 plan-right">
                                        <h2>$1200</h2>
                                        <p>Duration: One Year</p>
                                    </div>
                                    <div className="col-12 mt-3">
                                        <a href="#" className="btn change-btn float-right">Change Plan</a>
                                    </div>
                                </div>
                            </div>
                            <div className="transaction  bt-0">
                                <img className="img-fluid" src={Redeem_icon} />
                                <h5>All your transactions are saved here.</h5>
                                <a href="#" className="click-btn">Click Here </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
         )
    }
}
export default Managemembership;