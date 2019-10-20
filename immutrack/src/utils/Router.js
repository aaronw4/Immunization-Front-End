import React from "react";
import { Route, Switch } from "react-router-dom";
import IntroPage from "../components/base/IntroPage";
import LoginChoose from "../components/login/LoginChoose";
import LoginForm from "../components/login/Login";
import PateintHome from '../components/patient/PatientHome';
import AddChild from '../components/patient/AddChild';

const Router = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={IntroPage} />
        <Route path="/login" component={LoginChoose} />
        <Route path="/parent-login" component={LoginForm} />
        <Route path="/provider-login" component={LoginForm} />
        <Route path='/patient-home' component={PateintHome} />
        <Route path='/add-child' component={AddChild} />
      </Switch>
    </>
  );
};

export default Router;
