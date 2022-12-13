import React , {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { Developer_01,Flags_en } from "../../imagepath";
import { Sidebar } from '../sidebar';
import { useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';
import { Input, Radio, Space } from 'antd';
    
const VotingDetail = (props) => {   
    let defaultData = {
        poll: {
          creator: 'thanhdevtest.testnet',
          poll_id: '4P7yWq4WJEyY2EhZ6Yy6Hj71ALVigpe4CLz6SuueLEVN',
          question: 'ngu ngu ',
          variants: [
            { option_id: 'v1', message: 'create_tor' },
            { option_id: 'v2', message: 'freelancer' }
          ],
          start: 1,
          end: 1670354308000000000,
          budget: '1900000000000000000000'
        },
        results: {
          poll_id: '4P7yWq4WJEyY2EhZ6Yy6Hj71ALVigpe4CLz6SuueLEVN',
          variants: [],
          voted: {},
          total_voted_stake: 0
        }
    }
    let votesDefault = {
        "v1":0,
        "v2":0
    }

    const { contract_id, wallet, isSignedIn } = useSelector(
        (state) => state.wallet
      );
    const [loading, setLoading] = useState(false);
    const [poll, setPoll] = useState([]);
    const [votingDetail, setVotingDetail] = useState(defaultData);
    const [value, setValue] = useState(null);
    const [votes, setVotes] = useState({});
    const [signerVoted, setSignerVoted] = useState({})

    const location = useLocation();
    const voting_id = location.search.split("?id=")[1];
    console.log("voting_id", voting_id);

    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
        if (e.target.value == 1) {
            votesDefault.v1 = 1;
            votesDefault.v2 = 0;
        }
        else {
            votesDefault.v1 = 0;
            votesDefault.v2 = 1;
        }
        setVotes(votesDefault);
      };

    async function fetchVoting() {
        let data = await contract_id.get("votingContractId").show_results(voting_id)
        setVotingDetail(data);      
        console.log("votingDetail: ", data);

        if (data.results.voted[wallet.accountId]){
            setSignerVoted(data.results.voted[wallet.accountId]);
            if (data.results.voted[wallet.accountId].option_id == "v1") setValue(1);
            else setValue(2);
        }
        // console.log("votingDetail.results.voted[wallet.accountId]", data.results.voted[wallet.accountId].quantity)
    }

    async function submitVote() {
        await contract_id.get("votingContractId").vote(voting_id, votes);
    }

    useEffect(() => {
        fetchVoting();
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
                        <div className="col-xl-3 col-md-4">
                            <div className="border btn.btn-rounded">
                                <div className="border-bottom">Information</div>
                                <div>
                                    <div className="d-flex justify-content-between align-items-center"> 
                                        <div>Voting system</div>
                                        <span>Single choice voting</span>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>Start date</div>
                                        <div>{votingDetail.poll.start}</div>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>End date</div>
                                        <div>{votingDetail.poll.end}</div>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>Total Voted</div>
                                        <div>{votingDetail.results.total_voted_stake/(10**18)}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="border rounded"> 
                                <div className="border-bottom">Current Result</div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>Yes</div>
                                        <div>{votingDetail.results.variants.v1 ? votingDetail.results.variants.v1/(10**18) : 0}</div>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>No</div>
                                        <div>{votingDetail.results.variants.v2 ? votingDetail.results.variants.v2/(10**18) : 0}</div>
                                    </div>
                            </div>
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
                    {/* project list */}
                    <div className="my-projects-list">
                        <div className="row">
                            <div className="col-lg-10 flex-wrap">
                                {/* list */}
                                
                                <div className="">
                                    <div className="">
                                        <div className=" align-items-center">
                                            <div className="">
                                                <span>{votingDetail.poll.creator}</span>
                                                <p>Website Designer Required For Directory Website Designer Required For Directory</p>
                                                <h1>Question: {votingDetail.poll.question}</h1>
                                                <h2>Option: {votingDetail.poll.variants[0].message}</h2>
                                                <h2>Option: {votingDetail.poll.variants[1].message}</h2>
                                            </div>                             
                                        </div>
                                        
                                    </div>                                   
                                </div>

                                <div className="border rounded"> 
                                    <div>Cast your vote</div>
                                    <div>
                                        <button>Yes</button>
                                        <button>No</button>
                                        <button>Vote</button>
                                    </div>
                                    <Radio.Group onChange={onChange} value={value}>
                                        <Space direction="vertical">
                                            <Radio value={1}>v1</Radio>
                                            <Radio value={2}>v2</Radio>
                                        </Space>
                                    </Radio.Group>
                                    <button onClick={() => submitVote()}> Vote </button>
                                </div>
                                
                                {/* end list */}
                                <div className="border rounded">
                                <div>Votes</div>
                                {
                                    Object.entries(votingDetail.results.voted).map(item =>{
                                        return(
                                            <div className="d-flex justify-content-between align-items-center border-top">
                                                <div style={{ width: "50%" }}>   
                                                    <h5>{item[0]}</h5>
                                                </div>
                                                <div style={{ width: "25%" }}>                                           
                                                    <h5>{item[1].option_id}</h5>
                                                </div>
                                                <div style={{ width: "25%" }}>                                           
                                                    <h5>{item[1].quantity/(10**18)}</h5>
                                                </div>
                                            </div>                                          
                                        )
                                    })
                                }                
                                </div>
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
export default VotingDetail;