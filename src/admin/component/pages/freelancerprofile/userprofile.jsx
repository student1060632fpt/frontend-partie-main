import React from 'react'
import { Link } from "react-router-dom";
import Sidebar from '../../../commoncomponent/sidebar';
import { icon_12, icon_08, icon_10, icon_11, avatar_16, icon_03, icon_04, } from '../imagepath'
import FeatherIcon from 'feather-icons-react';

function UserProfile() {
    return (
        <>
            <div className='main-wrapper'>
                <Sidebar />
                {/* Page Wrapper */}
                <div className="page-wrapper">
                    <div className="content report-box container-fluid">
                        {/* Page Header */}
                        <div className="page-header subscribe-head">
                            <div className="row align-items-center">
                                <div className="col">
                                    <h3 className="page-title">Freelancer Profile</h3>
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link to="/admin/index">Home</Link>
                                        </li>
                                        <li className="breadcrumb-item active">Freelancer Profile</li>
                                    </ul>
                                </div>
                                <div className="col-auto">
                                    <Link className="btn  back-user" to="/admin/users">
                                        <img src={icon_08} alt="" /> Back to list
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* /Page Header */}
                        {/* User Profile */}
                        <div className="profile-status">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="profile-user-box">
                                        <Link to="/admin/profile">
                                            <img
                                                className="avatar-img rounded-circle "
                                                src={avatar_16}
                                                alt="User Image"
                                            />
                                        </Link>
                                        <div className="profile-name-box">
                                            <h2>
                                                <Link to="/admin/profile">William Cooper</Link>
                                            </h2>
                                            <p>Date of Join: 22 May 2021 </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-2">
                                    <div className="additional-info">
                                        <p>Freelancer ID</p>
                                        <h5>UID00003</h5>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-2">
                                    <div className="additional-info">
                                        <p>Email </p>
                                        <h5 className="verify-mail">
                                            <FeatherIcon icon="check-circle" className="me-1 text-success" />{" "}
                                            Verified{" "}
                                        </h5>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-2">
                                    <div className="additional-info">
                                        <p>Account Status</p>
                                        <h5 className="text-danger">Active</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /User Profile */}
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="card profile-home">
                                    <div className="subscribe-employe users-list transaction-list">
                                        <ul>
                                            <li className="active">
                                                <Link to="/admin/user-profile">
                                                    <img
                                                        className="me-2"
                                                        src={icon_12}
                                                        alt=""
                                                    />
                                                    Personal{" "}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/admin/profile-transactions">
                                                    <img
                                                        className="me-2"
                                                        src={icon_10}
                                                        alt=""
                                                    />
                                                    Transactions{" "}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/admin/activities">
                                                    <img
                                                        className="me-2"
                                                        src={icon_11}
                                                        alt=""
                                                    />
                                                    Activities
                                                </Link>
                                            </li>
                                        </ul>
                                        <div className="profile-icon-group">
                                            <div className="d-flex">
                                                <Link to="#" className="reset-icon me-1">
                                                    <img src={icon_03} alt="" />
                                                </Link>
                                                <Link className="suspend-icon" to="#">
                                                    <img src={icon_04} alt="" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Active Profile Header */}
                                    <div className="page-header profile-information">
                                        <div className="row align-items-center">
                                            <div className="col-12">
                                                <h3 className="page-title">Personal Information</h3>
                                                <p>
                                                    {" "}
                                                    Basic info, like name and address etc that used on platform.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Active Profile Header */}
                                    {/* Basic Information */}
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="basic-info">
                                                <h4>BASIC INFORMATION</h4>
                                                <ul className="information-list">
                                                    <li>
                                                        Username <span>William</span>
                                                    </li>
                                                    <li>
                                                        Email Address <span>william@example.com</span>
                                                    </li>
                                                    <li>
                                                        Full Name <span>William Cooper</span>
                                                    </li>
                                                    <li>
                                                        Display Name <span>Ishtiyak</span>
                                                    </li>
                                                    <li>
                                                        Mobile Number <span>707 229 8991</span>
                                                    </li>
                                                    <li>
                                                        Date of Birth <span>Jan 08, 1997</span>
                                                    </li>
                                                    <li>
                                                        Gender <span>Not updated yet</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="basic-info">
                                                <h4>RESIDENTIAL ADDRESS</h4>
                                                <ul className="information-list">
                                                    <li>
                                                        Address Line <span>Not updated yet</span>
                                                    </li>
                                                    <li>
                                                        City<span>Not updated yet</span>
                                                    </li>
                                                    <li>
                                                        State / Province<span>Not updated yet</span>
                                                    </li>
                                                    <li>
                                                        Zip / Postal Code<span>Not updated yet</span>
                                                    </li>
                                                    <li>
                                                        Country <span>Us</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="basic-info additional-space">
                                                <h4>ADDITIONAL INFORMATION</h4>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-3 col-md-6">
                                                    <div className="additional-info">
                                                        <p>Join Date </p>
                                                        <h5>May 20, 2021</h5>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6">
                                                    <div className="additional-info">
                                                        <p>Reg Method</p>
                                                        <h5>By Email</h5>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6">
                                                    <div className="additional-info">
                                                        <p>Email Verified At</p>
                                                        <h5>May 20, 2021 04:53 AM</h5>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6">
                                                    <div className="additional-info mb-0">
                                                        <p>Save Activity Logs</p>
                                                        <h5>Enabled</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Basic Information */}
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

export default UserProfile;