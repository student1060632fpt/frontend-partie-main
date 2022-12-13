import React, {useState, useEffect } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { Developer_01, Flags_en } from "../imagepath";
import { Sidebar } from "../forfreelancer/sidebar";
import { useSelector } from "react-redux";

const Staking = (props) => {
    const [stakingVisible, setStakingVisible] = useState(false);
    const [totalStaked, setTotalStaked] = useState(null);

    const { contract_id, wallet, isSignedIn } = useSelector(
        (state) => state.wallet
      );

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
                        <div className="my-projects-list">
                            <div className="col-lg-10 flex-wrap">
                                <div className="card-body border rounded">
                                    <span>Dreamguystech</span>
                                    <h2>
                                    Website Designer Required For Directory Theme Website
                                    Designer Required For Directory Theme Website Designer                                   
                                    </h2>
                                    <div>Total staked: {totalStaked/(10**18)}</div>
                                    <button>Stake</button>
                                    <button>UnStake</button>
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
