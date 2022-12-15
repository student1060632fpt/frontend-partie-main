import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { Developer_01, Flags_en } from "../imagepath";
import { Sidebar } from "../forfreelancer/sidebar";
import { useSelector } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Staking = (props) => {
  const [totalStaked, setTotalStaked] = useState(null);
  const [balanceFt, setBalanceFt] = useState(0);
  const [balanceVeFt, setBalanceVeFt] = useState(0);
  const [valueDeposit, setValueDeposit] = useState(null);
  const [valueWithdraw, setValueWithdraw] = useState(null);

  const { contract_id, wallet, isSignedIn } = useSelector(
    (state) => state.wallet
  );

  async function fetchTotalStaked() {
    let ft;
    let veFt;
    if (isSignedIn) {
      ft = await contract_id
        .get("ftContractId")
        .ft_balance_of(wallet.accountId);
      veFt = await contract_id
        .get("stakingContractId")
        .ft_balance_of(wallet.accountId);
    } else {
      ft = 0;
      veFt = 0;
    }

    setBalanceFt(ft);
    setBalanceVeFt(veFt);

    let data = await contract_id.get("stakingContractId").ft_total_supply();
    setTotalStaked(data);
    console.log("totalStaked: ", data);
  }

  async function submitStake(amount) {
    const dataInput = {
      purpose: "staking",
      para: "1",
    };
    const stringData = JSON.stringify(dataInput);
    console.log("stringData ", stringData);
    const rp = stringData.replace(/["]+/g, '"');
    console.log("rp: ", rp);
    await contract_id
      .get("ftContractId")
      .ft_transfer_call(
        "staking-test21.thanhdevtest.testnet",
        amount.toString(),
        rp
      );
  }

  async function submitUnStake(amount_stake) {
    await contract_id
      .get("stakingContractId")
      .withdraw(amount_stake.toString());
  }

  const handelChangeDeposit = (event) => {
    let value = event.target.value;
    var regex1 = /^[0-9]*(\.)?[0-9]*$/g;
    const check = !regex1.test(event.target.value);
    if (check) {
      value = valueDeposit;
    }
    if (value > balanceFt / 10 ** 18) {
      value = balanceFt / 10 ** 18;
    }
    setValueDeposit(value);
  };

  const handelChangeWithdraw = (event) => {
    let value = event.target.value;
    var regex1 = /^[0-9]*(\.)?[0-9]*$/g;
    const check = !regex1.test(event.target.value);
    if (check) {
      value = valueWithdraw;
    }
    if (value > balanceVeFt / 10 ** 18) {
      value = balanceVeFt / 10 ** 18;
    }
    setValueWithdraw(value);
  };

  useEffect(() => {
    fetchTotalStaked();
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
              {/* overview  */}
              <div className=" pro-post widget-box about-widget profile-overview">
                <div className="profile-head">
                  <h4 className="pro-title mb-0">Overview</h4>
                </div>
                <ul className="latest-posts pro-content">
                  <li>
                    <p>Total staked</p>
                    <h6>PAT {totalStaked / 10 ** 18} </h6>
                  </li>
                  <li>
                    <p>APR</p>
                    <h6>36.2%</h6>
                  </li>
                  <li>
                    <p>Stake Information</p>
                    <h6>Claim your share of protocol revenue generated.</h6>
                  </li>
                </ul>
              </div>
              {/* overview  */}
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
              <div className="row">
                <div className="col-md-6">
                  <div className="card">
                    <div className="payment-list wallet card-body">
                      <h3>Stake</h3>
                      <div className="d-flex justify-content-between align-items-center voting-sidebar">
                        <span>Balance</span>
                        <span>{balanceFt / 10 ** 18} PAT</span>
                      </div>
                      <form>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <div className="row">
                                <div className="col-md-10">
                                  <label htmlFor="first_name">
                                    Stake your token
                                  </label>
                                  <input
                                    className="form-control"
                                    type="text"
                                    placeholder="0.0"
                                    value={valueDeposit}
                                    minLength={1}
                                    maxLength={20}
                                    onChange={handelChangeDeposit}
                                  />
                                </div>
                                <div className="col-md-2 d-flex align-items-center">
                                  <button
                                    className="btn btn-outline-primary"
                                    onClick={() => {
                                      setValueDeposit(balanceFt / 10 ** 18);
                                    }}
                                  >
                                    MAX
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-12 text-end">
                            <button
                              type="submit"
                              className="btn-primary click-btn"
                              onClick={() => {
                                submitStake(
                                  ethers.utils.parseUnits(
                                    valueDeposit.toString(),
                                    18
                                  )
                                );
                              }}
                              disabled={valueDeposit ? false : true}
                            >
                              Stake
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <div className="payment-list wallet card-body">
                      <h3>Un Stake</h3>
                      <div className="d-flex justify-content-between align-items-center voting-sidebar">
                        <span>Balance</span>
                        <span>vePAT {balanceVeFt / 10 ** 18}</span>
                      </div>
                      <form>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <div className="row">
                                <div className="col-md-10">
                                  <label htmlFor="first_name">
                                    UnStake your token
                                  </label>
                                  <input
                                    className="form-control"
                                    type="text"
                                    placeholder="0.0"
                                    value={valueWithdraw}
                                    minLength={1}
                                    maxLength={20}
                                    onChange={handelChangeWithdraw}
                                  />
                                </div>
                                <div className="col-md-2 d-flex align-items-center">
                                  <button
                                    className="btn btn-outline-primary"
                                    onClick={() => {
                                      setValueWithdraw(balanceVeFt / 10 ** 18);
                                    }}
                                  >
                                    MAX
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-12 text-end">
                            <button
                              type="submit"
                              className="btn-primary click-btn"
                              onClick={() => {
                                submitUnStake(
                                  ethers.utils.parseUnits(
                                    valueWithdraw.toString(),
                                    18
                                  )
                                );
                              }}
                              disabled={valueWithdraw ? false : true}
                            >
                              UnStake
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* project list */}
              <div className="staking col-md-6">
                <div className="">
                  <div
                    className="border"
                    style={{
                      "border-radius": "10px",
                      "margin-right": "8px",
                      "margin-top": "8px",
                    }}
                  >
                    <span style={{ margin: "8px" }}>My Positions</span>
                    <div className="d-flex justify-content-between align-items-center voting-sidebar">
                      <div>
                        <p>Staked</p>
                        <p>{balanceVeFt / 10 ** 18} PAT</p>
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
