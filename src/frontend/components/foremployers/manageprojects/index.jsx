import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import Project from "../../../../api/entity/project";
import { ListProjectManagement } from "../../common";

import { Sidebar } from "../sidebar";

const Manageprojects = (props) => {
  
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
                <Sidebar />
              </StickyBox>
            </div>
            {/* /sidebar */}
            <div className="col-xl-9 col-md-8">
              <div className="page-title">
                <div className="row">
                  <div className="col-md-6">
                    <h3>Manage Projects</h3>
                  </div>
                  <div className="col-md-6 text-end">
                    <Link
                      to="/post-project"
                      className="btn btn-primary back-btn mb-4"
                    >
                      Post a Project
                    </Link>
                  </div>
                </div>
              </div>
              <nav className="user-tabs project-tabs">
                <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                  <li className="nav-item">
                    <Link className="nav-link active" to="/manage-projects">
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
              <ListProjectManagement/>

              {/* project list 5*/}

              {/* /project list */}
              {/* pagination */}
              <div className="row">
                <div className="col-md-12">
                  <ul className="paginations list-pagination">
                    <li>
                      <a href="#">
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
    </>
  );
};
export default Manageprojects;
