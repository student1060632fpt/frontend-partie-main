import React from 'react';
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";

// Import Blog Sidebar
import { BlogSidebar } from './blog_sidebar';
// Import Images
import { Img_02,Img_03,Blog_01,Blog_02 } from "../imagepath"

const BlogList = () => {
        return(
          <>
          {/* Breadcrumb */}
          <div className="breadcrumb-bar">
            <div className="container">
              <div className="row align-items-center inner-banner">
                <div className="col-md-12 col-12 text-center">
                  <h2 className="breadcrumb-title">Blog List</h2>
                  <nav aria-label="breadcrumb" className="page-breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/index">Home</Link>
                      </li>
                      <li className="breadcrumb-item active" aria-current="page">
                        Blog
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
                <div className="col-lg-8 col-md-12">
                  <div className="blog-view">
                    {/* Blog Post */}
                    <div className="blog-single-post pro-post widget-box">
                      <div className="blog-image">
                        <Link to="/blog-details">
                          <img
                            alt=""
                            src={Blog_01}
                            className="img-fluid"
                          />
                        </Link>
                      </div>
                      <h3 className="blog-title">Your next job starts right here</h3>
                      <div className="blog-info clearfix">
                        <div className="post-left">
                          <ul>
                            <li>
                              <div className="post-author">
                                <Link to="/developer-details">
                                  <img src={Img_02} alt="Post Author" />{" "}
                                  <span>John Doe</span>
                                </Link>
                              </div>
                            </li>
                            <li>
                              <i className="far fa-calendar" />4 May 2021
                            </li>
                            <li>
                              <i className="far fa-comments" />
                              12 Comments
                            </li>
                            <li>
                              <i className="fas fa-tags" />
                              job Tips
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="blog-content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                          do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          Ut enim ad minim veniam, quis nostrud exercitation ullamco sit
                          laboris ullamco laborisut aliquip ex ea commodo consequat. Ut
                          enim ad minim veniam, quis nostrud exercitation ullamco
                          laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <Link to="/blog-details" className="read-more">
                          Read More
                        </Link>
                      </div>
                    </div>
                    {/* /Blog Post */}
                    {/* Blog Post */}
                    <div className="blog-single-post pro-post widget-box">
                      <div className="blog-image">
                        <Link to="/blog-details">
                          <img
                            alt=""
                            src={Blog_02}
                            className="img-fluid"
                          />
                        </Link>
                      </div>
                      <h3 className="blog-title">
                        What are the benefits of applying job Online?
                      </h3>
                      <div className="blog-info clearfix">
                        <div className="post-left">
                          <ul>
                            <li>
                              <div className="post-author">
                                <Link to="/developer-details">
                                  <img src={Img_03} alt="Post Author" />{" "}
                                  <span>Nick Joe</span>
                                </Link>
                              </div>
                            </li>
                            <li>
                              <i className="far fa-calendar" />4 May 2021
                            </li>
                            <li>
                              <i className="far fa-comments" />
                              12 Comments
                            </li>
                            <li>
                              <i className="fas fa-tags" />
                              Job Tips
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="blog-content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                          do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          Ut enim ad minim veniam, quis nostrud exercitation ullamco sit
                          laboris ullamco laborisut aliquip ex ea commodo consequat. Ut
                          enim ad minim veniam, quis nostrud exercitation ullamco
                          laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <Link to="/blog-details" className="read-more">
                          Read More
                        </Link>
                      </div>
                    </div>
                    {/* /Blog Post */}
                    {/* Blog Post */}
                    <div className="blog-single-post pro-post widget-box">
                      <div className="blog-image">
                        <div className="video">
                          <iframe
                            src="https://www.youtube.com/embed/ExJZAegsOis"
                            width={940}
                          />
                        </div>
                      </div>
                      <h3 className="blog-title">Mock job interview to get a job</h3>
                      <div className="blog-info clearfix">
                        <div className="post-left">
                          <ul>
                            <li>
                              <div className="post-author">
                                <Link to="/developer-details">
                                  <img src={Img_03} alt="Post Author" />{" "}
                                  <span>Nick Joe</span>
                                </Link>
                              </div>
                            </li>
                            <li>
                              <i className="far fa-calendar" />4 May 2021
                            </li>
                            <li>
                              <i className="far fa-comments" />
                              12 Comments
                            </li>
                            <li>
                              <i className="fas fa-tags" />
                              Job Tips
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="blog-content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                          do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          Ut enim ad minim veniam, quis nostrud exercitation ullamco sit
                          laboris ullamco laborisut aliquip ex ea commodo consequat. Ut
                          enim ad minim veniam, quis nostrud exercitation ullamco
                          laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <Link to="/blog-details" className="read-more">
                          Read More
                        </Link>
                      </div>
                    </div>
                    {/* /Blog Post */}
                    {/* Blog Pagination */}
                    <div className="row pb-4">
                      <div className="col-md-12">
                        <div className="blog-pagination text-center">
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
                    </div>
                    {/* /Blog Pagination */}
                  </div>
                </div>
                {/* Blog Sidebar */}
                <div className="col-lg-4 col-md-12 sidebar-right theiaStickySidebar">
                  <StickyBox offsetTop={20} offsetBottom={20}>
                      <BlogSidebar/>
                  </StickyBox>
                </div>
              {/* /Blog Sidebar */}
              </div>
            </div>
          </div>
          {/* /Page Content */}
        </>
        )
    
}
export default BlogList;