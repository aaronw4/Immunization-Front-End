import React from 'react';
import './App.css';
import PatientHome from './components/patient/PatientHome';
import Router from "./utils/Router";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
