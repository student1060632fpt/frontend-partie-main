import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Header from '../../../commoncomponent/header'
import Sidebar from '../../../commoncomponent/sidebar'
import Chart from 'react-apexcharts'
import { avatar_02, avatar_03, avatar_04, avatar_14, avatar_01, avatar_15, avatar_11, avatar_16, avatar_05, avatar_10, avatar_06, } from '../../pages/imagepath'
import { Table } from "antd";
import { itemRender, onShowSizeChange } from "../../../paginationfunction"
import "../../../antdstyle.css"

const Dashboard = () => {

    const [datas] = useState({
        chart: {
            height: 335,
            toolbar: {
                show: false
            }
        },
        dataLabels: {
            enabled: false
        },
        datasets: {
            id: 'apaxcharts-area'
        },
        stroke: {
            curve: "smooth",
        },
        xaxis: {
            type: 'datetime',
            categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            },
        },
        colors: ["#ff5b37", "#ffb8a8", "#feb019"],
        borderWidth: 3,

    })
    const [series] = useState([
        {
            name: 'freelance Developers',
            data: [31, 40, 28, 51, 42, 109, 100]
        },
        {
            name: 'Developers per project',
            data: [11, 32, 45, 32, 34, 52, 41]
        },
        {
            name: 'completed projects',
            data: [12, 36, 42, 30, 39, 58, 40]
        },

    ])

    const data = [
        {
            id: 1,
            profile: "Janet Paden",
            designation: "CEO",
            category: "Angular",
            image: avatar_14,
        },
        {
            id: 2,
            profile: "George Wells",
            designation: "Tech Lead",
            category: "Node",
            image: avatar_01,
        },
        {
            id: 3,
            profile: "Timothy Smith",
            designation: "Technial Manager",
            category: "Angular",
            image: avatar_15,
        },
        {
            id: 4,
            profile: "Lois Alexander",
            designation: "Designer",
            category: "Laravel",
            image: avatar_15,
        },
        {
            id: 5,
            profile: "Sara Grayson",
            designation: "Developer",
            category: "Angular",
            image: avatar_03,
        },
        {
            id: 6,
            profile: "Deboarah",
            designation: "Associate Engineer",
            category: "React",
            image: avatar_04,
        },
        {
            id: 7,
            profile: "Sofia Briant",
            designation: "Technial Manager",
            category: "JAVA",
            image: avatar_04,
        },
        {
            id: 8,
            profile: "Bess Twishes",
            designation: "Designer",
            category: ".NET",
            image: avatar_02,
        },
        {
            id: 9,
            profile: "Rayan Lester",
            designation: "Technial Manager",
            category: "Python",
            image: avatar_05,
        },
        {
            id: 10,
            profile: "Sarah Alexander",
            designation: "Designer",
            category: "Golang",
            image: avatar_06,
        },


    ];
    const columns = [
        {
            title: "Profile",
            dataIndex: "profile",
            render: (text, record) => (
                <>
                    <h2 className="table-avatar  user-profile">
                        <Link to="/admin/profile"><img className="avatar-img rounded-circle" alt="User Image" src={record.image} /></Link>
                        {text}
                    </h2>
                </>
            ),
            sorter: (a, b) => a.profile.length - b.profile.length,
        },
        {
            title: "Designation",
            dataIndex: "designation",
            render: (text, record) => (
                <>{text}</>
            ),
            sorter: (a, b) => a.designation.length - b.designation.length,
        },
        {
            title: "comments",
            dataIndex: "comments",
            render: (text, record) => (
                <>{text}
                    <div className="desc-info">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Volutpat orci enim, mattis nibh aliquam dui,
                        nibh faucibus aenean. Eget volutpat
                    </div>
                </>
            ),
            sorter: (a, b) => a.comments.length - b.comments.length,
        },

        {
            title: "Stars",
            dataIndex: "stars",
            render: (text, record) => (
                <>{text}
                    <i className="fas fa-star text-primary" />
                    <i className="fas fa-star text-primary" />
                    <i className="fas fa-star text-primary" />
                    <i className="fas fa-star text-primary" />
                    <i className="fas fa-star text-muted" />
                </>
            ),
            sorter: (a, b) => a.stars.length - b.stars.length,
        },
        {
            title: "Category",
            dataIndex: "category",
            render: (text, record) => (
                <>{text}

                </>
            ),
            sorter: (a, b) => a.category.length - b.category.length,
        },
        {
            title: "Action" ,
            dataIndex: "action",
            render: (text, record) => (
                <>
                    <Link
                        to="#"
                        className=" btn btn-approve text-white me-2"
                    >
                        Approve
                    </Link>
                    <Link
                        to="#"
                        className="btn btn-disable"
                    >
                        Enable
                    </Link>

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
                <Header />
                <Sidebar />
                <div className="page-wrapper">
                    <div className="content container-fluid">
                        {/* Page Header */}
                        <div className="page-header">
                            <div className="row align-items-center">
                                <div className="col">
                                    <h3 className="page-title">Dashboard</h3>
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link to="/index/admin">Home</Link>
                                        </li>
                                        <li className="breadcrumb-item active">Dashboard</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* /Page Header */}
                        <div className="row">
                            <div className="col-md-8">
                                {/*/Wizard*/}
                                <div className="row">
                                    <div className="col-md-4 d-flex">
                                        <div className="card wizard-card flex-fill">
                                            <div className="card-body">
                                                <p className="text-primary mt-0 mb-2">Users</p>
                                                <h5>1682</h5>
                                                <p>
                                                    <Link to="/admin/users">view details</Link>
                                                </p>
                                                <span className="dash-widget-icon bg-1">
                                                    <i className="fas fa-users" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 d-flex">
                                        <div className="card wizard-card flex-fill">
                                            <div className="card-body">
                                                <p className="text-primary mt-0 mb-2">Completed Projects</p>
                                                <h5>15k</h5>
                                                <p>
                                                    <Link to="/admin/projects">view details</Link>
                                                </p>
                                                <span className="dash-widget-icon bg-1">
                                                    <i className="fas fa-th-large" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 d-flex">
                                        <div className="card wizard-card flex-fill">
                                            <div className="card-body">
                                                <p className="text-primary mt-0 mb-2">Active Projects</p>
                                                <h5>1568</h5>
                                                <p>
                                                    <Link to="/admin/projects">view details</Link>
                                                </p>
                                                <span className="dash-widget-icon bg-1">
                                                    <i className="fas fa-bezier-curve" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*/Wizard*/}
                                <div className="row">
                                    <div className="col-lg-12 d-flex">
                                        <div className="card w-100">
                                            <div className="card-body pt-0 pb-2">
                                                <div className="card-header">
                                                    <h5 className="card-title">Over view</h5>
                                                </div>
                                                <div id="chart" className="mt-4">
                                                    <Chart options={datas} series={series} type="area" height={310} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 d-flex">
                                <div className="card w-100">
                                    <div className="card-body pt-0">
                                        <div className="card-header">
                                            <div className="row">
                                                <div className="col-7">
                                                    <p>Welcome back,</p>
                                                    <h6 className="text-primary">Super Admin</h6>
                                                </div>
                                                <div className="col-5 text-end">
                                                    <span className="welcome-dash-icon bg-1">
                                                        <i className="fas fa-user" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="account-balance">
                                            <p>Account balance</p>
                                            <h6>$50,000,00 </h6>
                                        </div>
                                        <div className="mt-3">
                                            <h6 className="text-primary">Payments</h6>
                                            <div className="table-responsive">

                                                <table className="table table-center table-hover mb-0">
                                                    <thead>
                                                        <tr>
                                                            <th className="text-nowrap">Client or Freelancer</th>
                                                            <th>Amount</th>
                                                            <th className="text-end">Status</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td className="text-nowrap">Sakib Khan</td>
                                                            <td>$2222</td>
                                                            <td className="text-end">Completed</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-nowrap">Pixel Inc Ltd</td>
                                                            <td>$750</td>
                                                            <td className="text-end">
                                                                <Link
                                                                    to="#"
                                                                    className="btn btn-sm btn-success me-2"
                                                                >
                                                                    <i className="far fa-edit" />
                                                                </Link>
                                                                <Link
                                                                    to="#"
                                                                    className="btn btn-sm btn-danger me-2"
                                                                >
                                                                    <i className="far fa-trash-alt" />
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-nowrap">Jon M Mullins</td>
                                                            <td>$3150</td>
                                                            <td className="text-end text-nowrap">
                                                                Money released to Freelancer
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-nowrap">Rose M Milewski</td>
                                                            <td>$1455</td>
                                                            <td className="text-end text-nowrap">
                                                                Money returned to Client
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-nowrap">Gerald K Myers</td>
                                                            <td>$3000</td>
                                                            <td className="text-end">
                                                                <Link
                                                                    to="#"
                                                                    className="btn btn-sm btn-success me-2"
                                                                >
                                                                    <i className="far fa-edit" />
                                                                </Link>
                                                                <Link
                                                                    to="#"
                                                                    className="btn btn-sm btn-danger me-2"
                                                                >
                                                                    <i className="far fa-trash-alt" />
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-nowrap">Marcin Kowalski</td>
                                                            <td>$895</td>
                                                            <td className="text-end">
                                                                <Link
                                                                    to="#"
                                                                    className="btn btn-sm btn-success me-2"
                                                                >
                                                                    <i className="far fa-edit" />
                                                                </Link>
                                                                <Link
                                                                    to="#"
                                                                    className="btn btn-sm btn-danger me-2"
                                                                >
                                                                    <i className="far fa-trash-alt" />
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card bg-white projects-card">
                                    <div className="card-body pt-0">
                                        <div className="card-header">
                                            <h5 className="card-title">Reviews</h5>
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
                                                        Pending Approval (03)
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
                                                        // dataSource={data}
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
                    {/* /Page Wrapper */}
                </div>
                </div>
            </>

        </>
    )
}


export default Dashboard; 