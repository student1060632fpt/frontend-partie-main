import React from 'react'
import { Link } from "react-router-dom";

function Pageheader() {
    return (
        <>
            {/* Page Header */}
            <div className="page-header subscribe-head">
                <div className="row align-items-center">
                    <div className="col">
                        <h3 className="page-title">Subscriber List</h3>
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to="/admin/index">Home</Link>
                            </li>
                            <li className="breadcrumb-item active">Subscriber List</li>
                        </ul>
                    </div>
                    <div className="col-auto">
                        
                    <Link to="/admin/view-price-employe" className="btn add-button me-2">
                            View Pricing
                        </Link>
                        <Link
                            className="btn filter-btn"
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#add-plan-employe"
                        >
                            New Subscription
                        </Link>
                    </div>
                </div>
            </div>
            {/* /Page Header */}
        </>
    )
}

export default Pageheader;