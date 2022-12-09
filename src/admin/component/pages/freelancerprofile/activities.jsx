import React from 'react'
import { Link } from "react-router-dom";
import Sidebar from '../../../commoncomponent/sidebar';
import { icon_12, icon_08, icon_10, icon_11, avatar_16, icon_03, icon_04, } from '../imagepath'
import { Table } from "antd";
import { itemRender, onShowSizeChange } from "../../../paginationfunction"
import "../../../antdstyle.css"
import FeatherIcon from 'feather-icons-react';

function Activities() {

    const data = [
        {
            id: 1,
            name: "User Login",
            eventinfo:"Login to “System/Administrator”",
            detectionip: "116.165.159.125",
            detectiontime:"Apr 22, 2022 05:24 AM"
        },
       
        {
            id: 2,
            name: "Task Updation",
            eventinfo:"Change task “Inprrogress” to “Completed”",
            detectionip: "104.165.159.125",
            detectiontime:"May 26, 2022 05:14 AM"
        },
        {
            id: 3,
            name: "User Logoff",
            eventinfo:"Logoff “System/Administrator”",
            detectionip: "123.165.159.125",
            detectiontime:"Jun 12, 2022 03:54 AM"
        },
        {
            id: 4,
            name: "Task Updation",
            eventinfo:"Change task “Inprrogress” to “Completed”",
            detectionip: "104.165.159.125",
            detectiontime:"Dec 16, 2022 02:24 AM"
        },
        {
            id: 5,
            name: "User Logoff",
            eventinfo:"Logoff “System/Administrator”",
            detectionip: "123.165.159.125",
            detectiontime:"Jun 12, 2022 03:54 AM"
        },
       


    ];
    const columns = [

        {
            title: "Name",
            dataIndex: "name",
            render: (text, record) => (
                <>{text}</>
            ),
            sorter: (a, b) => a.id.length - b.id.length,
        },
        {
            title: "Event Info",
            dataIndex: "eventinfo",
            render: (text, record) => (
                <>{text}</>
            ),
            sorter: (a, b) => a.eventinfo.length - b.eventinfo.length,
        },
        {
            title: "Detection IP",
            dataIndex: "detectionip",
            render: (text, record) => (
                <>{text}</>
            ),
            sorter: (a, b) => a.detectionip.length - b.detectionip.length,
        },
        {
            title: "Detection Time",
            dataIndex: "detectiontime",
            render: (text, record) => (
                <>{text}</>
            ),
            sorter: (a, b) => a.detectiontime.length - b.detectiontime.length,
        },
       
    ];

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
                                        <li>
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
                                        <li  className="active">
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
                                <>
                                    {/* Active Profile Header */}
                                    <div className="page-header profile-information">
                                        <div className="row align-items-center">
                                            <div className="col-12">
                                                <h3 className="page-title">Login Activities </h3>
                                                <p> The activities of login for the user.</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Active Profile Header */}
                                    <div className="card ">
                                        <div className="table-responsive">
                                        <Table
                                                pagination={{
                                                    total: data.length,
                                                    showTotal: (total, range) => `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                                                    showSizeChanger: true, onShowSizeChange: onShowSizeChange, itemRender: itemRender
                                                }}
                                                className="table"
                                                style={{ overflowX: "auto" }}
                                                columns={columns}
                                                dataSource={data}
                                                rowKey={(record) => record.id}
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <ul className="paginations list-pagination text-end mb-4">
                                                <li>
                                                    <Link to="#">
                                                        <i className="fas fa-angle-left" /> Previous
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#" className="active">
                                                        1
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#">2</Link>
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
                                </>

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

export default Activities;