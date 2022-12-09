import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import ApexCharts from 'apexcharts';
import { Img_01,Img_02,Img_03,Img_04,Img_05 } from "../../imagepath";
import { Sidebar } from '../sidebar';

const Dashboard = (props) => {  
  
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
              {/* sidebar */}
              <div className="col-xl-3 col-md-4 theiaStickySidebar">
                  <StickyBox offsetTop={20} offsetBottom={20}>
                    <Sidebar/>
                  </StickyBox>
              </div>
              {/* /sidebar */}
              <div className="col-xl-9 col-md-8">
                <div className="dashboard-sec">
                  <div className="row">
                    <div className="col-md-6 col-lg-4">
                      <div className="dash-widget">
                        <div className="dash-info">
                          <div className="dash-widget-info">Projects Posted</div>
                          <div className="dash-widget-count">30</div>
                        </div>
                        <div className="dash-widget-more">
                          <Link to="/manage-projects" className="d-flex">
                            View Details <i className="fas fa-arrow-right ms-auto" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <div className="dash-widget">
                        <div className="dash-info">
                          <div className="dash-widget-info">Ongoing Projects</div>
                          <div className="dash-widget-count">5</div>
                        </div>
                        <div className="dash-widget-more">
                          <Link to="/ongoing-projects" className="d-flex">
                            View Details <i className="fas fa-arrow-right ms-auto" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <div className="dash-widget">
                        <div className="dash-info">
                          <div className="dash-widget-info">Completed Projects</div>
                          <div className="dash-widget-count">25</div>
                        </div>
                        <div className="dash-widget-more">
                          <Link to="/completed-projects" className="d-flex">
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
                        <div className="card-header">
                          <div className="d-flex justify-content-between align-items-center">
                            <h5 className="card-title">Profile Views</h5>
                            <div className="dropdown">
                              <button
                                className="btn btn-white btn-sm dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                Monthly
                              </button>
                              <div className="dropdown-menu dropdown-menu-start">
                                <a
                                  href=""
                                  className="dropdown-item"
                                >
                                  Weekly
                                </a>
                                <a
                                  href=""
                                  className="dropdown-item"
                                >
                                  Monthly
                                </a>
                                <a
                                  href=""
                                  className="dropdown-item"
                                >
                                  Yearly
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card-body">
                          <div id="chartprofile" />
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 d-flex">
                      <div className="card flex-fill">
                        <div className="card-header">
                          <div className="d-flex justify-content-between align-items-center">
                            <h5 className="card-title">Static Analytics</h5>
                            <div className="dropdown">
                              <button
                                className="btn btn-white btn-sm dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                Monthly
                              </button>
                              <div className="dropdown-menu dropdown-menu-start">
                                <a
                                  href=""
                                  className="dropdown-item"
                                >
                                  Weekly
                                </a>
                                <a
                                  href=""
                                  className="dropdown-item"
                                >
                                  Monthly
                                </a>
                                <a
                                  href=""
                                  className="dropdown-item"
                                >
                                  Yearly
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card-body">
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
                  {/* Past Earnings */}
                  <div className="row">
                    <div className="col-md-12">
                      <div className="card card-table">
                        <div className="card-header">
                          <div className="row">
                            <div className="col">
                              <h4 className="card-title">Recently Posted Jobs</h4>
                            </div>
                            <div className="col-auto">
                              <Link
                                to="/manage-projects"
                                className="btn-right btn btn-sm fund-btn"
                              >
                                View All
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="table-responsive table-job">
                            <table className="table table-hover table-center mb-0">
                              <thead className="thead-pink">
                                <tr>
                                  <th>Details</th>
                                  <th>Job Type</th>
                                  <th>Budget</th>
                                  <th>Created on</th>
                                  <th>Proposals</th>
                                  <th className="text-end">Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <span className="detail-text">
                                      I want some customization and installation on
                                      wordpress
                                    </span>
                                    <span className="d-block text-expiry">
                                      Expiring on : February 3, 2019
                                    </span>
                                  </td>
                                  <td>Full-Time</td>
                                  <td>
                                    <span className="table-budget">BUDGET</span>{" "}
                                    <span className="d-block text-danger">
                                      $600 - $1500
                                    </span>
                                  </td>
                                  <td>12 July, 2021</td>
                                  <td>47</td>
                                  <td className="text-end">
                                    <Link
                                      to="/view-project-detail"
                                      className="text-success"
                                    >
                                      View
                                    </Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <span className="detail-text">
                                      I want some customization and installation on
                                      wordpress
                                    </span>
                                    <span className="d-block text-expiry">
                                      Expiring on : February 3, 2019
                                    </span>
                                  </td>
                                  <td>Full-Time</td>
                                  <td>
                                    <span className="table-budget">BUDGET</span>{" "}
                                    <span className="d-block text-danger">
                                      $600 - $1500
                                    </span>
                                  </td>
                                  <td>12 July, 2021</td>
                                  <td>47</td>
                                  <td className="text-end">
                                    <Link
                                      to="/view-project-detail"
                                      className="text-success"
                                    >
                                      View
                                    </Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <span className="detail-text">
                                      I want some customization and installation on
                                      wordpress
                                    </span>
                                    <span className="d-block text-expiry">
                                      Expiring on : February 3, 2019
                                    </span>
                                  </td>
                                  <td>Full-Time</td>
                                  <td>
                                    <span className="table-budget">BUDGET</span>{" "}
                                    <span className="d-block text-danger">
                                      $600 - $1500
                                    </span>
                                  </td>
                                  <td>12 July, 2021</td>
                                  <td>47</td>
                                  <td className="text-end">
                                    <Link
                                      to="/view-project-detail"
                                      className="text-success"
                                    >
                                      View
                                    </Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <span className="detail-text">
                                      I want some customization and installation on
                                      wordpress
                                    </span>
                                    <span className="d-block text-expiry">
                                      Expiring on : February 3, 2019
                                    </span>
                                  </td>
                                  <td>Full-Time</td>
                                  <td>
                                    <span className="table-budget">BUDGET</span>{" "}
                                    <span className="d-block text-danger">
                                      $600 - $1500
                                    </span>
                                  </td>
                                  <td>12 July, 2021</td>
                                  <td>47</td>
                                  <td className="text-end">
                                    <Link
                                      to="/view-project-detail"
                                      className="text-success"
                                    >
                                      View
                                    </Link>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Past Earnings */}
                  <div className="row">
                    {/* Plan  Details*/}
                    <div className="col-xl-6 d-flex">
                      <div className="card flex-fill">
                        <div className="card-header">
                          <div className="row justify-content-between align-items-center">
                            <div className="col">
                              <h5 className="card-title">Membership Plan Details</h5>
                            </div>
                            <div className="col-auto">
                              <a
                                href=""
                                className="btn-right btn btn-sm fund-btn"
                              >
                                View
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="row">
                            <div className="col-md-6 col-sm-6">
                              <div className="plan-details">
                                <h4>The Ultima</h4>
                                <div className="yr-amt">Anually Price</div>
                                <h4>$1200</h4>
                                <div className="yr-duration">Duration: One Year</div>
                                <div className="expiry">Expiry: 24 JAN 2022</div>
                                <Link
                                  to="/membership-plans"
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
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /Plan  Details */}
                    {/* Notifications */}
                    <div className="col-xl-6 d-flex">
                      <div className="card flex-fill">
                        <div className="card-header">
                          <div className="row justify-content-between align-items-center">
                            <div className="col">
                              <h5 className="card-title">Notifications</h5>
                            </div>
                            <div className="col-auto">
                              <Link
                                to="/freelancer-ongoing-projects"
                                className="btn-right btn btn-sm fund-btn"
                              >
                                View All
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="pro-body p-0">
                          <div className="news-feature">
                            <img
                              className="avatar-sm rounded-circle"
                              src={Img_02}
                              alt="User Image"
                            />
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              At diam sit erat et eros.{" "}
                            </p>
                          </div>
                          <div className="news-feature">
                            <img
                              className="avatar-sm rounded-circle"
                              src={Img_03}
                              alt="User Image"
                            />
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              At diam sit erat et eros.{" "}
                            </p>
                          </div>
                          <div className="news-feature">
                            <img
                              className="avatar-sm rounded-circle"
                              src={Img_04}
                              alt="User Image"
                            />
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              At diam sit erat et eros.{" "}
                            </p>
                          </div>
                          <div className="news-feature">
                            <img
                              className="avatar-sm rounded-circle"
                              src={Img_05}
                              alt="User Image"
                            />
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              At diam sit erat et eros.{" "}
                            </p>
                          </div>
                          <div className="news-feature">
                            <img
                              className="avatar-sm rounded-circle"
                              src={Img_01}
                              alt="User Image"
                            />
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              At diam sit erat et eros.{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /Notifications */}
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
export default Dashboard;