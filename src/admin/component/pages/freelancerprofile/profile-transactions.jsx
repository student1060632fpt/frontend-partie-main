import React from 'react'
import { Link } from "react-router-dom";
import Sidebar from '../../../commoncomponent/sidebar';
import { icon_12, icon_08, icon_10, icon_11, avatar_16, icon_03, icon_04, } from '../imagepath'
import { Table } from "antd";
import { itemRender, onShowSizeChange } from "../../../paginationfunction"
import "../../../antdstyle.css"
import FeatherIcon from 'feather-icons-react';
import TransactionDetails from './transaction-details'

function ProfileTransaction() {

    const data = [
        {
            id: 1,
            order: "#24586414",
            type: 'Received from Investment Account',
            email: 'georgewells@example.com',
            details: "Recived",
            reference: "151410331",
            date: 'Mar 13, 2022Completed',

            amount: "+ 6,335.006 USD",
            balance: "Balance : 6,335.006 USD",
            className: <i className='fas fa-exchange-alt exchange' />
        },
        {
            id: 2,
            order: "#44586414",
            type: 'Received from Investment Account',
            email: 'floydlewis@example.com',
            details: "Withdrawn",
            reference: "261410331",
            date: 'Mar 13, 2022Completed',

            amount: "- 5,165,000 USD",
            balance: "Balance : 1,335.006 USD",
            className: <i className="fas fa-undo-alt refresh" />
        },
        {
            id: 3,
            order: "#34586414",
            type: 'Received from Investment Account',
            email: 'Andrewglover@example.com',
            details: "Recived",
            reference: "261410331",
            date: 'Mar 13, 2022Completed',

            amount: "+ 6,335.006 USD",
            balance: "Balance : 6,335.006 USD",
            className: <i className='fas fa-exchange-alt exchange' />
        },
        {
            id: 4,
            order: "#24586414",
            type: 'Received from Investment Account',
            email: 'georgewells@example.com',
            details: "Withdrawn",
            reference: "261410331",
            date: 'Mar 13, 2022Completed',

            amount: "+ 6,335.006 USD",
            balance: "Balance : 6,335.006 USD",
            className: <i className="fas fa-undo-alt refresh" />
        },
        {
            id: 5,
            order: "#34586414",
            type: 'Received from Investment Account',
            email: 'floydlewis@example.com',
            details: "Recived",
            reference: "151410331",
            date: 'Mar 13, 2022Completed',

            amount: "- 5,165,000 USD",
            balance: "Balance : 1,335.006 USD",
            className: <i className='fas fa-exchange-alt exchange' />
        },
        {
            id: 6,
            order: "#34586414",
            type: 'Received from Investment Account',
            email: 'Andrewglover@example.com',
            details: "withdrawn",
            reference: "261410331",
            date: 'Mar 13, 2022Completed',

            amount: "+ 6,335.006 USD",
            balance: "Balance : 6,335.006 USD",
            className: <i className="fas fa-undo-alt refresh" />
        },
        {
            id: 7,
            order: "#34586414",
            type: 'Received from Investment Account',
            email: 'floydlewis@example.com',
            details: "Recived",
            reference: "341410331",
            date: 'Mar 13, 2022Completed',

            amount: "- 5,165,000 USD",
            balance: "Balance : 1,335.006 USD",
            className: <i className='fas fa-exchange-alt exchange' />

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
            title: "Type",
            dataIndex: "type",
            render: (text, record) => (
                <>
                    <div className="table-avatar user-profile">
                        <Link to="/admin/profile">{record.className}</Link>
                        <div>
                            <h5><Link to="/admin/profile">{text}</Link></h5>
                            <p className="receive-date">{record.date}</p>
                        </div>
                    </div>
                </>
            ),
            sorter: (a, b) => a.type.length - b.type.length,
        },

        {
            title: "Details",
            dataIndex: "details",
            render: (text, record) => (

                <>
                    <button className={` ${record.details === "Recived" ? "btn received-btn" : 'btn withdraw-btn text-danger'}`}>{text}</button>

                </>
            ),
            sorter: (a, b) => a.details.length - b.details.length,
        },
        {
            title: "Reference",
            dataIndex: "reference",
            render: (text, record) => (
                <>
                    <div className='content-user'>
                        <p>{text}</p>
                    </div>
                </>
            ),
            sorter: (a, b) => a.reference.length - b.reference.length,
        },

        {
            title: "Amount",
            dataIndex: "amount",
            render: (text, record) => (
                <>
                    <div className="table-avatar content-user">
                        <div>
                            <h5 className={` ${record.amount === '+ 6,335.006 USD' ? 'text-success' : 'text-danger'}`}>{text}</h5>
                            <p>{record.balance}</p>
                        </div>
                    </div>
                </>
            ),
            sorter: (a, b) => a.amount.length - b.amount.length,
        },
        {
            title: "",
            dataIndex: "",
            render: (text, record) => (
                <>
                    <div className='text-end complete-show'>
                        <Link to="#" ><i className="fas fa-arrow-right" data-bs-toggle="modal" data-bs-target="#transaction-category"></i></Link>
                    </div>
                </>
            ),
            sorter: (a, b) => a.amount.length - b.amount.length,
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
                                            <li className="active">
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
                                    <>
                                        {/* Active Profile Header */}
                                        <div className="page-header profile-information">
                                            <div className="row align-items-center">
                                                <div className="col-12">
                                                    <h3 className="page-title">Recent Transaction</h3>
                                                    <p>All the recent transaction made by user.</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* /Active Profile Header */}
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
                                    </>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /Page Wrapper */}
                <TransactionDetails />
            </div>
        </>

    )
}

export default ProfileTransaction;