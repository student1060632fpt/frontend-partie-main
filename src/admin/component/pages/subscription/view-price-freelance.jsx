import React from 'react';
import { Link } from "react-router-dom";
import Sidebar from '../../../commoncomponent/sidebar'
import Addplan from './addplan'

const ViewPriceFreelance = () => {


    return (
        <>
            <div className='main-wrapper'>
                <Sidebar />
                <>
                    {/* Page Wrapper */}
                    <div className="page-wrapper">
                        <div className="content container-fluid">
                            {/* Page Header */}
                            <div className="page-header subscribe-head">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <h3 className="page-title">Subscriber List</h3>
                                        <ul className="breadcrumb">
                                            <li className="breadcrumb-item">
                                                <Link to="/admin/index">Home</Link>
                                            </li>
                                            <li className="breadcrumb-item active">Subscriber List</li>
                                        </ul>
                                    </div>
                                    <div className="col-auto">
                                        <Link to="/admin/employe-list" className="btn add-button me-2">
                                            Subscription List
                                        </Link>
                                        <Link
                                            className="btn filter-btn"
                                            to="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#add-plan-employe"
                                        >
                                            New Subscription
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* /Page Header */}
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="subscribe-employe">
                                        <ul>
                                            <li>
                                                <Link to="/admin/view-price-employe">Employer </Link>
                                            </li>
                                            <li className="active">
                                                <Link to="/admin/view-price-freelance">Freelancer</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* Pricing Plans */}
                                    <div className="price-plan">
                                        <div className="heading-price text-center">
                                            <h2>Choose Your Plan </h2>
                                            <p>
                                                If you need more info about our pricing, please check{" "}
                                                <Link to="#">Pricing Guidelines</Link>
                                            </p>
                                        </div>
                                        <div className="plan-price">
                                            <ul className="nav nav-pills price-list" role="tablist">
                                                <li className="nav-item" role="presentation">
                                                    <button
                                                        className="btn-plan active"
                                                        id="pills-Monthly-tab"
                                                        data-bs-toggle="pill"
                                                        data-bs-target="#pills-1"
                                                        type="button"
                                                        role="tab"
                                                        aria-controls="pills-client"
                                                        aria-selected="false"
                                                    >
                                                        Monthly
                                                    </button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button
                                                        className="btn-plan "
                                                        id="pills-annual-tab"
                                                        data-bs-toggle="pill"
                                                        data-bs-target="#pills-2"
                                                        type="button"
                                                        role="tab"
                                                        aria-controls="pills-client"
                                                        aria-selected="false"
                                                    >
                                                        Annual
                                                    </button>
                                                </li>
                                            </ul>
                                            <div className="tab-content" id="pills-tabContent">
                                                <div
                                                    className="tab-pane fade active show"
                                                    id="pills-1"
                                                    role="tabpanel"
                                                    aria-labelledby="pills-Monthly-tab"
                                                >
                                                    <div className="row justify-content-center">
                                                        <div className="col-lg-4 col-md-6 d-flex">
                                                            <div className="clockfie-plan">
                                                                <div className="basic-plan text-center">
                                                                    <h2>Basic</h2>
                                                                    <p>
                                                                        Optimal for 10+ team size &amp; new <br />
                                                                        startup
                                                                    </p>
                                                                    <div className="price-start text-center">
                                                                        <h2>
                                                                            $39.00 <span>/month</span>
                                                                        </h2>
                                                                    </div>
                                                                </div>
                                                                <div className="credit-project">
                                                                    <ul className="credit-list">
                                                                        <li>
                                                                            20 prroject Credit{" "}
                                                                            <i className="fas fa-check-circle" />
                                                                        </li>
                                                                        <li>
                                                                            10 Projects <i className="fas fa-check-circle" />
                                                                        </li>
                                                                        <li>
                                                                            25 Project Visibility{" "}
                                                                            <i className="fas fa-times-circle wrong-credit" />
                                                                        </li>
                                                                        <li>
                                                                            20 Featured Services{" "}
                                                                            <i className="fas fa-times-circle wrong-credit" />
                                                                        </li>
                                                                    </ul>
                                                                    <div className="subscribe-now text-center">
                                                                        <Link to="#" className="btn btn-primary">
                                                                            Edit
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6 d-flex">
                                                            <div className="clockfie-plan">
                                                                <div className="basic-plan text-center">
                                                                    <h2>Professional</h2>
                                                                    <p>
                                                                        Optimal for 10+ team size &amp; new <br />
                                                                        startup
                                                                    </p>
                                                                    <div className="price-start text-center">
                                                                        <h2>
                                                                            $94.00 <span>/month</span>
                                                                        </h2>
                                                                    </div>
                                                                </div>
                                                                <div className="credit-project">
                                                                    <ul className="credit-list">
                                                                        <li>
                                                                            50 prroject Credit{" "}
                                                                            <i className="fas fa-check-circle" />
                                                                        </li>
                                                                        <li>
                                                                            25 Projects <i className="fas fa-check-circle" />
                                                                        </li>
                                                                        <li>
                                                                            50 Project Visibility{" "}
                                                                            <i className="fas fa-check-circle" />
                                                                        </li>
                                                                        <li>
                                                                            50 Featured Services{" "}
                                                                            <i className="fas fa-times-circle wrong-credit" />
                                                                        </li>
                                                                    </ul>
                                                                    <div className="subscribe-now text-center">
                                                                        <Link to="#" className="btn btn-primary">
                                                                            Edit
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6 d-flex">
                                                            <div className="clockfie-plan">
                                                                <div className="basic-plan text-center">
                                                                    <h2>Enterprise</h2>
                                                                    <p>
                                                                        Optimal for 10+ team size &amp; new <br />
                                                                        startup
                                                                    </p>
                                                                    <div className="price-start text-center">
                                                                        <h2>
                                                                            $199.00 <span>/month</span>
                                                                        </h2>
                                                                    </div>
                                                                </div>
                                                                <div className="credit-project">
                                                                    <ul className="credit-list">
                                                                        <li>
                                                                            100 prroject Credit{" "}
                                                                            <i className="fas fa-check-circle" />
                                                                        </li>
                                                                        <li>
                                                                            120 Projects <i className="fas fa-check-circle" />
                                                                        </li>
                                                                        <li>
                                                                            100 Project Visibility{" "}
                                                                            <i className="fas fa-check-circle" />
                                                                        </li>
                                                                        <li>
                                                                            100 Featured Services{" "}
                                                                            <i className="fas fa-check-circle" />
                                                                        </li>
                                                                    </ul>
                                                                    <div className="subscribe-now text-center">
                                                                        <Link to="#" className="btn btn-primary">
                                                                            Edit
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="tab-pane fade"
                                                    id="pills-2"
                                                    role="tabpanel"
                                                    aria-labelledby="pills-annual-tab"
                                                >
                                                    <div className="row justify-content-center">
                                                        <div className="col-lg-4 col-md-6 d-flex">
                                                            <div className="clockfie-plan">
                                                                <div className="basic-plan text-center">
                                                                    <h2>Basic</h2>
                                                                    <p>
                                                                        Optimal for 10+ team size &amp; new <br />
                                                                        startup
                                                                    </p>
                                                                    <div className="price-start text-center">
                                                                        <h2>
                                                                            $50.00 <span>/month</span>
                                                                        </h2>
                                                                    </div>
                                                                </div>
                                                                <div className="credit-project">
                                                                    <ul className="credit-list">
                                                                        <li>
                                                                            30 prroject Credit{" "}
                                                                            <i className="fas fa-check-circle" />
                                                                        </li>
                                                                        <li>
                                                                            10 Projects <i className="fas fa-check-circle" />
                                                                        </li>
                                                                        <li>
                                                                            30 Project Visibility{" "}
                                                                            <i className="fas fa-times-circle wrong-credit" />
                                                                        </li>
                                                                        <li>
                                                                            30 Featured Services{" "}
                                                                            <i className="fas fa-times-circle wrong-credit" />
                                                                        </li>
                                                                    </ul>
                                                                    <div className="subscribe-now text-center">
                                                                        <Link to="#" className="btn btn-primary">
                                                                            Edit
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6 d-flex">
                                                            <div className="clockfie-plan">
                                                                <div className="basic-plan text-center">
                                                                    <h2>Professional</h2>
                                                                    <p>
                                                                        Optimal for 10+ team size &amp; new <br />
                                                                        startup
                                                                    </p>
                                                                    <div className="price-start text-center">
                                                                        <h2>
                                                                            $120.00 <span>/month</span>
                                                                        </h2>
                                                                    </div>
                                                                </div>
                                                                <div className="credit-project">
                                                                    <ul className="credit-list">
                                                                        <li>
                                                                            80 prroject Credit{" "}
                                                                            <i className="fas fa-check-circle" />
                                                                        </li>
                                                                        <li>
                                                                            25 Projects <i className="fas fa-check-circle" />
                                                                        </li>
                                                                        <li>
                                                                            80 Project Visibility{" "}
                                                                            <i className="fas fa-check-circle" />
                                                                        </li>
                                                                        <li>
                                                                            80 Featured Services{" "}
                                                                            <i className="fas fa-times-circle wrong-credit" />
                                                                        </li>
                                                                    </ul>
                                                                    <div className="subscribe-now text-center">
                                                                        <Link to="#" className="btn btn-primary">
                                                                            Edit
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6 d-flex">
                                                            <div className="clockfie-plan">
                                                                <div className="basic-plan text-center">
                                                                    <h2>Enterprise</h2>
                                                                    <p>
                                                                        Optimal for 10+ team size &amp; new <br />
                                                                        startup
                                                                    </p>
                                                                    <div className="price-start text-center">
                                                                        <h2>
                                                                            $1999.00 <span>/month</span>
                                                                        </h2>
                                                                    </div>
                                                                </div>
                                                                <div className="credit-project">
                                                                    <ul className="credit-list">
                                                                        <li>
                                                                            140 prroject Credit{" "}
                                                                            <i className="fas fa-check-circle" />
                                                                        </li>
                                                                        <li>
                                                                            120 Projects <i className="fas fa-check-circle" />
                                                                        </li>
                                                                        <li>
                                                                            140 Project Visibility{" "}
                                                                            <i className="fas fa-check-circle" />
                                                                        </li>
                                                                        <li>
                                                                            140 Featured Services{" "}
                                                                            <i className="fas fa-check-circle" />
                                                                        </li>
                                                                    </ul>
                                                                    <div className="subscribe-now text-center">
                                                                        <Link to="#" className="btn btn-primary">
                                                                            Edit
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Pricing Plans */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Page Wrapper */}
                    <Addplan />
                </>
            </div>

        </>
    )
}


export default ViewPriceFreelance; 