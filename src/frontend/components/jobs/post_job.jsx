import React from 'react';
import { Link } from "react-router-dom";

class PostJob extends React.Component {
    render() {
        return(
            <>            
            {/* Page Content */}
            <div className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                        {/* Post A job */}
                            <div className="empty-content text-center">
                                <h2>Please <span className="orange-text">Login</span> to Post A job </h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat mauris </p>
                                <div className="btn-item">
                                    <Link className="btn get-btn" to="/">Cancel</Link>
                                    <Link className="btn courses-btn" to="/login">GO TO Login</Link>
                                </div>
                            </div>
                        {/* /Post A job */}
                        </div>
                    </div>
                </div>
            </div>					
            {/* /Page Content */}
            </>
        )
    }
}
export default PostJob;