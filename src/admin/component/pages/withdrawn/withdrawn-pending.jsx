import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Table } from "antd";
import FeatherIcon from 'feather-icons-react';
import "react-datepicker/dist/react-datepicker.css";
import Sidebar from '../../../commoncomponent/sidebar'
import { itemRender, onShowSizeChange } from "../../../paginationfunction"
import "../../../antdstyle.css"
import ViewDetails from '../../../commoncomponent/viewdetails'

import { icon_01, icon_05, icon_06, icon_07, avatar_10, avatar_14, avatar_15, avatar_16, avatar_13, icon_02, icon_03, icon_04, export_icon } from '../../pages/imagepath'

const WithDrawnPending = () => {

    const [inputfilter, setInputfilter] = useState(false);
    const togglefilter = (value) => {
        setInputfilter(value)
    }

    const data = [
        {
            id: 1,
            order: "#24586414",
            user: 'Janet Paden',
            email: 'georgewells@example.com',
            details: "Withdraw Funds",
            date: 'May 25, 2022',
            tnxby: "PayPal",
            amount: "- 5,165,000 USD",
            balance: "Balance : 6,335.006 USD",
            status: "Pending",
            image: avatar_14,
        },
        {
            id: 2,
            order: "#44586414",
            user: 'Floyd Lewis',
            email: 'floydlewis@example.com',
            details: "Withdraw Funds",
            date: 'Jun 15, 2022',
            tnxby: "Bank Transfer",
            amount: "- 5,165,000 USD",
            balance: "Balance : 1,335.006 USD",
            status: "Pending",
            image: avatar_15,
        },
        {
            id: 3,
            order: "#34586414",
            user: 'Andrew Glover',
            email: 'Andrewglover@example.com',

            details: "Withdraw Funds",
            date: 'Apr 22, 2021',
            tnxby: "Bank Transfer",
            amount: "- 2,335.006 USD",
            balance: "Balance : 6,335.006 USD",
            status: "Pending",
            image: avatar_10,
        },
        {
            id: 4,
            order: "#24586414",
            user: 'Janet Paden',
            email: 'georgewells@example.com',
            details: "Withdraw Funds",
            date: 'May 25, 2022',
            tnxby: "PayPal",
            amount: "- 5,165,000 USD",
            balance: "Balance : 6,335.006 USD",
            status: "Pending",
            image: avatar_14,
        },
        {
            id: 5,
            order: "#34586414",
            user: 'Floyd Lewis',
            email: 'floydlewis@example.com',

            details: "Withdraw Funds",
            date: 'Jun 15, 2022',
            tnxby: "Bank Transfer",
            amount: "- 5,165,000 USD",
            balance: "Balance : 1,335.006 USD",
            status: "Pending",
            image: avatar_15,
        },
        {
            id: 6,
            order: "#34586414",
            user: 'Andrew Glover',
            email: 'Andrewglover@example.com',

            details: "Withdraw Funds",
            date: 'Apr 22, 2021',
            tnxby: "Bank Transfer",
            amount: "- 2,335.006 USD",
            balance: "Balance : 6,335.006 USD",
            status: "Pending",
            image: avatar_16,
        },



    ];
    const columns = [
        {
            title: "Order",
            dataIndex: "order",
            render: (text, record) => (
                <>{text}</>
            ),
            sorter: (a, b) => a.order.length - b.order.length,
        },
        {
            title: "User",
            dataIndex: "user",
            render: (text, record) => (
                <>
                    <div className="table-avatar user-profile">
                        <Link to="/admin/profile"><img className="avatar-img rounded-circle" alt="User Image" src={record.image} /></Link>

                        <div>
                            <h5>
                                <Link to="#">{text}</Link>
                            </h5>
                            <p> {record.email}</p>
                        </div>
                    </div>

                </>
            ),
            sorter: (a, b) => a.user.length - b.user.length,
        },
        {
            title: "Details",
            dataIndex: "details",
            render: (text, record) => (

                <>
                    <div className="table-avatar content-user">
                        <div>
                            <h5>{text}</h5>
                            <p>{record.date}</p>
                        </div>
                    </div>
                </>
            ),
            sorter: (a, b) => a.details.length - b.details.length,
        },
        {
            title: "Tnx By",
            dataIndex: "tnxby",
            render: (text, record) => (
                <>
                    <div className='content-user'>
                        <p>{text}</p>
                    </div>
                </>
            ),
            sorter: (a, b) => a.tnxby.length - b.tnxby.length,
        },

        {
            title: "Amount",
            dataIndex: "amount",
            render: (text, record) => (
                <>
                    <div className="table-avatar content-user">
                        <div>
                            <h5 className='text-danger'>{text}</h5>
                            <p>{record.balance}</p>
                        </div>
                    </div>
                </>
            ),
            sorter: (a, b) => a.amount.length - b.amount.length,
        },

        {
            title: "Status",
            dataIndex: "status",
            render: (text, record) => (
                <>
                    <Link to="#" className='pending'>
                        {text}
                    </Link></>
            ),
            sorter: (a, b) => a.status.length - b.status.length,
        },
        {
            title: "",
            dataIndex: "",
            render: (text, record) => (
                <>
                    <div className='three-dots'>
                        <Link to="#" className="dropdown-toggle nav-link" data-bs-toggle="dropdown">
                            <i className="fas fa-ellipsis-v" />
                        </Link>
                        <div className="dropdown-menu user-menu-list">
                            <Link className="dropdown-item" to="#" data-bs-toggle="modal" data-bs-target="#transaction-category"
                            >
                                <img className="me-2 " src={icon_01} alt="" />{" "}
                                View Details
                            </Link>
                            <Link className="dropdown-item" to="/admin/user-profile">
                                <img className="me-2 " src={icon_05} alt="" />{" "}
                                User Profile
                            </Link>
                            <Link className="dropdown-item" to="#">
                                <img className="me-2 " src={icon_06} alt="" />{" "}
                                Approve
                            </Link>
                            <Link className="dropdown-item mb-0" to="#">
                                <img
                                    className="me-2 "
                                    src={icon_07}
                                    alt=""
                                />{" "}
                                Reject{" "}
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
                            <div className="page-header subscribe-head border-bottom-0">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <h3 className="page-title">Withdrawals</h3>
                                        <ul className="breadcrumb">
                                            <li className="breadcrumb-item">
                                                <Link to="/admin/index">Home</Link>
                                            </li>
                                            <li className="breadcrumb-item active">Withdrawals</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* /Page Header */}
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="subscribe-employe users-list">
                                        <ul>
                                            <li>
                                                <Link to="/admin/withdrawn">History </Link>
                                            </li>
                                            <li className="active">
                                                <Link to="/admin/withdrawn-pending">Pending</Link>
                                            </li>
                                            <li>
                                                <Link to="/admin/withdrawn-cancelled">Cancelled</Link>
                                            </li>
                                            <li>
                                                <Link to="/admin/withdrawn-completed">Completed</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* Active User Header */}
                                    <div className="page-header user-active">
                                        <div className="row align-items-center">
                                            <div className="col">
                                                <h3 className="page-title">Pending</h3>
                                                <p>
                                                    Total <span>57</span> Transaction
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
                                                            <button className="btn btn-primary btn-block" type="submit">
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
                    <ViewDetails />
                </>
            </div>
        </>
    )
}


export default WithDrawnPending; 