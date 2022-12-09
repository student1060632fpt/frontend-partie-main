import React, { Component } from "react";
import { Link } from "react-router-dom";

class AccountSettings extends Component {
   
    render() {
     
        return (
            <>
            {/* Breadcrumb */}
            <div className="breadcrumb-bar">
              <div className="container">
                <div className="row align-items-center inner-banner">
                  <div className="col-md-12 col-12 text-center">
                    <h2 className="breadcrumb-title">Settings</h2>
                    <nav aria-label="breadcrumb" className="page-breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Settings</li>
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
                  <div className="col-md-3">
                    <nav className="nav flex-column setting-tab mb-5">
                      <a className="nav-link active" href="#profile" data-toggle="tab">Profile</a>
                      <a className="nav-link" href="#password" data-toggle="tab">Password</a>
                      <a className="nav-link" href="#payment" data-toggle="tab">Payment &amp; Financials</a>
                      <a className="nav-link" href="#account" data-toggle="tab">Account</a>
                    </nav>
                  </div>
                  <div className="col-md-9">
                    <div className="tab-content setting-content">
                      <div className="tab-pane fade show active" id="profile">
                        <div className="pro-card">
                          <div className="pro-head">
                            <h2>PROFILE DETAILS</h2>
                          </div>
                          <div className="pro-body p-0">
                            <form>
                              <div className="form-row pro-pad">
                                <div className="col-12">
                                  <h3 className="mb-3 orange-text">Name</h3>
                                </div>
                                <div className="form-group col-md-6">
                                  <label>First name</label>
                                  <input type="text" className="form-control" placeholder="First name" />
                                </div>
                                <div className="form-group col-md-6">
                                  <label>Last Name</label>
                                  <input type="text" className="form-control" placeholder="Last Name" />
                                </div>
                              </div>
                              <hr />
                              <div className="form-row pro-pad">
                                <h3 className="mb-3 orange-text">Address</h3>
                                <div className="form-group col-md-12">
                                  <label>Address</label>
                                  <input type="text" className="form-control" />
                                </div>
                                <div className="form-group col-md-12">
                                  <input type="text" className="form-control" />
                                </div>
                                <div className="form-group col-md-6">
                                  <label>City</label>
                                  <input type="text" className="form-control" />
                                </div>
                                <div className="form-group col-md-6">
                                  <label>Zipcode</label>
                                  <input type="text" className="form-control" />
                                </div>
                                <div className="form-group col-md-6">
                                  <label>Country</label>
                                  <input type="text" className="form-control" />
                                </div>
                                <div className="form-group col-md-6">
                                  <label>Company</label>
                                  <input type="text" className="form-control" />
                                </div>
                                <div className="form-group col-md-6">
                                  <label>Time Zone</label>
                                  <input type="text" className="form-control" />
                                </div>
                                <div className="form-group col-md-6">
                                  <label>Location</label>
                                  <input type="text" className="form-control" />
                                </div>
                                <div className="col-lg-12 text-right">
                                  <a href="#" className="btn btn-primary click-btn">Update</a>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="password">
                        <div className="pro-card">
                          <div className="pro-head">
                            <h2>CHANGE PASSWORD</h2>
                          </div>
                          <div className="pro-body p-0">
                            <form>
                              <div className="form-row pro-pad">
                                <div className="col-12">
                                  <h3 className="mb-3 orange-text">Change Password</h3>
                                </div>
                                <div className="form-group col-md-12">
                                  <label>Current Password</label>
                                  <input type="text" className="form-control" />
                                </div>
                                <div className="form-group col-md-12">
                                  <label>New Password</label>
                                  <input type="text" className="form-control" />
                                </div>
                                <div className="form-group col-md-12">
                                  <label>Confirm Password</label>
                                  <input type="text" className="form-control" />
                                </div>
                                <div className="col-lg-12 text-right">
                                  <a href="#" className="btn btn-primary click-btn">Update</a>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="payment">
                        <div className="pro-card">
                          <div className="pro-head">
                            <h2>PAYMENT &amp; FINANCIALS</h2>
                          </div>
                          <div className="pro-body p-0">
                            <form>
                              <div className="form-row pro-pad">
                                <div className="col-12">
                                  <h3 className="mb-3 orange-text">Payment Methods</h3>
                                  <div className="pro-card">
                                    <div className="pro-head">
                                      <p className="mb-0">With workwise payment protection , only pay for work delivered</p>
                                    </div>
                                    <div className="pro-body">
                                      <h4 className="mb-3">Add Payment Methods</h4><h4>
                                        <nav className="nav nav-justified pay-tab">
                                          <a className="nav-link active mr-1" href="#debit" data-toggle="tab"><i className="fa fa-plus-circle orange-text" aria-hidden="true" /> Add Debit or Credit Cards</a>
                                          <a className="nav-link" href="#paypal" data-toggle="tab"><i className="fa fa-plus-circle orange-text" aria-hidden="true" /> Add Paypal Account</a>
                                        </nav>
                                        <div className="tab-content pay-content">
                                          <div className="tab-pane fade" id="debit">
                                            <div className="form-row">
                                              <div className="col-md-12">
                                                <h4 className="mb-3">Credit or Debit Cards</h4><h4>
                                                  <div className="form-group">
                                                    <label htmlFor="card_number">Card Number</label>
                                                    <input className="form-control" id="card_number" type="text" />
                                                  </div>
                                                </h4></div>
                                              <div className="col-md-6">
                                                <div className="form-group">
                                                  <label htmlFor="card_name">First Name</label>
                                                  <input className="form-control" id="first_name" type="text" />
                                                </div>
                                              </div>
                                              <div className="col-md-6">
                                                <div className="form-group">
                                                  <label htmlFor="card_name">Last Name</label>
                                                  <input className="form-control" id="last_name" type="text" />
                                                </div>
                                              </div>
                                              <div className="col-md-4">
                                                <div className="form-group">
                                                  <label htmlFor="expiry_month">Expires on</label>
                                                  <input className="form-control" id="expiry_on" type="text" />
                                                </div>
                                              </div>
                                              <div className="col-md-8">
                                                <div className="form-group">
                                                  <label htmlFor="cvv">CVV (Security Code) </label>
                                                  <input className="form-control" id="cvv" type="text" />
                                                </div>
                                              </div>
                                              <div className="col-md-8 btn-pad">
                                                <a href="#" className="click-btn">Continue</a>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="tab-pane fade show active" id="paypal">.</div>
                                        </div>
                                      </h4></div>
                                  </div>
                                </div>
                              </div>
                              <hr />
                              <div className="form-row pro-pad">
                                <h3 className="mb-3 orange-text">Tax Information</h3>
                                <div className="form-group col-md-12">
                                  <label>GST Identification Number</label>
                                  <input type="text" className="form-control" />
                                </div>
                                <div className="col-lg-12 mb-4">
                                  <a href="#" className="btn btn-primary click-btn">Update</a>
                                </div>
                                <h5 className="orange-text mb-4">Are you exempt from GSTIN?</h5>
                                <div className="form-group col-md-12">
                                  <label>TDS Identification Number</label>
                                  <input type="text" className="form-control" placeholder="Pan" />
                                </div>
                                <p>TDS (Tax Deducted at Source) is a form of income tax introduced by the India government as part of the Income Tax Act. If you are based in India, you are required to provide us with your PAN number. If you don’t provide this number, we are required to withhold 5% of all your earnings.</p>
                                <div className="col-lg-12">
                                  <a href="#" className="btn btn-primary click-btn">Save</a>
                                </div>
                              </div>
                              <hr />
                              <div className="form-row pro-pad">
                                <div className="col-12">
                                  <h3 className="mb-3 orange-text">Finance Setting</h3>
                                </div>
                                <div className="form-group col-md-12">
                                  <label>My Currency</label>
                                  <input type="text" className="form-control" />
                                </div>
                                <div className="form-group col-md-12">
                                  <label>Taxes (used when you create an invoice for an employer)</label>
                                  <div className="tax-info">
                                    <div className="form-row tax-cont align-items-baseline">
                                      <div className="col-md-3">
                                        <div className="form-group">
                                          <input type="text" className="form-control" placeholder="Tax type" />
                                        </div>									
                                      </div>	
                                      <div className="col-md-4">
                                        <div className="form-group">
                                          <input type="text" className="form-control" placeholder="Rate" />
                                        </div>									
                                      </div>	
                                      <div className="col-md-4">
                                        <div className="form-group">
                                          <input type="text" className="form-control" placeholder="Company Name" /> 
                                        </div>									
                                      </div>	
                                      <div className="col-md-1">
                                        <a href=""><i className="fa fa-window-close ml-2 orange-text" aria-hidden="true" /></a>
                                      </div>									
                                    </div>
                                  </div>														
                                </div>
                                <div className="col-lg-12">
                                  <a href="" className="btn bg-black btn-primary add-tax click-btn">+ Another Tax</a>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="account">
                        <div className="pro-card">
                          <div className="pro-head">
                            <h2>ACCOUNT</h2>
                          </div>
                          <div className="pro-body p-0">
                            <form>
                              <div className="form-row pro-pad">
                                <div className="col-12">
                                  <h3 className="mb-4 orange-text">Directory and Follow Settings</h3>
                                  <p><i className="fas fa-toggle-off" /> List me on the Freelancer directory, allowing Employers to hire me directly for projects</p>
                                  <p><i className="fas fa-toggle-off orange-text" /> Allow Freelancers to follow me, notifying them of projects and contests I've posted</p>
                                </div>
                              </div>
                              <hr />
                              <div className="form-row pro-pad">
                                <div className="col-12">
                                  <p>I'm looking to:</p>
                                  <label className="payment-radio credit-card-option mb-3">
                                    <input type="radio" name="radio" defaultChecked />
                                    <span className="checkmark" />
                                    Work 
                                  </label>
                                  <label className="payment-radio credit-card-option mb-3">
                                    <input type="radio" name="radio" />
                                    <span className="checkmark" />
                                    Hire
                                  </label>
                                </div>
                              </div>
                              <hr />
                              <div className="form-row pro-pad">
                                <h3 className="mb-3 orange-text">Close Account</h3>
                                <div className="col-lg-12 mb-2">
                                  <a href="#" className="btn btn-primary click-btn">Close My  Account</a>
                                </div>
                                <div className="col-lg-12 text-right">
                                  <a href="#" className="btn btn-primary click-btn">Update</a>
                                </div>
                              </div>
                            </form>
                          </div>
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
export default AccountSettings;