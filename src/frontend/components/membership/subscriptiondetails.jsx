import React, { Component } from "react";
import { Link } from "react-router-dom";
import Pagecontent from "./pagecontent";

class Subscriptiondetails extends Component {
   
    render() {
        
        return (
            <>
            <div className="breadcrumb-bar">
                <div className="container">
                    <div className="row align-items-center inner-banner">
                    <div className="col-md-12 col-12 text-center">
                        <h2 className="breadcrumb-title">Subscription Details</h2>
                        <nav aria-label="breadcrumb" className="page-breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Subscription Details</li>
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
                    <div className="col-md-12">
                        <div className="table-responsive transaction-table mb-5">
                        <table className="table">
                            <thead>
                            <tr className="main-head">
                                <th colSpan={5} className="head-title">Subscrition Plans</th>												
                            </tr>
                            <tr className="head">
                                <th>Plan</th>
                                <th>Start Date </th>
                                <th>End Date</th>
                                <th>Amount</th>
                                <th>Status</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td colSpan={5} />
                            </tr>
                            <tr>
                                <td colSpan={5} />
                            </tr>
                            <tr>
                                <td colSpan={5} />
                            </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            </>
         )
    }
}
export default Subscriptiondetails;