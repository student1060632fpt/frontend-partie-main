import React , {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { Developer_01,Flags_en } from "../../imagepath";
import { Sidebar } from '../sidebar';
import { useSelector } from "react-redux";
    
const Voting = (props) => {   

    const { contract_id, wallet, isSignedIn } = useSelector(
        (state) => state.wallet
      );
    const [loading, setLoading] = useState(false);
    const [poll, setPoll] = useState([]);

    useEffect(() => {
    const fetchVotingDetail = async () => {
        setLoading(true);
        let data = await contract_id.get("votingContractId").show_list_voting();
        setPoll(Object.entries(data));
        console.log("data", Object.entries(data))
        setLoading(false);
    }
    fetchVotingDetail();
      document.body.className = 'dashboard-page';
      return () => { document.body.className = ''; }
    }, [isSignedIn]);  
        
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
                    <div className="page-title">
                        <div className="row">
                        <div className="col-md-6">
                            <h3>Manage Proposals</h3>
                        </div>

                        </div>
                    </div>
                    <nav className="user-tabs project-tabs">
                        <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/manage-projects">
                            All Proposals
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link">
                            Ongoing Proposals
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link">
                            Completed Proposals
                            </Link>
                        </li>
                        </ul>
                    </nav>
                    {/* project list */}
                    <div className="my-projects-list">
                        <div className="row">
                        <div className="col-lg-10 flex-wrap">
                            {/* list */}
                            { loading ? (<h4>Loading...</h4>) : (
                                <div>
                                {
                                    poll.map(item => {
                                        
                                        return (
                                            <div className="projects-card flex-fill">
                                            <div className="card-body">
                                                <div className="projects-details align-items-center">
                                                <div className="project-info">
                                                    <span>{item[1].creator}</span>
                                                    <h2>Website Designer Required For Directory Website Designer Required For Directory</h2>
                                                    <h3>Question: {item[1].question}</h3>
                                                    <h2>Option: {item[1].variants[0].message}</h2>
                                                    <h2>Option: {item[1].variants[1].message}</h2>
                                                    <div className="customer-info">
                                                    <ul className="list-details">
                                                        <li>
                                                        <div className="slot">
                                                            <p>Start time</p>
                                                            <h5>{(new Date(item[1].start/(10**6))).toGMTString()}</h5>
                                                        </div>
                                                        </li>
                                                        
                                                        <li>
                                                        <div className="slot">
                                                            <p>End time</p>
                                                            <h5>{(new Date(item[1].end/(10**6))).toGMTString()}</h5>
                                                        </div>
                                                        </li>
                                                    </ul>
                                                    </div>
                                                </div>
                                                <div className="project-hire-info">
                                                    <div className="content-divider" />
                                                    <div className="projects-amount">
                                                    <h3>{item[1].budget/(10**18)} PAT</h3>
                                                    <h5>in 12 Days</h5>
                                                    </div>
                                                    <div className="content-divider" />
                                                    <div className="projects-action text-center">
                                                    <Link
                                                        to={`/voting-detail?id=${item[0]}`}
                                                        className="projects-btn"
                                                    >
                                                        View Details
                                                    </Link>
                                                    <a href="#" className="hired-detail">
                                                        Hired on 19 JUN 2021
                                                    </a>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                        )
                                    })
                                }
                                </div>
                            )
                            }
                            
                            {/* end list */}
                        </div>
                        </div>
                    </div>
                    {/* /pagination */}
                    </div>
                </div>
                </div>
            </div>
        </>
      )
  
}
export default Voting;