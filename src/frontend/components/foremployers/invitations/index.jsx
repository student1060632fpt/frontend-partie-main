import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { Flags_us,Flags_de,Img_01,Img_02,Img_03,Img_04,Img_05 } from "../../imagepath";
import { Sidebar } from '../sidebar';
    
const Invitations = (props) => {  
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
          {/* sidebar */}
          <div className="col-xl-3 col-md-4 theiaStickySidebar">                
              <StickyBox offsetTop={20} offsetBottom={20}>
                    <Sidebar/>
                </StickyBox>
          </div>
          {/* /sidebar */}
          <div className="col-xl-9 col-md-8">
            <nav className="user-tabs mb-4">
              <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                <li className="nav-item">
                  <Link className="nav-link" to="/favourites">
                    Bookmarked Freelancers
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/invited-freelancer">
                    Invited Freelancers
                  </Link>
                </li>
              </ul>
            </nav>
            {/* project list */}
            <div className="my-projects-view">
              <div className="row">
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-header">
                      <h5 className="card-title">Invited Freelancers</h5>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive table-box">
                        <table className="table table-hover table-center mb-0 datatable">
                          <thead className="thead-pink">
                            <tr>
                              <th>Freelancer Detail</th>
                              <th>Project name</th>
                              <th>Invite date </th>
                              <th>Location</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <Link
                                    to="/freelancer-profile"
                                    className="avatar avatar-md tab-imgcircle me-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src={Img_02}
                                      alt="User Image"
                                    />
                                  </Link>
                                  <Link to="/freelancer-profile">
                                    <span className="profile-name">
                                      Andrew Glover{" "}
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
                              <td>
                                Website Designer Required For Directory Theme
                              </td>
                              <td>25 JUN 2021</td>
                              <td>
                                <h2 className="table-avatar">
                                  <img
                                    src={Flags_de}
                                    className="me-2"
                                    alt=""
                                    height={16}
                                  />{" "}
                                  Germany
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
                                <h2 className="table-avatar">
                                  <Link
                                    to="/freelancer-profile"
                                    className="avatar avatar-md tab-imgcircle me-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src={Img_03}
                                      alt="User Image"
                                    />
                                  </Link>
                                  <Link to="/freelancer-profile">
                                    <span className="profile-name">
                                      Mickey Bernier{" "}
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
                              <td>Create website wordpress for a Brand</td>
                              <td>25 JUN 2021</td>
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
                                <h2 className="table-avatar">
                                  <Link
                                    to="/freelancer-profile"
                                    className="avatar avatar-md tab-imgcircle me-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src={Img_04}
                                      alt="User Image"
                                    />
                                  </Link>
                                  <Link to="/freelancer-profile">
                                    <span className="profile-name">
                                      Tony Ingle{" "}
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
                              <td>Email automation set up and segmentation</td>
                              <td>25 JUN 2021</td>
                              <td>
                                <h2 className="table-avatar">
                                  <img
                                    src={Flags_de}
                                    className="me-2"
                                    alt=""
                                    height={16}
                                  />{" "}
                                  Germany
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
                                <h2 className="table-avatar">
                                  <Link
                                    to="/freelancer-profile"
                                    className="avatar avatar-md tab-imgcircle me-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src={Img_05}
                                      alt="User Image"
                                    />
                                  </Link>
                                  <Link to="/freelancer-profile">
                                    <span className="profile-name">
                                      Timothy Smith{" "}
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
                              <td>Build me a website by CMS-Wordpress</td>
                              <td>25 JUN 2021</td>
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
                                <h2 className="table-avatar">
                                  <Link
                                    to="/freelancer-profile"
                                    className="avatar avatar-md tab-imgcircle me-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src={Img_01}
                                      alt="User Image"
                                    />
                                  </Link>
                                  <Link to="/freelancer-profile">
                                    <span className="profile-name">
                                      David Peterson{" "}
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
                              <td>
                                3D Renders and Amazon Product Store images/Video
                              </td>
                              <td>25 JUN 2021</td>
                              <td>
                                <h2 className="table-avatar">
                                  <img
                                    src={Flags_de}
                                    className="me-2"
                                    alt=""
                                    height={16}
                                  />{" "}
                                  Germany
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
export default Invitations;