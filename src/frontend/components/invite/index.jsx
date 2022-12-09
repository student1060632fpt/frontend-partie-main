import React, { Component } from "react";
import { Link } from "react-router-dom";

class Invites extends Component {
   
    render() {
     
        return (
            <>
            {/* Breadcrumb */}
            <div className="breadcrumb-bar">
              <div className="container-fluid">
                <div className="row align-items-center inner-banner">
                  <div className="col-md-12 col-12 text-center">
                    <h2 className="breadcrumb-title">Invitation</h2>
                  </div>
                </div>
              </div>
            </div>
            {/* /Breadcrumb */}
            {/* Page Content */}
            <div className="content">
              <div className="container">					
                <div className="row align-items-center justify-content-center">
                  <div className="col-lg-6">
                    <div className="card">
                      <div className="card-body">
                        <form>
                          <div className="form-group">
                            <label className="h3">Email Addresses</label>
                            <textarea rows={6} className="form-control" multiple placeholder="henry@gmail.com, jane@hotmail.com, luke@email.com..." defaultValue={""} />
                          </div>
                          <div className="invite-btn">
                            <a href="#" className="btn btn-primary btn-block"><b>Send Invite</b></a>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center justify-content-center mb-5">
                  <div className="col-lg-5 text-center">
                    <h4 className="mb-3 mt-4">More ways to invite your clients</h4>
                    <div className="form-group profile-group">
                      <div className="input-group">
                        <input type="text" className="form-control" placeholder="https://www.kofejob.com/developer/daren/12454687" />
                        <div className="input-group-append">
                          <button className="btn btn-success sub-btn" type="submit"><i className="fa fa-clone" /></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>					
            {/* /Page Content */}
          </>
         )
    }
}
export default Invites;