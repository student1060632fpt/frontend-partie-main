import React, { useEffect } from "react";
import StickyBox from "react-sticky-box";
import { Sidebar } from '../sidebar';
    
const Membership = (props) => {   
  useEffect(() => {
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
          <div className="col-xl-9 col-md-8 mx-auto">
            <div className="freelance-title" id="plan">
              <h3>Employer Packages</h3>
              <p> Choose the best pricing that suites your requirements</p>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="package-detail">
                  <h4>Basic Plan</h4>
                  <p>Go Pro, Best for the individuals</p>
                  <h3 className="package-price">$19.00</h3>
                  <div className="package-feature">
                    <ul>
                      <li>12 Project Credits</li>
                      <li>10 Allowed Services</li>
                      <li>20 Days visibility</li>
                      <li>5 Featured Services</li>
                      <li>20 Days visibility</li>
                      <li>30 Days Package Expiry</li>
                      <li className="non-check">Profile Featured</li>
                    </ul>
                  </div>
                  <a href="#" className="btn btn-primary price-btn btn-block">
                    Select Plan
                  </a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="package-detail">
                  <h4>Business </h4>
                  <p>Highest selling package features</p>
                  <h3 className="package-price">$29.00</h3>
                  <div className="package-feature">
                    <ul>
                      <li>15 Project Credits</li>
                      <li>12 Allowed Services</li>
                      <li>25 Days visibility</li>
                      <li>10 Featured Services</li>
                      <li>30 Days visibility</li>
                      <li>40 Days Package Expiry</li>
                      <li>Profile Featured</li>
                    </ul>
                  </div>
                  <a href="#" className="btn btn-primary price-btn btn-block">
                    Select Plan
                  </a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="package-detail">
                  <h4>The Unlimita </h4>
                  <p>Drive crazy, unlimited on the go</p>
                  <h3 className="package-price">$79.00</h3>
                  <div className="package-feature">
                    <ul>
                      <li>Unlimited Project Credits</li>
                      <li>Unlimited Services</li>
                      <li>Services Never Expire</li>
                      <li>20 Featured Services</li>
                      <li>Services Never Expire</li>
                      <li>Package Never Expire</li>
                      <li>Profile Featured</li>
                    </ul>
                  </div>
                  <a href="#" className="btn btn-primary price-btn btn-block">
                    Select Plan
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="member-plan pro-box">
                  <div className="pro-head">
                    <h2>
                      <i
                        className="fa fa-check-circle orange-text"
                        aria-hidden="true"
                      />{" "}
                      Plan Details
                    </h2>
                  </div>
                  <div className="pro-body member-detail">
                    <div className="row">
                      <div className="col-6">
                        <h4 className="mb-0">The Ultima</h4>
                        <div className="yr-amt">Anually Price</div>
                        <div className="expiry-on">Expiry On</div>
                        <div className="expiry">24 JAN 2022</div>
                      </div>
                      <div className="col-6 change-plan">
                        <h3>$1200</h3>
                        <div className="yr-duration">Duration: One Year</div>
                        <a
                          href="#plan"
                          className="btn btn-primary btn-plan black-btn"
                        >
                          Change Plan
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Statement</h4>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive table-box">
                      <table className="table table-center table-hover datatable">
                        <thead className="thead-pink">
                          <tr>
                            <th>Purchased Date</th>
                            <th>Details</th>
                            <th>Expiry Date</th>
                            <th>Type</th>
                            <th>Status</th>
                            <th>Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>15 July 2021</td>
                            <td>
                              <p className="mb-0">The Unlimita</p>
                              <a href="#" className="read-text">
                                Invoice : IVIP12023598
                              </a>
                            </td>
                            <td>15th July 2022</td>
                            <td>Yearly</td>
                            <td className="text-danger">Inactive</td>
                            <td>$200.00</td>
                          </tr>
                          <tr>
                            <td>15 July 2022</td>
                            <td>
                              <p className="mb-0">The Unlimita</p>
                              <a href="#" className="read-text">
                                Invoice : IVIP12023598
                              </a>
                            </td>
                            <td>15th July 2023</td>
                            <td>Yearly</td>
                            <td className="text-success">Active</td>
                            <td>$200.00</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="text-end mt-3">
                      <ul className="paginations">
                        <li>
                          <a href="#">
                            {" "}
                            <i className="fas fa-angle-left" /> Previous
                          </a>
                        </li>
                        <li>
                          <a href="#">1</a>
                        </li>
                        <li>
                          <a href="#" className="active">
                            2
                          </a>
                        </li>
                        <li>
                          <a href="#">3</a>
                        </li>
                        <li>
                          <a href="#">4</a>
                        </li>
                        <li>
                          <a href="#">
                            Next <i className="fas fa-angle-right" />
                          </a>
                        </li>
                      </ul>
                    </div>
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
export default Membership;