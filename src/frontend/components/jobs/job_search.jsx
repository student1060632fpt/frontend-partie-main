import React, { Component } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
// Import Slick Slider
import Slider from "react-slick";

class JobSearch extends Component {
   
    render() {
           
      var settings = {
        dots: true,
        arrows : false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
        {
            breakpoint: 567,
                settings: {
                    centerMode:true,
                    slidesToShow: 1
                }
        }]
      };
        return (
            <>
            {/* Breadcrumb */}
            <div className="breadcrumb-bar">
                <div className="container">
                    <div className="row align-items-center inner-banner">
                        <div className="col-md-9 col-12 text-center mx-auto">
                            <h2 className="breadcrumb-title mb-2">Find the best jobs</h2>
                            <p>Find the right freelance job for your next work from home opportunity on the world's largest hiring platform connecting savvy businesses and professional freelancers. Browse by Upwork's robust database of categories, skills, and deliverables.</p>
                            <div className="col-md-10 col-12 mx-auto">
                                <div>
                                    <div className="form-group profile-group">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Enter your desired skill name (e.g. PHP)" />
                                            <div className="input-group-append">
                                            <button type="submit" className="bg-none">
                                                <Link to="/search"><i className="fa fa-search orange-text mr-2" /></Link> </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Breadcrumb */}
            {/* Page Content */}
            <div className="content">
            <div className="container">
                <div className="row">
                <div className="col-lg-4 col-md-12 theiaStickySidebar">	
                    <StickyBox offsetTop={20} offsetBottom={20}>		
                    <div className="pro-post widget-box language-widget">
                        <ul className="latest-posts pro-content form-group">
                            <li>
                            <div className="form-group mb-0">
                                <label className="custom_radio">
                                <input type="radio" name="work" defaultValue defaultChecked />
                                <span className="checkmark" />  Any type of work
                                </label>
                            </div>
                            </li>
                            <li>
                            <div className="form-group mb-0">
                                <label className="custom_radio">
                                <input type="radio" name="work" defaultValue />
                                <span className="checkmark" /> Development &amp; IT
                                </label>
                            </div>
                            </li>
                            <li>
                            <div className="form-group mb-0">
                                <label className="custom_radio">
                                <input type="radio" name="work" defaultValue />
                                <span className="checkmark" /> Design &amp; Creative
                                </label>
                            </div>
                            </li>
                            <li>
                            <div className="form-group mb-0">
                                <label className="custom_radio">
                                <input type="radio" name="work" defaultValue />
                                <span className="checkmark" /> Finance &amp; Accounting
                                </label>
                            </div>
                            </li>
                            <li>
                            <div className="form-group mb-0">
                                <label className="custom_radio">
                                <input type="radio" name="work" defaultValue />
                                <span className="checkmark" /> Admin &amp; Customer Support
                                </label>
                            </div>
                            </li>
                            <li>
                            <div className="form-group mb-0">
                                <label className="custom_radio">
                                <input type="radio" name="work" defaultValue />
                                <span className="checkmark" /> Engineering &amp; Architecture
                                </label>
                            </div>
                            </li>
                            <li>
                            <div className="form-group mb-0">
                                <label className="custom_radio">
                                <input type="radio" name="work" defaultValue />
                                <span className="checkmark" /> Legal
                                </label>
                            </div>
                            </li>
                            <li>
                            <div className="form-group mb-0">
                                <label className="custom_radio">
                                <input type="radio" name="work" defaultValue />
                                <span className="checkmark" /> Sales &amp; Marketing
                                </label>
                            </div>
                            </li>
                            <li>
                            <div className="form-group mb-0">
                                <label className="custom_radio">
                                <input type="radio" name="work" defaultValue />
                                <span className="checkmark" /> Writing &amp; Translation
                                </label>
                            </div>
                            </li>
                        </ul>
                    </div>
                    </StickyBox>
                </div>
                <div className="col-lg-8 col-md-12">
                    {/* <div className="job-slider slider">		 */}
                      <Slider {...settings} className="">				
                    <div className="job-box">						
                        <div className="job-category">	
                        <h3 className="job-title">0-9</h3>
                        <div className="row">
                            <div className="col-md-4">
                            <p>3D Visualizations Jobs</p>
                            <p>3D Printing Jobs</p>
                            <p>3D CAD Design Jobs</p>
                            </div>
                            <div className="col-md-4">
                            <p>2D Game Art Jobs </p>
                            <p>3D Rendering Jobs</p>
                            </div>
                            <div className="col-md-4">
                            <p>3D Modeling Jobs</p>
                            <p>3D Design Jobs</p>
                            </div>
                        </div>
                        </div>
                        <div className="job-category">	
                        <h3 className="job-title">A</h3>
                        <div className="row">
                            <div className="col-md-4">
                            <p>Amazon FBA Jobs</p>
                            <p>Arts Jobs</p>
                            <p>Anime Jobs</p>
                            <p>Album Cover Design Jobs</p>
                            </div>
                            <div className="col-md-4">
                            <p>Amazon Seller Central Jobs </p>
                            <p>Adobe After Effects Jobs</p>
                            <p>Adobe Premiere Pro Jobs</p>
                            <p>Acting Jobs</p>
                            </div>
                            <div className="col-md-4">
                            <p>Administrative Support Jobs</p>
                            <p>Adobe InDesign Jobs</p>
                            <p>Animation Jobs</p>
                            <p>Adobe Illustrator Jobs</p>
                            </div>
                        </div>
                        </div>
                        <div className="job-category">	
                        <h3 className="job-title">B</h3>
                        <div className="row">
                            <div className="col-md-4">
                            <p>Amazon FBA Jobs</p>
                            <p>Arts Jobs</p>
                            <p>Anime Jobs</p>
                            <p>Album Cover Design Jobs</p>
                            </div>
                            <div className="col-md-4">
                            <p>Amazon Seller Central Jobs </p>
                            <p>Adobe After Effects Jobs</p>
                            <p>Adobe Premiere Pro Jobs</p>
                            <p>Acting Jobs</p>
                            </div>
                            <div className="col-md-4">
                            <p>Administrative Support Jobs</p>
                            <p>Adobe InDesign Jobs</p>
                            <p>Animation Jobs</p>
                            <p>Adobe Illustrator Jobs</p>
                            </div>
                        </div>
                        </div>
                        <div className="job-category">	
                        <h3 className="job-title">C</h3>
                        <div className="row">
                            <div className="col-md-4">
                            <p>Amazon FBA Jobs</p>
                            <p>Arts Jobs</p>
                            <p>Anime Jobs</p>
                            <p>Album Cover Design Jobs</p>
                            </div>
                            <div className="col-md-4">
                            <p>Amazon Seller Central Jobs </p>
                            <p>Adobe After Effects Jobs</p>
                            <p>Adobe Premiere Pro Jobs</p>
                            <p>Acting Jobs</p>
                            </div>
                            <div className="col-md-4">
                            <p>Administrative Support Jobs</p>
                            <p>Adobe InDesign Jobs</p>
                            <p>Animation Jobs</p>
                            <p>Adobe Illustrator Jobs</p>
                            </div>
                        </div>
                        </div>
                        <div className="job-category">	
                        <h3 className="job-title">D</h3>
                        <div className="row">
                            <div className="col-md-4">
                            <p>Amazon FBA Jobs</p>
                            <p>Arts Jobs</p>
                            <p>Anime Jobs</p>
                            <p>Album Cover Design Jobs</p>
                            </div>
                            <div className="col-md-4">
                            <p>Amazon Seller Central Jobs </p>
                            <p>Adobe After Effects Jobs</p>
                            <p>Adobe Premiere Pro Jobs</p>
                            <p>Acting Jobs</p>
                            </div>
                            <div className="col-md-4">
                            <p>Administrative Support Jobs</p>
                            <p>Adobe InDesign Jobs</p>
                            <p>Animation Jobs</p>
                            <p>Adobe Illustrator Jobs</p>
                            </div>
                        </div>
                        </div>
                        <div className="job-category">	
                        <h3 className="job-title">E</h3>
                        <div className="row">
                            <div className="col-md-4">
                            <p>Amazon FBA Jobs</p>
                            <p>Arts Jobs</p>
                            <p>Anime Jobs</p>
                            <p>Album Cover Design Jobs</p>
                            </div>
                            <div className="col-md-4">
                            <p>Amazon Seller Central Jobs </p>
                            <p>Adobe After Effects Jobs</p>
                            <p>Adobe Premiere Pro Jobs</p>
                            <p>Acting Jobs</p>
                            </div>
                            <div className="col-md-4">
                            <p>Administrative Support Jobs</p>
                            <p>Adobe InDesign Jobs</p>
                            <p>Animation Jobs</p>
                            <p>Adobe Illustrator Jobs</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="job-box">						
                        <div className="job-category">	
                        <h3 className="job-title">F</h3>
                        <div className="row">
                            <div className="col-md-4">
                            <p>3D Visualizations Jobs</p>
                            <p>3D Printing Jobs</p>
                            <p>3D CAD Design Jobs</p>
                            </div>
                            <div className="col-md-4">
                            <p>2D Game Art Jobs </p>
                            <p>3D Rendering Jobs</p>
                            </div>
                            <div className="col-md-4">
                            <p>3D Modeling Jobs</p>
                            <p>3D Design Jobs</p>
                            </div>
                        </div>
                        </div>
                        <div className="job-category">	
                        <h3 className="job-title">G</h3>
                        <div className="row">
                            <div className="col-md-4">
                            <p>Amazon FBA Jobs</p>
                            <p>Arts Jobs</p>
                            <p>Anime Jobs</p>
                            <p>Album Cover Design Jobs</p>
                            </div>
                            <div className="col-md-4">
                            <p>Amazon Seller Central Jobs </p>
                            <p>Adobe After Effects Jobs</p>
                            <p>Adobe Premiere Pro Jobs</p>
                            <p>Acting Jobs</p>
                            </div>
                            <div className="col-md-4">
                            <p>Administrative Support Jobs</p>
                            <p>Adobe InDesign Jobs</p>
                            <p>Animation Jobs</p>
                            <p>Adobe Illustrator Jobs</p>
                            </div>
                        </div>
                        </div>
                        <div className="job-category">	
                        <h3 className="job-title">H</h3>
                        <div className="row">
                            <div className="col-md-4">
                            <p>Amazon FBA Jobs</p>
                            <p>Arts Jobs</p>
                            <p>Anime Jobs</p>
                            <p>Album Cover Design Jobs</p>
                            </div>
                            <div className="col-md-4">
                            <p>Amazon Seller Central Jobs </p>
                            <p>Adobe After Effects Jobs</p>
                            <p>Adobe Premiere Pro Jobs</p>
                            <p>Acting Jobs</p>
                            </div>
                            <div className="col-md-4">
                            <p>Administrative Support Jobs</p>
                            <p>Adobe InDesign Jobs</p>
                            <p>Animation Jobs</p>
                            <p>Adobe Illustrator Jobs</p>
                            </div>
                        </div>
                        </div>
                        <div className="job-category">	
                        <h3 className="job-title">I</h3>
                        <div className="row">
                            <div className="col-md-4">
                            <p>Amazon FBA Jobs</p>
                            <p>Arts Jobs</p>
                            <p>Anime Jobs</p>
                            <p>Album Cover Design Jobs</p>
                            </div>
                            <div className="col-md-4">
                            <p>Amazon Seller Central Jobs </p>
                            <p>Adobe After Effects Jobs</p>
                            <p>Adobe Premiere Pro Jobs</p>
                            <p>Acting Jobs</p>
                            </div>
                            <div className="col-md-4">
                            <p>Administrative Support Jobs</p>
                            <p>Adobe InDesign Jobs</p>
                            <p>Animation Jobs</p>
                            <p>Adobe Illustrator Jobs</p>
                            </div>
                        </div>
                        </div>
                        <div className="job-category">	
                        <h3 className="job-title">J</h3>
                        <div className="row">
                            <div className="col-md-4">
                            <p>Amazon FBA Jobs</p>
                            <p>Arts Jobs</p>
                            <p>Anime Jobs</p>
                            <p>Album Cover Design Jobs</p>
                            </div>
                            <div className="col-md-4">
                            <p>Amazon Seller Central Jobs </p>
                            <p>Adobe After Effects Jobs</p>
                            <p>Adobe Premiere Pro Jobs</p>
                            <p>Acting Jobs</p>
                            </div>
                            <div className="col-md-4">
                            <p>Administrative Support Jobs</p>
                            <p>Adobe InDesign Jobs</p>
                            <p>Animation Jobs</p>
                            <p>Adobe Illustrator Jobs</p>
                            </div>
                        </div>
                        </div>
                        <div className="job-category">	
                        <h3 className="job-title">K</h3>
                        <div className="row">
                            <div className="col-md-4">
                            <p>Amazon FBA Jobs</p>
                            <p>Arts Jobs</p>
                            <p>Anime Jobs</p>
                            <p>Album Cover Design Jobs</p>
                            </div>
                            <div className="col-md-4">
                            <p>Amazon Seller Central Jobs </p>
                            <p>Adobe After Effects Jobs</p>
                            <p>Adobe Premiere Pro Jobs</p>
                            <p>Acting Jobs</p>
                            </div>
                            <div className="col-md-4">
                            <p>Administrative Support Jobs</p>
                            <p>Adobe InDesign Jobs</p>
                            <p>Animation Jobs</p>
                            <p>Adobe Illustrator Jobs</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </Slider>
                </div>
                </div>
            </div>
            </div>					
            {/* /Page Content */}
            </>
         )
    }
}
export default JobSearch;