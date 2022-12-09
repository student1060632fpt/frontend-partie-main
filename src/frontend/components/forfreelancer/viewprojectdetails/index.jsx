import React , {useEffect} from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { Img_04,Flags_en  } from "../../imagepath";
import { Sidebar } from '../sidebar';
    
const FreelancerViewProjectdetails = (props) => {  
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
                    className="nav-link active"
                    to="/freelancer-view-project-detail"
                  >
                    Overview &amp; Discussions
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/freelancer-milestones">
                    Milestones
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/freelancer-task">
                    Tasks
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/freelancer-files">
                    Files
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/freelancer-payment">
                    Payments
                  </Link>
                </li>
              </ul>
            </nav>
            {/* project list */}
            <div className="my-projects">
              <div className="row">
                <div className="col-lg-9 d-flex">
                  <div className="pro-post w-100">
                    <div className="card-body">
                      <div className="projects-list">
                        <h2>3D Renders and Amazon Product Store images/Video</h2>
                        <ul className="prolist-details">
                          <li>
                            <div className="list-slot">
                              <h5>Client Final Price</h5>
                              <p className="price">$19.00</p>
                              <p className="mb-0">( FIXED )</p>
                            </div>
                          </li>
                          <li>
                            <div className="list-slot">
                              <h5>Job Type</h5>
                              <p className="red-text">Hourly</p>
                            </div>
                          </li>
                          <li>
                            <div className="list-slot">
                              <h5>Location</h5>
                              <p>
                                <img
                                  src={Flags_en}
                                  height={13}
                                  alt="Lang"
                                />{" "}
                                Germany
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 mb-3 d-flex flex-wrap">
                  <div className="pro-post mb-3 w-100">
                    <div className="card-body">
                      <div className="hire-box text-center">
                        <h6>Hired</h6>
                        <img
                          alt="profile image"
                          src={Img_04}
                          className="avatar-lg rounded-circle"
                        />
                        <p>Hannah Finn - Client</p>
                        <Link to="/freelancer-chats" className="btn btn-chat">
                          Chat Now
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="hire-select w-100">
                    <select className="form-control select">
                      <option> Is job completed?</option>
                      <option>Ongoing</option>
                      <option>Completed</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            {/* /project list */}
            {/* Overview */}
            <div className="pro-post widget-box">
              <h3 className="pro-title">Overview</h3>
              <div className="pro-overview">
                <h4>Senior Animator</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                  tempor aliquam felis, nec condimentum ipsum commodo id. Vivamus
                  sit amet augue nec urna efficitur tincidunt. Vivamus consectetur
                  aliquam lectus commodo viverra. Nunc eu augue nec arcu efficitur
                  faucibus. Aliquam accumsan ac magna convallis bibendum. Quisque
                  laoreet augue eget augue fermentum scelerisque. Vivamus
                  dignissim mollis est dictum blandit. Nam porta auctor neque sed
                  congue. Nullam rutrum eget ex at maximus. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Donec eget vestibulum lorem.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                  tempor aliquam felis, nec condimentum ipsum commodo id. Vivamus
                  sit amet augue nec urna efficitur tincidunt. Vivamus consectetur
                  aliquam lectus commodo viverra. Nunc eu augue nec arcu efficitur
                  faucibus.{" "}
                </p>
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                  tempor aliquam felis, nec condimentum ipsum commodo id. Vivamus
                  sit amet augue nec urna efficitur tincidunt. Vivamus consectetur
                  aliquam lectus commodo viverra. Nunc eu augue nec arcu efficitur
                  faucibus.
                </p>
              </div>
            </div>
            {/* /Overview */}
            {/* Skills Required */}
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
            {/* /Skills Required */}
          </div>
        </div>
      </div>
    </div>
    {/* /Page Content */}
  </>
      )
  
}
export default FreelancerViewProjectdetails;