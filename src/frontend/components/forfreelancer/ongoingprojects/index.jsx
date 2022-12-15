import React , {useEffect} from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { statusRenderListProjectForFreelancer } from "../../../../commonVariable";
import { Developer_01,Developer_02,Developer_03 } from "../../imagepath";
import { Sidebar } from '../sidebar';
import FreelancerListProject from "./FreelancerListProject";
    
const FreelacerOngoingProjects = (props) => {  
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
          <div className="col-xl-3 col-md-4 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                  <Sidebar/>
              </StickyBox>
          </div>
          <div className="col-xl-9 col-md-8">
            <div className="page-title">
              <h3>Manage Projects</h3>
            </div>
            <nav className="user-tabs mb-4">
              <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/freelancer-project-proposals"
                  >
                    My Proposals
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    to="/freelancer-ongoing-projects"
                  >
                    Ongoing Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="freelancer-completed-projects"
                  >
                    Completed Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/freelancer-cancelled-projects"
                  >
                    Cancelled Projects
                  </Link>
                </li>
              </ul>
            </nav>
            {/* project list */}
            <FreelancerListProject status={statusRenderListProjectForFreelancer.onGoing}/>
            {/* /project list */}
            {/* pagination */}
            <div className="row">
              <div className="col-md-12">
                <ul className="paginations freelancer">
                  <li>
                    <a href="#">
                      {" "}
                      <i className="fas fa-angle-left" /> Previous
                    </a>
                  </li>
                  <li>
                    <a href="#">1</a>
                  </li>
                  <li>
                    <a href="#" className="active">
                      2
                    </a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">4</a>
                  </li>
                  <li>
                    <a href="#">
                      Next <i className="fas fa-angle-right" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* /pagination */}
          </div>
        </div>
      </div>
    </div>
    {/* /Page Content */}
  </>
      )
  
}
export default FreelacerOngoingProjects;