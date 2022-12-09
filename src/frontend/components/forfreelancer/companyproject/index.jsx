import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { home_icon, profile_img, Flags_en,Tab_icon_10, Tab_icon_11,Tab_icon_12,Tab_icon_13 } from "../../imagepath";
import StickyBox from "react-sticky-box";
import { ProfileSidebar } from '../../forfreelancer/sidebar/profilesidebar';

const CompanyProject = (props) => {

    useEffect(() => {
        document.body.className = 'dashboard-page';
        return () => { document.body.className = ''; }
    });

    return (
        <>
            {/* Breadcrumb */}
            <div className="bread-crumb-bar">
                <div className="container">
                    <div className="row align-items-center inner-banner">
                        <div className="col-md-12 col-12 text-center">
                            <div className="breadcrumb-list">
                                <nav aria-label="breadcrumb" className="page-breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link to="/index">
                                                <img src={home_icon} alt="" /> Home
                                            </Link>
                                        </li>
                                        <li className="breadcrumb-item" aria-current="page">
                                            Employers
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            COMPANY PROFILE
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Breadcrumb */}
            {/* Profile Banner */}
            <section className="profile-baner">
                <div className="container">
                    <div className="row">
                        <div className="col-auto">
                            <div className="profile-img">
                                <img src={profile_img} alt="" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="profile-main">
                                <h2>
                                    Amaze Tech PVT LTD. <i className="fas fa-check-circle" />
                                </h2>
                                <p>Since July 2017</p>
                                <div className="about-list">
                                    <ul>
                                        <li>
                                            <img src={Flags_en} alt="Lang" /> UK
                                        </li>
                                        <li>
                                            <i className="fas fa-map-marker-alt" /> Alabama, USA
                                        </li>
                                        <li>
                                            <i className="far fa-clock" /> Poster 1 hour ago
                                        </li>
                                    </ul>
                                </div>
                                <div className="rating">
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star " />
                                    <i className="fas fa-star" />
                                    <span className="average-rating">4.6 (25)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Profile Banner */}
            {/* Page Content */}
            <div className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="pro-view">
                                {/* Tab Detail */}
                                <nav className="provider-tabs mb-4 abouts-view">
                                    <ul className="nav nav-tabs nav-tabs-solid nav-justified">
                                        <li className="nav-item">
                                            <Link className="nav-link " to="/company-profile">
                                                <img
                                                    src={Tab_icon_13}
                                                    alt="UserImage"
                                                />
                                                <p className="bg-red">About Us</p>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link
                                                className="nav-link active-about"
                                                to="/company-project"
                                            >
                                                <img
                                                    src={Tab_icon_12}
                                                    alt="UserImage"
                                                />
                                                <p>Projects</p>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/company-gallery">
                                                <img
                                                    src={Tab_icon_10}
                                                    alt="UserImage"
                                                />
                                                <p>Gallery</p>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/company-review">
                                                <img
                                                    src={Tab_icon_11}
                                                    alt="UserImage"
                                                />
                                                <p>Reviews</p>
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                                {/* /Tab Detail */}
                                {/* Projects Tab Content */}
                                <div className="pro-post widget-box company-post">
                                    <h3 className="pro-title">Projects</h3>
                                    <div className="projects-card flex-fill project-company">
                                        <div className="card-body">
                                            <div className="projects-details align-items-center">
                                                <div className="project-info">
                                                    <span>Dreamguystech</span>
                                                    <h2>Website Designer Required For Directory Theme</h2>
                                                    <div className="customer-info">
                                                        <ul className="list-details">
                                                            <li>
                                                                <div className="slot">
                                                                    <p>Price type</p>
                                                                    <h5>Fixed</h5>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="slot">
                                                                    <p>Location</p>
                                                                    <h5>
                                                                        <img
                                                                            src={Flags_en}
                                                                            height={13}
                                                                            alt="Lang"
                                                                        />{" "}
                                                                        UK
                                                                    </h5>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="slot">
                                                                    <p>Expiry</p>
                                                                    <h5>4 Days Left</h5>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="project-hire-info">
                                                    <div className="content-divider" />
                                                    <div className="projects-amount">
                                                        <h3>$500.00</h3>
                                                        <h5>in 12 Days</h5>
                                                    </div>
                                                    <div className="content-divider" />
                                                    <div className="projects-action text-center">
                                                        <Link
                                                            to="/view-project-detail"
                                                            className="projects-btn"
                                                        >
                                                            View Proposals
                                                        </Link>
                                                        <Link
                                                            to="/view-project-detail"
                                                            className="projects-btn"
                                                        >
                                                            Edit Jobs
                                                        </Link>
                                                        <Link to="#" className="hired-detail">
                                                            <span>5</span> Proposals
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="projects-card flex-fill project-company">
                                        <div className="card-body">
                                            <div className="projects-details align-items-center">
                                                <div className="project-info">
                                                    <span>Dreamguystech</span>
                                                    <h2>
                                                        Laravel Backend Developer to finish ongoing project
                                                    </h2>
                                                    <div className="customer-info">
                                                        <ul className="list-details">
                                                            <li>
                                                                <div className="slot">
                                                                    <p>Price type</p>
                                                                    <h5>Fixed</h5>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="slot">
                                                                    <p>Location</p>
                                                                    <h5>
                                                                        <img
                                                                            src={Flags_en}
                                                                            height={13}
                                                                            alt="Lang"
                                                                        />{" "}
                                                                        UK
                                                                    </h5>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="slot">
                                                                    <p>Expiry</p>
                                                                    <h5>4 Days Left</h5>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="project-hire-info">
                                                    <div className="content-divider" />
                                                    <div className="projects-amount">
                                                        <h3>$500.00</h3>
                                                        <h5>in 12 Days</h5>
                                                    </div>
                                                    <div className="content-divider" />
                                                    <div className="projects-action text-center">
                                                        <Link
                                                            to="/view-project-detail"
                                                            className="projects-btn"
                                                        >
                                                            View Details
                                                        </Link>
                                                        <Link to="#" className="hired-detail">
                                                            Hired on 19 JUN 2021
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="projects-card flex-fill project-company">
                                        <div className="card-body">
                                            <div className="projects-details align-items-center">
                                                <div className="project-info">
                                                    <span>Dreamguystech</span>
                                                    <h2>WooCommerce Product Page Back Up Restoration</h2>
                                                    <div className="customer-info">
                                                        <ul className="list-details">
                                                            <li>
                                                                <div className="slot">
                                                                    <p>Price type</p>
                                                                    <h5>Fixed</h5>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="slot">
                                                                    <p>Location</p>
                                                                    <h5>
                                                                        <img
                                                                            src={Flags_en}
                                                                            height={13}
                                                                            alt="Lang"
                                                                        />{" "}
                                                                        UK
                                                                    </h5>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="slot">
                                                                    <p>Expiry</p>
                                                                    <h5>4 Days Left</h5>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="project-hire-info">
                                                    <div className="content-divider" />
                                                    <div className="projects-amount">
                                                        <h3>$500.00</h3>
                                                        <h5>in 12 Days</h5>
                                                    </div>
                                                    <div className="content-divider" />
                                                    <div className="projects-action text-center">
                                                        <Link
                                                            to="/view-project-detail"
                                                            className="projects-btn"
                                                        >
                                                            View Proposals
                                                        </Link>
                                                        <Link
                                                            to="/view-project-detail"
                                                            className="projects-btn"
                                                        >
                                                            Edit Jobs
                                                        </Link>
                                                        <Link to="#" className="hired-detail">
                                                            <span>5</span> Proposals
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="projects-card flex-fill project-company">
                                        <div className="card-body">
                                            <div className="projects-details align-items-center">
                                                <div className="project-info">
                                                    <span>Dreamguystech</span>
                                                    <h2>
                                                        Laravel Backend Developer to finish ongoing project
                                                    </h2>
                                                    <div className="customer-info">
                                                        <ul className="list-details">
                                                            <li>
                                                                <div className="slot">
                                                                    <p>Price type</p>
                                                                    <h5>Fixed</h5>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="slot">
                                                                    <p>Location</p>
                                                                    <h5>
                                                                        <img
                                                                            src={Flags_en}
                                                                            height={13}
                                                                            alt="Lang"
                                                                        />{" "}
                                                                        UK
                                                                    </h5>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="slot">
                                                                    <p>Expiry</p>
                                                                    <h5>4 Days Left</h5>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="project-hire-info">
                                                    <div className="content-divider" />
                                                    <div className="projects-amount">
                                                        <h3>$500.00</h3>
                                                        <h5>in 12 Days</h5>
                                                    </div>
                                                    <div className="content-divider" />
                                                    <div className="projects-action text-center">
                                                        <Link
                                                            to="/view-project-detail"
                                                            className="projects-btn"
                                                        >
                                                            View Details
                                                        </Link>
                                                        <Link to="#" className="hired-detail">
                                                            Hired on 19 JUN 2021
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="projects-card flex-fill project-company">
                                        <div className="card-body">
                                            <div className="projects-details align-items-center">
                                                <div className="project-info">
                                                    <span>Dreamguystech</span>
                                                    <h2>Website Designer Required For Directory Theme</h2>
                                                    <div className="customer-info">
                                                        <ul className="list-details">
                                                            <li>
                                                                <div className="slot">
                                                                    <p>Price type</p>
                                                                    <h5>Fixed</h5>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="slot">
                                                                    <p>Location</p>
                                                                    <h5>
                                                                        <img
                                                                            src={Flags_en}
                                                                            height={13}
                                                                            alt="Lang"
                                                                        />{" "}
                                                                        UK
                                                                    </h5>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="slot">
                                                                    <p>Expiry</p>
                                                                    <h5>4 Days Left</h5>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="project-hire-info">
                                                    <div className="content-divider" />
                                                    <div className="projects-amount">
                                                        <h3>$500.00</h3>
                                                        <h5>in 12 Days</h5>
                                                    </div>
                                                    <div className="content-divider" />
                                                    <div className="projects-action text-center">
                                                        <Link
                                                            to="/view-project-detail"
                                                            className="projects-btn"
                                                        >
                                                            View Proposals
                                                        </Link>
                                                        <Link
                                                            to="/view-project-detail"
                                                            className="projects-btn"
                                                        >
                                                            Edit Jobs
                                                        </Link>
                                                        <Link to="#" className="hired-detail">
                                                            <span>5</span> Proposals
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="projects-card flex-fill project-company">
                                        <div className="card-body">
                                            <div className="projects-details align-items-center">
                                                <div className="project-info">
                                                    <span>Dreamguystech</span>
                                                    <h2>
                                                        Laravel Backend Developer to finish ongoing project
                                                    </h2>
                                                    <div className="customer-info">
                                                        <ul className="list-details">
                                                            <li>
                                                                <div className="slot">
                                                                    <p>Price type</p>
                                                                    <h5>Fixed</h5>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="slot">
                                                                    <p>Location</p>
                                                                    <h5>
                                                                        <img
                                                                            src={Flags_en}
                                                                            height={13}
                                                                            alt="Lang"
                                                                        />{" "}
                                                                        UK
                                                                    </h5>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="slot">
                                                                    <p>Expiry</p>
                                                                    <h5>4 Days Left</h5>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="project-hire-info">
                                                    <div className="content-divider" />
                                                    <div className="projects-amount">
                                                        <h3>$500.00</h3>
                                                        <h5>in 12 Days</h5>
                                                    </div>
                                                    <div className="content-divider" />
                                                    <div className="projects-action text-center">
                                                        <Link
                                                            to="/view-project-detail"
                                                            className="projects-btn"
                                                        >
                                                            View Details
                                                        </Link>
                                                        <Link to="#" className="hired-detail">
                                                            Hired on 19 JUN 2021
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="projects-card flex-fill project-company">
                                        <div className="card-body">
                                            <div className="projects-details align-items-center">
                                                <div className="project-info">
                                                    <span>Dreamguystech</span>
                                                    <h2>WooCommerce Product Page Back Up Restoration</h2>
                                                    <div className="customer-info">
                                                        <ul className="list-details">
                                                            <li>
                                                                <div className="slot">
                                                                    <p>Price type</p>
                                                                    <h5>Fixed</h5>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="slot">
                                                                    <p>Location</p>
                                                                    <h5>
                                                                        <img
                                                                            src={Flags_en}
                                                                            height={13}
                                                                            alt="Lang"
                                                                        />{" "}
                                                                        UK
                                                                    </h5>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="slot">
                                                                    <p>Expiry</p>
                                                                    <h5>4 Days Left</h5>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="project-hire-info">
                                                    <div className="content-divider" />
                                                    <div className="projects-amount">
                                                        <h3>$500.00</h3>
                                                        <h5>in 12 Days</h5>
                                                    </div>
                                                    <div className="content-divider" />
                                                    <div className="projects-action text-center">
                                                        <Link
                                                            to="/view-project-detail"
                                                            className="projects-btn"
                                                        >
                                                            View Proposals
                                                        </Link>
                                                        <Link
                                                            to="/view-project-detail"
                                                            className="projects-btn"
                                                        >
                                                            Edit Jobs
                                                        </Link>
                                                        <Link to="#" className="hired-detail">
                                                            <span>5</span> Proposals
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="projects-card flex-fill project-company">
                                        <div className="card-body">
                                            <div className="projects-details align-items-center">
                                                <div className="project-info">
                                                    <span>Dreamguystech</span>
                                                    <h2>
                                                        Laravel Backend Developer to finish ongoing project
                                                    </h2>
                                                    <div className="customer-info">
                                                        <ul className="list-details">
                                                            <li>
                                                                <div className="slot">
                                                                    <p>Price type</p>
                                                                    <h5>Fixed</h5>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="slot">
                                                                    <p>Location</p>
                                                                    <h5>
                                                                        <img
                                                                            src={Flags_en}
                                                                            height={13}
                                                                            alt="Lang"
                                                                        />{" "}
                                                                        UK
                                                                    </h5>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="slot">
                                                                    <p>Expiry</p>
                                                                    <h5>4 Days Left</h5>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="project-hire-info">
                                                    <div className="content-divider" />
                                                    <div className="projects-amount">
                                                        <h3>$500.00</h3>
                                                        <h5>in 12 Days</h5>
                                                    </div>
                                                    <div className="content-divider" />
                                                    <div className="projects-action text-center">
                                                        <Link
                                                            to="/view-project-detail"
                                                            className="projects-btn"
                                                        >
                                                            View Details
                                                        </Link>
                                                        <Link to="#" className="hired-detail">
                                                            Hired on 19 JUN 2021
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="projects-card flex-fill project-company">
                                        <div className="card-body">
                                            <div className="projects-details align-items-center">
                                                <div className="project-info">
                                                    <span>Dreamguystech</span>
                                                    <h2>Website Designer Required For Directory Theme</h2>
                                                    <div className="customer-info">
                                                        <ul className="list-details">
                                                            <li>
                                                                <div className="slot">
                                                                    <p>Price type</p>
                                                                    <h5>Fixed</h5>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="slot">
                                                                    <p>Location</p>
                                                                    <h5>
                                                                        <img
                                                                            src={Flags_en}
                                                                            height={13}
                                                                            alt="Lang"
                                                                        />{" "}
                                                                        UK
                                                                    </h5>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="slot">
                                                                    <p>Expiry</p>
                                                                    <h5>4 Days Left</h5>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="project-hire-info">
                                                    <div className="content-divider" />
                                                    <div className="projects-amount">
                                                        <h3>$500.00</h3>
                                                        <h5>in 12 Days</h5>
                                                    </div>
                                                    <div className="content-divider" />
                                                    <div className="projects-action text-center">
                                                        <Link
                                                            to="/view-project-detail"
                                                            className="projects-btn"
                                                        >
                                                            View Proposals
                                                        </Link>
                                                        <Link
                                                            to="/view-project-detail"
                                                            className="projects-btn"
                                                        >
                                                            Edit Jobs
                                                        </Link>
                                                        <Link to="#" className="hired-detail">
                                                            <span>5</span> Proposals
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="projects-card flex-fill project-company">
                                        <div className="card-body">
                                            <div className="projects-details align-items-center">
                                                <div className="project-info">
                                                    <span>Dreamguystech</span>
                                                    <h2>
                                                        Laravel Backend Developer to finish ongoing project
                                                    </h2>
                                                    <div className="customer-info">
                                                        <ul className="list-details">
                                                            <li>
                                                                <div className="slot">
                                                                    <p>Price type</p>
                                                                    <h5>Fixed</h5>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="slot">
                                                                    <p>Location</p>
                                                                    <h5>
                                                                        <img
                                                                            src={Flags_en}
                                                                            height={13}
                                                                            alt="Lang"
                                                                        />{" "}
                                                                        UK
                                                                    </h5>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="slot">
                                                                    <p>Expiry</p>
                                                                    <h5>4 Days Left</h5>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="project-hire-info">
                                                    <div className="content-divider" />
                                                    <div className="projects-amount">
                                                        <h3>$500.00</h3>
                                                        <h5>in 12 Days</h5>
                                                    </div>
                                                    <div className="content-divider" />
                                                    <div className="projects-action text-center">
                                                        <Link
                                                            to="/view-project-detail"
                                                            className="projects-btn"
                                                        >
                                                            View Details
                                                        </Link>
                                                        <Link to="#" className="hired-detail">
                                                            Hired on 19 JUN 2021
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Pagination */}
                                    <div className="row">
                                        <div className="col-md-12">
                                            <ul className="paginations list-pagination">
                                                <li>
                                                    <Link to="#">
                                                        <i className="fas fa-angle-left" /> Previous
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#">1</Link>
                                                </li>
                                                <li>
                                                    <Link to="#" className="active">
                                                        2
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#">3</Link>
                                                </li>
                                                <li>
                                                    <Link to="#">4</Link>
                                                </li>
                                                <li>
                                                    <Link to="#">
                                                        Next <i className="fas fa-angle-right" />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* /Pagination */}
                                </div>
                                {/* /Projects Tab Content */}
                            </div>
                        </div>
                        {/* profile Sidebar */}
                        <div className="col-lg-4 col-md-12 sidebar-right theiaStickySidebar company-profile">
                        <StickyBox offsetTop={20} offsetBottom={20}>
                            <ProfileSidebar/>
                        </StickyBox>
                        </div>
                        {/* /Profile Sidebar */}
                    </div>
                </div>
            </div>
            {/* /Page Content */}
        </>


    )

}
export default CompanyProject;