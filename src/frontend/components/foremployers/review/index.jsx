import React , {useEffect} from "react";
import StickyBox from "react-sticky-box";
import { Sidebar } from '../sidebar';
    
const Review = (props) => {    
  useEffect(() => {
    document.body.className = 'dashboard-page';
    return () => { document.body.className = ''; }
  });  
        
  return (
    <>
    {/* Page Content */}
    <div className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-3 col-md-4 theiaStickySidebar">
          <StickyBox offsetTop={20} offsetBottom={20}>
                    <Sidebar/>
                </StickyBox>
          </div>
          <div className="col-xl-9 col-md-8">
            <div className="card">
              <div className="card-header">
                <h3 className="pro-title without-border">Reviews</h3>
              </div>
              <div className="card-body">
                <div className="reviews">
                  <div className="review-content no-padding">
                    <h4>Fix Python Selenium Code</h4>
                    <div className="rating">
                      <span className="average-rating">4.6</span>
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                    </div>
                    <p className="mb-0">
                      Great clarity in specification and communication. I got
                      payment really fast. Really recommend this employer for his
                      professionalism. I will work for him again with pleasure.
                    </p>
                  </div>
                  <div className="review-content no-padding">
                    <h4>Adsense Expert</h4>
                    <div className="rating">
                      <span className="average-rating">3.4</span>
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <p className="mb-0">
                      Great clarity in specification and communication. I got
                      payment really fast. Really recommend this employer for his
                      professionalism. I will work for him again with pleasure.
                    </p>
                  </div>
                  <div className="review-content no-padding">
                    <h4>Create website wordpress for a Brand</h4>
                    <div className="rating">
                      <span className="average-rating">4.2</span>
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                    </div>
                    <p className="mb-0">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since
                    </p>
                  </div>
                  <div className="review-content no-padding">
                    <h4>Email automation set up and segmentation</h4>
                    <div className="rating">
                      <span className="average-rating">3.6</span>
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <p className="mb-0">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking at
                      its layout. The point of using Lorem Ipsum
                    </p>
                  </div>
                </div>
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
export default Review;