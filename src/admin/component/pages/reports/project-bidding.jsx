import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Sidebar from '../../../commoncomponent/sidebar';
import Chart from 'react-apexcharts'
import EditUser from './edit-user'
import Delete from './delete';

function ProjectBidding() {

  const [dataBar, object] = useState({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    bindto: '#chart-monthly',
    chart: {
      height: 350,
      width: '100%',
      stacked: true,

      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    plotOptions: {
      bar: {
        columnWidth: '16%',

      }
    },
    colors: ["#FF5B37", '#7E84A3'],
    borderWidth: 3,

  })

  const [chartbidding] = useState([

    {
      name: 'Maximum',
      data: [4, 2, 8, 10, 9, 17, 0, 25, 2, 0, 14, 4],
    },
    {
      name: 'Minimum',
      data: [30, 20, 18, 47, 19, 52, 4, 16, 42, 15, 12, 18]
    },

  ])

  return (
    <>
      <div className='main-wrapper'>
        <Sidebar />
        {/* Page Wrapper */}
        <div className="page-wrapper">
          <div className="content report-box container-fluid">
            {/* Page Header */}
            <div className="page-header page-border">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <h3 className="page-title">Reports</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/index/admin">Home</Link>
                    </li>
                    <li className="breadcrumb-item active">Reports</li>
                  </ul>
                </div>
                <div className="col-lg-6 report-btns">
                  <ul className="project-report">
                    <li>
                      <Link to="/admin/reports">Projects</Link>
                    </li>
                    <li className="active-project">
                      <Link to="/admin/project-bidding">Bidding</Link>
                    </li>
                    <li>
                      <Link to="/admin/project-invoice">Invoices</Link>
                    </li>
                    <li>
                      <Link to="/admin/project-earnings">Earnings</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            {/* Project Chart */}
            <div className="project-chart">
              <div className="row">
                <div className="col-xl-12 d-flex">
                  <div className="card flex-fill">
                    <div className="card-header">
                      <div className="d-flex justify-content-between align-items-center">
                        <h5 className="card-title">Bidding Report</h5>
                        <div className="dropdown">
                          <button
                            className="btn btn-white btn-sm dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            2022
                          </button>
                          <ul
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuButton"
                          >
                            <li>
                              <Link to="#" className="dropdown-item">
                                2021
                              </Link>
                            </li>
                            <li>
                              <Link to="#" className="dropdown-item">
                                2022
                              </Link>
                            </li>
                            <li>
                              <Link to="#" className="dropdown-item">
                                2020
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <div id="chart-bar-biding" />
                      <Chart options={dataBar} series={chartbidding} type="bar" height={300} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Project Chart */}
            {/* Project Download */}
            <div className="project-download">
              <div className="title-group d-flex">
                <h2>Bidding</h2>
                <div className="down-load">
                  <Link to="#" className="btn-primary">
                    <i className="fas fa-cloud-download-alt" />
                    Download
                  </Link>
                </div>
              </div>
              <div className="select-group">
                <div className="row">
                  <div className="col-lg-2 col-md-6">
                    <select className="form-select">
                      <option> Name</option>
                      <option>Option 1</option>
                      <option>Option 2</option>
                      <option>Option 3</option>
                      <option>Option 4</option>
                      <option>Option 5</option>
                    </select>
                  </div>
                  <div className="col-lg-2 col-md-6">
                    <select className="form-select">
                      <option> Project name</option>
                      <option>Option 1</option>
                      <option>Option 2</option>
                      <option>Option 3</option>
                      <option>Option 4</option>
                      <option>Option 5</option>
                    </select>
                  </div>
                  <div className="col-lg-2 col-md-6">
                    <select className="form-select">
                      <option> Date</option>
                      <option>Option 1</option>
                      <option>Option 2</option>
                      <option>Option 3</option>
                      <option>Option 4</option>
                      <option>Option 5</option>
                    </select>
                  </div>
                  <div className="col-lg-2 col-md-6">
                    <select className="form-select">
                      <option> Freelancer</option>
                      <option>Option 1</option>
                      <option>Option 2</option>
                      <option>Option 3</option>
                      <option>Option 4</option>
                      <option>Option 5</option>
                    </select>
                  </div>
                  <div className="col-lg-2 col-md-6">
                    <select className="form-select">
                      <option> status</option>
                      <option>Option 1</option>
                      <option>Option 2</option>
                      <option>Option 3</option>
                      <option>Option 4</option>
                      <option>Option 5</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            {/* /Project Download */}
            {/* Employer Project */}
            <div className="card ">
              <div className="table-responsive">
                <table className="table table-center table-hover mb-0 employe-tables">
                  <thead>
                    <tr>
                      <th>
                        <div className="form-check custom-checkbox">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="select-all"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customCheck1"
                          />
                        </div>
                      </th>
                      <th>Name</th>
                      <th>Project Name</th>
                      <th>Freelancer</th>
                      <th>Date</th>
                      <th>Base Price</th>
                      <th>Bidding Price</th>
                      <th>Status</th>
                      <th className="text-end">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="form-check custom-checkbox">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="customCheck1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customCheck1"
                          />
                        </div>
                      </td>
                      <td>
                        <Link to="#" className="active-name">
                          Hendry
                        </Link>
                      </td>
                      <td>
                        <Link to="#">UI/UX Design</Link>
                      </td>
                      <td>Hendry</td>
                      <td>25/03/20022</td>
                      <td>$450.44</td>
                      <td>$450.44</td>
                      <td>
                        <button className="btn active-btn">Active</button>
                      </td>
                      <td className="text-end subscription-end">
                        <Link
                          to="#"
                          className="btn btn-sm btn-secondary me-2"
                          data-bs-toggle="modal"
                          data-bs-target="#edit-category"
                        >
                          <i className="far fa-edit" />
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-sm btn-danger"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_category"
                        >
                          <i className="far fa-trash-alt" />
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check custom-checkbox">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="customCheck1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customCheck1"
                          />
                        </div>
                      </td>
                      <td>
                        <Link to="#" className="active-name">
                          Mark
                        </Link>
                      </td>
                      <td>
                        <Link to="#">Doccure</Link>
                      </td>
                      <td>Mark</td>
                      <td>21-02-2021</td>
                      <td>$450.44</td>
                      <td>$450.44</td>
                      <td>
                        <button className="btn active-btn">Active</button>
                      </td>
                      <td className="text-end subscription-end">
                        <Link
                          to="#"
                          className="btn btn-sm btn-secondary me-2"
                          data-bs-toggle="modal"
                          data-bs-target="#edit-category"
                        >
                          <i className="far fa-edit" />
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-sm btn-danger"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_category"
                        >
                          <i className="far fa-trash-alt" />
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check custom-checkbox">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="customCheck1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customCheck1"
                          />
                        </div>
                      </td>
                      <td>
                        <Link to="#" className="active-name">
                          Steawart
                        </Link>
                      </td>
                      <td>
                        <Link to="#">SmartHR</Link>
                      </td>
                      <td>Steawart</td>
                      <td>25/03/20022</td>
                      <td>$450.44</td>
                      <td>$450.44</td>
                      <td>
                        <button className="btn inactive-btn">Close</button>
                      </td>
                      <td className="text-end subscription-end">
                        <Link
                          to="#"
                          className="btn btn-sm btn-secondary me-2"
                          data-bs-toggle="modal"
                          data-bs-target="#edit-category"
                        >
                          <i className="far fa-edit" />
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-sm btn-danger"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_category"
                        >
                          <i className="far fa-trash-alt" />
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* /Employer Project */}
          </div>
          {/* /Page Wrapper */}
        </div>
        <EditUser />
        <Delete />
      </div>
    </>

  )
}

export default ProjectBidding;