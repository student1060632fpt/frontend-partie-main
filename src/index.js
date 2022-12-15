import '@babel/polyfill'
import React from 'react';
import ReactDOM from 'react-dom';

import AppRouter from './frontend/approuter';
// Use For Switch
import 'react-toggle-switch/dist/css/switch.min.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Wallet } from './shared/near/near-wallet';
import { FaucetContract, FungibleToken, veFungibleToken, VotingContract } from './shared/near/near-interface';

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
  contractId: "staking-test21.thanhdevtest.testnet",
  wallet,
});

const votingContractId = new VotingContract({
  contractId: "voting-test10.thanhdevtest.testnet",
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

window.onload = async () => {
  try {
    const isSignedIn = await wallet.startUp();
    ReactDOM.render(
      <Provider store={store}>
        <AppRouter isSignedIn={isSignedIn} wallet={wallet} contract_id={contract_id} />
      </Provider>
      , document.getElementById('root'));
  } catch (error) {
    console.log({ error });
  }
}
if (module.hot) { // enables hot module replacement if plugin is installed
  module.hot.accept();
};