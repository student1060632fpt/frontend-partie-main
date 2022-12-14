import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { daysRemaining } from "../../../../shared/help";
import { Developer_01, Flags_en } from "../../imagepath";
import { Sidebar } from "../sidebar";

const Manageprojects = (props) => {
  const [listProject, setListProject] = useState([]);
  const { contract_id, wallet, isSignedIn } = useSelector(
    (state) => state.wallet
  );

  const fetJobs = async () => {
    try {
      console.log({ contract_id });
      if (!contract_id) {
        return;
      }
      let data = await contract_id.get("stakingContractId").get_list_jobs();
      const myListProject = Object.entries(data).filter(
        (project) => {
          console.log(project[1]?.creator_id, "project[1]?.creator_id = ",wallet.accountId);
          return project[1]?.creator_id === wallet.accountId
        }
      );
      setListProject(myListProject);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (contract_id) {
      fetJobs();
    }
    document.body.className = "dashboard-page";

    return () => {
      document.body.className = "";
    };
  }, [isSignedIn]);
  const renderListProject = () => {
    return listProject.map((project) => {
      if (!!project[1].is_start) {
        const freelancerHired = Object.entries(project[1].freelancers).filter(freelancer=> {
          console.log({freelancer},"freelancer[1].creator[0]");
          return freelancer[1]?.creator[0]
        })
        return (
          <div className="my-projects-list">
            <div className="row">
              <div className="col-lg-10 flex-wrap">
                <div className="projects-card flex-fill">
                  <div className="card-body">
                    <div className="projects-details align-items-center">
                      <div className="project-info">
                        <span>{project[1].creator_id}</span>
                        <h2>
                          Laravel Backend Developer to finish ongoing project{" "}
                        </h2>
                        <div className="customer-info">
                          <ul className="list-details">
                            <li>
                              <div className="slot">
                                <p>Price type</p>
                                <h5>Fixed</h5>
                              </div>
                            </li>
                            <li>
                              <div className="slot">
                                <p>Location</p>
                                <h5>
                                  <img src={Flags_en} height={13} alt="Lang" />{" "}
                                  UK
                                </h5>
                              </div>
                            </li>
                            <li>
                              <div className="slot">
                                <p>Expiry</p>
                                <h5>4 Days Left</h5>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="project-hire-info">
                        <div className="content-divider" />
                        <div className="projects-amount">
                          <h3>PAT {project[1].budget / 10 ** 18}</h3>
                          <h5>in {daysRemaining(project[1].is_end)} Days</h5>
                        </div>
                        <div className="content-divider" />
                        <div className="projects-action text-center">
                          <Link
                            to={`/view-project-detail/${project[0]}`}
                            className="projects-btn"
                          >
                            View Details{" "}
                          </Link>
                          <a href="#" className="hired-detail">
                            Hired on 19 JUN 2021
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 d-flex flex-wrap">
                <div className="projects-card flex-fill">
                  <div className="card-body p-2">
                    <div className="prj-proposal-count text-center hired">
                      <h3>Hired</h3>
                      <img src={Developer_01} alt="" className="img-fluid" />
                      <p className="mb-0">{freelancerHired}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
      //if project no start yet
      return (
        <div className="my-projects-list">
          <div className="row">
            <div className="col-lg-10 flex-wrap">
              <div className="projects-card flex-fill">
                <div className="card-body">
                  <div className="projects-details align-items-center">
                    <div className="project-info">
                      <span>{project[1].creator_id} </span>
                      <h2>
                        Landing Page Redesign / Sales Page Redesign (Not Entire
                        Web){" "}
                      </h2>
                      <div className="customer-info">
                        <ul className="list-details">
                          <li>
                            <div className="slot">
                              <p>Price type</p>
                              <h5>Fixed</h5>
                            </div>
                          </li>
                          <li>
                            <div className="slot">
                              <p>Location</p>
                              <h5>
                                <img src={Flags_en} height={13} alt="Lang" /> UK
                              </h5>
                            </div>
                          </li>
                          <li>
                            <div className="slot">
                              <p>Expiry</p>
                              <h5>4 Days Left</h5>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="project-hire-info">
                      <div className="content-divider" />
                      <div className="projects-amount">
                        <h3>PAT {project[1].budget / 10 ** 18}</h3>
                        <h5>in {daysRemaining(project[1].is_end)} Days</h5>
                      </div>
                      <div className="content-divider" />
                      <div className="projects-action">
                        <Link
                          to={`/project-proposals/${project[0]}`}
                          className="projects-btn"
                        >
                          View Proposals{" "}
                        </Link>
                        <Link to="/edit-project" className="projects-btn">
                          Edit Jobs
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 d-flex flex-wrap">
              <div className="projects-card flex-fill">
                <div className="card-body p-2">
                  <div className="prj-proposal-count text-center">
                    <span>{Object.entries(project[1].freelancers).length}</span>
                    <h3>Proposals</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

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
              {renderListProject()}

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
