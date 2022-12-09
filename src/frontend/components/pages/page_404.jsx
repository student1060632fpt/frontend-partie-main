import React, {useEffect} from "react";
import { Link } from "react-router-dom";
// Import Images
import { Img_404 } from "../imagepath";

const Page404 = () => {
  useEffect(() => {
   
    document.body.className = 'dashboard-page';
    return () => { document.body.className = ''; }
  });
        return (
          <>
          {/* Page Content */}
          <div className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-8 offset-md-2">
                  {/* Page Not Found */}
                  <div className="empty-content text-center">
                    <img src={Img_404} alt="logo" className="img-fluid" />
                    <h2>
                      Page not <span className="orange-text">found</span>
                    </h2>
                    <p>Oops! Looks like you followed a bad link.</p>
                    <p>If you think this is a problem with us, please tell us.</p>
                    <div className="btn-item">
                      <Link className="btn get-btn" to="/index">
                        GO TO HOME
                      </Link>
                      <a className="btn courses-btn" href="#">
                        BACK
                      </a>
                    </div>
                  </div>
                  {/* / Page Not Found */}
                </div>
              </div>
            </div>
          </div>
          {/* /Page Content */}
        </>
         )
    
}
export default Page404;