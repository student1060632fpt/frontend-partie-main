import React, {useState, useEffect } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { Developer_01, Flags_en } from "../imagepath";
import { Sidebar } from "../forfreelancer/sidebar";
import { useSelector } from "react-redux";
import { Tabs } from 'antd';

const Staking = (props) => {
    const [stakingVisible, setStakingVisible] = useState(false);
    const [totalStaked, setTotalStaked] = useState(null);

    const { contract_id, wallet, isSignedIn } = useSelector(
        (state) => state.wallet
      );

    const onChange = (key) => {
    console.log(key);
    };

    async function fetchTotalStaked() {
        let data = await contract_id.get("stakingContractId").ft_total_supply()
        setTotalStaked(data);
        console.log("totalStaked: ", data);
    }



    async function submitStaking(amount) {
        await contract_id.get("ftContractId").ft_transfer_call("staking-test12.thanhdevtest.testnet", amount.toString(), "staking");
    }


  useEffect(() => {
    document.body.className = "dashboard-page";
    return () => {
      document.body.className = "";
    };
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
                            <Sidebar />
                        </StickyBox>
                    </div>
                    {/* /sidebar */}
                    <div className="col-xl-9 col-md-8">
                        <div className="page-title">
                            <div className="row">
                                <div className="col-md-6">
                                    <h3>Staking Pool</h3>
                                </div>
                            </div>
                        </div>

                    {/* project list */}
                        <div className="staking">
                            <div className="border">
                                <span>Overview</span>
                                <div className="border">
                                    <span style={{color:"red"}}>Total staked</span>
                                    <p>$23,061,729</p>
                                </div>
                                <div className="border"> 
                                    <span>APR</span>
                                    <p>3.62%</p>
                                </div>

                                <div className="border">
                                    <span>Stake Information</span>
                                    <p>Claim your share of protocol revenue generated.</p>
                                </div>

                            </div>
                            <div className="border">  
                                <div className="border">
                                    Stake/ UnStake

                                </div>
                                <div className="border">
                                    <span>My Positions</span>
                                    <div>
                                        <div>  
                                            <p>Staked</p> 
                                            <p>0 PAT</p> 

                                        </div>
                                        <div>
                                            <p>Pending Rewards</p> 
                                            <p>0 NEAR</p>
                                        </div>
                                    </div>
                                    <div className="border">
                                        <button>Get Harvest</button>
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
  );
};
export default Staking;
