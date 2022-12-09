import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { Logo_01 } from "../imagepath";

const Register = (props) => {
	
   useEffect(() => {
    
      document.body.className = 'account-page';
      return () => { document.body.className = ''; }
    });
        return (
          <>          
            {/* Page Content */}
            <div className="content">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 offset-md-3">
                    {/* Register Tab Content */}
                    <div className="account-content">
                      <div className="align-items-center justify-content-center">
                        <div className="login-right">
                          <div className="login-header text-center">
                            <Link to="/index">
                              <img
                                src={Logo_01}
                                alt="logo"
                                className="img-fluid"
                              />
                            </Link>
                            <h3>Join Kofejob</h3>
                            <p>Make the most of your professional life</p>
                          </div>
                          <nav className="user-tabs mb-4">
                            <ul role="tablist" className="nav nav-pills nav-justified">
                              <li className="nav-item">
                                <a
                                  href="#developer"
                                  data-bs-toggle="tab"
                                  className="nav-link active"
                                >
                                  FREELANCER
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href="#company"
                                  data-bs-toggle="tab"
                                  className="nav-link"
                                >
                                  COMPANY
                                </a>
                              </li>
                            </ul>
                          </nav>
                          <div className="tab-content pt-0">
                            <div
                              role="tabpanel"
                              id="developer"
                              className="tab-pane fade active show"
                            >
                              <form>
                                <div className="form-group form-focus">
                                  <input type="email" className="form-control floating" />
                                  <label className="focus-label">User Name</label>
                                </div>
                                <div className="form-group form-focus">
                                  <input type="email" className="form-control floating" />
                                  <label className="focus-label">Email </label>
                                </div>
                                <div className="form-group form-focus">
                                  <input
                                    type="password"
                                    className="form-control floating"
                                  />
                                  <label className="focus-label">Password</label>
                                </div>
                                <div className="form-group form-focus mb-0">
                                  <input
                                    type="password"
                                    className="form-control floating"
                                  />
                                  <label className="focus-label">Confirm Password</label>
                                </div>
                                <div className="dont-have">
                                  <label className="custom_check">
                                    <input type="checkbox" name="rem_password" />
                                    <span className="checkmark" /> You agree to the
                                    Kofejob{" "}
                                    <Link to="/privacy-policy">
                                      User Agreement, Privacy Policy,
                                    </Link>{" "}
                                    and <Link to="/privacy-policy">Cookie Policy</Link>.
                                  </label>
                                </div>
                                <button
                                  className="btn btn-primary btn-block btn-lg login-btn"
                                  type="submit"
                                >
                                  Agree TO JOIN
                                </button>
                                <div className="login-or">
                                  <p>Or login with</p>
                                </div>
                                <div className="row social-login">
                                  <div className="col-4">
                                    <a href="#" className="btn btn-twitter btn-block">
                                      {" "}
                                      Twitter
                                    </a>
                                  </div>
                                  <div className="col-4">
                                    <a href="#" className="btn btn-facebook btn-block">
                                      {" "}
                                      Facebook
                                    </a>
                                  </div>
                                  <div className="col-4">
                                    <a href="#" className="btn btn-google btn-block">
                                      {" "}
                                      Google
                                    </a>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-6 text-start">
                                    <Link
                                      className="forgot-link"
                                      to="/forgot-password"
                                    >
                                      Forgot Password ?
                                    </Link>
                                  </div>
                                  <div className="col-6 text-end dont-have">
                                    Already on Kofejob <Link to="/login">Click here</Link>
                                  </div>
                                </div>
                              </form>
                            </div>
                            <div role="tabpanel" id="company" className="tab-pane fade">
                              <form >
                                <div className="form-group form-focus">
                                  <input type="email" className="form-control floating" />
                                  <label className="focus-label">User Name</label>
                                </div>
                                <div className="form-group form-focus">
                                  <input type="email" className="form-control floating" />
                                  <label className="focus-label">Email </label>
                                </div>
                                <div className="form-group form-focus">
                                  <input
                                    type="password"
                                    className="form-control floating"
                                  />
                                  <label className="focus-label">Password</label>
                                </div>
                                <div className="form-group form-focus mb-0">
                                  <input
                                    type="password"
                                    className="form-control floating"
                                  />
                                  <label className="focus-label">Confirm Password</label>
                                </div>
                                <div className="dont-have">
                                  <label className="custom_check">
                                    <input type="checkbox" name="rem_password" />
                                    <span className="checkmark" /> You agree to the
                                    Kofejob{" "}
                                    <Link to="/privacy-policy">
                                      User Agreement, Privacy Policy,
                                    </Link>{" "}
                                    and <Link to="/privacy-policy">Cookie Policy</Link>.
                                  </label>
                                </div>
                                <button
                                  className="btn btn-primary btn-block btn-lg login-btn"
                                  type="submit"
                                >
                                  Agree TO JOIN
                                </button>
                                <div className="login-or">
                                  <p>Or login with</p>
                                </div>
                                <div className="row form-row social-login">
                                  <div className="col-4">
                                    <a href="#" className="btn btn-twitter btn-block">
                                      {" "}
                                      Twitter
                                    </a>
                                  </div>
                                  <div className="col-4">
                                    <a href="#" className="btn btn-facebook btn-block">
                                      {" "}
                                      Facebook
                                    </a>
                                  </div>
                                  <div className="col-4">
                                    <a href="#" className="btn btn-google btn-block">
                                      {" "}
                                      Google
                                    </a>
                                  </div>
                                </div>
                                <div className="row form-row">
                                  <div className="col-6 text-start">
                                    <Link
                                      className="forgot-link"
                                      to="/forgot-password"
                                    >
                                      Forgot Password ?
                                    </Link>
                                  </div>
                                  <div className="col-6 text-end dont-have">
                                    Already on Kofejob <Link to="/login">Click here</Link>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /Register Tab Content */}
                  </div>
                </div>
              </div>
            </div>
            {/* /Page Content */}
          </>
        )
    
}
export default Register;