import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { Da_icon_01,Da_icon_02,Da_icon_03,Da_icon_04 } from "../imagepath"

class Projects extends Component {
   
    render() {
        const pathname = this.props.location.pathname.split("/")[1];
     
        return (
            <>
             <div className="category-bg">					
                <div className="row">
                <div className="col-md-12">
                    <div className="category-menu text-center">
                    <ul>
                        <li className={pathname === "user-dashboard" ? "active" : ""}><Link to="/user-dashboard"><img src={Da_icon_01} alt="icon" /> My Projects</Link></li>
                        <li className={pathname === "user-dashboard" ? "active" : ""}><Link to="/user-dashboard"><img src={Da_icon_02} alt="icon" />  User Dashboard</Link></li>
                        <li className={pathname === "chats" ? "active" : ""}><Link to="/chats"><img src={Da_icon_03} alt="icon" /> Inbox</Link></li>
                        <li className={pathname === "feedback" ? "active" : ""}><Link to="/feedback"><img src={Da_icon_04} alt="icon" /> Feedback</Link></li>
                    </ul>	
                    </div>
                </div>
                </div>
            </div>
            </>
         )
    }
}
export default withRouter(Projects);