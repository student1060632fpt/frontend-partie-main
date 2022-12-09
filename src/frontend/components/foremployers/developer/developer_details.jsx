import React from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
// Import Images
import { Logo_01 ,Img_01,Img_02,Img_03,Project_img,Project_1,Project_2,Project_3,Project_4,Project_5,Project_6,Project_7,
    Flags_pl,Tab_icon_01,Tab_icon_02,Tab_icon_03,Tab_icon_04,Tab_icon_05,Tab_icon_06 } from "../../imagepath";

    
const DeveloperDetails = (props) => {  
        
  return (
        <>
            {/* Breadcrumb */}
            <div className="breadcrumb-bar">
            <div className="container">
                <div className="row align-items-center inner-banner">
                <div className="col-md-12 col-12 text-center">
                    <h2 className="breadcrumb-title">Developer Details</h2>
                    <nav aria-label="breadcrumb" className="page-breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                        <Link to="/index">Home</Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                        {" "}
                        Developer details
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
                        <div className="provider-widget">
                        <div className="pro-info-left">
                            <div className="provider-img">
                            <img src={Img_01} alt="User" />
                            </div>
                            <div className="profile-info">
                            <h2 className="profile-title">David Peterson</h2>
                            <p className="profile-position">iOS Expert</p>
                            <div>
                                <a href="#" className="btn full-btn">
                                Full time
                                </a>
                            </div>
                            <ul className="profile-preword">
                                <li>
                                <img src={Flags_pl} alt="" height={16} />{" "}
                                Poland
                                </li>
                                <li>
                                <div className="rating">
                                    <span className="average-rating">4.6</span>
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star" />
                                </div>
                                </li>
                            </ul>
                            </div>
                        </div>
                        <div className="pro-info-right profile-inf r-0">
                            <ul className="profile-right">
                            <li>
                                <div>
                                <h3 className="amt-hr">$20.00</h3> <p>( Per Hour )</p>
                                </div>
                            </li>
                            </ul>
                            <div className="d-flex align-items-center justify-content-md-end justify-content-center">
                            <a href="">
                                <i className="fas fa-heart heart fa-2x me-2 orange-text" />
                            </a>
                            <a
                                className="btn bid-btn"
                                data-bs-toggle="modal"
                                href="#hire"
                            >
                                Hire Now <i className="fas fa-long-arrow-alt-right" />
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="profile-list">
                        <ul>
                        <li>
                            <span className="cont bg-blue">22</span>
                            <strong className="proj-title"> Completed Projects</strong>
                        </li>
                        <li>
                            <span className="cont bg-red">5</span>
                            <strong className="proj-title"> Ongoing Projects</strong>
                        </li>
                        <li>
                            <span className="cont bg-violet">89%</span>
                            <strong className="proj-title"> Recommended</strong>
                        </li>
                        <li>
                            <span className="cont bg-yellow">12</span>
                            <strong className="proj-title"> Rehired</strong>
                        </li>
                        <li>
                            <span className="cont bg-pink">48</span>
                            <strong className="proj-title"> Clients</strong>
                        </li>
                        <li>
                            <span className="cont bg-navy">5</span>
                            <strong className="proj-title"> Feedbacks</strong>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
                <div className="row">
                <div className="col-lg-8 col-md-12">
                    <div className="pro-view">
                    {/* Tab Detail */}
                    <nav className="provider-tabs mb-4">
                        <ul className="nav nav-tabs nav-tabs-solid nav-justified">
                        <li className="nav-item">
                            <a className="nav-link" href="#overview">
                            <img
                                src={Tab_icon_01}
                                height={25}
                                alt="User Image"
                            />
                            <p className="bg-red">Overview</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#project">
                            <img
                                src={Tab_icon_02}
                                height={25}
                                alt="User Image"
                            />
                            <p className="bg-blue">Projects</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#experience">
                            <img
                                src={Tab_icon_03}
                                height={25}
                                alt="User Image"
                            />
                            <p className="bg-violet">Experience</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#education">
                            <img
                                src={Tab_icon_04}
                                height={25}
                                alt="User Image"
                            />
                            <p className="bg-yellow">Education</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#skill">
                            <img
                                src={Tab_icon_05}
                                height={25}
                                alt="User Image"
                            />
                            <p className="bg-pink">Skills</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#feedback">
                            <img
                                src={Tab_icon_06}
                                height={25}
                                alt="User Image"
                            />
                            <p className="bg-green">Feedbacks</p>
                            </a>
                        </li>
                        </ul>
                    </nav>
                    {/* /Tab Detail */}
                    {/* Overview Tab Content */}
                    <div className="pro-post widget-box" id="overview">
                        <h3 className="pro-title">Overview</h3>
                        <div className="pro-content">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                            irure dolor in reprehenderit in voluptate velit esse cillum
                            dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est laborum.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                            eget vestibulum lorem. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Quisque tempor aliquam felis, nec condimentum
                            ipsum commodo id. Vivamus sit amet augue nec urna efficitur
                            tincidunt. Vivamus consectetur aliquam lectus commodo viverra.
                            Nunc eu augue nec arcu efficitur faucibus.
                        </p>
                        <div className="mt-4">
                            <h4 className="widget-title">My services include:</h4>
                            <ul className="pro-list">
                            <li>Cross-platform games</li>
                            <li>Game concept and level designing</li>
                            <li>Multiplayer integration</li>
                            <li>Re-skin</li>
                            <li>Ads and in-app purchase (Maximize your Revenue)</li>
                            <li>Game Optimisations</li>
                            <li>2D/3D Animation</li>
                            </ul>
                        </div>
                        <p>
                            Graphic DesigningSocial Network IntegrationVirtual Reality
                            (VR)Augmented Reality (AR)Game con promotional graphics and
                            video app store and Playstore publishing{" "}
                        </p>
                        </div>
                    </div>
                    {/* /Overview Tab Content */}
                    {/* Project Tab Content */}
                    <div className="pro-post project-widget widget-box" id="project">
                        <h3 className="pro-title">Portfolio</h3>
                        <div className="pro-content">
                        <div className="row">
                            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                            <div className="project-widget">
                                <div className="pro-image">
                                <a
                                    href={Project_img}
                                    data-fancybox="gallery2"
                                >
                                    <img
                                    className="img-fluid"
                                    alt="User Image"
                                    src={Project_img}
                                    />
                                </a>
                                </div>
                                <div className="pro-detail">
                                <h3 className="pro-name">Project name</h3>
                                <p className="pro-designation">Web design</p>
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                            <div className="project-widget">
                                <div className="pro-image">
                                <a
                                    href={Project_1}
                                    data-fancybox="gallery2"
                                >
                                    <img
                                    className="img-fluid"
                                    alt="User Image"
                                    src={Project_1}
                                    />
                                </a>
                                </div>
                                <div className="pro-detail">
                                <h3 className="pro-name">Project name</h3>
                                <p className="pro-designation">Web design</p>
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                            <div className="project-widget">
                                <div className="pro-image">
                                <a
                                    href={Project_2}
                                    data-fancybox="gallery2"
                                >
                                    <img
                                    className="img-fluid"
                                    alt="User Image"
                                    src={Project_2}
                                    />
                                </a>
                                </div>
                                <div className="pro-detail">
                                <h3 className="pro-name">Project name</h3>
                                <p className="pro-designation">Web design</p>
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                            <div className="project-widget">
                                <div className="pro-image">
                                <a
                                    href={Project_3}
                                    data-fancybox="gallery2"
                                >
                                    <img
                                    className="img-fluid"
                                    alt="User Image"
                                    src={Project_3}
                                    />
                                </a>
                                </div>
                                <div className="pro-detail">
                                <h3 className="pro-name">Project name</h3>
                                <p className="pro-designation">Web design</p>
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                            <div className="project-widget">
                                <div className="pro-image">
                                <a
                                    href={Project_4}
                                    data-fancybox="gallery2"
                                >
                                    <img
                                    className="img-fluid"
                                    alt="User Image"
                                    src={Project_4}
                                    />
                                </a>
                                </div>
                                <div className="pro-detail">
                                <h3 className="pro-name">Project name</h3>
                                <p className="pro-designation">Web design</p>
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                            <div className="project-widget">
                                <div className="pro-image">
                                <a
                                    href={Project_5}
                                    data-fancybox="gallery2"
                                >
                                    <img
                                    className="img-fluid"
                                    alt="User Image"
                                    src={Project_5}
                                    />
                                </a>
                                </div>
                                <div className="pro-detail">
                                <h3 className="pro-name">Project name</h3>
                                <p className="pro-designation">Web design</p>
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                            <div className="project-widget">
                                <div className="pro-image">
                                <a
                                    href={Project_6}
                                    data-fancybox="gallery2"
                                >
                                    <img
                                    className="img-fluid"
                                    alt="User Image"
                                    src={Project_6}
                                    />
                                </a>
                                </div>
                                <div className="pro-detail">
                                <h3 className="pro-name">Project name</h3>
                                <p className="pro-designation">Web design</p>
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                            <div className="project-widget">
                                <div className="pro-image">
                                <a
                                    href={Project_7}
                                    data-fancybox="gallery2"
                                >
                                    <img
                                    className="img-fluid"
                                    alt="User Image"
                                    src={Project_7}
                                    />
                                </a>
                                </div>
                                <div className="pro-detail">
                                <h3 className="pro-name">Project name</h3>
                                <p className="pro-designation">Web design</p>
                                </div>
                            </div>
                            </div>
                            <div className="col-md-12 text-center">
                            <Link to="/project" className="btn more-btn">
                                View more{" "}
                            </Link>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* /Project Tab Content */}
                    {/* Experience Tab Content */}
                    <div className="pro-post project-widget widget-box" id="experience">
                        <h3 className="pro-title">Experience</h3>
                        <div className="pro-content">
                        <div className="widget-list mb-0">
                            <ul className="clearfix">
                            <li>
                                <h4>Logo Designer</h4>
                                <h5>Techline July 9, 2018 - March 18, 2021</h5>
                                <p>
                                I am a professional graphic designer. I have more than
                                10-years of experience in graphics design. If you are
                                looking for any graphic related work, contact me, I'll
                                glad to help you.
                                </p>
                            </li>
                            <li>
                                <h4>Logo Designer</h4>
                                <h5>Techline July 9, 2018 - March 18, 2021</h5>
                                <p>
                                I am a professional graphic designer. I have more than
                                10-years of experience in graphics design. If you are
                                looking for any graphic related work, contact me, I'll
                                glad to help you.
                                </p>
                            </li>
                            <li>
                                <h4>Logo Designer</h4>
                                <h5>Techline July 9, 2018 - March 18, 2021</h5>
                                <p>
                                I am a professional graphic designer. I have more than
                                10-years of experience in graphics design. If you are
                                looking for any graphic related work, contact me, I'll
                                glad to help you.
                                </p>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    {/* /Experience Tab Content */}
                    {/* Educational Tab Content */}
                    <div className="pro-post project-widget widget-box" id="education">
                        <h3 className="pro-title">Educational Details</h3>
                        <div className="pro-content">
                        <div className="widget-list mb-0">
                            <ul className="clearfix">
                            <li>
                                <h4>
                                Bachelor of Science in Game Programming &amp;
                                Development
                                </h4>
                                <h5>
                                Hampshire University January 12, 2015 - January 19, 2019
                                </h5>
                                <p>
                                Graphic Designing artworks through making plans and
                                utilizing the helpful analysis of companions, educators,
                                and bosses to improve those plans. Careful discipline
                                brings about promising results, and the capacity to
                                acknowledge and gain from analysis from peers and even
                                the purchaser everywhere is pivotal for accomplishment
                                in this field.
                                </p>
                            </li>
                            <li>
                                <h4>Master in Gaming STudi Design</h4>
                                <h5>Techline July 9, 2018 - March 18, 2021</h5>
                                <p>
                                I am a professional graphic designer. I have more than
                                10-years of experience in graphics design. If you are
                                looking for any graphic related work, contact me, I'll
                                glad to help you.
                                </p>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    {/* /Educational Tab Content */}
                    {/* Technical Tab Content */}
                    <div className="pro-post project-widget widget-box" id="skill">
                        <h3 className="pro-title">Technical Skills</h3>
                        <div className="pro-content">
                        <div className="tags">
                            <span className="badge badge-pill badge-skills">
                            + Web Design
                            </span>
                            <span className="badge badge-pill badge-skills">
                            + UI Design
                            </span>
                            <span className="badge badge-pill badge-skills">
                            + Node Js
                            </span>
                            <span className="badge badge-pill badge-skills">
                            + Javascript
                            </span>
                        </div>
                        </div>
                    </div>
                    {/* /Technical Tab Content */}
                    {/* Feedback Tab Content */}
                    <div className="pro-post author-widget clearfix" id="feedback">
                        <div className="widget-title-box clearfix">
                        <h3 className="pro-title mb-0">Feedbacks</h3>
                        </div>
                        <div className="about-author">
                        <div className="about-author-img">
                            <div className="author-img-wrap">
                            <img
                                className="img-fluid"
                                alt = ""
                                src={Img_03}
                            />
                            </div>
                        </div>
                        <div className="author-details">
                            <a href="#" className="blog-author-name">
                            Logo Designer
                            </a>
                            <div className="rating">
                            <span className="average-rating">4.6</span>
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star" />
                            </div>
                            <p className="mb-0">
                            I am a professional graphic designer. I have more than
                            10-years of experience in graphics design. If you are
                            looking for any graphic related work, contact me, I'll glad
                            to help you.
                            </p>
                        </div>
                        </div>
                        <div className="about-author">
                        <div className="about-author-img">
                            <div className="author-img-wrap">
                            <img
                                className="img-fluid"
                                alt = ""
                                src={Img_02}
                            />
                            </div>
                        </div>
                        <div className="author-details">
                            <a href="#" className="blog-author-name">
                            Web Designer
                            </a>
                            <div className="rating">
                            <span className="average-rating">4.6</span>
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star" />
                            </div>
                            <p className="mb-0">
                            I am a professional Web designer. I have more than 8-years
                            of experience in Web design. If you are looking for any Web
                            related work, contact me, I'll glad to help you.
                            </p>
                        </div>
                        </div>
                    </div>
                    {/* /Feedback Tab Content */}
                    </div>
                </div>
                {/* Blog Sidebar */}
                <div className="col-lg-4 col-md-12 sidebar-right theiaStickySidebar">
                    <StickyBox offsetTop={20} offsetBottom={20}>
                    {/* Follow Widget */}
                    <div className="pro-post widget-box follow-widget">
                    <a href="#" className="btn follow-btn">
                        + Follow
                    </a>
                    <ul className="follow-posts pro-post">
                        <li>
                        <p>Following</p>
                        <h6>49</h6>
                        </li>
                        <li>
                        <p>Followers</p>
                        <h6>422</h6>
                        </li>
                    </ul>
                    </div>
                    {/* /Follow Widget */}
                    {/* Language Widget */}
                    <div className="pro-post widget-box language-widget">
                    <h4 className="pro-title mb-0">Language Skills</h4>
                    <ul className="latest-posts pro-content">
                        <li>
                        <p>English</p>
                        <div className="progress progress-md mb-0">
                            <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "50%" }}
                            aria-valuenow={75}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            />
                        </div>
                        </li>
                        <li>
                        <p>Russian</p>
                        <div className="progress progress-md mb-0">
                            <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{ width: "65%" }}
                            aria-valuenow={25}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            />
                        </div>
                        </li>
                        <li>
                        <p>German</p>
                        <div className="progress progress-md mb-0">
                            <div
                            className="progress-bar bg-warning"
                            role="progressbar"
                            style={{ width: "50%" }}
                            aria-valuenow={75}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            />
                        </div>
                        </li>
                    </ul>
                    </div>
                    {/* /Language Widget */}
                    {/* About Widget */}
                    <div className="pro-post widget-box about-widget">
                    <h4 className="pro-title mb-0">About Me</h4>
                    <ul className="latest-posts pro-content">
                        <li>
                        <p>Gender</p>
                        <h6>Male</h6>
                        </li>
                        <li>
                        <p>Experience</p>
                        <h6>5 Years</h6>
                        </li>
                        <li>
                        <p>Location</p>
                        <h6>Istanbul/Turkey</h6>
                        </li>
                    </ul>
                    </div>
                    {/* /About Widget */}
                    {/* Categories */}
                    <div className="pro-post category-widget">
                    <div className="widget-title-box">
                        <h4 className="pro-title">Social Links</h4>
                    </div>
                    <ul className="latest-posts pro-content mb-3">
                        <li>
                        <a href="#">http://www.facebook.com/john...</a>
                        </li>
                        <li>
                        <a href="#">http://www.Twitter.com/john...</a>
                        </li>
                        <li>
                        <a href="#">Http://www.googleplus.com/john... </a>
                        </li>
                        <li>
                        <a href="#"> Http://www.behance.com/john...</a>
                        </li>
                        <li>
                        <a href="#"> Http://www.pinterest.com/john...</a>
                        </li>
                    </ul>
                    </div>
                    {/* /Categories */}
                    {/* LInk Widget */}
                    <div className="pro-post widget-box post-widget">
                    <h3 className="pro-title">Profile Link</h3>
                    <div className="pro-content">
                        <div className="form-group profile-group mb-0">
                        <div className="input-group">
                            <input
                            type="text"
                            className="form-control"
                            defaultValue="https://www.kofejob.com/developer/daren/12454687"
                            />
                            <div className="input-group-append">
                            <button className="btn btn-success sub-btn" type="submit">
                                <i className="fa fa-clone" />
                            </button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* /Link Widget */}
                    {/* Share Widget */}
                    <div className="pro-post widget-box post-widget">
                    <h3 className="pro-title">Share</h3>
                    <div className="pro-content">
                        <a href="#" className="share-icon">
                        <i className="fas fa-share-alt" /> Share
                        </a>
                    </div>
                    </div>
                    {/* /Share Widget */}
                    </StickyBox>
                </div>
                {/* /Blog Sidebar */}
                </div>
            </div>
            </div>
            {/* /Page Content */}
            {/* The Modal */}
            <div className="modal fade custom-modal" id="hire">
                <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content bg-modal">
                    <div className="modal-header">
                    <button
                        type="button"
                        className="close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    >
                        <span aria-hidden="true">×</span>
                    </button>
                    </div>
                    <div className="modal-body">
                    <div className="text-center pt-0 mb-4">
                        <img
                        src={Logo_01}
                        alt="logo"
                        className="img-fluid mb-1"
                        />
                        <h5 className="modal-title">Discuss your project with David</h5>
                    </div>
                    <form>
                        <div className="modal-info">
                        <div className="row">
                            <div className="col-12 col-md-12">
                            <div className="form-group">
                                <input
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="First name & Lastname"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                type="email"
                                name="name"
                                className="form-control"
                                placeholder="Email Address"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Phone Number"
                                />
                            </div>
                            <div className="form-group">
                                <textarea
                                className="form-control"
                                name="message"
                                rows={5}
                                placeholder="Message"
                                defaultValue={""}
                                />
                            </div>
                            <div className="form-group row">
                                <div className="col-12 col-md-4 pr-0">
                                <label className="file-upload">
                                    Add Attachment <input type="file" />
                                </label>
                                </div>
                                <div className="col-12 col-md-8">
                                <p className="mb-1">
                                    Allowed file types: zip, pdf, png, jpg
                                </p>
                                <p>Max file size: 50 MB</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="submit-section text-center">
                        <button
                            type="submit"
                            className="btn btn-primary btn-block submit-btn"
                        >
                            Hire Now
                        </button>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            </div>
            {/* /The Modal */}
        </>
      )
  
}
export default DeveloperDetails;