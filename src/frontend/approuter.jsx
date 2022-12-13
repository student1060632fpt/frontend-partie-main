import React, { useEffect } from "react";
import AppContainer from "./appcontainer.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
// notifications
import "react-notifications/lib/notifications.css";
import { NotificationContainer } from "react-notifications";
import config from "config";
import { Wallet } from "../shared/near/near-wallet.js";
import {
  FaucetContract,
  FungibleToken,
  veFungibleToken,
  VotingContract,
} from "../shared/near/near-interface.js";
import { useDispatch } from "react-redux";
import { getSignInWallet } from "../redux/reducers/walletSlice.js";

// for Near
// When creating the wallet you can optionally ask to create an access key
// Having the key enables to call non-payable methods without interrupting the user to sign
const wallet = new Wallet({
  createAccessKeyFor: process.env.FT_CONTRACT_ID || "",
});

const ftContractId = new FungibleToken({
  contractId: "partie-test2.thanhdevtest.testnet",
  wallet,
});

const stakingContractId = new veFungibleToken({
  contractId: "staking-test12.thanhdevtest.testnet",
  wallet,
});

const votingContractId = new VotingContract({
  contractId: "voting-test8.thanhdevtest.testnet",
  wallet,
});

const faucetContractId = new FaucetContract({
  contractId: "faucet-test1.thanhdevtest.testnet",
  wallet,
});

const contract_id = new Map();
contract_id.set("ftContractId", ftContractId);
contract_id.set("stakingContractId", stakingContractId);
contract_id.set("votingContractId", votingContractId);
contract_id.set("faucetContractId", faucetContractId);

const AppRouter = (props) => {
  const dispatch = useDispatch()
    const startSignedIn = async () => {
    try {
      const isSignedIn = await wallet.startUp();
      const payload = {isSignedIn,contract_id,wallet}
      console.log(payload);
      dispatch(getSignInWallet(payload))
    } catch (error) {
      console.log({ error });
    }
  };
  useEffect(() => {
    startSignedIn();
  }, []);
  return (
    <>
      <Router basename={`${config.publicPath}`}>
        <Route render={(props) => <AppContainer {...props} />} />
      </Router>
      <NotificationContainer />
    </>
  );
};

export default AppRouter;
