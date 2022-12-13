import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({title, arrLinkTo}) => {

  return (
    <>
      <div className="breadcrumb-bar">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <h2 className="breadcrumb-title">{title}</h2>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  {!arrLinkTo? (<li className="breadcrumb-item">
                    <Link to="/index">Home</Link>
                  </li>): arrLinkTo.map(link => (<li className="breadcrumb-item">
                    <Link to={link.to} >{link.title}</Link>
                  </li>))}
                  
                  <li className="breadcrumb-item active" aria-current="page">
                    {" "}
                    {title}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;
