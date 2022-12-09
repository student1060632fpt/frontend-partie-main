import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Table } from "antd";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Sidebar from '../../../commoncomponent/sidebar'
import { itemRender, onShowSizeChange } from "../../../paginationfunction"
import "../../../antdstyle.css"
import { img_1, img_2, img_3, img_4, img_5, img_6, img_7, img_8, img_9, img_10 } from '../../pages/imagepath'

const Projects = () => {
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
            id: 1,
            title: "Website Designer Required For Directory Theme",
            budget: "$2222",
            technology: "Angular",
            company: "AMAZE TECH",
            startdate: "22-05-2022",
            duedate: "22-05-2022",
            image: img_1,
            style: { width: "25%" },

        },
        {
            id: 2,
            title: "Lorem Ipsum is simply dummy text of",
            budget: "$5755",
            technology: "Laravel",
            company: "Park INC",
            startdate: "22-05-2022",
            duedate: "22-05-2022",
            image: img_2,
            style: { width: "60%" },
        },
        {
            id: 3,
            title: "It is a long established fact that a reader",
            budget: "$5755",
            technology: "Vue",
            company: "Tsch Zone",
            startdate: "22-05-2022",
            duedate: "22-05-2022",
            image: img_3,
            style: { width: "30%" },
        },
        {
            id: 4,
            title: "There are many variations of passages of Lorem",
            budget: "$2333",
            technology: "Golang",
            company: "ABC Software",
            startdate: "22-05-2022",
            duedate: "22-05-2022",
            image: img_4,
            style: { width: "50%" },
        },
        {
            id: 5,
            title: "Website Designer Required For Directory Theme",
            budget: "$2222",
            technology: "Node js",
            company: "Host Technologies",
            startdate: "22-05-2022",
            duedate: "22-05-2022",
            image: img_5,
            style: { width: "25%" },
        },
        {
            id: 6,
            title: "combined with a handful of model sentence structures",
            budget: "$1500",
            technology: ".Net",
            company: "SM Developer",
            startdate: "22-05-2022",
            duedate: "22-05-2022",
            image: img_6,
            style: { width: "45%" },
        },
        {
            id: 7,
            title: "Designer Required For Directory",
            budget: "$2222",
            technology: "Java",
            company: "Kind Software",
            startdate: "22-05-2022",
            duedate: "22-05-2022",
            image: img_7,
            style: { width: "25%" },
        },

        {
            id: 8,
            title: "Lorem Ipsum is therefore always free content",
            budget: "$7789",
            technology: "Python",
            company: "Particles INC",
            startdate: "22-05-2022",
            duedate: "22-05-2022",
            image: img_8,
            style: { width: "56%" },
        },
        {
            id: 9,
            title: "Required For Website Developer",
            budget: "$2222",
            technology: "Codingnator",
            company: "Kind Software",
            startdate: "22-05-2022",
            duedate: "22-05-2022",
            image: img_9,
            style: { width: "25%" },
        },
        {
            id: 10,
            title: "Lorem Ipsum is therefore always free",
            budget: "$7789",
            technology: "React",
            company: "Particles INC",
            startdate: "22-05-2022",
            duedate: "22-05-2022",
            image: img_10,
            style: { width: "56%" },
        },


    ];
    const columns = [

        {
            title: "Logo",
            dataIndex: "image",
            render: (text, record) => (
                <><Link to="/admin/profile" className="avatar"><img alt="" src={record.image} /></Link>
                </>
            ),
            sorter: (a, b) => a.image.length - b.image.length,
        },
        {
            title: "Title",
            dataIndex: "title",
            render: (text, record) => (
                <>{text}</>
            ),
            sorter: (a, b) => a.title.length - b.title.length,
        },
        {
            title: "Budget",
            dataIndex: "budget",
            render: (text, record) => (
                <>{text}</>
            ),
            sorter: (a, b) => a.budget.length - b.budget.length,
        },
        {
            title: "Progress",
            dataIndex: "progress",
            render: (text, record) => (
                <div className="progress rounded-pill">
                    <div
                        className="progress-bar bg-primary rounded-pill"
                        role="progressbar"

                        style={record.style}
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                    />
                </div>
            ),
            // sorter: (a, b) => a.email.length - b.email.length,
        },
        {
            title: "Technology",
            dataIndex: "technology",
            render: (text, record) => (
                <>{text}</>
            ),
            sorter: (a, b) => a.technology.length - b.technology.length,
        },

        {
            title: "Company",
            dataIndex: "company",
            render: (text, record) => (
                <>{text}</>
            ),
            sorter: (a, b) => a.company.length - b.company.length,
        },
        {
            title: "Start date",
            dataIndex: "startdate",
            render: (text, record) => (
                <>{text}</>
            ),
            sorter: (a, b) => a.startdate.length - b.startdate.length,
        },
        {
            title: "Due date",
            dataIndex: "duedate",
            render: (text, record) => (
                <>{text}</>
            ),
            sorter: (a, b) => a.duedate.length - b.duedate.length,
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
                {/* Page Wrapper */}
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
                                            <h3 className="page-title">Projects</h3>
                                            <ul className="breadcrumb">
                                                <li className="breadcrumb-item">
                                                    <Link to="/index/admin">Home</Link>
                                                </li>
                                                <li className="breadcrumb-item active">Projects</li>
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
                                <div className="card bg-white projects-card">
                                    <div className="card-body pt-0">
                                        <div className="card-header">
                                            <h5 className="card-title">Projects views</h5>
                                        </div>
                                        <div className="reviews-menu-links">
                                            <ul
                                                role="tablist"
                                                className="nav nav-pills card-header-pills nav-justified"
                                            >
                                                <li className="nav-item">
                                                    <Link
                                                        to="#tab-4"
                                                        data-bs-toggle="tab"
                                                        className="nav-link active"
                                                    >
                                                        All (272)
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to="#tab-5" data-bs-toggle="tab" className="nav-link">
                                                        Active (218)
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to="#tab-6" data-bs-toggle="tab" className="nav-link">
                                                        {" "}
                                                        In Active (03)
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to="#tab-7" data-bs-toggle="tab" className="nav-link">
                                                        Trash (0)
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="tab-content pt-0">
                                            <div
                                                role="tabpanel"
                                                id="tab-4"
                                                className="tab-pane fade active show"
                                            >
                                                <div className="table-responsive">

                                                    <Table
                                                        rowSelection={rowSelection}
                                                        pagination={{
                                                            total: data.length,
                                                            showTotal: (total, range) => `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                                                            showSizeChanger: true, onShowSizeChange: onShowSizeChange, itemRender: itemRender
                                                        }}
                                                        className="table"
                                                        scroll={{ x: true }}
                                                        style={{ overflowX: "auto" }}
                                                        columns={columns}
                                                        dataSource={data}
                                                        rowKey={(record) => record.id}
                                                    />

                                                </div>
                                            </div>
                                            <div role="tabpanel" id="tab-5" className="tab-pane fade">
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
                                            <div role="tabpanel" id="tab-6" className="tab-pane fade">
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
                                            <div role="tabpanel" id="tab-7" className="tab-pane fade">
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
                    </>
                    <>
                        {/* Category Modal */}
                        <div className="modal fade custom-modal" id="add-category">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h4 className="modal-title">Projects</h4>
                                        <button type="button" className="close" data-bs-dismiss="modal">
                                            <span>×</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <form>
                                            <div className="form-group">
                                                <label>Title</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    defaultValue="Website Designer Required For Directory Theme"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Budget</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    defaultValue="$2222"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Technology</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    defaultValue="Angler"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Technology</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    defaultValue="AMAZE TECH"
                                                />
                                            </div>
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
                        {/* Category Modal */}
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
                </div>

            </>

        </>
    )
}


export default Projects; 