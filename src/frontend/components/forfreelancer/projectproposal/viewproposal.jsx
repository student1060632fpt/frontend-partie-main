import React from "react";
import { Link } from "react-router-dom";
import { Avatar_1,Avatar_2,Avatar_3,Avatar_4,Avatar_5,Flags_us,Flags_es,Flags_de,Flags_fr  } from "../../imagepath";
    
const ViewProposals = (props) => {  
 
    return (
        <>
            {/* Breadcrumb */}
            <div className="breadcrumb-bar">
                <div className="container">
                <div className="row align-items-center custom-breadcrumb">
                    <div className="col-md-12 col-12 text-center">
                    <h2 className="breadcrumb-title">Porposals</h2>
                    <nav aria-label="breadcrumb" className="page-breadcrumb">
                        <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to="/index">Home</Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            Project Details
                        </li>
                        </ol>
                    </nav>
                    </div>
                </div>
                </div>
            </div>
            {/* /Breadcrumb */}
            {/* Page Content */}
            <div className="content">
                <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <div className="profile">
                        <div className="profile-box">
                        <div className="provider-widget row">
                            <div className="pro-info-left col-md-8">
                            <div className="profile-info">
                                <p className="profile-cmpny">
                                Dreamguystech{" "}
                                <i className="fas fa-check-circle text-success ms-2" />
                                </p>
                                <h2 className="profile-title">
                                3D Renders and Amazon Product Store images/Video
                                </h2>
                                <div />
                            </div>
                            </div>
                            <div className="pro-info-right profile-inf">
                            <ul className="profile-right">
                                <li>
                                <div className="amt-hr">
                                    $20.00 <p>( FIXED )</p>
                                </div>
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                    <Link
                        to="/project-details"
                        className="btn btn-primary bck-btn mb-4"
                    >
                        <i className="fas fa-long-arrow-alt-left me-2" /> Back to Project{" "}
                    </Link>
                    </div>
                    <div className="col-12">
                    <div className="pro-post widget-box">
                        <div className="average-bids">
                        <p>
                            <span className="text-highlight">18 freelancers</span> are
                            bidding on average{" "}
                            <span className="text-highlight">$17.00</span> for this job
                        </p>
                        </div>
                        <div className="proposal-cards">
                        {/* project proposal  */}
                        <div className="bids-card">
                            <div className="row align-items-center">
                            <div className="col-lg-2">
                                <div className="author-img-wrap">
                                <a href="#">
                                    <img
                                    className="img-fluid"
                                    alt=""
                                    src={Avatar_1}
                                    />
                                </a>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="author-detail">
                                <h4>
                                    <a href="#">George Wells</a>{" "}
                                    <img
                                    src={Flags_de}
                                    height={16}
                                    alt="Lang"
                                    />
                                </h4>
                                <div className="rating">
                                    <span className="average-rating">4.1</span>
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star" />
                                </div>
                                <p className="mb-0">
                                    Look forward to hearing from you, I am a good designer
                                    and developer. I can handle your daily bases task with
                                    no extra effort. Please contact me as I am jobless
                                    nowadays.
                                </p>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div className="proposal-amnt text-end">
                                <h3>$17.00</h3>
                                <p className="mb-0">in 14 days</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        {/* /project proposal  */}
                        {/* project proposal  */}
                        <div className="bids-card">
                            <div className="row align-items-center">
                            <div className="col-lg-2">
                                <div className="author-img-wrap">
                                <a href="#">
                                    <img
                                    className="img-fluid"
                                    alt=""
                                    src={Avatar_2}
                                    />
                                </a>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="author-detail">
                                <h4>
                                    <a href="#">Timothy Smith</a>{" "}
                                    <img
                                    src={Flags_fr}
                                    height={16}
                                    alt="Lang"
                                    />
                                </h4>
                                <div className="rating">
                                    <span className="average-rating">4.9</span>
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star" />
                                </div>
                                <p className="mb-0">
                                    Look forward to hearing from you, I am a good designer
                                    and developer. I can handle your daily bases task with
                                    no extra effort. Please contact me as I am jobless
                                    nowadays.
                                </p>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div className="proposal-amnt text-end">
                                <h3>$12.00</h3>
                                <p className="mb-0">in 18 days</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        {/* /project proposal  */}
                        {/* project proposal  */}
                        <div className="bids-card">
                            <div className="row align-items-center">
                            <div className="col-lg-2">
                                <div className="author-img-wrap">
                                <a href="#">
                                    <img
                                    className="img-fluid"
                                    alt=""
                                    src={Avatar_3}
                                    />
                                </a>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="author-detail">
                                <h4>
                                    <a href="#">Janet Paden</a>{" "}
                                    <img
                                    src={Flags_us}
                                    height={16}
                                    alt="Lang"
                                    />
                                </h4>
                                <div className="rating">
                                    <span className="average-rating">4.2</span>
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star" />
                                </div>
                                <p className="mb-0">
                                    Look forward to hearing from you, I am a good designer
                                    and developer. I can handle your daily bases task with
                                    no extra effort. Please contact me as I am jobless
                                    nowadays.
                                </p>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div className="proposal-amnt text-end">
                                <h3>$20.00</h3>
                                <p className="mb-0">in 20 days</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        {/* /project proposal  */}
                        {/* project proposal  */}
                        <div className="bids-card">
                            <div className="row align-items-center">
                            <div className="col-lg-2">
                                <div className="author-img-wrap">
                                <a href="#">
                                    <img
                                    className="img-fluid"
                                    alt=""
                                    src={Avatar_4}
                                    />
                                </a>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="author-detail">
                                <h4>
                                    <a href="#">James Douglas</a>{" "}
                                    <img
                                    src={Flags_es}
                                    height={16}
                                    alt="Lang"
                                    />
                                </h4>
                                <div className="rating">
                                    <span className="average-rating">3.9</span>
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                </div>
                                <p className="mb-0">
                                    Look forward to hearing from you, I am a good designer
                                    and developer. I can handle your daily bases task with
                                    no extra effort. Please contact me as I am jobless
                                    nowadays.
                                </p>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div className="proposal-amnt text-end">
                                <h3>$10.00</h3>
                                <p className="mb-0">in 22 days</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        {/* /project proposal  */}
                        {/* project proposal  */}
                        <div className="bids-card">
                            <div className="row align-items-center">
                            <div className="col-lg-2">
                                <div className="author-img-wrap">
                                <a href="#">
                                    <img
                                    className="img-fluid"
                                    alt=""
                                    src={Avatar_5}
                                    />
                                </a>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="author-detail">
                                <h4>
                                    <a href="#">Floyd Lewis</a>{" "}
                                    <img
                                    src={Flags_de}
                                    height={16}
                                    alt="Lang"
                                    />
                                </h4>
                                <div className="rating">
                                    <span className="average-rating">3.5</span>
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                </div>
                                <p className="mb-0">
                                    Look forward to hearing from you, I am a good designer
                                    and developer. I can handle your daily bases task with
                                    no extra effort. Please contact me as I am jobless
                                    nowadays.
                                </p>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div className="proposal-amnt text-end">
                                <h3>$22.00</h3>
                                <p className="mb-0">in 25 days</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        {/* /project proposal  */}
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/* /Page Content */}
        </>
    )
  
}
export default ViewProposals;