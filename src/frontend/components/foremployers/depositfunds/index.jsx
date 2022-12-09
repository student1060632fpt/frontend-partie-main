import React , {useEffect} from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { Card } from "../../imagepath";
import { Sidebar } from '../sidebar';
    
const DepositFunds = (props) => {   
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
        {/* sidebar */}
        <div className="col-xl-3 col-md-4 theiaStickySidebar">
        <StickyBox offsetTop={20} offsetBottom={20}>
                <Sidebar/>
              </StickyBox>
        </div>
        {/* /sidebar */}
        <div className="col-xl-9 col-md-8">
          <nav className="user-tabs mb-4">
            <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
            <li className="nav-item">
                    <Link className="nav-link active" to="/deposit-funds">
                      Deposit Funds
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/withdraw-money">
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
          <div className="row">
            <div className="col-md-12 col-lg-12">
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
                  <div className="row">
                    <div className="col-md-6 mb-2">
                      <label className="custom_radio">
                        <input type="radio" name="budget" defaultChecked />
                        <span className="checkmark" /> Debit or Credit Card
                      </label>
                    </div>
                    <div className="col-md-6 text-end">
                      <p>All major cards accepted</p>
                    </div>
                    <div className="col-md-8">
                      <div className="form-group">
                        <label>Card Number</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>Expiry Date</label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="MM/YY"
                        />
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="form-group">
                        <label>Cardholder Name</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>CCV / CVV </label>
                        <input className="form-control" id="cvv" type="text" />
                      </div>
                    </div>
                    <div className="col-md-12 mb-5">
                      <img src={Card} alt="" width={200} />
                    </div>
                    <div className="col-md-12">
                      <ul className="card-list">
                        <li className="tot-border">
                          <label className="custom_radio">
                            <input type="radio" name="pyapal" />
                            <span className="checkmark" /> Paypal
                          </label>
                        </li>
                        <li className="tot-border">
                          <label className="custom_radio">
                            <input type="radio" name="pyapal" />
                            <span className="checkmark" /> Paytm
                          </label>
                        </li>
                        <li className="tot-border">
                          <label className="custom_radio">
                            <input type="radio" name="pyapal" />
                            <span className="checkmark" /> Skrill
                          </label>
                        </li>
                        <li>
                          <label className="custom_radio">
                            <input type="radio" name="pyapal" />
                            <span className="checkmark" /> Bank Deposit
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8 col-lg-6">
              <div className="card">
                <div className="payment-process card-body">
                  <ul>
                    <li className="pt-0">
                      <label className="total">Deposit Currency</label>
                      <div className="sort-by sort-show">
                        <span className="sortby-fliter">
                          <select className="select">
                            <option className="sorting">Dollar</option>
                            <option className="sorting">Euro</option>
                            <option className="sorting">Yen</option>
                          </select>
                        </span>
                      </div>
                    </li>
                    <li>
                      <label className="total">Deposit Amount</label>
                      <div className="input-group dep-amt mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text" id="basic-addon1">
                            $
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={2100}
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                        />
                      </div>
                    </li>
                    <li className="tot-border">
                      <label className="total">Processing Fee</label>
                      <label className="price">$63.30</label>
                    </li>
                    <li>
                      <label className="total">Total</label>
                      <label className="price">$2,163.30</label>
                    </li>
                  </ul>
                  <div className="mt-3">
                    <a href="#" className="btn pay-btn btn-block" tabIndex={0}>
                      {" "}
                      Confirm and pay
                    </a>
                    <p className="mb-0">
                      You agree to authorize the use of your card for this
                      deposit and future payments.
                    </p>
                  </div>
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
export default DepositFunds;