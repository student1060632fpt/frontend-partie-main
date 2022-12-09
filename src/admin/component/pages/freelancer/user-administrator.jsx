import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Table } from "antd";
import FeatherIcon from 'feather-icons-react';
import "react-datepicker/dist/react-datepicker.css";
import Sidebar from '../../../commoncomponent/sidebar'
import { itemRender, onShowSizeChange } from "../../../paginationfunction"
import "../../../antdstyle.css"
import AddFreelancer from "./addfreelancer"

import { icon_01, avatar_10, avatar_14, avatar_15, avatar_16, avatar_13, icon_02, icon_03, icon_04, export_icon, } from '../imagepath'

const UserAdministrator = () => {

    const [inputfilter, setInputfilter] = useState(false);
    const togglefilter = (value) => {
        setInputfilter(value)
    }

    const data = [
        {
            id: 1,
            freelancer: <div>
                <h5>
                    <Link to="/admin/profile">Janet Paden</Link>
                </h5>
                <p> georgewells@example.com</p>
            </div>,
            expertise: "Frontend Developer",
            verified: <div className='verify-mail'><FeatherIcon icon="check-circle" className="feather me-1 text-success" />Email </div>,
            accountbalance: "$7,763.05",
            joineddate: "21 April 2022",
            lastlogin: "10 May 2022",
            status: "Active",
            image: avatar_14,
        },
        {
            id: 2,
            freelancer: <div>
                <h5>
                    <Link to="/admin/profile">Floyd Lewis</Link>
                </h5>
                <p> floydlewis@example.com</p>
            </div>,
            expertise: "Graphic Designer",
            verified: <div className='verify-mail'><FeatherIcon icon="check-circle" className="me-1 email-check" />Email </div>,
            accountbalance: "$6,763.05",
            joineddate: "11 Jun 2022",
            lastlogin: "25 Sep 2021",
            status: "Active",
            image: avatar_15,
        },
        {
            id: 3,
            freelancer: <div>
                <h5>
                    <Link to="/admin/profile">Andrew Glover</Link>
                </h5>
                <p>Andrewglover@example.com</p>
            </div>,
            expertise: "PHP Developer",
            verified: <div className='verify-mail'><FeatherIcon icon="check-circle" className="feather me-1 text-success" />Email </div>,
            accountbalance: "$2,763.05",
            joineddate: "01 April 2022",
            lastlogin: "28 Dec 2022",
            status: "Active",
            image: avatar_10,
        },
        {
            id: 4,
            freelancer: <div>
                <h5>
                    <Link to="/admin/profile">Janet Paden</Link>
                </h5>
                <p>georgewells@example.com</p>
            </div>,
            expertise: "Frontend Developer",
            verified: <div className='verify-mail'><FeatherIcon icon="check-circle" className="feather me-1 text-success" />Email </div>,
            accountbalance: "$7,763.05",
            joineddate: "21 April 2022",
            lastlogin: "10 May 2022",
            status: "Active",
            image: avatar_14,
        },
        {
            id: 5,
            freelancer: <div>
                <h5>
                    <Link to="/admin/profile">Floyd Lewis</Link>
                </h5>
                <p>floydlewis@example.com</p>
            </div>,
            expertise: "Graphic Designer",
            verified: <div className='verify-mail'><FeatherIcon icon="check-circle" className="me-1 email-check" />Email </div>,
            accountbalance: "$6,763.05",
            joineddate: "11 Jun 2022",
            lastlogin: "25 Sep 2021",
            status: "Active",
            image: avatar_15,
        },
        {
            id: 6,
            freelancer: <div>
                <h5>
                    <Link to="/admin/profile">Andrew Glover</Link>
                </h5>
                <p>Andrewglover@example.com</p>
            </div>,
            expertise: "PHP Developer",
            verified: <div className='verify-mail'><FeatherIcon icon="check-circle" className="feather me-1 text-success" />Email </div>,
            accountbalance: "$2,763.05",
            joineddate: "01 April 2022",
            lastlogin: "28 Dec 2022",
            status: "Active",
            image: avatar_16,
        },



    ];
    const columns = [
        {
            title: "Freelancer",
            dataIndex: "freelancer",
            render: (text, record) => (
                <>
                    <div className="table-avatar user-profile">
                        <Link to="/admin/profile"><img className="avatar-img rounded-circle" alt="User Image" src={record.image} /></Link>
                        {text}

                    </div>

                </>
            ),
            sorter: (a, b) => a.freelancer.length - b.freelancer.length,
        },
        {
            title: "Expertise",
            dataIndex: "expertise",
            render: (text, record) => (
                <>{text}</>
            ),
            sorter: (a, b) => a.expertise.length - b.expertise.length,
        },
        {
            title: "Verified",
            dataIndex: "verified",
            render: (text, record) => (

                <>{text}</>
            ),
            sorter: (a, b) => a.verified.length - b.verified.length,
        },
        {
            title: "Account Balance",
            dataIndex: "accountbalance",
            render: (text, record) => (
                <>{text}</>
            ),
            sorter: (a, b) => a.accountbalance.length - b.accountbalance.length,
        },

        {
            title: "Joined Date",
            dataIndex: "joineddate",
            render: (text, record) => (
                <>{text}</>
            ),
            sorter: (a, b) => a.joineddate.length - b.joineddate.length,
        },

        {
            title: "Last Login",
            dataIndex: "lastlogin",
            render: (text, record) => (
                <>{text}</>
            ),
            sorter: (a, b) => a.lastlogin.length - b.lastlogin.length,
        },
        {
            title: "Status",
            dataIndex: "status",
            render: (text, record) => (
                <div className='three-dots'>

                    <>
                        <Link
                            to="#"
                            className="dropdown-toggle nav-link  user-active-btn"
                            data-bs-toggle="dropdown"
                        >
                            {text}
                        </Link>
                        <div className="dropdown-menu user-menu-list">
                            <Link className="dropdown-item" to="#">
                                <img className="me-2 " src={icon_01} alt="" /> View
                                Details
                            </Link>
                            <Link className="dropdown-item" to="#">
                                <FeatherIcon icon="edit" className="me-2" /> Edit
                            </Link>
                            <Link className="dropdown-item mb-0" to="#">
                                <FeatherIcon icon="trash-2" className="me-2 text-danger" /> Delete
                            </Link>
                        </div>
                    </>

                </div>
            ),
            sorter: (a, b) => a.status.length - b.status.length,
        },
        {
            title: "",
            dataIndex: "",
            render: (text, record) => (
                <>
                    <div className='three-dots'>
                        <Link
                            to="#"
                            className="dropdown-toggle nav-link"
                            data-bs-toggle="dropdown"
                        >
                            <i className="fas fa-ellipsis-v" />
                        </Link>
                        <div className="dropdown-menu user-menu-list">
                            <Link
                                className="dropdown-item"
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#transaction-category"
                            >
                                <img
                                    className="me-2 "
                                    src={icon_01}
                                    alt=""
                                />{" "}
                                View Details
                            </Link>
                            <Link className="dropdown-item" to="#">
                                <img
                                    className="me-2 "
                                    src={icon_02}
                                    alt=""
                                />{" "}
                                Transaction
                            </Link>
                            <Link className="dropdown-item" to="#">
                                <img
                                    className="me-2 "
                                    src={icon_03}
                                    alt=""
                                />{" "}
                                Reset Password
                            </Link>
                            <Link className="dropdown-item" to="#">
                                <img
                                    className="me-2 "
                                    src={icon_04}
                                    alt=""
                                />{" "}
                                Suspend user
                            </Link>
                            <Link className="dropdown-item" to="#">
                                <FeatherIcon icon="edit" className="me-2" /> Edit
                            </Link>
                            <Link className="dropdown-item mb-0" to="#">
                                <FeatherIcon icon="trash-2"
                                    className="me-2 text-danger"
                                />{" "}
                                Delete
                            </Link>
                        </div>
                    </div>

                </>
            ),

        },



    ];

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(
                `selectedRowKeys: ${selectedRowKeys}`,
                "selectedRows: ",
                selectedRows
            );
        },
        getCheckboxProps: record => ({
            disabled: record.name === "Disabled User", // Column configuration not to be checked
            name: record.name,
            className: "checkbox-red"
        })
    };

    return (
        <>
            <div className='main-wrapper'>
                <Sidebar />
                <>
                    {/* Page Wrapper */}
                    <div className="page-wrapper">
                        <div className="content report-box container-fluid">
                            {/* Page Header */}
                            <div className="page-header subscribe-head">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <h3 className="page-title">Freelancer</h3>
                                        <ul className="breadcrumb">
                                            <li className="breadcrumb-item">
                                                <Link to="/admin/index">Home</Link>
                                            </li>
                                            <li className="breadcrumb-item active">Freelancer</li>
                                        </ul>
                                    </div>
                                    <div className="col-auto">
                                        <Link
                                            className="btn  add-user"
                                            to="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#add-category"
                                        >
                                            <i className="fas fa-plus " /> Add Freelancer
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* /Page Header */}
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="subscribe-employe users-list">
                                        <ul>
                                            <li>
                                                <Link to="/admin/users">All Freelancer </Link>
                                            </li>
                                            <li>
                                                <Link to="/admin/user-active">Active Freelancer</Link>
                                            </li>
                                            <li>
                                                <Link to="/admin/user-inactive">Inactive Freelancer</Link>
                                            </li>
                                            <li>
                                                <Link to="/admin/user-suspended">Suspended</Link>
                                            </li>
                                            <li className="active">
                                                <Link to="/admin/user-administrator">Administrator</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* Active User Header */}
                                    <div className="page-header user-active">
                                        <div className="row align-items-center">
                                            <div className="col">
                                                <h3 className="page-title">All Freelancer</h3>
                                                <p>
                                                    Total <span>57</span> Freelancer account
                                                </p>
                                            </div>
                                            <div className="col-auto">
                                                <Link to="#" className="btn export-btn me-1">
                                                    <img src={export_icon} alt="" /> Export
                                                </Link>
                                                <Link
                                                    className="btn filter-btn"
                                                    to="#"
                                                    id="filter_search"
                                                >
                                                    <i className="fas fa-filter" onClick={() => togglefilter(!inputfilter)} />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Active User Header */}
                                    {/* Search Filter */}
                                    <div className="card filter-card" id="filter_inputs" style={{ display: inputfilter ? "block" : "none" }}>
                                        <div className="card-body pb-0">
                                            <form action="#" method="post">
                                                <div className="row filter-row">
                                                    <div className="col-sm-6 col-md-3">
                                                        <div className="form-group">
                                                            <label>Name</label>
                                                            <input className="form-control" type="text" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 col-md-3">
                                                        <div className="form-group">
                                                            <label>Email</label>
                                                            <input type="email" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 col-md-3">
                                                        <div className="form-group">
                                                            <label>Expertise</label>
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 col-md-3">
                                                        <div className="form-group">
                                                            <button
                                                                className="btn btn-primary btn-block"
                                                                type="submit"
                                                            >
                                                                Submit
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    {/* /Search Filter */}
                                    <div className="card ">
                                        <div className="table-responsive">
                                            <Table
                                                rowSelection={rowSelection}
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
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Page Wrapper */}
                    <AddFreelancer />
                </>
            </div>
        </>
    )
}


export default UserAdministrator; 