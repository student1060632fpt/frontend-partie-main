import React , {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { Developer_01,Flags_en } from "../../imagepath";
import { Sidebar } from '../sidebar';
import { useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';
import { Input, Radio, Space } from 'antd';
import { wrap } from "lodash";
    
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

    let signerVotedDefault = {
        option_id: "",
        quantity: 0,
        is_claimed: false
    }

    const { contract_id, wallet, isSignedIn } = useSelector(
        (state) => state.wallet
      );
    const [loading, setLoading] = useState(false);
    const [poll, setPoll] = useState([]);
    const [votingDetail, setVotingDetail] = useState(defaultData);
    const [value, setValue] = useState(null);
    const [votes, setVotes] = useState({});
    const [signerVoted, setSignerVoted] = useState(signerVotedDefault)


    const location = useLocation();
    const voting_id = location.search.split("?id=")[1];
    console.log("voting_id", voting_id);

    const onChange = (e) =>{

        setValue(e);
        if (e == 1) {
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

    async function submitClaimReward() {
        await contract_id.get("votingContractId").claim_reward();
    }

    function calcReward(){
        if (signerVoted){
            if((votingDetail.results.variants.v1?votingDetail.results.variants.v1:0) > (votingDetail.results.variants.v2?votingDetail.results.variants.v2:0)){
                if(signerVoted.option_id=="v1") {
                    let reward = (signerVoted.quantity/votingDetail.results.variants.v1)*votingDetail.poll.budget/(10**18);
                    console.log("reward", reward);
                    return reward;
                }
                else return 0;
            }
            else{
                if(signerVoted.option_id=="v2") {
                    let reward = (signerVoted.quantity/votingDetail.results.variants.v2)*votingDetail.poll.budget/(10**18);
                    return reward;
                }
                else return 0;
            }
        }
        return 0;
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
                            <div className="border" style={{"border-radius": "10px", "margin-bottom": "8px"}}>
                                <div className="border-bottom voting-head" style={{padding: "4px 5px"}}>Information</div>
                                <div>
                                    <div className="d-flex justify-content-between align-items-center voting-sidebar" > 
                                        <div>Voting system</div>
                                        <span>Single choice voting</span>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center voting-sidebar">
                                        <div>Start date</div>
                                        <div>{(new Date(votingDetail.poll.start/(10**6))).toGMTString()}</div>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center voting-sidebar">
                                        <div>End date</div>
                                        <div>{(new Date(votingDetail.poll.end/(10**6))).toGMTString()}</div>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center voting-sidebar">
                                        <div>Reward Shared</div>
                                        <div>{votingDetail.poll.budget/(10**18)} PAT</div>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center voting-sidebar">
                                        <div>Total Voted</div>
                                        <div>{votingDetail.results.total_voted_stake/(10**18)} vePAT</div>
                                    </div>
                                </div>
                            </div>
                            <div className="border" style={{"border-radius": "10px", "margin-bottom": "8px"}}> 
                                <div className="border-bottom voting-head" style={{padding: "4px 5px"}}>Current Result</div>
                                <div className="d-flex justify-content-between align-items-center voting-sidebar">
                                    <div>V1</div>
                                    <div>{votingDetail.results.variants.v1 ? votingDetail.results.variants.v1/(10**18) : 0} vePAT</div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center voting-sidebar">
                                    <div>V2</div>
                                    <div>{votingDetail.results.variants.v2 ? votingDetail.results.variants.v2/(10**18) : 0} vePAT</div>
                                </div>
                            </div>

                            <div className="border" style={{"border-radius": "10px", "margin-bottom": "8px"}}> 
                                <div className="border-bottom voting-head" style={{padding: "4px 5px"}}>Your Reward</div>
                                <div className="d-flex justify-content-between align-items-center voting-sidebar">
                                    <div>Your Voted</div>
                                    <div>{signerVoted.option_id?signerVoted.option_id:"you haven't joined yet" }</div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center voting-sidebar">
                                    <div>Your Voted</div>
                                    <div>{signerVoted.quantity?signerVoted.quantity/(10**18):0 } vePAT</div>
                                </div>
                                
                                <div className="d-flex justify-content-between align-items-center voting-sidebar">
                                    <div>Amount</div>
                                    <div>{calcReward()} PAT</div>
                                </div>

                                <div className="d-flex justify-content-between align-items-center voting-sidebar">
                                    <div>Is Claimed</div>
                                    <div>{signerVoted.is_claimed.toString()}</div>
                                </div>
                                <div className="align-items-center" style={{width:"100%"}}>
                                    <button className="voting-claim" onClick={() => submitClaimReward()}>Claim</button>
                                </div>
                                
                            </div>
                        </div>

                            
                            
                        {/* /sidebar */}
                    <div className="col-xl-9 col-md-8">
                    <div className="page-title">
                        <div className="row">
                        <div className="col-md-6">
                            <h3>Voting Detail</h3>
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
                                                <h2>Question: {votingDetail.poll.question}</h2>
                                            </div>                             
                                        </div>
                                        
                                    </div>                                   
                                </div>

                                <div className="border" style={{"border-radius": "10px"}}> 
                                    <div className="border-bottom voting-head">Cast your vote</div>
                                    <div className="voting justify-content-between align-items-center">
                                        
                                        <button id="button" className="element option" style={{border: value==1 ? '1px solid #ff5b37' : ''}} onClick={() => onChange(1)}>
                                            v1:Creator
                                        </button>
                                        <button id="button" className="element option" style={{border: value==2 ? '1px solid #ff5b37' : ''}} onClick={() => onChange(2)}>v2:Freelancer</button>
                                        <button className="element vote" onClick={() => submitVote()}>Vote</button>
                                    </div>

                                </div>
                                
                                {/* end list */}
                                <div className="border" style={{"border-radius": "10px", "margin-top": "10px"}}>
                                <div className="border-bottom voting-head">Votes</div>
                                {
                                    Object.entries(votingDetail.results.voted).map(item =>{
                                        return(
                                            <div className="d-flex justify-content-between align-items-center border-top" style={{padding: "12px 25px"}}>
                                                <div style={{ width: "50%" }}>   
                                                    <h5>{item[0]}</h5>
                                                </div>
                                                <div style={{ width: "25%" }}>                                           
                                                    <h5>{item[1].option_id}</h5>
                                                </div>
                                                <div style={{ width: "25%" }}>                                           
                                                    <h5>{item[1].quantity/(10**18)} vePAT</h5>
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