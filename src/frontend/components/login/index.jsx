import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { Logo_01 } from "../imagepath";

const Login = (props) => {
	
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
                  {/* Login Content */}
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
                          <h3>Welcome Back</h3>
                          <p>
                            Don't miss your next opportunity. Sign in to stay updated on
                            your professional world.
                          </p>
                        </div>
                        <form >
                          <div className="form-group form-focus">
                            <input type="text" className="form-control floating" />
                            <label className="focus-label">Email</label>
                          </div>
                          <div className="form-group form-focus">
                            <input type="password" className="form-control floating" />
                            <label className="focus-label">Password</label>
                          </div>
                          <div className="form-group">
                            <label className="custom_check">
                              <input type="checkbox" name="rem_password" />
                              <span className="checkmark" /> Remember password
                            </label>
                          </div>
                          <button
                            className="btn btn-primary btn-block btn-lg login-btn"
                            type="submit"
                          >
                            Login
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
                              <Link className="forgot-link" to="/forgot-password">
                                Forgot Password ?
                              </Link>
                            </div>
                            <div className="col-6 text-end dont-have">
                              New to Kofejob? <Link to="/register">Click here</Link>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  {/* /Login Content */}
                </div>
              </div>
            </div>
          </div>
          {/* /Page Content */}
        </>
        )
    
}
export default Login;