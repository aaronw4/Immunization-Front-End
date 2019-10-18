import React from "react";
import { withRouter } from "react-router-dom";

const LoginChoose = ({ history }) => {
  const patient = e => {
    e.preventDefault();
    localStorage.setItem("user", "parents");
    history.push("/login");
  };

  const doctor = e => {
    e.preventDefault();
    localStorage.setItem("user", "providers");
    history.push("/login");
  };

  return (
    <>
      <button type="button" onClick={patient}>
        Patient
      </button>
      <button type="button" onClick={doctor}>
        Doctor
      </button>
    </>
  );
};

export default withRouter(LoginChoose);
