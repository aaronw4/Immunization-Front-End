import React from "react";
import { Route } from "react-router-dom";
import LoginChoose from "../components/login/LoginChoose";
import Login from "../components/login/Login";

const Router = () => {
  return (
    <>
      <Route path="/chooselogin" component={LoginChoose} />
      <Route path="/login" component={Login} />
    </>
  );
};
//
export default Router;
