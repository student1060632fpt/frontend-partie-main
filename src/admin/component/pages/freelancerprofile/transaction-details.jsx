import React from 'react'
import { Link } from "react-router-dom";


function TransactionDetails() {
    return (
        <>
            {/* Add Modal */}
            <div className="modal fade transaction-modal" id="transaction-category">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header flex-wrap">
                            <div className="transaction-group">
                                <div className="head-transaction">
                                    <h4>Transaction</h4>
                                    <p> #TNX24586414</p>
                                </div>
                                <div className="complete-btn">
                                    <Link to="#" className="btn btn-primary">
                                        Completed
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="modal-body">
                            <div className="table-avatar user-profile invest-acount">
                                <Link to="/admin/profile">
                                    <i className="fas fa-exchange-alt exchange" />
                                    <div>
                                        <h5>Received from Investment Account</h5>
                                        <p className="receive-date">	Mar 13, 2022<span>Completed</span></p>
                                    </div>
                                </Link>
                            </div>
                            <div className="acount-transaction">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="basic-info ">
                                            <h4>IN ACCOUNT</h4>
                                            <div className="additional-info">
                                                <p> Amount </p>
                                                <h5>6,335.006 USD</h5>
                                            </div>
                                            <div className="additional-info">
                                                <p>Fees </p>
                                                <h5>0.00 USD</h5>
                                            </div>
                                            <div className="additional-info">
                                                <p> Freelancer Investment </p>
                                                <h5>6,335.006 USD</h5>
                                            </div>
                                            <div className="additional-info">
                                                <p> Freelancer Account </p>
                                                <h5>UID00003</h5>
                                            </div>
                                            <div className="additional-info">
                                                <p> Freelancer Email </p>
                                                <h5>william@example.com</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="basic-info">
                                            <h4>IN TRANSACTION</h4>
                                            <div className="additional-info">
                                                <p> Amount </p>
                                                <h5>6,335.006 USD</h5>
                                            </div>
                                            <div className="additional-info">
                                                <p>Fees </p>
                                                <h5>0.00 USD</h5>
                                            </div>
                                            <div className="additional-info">
                                                <p> Total Investment </p>
                                                <h5>6,335.006 USD</h5>
                                            </div>
                                            <div className="additional-info">
                                                <p> Freelancer Account </p>
                                                <h5>UID00003</h5>
                                            </div>
                                            <div className="additional-info">
                                                <p> Freelancer Email </p>
                                                <h5>william@example.com</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="basic-info additional-detail top-border">
                                            <h4>Order Details</h4>
                                            <div className="row">
                                                <div className="col-lg-3 col-md-6">
                                                    <div className="additional-info">
                                                        <p>Order Date</p>
                                                        <h5>Mar 13, 2022</h5>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6">
                                                    <div className="additional-info">
                                                        <p> Placed By</p>
                                                        <h5>UID00001 </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="basic-info additional-detail">
                                            <h4 className="mt-0">Additional Details</h4>
                                            <div className="row">
                                                <div className="col-lg-3 col-md-6">
                                                    <div className="additional-info">
                                                        <p>Transaction Type</p>
                                                        <h5>Deposit</h5>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6">
                                                    <div className="additional-info">
                                                        <p> Payment Gateway</p>
                                                        <h5>Paypal </h5>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="additional-info">
                                                        <p>Payment To</p>
                                                        <h5> usdttest87i2UK3JUWzR7iy6z5eRrxbAeT</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="basic-info additional-detail">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="additional-info">
                                                        <p>Updated Balance</p>
                                                        <h5 className="active-balance">13,144.626 USD</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="basic-info additional-detail ">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="additional-info mb-0">
                                                        <p>Transaction Details</p>
                                                        <h5 > Received from Investment Account</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Add Modal */}
        </>

    )
}

export default TransactionDetails;