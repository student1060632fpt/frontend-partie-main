/**
 * Form Elemets
 */
import React, { useState } from 'react';
import Sidebar from '../../../../commoncomponent/sidebar';


const FormVertical = () => {


  return (
    <>
    <div className='main-wrapper'>
    <Sidebar />
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">Vertical Form</h3>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          {/* Form Vertical */}
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="card-header pt-0 mb-4">
                    <h4 className="card-title">Basic Form</h4>
                  </div>
                  <form action="#">
                    <div className="form-group">
                      <label>First Name</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label>Last Name</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label>Email Address</label>
                      <input type="email" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label>Username</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input type="password" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label>Repeat Password</label>
                      <input type="password" className="form-control" />
                    </div>
                    <div className="text-end">
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="card-header pt-0 mb-4">
                    <h4 className="card-title">Address Form</h4>
                  </div>
                  <form action="#">
                    <div className="form-group">
                      <label>Address Line 1</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label>Address Line 2</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label>City</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label>State</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label>Country</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label>Postal Code</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="text-end">
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <div className="card-header pt-0 mb-4">
                    <h4 className="card-title">Two Column Vertical Form</h4>
                  </div>
                  <form action="#">
                    <h5 className="card-title">Personal Information</h5>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>First Name</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                          <label>Last Name</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                          <label>Blood Group</label>
                          <select className="form-select">
                            <option>Select</option>
                            <option value={1}>A+</option>
                            <option value={2}>O+</option>
                            <option value={3}>B+</option>
                            <option value={4}>AB+</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label className="d-block">Gender:</label>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gender"
                              id="gender_male"
                              defaultValue="option1"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="gender_male"
                            >
                              Male
                            </label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gender"
                              id="gender_female"
                              defaultValue="option2"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="gender_female"
                            >
                              Female
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Username</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                          <label>Email</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                          <label>Password</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                          <label>Repeat Password</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <h5 className="card-title">Postal Address</h5>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Address Line 1</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                          <label>Address Line 2</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                          <label>State</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>City</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                          <label>Country</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                          <label>Postal Code</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="text-end">
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <div className="card-header pt-0 mb-4">
                    <h4 className="card-title">Two Column Vertical Form</h4>
                  </div>
                  <form action="#">
                    <div className="row">
                      <div className="col-md-6">
                        <h5 className="card-title">Personal details</h5>
                        <div className="form-group">
                          <label>Name:</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                          <label>Password:</label>
                          <input type="password" className="form-control" />
                        </div>
                        <div className="form-group">
                          <label>State:</label>
                          <select className="form-select">
                            <option>Select State</option>
                            <option value={1}>California</option>
                            <option value={2}>Texas</option>
                            <option value={3}>Florida</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label>Your Message:</label>
                          <textarea
                            rows={5}
                            cols={5}
                            className="form-control"
                            placeholder="Enter message"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <h5 className="card-title">Personal details</h5>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>First Name:</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>Last Name:</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>Email:</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>Phone:</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <label>Address line:</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>Country:</label>
                              <select className="form-select">
                                <option>Select Country</option>
                                <option value={1}>USA</option>
                                <option value={2}>France</option>
                                <option value={3}>India</option>
                                <option value={4}>Spain</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>State/Province:</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>ZIP code:</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>City:</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-end">
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* /Form Vertical */}
        </div>
      </div>
      {/* /Page Wrapper */}
      </div>
    </>

  );
}
export default FormVertical;