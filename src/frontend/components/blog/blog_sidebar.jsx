import React from 'react';
import { Link } from 'react-router-dom';
// Import Images
import { Blog_thumb_01,Blog_thumb_02,Blog_thumb_03 } from "../imagepath"

const BlogSidebar =()=> {
  
        return(
            <>              
              {/* Latest Posts */}
              <div className=" pro-post widget-box post-widget">
                <h4 className="pro-title">Latest Posts</h4>
                <div className="pro-content pt-0">
                  <ul className="latest-posts">
                    <li>
                      <div className="post-thumb">
                        <a href="/blog-details">
                          <img
                            className="img-fluid"
                            src={Blog_thumb_03}
                            alt = ""
                          />
                        </a>
                      </div>
                      <div className="post-info">
                        <h4>
                          <a href="/blog-details">
                            Kofejob - How to get job through online?
                          </a>
                        </h4>
                        <a href="#" className="posts-date">
                          <i className="far fa-calendar-alt" /> 2 May 2021
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="post-thumb">
                        <a href="/blog-details">
                          <img
                            className="img-fluid"
                            src={Blog_thumb_02}
                            alt = ""
                          />
                        </a>
                      </div>
                      <div className="post-info">
                        <h4>
                          <a href="/blog-details">
                            People who completed NAND technology got job 90%{" "}
                          </a>
                        </h4>
                        <a href="#" className="posts-date">
                          <i className="far fa-calendar-alt" /> 3 May 2021
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="post-thumb">
                        <a href="/blog-details">
                          <img
                            className="img-fluid"
                            src={Blog_thumb_01}
                            alt = ""
                          />
                        </a>
                      </div>
                      <div className="post-info">
                        <h4>
                          <a href="/blog-details">
                            There are many variations of passages
                          </a>
                        </h4>
                        <a href="#" className="posts-date">
                          <i className="far fa-calendar-alt" /> 4 May 2021
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* /Latest Posts */}
              {/* Categories */}
              <div className=" pro-post widget-box category-widget">
                <h4 className="pro-title">Blog Categories</h4>
                <div className="pro-content">
                  <ul className="category-link">
                    <li>
                      <a href="#">Web Development</a>
                    </li>
                    <li>
                      <a href="#">IT Consultancy</a>
                    </li>
                    <li>
                      <a href="#">Email Marketing</a>
                    </li>
                    <li>
                      <a href="#">Business Consulting</a>
                    </li>
                    <li>
                      <a href="#">Apps Development</a>
                    </li>
                    <li>
                      <a href="#">SEO Optimizations</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* /Categories */}
              {/* Tags */}
              <div className=" pro-post widget-box tags-widget">
                <h4 className="pro-title">Tags</h4>
                <div className="pro-content">
                  <ul className="tags">
                    <li>
                      <a href="#" className="tag">
                        Employer
                      </a>
                    </li>
                    <li>
                      <a href="#" className="tag">
                        Student
                      </a>
                    </li>
                    <li>
                      <a href="#" className="tag">
                        Freelancer
                      </a>
                    </li>
                    <li>
                      <a href="#" className="tag">
                        Designer
                      </a>
                    </li>
                    <li>
                      <a href="#" className="tag">
                        Jobs
                      </a>
                    </li>
                    <li>
                      <a href="#" className="tag">
                        Developer
                      </a>
                    </li>
                    <li>
                      <a href="#" className="tag">
                        Coding
                      </a>
                    </li>
                    <li>
                      <a href="#" className="tag">
                        Skills
                      </a>
                    </li>
                    <li>
                      <a href="#" className="tag">
                        Knowledge
                      </a>
                    </li>
                    <li>
                      <a href="#" className="tag">
                        Node Js
                      </a>
                    </li>
                    <li>
                      <a href="#" className="tag">
                        Courses
                      </a>
                    </li>
                    <li>
                      <a href="#" className="tag">
                        Engineer
                      </a>
                    </li>
                    <li>
                      <a href="#" className="tag">
                        Online
                      </a>
                    </li>
                    <li>
                      <a href="#" className="tag">
                        Study
                      </a>
                    </li>
                    <li>
                      <a href="#" className="tag">
                        Project
                      </a>
                    </li>
                    <li>
                      <a href="#" className="tag">
                        Experience
                      </a>
                    </li>
                    <li>
                      <a href="#" className="tag">
                        Freshers
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* /Tags */}
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
            </>
        )
    }

export { BlogSidebar };