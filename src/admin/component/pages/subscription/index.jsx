import React from 'react';
import { Link } from "react-router-dom";
import { Table } from "antd";
import Sidebar from '../../../commoncomponent/sidebar'
import { itemRender, onShowSizeChange } from "../../../paginationfunction"
import Pageheader from './pageheader'
import Addplan from './addplan'
import "../../../antdstyle.css"
import { logo_small } from '../imagepath'

const Subscription = () => {

    const data = [
        {
            name: "Mark",
            planname: "Professional",
            plantype: "Monthly",
            paymentmethod: "Credit Card",
            createdate: "25-03-2022",
            enddate: "25-03-2022",
            status: "Active",
        },
        {
            name: "Steawart",
            planname: "Enterprise",
            plantype: "Yearly",
            paymentmethod: "Paypal",
            createdate: "28-02-2022",
            enddate: "28-02-2022",
            status: "Active",
        },
        {
            name: "Hendry",
            planname: "Basic",
            plantype: "Monthly",
            paymentmethod: "Paypal",
            createdate: "28-02-2022",
            enddate: "28-02-2022",
            status: "inactive",
        },

    ];
    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            render: (text, record) => (
                <>{text}</>
            ),
            sorter: (a, b) => a.name.length - b.name.length,
        },
        {
            title: "Plan Name",
            dataIndex: "planname",
            render: (text, record) => (
                <>{text}</>
            ),
            sorter: (a, b) => a.planname.length - b.planname.length,
        },
        {
            title: "Plan Type",
            dataIndex: "plantype",
            render: (text, record) => (
                <>{text}</>
            ),
            sorter: (a, b) => a.plantype.length - b.plantype.length,
        },
        {
            title: "Payment Method",
            dataIndex: "paymentmethod",
            render: (text, record) => (
                <>
                    <h2 className="table-avatar">
                        <Link to="#">{text}</Link>
                    </h2>
                </>
            ),
            sorter: (a, b) => a.paymentmethod.length - b.paymentmethod.length,
        },
        {
            title: "Create Date",
            dataIndex: "createdate",
            render: (text, record) => (
                <>{text}</>
            ),

            sorter: (a, b) => a.createdate.length - b.createdate.length,
        },
        {
            title: "End Date",
            dataIndex: "enddate",
            render: (text, record) => (
                <>{text}</>
            ),
            sorter: (a, b) => a.enddate.length - b.enddate.length,
        },

        {
            title: "Status",
            dataIndex: "status",
            render: (text, record) => (
                <>
                    <Link to="#" className={` ${record.status === "Active" ? 'btn active-btn' : record.status === "inactive" ? 'btn inactive-btn' : ""}`} >{record.status}</Link>
                </>

            ),
            sorter: (a, b) => a.status.length - b.status.length,
        },
        {
            title: "Action",
            dataIndex: "action",
            render: (text, record) => (
                <div className='subscription-end'>
                    <Link to="#" className="btn btn-sm btn-secondary me-2" data-bs-toggle="modal" data-bs-target="#edit-category"><i className="far fa-edit"></i></Link>
                    <Link to="#" className="btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target="#delete_category"><i className="far fa-trash-alt"></i></Link>
                </div>

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
                        <div className="content container-fluid">
                            {/* Page Header */}
                            <Pageheader />
                            {/* /Page Header */}
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="subscribe-employe">
                                        <ul>
                                            <li className="active">
                                                <Link to="/admin/subscription">Employer </Link>
                                            </li>
                                            <li>
                                                <Link to="/admin/subscripe-freelancer">Freelancer</Link>
                                            </li>
                                        </ul>
                                    </div>
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
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Page Wrapper */}
                    <>
                        {/* Add Modal */}
                        <Addplan />
                        {/* Add Modal */}
                        {/* Add Modal */}
                        <div className="modal fade custom-modal" id="edit-category">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header flex-wrap">
                                        <div className="text-center w-100 mb-3">
                                            <img src={logo_small} alt="" />
                                        </div>
                                        <h4 className="modal-title">Edit User</h4>
                                        <button type="button" className="close" data-bs-dismiss="modal">
                                            <span>×</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <form>
                                            <div className="form-group">
                                                <label>Full Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    defaultValue=" George Wells"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Email</label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    defaultValue="georgewells@example.com"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Password</label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    defaultValue="*******"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Confirm Password</label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    defaultValue="********"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>User Type</label>
                                                <select className="form-control form-select">
                                                    <option>Select</option>
                                                    <option defaultValue="">Frontend Developer</option>
                                                    <option>Graphic Designer</option>
                                                </select>
                                            </div>
                                            <div className="mt-4">
                                                <button type="submit" className="btn btn-primary btn-block">
                                                    Submit
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Add Modal */}
                        {/* Delete Modal */}
                        <div className="modal custom-modal fade" id="delete_category" role="dialog">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-body">
                                        <div className="form-header">
                                            <h3>Delete</h3>
                                            <p>Are you sure want to delete?</p>
                                        </div>
                                        <div className="modal-btn delete-action">
                                            <div className="row">
                                                <div className="col-6">
                                                    <Link
                                                        to="#"
                                                        className="btn btn-primary continue-btn"
                                                    >
                                                        Delete
                                                    </Link>
                                                </div>
                                                <div className="col-6">
                                                    <Link
                                                        to="#"
                                                        data-bs-dismiss="modal"
                                                        className="btn btn-primary cancel-btn"
                                                    >
                                                        Cancel
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Delete Modal */}
                    </>
                </>
            </div>
        </>
    )
}


export default Subscription; 