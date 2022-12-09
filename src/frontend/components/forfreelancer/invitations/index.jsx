import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { Flags_us,Flags_de,company_img5,company_img6,company_img7,company_img8,company_img9 } from "../../imagepath";
import { Sidebar } from '../sidebar';
    
const FreelancerInvitations = (props) => {  
    useEffect(() => {
        document.body.className = 'dashboard-page';
        return () => { document.body.className = ''; }
      });
  return (
    <>
    {/* Page Content */}
    <div className="content bookmark">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-3 col-md-4 theiaStickySidebar">
          <StickyBox offsetTop={20} offsetBottom={20}>
                  <Sidebar/>
              </StickyBox>
          </div>
          <div className="col-xl-9 col-md-8">
            <nav className="user-tabs mb-4">
              <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                <li className="nav-item">
                  <Link className="nav-link" to="/freelancer-favourites">
                    Bookmarked Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    to="/freelancer-invitations"
                  >
                    Invitations
                  </Link>
                </li>
              </ul>
            </nav>
            {/* project list */}
            <div className="my-projects-view">
              <div className="row">
                <div className="col-lg-12">
                  <div className="pro-post mb-4">
                    <div className="project-table">
                      <div className="table-responsive">
                        <h3>INVITATIONS</h3>
                        <table className="table table-hover table-center mb-0 datatable">
                          <thead className="thead-pink">
                            <tr>
                              <th>Project name</th>
                              <th>Client Detail</th>
                              <th>Invite date </th>
                              <th>Location</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                3D Renders and Amazon Product Store images/Video
                              </td>
                              <td>
                                <h2 className="table-avatar">
                                  <Link
                                    to="/project-details"
                                    className="avatar avatar-md tab-imgcircle me-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src={company_img5}
                                      alt="User Image"
                                    />
                                  </Link>
                                  <Link to="/project-details">
                                    <span className="profile-name">
                                      Host Technologies{" "}
                                    </span>
                                    <span>UI/UX Designer</span>
                                    <span className="rating mt-2">
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star" />
                                    </span>
                                  </Link>
                                </h2>
                              </td>
                              <td>18 Oct 2021</td>
                              <td>
                                <h2 className="table-avatar">
                                  <img
                                    src={Flags_us}
                                    className="me-2"
                                    alt=""
                                    height={16}
                                  />{" "}
                                  USA
                                </h2>
                              </td>
                              <td>
                                <div className="table-action">
                                  <a href="" className="me-2">
                                    <i className="fab fa-rocketchat" />
                                  </a>
                                  <a
                                    href=""
                                    className="orange-text"
                                  >
                                    <i className="material-icons">delete_sweep</i>
                                  </a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                Website Designer Required For Directory Theme
                              </td>
                              <td>
                                <h2 className="table-avatar">
                                  <Link
                                    to="/project-details"
                                    className="avatar avatar-md tab-imgcircle me-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src={company_img6}
                                      alt="User Image"
                                    />
                                  </Link>
                                  <Link to="/project-details">
                                    <span className="profile-name">
                                      Alfred Tech{" "}
                                    </span>
                                    <span>PHP Developer</span>
                                    <span className="rating mt-2">
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star" />
                                    </span>
                                  </Link>
                                </h2>
                              </td>
                              <td>19 Oct 2021</td>
                              <td>
                                <h2 className="table-avatar">
                                  <img
                                    src={Flags_de}
                                    className="me-2"
                                    alt=""
                                    height={16}
                                  />{" "}
                                  GERMANY
                                </h2>
                              </td>
                              <td>
                                <div className="table-action">
                                  <a href="" className="me-2">
                                    <i className="fab fa-rocketchat" />
                                  </a>
                                  <a
                                    href=""
                                    className="orange-text"
                                  >
                                    <i className="material-icons">delete_sweep</i>
                                  </a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                WooCommerce Product Page Back Up Restoration
                              </td>
                              <td>
                                <h2 className="table-avatar">
                                  <Link
                                    to="/project-details"
                                    className="avatar avatar-md tab-imgcircle me-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src={company_img7}
                                      alt="User Image"
                                    />
                                  </Link>
                                  <Link to="/project-details">
                                    <span className="profile-name">
                                      Kind Softwares{" "}
                                    </span>
                                    <span>Graphic Designer</span>
                                    <span className="rating mt-2">
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star" />
                                    </span>
                                  </Link>
                                </h2>
                              </td>
                              <td>20 Oct 2021</td>
                              <td>
                                <h2 className="table-avatar">
                                  <img
                                    src={Flags_de}
                                    className="me-2"
                                    alt=""
                                    height={16}
                                  />{" "}
                                  GERMANY
                                </h2>
                              </td>
                              <td>
                                <div className="table-action">
                                  <a href="" className="me-2">
                                    <i className="fab fa-rocketchat" />
                                  </a>
                                  <a
                                    href=""
                                    className="orange-text"
                                  >
                                    <i className="material-icons">delete_sweep</i>
                                  </a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                Laravel Backend Developer to finish ongoing
                                project
                              </td>
                              <td>
                                <h2 className="table-avatar">
                                  <Link
                                    to="/project-details"
                                    className="avatar avatar-md tab-imgcircle me-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src={company_img8}
                                      alt="User Image"
                                    />
                                  </Link>
                                  <Link to="/project-details">
                                    <span className="profile-name">
                                      Particles Inc{" "}
                                    </span>
                                    <span>iOS Developer</span>
                                    <span className="rating mt-2">
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star" />
                                    </span>
                                  </Link>
                                </h2>
                              </td>
                              <td>22 Oct 2021</td>
                              <td>
                                <h2 className="table-avatar">
                                  <img
                                    src={Flags_us}
                                    className="me-2"
                                    alt=""
                                    height={16}
                                  />{" "}
                                  USA
                                </h2>
                              </td>
                              <td>
                                <div className="table-action">
                                  <a href="" className="me-2">
                                    <i className="fab fa-rocketchat" />
                                  </a>
                                  <a
                                    href=""
                                    className="orange-text"
                                  >
                                    <i className="material-icons">delete_sweep</i>
                                  </a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                3D Renders and Amazon Product Store images/Video
                              </td>
                              <td>
                                <h2 className="table-avatar">
                                  <Link
                                    to="/project-details"
                                    className="avatar avatar-md tab-imgcircle me-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src={company_img9}
                                      alt="User Image"
                                    />
                                  </Link>
                                  <Link to="/project-details">
                                    <span className="profile-name">
                                      Soft Technologies{" "}
                                    </span>
                                    <span>UI/UX Designer</span>
                                    <span className="rating mt-2">
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star" />
                                    </span>
                                  </Link>
                                </h2>
                              </td>
                              <td>39 Oct 2021</td>
                              <td>
                                <h2 className="table-avatar">
                                  <img
                                    src={Flags_us}
                                    className="me-2"
                                    alt=""
                                    height={16}
                                  />{" "}
                                  USA
                                </h2>
                              </td>
                              <td>
                                <div className="table-action">
                                  <a href="" className="me-2">
                                    <i className="fab fa-rocketchat" />
                                  </a>
                                  <a
                                    href=""
                                    className="orange-text"
                                  >
                                    <i className="material-icons">delete_sweep</i>
                                  </a>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* project list */}
          </div>
        </div>
      </div>
    </div>
    {/* /Page Content */}
  </>
      )
  
}
export default FreelancerInvitations;