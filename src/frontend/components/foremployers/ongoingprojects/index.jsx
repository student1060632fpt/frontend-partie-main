import React , {useEffect} from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { statusRenderListProject } from "../../../../commonVariable";
import { ListProjectManagement } from "../../common";
import { Developer_01,Flags_en } from "../../imagepath";
import { Sidebar } from '../sidebar';
    
const OngoingProjects = (props) => {  
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
            {/* sidebar */}
            <div className="col-xl-3 col-md-4 theiaStickySidebar">
                <StickyBox offsetTop={20} offsetBottom={20}>
                    <Sidebar/>
                </StickyBox>
            </div>
            {/* /sidebar */}
            <div className="col-xl-9 col-md-8">
              <div className="page-title">
                <h3>Manage Projects</h3>
              </div>
              <nav className="user-tabs project-tabs">
                <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                <li className="nav-item">
                  <Link className="nav-link" to="/manage-projects">
                    All Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/pending-projects">
                    Pending Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/ongoing-projects">
                    Ongoing Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/completed-projects">
                    Completed Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/cancelled-projects">
                    Cancelled Projects
                  </Link>
                </li>
                </ul>
              </nav>
              <ListProjectManagement status={statusRenderListProject.onGoing}/>
              {/* pagination */}
              <div className="row">
                <div className="col-md-12">
                  <ul className="paginations list-pagination">
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
export default OngoingProjects;