import React from 'react'
import { Link } from "react-router-dom";
import { logo_01, } from '../imagepath'
import config from "config";

const ForgotPassword = (props) => {
    return (
        <>
            {/* Main Wrapper */}
            <div className='main-wrapper login-body'>
                <div className="login-wrapper">
                    <div className="container">
                        <img
                            className="img-fluid logo-dark mb-2"
                            src={logo_01}
                            alt="Logo"
                        />
                        <div className="loginbox">
                            <div className="login-right">
                                <div className="login-right-wrap">
                                    <h1>Forgot Password?</h1>
                                    <p className="account-subtitle">
                                        Enter your email to get a password reset link
                                    </p>
                                    {/* Form */}
                                    <form action={`${config.publicPath}admin/login`}>
                                        <div className="form-group form-focus">
                                            <input type="email" className="form-control floating" />
                                            <label className="focus-label">Email</label>
                                        </div>
                                        <div className="form-group mb-0">
                                            <button
                                                className="btn btn-primary btn-block btn-lg login-btn"
                                                type="submit"
                                            >
                                                FIND OUT PASSWORD
                                            </button>
                                        </div>
                                    </form>
                                    {/* /Form */}
                                    <div className="row form-row login-foot">
                                        <div className="col-lg-6 login-forgot">
                                            <Link className="forgot-link" to="/admin/login">
                                                Sign In
                                            </Link>
                                        </div>
                                        <div className="col-lg-6 dont-have">
                                            New to Kofejob? <Link to="/admin/register">Join Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Main Wrapper */}
        </>

    )
}

export default ForgotPassword;