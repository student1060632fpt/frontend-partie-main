import React , {useEffect} from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { Sidebar } from '../sidebar';
    
const Withdrawmoney = (props) => {  
  useEffect(() => {
    document.body.className = 'dashboard-page';
    return () => { document.body.className = ''; }
  });   
        
  return (
        <>
          <>
  {/* Page Content */}
  <div className="content">
    <div className="container-fluid">
      <div className="row">
        {/* sidebar */}
        <div className="col-xl-3 col-md-4 theiaStickySidebar">
             <StickyBox offsetTop={20} offsetBottom={20}>
                <Sidebar/>
              </StickyBox>
        </div>
        {/* /sidebar */}
        <div className="col-xl-9 col-md-8">
          <div className="row">
            <div className="col-md-12">
              <nav className="user-tabs mb-4">
                <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                  <li className="nav-item">
                    <Link className="nav-link" to="/deposit-funds">
                      Deposit Funds
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/withdraw-money">
                      Withdraw Money
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/transaction-history">
                      Transaction History
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-md-12">
              <div className="transaction-position">
                <h3 className="mb-0">Withdraw Amount</h3>
              </div>
            </div>
            {/* /Add Wallet */}
            <div className="col-md-12">
              <div className="card">
                <div className="payment-list wallet card-body">
                  <h3>Add Wallet</h3>
                  <div className="form-group profile-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <button className="btn dol-btn" type="submit">
                          $
                        </button>
                      </div>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <label className="custom_radio me-4">
                    <input type="radio" defaultValue="Yes" defaultChecked />
                    <span className="checkmark" /> Paypal
                  </label>
                  <label className="custom_radio">
                    <input type="radio" defaultValue="Yes" />
                    <span className="checkmark" /> Card
                  </label>
                  <div className="bootstrap-tags text-start ps-0">
                    <span className="badge badge-pill badge-skills">$50</span>
                    <span className="badge badge-pill badge-skills">$100</span>
                    <span className="badge badge-pill badge-skills">$150</span>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="card_number">Card Number</label>
                        <input
                          className="form-control"
                          id="card_number"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="first_name">First Name</label>
                        <input
                          className="form-control"
                          id="first_name"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="last_name">Last Name</label>
                        <input
                          className="form-control"
                          id="last_name"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label htmlFor="expiry_on">Expires on</label>
                        <input
                          className="form-control"
                          id="expiry_on"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="form-group">
                        <label htmlFor="cvv">CVV (Security Code) </label>
                        <input className="form-control" id="cvv" type="text" />
                      </div>
                    </div>
                    <div className="col-md-8 btn-pad">
                      <a href="#" className="click-btn btn-primary">
                        Continue
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Add Wallet */}
            {/* Wallet */}
            <div className="col-md-6">
              <div className="card">
                <div className="wallet-detail card-body">
                  <div className="wallet-title pt-0 ps-0">
                    <h3 className="mb-0">Wallet</h3>
                  </div>
                  <div className="wallet-bal">
                    <span className="dol-circle">
                      <i className="fa fa-dollar-sign" aria-hidden="true" />
                    </span>
                    <div className="wallet-amt">
                      <p>Available Balance</p>
                      <h3 className="mb-0">$250.60 </h3>
                    </div>
                  </div>
                  <div className="wallet-content">
                    <div className="wallet-pay">
                      <p>Total Credit</p>
                      <h3 className="mb-0">$500.00</h3>
                    </div>
                    <div className="wallet-pay">
                      <p>Total Credit</p>
                      <h3 className="mb-0">$500.00</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Wallet */}
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Page Content */}
</>
        </>
      )
  
}
export default Withdrawmoney;