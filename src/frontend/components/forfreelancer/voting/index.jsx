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


    ///////////////////////////////// Create Voting Test /////////////////////////////////
    const [value, setValue] = useState({
        jobsId: "",
        freelancerId:"",
        question: "",
        // variants:"",
        start: 0,
        end: 0,

      });
      const onChangeValue = (e) => {
        e.persist();
        if(!e?.target?.value && !e?.target?.name){
          return 
        }
        setValue((prev) => ({
          ...prev,
          [e?.target?.name]: e?.target?.value,
        }));
    };

    const onSubmitCreate = async (event) => {
        event.preventDefault();
        console.log("value", value);
        const variants = {
            "v1":"creator",
            "v2":"freelancer",
        }
        await contract_id.get("stakingContractId").create_voting(value.jobsId, value.freelancerId, value.question, variants, Number(value.start), Number(value.end));
      };





    ////////////////////////////////////////////////////////////////////////////////////////////////////



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
                        <div className="col-md-6">
                            <a
                                className="btn bid-btn"
                                data-bs-toggle="modal"
                                href="#createVoting"
                            >
                                Create Voting
                            </a>
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

        {/* The Modal */}
        <div className="modal fade custom-modal" id="createVoting">
                <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content bg-modal">
                    <div className="modal-header">
                    <button
                        type="button"
                        className="close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    >
                        <span aria-hidden="true">×</span>
                    </button>
                    </div>
                    <div className="modal-body">
                    <div className="text-center pt-0 mb-4">
                        <h5 className="modal-title">Create Voting</h5>
                    </div>
                    <form onSubmit={onSubmitCreate}>
                        <div className="modal-info">
                        <div className="row">
                            <div className="col-12 col-md-12">
                            <div className="form-group">
                                <input
                                onChange={onChangeValue}
                                value={value.jobsId}
                                type="text"
                                name="jobsId"
                                className="form-control"
                                placeholder="Jobs ID"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                onChange={onChangeValue}
                                value={value.freelancerId}
                                type="text"
                                name="freelancerId"
                                className="form-control"
                                placeholder="Freelancer ID"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                onChange={onChangeValue}
                                value={value.question}
                                type="text"
                                name="question"
                                className="form-control"
                                placeholder="Question"
                                />
                            </div>
                            {/* <div className="form-group">
                                <input
                                onChange={onChangeValue}
                                value={value.variants}
                                type="text"
                                name="variants"
                                className="form-control"
                                placeholder="Variants"
                                />
                            </div> */}
                            <div className="form-group">
                                <input
                                onChange={onChangeValue}
                                value={value.start}
                                type="text"
                                name="start"
                                className="form-control"
                                placeholder="Start"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                onChange={onChangeValue}
                                value={value.end}
                                type="text"
                                name="end"
                                className="form-control"
                                placeholder="End"
                                />
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="submit-section text-center">
                        <button
                            type="submit"
                            className="btn btn-primary btn-block submit-btn"
                        >
                            Create Voting
                        </button>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            </div>
            {/* /The Modal */}
        </>
      )
  
}
export default Voting;