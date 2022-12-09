import React from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
// Import Images
import { company_img1,Img_01,Img_02,Img_03,Flags_de,Flags_us,Flags_es ,Exp_Icon_01,Exp_Icon_02,Exp_Icon_03,
    Exp_Icon_04,Exp_Icon_05,Exp_Icon_06 } from "../../imagepath";

    
const ProjectDetails = (props) => {  
        
  return (
        <>
            {/* Breadcrumb */}
            <div className="breadcrumb-bar" />
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
                                    <h2 className="profile-title">
                                        3D Renders and Amazon Product Store images/Video
                                    </h2>
                                    <p className="profile-position">UI UX DESIGNER</p>
                                    <div />
                                    <ul className="profile-preword align-items-center">
                                        <li>
                                        <i className="fas fa-clock" /> Posted 1 hour ago
                                        </li>
                                        <li>
                                        <a href="#" className="btn full-btn">
                                            Full time
                                        </a>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                <div className="pro-info-right profile-inf col-md-4">
                                    <ul className="profile-right">
                                    <li>
                                        <div className="amt-hr">
                                        $20.00 <p>( FIXED )</p>
                                        </div>
                                    </li>
                                    </ul>
                                    <div className="d-flex align-items-center justify-content-md-end justify-content-center">
                                    <a href="">
                                        <i className="fas fa-heart heart fa-2x me-2 orange-text" />
                                    </a>
                                    <a
                                        data-bs-toggle="modal"
                                        href="#file"
                                        className="btn bid-btn"
                                    >
                                        Send Proposal{" "}
                                        <i className="fas fa-long-arrow-alt-right" />
                                    </a>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="pro-view">
                            {/* Job Detail */}
                            <div className="post-widget">
                                <div className="pro-content">
                                <div className="row">
                                    <div className="col-12 col-sm-6 col-md-3">
                                    <div className="pro-post job-type">
                                        <p>Job Expiry </p>
                                        <h6>4 Days Left</h6>
                                    </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-3">
                                    <div className="pro-post job-type">
                                        <p>Location</p>
                                        <h6>
                                        <img
                                            src={Flags_de}
                                            height={16}
                                            alt="Lang"
                                        />{" "}
                                        Germany
                                        </h6>
                                    </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-3">
                                    <div className="pro-post job-type">
                                        <p>Proposals</p>
                                        <h6>15 Received</h6>
                                    </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-3">
                                    <div className="pro-post job-type">
                                        <p>Price type</p>
                                        <h6>Fixed</h6>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            {/* /Job Detail */}
                            <div className="pro-post widget-box exp-widget pb-0">
                                <div className="pro-content pt-0">
                                <div className="row">
                                    <div className="col-md-4">
                                    <div className="exp-detail">
                                        <img
                                        className="img-fluid"
                                        alt=""
                                        src={Exp_Icon_01}
                                        />
                                        <div className="exp-info">
                                        <p>Developer Type</p>
                                        <h5>Individual</h5>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="col-md-4">
                                    <div className="exp-detail">
                                        <img
                                        className="img-fluid"
                                        alt=""
                                        src={Exp_Icon_02}
                                        />
                                        <div className="exp-info">
                                        <p>Project Duration</p>
                                        <h5>Less than a month</h5>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="col-md-4">
                                    <div className="exp-detail">
                                        <img
                                        className="img-fluid"
                                        alt=""
                                        src={Exp_Icon_03}
                                        />
                                        <div className="exp-info">
                                        <p>Level </p>
                                        <h5>Intermediate</h5>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="col-md-4">
                                    <div className="exp-detail">
                                        <img
                                        className="img-fluid"
                                        alt=""
                                        src={Exp_Icon_04}
                                        />
                                        <div className="exp-info">
                                        <p>Job Type</p>
                                        <h5>Remote Job</h5>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="col-md-4">
                                    <div className="exp-detail">
                                        <img
                                        className="img-fluid"
                                        alt=""
                                        src={Exp_Icon_05}
                                        />
                                        <div className="exp-info">
                                        <p>Experience</p>
                                        <h5>+5 years</h5>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="col-md-4">
                                    <div className="exp-detail">
                                        <img
                                        className="img-fluid"
                                        alt=''
                                        src={Exp_Icon_06}
                                        />
                                        <div className="exp-info">
                                        <p>Qualifications</p>
                                        <h5>Under Garduate</h5>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            {/* Senior Animator  */}
                            <div className="pro-post widget-box">
                                <h3 className="pro-title">Senior Animator</h3>
                                <div className="pro-content">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Quisque tempor aliquam felis, nec condimentum ipsum commodo
                                    id. Vivamus sit amet augue nec urna efficitur tincidunt.
                                    Vivamus consectetur aliquam lectus commodo viverra. Nunc eu
                                    augue nec arcu efficitur faucibus. Aliquam accumsan ac magna
                                    convallis bibendum. Quisque laoreet augue eget augue fermentum
                                    scelerisque. Vivamus dignissim mollis est dictum blandit. Nam
                                    porta auctor neque sed congue. Nullam rutrum eget ex at
                                    maximus. Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Donec eget vestibulum lorem.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Quisque tempor aliquam felis, nec condimentum ipsum commodo
                                    id. Vivamus sit amet augue nec urna efficitur tincidunt.
                                    Vivamus consectetur aliquam lectus commodo viverra. Nunc eu
                                    augue nec arcu efficitur faucibus.{" "}
                                </p>
                                </div>
                            </div>
                            {/* /Senior Animator  */}
                            {/* Job Activity  */}
                            <div className="pro-post project-widget widget-box">
                                <h3 className="pro-title">Activity of the Job</h3>
                                <div className="pro-content">
                                <div className="mb-0">
                                    <ul className="activity-list clearfix">
                                    <li>
                                        Proposals:{" "}
                                        <span>
                                        Less than 5{" "}
                                        <i
                                            className="fas fa-question-circle"
                                            data-bs-toggle="tooltip"
                                            title="Lorem Ipsum"
                                        />
                                        </span>
                                    </li>
                                    <li>
                                        Last viewed by client:{" "}
                                        <span>
                                        3 hours ago{" "}
                                        <i
                                            className="fas fa-question-circle"
                                            data-bs-toggle="tooltip"
                                            title="Lorem Ipsum"
                                        />
                                        </span>
                                    </li>
                                    <li>
                                        Interviewing: <span>1</span>
                                    </li>
                                    <li>
                                        Invites sent: <span>6</span>
                                    </li>
                                    <li>
                                        Unanswered invites: <span>2</span>
                                    </li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            {/* /Job Activity  */}
                            {/* Skills Required  */}
                            <div className="pro-post project-widget widget-box">
                                <h3 className="pro-title">Skills Required</h3>
                                <div className="pro-content">
                                <div className="tags">
                                    <a href="">
                                    <span className="badge badge-pill badge-design">
                                        After Effects
                                    </span>
                                    </a>
                                    <a href="">
                                    <span className="badge badge-pill badge-design">
                                        Illustrator
                                    </span>
                                    </a>
                                    <a href="">
                                    <span className="badge badge-pill badge-design">HTML</span>
                                    </a>
                                    <a href="">
                                    <span className="badge badge-pill badge-design">
                                        Whiteboard
                                    </span>
                                    </a>
                                    <a href="">
                                    <span className="badge badge-pill badge-design">HTML</span>
                                    </a>
                                    <a href="">
                                    <span className="badge badge-pill badge-design">
                                        Whiteboard
                                    </span>
                                    </a>
                                </div>
                                </div>
                            </div>
                            {/* /Skills Required  */}
                            <div className="pro-post widget-box">
                                <h3 className="pro-title">Project Proposals</h3>
                                <div className="average-bids mt-4">
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
                                            alt=''
                                            src={Img_01}
                                            />
                                        </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="author-detail">
                                        <h4>
                                            <a href="#">George Wells</a>{" "}
                                            <img
                                            src={Flags_us}
                                            height={16}
                                            alt="Lang"
                                            />
                                        </h4>
                                        <div className="rating">
                                            <span className="average-rating">4.3</span>
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
                                        <p className="mb-0">in 7 days</p>
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
                                            alt=''
                                            src={Img_02}
                                            />
                                        </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="author-detail">
                                        <h4>
                                            <a href="#">Tony Ingle</a>{" "}
                                            <img
                                            src={Flags_es}
                                            height={16}
                                            alt="Lang"
                                            />
                                        </h4>
                                        <div className="rating">
                                            <span className="average-rating">4.6</span>
                                            <i className="fas fa-star filled" />
                                            <i className="fas fa-star filled" />
                                            <i className="fas fa-star filled" />
                                            <i className="fas fa-star filled" />
                                            <i className="fas fa-star" />
                                        </div>
                                        <p className="mb-0">
                                            Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry. Lorem Ipsum has been the
                                            industry's standard dummy text ever since the 1500s,
                                            when an unknown.
                                        </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-2">
                                        <div className="proposal-amnt text-end">
                                        <h3>$22.00</h3>
                                        <p className="mb-0">in 13 days</p>
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
                                            src={Img_03}
                                            />
                                        </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="author-detail">
                                        <h4>
                                            <a href="#">James Douglas</a>{" "}
                                            <img
                                            src={Flags_de}
                                            height={16}
                                            alt="Lang"
                                            />
                                        </h4>
                                        <div className="rating">
                                            <span className="average-rating">3.8</span>
                                            <i className="fas fa-star filled" />
                                            <i className="fas fa-star filled" />
                                            <i className="fas fa-star filled" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                        </div>
                                        <p className="mb-0">
                                            Contrary to popular belief, Lorem Ipsum is not simply
                                            random text. It has roots in a piece of classical
                                            Latin literature from 45 BC, making it over 2000 years
                                            old. Richard McClintock
                                        </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-2">
                                        <div className="proposal-amnt text-end">
                                        <h3>$19.00</h3>
                                        <p className="mb-0">in 18 days</p>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                {/* /project proposal  */}
                                </div>
                                <div className="proposal-btns mt-3">
                                <Link to="/view-proposals" className="pro-btn">
                                    View all 18 Propsals
                                </Link>
                                </div>
                            </div>
                            </div>
                        </div>
                        {/* Blog Sidebar */}
                        <div className="col-lg-4 col-md-12 sidebar-right theiaStickySidebar">
                        <StickyBox offsetTop={20} offsetBottom={20}>
                            <div className="freelance-widget widget-author mt-2 pro-post">
                            <div className="freelance-content">
                                <a data-bs-toggle="modal" href="#rating" className="favourite">
                                <i className="fas fa-star" />
                                </a>
                                <div className="author-heading">
                                <div className="profile-img">
                                    <a href="#">
                                    <img src={company_img1} alt="author" />
                                    </a>
                                </div>
                                <div className="profile-name">
                                    <div className="author-location">
                                    Amaze Tech{" "}
                                    <i className="fas fa-check-circle text-success verified" />
                                    </div>
                                </div>
                                <div className="freelance-info">
                                    <div className="freelance-location">
                                    <i className="fas fa-map-marker-alt me-1" />
                                    Georgia, USA
                                    </div>
                                    <div className="rating">
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star" />
                                    <span className="average-rating">4.7 (32)</span>
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    className="btn btn-lg btn-primary rounded-pill"
                                >
                                    <i className="fab fa-whatsapp me-2" />
                                    Follow
                                </button>
                                <div className="follow-details">
                                    <div className="row">
                                    <div className="col-6 py-4 text-center">
                                        {/* Heading */}
                                        <h6 className="text-uppercase text-muted">Following</h6>
                                        {/* Value */}
                                        <h4 className="mb-0">49</h4>
                                    </div>
                                    <div className="col-6 py-4 text-center border-start">
                                        {/* Heading */}
                                        <h6 className="text-uppercase text-muted">Followers</h6>
                                        {/* Value */}
                                        <h4 className="mb-0">422</h4>
                                    </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="row align-items-center">
                                    <div className="col">
                                        <h6 className="text-sm text-start mb-0">Member Since</h6>
                                    </div>
                                    <div className="col-auto">
                                        <span className="text-sm">January 1, 2021</span>
                                    </div>
                                    </div>
                                    <hr className="my-3" />
                                    <div className="row align-items-center">
                                    <div className="col">
                                        <h6 className="text-sm text-start mb-0">Total Jobs</h6>
                                    </div>
                                    <div className="col-auto">
                                        <span className="text-sm">127</span>
                                    </div>
                                    </div>
                                    <hr className="my-3" />
                                    <div className="row align-items-center">
                                    <div className="col">
                                        <h6 className="text-sm text-start mb-0">
                                        <i className="fab fa-instagram me-2" />
                                        Instagram
                                        </h6>
                                    </div>
                                    <div className="col-auto">
                                        <span className="text-sm">@johnthedon</span>
                                    </div>
                                    </div>
                                    <hr className="my-3" />
                                    <div className="row align-items-center">
                                    <div className="col">
                                        <h6 className="text-sm text-start mb-0">
                                        <i className="fab fa-linkedin me-2" />
                                        LinkedIn
                                        </h6>
                                    </div>
                                    <div className="col-auto">
                                        <span className="text-sm">johnsullivan</span>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            {/* Link Widget */}
                            <div className="pro-post widget-box post-widget">
                            <h3 className="pro-title">Profile Link</h3>
                            <div className="pro-content pt-0">
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
                            {/* Attachments Widget */}
                            <div className="pro-post widget-box post-widget pb-0">
                            <h3 className="pro-title">Attachments</h3>
                            <div className="pro-content">
                                <div className="row">
                                <div className="col-6">
                                    <div className="pro-post client-list">
                                    <p>Jobs Posted</p>
                                    <h6 className="bg-red">48</h6>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="pro-post client-list">
                                    <p>Hire rate</p>
                                    <h6 className="bg-blue">22</h6>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="pro-post client-list">
                                    <p>open jobs</p>
                                    <h6 className="bg-violet">48</h6>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="pro-post client-list">
                                    <p>Total spent</p>
                                    <h6 className="bg-yellow">22</h6>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="pro-post client-list">
                                    <p>Hires</p>
                                    <h6 className="bg-pink">48</h6>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="pro-post client-list">
                                    <p>Active</p>
                                    <h6 className="bg-green">22</h6>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            {/* /Attachments Widget */}
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
            <>
            {/* The Modal */}
            <div className="modal fade" id="file">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                    <h4 className="modal-title">SEND PROPOSALS</h4>
                    <span className="modal-close">
                        <a href="#" data-bs-dismiss="modal" aria-label="Close">
                        <i className="far fa-times-circle orange-text" />
                        </a>
                    </span>
                    </div>
                    <div className="modal-body">
                    <div className="modal-info">
                        <form>
                        <div className="feedback-form">
                            <div className="row">
                            <div className="col-md-6 form-group">
                                <input
                                type="text"
                                className="form-control"
                                placeholder="Your Price"
                                />
                            </div>
                            <div className="col-md-6 form-group">
                                <input
                                type="email"
                                className="form-control"
                                placeholder="Estimated Hours"
                                />
                            </div>
                            <div className="col-md-12 form-group">
                                <textarea
                                rows={5}
                                className="form-control"
                                placeholder="Cover Letter"
                                defaultValue={""}
                                />
                            </div>
                            </div>
                        </div>
                        <div className="proposal-features">
                            <div className="proposal-widget proposal-success">
                            <label className="custom_check">
                                <input type="checkbox" name="select_time" />
                                <span className="checkmark" />
                                <span className="proposal-text">
                                Stick this Proposal to the Top
                                </span>
                                <span className="proposal-text float-end">$12.00</span>
                            </label>
                            <p>
                                The sticky proposal will always be displayed on top of all
                                the proposals.
                            </p>
                            </div>
                            <div className="proposal-widget proposal-light">
                            <label className="custom_check">
                                <input type="checkbox" name="select_time" />
                                <span className="checkmark" />
                                <span className="proposal-text">
                                $ Make Sealed Proposal
                                </span>
                                <span className="proposal-text float-end">$7.00</span>
                            </label>
                            <p>
                                The sealed proposal will be sent to the project author only
                                it will not be visible publically.
                            </p>
                            </div>
                            <div className="proposal-widget proposal-danger">
                            <label className="custom_check">
                                <input type="checkbox" name="select_time" />
                                <span className="checkmark" />
                                <span className="proposal-text">
                                $ Make Sealed Proposal
                                </span>
                                <span className="proposal-text float-end">$15.00</span>
                            </label>
                            <p>
                                The featured proposal will have a distinctive color and
                                popped up between other proposals to get the author's
                                attention.
                            </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 submit-section">
                            <label className="custom_check">
                                <input type="checkbox" name="select_time" />
                                <span className="checkmark" /> I agree to the Terms And
                                Conditions
                            </label>
                            </div>
                            <div className="col-md-12 submit-section text-end">
                            <button className="btn btn-primary submit-btn" type="submit">
                                SUBMIT PROPOSAL
                            </button>
                            </div>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/* /The Modal */}
            </>
        </>
      )
  
}
export default ProjectDetails;