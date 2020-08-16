import React from "react";
import { Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";

import IntroPage from "../components/base/IntroPage";
import PatientRegisterForm from "../components/patient/PatientRegister";
import LoginChoose from "../components/login/LoginChoose";
import LoginForm from "../components/login/Login";

import DoctorHome from "../components/doctor/DoctorHome";
import SinglePatient from "../components/doctor/SinglePatient";

import PatientHome from "../components/patient/PatientHome";
import AddChild from "../components/patient/AddChild";
import Permissions from "../components/patient/Permissions";
import UpdateImmune from '../components/patient/UpdateImmune'

const Router = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={IntroPage} />
        <Route path="/patient-register" component={PatientRegisterForm} />
        <Route path="/login" component={LoginChoose} />
        <Route path="/parent-login" component={LoginForm} />
        <Route path="/provider-login" component={LoginForm} />
        {/* Private Routes */}
        <PrivateRoute path="/doctor-home" component={DoctorHome} />
        <PrivateRoute path="/patient/:id" component={SinglePatient} />
        <PrivateRoute path="/patient-home" component={PatientHome} />
        <PrivateRoute path="/add-child" component={AddChild} />
        <PrivateRoute path="/permissions" component={Permissions} />
        <PrivateRoute path="/UpdateImmune/:id" component={UpdateImmune} />
      </Switch>
    </>
  );
};

export default Router;
