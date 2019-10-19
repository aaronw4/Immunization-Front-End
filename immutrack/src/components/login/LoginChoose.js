import React from "react";
import { connect } from "react-redux";
import { loginParent, loginProvider } from "../../actions/loginType";

const LoginChoose = ({ history, loginParent, loginProvider }) => {
  const parent = e => {
    e.preventDefault();
    loginParent("parents");
    history.push("/parent-login");
  };

  const provider = e => {
    e.preventDefault();
    loginProvider("providers");
    history.push("/provider-login");
  };

  return (
    <>
      <button onClick={parent}>Parent</button>
      <button onClick={provider}>Provider</button>
    </>
  );
};

export default connect(
  null,
  { loginParent, loginProvider }
)(LoginChoose);
