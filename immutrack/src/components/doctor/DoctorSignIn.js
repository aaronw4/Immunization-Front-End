import React, { useState } from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

// import Header from '../base/Header'  --> uncomment when ready
// import Footer from '../base/Footer'  --> uncomment when ready

const PatientSignIn = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    const credentials = {
      email: email,
      password: password
    };
    axiosWithAuth()
      .post("/auth/login/providers", credentials)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        // props.history.push('/')
        // send user object to reducer
        console.log(res);
      })
      .catch(err => {
        console.log(err);
        setEmail("");
        setPassword("");
      });
  };

  return (
    <>
      {/* <Header /> */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          autoComplete="false"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          autoComplete="false"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
      {/* <Footer /> */}
    </>
  );
};

export default PatientSignIn;
