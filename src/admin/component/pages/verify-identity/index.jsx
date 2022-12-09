import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Header from '../../../commoncomponent/header'
import Sidebar from '../../../commoncomponent/sidebar'
import Chart from 'react-apexcharts'
import { avatar_02, avatar_03, avatar_04, avatar_14, avatar_01, avatar_15, avatar_11, avatar_16, avatar_05, avatar_10, avatar_06, } from '../../pages/imagepath'
import { Table } from "antd";
import { itemRender, onShowSizeChange } from "../../../paginationfunction"
import "../../../antdstyle.css"

const VerifyIdentity = () => {

    const data = [
        {
            id: 1,
            name: "Emily Smith",
            contactnumber: "601-316-9060",
            passport: "518-43-5504",
            address: "148 Tanglewood Road, Fulton",
            image: avatar_14,
        },
        {
            id: 2,
            name: "Angeline S Cutshaw",
            contactnumber: "601-283-5402",
            passport: "158-07-8510",
            address: "North Carolina, USAi",
            image: avatar_01,
        },
        {
            id: 3,
            name: "Robert J Sullivan",
            contactnumber: "601-316-5657",
            passport: "221-04-8830",
            address: "Kentucky, USA",
            image: avatar_15,
        },
        {
            id: 4,
            name: "Crystal Kemper",
            contactnumber: "601-321-8956",
            passport: "221-04-5659",
            address: "64 Florida, USA",
            image: avatar_15,
        },
        {
            id: 5,
            name: "Andrew Glover",
            contactnumber: "601-213-4545",
            passport: "221-04-7245",
            address: "New Jersey, USA",
            image: avatar_03,
        },
        {
            id: 6,
            name: "Jacqueline Daye",
            contactnumber: "601-456-2468",
            passport: "221-04-8830",
            address: "Indiana, USA",
            image: avatar_04,
        },
        {
            id: 7,
            name: "Tony Ingle",
            contactnumber: "601-345-7834",
            passport: "221-04-8830",
            address: "644 Ferrell Street, Wadena",
            image: avatar_04,
        },
        {
            id: 8,
            name: "Albert Boone",
            contactnumber: "601-316-7765",
            passport: "321-04-3434",
            address: "644 Ferrell Street, Wadena",
            image: avatar_02,
        },
        {
            id: 9,
            name: "Kathleen Kaiser",
            contactnumber: "601-545-2323",
            passport: "121-04-2323",
            address: "644 Alabama, USA",
            image: avatar_05,
        },
        {
            id: 10,
            name: "Mickey Bernier",
            contactnumber: "601-343-5656",
            passport: "221-34-4545",
            address: "North Carolina, USAi",
            image: avatar_06,
        },


    ];
    const columns = [
        {
            title: "No",
            dataIndex: "id",
            render: (text, record) => (
                <>{text}</>
            ),
            sorter: (a, b) => a.id.length - b.id.length,
        },
        {
            title: "Name",
            dataIndex: "name",
            render: (text, record) => (
                <>{text}</>
            ),
            sorter: (a, b) => a.name.length - b.name.length,
        },

        {
            title: "Contact Number",
            dataIndex: "contactnumber",
            render: (text, record) => (
                <>{text}</>
            ),
            sorter: (a, b) => a.contactnumber.length - b.contactnumber.length,
        },
        {
            title: "CNIC / PASSPORT / NIM / SSN",
            dataIndex: "passport",
            render: (text, record) => (
                <>{text}

                </>
            ),
            sorter: (a, b) => a.passport.length - b.passport.length,
        },
        {
            title: "Document",
            dataIndex: "document",
            render: (text, record) => (
                <>
                    <h2 className="table-avatar  user-profile">
                        <Link to="/admin/profile"><img className="avatar-img rounded-circle" alt="User Image" src={record.image} /></Link>
                        {text}
                    </h2>
                </>
            ),
            sorter: (a, b) => a.address.length - b.address.length,
        },
        {
            title: "Address",
            dataIndex: "address",
            render: (text, record) => (
                <>{text}

                </>
            ),
            sorter: (a, b) => a.address.length - b.address.length,
        },

        {
            title: "Action",
            dataIndex: "action",
            render: (text, record) => (
                <>
                    <Link to="#" className="btn btn-success btn-disable me-1">Approve</Link>
                    <Link to="#" className="btn btn-disable">Reject</Link>

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
            <>
                <div className='main-wrapper'>
                    {/* Page Wrapper */}
                    <Sidebar />
                    <>
                        {/* Page Wrapper */}
                        <div className="page-wrapper">
                            <div className="content container-fluid">
                                {/* Page Header */}
                                <div className="page-header">
                                    <div className="row align-items-center">
                                        <div className="col">
                                            <h3 className="page-title">Verify Identity Details</h3>
                                            <ul className="breadcrumb">
                                                <li className="breadcrumb-item">
                                                    <Link to="/admin/index">Home</Link>
                                                </li>
                                                <li className="breadcrumb-item active">
                                                    Verify Identity Details
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* /Page Header */}
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="card bg-white">
                                            <div className="card-body pt-0">
                                                <div className="card-header mb-4">
                                                    <ul
                                                        role="tablist"
                                                        className="nav nav-pills card-header-pills nav-justified"
                                                    >
                                                        <li className="nav-item">
                                                            <Link
                                                                to="#employer"
                                                                data-bs-toggle="tab"
                                                                className="nav-link active me-1"
                                                            >
                                                                Employers
                                                            </Link>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link
                                                                to="#freelancer"
                                                                data-bs-toggle="tab"
                                                                className="nav-link"
                                                            >
                                                                Freelancers
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="tab-content pt-0">
                                                    <div
                                                        role="tabpanel"
                                                        id="employer"
                                                        className="tab-pane fade show active"
                                                    >
                                                        <div className="card">
                                                            <div className="card-body">
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
                                                    <div role="tabpanel" id="freelancer" className="tab-pane fade">
                                                        <div className="card">
                                                            <div className="card-body">
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Page Wrapper */}
                    </>
                </div>
            </>

        </>
    )
}


export default VerifyIdentity; 