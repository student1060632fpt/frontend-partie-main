import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Sidebar from '../../../commoncomponent/sidebar'
import { avatar_07 } from '../imagepath'

const Profile = () => {



    return (
        <>
            <div className='main-wrapper'>
                <Sidebar />
                <>
                    {/* Page Wrapper */}
                    <div className="page-wrapper">
                        <div className="content container-fluid">
                            {/* Page Header */}
                            <div className="page-header">
                                <div className="row">
                                    <div className="col">
                                        <h3 className="page-title">Profile</h3>
                                        <ul className="breadcrumb">
                                            <li className="breadcrumb-item">
                                                <Link to="/index/admin">Dashboard</Link>
                                            </li>
                                            <li className="breadcrumb-item active">Profile</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* /Page Header */}
                            <div className="profile-cover">
                                <div className="profile-cover-wrap">
                                    <img
                                        className="profile-cover-img"
                                        src={avatar_07}
                                        alt="Profile Cover"
                                    />
                                    {/* Custom File Cover */}
                                    <div className="cover-content">
                                        <div className="custom-file-btn">
                                            <input
                                                type="file"
                                                className="custom-file-btn-input"
                                                id="cover_upload"
                                            />
                                            <label
                                                className="custom-file-btn-label btn btn-sm btn-white"
                                                htmlFor="cover_upload"
                                            >
                                                <i className="fas fa-camera" />
                                                <span className="d-none d-sm-inline-block ms-1">
                                                    Update Cover
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                    {/* /Custom File Cover */}
                                </div>
                            </div>
                            <div className="text-center mb-5">
                                <label
                                    className="avatar avatar-xxl profile-cover-avatar"
                                    htmlFor="avatar_upload"
                                >
                                    <img
                                        className="avatar-img"
                                        src={avatar_07}
                                        alt="Profile Image"
                                    />
                                    <input type="file" id="avatar_upload" />
                                    <span className="avatar-edit">
                                        <i
                                            data-feather="edit-2"
                                            className="avatar-uploader-icon shadow-soft"
                                        />
                                    </span>
                                </label>
                                <h2>
                                    Damon Cohn{" "}
                                    <i
                                        className="fas fa-certificate text-primary small"
                                        data-bs-toggle="tooltip"
                                        data-placement="top"
                                        title=""
                                        data-original-title="Verified"
                                    />
                                </h2>
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <i className="far fa-building" /> <span>Versatile Workforce</span>
                                    </li>
                                    <li className="list-inline-item">
                                        <i className="fas fa-map-marker-alt" /> 359 Plains, PA 18705
                                    </li>
                                    <li className="list-inline-item">
                                        <i className="far fa-calendar-alt" /> <span>Joined March 2022</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="card">
                                        <div className="card-body pt-0">
                                            <div className="card-header mb-4">
                                                <h5 className="card-title">Complete your profile</h5>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="progress progress-md flex-grow-1">
                                                    <div
                                                        className="progress-bar bg-primary"
                                                        role="progressbar"
                                                        style={{ width: "60%" }}
                                                        aria-valuenow={30}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                    />
                                                </div>
                                                <span className="ms-4">60%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-body pt-0">
                                            <div className="card-header mb-4">
                                                <h5 className="card-title d-flex justify-content-between">
                                                    <span>Profile</span>
                                                    <Link className="btn btn-sm btn-white" to="/admin/settings">
                                                        Edit
                                                    </Link>
                                                </h5>
                                            </div>
                                            <ul className="list-unstyled mb-0">
                                                <li className="py-0">
                                                    <small className="text-dark">About</small>
                                                </li>
                                                <li>Damon Cohn</li>
                                                <li>Versatile Workforce</li>
                                                <li className="pt-2 pb-0">
                                                    <small className="text-dark">Contacts</small>
                                                </li>
                                                <li>damoncohn@example.com</li>
                                                <li>570-613-6563</li>
                                                <li className="pt-2 pb-0">
                                                    <small className="text-dark">Address</small>
                                                </li>
                                                <li>
                                                    359 Coal Road
                                                    <br />
                                                    Plains, PA 18705
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 d-flex">
                                    <div className="card w-100">
                                        <div className="card-body pt-0">
                                            <div className="card-header mb-4">
                                                <h5 className="card-title">Activity</h5>
                                            </div>
                                            <ul className="activity-feed">
                                                <li className="feed-item">
                                                    <div className="feed-date">Nov 16</div>
                                                    <span className="feed-text">
                                                        <Link to="/admin/profile">Brian Johnson</Link> has paid the
                                                        invoice <Link to="/admin/view-invoice">"#CD41544"</Link>
                                                    </span>
                                                </li>
                                                <li className="feed-item">
                                                    <div className="feed-date">Nov 7</div>
                                                    <span className="feed-text">
                                                        <Link to="/admin/profile">Marie Canales</Link> has accepted your
                                                        estimate <Link to="/admin/view-estimate">#GTR14544</Link>
                                                    </span>
                                                </li>
                                                <li className="feed-item">
                                                    <div className="feed-date">Jan 05</div>
                                                    <span className="feed-text">
                                                        <Link to="/admin/profile">Brian Johnson</Link> has paid the
                                                        invoice <Link to="/admin/view-invoice">"#CD42565"</Link>
                                                    </span>
                                                </li>
                                                <li className="feed-item">
                                                    <div className="feed-date">Feb 10</div>
                                                    <span className="feed-text">
                                                        <Link to="/admin/profile">Marie Canales</Link> has accepted your
                                                        estimate <Link to="/admin/view-estimate">#GTR422385</Link>
                                                    </span>
                                                </li>
                                                <li className="feed-item">
                                                    <div className="feed-date">Mar 25</div>
                                                    <span className="feed-text">
                                                        <Link to="/admin/profile">Brian Johnson</Link> has paid the
                                                        invoice <Link to="/admin/view-invoice">"#CD6988"</Link>
                                                    </span>
                                                </li>
                                                <li className="feed-item">
                                                    <div className="feed-date">Mar 5</div>
                                                    <span className="feed-text">
                                                        <Link to="/admin/profile">Marie Canales</Link> has accepted your
                                                        estimate <Link to="/admin/view-estimate">#GTR569231</Link>
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Page Wrapper */}
                </>
            </div>

        </>
    )
}


export default Profile; 