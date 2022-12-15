import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Project from "../../../api/entity/project";
import { statusRenderListProject } from "../../../commonVariable";
import { daysRemaining } from "../../../shared/help";
import { Developer_01, Flags_en } from "../../components/imagepath";
const ListProjectManagement = ({ status = "" }) => {
  const [listProject, setListProject] = useState([]);
  const { contract_id, wallet, isSignedIn } = useSelector(
    (state) => state.wallet
  );

  const fetJobs = async () => {
    try {
      if (!contract_id) {
        return;
      }
      let data = await contract_id.get("stakingContractId").get_list_jobs();
      const convertListProject = Object.entries(data).map((item) => {
        return new Project(item);
      });
      console.log("convertListProject", convertListProject);
      const myListProject = convertListProject.filter((project) => {
        return project.creator_id === wallet.accountId;
      });
      setListProject(myListProject);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (contract_id) {
      fetJobs();
    }
  }, [isSignedIn]);

  const renderListProjectIsStarted = (project) => {
    console.log(project, "project.freelancers", project.freelancers);
    const freelancerHiredStatus = project.freelancers.find((freelancer) => {
      console.log({ freelancer }, "freelancer.creator[0]");
      return freelancer?.creatorConfirm;
    });
    console.log(freelancerHiredStatus);
    const freelancerHired = freelancerHiredStatus.name;
    console.log({ freelancerHired });
    return (
      <div className="my-projects-list" key={project.projectId}>
        <div className="row">
          <div className="col-lg-10 flex-wrap">
            <div className="projects-card flex-fill">
              <div className="card-body">
                <div className="projects-details align-items-center">
                  <div className="project-info">
                    <span>{project.creator_id}</span>
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
                      <h3>PAT {project.budget / 10 ** 18}</h3>
                      <h5>in {daysRemaining(project.is_end)} Days</h5>
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
  };
  const renderListProjectNoStarted = (project) => {
    return (
      <div className="my-projects-list" key={project.creator_id}>
        <div className="row">
          <div className="col-lg-10 flex-wrap">
            <div className="projects-card flex-fill">
              <div className="card-body">
                <div className="projects-details align-items-center">
                  <div className="project-info">
                    <span>{project.creator_id} </span>
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
                      <h3>PAT {project.budget / 10 ** 18}</h3>
                      <h5>in {daysRemaining(project.is_end)} Days</h5>
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
                  <span>{Object.entries(project.freelancers).length}</span>
                  <h3>Proposals</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const renderListProject = () => {
    //status ongoing project only
    if (status === statusRenderListProject.onGoing) {
      return listProject.map((project) => {
        if (!!project.is_start) {
          return renderListProjectIsStarted(project);
        }
        return <></>

      });
    } else if (status === statusRenderListProject.pending){
      return listProject.map((project) => {
        if (!!project.is_start) {
          return <></>;
        }
        return renderListProjectNoStarted(project);
      });
    }
    //all project
    return listProject.map((project) => {
      if (!!project.is_start) {
        return renderListProjectIsStarted(project);
      }
      //if project no start yet
      return renderListProjectNoStarted(project);
    });
  };
  return <>{renderListProject()}</>;
};

export default ListProjectManagement;
