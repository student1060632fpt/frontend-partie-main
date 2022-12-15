import React , {useEffect} from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { statusRenderListProject } from "../../../../commonVariable";
import { ListProjectManagement } from "../../common";
import { Flags_en,Developer_01 } from "../../imagepath";
import { Sidebar } from '../sidebar';
    
const CompletedProjects = (props) => {  
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
                  <Link className="nav-link" to="/ongoing-projects">
                    Ongoing Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/completed-projects">
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
            {/* project list */}

            <ListProjectManagement status={statusRenderListProject.complete}/>
           
            {/* /project list */}
            
        
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
    {/* The Modal */}
  <div className="modal fade" id="file">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Review Freelancer</h4>
          <span className="modal-close">
            <a href="#" data-bs-dismiss="modal" aria-label="Close">
              <i className="far fa-times-circle" />
            </a>
          </span>
        </div>
        <div className="modal-body">
          <div className="modal-info">
            <form>
              <div className="form-row">
                <div className="form-group col-12">
                  <label>Write Feedback</label>
                  <textarea
                    className="form-control"
                    name="message"
                    rows={5}
                    placeholder="Comment Here"
                    defaultValue={""}
                  />
                </div>
                <div className="col-12">
                  <h5>Ratings</h5>
                </div>
                <div className="form-group col-md-4">
                  <p className="mb-2 rating-text">Overall Ratings</p>
                  <div className="rating red">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star" />
                  </div>
                </div>
              </div>
              <div className="submit-section text-end mt-2">
                <button type="submit" className="btn btn-primary update-btn">
                  update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /The Modal */}
  </>
      )
  
}
export default CompletedProjects;