import React , {useEffect} from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { Sidebar } from '../sidebar';
    
const Transactionhistory = (props) => {   
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
                    <Link className="nav-link" to="/deposit-funds">
                      Deposit Funds
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/withdraw-money">
                      Withdraw Money
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/transaction-history">
                      Transaction History
                    </Link>
                  </li>
              </ul>
            </nav>
            <div className="transaction-table card">
              <div className="card-header">
                <div className="row justify-content-between align-items-center">
                  <div className="col">
                    <h5 className="card-title">All Invoices</h5>
                  </div>
                  <div className="col-auto d-flex align-items-center flex-wrap transaction-shortby">
                    <div className="sort-by sort-show">
                      <span className="sort-title">Show</span>
                      <span className="sortby-fliter">
                        <select className="select">
                          <option>5</option>
                          <option className="sorting">4</option>
                          <option className="sorting">3</option>
                          <option className="sorting">6</option>
                          <option className="sorting">3</option>
                        </select>
                      </span>
                    </div>
                    <div className="export-item sort-show sort-by">
                      <i className="fas fa-download" /> Export
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="table-responsive table-box">
                  <table className="table">
                    <thead>
                      <tr className="thead-pink">
                        <th>Invoice Number</th>
                        <th>Client Name</th>
                        <th>Created Date</th>
                        <th>Amount</th>
                        <th>Due Date</th>
                        <th>Status</th>
                        <th>Paid On</th>
                      </tr>
                    </thead>
                    <tbody className="table table-hover table-center">
                      <tr>
                        <td>
                          <Link to="/view-invoice">INV-5622</Link>
                        </td>
                        <td>Amaze Tech</td>
                        <td>16 Sep 2021</td>
                        <td>$150</td>
                        <td>22 Oct 2021</td>
                        <td>
                          <span className="badge bg-success-light">Paid</span>
                        </td>
                        <td>22 Oct 2021, 10:45pm</td>
                      </tr>
                      <tr>
                        <td>
                          <Link to="/view-invoice">INV-4545</Link>
                        </td>
                        <td>Park Inc</td>
                        <td>12 Sep 2021</td>
                        <td>$150</td>
                        <td>25 Oct 2021</td>
                        <td>
                          <span className="badge bg-warning-light">
                            Partially Paid
                          </span>
                        </td>
                        <td>25 Oct 2021, 10:45pm</td>
                      </tr>
                      <tr>
                        <td>
                          <Link to="/view-invoice">INV-2254</Link>
                        </td>
                        <td>Tech Zone </td>
                        <td>10 Sep 2021</td>
                        <td>$150</td>
                        <td>15 Oct 2021</td>
                        <td>
                          <span className="badge bg-success-light">Paid</span>
                        </td>
                        <td>10 Oct 2021, 10:45pm</td>
                      </tr>
                      <tr>
                        <td>
                          <Link to="/view-invoice">INV-1582</Link>
                        </td>
                        <td>Abc Software</td>
                        <td>13 Sep 2021</td>
                        <td>$150</td>
                        <td>28 Oct 2021</td>
                        <td>
                          <span className="badge bg-danger-light">Overdue</span>
                        </td>
                        <td>13 Oct 2021, 10:45pm</td>
                      </tr>
                      <tr>
                        <td>
                          <Link to="/view-invoice">INV-1526</Link>
                        </td>
                        <td>Host Technologies</td>
                        <td>12 Sep 2021</td>
                        <td>$150</td>
                        <td>29 Oct 2021</td>
                        <td>
                          <span className="badge bg-warning-light">
                            Partially Paid
                          </span>
                        </td>
                        <td>29 Oct 2021, 10:45pm</td>
                      </tr>
                      <tr>
                        <td>
                          <Link to="/view-invoice">INV-1200</Link>
                        </td>
                        <td>Alfred Tech </td>
                        <td>05 Sep 2021</td>
                        <td>$150</td>
                        <td>15 Oct 2021</td>
                        <td>
                          <span className="badge bg-warning-light">
                            Partially Paid
                          </span>
                        </td>
                        <td>15 Oct 2021, 10:45pm</td>
                      </tr>
                      <tr>
                        <td>
                          <Link to="/view-invoice">INV-1212</Link>
                        </td>
                        <td>Kind Softwares </td>
                        <td>02 Sep 2021</td>
                        <td>$150</td>
                        <td>22 Oct 2021</td>
                        <td>
                          <span className="badge bg-success-light">Paid</span>
                        </td>
                        <td>22 Oct 2021, 10:45pm</td>
                      </tr>
                      <tr>
                        <td>
                          <Link to="/view-invoice">INV-1456</Link>
                        </td>
                        <td>Tech Zone </td>
                        <td>10 Sep 2021</td>
                        <td>$150</td>
                        <td>15 Oct 2021</td>
                        <td>
                          <span className="badge bg-danger-light">Overdue</span>
                        </td>
                        <td>10 Oct 2021, 10:45pm</td>
                      </tr>
                      <tr>
                        <td>
                          <Link to="/view-invoice">INV-1236</Link>
                        </td>
                        <td>Abc Software</td>
                        <td>13 Sep 2021</td>
                        <td>$150</td>
                        <td>28 Oct 2021</td>
                        <td>
                          <span className="badge bg-danger-light">Overdue</span>
                        </td>
                        <td>13 Oct 2021, 10:45pm</td>
                      </tr>
                      <tr>
                        <td>
                          <Link to="/view-invoice">INV-1566</Link>
                        </td>
                        <td>Park Inc</td>
                        <td>12 Sep 2021</td>
                        <td>$150</td>
                        <td>25 Oct 2021</td>
                        <td>
                          <span className="badge bg-success-light">Paid</span>
                        </td>
                        <td>25 Oct 2021, 10:45pm</td>
                      </tr>
                    </tbody>
                  </table>
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
export default Transactionhistory;