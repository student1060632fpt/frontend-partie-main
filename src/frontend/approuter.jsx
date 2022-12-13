import React, { useEffect } from "react";
import AppContainer from "./appcontainer.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
// notifications
import "react-notifications/lib/notifications.css";
import { NotificationContainer } from "react-notifications";
import config from "config";

import { useDispatch } from "react-redux";
import { getSignInWallet } from "../redux/reducers/walletSlice.js";

const AppRouter = ({ wallet, contract_id, isSignedIn }) => {
  const dispatch = useDispatch();
  const startSignedIn = async () => {
    try {
      const payload = { isSignedIn, contract_id, wallet };
      dispatch(getSignInWallet(payload));
    } catch (error) {
      console.log({ error });
    }
  };
  useEffect(() => {
    startSignedIn();
  }, [isSignedIn]);
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
