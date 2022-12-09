import React from 'react'

function Addplan() {
    return (
        <>
            {/* Add Modal */}
            <div className="modal fade custom-modal" id="add-plan-employe">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header flex-wrap add-plan-head">
                            <h4 className="modal-title">Add Plan</h4>
                            <button type="button" className="close" data-bs-dismiss="modal">
                                <span>×</span>
                            </button>
                        </div>
                        <div className="modal-body add-plan">
                            <form>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label>
                                                Plan Name <span>*</span>
                                            </label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label>
                                                Plan Type <span>*</span>
                                            </label>
                                            <select className="form-control form-select">
                                                <option>Select</option>
                                                <option>Frontend Developer</option>
                                                <option>Graphic Designer</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>
                                                Plan Amount <span>*</span>
                                            </label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label>
                                                Project Credits <span>*</span>
                                            </label>
                                            <select className="form-control form-select">
                                                <option>Select</option>
                                                <option>Frontend Developer</option>
                                                <option>Graphic Designer</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label>
                                                No of Projects <span>*</span>
                                            </label>
                                            <select className="form-control form-select">
                                                <option>Select</option>
                                                <option>Frontend Developer</option>
                                                <option>Graphic Designer</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label>
                                                Project Visibility <span>*</span>
                                            </label>
                                            <select className="form-control form-select">
                                                <option>Select</option>
                                                <option>Frontend Developer</option>
                                                <option>Graphic Designer</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label>
                                                Featured Service <span>*</span>
                                            </label>
                                            <select className="form-control form-select">
                                                <option>Select</option>
                                                <option>Frontend Developer</option>
                                                <option>Graphic Designer</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>
                                                Plan Description <span>*</span>
                                            </label>
                                            <textarea
                                                className="form-control"
                                                rows={5}
                                                id="comment"
                                                name="text"
                                                defaultValue={""}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>
                                            Status <span>*</span>
                                        </label>
                                        <div className="status-toggle d-flex justify-content-between align-items-center">
                                            <input
                                                type="checkbox"
                                                id="status_1"
                                                className="check"
                                                defaultChecked=""
                                            />
                                            <label htmlFor="status_1" className="checktoggle" />
                                        </div>
                                    </div>
                                </div>
                                <div className="plan-btn text-center">
                                    <button type="submit" className="btn btn-primary remove-form">
                                        Close
                                    </button>
                                    <button type="submit" className="btn btn-primary save-form">
                                        Save Plan
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Add Modal */}
        </>
    )
}

export default Addplan;