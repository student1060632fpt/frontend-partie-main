import React from 'react'
import { logo_small } from '../imagepath'

function EditUser() {

    return (
        <>
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
        </>
    )
}

export default EditUser;