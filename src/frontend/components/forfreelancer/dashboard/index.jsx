import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import ApexCharts from 'apexcharts';
import { Avatar_1,Avatar_2,Avatar_3,Avatar_4 } from "../../imagepath";
import { Sidebar } from '../sidebar';

const FreelancerDashboard = (props) => {  
  
  var chartprofileoptions = {
          series: [{
            name: "profile view",
            data: [100, 150, 200, 250, 200, 250, 200, 200, 200, 200, 300, 350]
          }],
          chart: {
            height: 360,
            type: 'line',		  
            toolbar: {
              show: false
            },
            zoom: {
                enabled: false
              }
            },
            dataLabels: {
              enabled: false
            },
            colors: ["#FF5B37"],
            stroke: {
              curve: 'straight',
              width: [1]
            },
            markers: {
              size: 4,
              colors: ["#FF5B37"],
              strokeColors: "#FF5B37",
              strokeWidth: 1,
              hover: {
                size: 7,
              }
            },
            grid: {
              position: 'front',
              borderColor: '#ddd',
              strokeDashArray: 7,
              xaxis: {
                lines: {
                  show: true
                }
              }
            },
            xaxis: {
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
              lines: {
                show: false,
              }
            },
            yaxis: {
              lines: {
                show: true,
              }
            }
        };
  
	var chartradialOptions = {
        series: [85, 75, 60, 40],
        chart: {		  
          toolbar: {
            show: false
          },
          height: 250,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            offsetY: 0,
            startAngle: 0,
            endAngle: 270,
            hollow: {
              margin: 5,
              size: '50%',
              background: 'transparent',
              image: undefined,
            },
            dataLabels: {
              name: {
                show: false,
              },
              value: {
                show: false,
              }
            }
          }
        },
        colors: ['#7B46BE', '#FA6CA4', '#FACD3A', '#24C0DC'],
        labels: ['Applied Jobs', 'Messenger', 'Facebook', 'LinkedIn'],
        legend: {
          show: false,
          floating: true,
          fontSize: '16px',
          position: 'bottom',
          offsetX: 160,
          offsetY: 15,
          labels: {
            useSeriesColors: true,
          },
          markers: {
            size: 0
          },
          formatter: function(seriesName, opts) {
            return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
          },
          itemMargin: {
            vertical: 3
          }
        },
        responsive: [{
          breakpoint: 480,
          options: {
            legend: {
                show: false
            }
          }
        }]
      };
  useEffect(() => {
    let chartprofileoptionsColumn =  document.getElementById("chartprofile");
			let chartprofileoptionsChart = new ApexCharts(chartprofileoptionsColumn, chartprofileoptions);
			chartprofileoptionsChart.render();
			
			let invoiceColumn =  document.getElementById("chartradial");
			let invoiceChart = new ApexCharts(invoiceColumn, chartradialOptions);
			invoiceChart.render();
    document.body.className = 'dashboard-page';
    return () => { document.body.className = ''; }
  });
  return (
      <>
        {/* Page Content */}
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-3 col-md-4 theiaStickySidebar">
                  <StickyBox offsetTop={20} offsetBottom={20}>
                      <Sidebar/>
                  </StickyBox>
              </div>
              <div className="col-xl-9 col-md-8">
                <div className="dashboard-sec">
                  <div className="row">
                    <div className="col-md-6 col-lg-4">
                      <div className="dash-widget">
                        <div className="dash-info">
                          <div className="dash-widget-info">Completed Jobs</div>
                          <div className="dash-widget-count">30</div>
                        </div>
                        <div className="dash-widget-more">
                          <Link
                            to="/freelancer-completed-projects"
                            className="d-flex"
                          >
                            View Details <i className="fas fa-arrow-right ms-auto" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <div className="dash-widget">
                        <div className="dash-info">
                          <div className="dash-widget-info">Task Completed</div>
                          <div className="dash-widget-count">5</div>
                        </div>
                        <div className="dash-widget-more">
                          <Link
                            to="/freelancer-completed-projects"
                            className="d-flex"
                          >
                            View Details <i className="fas fa-arrow-right ms-auto" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <div className="dash-widget">
                        <div className="dash-info">
                          <div className="dash-widget-info">Reviews</div>
                          <div className="dash-widget-count">25</div>
                        </div>
                        <div className="dash-widget-more">
                          <Link to="/freelancer-review" className="d-flex">
                            View Details <i className="fas fa-arrow-right ms-auto" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Chart Content */}
                  <div className="row">
                    <div className="col-xl-8 d-flex">
                      <div className="card flex-fill">
                        <div className="pro-head">
                          <h5 className="card-title mb-0">Your Profile View</h5>
                          <div className="month-detail">
                            <select className="form-control">
                              <option value={0}>Last 6 months</option>
                              <option value={1}>Last 2 months</option>
                            </select>
                          </div>
                        </div>
                        <div className="pro-body">
                          <div id="chartprofile" />
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 d-flex">
                      <div className="flex-fill card">
                        <div className="pro-head b-0">
                          <h5 className="card-title mb-0">Static Analytics</h5>
                        </div>
                        <div className="pro-body">
                          <div id="chartradial" />
                          <ul className="static-list">
                            <li>
                              <span>
                                <i className="fas fa-circle text-violet me-1" />{" "}
                                Applied Jobs
                              </span>{" "}
                              <span className="sta-count">30</span>
                            </li>
                            <li>
                              <span>
                                <i className="fas fa-circle text-pink me-1" /> Active
                                Proposals
                              </span>{" "}
                              <span className="sta-count">30</span>
                            </li>
                            <li>
                              <span>
                                <i className="fas fa-circle text-yellow me-1" />{" "}
                                Applied Proposals
                              </span>{" "}
                              <span className="sta-count">30</span>
                            </li>
                            <li>
                              <span>
                                <i className="fas fa-circle text-blue me-1" />{" "}
                                Bookmarked Projects
                              </span>{" "}
                              <span className="sta-count">30</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Chart Content */}
                  <div className="row">
                    {/* Plan  Details*/}
                    <div className="col-xl-6 d-flex">
                      <div className="card flex-fill">
                        <div className="pro-head">
                          <h2>Membership Plan Details</h2>
                          <div>
                            <i className="fas fa-check-circle verified orange-text fa-2x" />
                          </div>
                        </div>
                        <div className="pro-body">
                          <div className="row">
                            <div className="col-md-6 col-sm-6">
                              <div className="plan-details">
                                <h4>The Ultima</h4>
                                <div className="yr-amt">Anually Price</div>
                                <h3>$1200</h3>
                                <div className="yr-duration">Duration: One Year</div>
                                <div className="expiry">Expiry: 24 JAN 2022</div>
                                <Link
                                  to="/freelancer-membership"
                                  className="btn btn-primary btn-plan"
                                >
                                  Change Plan
                                </Link>
                              </div>
                            </div>
                            <div className="col-md-6 col-sm-6">
                              <div className="plan-feature">
                                <ul>
                                  <li>12 Project Credits</li>
                                  <li>10 Allowed Services</li>
                                  <li>20 Days visibility</li>
                                  <li>5 Featured Services</li>
                                  <li>20 Days visibility</li>
                                  <li>30 Days Package Expiry</li>
                                  <li>Profile Featured</li>
                                </ul>
                                <Link to="/freelancer-membership">View Details</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /Plan  Details */}
                    {/* Ongoing Projects */}
                    <div className="col-xl-6 d-flex">
                      <div className="card flex-fill">
                        <div className="pro-head">
                          <h2>Ongoing Projects</h2>
                          <Link
                            to="/freelancer-ongoing-projects"
                            className="btn fund-btn"
                          >
                            View All
                          </Link>
                        </div>
                        <div className="pro-body p-0">
                          <div className="on-project">
                            <h5>Web Scraping</h5>
                            <p>
                              I need some data to be scraped from various social
                              media....
                            </p>
                            <div className="pro-info">
                              <ul className="list-details">
                                <li>
                                  <div className="slot">
                                    <p>Job Type</p>
                                    <h5>Hourly</h5>
                                  </div>
                                </li>
                                <li>
                                  <div className="slot">
                                    <p>Project Price</p>
                                    <h5>$120</h5>
                                  </div>
                                </li>
                                <li>
                                  <div className="slot">
                                    <p>Location</p>
                                    <h5>3 Received</h5>
                                  </div>
                                </li>
                                <li>
                                  <div className="slot">
                                    <p>Expiry</p>
                                    <h5>4 Days Left</h5>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="on-project">
                            <h5>New Service</h5>
                            <p>
                              I need some data to be scraped from various social
                              media....
                            </p>
                            <div className="pro-info">
                              <ul className="list-details">
                                <li>
                                  <div className="slot">
                                    <p>Job Type</p>
                                    <h5>Hourly</h5>
                                  </div>
                                </li>
                                <li>
                                  <div className="slot">
                                    <p>Project Price</p>
                                    <h5>$90</h5>
                                  </div>
                                </li>
                                <li>
                                  <div className="slot">
                                    <p>Location</p>
                                    <h5>3 Received</h5>
                                  </div>
                                </li>
                                <li>
                                  <div className="slot">
                                    <p>Expiry</p>
                                    <h5>5 Days Left</h5>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="on-project">
                            <h5>Website Layout changes</h5>
                            <p>
                              I need some data to be scraped from various social
                              media....
                            </p>
                            <div className="pro-info">
                              <ul className="list-details">
                                <li>
                                  <div className="slot">
                                    <p>Job Type</p>
                                    <h5>Hourly</h5>
                                  </div>
                                </li>
                                <li>
                                  <div className="slot">
                                    <p>Project Price</p>
                                    <h5>$70</h5>
                                  </div>
                                </li>
                                <li>
                                  <div className="slot">
                                    <p>Location</p>
                                    <h5>3 Received</h5>
                                  </div>
                                </li>
                                <li>
                                  <div className="slot">
                                    <p>Expiry</p>
                                    <h5>7 Days Left</h5>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /Ongoing Projects */}
                  </div>
                  {/* Past Earnings */}
                  <div className="row">
                    <div className="col-md-12">
                      <div className="card mb-4">
                        <div className="pro-head">
                          <h2>Past Earnings</h2>
                          <Link to="/freelancer-payment" className="btn fund-btn">
                            View All
                          </Link>
                        </div>
                        <div className="pro-body p-0">
                          <div className="earn-feature">
                            <div className="row align-items-center">
                              <div className="col-lg-7 col-md-6">
                                <div className="earn-info">
                                  <p>
                                    I want some customization and installation on
                                    wordpress
                                  </p>
                                  <div className="date">October 5, 2021</div>
                                </div>
                              </div>
                              <div className="col-lg-5 col-md-6">
                                <div className="earn-img">
                                  <span>
                                    <img
                                      src={Avatar_1}
                                      alt="logo"
                                      className="img-fluid avatar-md rounded-circle"
                                    />{" "}
                                    George Wells
                                  </span>
                                  <div className="price">$90</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="earn-feature">
                            <div className="row align-items-center">
                              <div className="col-lg-7 col-md-6">
                                <div className="earn-info">
                                  <p>I want simple Joomla 4 component development </p>
                                  <div className="date">October 12, 2021</div>
                                </div>
                              </div>
                              <div className="col-lg-5 col-md-6">
                                <div className="earn-img">
                                  <span>
                                    <img
                                      src={Avatar_2}
                                      alt="logo"
                                      className="img-fluid avatar-md rounded-circle"
                                    />{" "}
                                    Timothy Smith
                                  </span>
                                  <div className="price">$150</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="earn-feature">
                            <div className="row align-items-center">
                              <div className="col-lg-7 col-md-6">
                                <div className="earn-info">
                                  <p>I want migrate Wordpress website </p>
                                  <div className="date">October 15, 2021</div>
                                </div>
                              </div>
                              <div className="col-lg-5 col-md-6">
                                <div className="earn-img">
                                  <span>
                                    <img
                                      src={Avatar_3}
                                      alt="logo"
                                      className="img-fluid avatar-md rounded-circle"
                                    />{" "}
                                    Janet Paden
                                  </span>
                                  <div className="price">$70</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="earn-feature">
                            <div className="row align-items-center">
                              <div className="col-lg-7 col-md-6">
                                <div className="earn-info">
                                  <p>
                                    I want Landing Page Redesign / Sales Page Redesign
                                  </p>
                                  <div className="date">October 20, 2021</div>
                                </div>
                              </div>
                              <div className="col-lg-5 col-md-6">
                                <div className="earn-img">
                                  <span>
                                    <img
                                      src={Avatar_4}
                                      alt="logo"
                                      className="img-fluid avatar-md rounded-circle"
                                    />{" "}
                                    James Douglas
                                  </span>
                                  <div className="price">$120</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Past Earnings */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
      </>
      )
  
}
export default FreelancerDashboard;