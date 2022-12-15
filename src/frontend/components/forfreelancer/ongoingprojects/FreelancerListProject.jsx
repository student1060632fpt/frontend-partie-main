import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Project from "../../../../api/entity/project";
import { statusRenderListProjectForFreelancer } from "../../../../commonVariable";
import { truncateText } from "../../../../shared/help";
import { Developer_01, Developer_02, Developer_03 } from "../../imagepath";

const FreelancerListProject = ({ status = "" }) => {
  // fetch Project
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
      const listProject = [];
      convertListProject.map((project) => {
        const isMyProject = project.freelancers.findIndex((freelancer) => {
          return freelancer.name == wallet.accountId;
        });
        if (isMyProject !== -1) {
          listProject.push(project);
        }
      });
      setListProject(listProject);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (contract_id) {
      fetJobs();
    }
  }, [isSignedIn]);
  // fetch Project
  const renderListProjectIsStarted = (project) => {
    console.log(project, "project.freelancers", project.freelancers);
   
    return (
      <div className="my-projects-list">
        <div className="row">
          <div className="col-lg-12 flex-wrap">
            <div className="projects-card flex-fill">
              <div className="card-body">
                <div className="projects-details align-items-center">
                  <div className="project-info project">
                    <span>{truncateText(project.creator_id)}</span>
                    <h2>Website Designer Required For Directory Theme</h2>
                    <div className="proposal-client">
                      <h4 className="title-info">Client Price</h4>
                      <div className="d-flex">
                        <h3 className="client-price me-2">PAT {project.budget}</h3>
                        <p className="amnt-type">( FIXED )</p>
                      </div>
                    </div>
                  </div>
                  <div className="project-hire-info project">
                    <div className="content-divider" />
                    <div className="proposer-info project">
                      <div className="proposer-img">
                        <img src={Developer_01} alt="" className="img-fluid" />
                      </div>
                      <div className="proposer-detail">
                        <h4>{wallet.accountId}</h4>
                        <ul className="proposal-details">
                          <li> October 10, 2021</li>
                          <li>
                            <i className="fas fa-star text-primary" /> 4 Reviews
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="content-divider" />
                    <div className="projects-action text-start project">
                      <Link
                        to={`/freelancer-view-project-detail/${project.projectId}`}
                        className="projects-btn project"
                      >
                        View Details{" "}
                      </Link>
                      <p className="hired-detail">Project taken on</p>
                      <p className="hired-date">28 October 2021</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderListProjectNoStarted = () => {
    return <></>;
  };
  console.log({ status });
  const renderListProject = () => {
    //status ongoing project only
    if (status === statusRenderListProjectForFreelancer.onGoing) {
      console.log(listProject);
      return listProject.map((project) => {
        if (!!project.is_start) {
          return renderListProjectIsStarted(project);
        }
        return <></>;
      });
    } else if (status === statusRenderListProjectForFreelancer.pending) {
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

export default FreelancerListProject;
