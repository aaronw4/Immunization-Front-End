import React from "react";
import "./App.css";
import PatientHome from "./components/patient/PatientHome";
import Router from "./utils/Router";

import Header from "./components/base/Header";
import Footer from "./components/base/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      {/*
            <Header />
              ->  <Nav Bar />
            <Intro Page/>
            <Choose Sign In />
            <Sign In View/>
              ->  <Doctor Sign In />
              ->  <Patient Sign In />
            <Patient View (Private Route)/>
              ->  <PatientHome />
              ->  <Patient Register />
              ->  <Add Child />
              ->  <Permissions />
            <Doctor View (Private Route)/>
              -> <Doctor Home />
              -> <Single Patient />
              -> <Update Immune />
            <Footer />
        */}      
      <Router />
      <Footer />
    </div>
  );
}

export default App;
