import React from 'react'
import { Link } from "react-router-dom";
import { logo_01, } from '../imagepath'
import config from "config";

const Register = (props) => {
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
                                    <h1>Join Kofejob</h1>
                                    <p className="account-subtitle">
                                        Make the most of your professional life
                                    </p>
                                    <nav className="user-tabs mb-4">
                                        <ul
                                            role="tablist"
                                            className="nav nav-pills card-header-pills nav-justified"
                                        >
                                            <li className="nav-item me-2">
                                                <Link
                                                    to="#developer"
                                                    data-bs-toggle="tab"
                                                    className="nav-link active mb-1"
                                                >
                                                    DEVELOPER
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link
                                                    to="#company"
                                                    data-bs-toggle="tab"
                                                    className="nav-link mb-1"
                                                >
                                                    COMPANY
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                    {/* Form */}
                                    <div className="tab-content pt-0">
                                        <div
                                            role="tabpanel"
                                            id="developer"
                                            className="tab-pane fade active show"
                                        >
                                            <form action={`${config.publicPath}admin/login`}>
                                                <div className="form-group form-focus">
                                                    <input type="email" className="form-control floating" />
                                                    <label className="focus-label">User Name</label>
                                                </div>
                                                <div className="form-group form-focus">
                                                    <input type="email" className="form-control floating" />
                                                    <label className="focus-label">Email</label>
                                                </div>
                                                <div className="form-group form-focus">
                                                    <input type="password" className="form-control floating" />
                                                    <label className="focus-label">Password</label>
                                                </div>
                                                <div className="form-group form-focus">
                                                    <input type="password" className="form-control floating" />
                                                    <label className="focus-label">Confirm Password</label>
                                                </div>
                                                <div className="dont-have">
                                                    <p>
                                                        You agree to the Kofejob <Link to="#">User Agreement,</Link>{" "}
                                                        <Link to="#">Privacy Policy,</Link> and{" "}
                                                        <Link to="#">Cookie Policy</Link>.
                                                    </p>
                                                </div>
                                                <button
                                                    className="btn btn-primary btn-block btn-lg login-btn"
                                                    type="submit"
                                                >
                                                    Agree to join
                                                </button>
                                                <div className="login-or">
                                                    <p className="mb-0">Or login with</p>
                                                </div>
                                                {/* /Form */}
                                                {/* Social Login */}
                                                <div className="row form-row social-login">
                                                    <div className="col-lg-4">
                                                        <Link to="#" className="btn btn-twitter btn-block mb-1">
                                                            {" "}
                                                            Twitter
                                                        </Link>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <Link to="#" className="btn btn-facebook btn-block mb-1">
                                                            {" "}
                                                            Facebook
                                                        </Link>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <Link to="#" className="btn btn-google btn-block mb-1">
                                                            {" "}
                                                            Google
                                                        </Link>
                                                    </div>
                                                </div>
                                                {/* /Social Login */}
                                                <div className="row form-row login-foot">
                                                    <div className="col-lg-6 login-forgot">
                                                        <Link className="forgot-link" to="/admin/forgot-password">
                                                            Forgot Password ?
                                                        </Link>
                                                    </div>
                                                    <div className="col-lg-6 dont-have">
                                                        New to Kofejob? <Link to="/admin/register">Click here</Link>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div role="tabpanel" id="company" className="tab-pane fade">
                                            <form action={`${config.publicPath}admin/login`}>
                                                <div className="form-group form-focus">
                                                    <input type="email" className="form-control floating" />
                                                    <label className="focus-label">User Name</label>
                                                </div>
                                                <div className="form-group form-focus">
                                                    <input type="email" className="form-control floating" />
                                                    <label className="focus-label">Email</label>
                                                </div>
                                                <div className="form-group form-focus">
                                                    <input type="password" className="form-control floating" />
                                                    <label className="focus-label">Password</label>
                                                </div>
                                                <div className="form-group form-focus">
                                                    <input type="password" className="form-control floating" />
                                                    <label className="focus-label">Confirm Password</label>
                                                </div>
                                                <div className="dont-have">
                                                    <p>
                                                        You agree to the Kofejob <Link to="#">User Agreement,</Link>{" "}
                                                        <Link to="#">Privacy Policy,</Link> and{" "}
                                                        <Link to="#">Cookie Policy</Link>.
                                                    </p>
                                                </div>
                                                <button
                                                    className="btn btn-primary btn-block btn-lg login-btn"
                                                    type="submit"
                                                >
                                                    Agree TO JOIN
                                                </button>
                                                <div className="login-or">
                                                    <p className="mb-0">Or login with</p>
                                                </div>
                                                {/* /Form */}
                                                {/* Social Login */}
                                                <div className="row form-row social-login">
                                                    <div className="col-4">
                                                        <Link to="#" className="btn btn-twitter btn-block">
                                                            {" "}
                                                            Twitter
                                                        </Link>
                                                    </div>
                                                    <div className="col-4">
                                                        <Link to="#" className="btn btn-facebook btn-block">
                                                            {" "}
                                                            Facebook
                                                        </Link>
                                                    </div>
                                                    <div className="col-4">
                                                        <Link to="#" className="btn btn-google btn-block">
                                                            {" "}
                                                            Google
                                                        </Link>
                                                    </div>
                                                </div>
                                                {/* /Social Login */}
                                                <div className="row form-row login-foot">
                                                    <div className="col-lg-6 login-forgot">
                                                        <Link className="forgot-link" to="/admin/forgot-password">
                                                            Forgot Password ?
                                                        </Link>
                                                    </div>
                                                    <div className="col-lg-6 dont-have">
                                                        New to Kofejob? <Link to="/admin/register">Click here</Link>
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

            {/* /Main Wrapper */}
        </>

    )
}

export default Register;