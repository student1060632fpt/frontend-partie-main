import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { favicon, logo } from '../imagepath';
import Sidebar from '../../../commoncomponent/sidebar'
import Select2 from 'react-select2-wrapper';
import 'react-select2-wrapper/css/select2.css';


const LocalizationDetails = () => {

  const state = [
    { id: 1, text: "15 May 2016", },
    { id: 2, text: "15/05/2016", },
    { id: 3, text: "15.05.2016", },
    { id: 4, text: "05/15/2016", },
    { id: 5, text: "2016/05/15", },
    { id: 6, text: "2016-05-15", },
  ];

  const options = [
    { id: 1, text: "(UTC +5:30) Antarctica/Palmer", },
    { id: 2, text: "(UTC+05:30) India", },
  ];

  const options1 = [
    { id: 1, text: "12 Hours", },
    { id: 2, text: "24 Hours", },
    { id: 3, text: "36 Hours", },
    { id: 4, text: "48 Hours", },
    { id: 5, text: "60 Hours", },

  ];
  const options2 = [
    { id: 1, text: "$", },
    { id: 2, text: "₹", },
    { id: 3, text: "£", },
    { id: 4, text: "€", },
  ];





  return (
    <>
    <div className='main-wrapper'>
      <Sidebar />
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row">
              <div className="col-sm-6">
                <h3 className="page-title">Settings</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/admin/index">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/admin/settings">Settings</Link>
                  </li>
                  <li className="breadcrumb-item active">Localization</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              {/* Settings Menu */}
              <div className="settings-menu-links">
                <ul className="nav nav-tabs menu-tabs">
                  <li className="nav-item">
                    <Link className="nav-link" to="/admin/settings">
                      General Settings
                    </Link>
                  </li>
                  <li className="nav-item active">
                    <Link className="nav-link" to="/admin/localization-details">
                      Localization
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/admin/payment-settings">
                      Payment Settings
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/admin/email-settings">
                      Email Settings
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/admin/social-settings">
                      Social Media Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/admin/social-links">
                      Social Links
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/admin/seo-settings">
                      SEO Settings
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/admin/others-settings">
                      Others
                    </Link>
                  </li>
                </ul>
              </div>
              {/* Settings Menu */}
              <div className="row">
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-body pt-0">
                      <div className="card-header">
                        <h5 className="card-title">Localization Details</h5>
                      </div>
                      <form>
												<div className="settings-form">
													<div className="form-group">
														<label>Time Zone</label>
                            <Select2
                            className="select form-control "
                            data={options}
                            options={{
                              placeholder: 'Select',
                            }} />
													</div>
													<div className="form-group">
														<label>Date Format</label>
													  <Select2
                            className="select form-control "
                            data={state}
                            options={{
                              placeholder: 'Select',
                            }} />
													</div>
													<div className="form-group">
														<label>Time Format</label>
                            <Select2
                            className="select form-control "
                            data={options1}
                            options={{
                              placeholder: 'Select',
                            }} />
													</div>
													<div className="form-group">
														<label>Currency Symbol</label>
                            <Select2
                            className="select form-control "
                            data={options2}
                            options={{
                              placeholder: 'Select',
                            }} />
													</div>
													<div className="form-group mb-0">
														<div className="settings-btns">
															<button type="submit" className="btn btn-orange">Update</button>
														</div>
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
      {/* /Page Wrapper */}
      </div>
    </>

  )
}

export default LocalizationDetails;