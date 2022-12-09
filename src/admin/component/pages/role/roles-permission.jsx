import React from 'react'
import { Link } from "react-router-dom";
import Sidebar from '../../../commoncomponent/sidebar'
import Select2 from 'react-select2-wrapper';
import 'react-select2-wrapper/css/select2.css';

const RolesPermission = () => {
    const options = [
        { id: 1, text: 'Select Role Name', },
        { id: 2, text: 'Show All Projects', },
        { id: 3, text: 'Show Open Projects', },
    ]

    return (
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
                                        <h3 className="page-title">Permission</h3>
                                        <ul className="breadcrumb">
                                            <li className="breadcrumb-item">
                                                <Link to="/index/admin">Home</Link>
                                            </li>
                                            <li className="breadcrumb-item">
                                                <Link to="/admin/roles">Roles</Link>
                                            </li>
                                            <li className="breadcrumb-item active">Payments</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* /Page Header */}
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="card">
                                        <div className="card-body pt-0">
                                            <div className="card-header mb-4">
                                                <h5 className="card-title">Select Role Permission</h5>
                                            </div>
                                            <form>
                                                <div className="form-group">
                                                    <label>Role Name</label>

                                                    <Select2
                                                        className="form-control select"
                                                        data={options}
                                                        options={{
                                                            placeholder: 'Select Role Name',
                                                        }} />


                                                </div>
                                                <button type="submit" className="btn btn-primary btn-block">
                                                    Submit
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="card">
                                        <div className="card-body pt-0">
                                            <div className="card-header mb-4">
                                                <h5 className="card-title">Role Permissions</h5>
                                            </div>
                                            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                                                <div className="col mb-3 d-flex">
                                                    <div className="card flex-fill">
                                                        <div className="card-body p-3 text-center">
                                                            <p className="card-text f-12">Show all projects </p>
                                                        </div>
                                                        <div className="card-footer">
                                                            <label
                                                                className="form-group toggle-switch mb-0"
                                                                htmlFor="notification_switch1"
                                                            >
                                                                <input
                                                                    type="checkbox"
                                                                    className="toggle-switch-input"
                                                                    id="notification_switch1"
                                                                />
                                                                <span className="toggle-switch-label mx-auto">
                                                                    <span className="toggle-switch-indicator" />
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col mb-3 d-flex">
                                                    <div className="card flex-fill">
                                                        <div className="card-body p-3 text-center">
                                                            <p className="card-text f-12">Show running projects </p>
                                                        </div>
                                                        <div className="card-footer">
                                                            <label
                                                                className="form-group toggle-switch mb-0"
                                                                htmlFor="notification_switch2"
                                                            >
                                                                <input
                                                                    type="checkbox"
                                                                    className="toggle-switch-input"
                                                                    id="notification_switch2"
                                                                    defaultChecked=""
                                                                />
                                                                <span className="toggle-switch-label mx-auto">
                                                                    <span className="toggle-switch-indicator" />
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col mb-3 d-flex">
                                                    <div className="card flex-fill">
                                                        <div className="card-body p-3 text-center">
                                                            <p className="card-text f-12">Show open projects </p>
                                                        </div>
                                                        <div className="card-footer">
                                                            <label
                                                                className="form-group toggle-switch mb-0"
                                                                htmlFor="notification_switch3"
                                                            >
                                                                <input
                                                                    type="checkbox"
                                                                    className="toggle-switch-input"
                                                                    id="notification_switch3"
                                                                    defaultChecked=""
                                                                />
                                                                <span className="toggle-switch-label mx-auto">
                                                                    <span className="toggle-switch-indicator" />
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col mb-3 d-flex">
                                                    <div className="card flex-fill">
                                                        <div className="card-body p-3 text-center">
                                                            <p className="card-text f-12">Show cancelled projects </p>
                                                        </div>
                                                        <div className="card-footer">
                                                            <label
                                                                className="form-group toggle-switch mb-0"
                                                                htmlFor="notification_switch4"
                                                            >
                                                                <input
                                                                    type="checkbox"
                                                                    className="toggle-switch-input"
                                                                    id="notification_switch4"
                                                                    defaultChecked=""
                                                                />
                                                                <span className="toggle-switch-label mx-auto">
                                                                    <span className="toggle-switch-indicator" />
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col mb-3 d-flex">
                                                    <div className="card flex-fill">
                                                        <div className="card-body p-3 text-center">
                                                            <p className="card-text f-12">
                                                                Show project cancel requests{" "}
                                                            </p>
                                                        </div>
                                                        <div className="card-footer">
                                                            <label
                                                                className="form-group toggle-switch mb-0"
                                                                htmlFor="notification_switch5"
                                                            >
                                                                <input
                                                                    type="checkbox"
                                                                    className="toggle-switch-input"
                                                                    id="notification_switch5"
                                                                    defaultChecked=""
                                                                />
                                                                <span className="toggle-switch-label mx-auto">
                                                                    <span className="toggle-switch-indicator" />
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col mb-3 d-flex">
                                                    <div className="card flex-fill">
                                                        <div className="card-body p-3 text-center">
                                                            <p className="card-text f-12">Show project category</p>
                                                        </div>
                                                        <div className="card-footer">
                                                            <label
                                                                className="form-group toggle-switch mb-0"
                                                                htmlFor="notification_switch6"
                                                            >
                                                                <input
                                                                    type="checkbox"
                                                                    className="toggle-switch-input"
                                                                    id="notification_switch6"
                                                                    defaultChecked=""
                                                                />
                                                                <span className="toggle-switch-label mx-auto">
                                                                    <span className="toggle-switch-indicator" />
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col mb-3 d-flex">
                                                    <div className="card flex-fill">
                                                        <div className="card-body p-3 text-center">
                                                            <p className="card-text f-12">
                                                                Show verification requests{" "}
                                                            </p>
                                                        </div>
                                                        <div className="card-footer">
                                                            <label
                                                                className="form-group toggle-switch mb-0"
                                                                htmlFor="notification_switch7"
                                                            >
                                                                <input
                                                                    type="checkbox"
                                                                    className="toggle-switch-input"
                                                                    id="notification_switch7"
                                                                    defaultChecked=""
                                                                />
                                                                <span className="toggle-switch-label mx-auto">
                                                                    <span className="toggle-switch-indicator" />
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col mb-3 d-flex">
                                                    <div className="card flex-fill">
                                                        <div className="card-body p-3 text-center">
                                                            <p className="card-text f-12">Show user chats </p>
                                                        </div>
                                                        <div className="card-footer">
                                                            <label
                                                                className="form-group toggle-switch mb-0"
                                                                htmlFor="notification_switch8"
                                                            >
                                                                <input
                                                                    type="checkbox"
                                                                    className="toggle-switch-input"
                                                                    id="notification_switch8"
                                                                    defaultChecked=""
                                                                />
                                                                <span className="toggle-switch-label mx-auto">
                                                                    <span className="toggle-switch-indicator" />
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col mb-3 d-flex">
                                                    <div className="card flex-fill">
                                                        <div className="card-body p-3 text-center">
                                                            <p className="card-text f-12">Show all freelancers</p>
                                                        </div>
                                                        <div className="card-footer">
                                                            <label
                                                                className="form-group toggle-switch mb-0"
                                                                htmlFor="notification_switch9"
                                                            >
                                                                <input
                                                                    type="checkbox"
                                                                    className="toggle-switch-input"
                                                                    id="notification_switch9"
                                                                    defaultChecked=""
                                                                />
                                                                <span className="toggle-switch-label mx-auto">
                                                                    <span className="toggle-switch-indicator" />
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col mb-3 d-flex">
                                                    <div className="card flex-fill">
                                                        <div className="card-body p-3 text-center">
                                                            <p className="card-text f-12">
                                                                Show freelancer packages{" "}
                                                            </p>
                                                        </div>
                                                        <div className="card-footer">
                                                            <label
                                                                className="form-group toggle-switch mb-0"
                                                                htmlFor="notification_switch10"
                                                            >
                                                                <input
                                                                    type="checkbox"
                                                                    className="toggle-switch-input"
                                                                    id="notification_switch10"
                                                                />
                                                                <span className="toggle-switch-label mx-auto">
                                                                    <span className="toggle-switch-indicator" />
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col mb-3 d-flex">
                                                    <div className="card flex-fill">
                                                        <div className="card-body p-3 text-center">
                                                            <p className="card-text f-12">Show freelancer skills</p>
                                                        </div>
                                                        <div className="card-footer">
                                                            <label
                                                                className="form-group toggle-switch mb-0"
                                                                htmlFor="notification_switch11"
                                                            >
                                                                <input
                                                                    type="checkbox"
                                                                    className="toggle-switch-input"
                                                                    id="notification_switch11"
                                                                />
                                                                <span className="toggle-switch-label mx-auto">
                                                                    <span className="toggle-switch-indicator" />
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col mb-3 d-flex">
                                                    <div className="card flex-fill">
                                                        <div className="card-body p-3 text-center">
                                                            <p className="card-text f-12">Show freelancer badges</p>
                                                        </div>
                                                        <div className="card-footer">
                                                            <label
                                                                className="form-group toggle-switch mb-0"
                                                                htmlFor="notification_switch12"
                                                            >
                                                                <input
                                                                    type="checkbox"
                                                                    className="toggle-switch-input"
                                                                    id="notification_switch12"
                                                                />
                                                                <span className="toggle-switch-label mx-auto">
                                                                    <span className="toggle-switch-indicator" />
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col mb-3 d-flex">
                                                    <div className="card flex-fill">
                                                        <div className="card-body p-3 text-center">
                                                            <p className="card-text f-12">Show all clients</p>
                                                        </div>
                                                        <div className="card-footer">
                                                            <label
                                                                className="form-group toggle-switch mb-0"
                                                                htmlFor="notification_switch13"
                                                            >
                                                                <input
                                                                    type="checkbox"
                                                                    className="toggle-switch-input"
                                                                    id="notification_switch13"
                                                                />
                                                                <span className="toggle-switch-label mx-auto">
                                                                    <span className="toggle-switch-indicator" />
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col mb-3 d-flex">
                                                    <div className="card flex-fill">
                                                        <div className="card-body p-3 text-center">
                                                            <p className="card-text f-12">Show client packages</p>
                                                        </div>
                                                        <div className="card-footer">
                                                            <label
                                                                className="form-group toggle-switch mb-0"
                                                                htmlFor="notification_switch14"
                                                            >
                                                                <input
                                                                    type="checkbox"
                                                                    className="toggle-switch-input"
                                                                    id="notification_switch14"
                                                                />
                                                                <span className="toggle-switch-label mx-auto">
                                                                    <span className="toggle-switch-indicator" />
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col mb-3 d-flex">
                                                    <div className="card flex-fill">
                                                        <div className="card-body p-3 text-center">
                                                            <p className="card-text f-12">Show client badges</p>
                                                        </div>
                                                        <div className="card-footer">
                                                            <label
                                                                className="form-group toggle-switch mb-0"
                                                                htmlFor="notification_switch15"
                                                            >
                                                                <input
                                                                    type="checkbox"
                                                                    className="toggle-switch-input"
                                                                    id="notification_switch15"
                                                                />
                                                                <span className="toggle-switch-label mx-auto">
                                                                    <span className="toggle-switch-indicator" />
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col mb-3 d-flex">
                                                    <div className="card flex-fill">
                                                        <div className="card-body p-3 text-center">
                                                            <p className="card-text f-12">Show freelancers reviews</p>
                                                        </div>
                                                        <div className="card-footer">
                                                            <label
                                                                className="form-group toggle-switch mb-0"
                                                                htmlFor="notification_switch16"
                                                            >
                                                                <input
                                                                    type="checkbox"
                                                                    className="toggle-switch-input"
                                                                    id="notification_switch16"
                                                                />
                                                                <span className="toggle-switch-label mx-auto">
                                                                    <span className="toggle-switch-indicator" />
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col mb-3 d-flex">
                                                    <div className="card flex-fill">
                                                        <div className="card-body p-3 text-center">
                                                            <p className="card-text f-12">Show client reviews</p>
                                                        </div>
                                                        <div className="card-footer">
                                                            <label
                                                                className="form-group toggle-switch mb-0"
                                                                htmlFor="notification_switch17"
                                                            >
                                                                <input
                                                                    type="checkbox"
                                                                    className="toggle-switch-input"
                                                                    id="notification_switch17"
                                                                />
                                                                <span className="toggle-switch-label mx-auto">
                                                                    <span className="toggle-switch-indicator" />
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col mb-3 d-flex">
                                                    <div className="card flex-fill">
                                                        <div className="card-body p-3 text-center">
                                                            <p className="card-text f-12">Show active tickets</p>
                                                        </div>
                                                        <div className="card-footer">
                                                            <label
                                                                className="form-group toggle-switch mb-0"
                                                                htmlFor="notification_switch18"
                                                            >
                                                                <input
                                                                    type="checkbox"
                                                                    className="toggle-switch-input"
                                                                    id="notification_switch18"
                                                                />
                                                                <span className="toggle-switch-label mx-auto">
                                                                    <span className="toggle-switch-indicator" />
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col mb-3 d-flex">
                                                    <div className="card flex-fill">
                                                        <div className="card-body p-3 text-center">
                                                            <p className="card-text f-12">Show project payments</p>
                                                        </div>
                                                        <div className="card-footer">
                                                            <label
                                                                className="form-group toggle-switch mb-0"
                                                                htmlFor="notification_switch19"
                                                            >
                                                                <input
                                                                    type="checkbox"
                                                                    className="toggle-switch-input"
                                                                    id="notification_switch19"
                                                                />
                                                                <span className="toggle-switch-label mx-auto">
                                                                    <span className="toggle-switch-indicator" />
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col mb-3 d-flex">
                                                    <div className="card flex-fill">
                                                        <div className="card-body p-3 text-center">
                                                            <p className="card-text f-12">Show package payments</p>
                                                        </div>
                                                        <div className="card-footer">
                                                            <label
                                                                className="form-group toggle-switch mb-0"
                                                                htmlFor="notification_switch20"
                                                            >
                                                                <input
                                                                    type="checkbox"
                                                                    className="toggle-switch-input"
                                                                    id="notification_switch20"
                                                                />
                                                                <span className="toggle-switch-label mx-auto">
                                                                    <span className="toggle-switch-indicator" />
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col mb-3 d-flex">
                                                    <div className="card flex-fill">
                                                        <div className="card-body p-3 text-center">
                                                            <p className="card-text f-12">
                                                                Show freelancer withdraw requests
                                                            </p>
                                                        </div>
                                                        <div className="card-footer">
                                                            <label
                                                                className="form-group toggle-switch mb-0"
                                                                htmlFor="notification_switch21"
                                                            >
                                                                <input
                                                                    type="checkbox"
                                                                    className="toggle-switch-input"
                                                                    id="notification_switch21"
                                                                />
                                                                <span className="toggle-switch-label mx-auto">
                                                                    <span className="toggle-switch-indicator" />
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col mb-3 d-flex">
                                                    <div className="card flex-fill">
                                                        <div className="card-body p-3 text-center">
                                                            <p className="card-text f-12">Show freelancer payouts</p>
                                                        </div>
                                                        <div className="card-footer">
                                                            <label
                                                                className="form-group toggle-switch mb-0"
                                                                htmlFor="notification_switch22"
                                                            >
                                                                <input
                                                                    type="checkbox"
                                                                    className="toggle-switch-input"
                                                                    id="notification_switch22"
                                                                />
                                                                <span className="toggle-switch-label mx-auto">
                                                                    <span className="toggle-switch-indicator" />
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col mb-3 d-flex">
                                                    <div className="card flex-fill">
                                                        <div className="card-body p-3 text-center">
                                                            <p className="card-text f-12">Show employee roles</p>
                                                        </div>
                                                        <div className="card-footer">
                                                            <label
                                                                className="form-group toggle-switch mb-0"
                                                                htmlFor="notification_switch23"
                                                            >
                                                                <input
                                                                    type="checkbox"
                                                                    className="toggle-switch-input"
                                                                    id="notification_switch23"
                                                                />
                                                                <span className="toggle-switch-label mx-auto">
                                                                    <span className="toggle-switch-indicator" />
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col mb-3 d-flex">
                                                    <div className="card flex-fill">
                                                        <div className="card-body p-3 text-center">
                                                            <p className="card-text f-12">Show general setting</p>
                                                        </div>
                                                        <div className="card-footer">
                                                            <label
                                                                className="form-group toggle-switch mb-0"
                                                                htmlFor="notification_switch24"
                                                            >
                                                                <input
                                                                    type="checkbox"
                                                                    className="toggle-switch-input"
                                                                    id="notification_switch24"
                                                                />
                                                                <span className="toggle-switch-label mx-auto">
                                                                    <span className="toggle-switch-indicator" />
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col mb-3 d-flex">
                                                    <div className="card flex-fill">
                                                        <div className="card-body p-3 text-center">
                                                            <p className="card-text f-12">Show email setting</p>
                                                        </div>
                                                        <div className="card-footer">
                                                            <label
                                                                className="form-group toggle-switch mb-0"
                                                                htmlFor="notification_switch25"
                                                            >
                                                                <input
                                                                    type="checkbox"
                                                                    className="toggle-switch-input"
                                                                    id="notification_switch25"
                                                                />
                                                                <span className="toggle-switch-label mx-auto">
                                                                    <span className="toggle-switch-indicator" />
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col mb-3 d-flex">
                                                    <div className="card flex-fill">
                                                        <div className="card-body p-3 text-center">
                                                            <p className="card-text f-12">
                                                                Show payment gateways setting
                                                            </p>
                                                        </div>
                                                        <div className="card-footer">
                                                            <label
                                                                className="form-group toggle-switch mb-0"
                                                                htmlFor="notification_switch26"
                                                            >
                                                                <input
                                                                    type="checkbox"
                                                                    className="toggle-switch-input"
                                                                    id="notification_switch26"
                                                                />
                                                                <span className="toggle-switch-label mx-auto">
                                                                    <span className="toggle-switch-indicator" />
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col mb-3 d-flex">
                                                    <div className="card flex-fill">
                                                        <div className="card-body p-3 text-center">
                                                            <p className="card-text f-12">Show freelancer payment</p>
                                                        </div>
                                                        <div className="card-footer">
                                                            <label
                                                                className="form-group toggle-switch mb-0"
                                                                htmlFor="notification_switch27"
                                                            >
                                                                <input
                                                                    type="checkbox"
                                                                    className="toggle-switch-input"
                                                                    id="notification_switch27"
                                                                />
                                                                <span className="toggle-switch-label mx-auto">
                                                                    <span className="toggle-switch-indicator" />
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col mb-3 d-flex">
                                                    <div className="card flex-fill">
                                                        <div className="card-body p-3 text-center">
                                                            <p className="card-text f-12">
                                                                Show manual payment methods
                                                            </p>
                                                        </div>
                                                        <div className="card-footer">
                                                            <label
                                                                className="form-group toggle-switch mb-0"
                                                                htmlFor="notification_switch28"
                                                            >
                                                                <input
                                                                    type="checkbox"
                                                                    className="toggle-switch-input"
                                                                    id="notification_switch28"
                                                                />
                                                                <span className="toggle-switch-label mx-auto">
                                                                    <span className="toggle-switch-indicator" />
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col mb-3 d-flex">
                                                    <div className="card flex-fill">
                                                        <div className="card-body p-3 text-center">
                                                            <p className="card-text f-12">
                                                                Create new client package
                                                            </p>
                                                        </div>
                                                        <div className="card-footer">
                                                            <label
                                                                className="form-group toggle-switch mb-0"
                                                                htmlFor="notification_switch29"
                                                            >
                                                                <input
                                                                    type="checkbox"
                                                                    className="toggle-switch-input"
                                                                    id="notification_switch29"
                                                                />
                                                                <span className="toggle-switch-label mx-auto">
                                                                    <span className="toggle-switch-indicator" />
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col mb-3 d-flex">
                                                    <div className="card flex-fill">
                                                        <div className="card-body p-3 text-center">
                                                            <p className="card-text f-12">
                                                                Create new freelancer package
                                                            </p>
                                                        </div>
                                                        <div className="card-footer">
                                                            <label
                                                                className="form-group toggle-switch mb-0"
                                                                htmlFor="notification_switch30"
                                                            >
                                                                <input
                                                                    type="checkbox"
                                                                    className="toggle-switch-input"
                                                                    id="notification_switch30"
                                                                />
                                                                <span className="toggle-switch-label mx-auto">
                                                                    <span className="toggle-switch-indicator" />
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col mb-3 d-flex">
                                                    <div className="card flex-fill">
                                                        <div className="card-body p-3 text-center">
                                                            <p className="card-text f-12">Show dashboard</p>
                                                        </div>
                                                        <div className="card-footer">
                                                            <label
                                                                className="form-group toggle-switch mb-0"
                                                                htmlFor="notification_switch31"
                                                            >
                                                                <input
                                                                    type="checkbox"
                                                                    className="toggle-switch-input"
                                                                    id="notification_switch31"
                                                                />
                                                                <span className="toggle-switch-label mx-auto">
                                                                    <span className="toggle-switch-indicator" />
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col mb-3 d-flex">
                                                    <div className="card flex-fill">
                                                        <div className="card-body p-3 text-center">
                                                            <p className="card-text f-12">Show create roles</p>
                                                        </div>
                                                        <div className="card-footer">
                                                            <label
                                                                className="form-group toggle-switch mb-0"
                                                                htmlFor="notification_switch32"
                                                            >
                                                                <input
                                                                    type="checkbox"
                                                                    className="toggle-switch-input"
                                                                    id="notification_switch32"
                                                                />
                                                                <span className="toggle-switch-label mx-auto">
                                                                    <span className="toggle-switch-indicator" />
                                                                </span>
                                                            </label>
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
                    </div>
                </>
            </div>
        </>

    )
}

export default RolesPermission;