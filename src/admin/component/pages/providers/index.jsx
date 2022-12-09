import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Table } from "antd";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Sidebar from '../../../commoncomponent/sidebar'
import { itemRender, onShowSizeChange } from "../../../paginationfunction"
import "../../../antdstyle.css"
import { img_1, img_2, img_3, img_4, img_5, img_6, img_7, img_8, img_9, img_10 } from '../imagepath'

const Providers = () => {
    //date

    const [date, setDate] = useState(new Date());
    const [inputfilter, setInputfilter] = useState(false);

    const handleChange = (date) => {
        setDate(date)
    }

    const togglefilter = (value) => {
        setInputfilter(value)
    }

    const data = [
        {
            id: "C1",
            companyname: "Focused Holistic Hardware",
            primarycontact: "Emily Smith",
            website: "https://focusedhardware.de",
            totalprojects: "120",
            status: "Enabled",
            image: img_1,
        },
        {
            id: "C2",
            companyname: "Phased Actuating Interface",
            primarycontact: "Joshuah Runolfsdottir",
            website: "https://phasedactuating.com",
            totalprojects: "132",
            status: "Disable",
            image: img_2,
        },
        {
            id: "C3",
            companyname: "Intuitive Global Encoding",
            primarycontact: "Amy Wilkinson",
            website: "https://globalencoding.com",
            totalprojects: "90",
            status: "Enabled",
            image: img_3,
        },
        {
            id: "C4",
            companyname: "Visionary Scalable Alliance",
            primarycontact: "Jimmy Richardson",
            website: "https://visionaryscalable.com",
            totalprojects: "110",
            status: "Disable",
            image: img_4,
        },
        {
            id: "C5",
            companyname: "Self-Enabling Neutral Matrix",
            primarycontact: "Damon Cohn",
            website: "https://neutralmatrix.com",
            totalprojects: "158",
            status: "Disable",
            image: img_5,
        },
        {
            id: "C6",
            companyname: "Amaze Tech",
            primarycontact: "Jacqueline Daye",
            website: "https://amazetech.de",
            totalprojects: "120",
            status: "Enabled",
            image: img_6,
        },
        {
            id: "C7",
            companyname: "Park Inc",
            primarycontact: "Tony Ingle",
            website: "https://parkinc.de",
            totalprojects: "120",
            status: "Disable",
            image: img_7,
        },

        {
            id: "C8",
            companyname: "Tech Zone",
            primarycontact: "Albert Boone",
            website: "https://techzone.de",
            totalprojects: "120",
            status: "Enabled",
            image: img_8,
        },
        {
            id: "C9",
            companyname: "ABC Software",
            primarycontact: "Kathleen Kaiser",
            website: "https://abcsoftware.de",
            totalprojects: "120",
            status: "Enabled",
            image: img_9,
        },
        {
            id: "C10",
            companyname: "Host Technologies",
            primarycontact: "Mickey Bernier",
            website: "https://hosttechnologies.de",
            totalprojects: "120",
            status: "Disable",
            image: img_10,
        },


    ];
    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            render: (text, record) => (
                <>{text}</>
            ),
            sorter: (a, b) => a.id.length - b.id.length,
        },
        {
            title: "Logo",
            dataIndex: "image",
            render: (text, record) => (
                <><Link to="#" className="avatar"><img alt="" src={record.image} /></Link>
                </>
            ),
            sorter: (a, b) => a.image.length - b.image.length,
        },
        {
            title: "Company name",
            dataIndex: "companyname",
            render: (text, record) => (
                <>{text}</>
            ),
            sorter: (a, b) => a.companyname.length - b.companyname.length,
        },
        {
            title: "Primary contact",
            dataIndex: "primarycontact",
            render: (text, record) => (
                <>
                    <h2 className="table-avatar">
                        <Link to="/admin/profile">{text}</Link>
                    </h2>
                </>
            ),
            sorter: (a, b) => a.primarycontact.length - b.primarycontact.length,
        },
        {
            title: "website",
            dataIndex: "website",
            render: (text, record) => (
                <>{text}</>
            ),

            sorter: (a, b) => a.website.length - b.website.length,
        },
        {
            title: "Total Projects",
            dataIndex: "totalprojects",
            render: (text, record) => (
                <>{text}</>
            ),
            sorter: (a, b) => a.totalprojects.length - b.totalprojects.length,
        },

        {
            title: "Status",
            dataIndex: "status",
            render: (text, record) => (
                <>
                    <Link to="#" className={` ${record.status === "Enabled" ? 'btn btn-enable' : record.status === "Disable" ? 'btn btn-disable' : ""}`} >{record.status}</Link>
                </>

            ),
            sorter: (a, b) => a.status.length - b.status.length,
        },
        {
            title: "Action",
            dataIndex: "action",
            render: (text, record) => (
                <>
                    <Link to="#" className="btn btn-sm btn-secondary me-2" data-bs-toggle="modal" data-bs-target="#add-category"><i className="far fa-edit"></i></Link>
                    <Link to="#" className="btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target="#delete_category"><i className="far fa-trash-alt"></i></Link>
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
                    <Sidebar />
                    <>
                        {/* Page Wrapper */}
                        <div className="page-wrapper">
                            <div className="content container-fluid">
                                {/* Page Header */}
                                <div className="page-header">
                                    <div className="row align-items-center">
                                        <div className="col">
                                            <h3 className="page-title">Providers</h3>
                                            <ul className="breadcrumb">
                                                <li className="breadcrumb-item">
                                                    <Link to="/index/admin">Home</Link>
                                                </li>
                                                <li className="breadcrumb-item active">Providers</li>
                                            </ul>
                                        </div>
                                        <div className="col-auto">
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
                                {/* /Page Header */}
                                {/* Search Filter */}
                                <div className="card filter-card" id="filter_inputs" style={{ display: inputfilter ? "block" : "none" }}>
                                    <div className="card-body pb-0">
                                        <form action="#" method="post">
                                            <div className="row filter-row">
                                                <div className="col-sm-6 col-md-3">
                                                    <div className="form-group">
                                                        <label>Company Name</label>
                                                        <input className="form-control" type="text" />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 col-md-3">
                                                    <div className="form-group">
                                                        <label>From Date</label>
                                                        <div className="cal-icon">
                                                            <DatePicker
                                                                selected={date}
                                                                onChange={handleChange}
                                                                className="form-control datetimepicker"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 col-md-3">
                                                    <div className="form-group">
                                                        <label>To Date</label>
                                                        <div className="cal-icon">
                                                            <DatePicker
                                                                selected={date}
                                                                onChange={handleChange}
                                                                className="form-control datetimepicker"
                                                            />
                                                        </div>
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
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="table-responsive">

                                                    <Table
                                                        rowSelection={rowSelection}
                                                        scroll={{ x: true }}
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
                        </div>
                        <>
                            {/* Category Modal */}
                            <div className="modal fade custom-modal" id="add-category">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        {/* Modal Header */}
                                        <div className="modal-header flex-wrap">
                                            <h4 className="modal-title">Edit Provider</h4>
                                            <button type="button" className="close" data-bs-dismiss="modal">
                                                <span>×</span>
                                            </button>
                                        </div>
                                        {/* Modal body */}
                                        <div className="modal-body">
                                            <form>
                                                <div className="form-group">
                                                    <label>Company Name</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        defaultValue="Focused Holistic Hardware"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label>Primary Contact</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        defaultValue="Emily Smith"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label>Website</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        defaultValue="https://focusedhardware.de"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label>Total Projects</label>
                                                    <input type="text" className="form-control" defaultValue={120} />
                                                </div>
                                                <div className="form-group">
                                                    <label>Status</label>
                                                    <select className="form-control form-select">
                                                        <option selected="">Enabled</option>
                                                        <option>Disable</option>
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
                            {/* /Category Modal */}
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

        </>
    )
}


export default Providers; 