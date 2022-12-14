import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { truncateText } from "../../../../shared/help";
import {
  Avatar_1,
  Avatar_2,
  Avatar_3,
  Flags_en,
  Logo_01,
} from "../../imagepath";
import { Sidebar } from "../sidebar";
import ModalHireFreelancer from "./components/ModalHireFreelancer";

const Projectproposal = () => {
  const [project, setProject] = useState({
    creator_id: "dollnguyen.testnet",
    budget: 1000,
    freelancers: {},
    is_start: false,
    is_end: false,
    voting_id: "",
  });
  const [modalHireFreelancer, setModalHireFreelancer] = useState({
    visible: false,
    freelancer_id: ''
  })

  const param = useParams();
  const projectId = param?.id;

  const { isSignedIn, contract_id } = useSelector((state) => state.wallet);

  const fetchProjectsDetail = async () => {
    try {
      let projectReturn = await contract_id
        .get("stakingContractId")
        .show_jobs(projectId);
      if (!projectReturn) {
        return;
      }
      console.log("jobs: ", projectReturn);
      setProject((prev) => ({ ...prev, ...projectReturn }));
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    if (!isSignedIn || !contract_id) {
      return;
    }
    fetchProjectsDetail();
  }, [isSignedIn]);

  const renderListProposal = () => {
    if (!project.freelancers) {
      return <></>;
    }
    return Object.entries(project.freelancers).map((proposalDetail, index) => {
      return (
        <div className="project-proposals align-items-center" key={index}>
          <div className="proposals-info">
            <div className="proposer-info">
              <div className="proposer-img">
                <img src={Avatar_1} alt="" className="img-fluid" />
              </div>
              <div className="proposer-detail">
                <h4>{truncateText(proposalDetail[0])}</h4>
                <ul className="proposal-details">
                  <li> February 26, 2021</li>
                  <li>
                    <i className="fas fa-star text-primary" /> 4 Reviews
                  </li>
                  <li>
                    {" "}
                    <Link
                      to="/freelancer-profile"
                      className="font-semibold text-primary"
                    >
                      View Profile
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="proposer-bid-info">
              <div className="proposer-bid">
                <h3>in 11 Days</h3>
              </div>
              <div className="proposer-confirm">
                <a
                  data-bs-toggle="modal"
                  href="#hire"
                  className="projects-btn"
                  onClick={() => setModalHireFreelancer(prev=>({...prev, freelancer_id: proposalDetail[0]}))}
                >
                  Hire Now
                </a>
              </div>
            </div>
          </div>
          <div className="description-proposal">
            <h5 className="desc-title">Description</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. At diam
              sit erat et eros. Et cursus tellus viverra adipiscing suspendisse.
              Semper arcu est eget eleifend. Faucibus elit massa sollicitudin
              elementum ut feugiat nunc ac. Turpis quam sed in sed curabitur
              netus laoreet. In tortor neque sapien praesent porttitor cursus
              sed cum
              <span id="dots">...</span>
              <span id="more">
                Turpis quam sed in sed curabitur netus laoreet. In tortor neque
                sapien praesent porttitor cursus
              </span>
              <span id="myBtn" className="text-primary font-bold readmore">
                Readmore
              </span>
            </p>
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <div className="breadcrumb-bar">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <h2 className="breadcrumb-title">Dashboard</h2>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/index">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Dashboard
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* Page Content */}
      <div className="content">
        <div className="container">
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
                <h3>Proposals</h3>
              </div>
              {/* project list */}
              <div className="my-projects-list">
                <div className="row">
                  <div className="col-lg-10 flex-wrap">
                    <div className="projects-card flex-fill">
                      <div className="card-body">
                        <div className="projects-details align-items-center">
                          <div className="project-info">
                            <span>{project.creator_id}</span>
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
                            <div className="projects-amount proposals">
                              <h3>PAT {project.budget}</h3>
                              <h5>in 12 Days</h5>
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
                          <span>
                            {Object.entries(project.freelancers).length}
                          </span>
                          <h3>Proposals</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /project list */}
              {/* Proposals list */}
              <div className="proposals-section mb-4">
                <h3 className="page-subtitle">Proposals By freelancer</h3>
                <div className="proposal-card">
                  {/* Proposals */}
                  {renderListProposal()}

                  {/* Proposals */}
                </div>
              </div>
              {/* /Proposals list */}
              {/* pagination */}
              <div className="row">
                <div className="col-md-12">
                  <ul className="paginations">
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
      <ModalHireFreelancer modal={modalHireFreelancer}/>
      {/* /The Modal */}
    </>
  );
};
export default Projectproposal;
