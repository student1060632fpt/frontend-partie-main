import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { truncateText } from "../../../shared/help";
import { Logo, Img_04 } from "../imagepath";

const HeaderUserAccountDetail = () => {
  const { wallet ,isSignedIn,contract_id} = useSelector((state) => state.wallet);
  const [balanceFt, setBalanceFt] = useState(0);
  const [balanceVeFt, setBalanceVeFt] = useState(0);
  async function fetchBalance(){
    let ft;
    let veFt;
    if (isSignedIn) {
      ft = await contract_id.get("ftContractId").ft_balance_of(wallet.accountId);
      veFt = await contract_id.get("stakingContractId").ft_balance_of(wallet.accountId);
    } else {
      ft = 0;
      veFt = 0;
    }
    
    setBalanceFt(ft);
    setBalanceVeFt(veFt);
  }
  async function handleFaucet() {
    await contract_id.get("faucetContractId").ft_request_funds("partie-test2.thanhdevtest.testnet", wallet.accountId, "10000000000000000000000");
  }
  useEffect(() => {
    fetchBalance()
  }, [])
  return (
    <ul className="nav header-navbar-rht">
      {/* User Menu */}
      <li className="nav-item dropdown has-arrow main-drop account-item">
        <Link
          to="#"
          id="dropdownmenu"
          className={`dropdown-toggle nav-link `}
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span className="user-img">
            <img src={Img_04} alt="" />
          </span>
          <span> {truncateText(wallet.accountId)}</span>
        </Link>
        <div
          id="checkshow"
          className="dropdown-menu emp"
          aria-labelledby="dropdownmenu"
        >
          <div className="drop-head">Account Details</div>
          <a className="dropdown-item" href={'https://testnet.nearblocks.io/address/' + wallet.accountId}>
            <i className="material-icons">monetization_on</i> PAT: {balanceFt/(10**18)}
          </a>
          <a className="dropdown-item" href={'https://testnet.nearblocks.io/address/' + wallet.accountId}>
            <i className="material-icons">monetization_on</i> vePAT: {balanceVeFt/(10**18)}
          </a>
          <button className="dropdown-item" onClick={() => handleFaucet()}>
            <i className="material-icons">monetization_on</i> Faucet PAT
          </button>
          <Link className="dropdown-item" to="/user-account-details">
            <i className="material-icons">verified_user</i> View profile
          </Link>
          <div className="drop-head">Projects Settings</div>
          <Link className="dropdown-item" to="/manage-projects">
            <i className="material-icons">business_center</i> Projects
          </Link>
          <div className="drop-head">Account Details</div>
          <Link className="dropdown-item" to="/profile-settings">
            {" "}
            <i className="material-icons">settings</i> Profile Settings
          </Link>
          <a className="dropdown-item" onClick={() => wallet.signOut()}>
            <i className="material-icons">power_settings_new</i> Logout
          </a>
        </div>
      </li>
      {/* /User Menu */}

      <li>
        <Link to="/post-project" className="login-btn">
          Post a Project{" "}
        </Link>
      </li>
    </ul>
  );
};

export default HeaderUserAccountDetail;
