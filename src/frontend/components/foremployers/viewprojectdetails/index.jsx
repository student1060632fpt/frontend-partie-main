import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { ProjectDetail } from "../../../../api/entity/project";
import { statusRenderListProject } from "../../../../commonVariable";
import { Flags_en, Developer_01 } from "../../imagepath";
import { Sidebar } from "../sidebar";

const ViewProjectdetails = () => {
  const [projectDetail, setprojectDetail] = useState({
    creator_id: "dollnguyen.testnet",
    budget: 1000,
    freelancers: {},
    is_start: false,
    is_end: false,
    voting_id: "",
  });
  const [freelancerHiredName, setFreelancerHiredName] = useState("");

  const [selectProjectStatus, setSelectProjectStatus] = useState(
    statusRenderListProject.onGoing
  );
  const { isSignedIn, contract_id, wallet } = useSelector(
    (state) => state.wallet
  );
  const param = useParams();
  const projectId = param?.id;

  const convertSmcToProject = (projectReturn) => {
    console.log({ projectReturn });
    const projectObject = new ProjectDetail({ ...projectReturn });
    console.log("jobs: ", projectObject);
    setprojectDetail(projectObject);
    const meFreelancer = projectObject.freelancers.find(
      (freelancer) => freelancer.creatorConfirm
    );
    console.log(
      { meFreelancer },
      "meFreelancer.creatorEnd",
      !!meFreelancer.creatorEnd
    );

    //select
    if (!!meFreelancer.creatorEnd) {
      console.log("meFreelancer.creatorEnd", meFreelancer.creatorEnd);
      setSelectProjectStatus(statusRenderListProject.complete);
    } else if (!!meFreelancer.freelancerGetJob && !meFreelancer.creatorEnd) {
      console.log(
        "meFreelancer.freelancerGetJob",
        meFreelancer.freelancerGetJob
      );
      setSelectProjectStatus(statusRenderListProject.onGoing);
    }

    //free name
    const freelancerHiredStatus = projectObject.freelancers.find(
      (freelancer) => {
        return freelancer?.creatorConfirm;
      }
    );
    const freelancerHired = freelancerHiredStatus;
    setFreelancerHiredName(freelancerHired);
  };

  const fetchJobsDetail = async () => {
    try {
      let projectReturn = await contract_id
        .get("stakingContractId")
        .show_jobs(projectId);

      convertSmcToProject(projectReturn);
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    if (!isSignedIn || !contract_id) {
      return;
    }
    fetchJobsDetail();
  }, [isSignedIn]);
  useEffect(() => {
    document.body.className = "dashboard-page";
    return () => {
      document.body.className = "";
    };
  }, []);
  const handleChange = async (event) => {
    const status = event.target.value;
    console.log(status);
    setSelectProjectStatus(status);
    if (status === statusRenderListProject.complete) {
      try {
        return await contract_id
          .get("stakingContractId")
          .end_jobs(projectId, freelancerHiredName.name);
      } catch (error) {
        console.log({ error });
      }
    }
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
              <nav className="user-tabs mb-4">
                <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                  <li className="nav-item">
                    <Link className="nav-link active" to="/view-project-detail">
                      Overview &amp; Discussions
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/milestones">
                      Milestones
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/tasks">
                      Tasks
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/files">
                      Files
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/project-payment">
                      Payments
                    </Link>
                  </li>
                </ul>
              </nav>
              {/* project list */}
              <div className="my-projects">
                {/* project list */}
                <div className="my-projects-list pro-list-view">
                  <div className="row">
                    <div className="col-lg-10 flex-wrap">
                      <div className="projects-card flex-fill">
                        <div className="card-body">
                          <div className="projects-details align-items-center">
                            <div className="project-info">
                              <h2>
                                Website Designer Required For Directory Theme
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
                                        <img
                                          src={Flags_en}
                                          height={13}
                                          alt="Lang"
                                        />{" "}
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
                                <h3>PAT {projectDetail.budget}</h3>
                                <h5>in 12 Days</h5>
                              </div>
                              <div className="content-divider" />
                              <div className="projects-action text-center">
                                <a href="#" className="hired-detail">
                                  Hired on 19 JUN 2021
                                </a>
                                <div className="pro-status">
                                  <div className="hire-select">
                                    <select
                                      className="form-control select"
                                      value={selectProjectStatus}
                                      onChange={handleChange}
                                    >
                                      <option
                                        value={statusRenderListProject.onGoing}
                                      >
                                        Ongoing
                                      </option>
                                      <option
                                        value={statusRenderListProject.complete}
                                      >
                                        Completed
                                      </option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 d-flex flex-wrap">
                      <div className="projects-card flex-fill">
                        <div className="card-body">
                          <div className="prj-proposal-count text-center hired">
                            <img
                              src={Developer_01}
                              alt=""
                              className="img-fluid"
                            />
                            <p className="mb-2">{freelancerHiredName.name}</p>
                            <Link to="/chats" className="btn btn-chat">
                              Chat Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /project list */}
              </div>
              <div className="pro-post widget-box">
                <h3 className="pro-title">Overview</h3>
                <div className="pro-overview">
                  <h4>Senior Animator</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque tempor aliquam felis, nec condimentum ipsum commodo
                    id. Vivamus sit amet augue nec urna efficitur tincidunt.
                    Vivamus consectetur aliquam lectus commodo viverra. Nunc eu
                    augue nec arcu efficitur faucibus. Aliquam accumsan ac magna
                    convallis bibendum. Quisque laoreet augue eget augue
                    fermentum scelerisque. Vivamus dignissim mollis est dictum
                    blandit. Nam porta auctor neque sed congue. Nullam rutrum
                    eget ex at maximus. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Donec eget vestibulum lorem.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque tempor aliquam felis, nec condimentum ipsum commodo
                    id. Vivamus sit amet augue nec urna efficitur tincidunt.
                    Vivamus consectetur aliquam lectus commodo viverra. Nunc eu
                    augue nec arcu efficitur faucibus.{" "}
                  </p>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque tempor aliquam felis, nec condimentum ipsum commodo
                    id. Vivamus sit amet augue nec urna efficitur tincidunt.
                    Vivamus consectetur aliquam lectus commodo viverra. Nunc eu
                    augue nec arcu efficitur faucibus.
                  </p>
                </div>
              </div>
              <div className="pro-post widget-box">
                <h3 className="pro-title">Skills Required</h3>
                <div className="pro-content">
                  <div className="tags">
                    <span className="badge badge-pill badge-design">
                      After Effects
                    </span>
                    <span className="badge badge-pill badge-design">
                      Illustrator
                    </span>
                    <span className="badge badge-pill badge-design">HTML</span>
                    <span className="badge badge-pill badge-design">
                      Whiteboard
                    </span>
                    <span className="badge badge-pill badge-design">HTML</span>
                    <span className="badge badge-pill badge-design">
                      Whiteboard
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* project list */}
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </>
  );
};
export default ViewProjectdetails;
