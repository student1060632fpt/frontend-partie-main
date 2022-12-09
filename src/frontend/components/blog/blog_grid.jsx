import React from 'react';
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";

// Import Blog Sidebar
import { BlogSidebar } from './blog_sidebar';
// Import Images
import { Blog_01,Blog_02,Blog_03,Blog_04,Blog_05,Blog_06,Img_02,Img_03,Img_04,Img_05 } from "../imagepath"

const BlogGrid = () => {
        return(
          <>
          {/* Breadcrumb */}
          <div className="breadcrumb-bar">
            <div className="container">
              <div className="row align-items-center inner-banner">
                <div className="col-md-12 col-12 text-center">
                  <h2 className="breadcrumb-title">Blog Grid</h2>
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
                  <div className="row blog-grid-row">
                    <div className="col-md-6 col-sm-12">
                      {/* Blog Post */}
                      <div className="blog grid-blog">
                        <div className="blog-image">
                          <Link to="/blog-details">
                            <img
                              className="img-fluid"
                              src={Blog_01}
                              alt="Post Image"
                            />
                          </Link>
                        </div>
                        <div className="blog-content">
                          <ul className="entry-meta meta-item">
                            <li>
                              <div className="post-author">
                                <Link to="/developer-details">
                                  <img src={Img_02} alt="Post Author" />{" "}
                                  <span> David Lee</span>
                                </Link>
                              </div>
                            </li>
                            <li>
                              <i className="far fa-clock" /> 4 Apr 2021
                            </li>
                          </ul>
                          <h3 className="blog-title">
                            <Link to="/blog-details">
                              Your next job starts right here
                            </Link>
                          </h3>
                          <p className="mb-0">
                            Lorem ipsum dolor sit amet, consectetur em adipiscing elit,
                            sed do eiusmod tempor.
                          </p>
                        </div>
                      </div>
                      {/* /Blog Post */}
                    </div>
                    <div className="col-md-6 col-sm-12">
                      {/* Blog Post */}
                      <div className="blog grid-blog">
                        <div className="blog-image">
                          <Link to="/blog-details">
                            <img
                              className="img-fluid"
                              src={Blog_02}
                              alt="Post Image"
                            />
                          </Link>
                        </div>
                        <div className="blog-content">
                          <ul className="entry-meta meta-item">
                            <li>
                              <div className="post-author">
                                <Link to="/developer-details">
                                  <img src={Img_03} alt="Post Author" />{" "}
                                  <span> Deborah Angel</span>
                                </Link>
                              </div>
                            </li>
                            <li>
                              <i className="far fa-clock" /> 3 Mar 2021
                            </li>
                          </ul>
                          <h3 className="blog-title">
                            <Link to="/blog-details">People who completed NAND?</Link>
                          </h3>
                          <p className="mb-0">
                            Lorem ipsum dolor sit amet, consectetur em adipiscing elit,
                            sed do eiusmod tempor.
                          </p>
                        </div>
                      </div>
                      {/* /Blog Post */}
                    </div>
                    <div className="col-md-6 col-sm-12">
                      {/* Blog Post */}
                      <div className="blog grid-blog">
                        <div className="blog-image">
                          <Link to="/blog-details">
                            <img
                              className="img-fluid"
                              src={Blog_03}
                              alt="Post Image"
                            />
                          </Link>
                        </div>
                        <div className="blog-content">
                          <ul className="entry-meta meta-item">
                            <li>
                              <div className="post-author">
                                <Link to="/developer-details">
                                  <img src={Img_04} alt="Post Author" />{" "}
                                  <span>Darren Elder</span>
                                </Link>
                              </div>
                            </li>
                            <li>
                              <i className="far fa-clock" /> 3 Dec 2021
                            </li>
                          </ul>
                          <h3 className="blog-title">
                            <Link to="/blog-details">
                              Kofejob - How to get job through online?
                            </Link>
                          </h3>
                          <p className="mb-0">
                            Lorem ipsum dolor sit amet, consectetur em adipiscing elit,
                            sed do eiusmod tempor.
                          </p>
                        </div>
                      </div>
                      {/* /Blog Post */}
                    </div>
                    <div className="col-md-6 col-sm-12">
                      {/* Blog Post */}
                      <div className="blog grid-blog">
                        <div className="blog-image">
                          <Link to="/blog-details">
                            <img
                              className="img-fluid"
                              src={Blog_04}
                              alt="Post Image"
                            />
                          </Link>
                        </div>
                        <div className="blog-content">
                          <ul className="entry-meta meta-item">
                            <li>
                              <div className="post-author">
                                <Link to="/developer-details">
                                  <img src={Img_05} alt="Post Author" />{" "}
                                  <span>Sofia Brient</span>
                                </Link>
                              </div>
                            </li>
                            <li>
                              <i className="far fa-clock" /> 2 Dec 2021
                            </li>
                          </ul>
                          <h3 className="blog-title">
                            <Link to="/blog-details">
                              Job Openings in top Companies
                            </Link>
                          </h3>
                          <p className="mb-0">
                            Lorem ipsum dolor sit amet, consectetur em adipiscing elit,
                            sed do eiusmod tempor.
                          </p>
                        </div>
                      </div>
                      {/* /Blog Post */}
                    </div>
                    <div className="col-md-6 col-sm-12">
                      {/* Blog Post */}
                      <div className="blog grid-blog">
                        <div className="blog-image">
                          <Link to="/blog-details">
                            <img
                              className="img-fluid"
                              src={Blog_05}
                              alt="Post Image"
                            />
                          </Link>
                        </div>
                        <div className="blog-content">
                          <ul className="entry-meta meta-item">
                            <li>
                              <div className="post-author">
                                <Link to="/developer-details">
                                  <img src={Img_02} alt="Post Author" />{" "}
                                  <span>Marvin Campbell</span>
                                </Link>
                              </div>
                            </li>
                            <li>
                              <i className="far fa-clock" /> 1 Dec 2021
                            </li>
                          </ul>
                          <h3 className="blog-title">
                            <Link to="/blog-details">
                              How to crack the interview easily - Kofejob
                            </Link>
                          </h3>
                          <p className="mb-0">
                            Lorem ipsum dolor sit amet, consectetur em adipiscing elit,
                            sed do eiusmod tempor.
                          </p>
                        </div>
                      </div>
                      {/* /Blog Post */}
                    </div>
                    <div className="col-md-6 col-sm-12">
                      {/* Blog Post */}
                      <div className="blog grid-blog">
                        <div className="blog-image">
                          <Link to="/blog-details">
                            <img
                              className="img-fluid"
                              src={Blog_06}
                              alt="Post Image"
                            />
                          </Link>
                        </div>
                        <div className="blog-content">
                          <ul className="entry-meta meta-item">
                            <li>
                              <div className="post-author">
                                <Link to="/developer-details">
                                  <img src={Img_03} alt="Post Author" />{" "}
                                  <span> Paul Berthold</span>
                                </Link>
                              </div>
                            </li>
                            <li>
                              <i className="far fa-clock" /> 3 Nov 2021
                            </li>
                          </ul>
                          <h3 className="blog-title">
                            <Link to="/blog-details">
                              Recommended technical languages to study
                            </Link>
                          </h3>
                          <p className="mb-0">
                            Lorem ipsum dolor sit amet, consectetur em adipiscing elit,
                            sed do eiusmod tempor.
                          </p>
                        </div>
                      </div>
                      {/* /Blog Post */}
                    </div>
                  </div>
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
export default BlogGrid;