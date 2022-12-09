import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
// Import Images
import { Mem_icon_01,Mem_icon_02,Mem_icon_03 } from "../imagepath";

class Pagecontent extends Component {
   
    render() {
        const pathname = this.props.location.pathname.split("/")[1];
        
        return (
            <div className="category-bg">					
                <div className="row">
                    <div className="col-md-12">
                        <div className="category-menu text-center">
                            <ul>
                                <li className={pathname === "membership-plan" ? "active" : ""}><Link to="/membership-plan"><img src={Mem_icon_01} alt="icon" /> Membership Plans</Link></li>
                                <li className={pathname === "manage-membership" ? "active" : ""}><Link to="/manage-membership"><img src={Mem_icon_02} alt="icon" /> Manage Membership</Link></li>
                                <li className={pathname === "subscription" ? "active" : ""}><Link to="/subscription"><img src={Mem_icon_03} alt="icon" /> Subscription Details</Link></li>
                            </ul>	
                        </div>
                    </div>
                </div>
            </div>
         )
    }
}
export default withRouter(Pagecontent);