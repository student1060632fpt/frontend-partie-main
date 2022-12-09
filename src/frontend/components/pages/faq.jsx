import React from 'react';
import { Link } from "react-router-dom";

class FAQ extends React.Component {
    render() {
        return(
            <>
              {/* Breadcrumb */}
            <div className="breadcrumb-bar">
                <div className="container">
                    <div className="row align-items-center inner-banner">
                        <div className="col-md-12 col-12 text-center">
                            <h2 className="breadcrumb-title">FAQ</h2>
                            <nav aria-label="breadcrumb" className="page-breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">FAQ</li>
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
                            {/* FAQ Content */}
                            <div className="faq">
                                <div id="accordion">
                                    {/* Basic FAQ Content */}
                                    <div className="basics-faq">
                                    <h4>Basics</h4>
                                    {/* FAQ Content */}
                                    <div className="card">
                                        <a className="card-link" data-toggle="collapse" href="#collapseOne">
                                        <div className="card-header">																		  
                                            Do you have any built-in caching? <i className="fa fa-angle-right" />
                                        </div>
                                        </a>								 
                                        <div id="collapseOne" className="collapse" data-parent="#accordion">
                                        <div className="card-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                        </div>
                                        </div>
                                    </div>
                                    {/* /FAQ Content */}
                                    {/* FAQ Content */}
                                    <div className="card">
                                        <a className="collapsed card-link" data-toggle="collapse" href="#collapseTwo">	
                                        <div className="card-header">																	
                                            Can I add/upgrade my plan at any time?	<i className="fa fa-angle-right" />										
                                        </div>
                                        </a>
                                        <div id="collapseTwo" className="collapse" data-parent="#accordion">
                                        <div className="card-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
                                        </div>
                                        </div>
                                    </div>
                                    {/* /FAQ Content */}
                                    {/* FAQ Content */}
                                    <div className="card">
                                        <a className="collapsed card-link" data-toggle="collapse" href="#collapseThree">		
                                        <div className="card-header">
                                            How do I change my password? <i className="fa fa-angle-right" />
                                        </div>
                                        </a>
                                        <div id="collapseThree" className="collapse" data-parent="#accordion">
                                        <div className="card-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
                                        </div>
                                        </div>
                                    </div>
                                    {/* /FAQ Content */}
                                    {/* FAQ Content */}
                                    <div className="card">									
                                        <a className="collapsed card-link" data-toggle="collapse" href="#collapsefour">	
                                        <div className="card-header">
                                            Do you have any built-in caching? <i className="fa fa-angle-right" />
                                        </div>
                                        </a>
                                        <div id="collapsefour" className="collapse" data-parent="#accordion">
                                        <div className="card-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
                                        </div>
                                        </div>
                                    </div>
                                    {/* /FAQ Content */}
                                    </div>
                                    {/* /Basic FAQ Content */}
                                    {/* Account FAQ Content */}
                                    <div className="basics-faq">							
                                    <h4>Account</h4>
                                    <div className="card">
                                        <a className="card-link" data-toggle="collapse" href="#accOne">
                                        <div className="card-header">																		  
                                            Do you have any built-in caching? <i className="fa fa-angle-right" />
                                        </div>
                                        </a>								 
                                        <div id="accOne" className="collapse" data-parent="#accordion">
                                        <div className="card-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                        </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <a className="collapsed card-link" data-toggle="collapse" href="#accTwo">	
                                        <div className="card-header">																	
                                            Can I add/upgrade my plan at any time?	<i className="fa fa-angle-right" />										
                                        </div>
                                        </a>
                                        <div id="accTwo" className="collapse" data-parent="#accordion">
                                        <div className="card-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
                                        </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <a className="collapsed card-link" data-toggle="collapse" href="#accThree">		
                                        <div className="card-header">
                                            How do I change my password? <i className="fa fa-angle-right" />
                                        </div>
                                        </a>									
                                        <div id="accThree" className="collapse" data-parent="#accordion">
                                        <div className="card-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    {/* /Account FAQ Content */}
                                    {/* Privacy FAQ Content */}							
                                    <div className="basics-faq">
                                    <h4>Privacy</h4>
                                    <div className="card">
                                        <a className="card-link" data-toggle="collapse" href="#PrivacyOne">
                                        <div className="card-header">																		  
                                            Do you have any built-in caching? <i className="fa fa-angle-right" />
                                        </div>
                                        </a>								 
                                        <div id="PrivacyOne" className="collapse" data-parent="#accordion">
                                        <div className="card-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                        </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <a className="collapsed card-link" data-toggle="collapse" href="#PrivacyTwo">	
                                        <div className="card-header">																	
                                            Can I add/upgrade my plan at any time?	<i className="fa fa-angle-right" />										
                                        </div>
                                        </a>
                                        <div id="PrivacyTwo" className="collapse" data-parent="#accordion">
                                        <div className="card-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
                                        </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <a className="collapsed card-link" data-toggle="collapse" href="#PrivacyThree">		
                                        <div className="card-header">
                                            How do I change my password? <i className="fa fa-angle-right" />
                                        </div>
                                        </a>									
                                        <div id="PrivacyThree" className="collapse" data-parent="#accordion">
                                        <div className="card-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    {/* /Privacy FAQ Content */}
                                </div>
                            </div>
                            {/* /FAQ Content */}
                        </div>
                    </div>
                </div>
            </div>					
            {/* /Page Content */}
            </>
        )
    }
}
export default FAQ;