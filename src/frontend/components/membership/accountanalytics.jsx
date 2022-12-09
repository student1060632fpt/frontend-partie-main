import React, { Component } from "react";
import { Link } from "react-router-dom";

const Accountanalytics =()=>{

        
        return (
            <>
            {/* Breadcrumb */}
            <div className="breadcrumb-bar">
              <div className="container-fluid">
                <div className="row align-items-center inner-banner">
                  <div className="col-md-12 col-12 text-center">
                    <nav aria-label="breadcrumb" className="page-breadcrumb">
                      <h2 className="breadcrumb-title">Account Analytics</h2>
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Chats</li>
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
                  <div className="col-lg-3 d-flex">
                    <div className="card accont-card flex-fill">
                      <div className="card-header">
                        <h4 className="d-inline-block mb-0">Total Earnings</h4>
                        <a className="float-right" href="#"><i className="fas fa-question-circle text-primary" /></a>
                      </div>
                      <div className="card-body text-center">
                        <h1 className="text-primary account-amt">$0.00</h1>
                        <p>YOUR TOTAL EARNINGS SINCE JOINING FREELANCER</p>
                        <hr />
                        <h1 className="text-primary account-amt">$0.00</h1>
                        <p>YOUR TOTAL EARNINGS SINCE JOINING FREELANCER</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 d-flex">
                    <div className="card accont-card flex-fill">
                      <div className="card-header">
                        <h4 className="d-inline-block mb-0">Job proficiency</h4>
                        <a className="float-right" href="#"><i className="fas fa-question-circle text-primary" /></a>
                      </div>
                      <div className="card-body pt-0 pb-0">
                        <h6 className="text-uppercase">COMPLETED JOBS
                          <span className="float-right text-primary">400</span></h6>
                        <hr />
                        <h6 className="text-uppercase ">ON TIME JOBS
                          <span className="float-right text-primary">400</span></h6>
                        <hr />
                        <h6 className="text-uppercase ">ON BUDGET JOBS
                          <span className="float-right text-primary">400</span></h6>
                        <hr />
                        <h6 className="text-uppercase ">REHIRE RATE
                          <span className="float-right text-primary">400</span></h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 d-flex">
                    <div className="card accont-card flex-fill">
                      <div className="card-header">
                        <h4 className="d-inline-block mb-0">Bid Conversion</h4>
                        <a className="float-right" href="#"><i className="fas fa-question-circle text-primary" /></a>
                      </div>
                      <div className="card-body">
                        <div id="chart">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 d-flex">
                    <div className="card accont-card flex-fill">
                      <div className="card-header">
                        <h4 className="d-inline-block mb-0">Earnings over time</h4>
                        <a className="float-right" href="#"><i className="fas fa-question-circle text-primary" /></a>
                      </div>
                      <div className="card-body pt-0 pb-0">
                        <div id="chart1">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 d-flex">
                    <div className="card accont-card flex-fill">
                      <div className="card-header">
                        <h4 className="d-inline-block mb-0">Rating per skill</h4>
                        <a className="float-right" href="#"><i className="fas fa-question-circle text-primary" /></a>
                      </div>
                      <div className="card-body pt-0 pb-0">
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 d-flex">
                    <div className="card accont-card flex-fill">
                      <div className="card-header">
                        <h4 className="d-inline-block mb-0">Earnings per skill
                        </h4>
                        <a className="float-right" href="#"><i className="fas fa-question-circle text-primary" /></a>
                      </div>
                      <div className="card-body pt-0 pb-0">
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 d-flex">
                    <div className="card accont-card flex-fill">
                      <div className="card-header">
                        <h4 className="d-inline-block mb-0">Earnings per client</h4>
                        <a className="float-right" href="#"><i className="fas fa-question-circle text-primary" /></a>
                      </div>
                      <div className="card-body pt-0 pb-0">
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 d-flex">
                    <div className="card accont-card flex-fill">
                      <div className="card-header">
                        <h4 className="d-inline-block mb-0">Bids per milestone</h4>
                        <a className="float-right" href="#"><i className="fas fa-question-circle text-primary" /></a>
                      </div>
                      <div className="card-body pt-0 pb-0">
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 d-flex">
                    <div className="card accont-card flex-fill">
                      <div className="card-header">
                        <h4 className="d-inline-block mb-0">Bid summary</h4>
                        <a className="float-right" href="#"><i className="fas fa-question-circle text-primary" /></a>
                      </div>
                      <div className="card-body pt-0 pb-0">
                        <div id="chart2">
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

export default Accountanalytics;