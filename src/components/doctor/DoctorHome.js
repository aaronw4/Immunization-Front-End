import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { Link, Route } from "react-router-dom";
import styled from "styled-components";
import Indicator from "./Indicator";
import SinglePatient from "./SinglePatient";
import { connect } from 'react-redux';

const PatientCont = styled.div`
  margin-top: 40px;
`;

const PatientButton = styled.div`
  width: 350px;
  height: 50px;
  left: 32px;
  top: 191px;
  background: #e1f2f6;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
`;

const IndicatorCont = styled.div`
  border-radius: 100%;
  width: 24px;
  height: 24px;
  background: #a1a1a1;
  margin-left: 10px;
`;

const Record = styled.button`
  background: #c67474;
  border: 1px solid #924646;
  border-radius: 20px;
  width: 80px;
  height: 25px;
  justify-content: center;
  margin-right: 10px;
`;

function DoctorHome({patients, display}) {
  //const [patients, setPatients] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // useEffect(() => {
  //   const getPatients = () => {
  //     axiosWithAuth()
  //       .get(
  //         "https://immunization-tracker-bw.herokuapp.com/provider/1/children"
  //       )
  //       .then(response => {
  //         setPatients(response.data);
  //         setSearchResults(response.data);
  //         console.log(response.data);
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       });
  //   };
  //   getPatients();
  // }, []);

  useEffect(() => {
    const results = patients.filter(
      patient =>
        patient.firstName.includes(searchTerm) ||
        patient.lastName.includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <h2>Patient Status</h2>

      <form className="form">
        <input
          id="name"
          type="text"
          name="textfield"
          placeholder="&#xF002;"
          value={searchTerm}
          onChange={handleChange}
          className="input"
        />
      </form>

      <PatientCont>
        {display && searchResults.map(patient => (
          <PatientButton>
            <IndicatorCont>
              {patient.immunizations ?
                <Indicator patient={patient} /> : null}
            </IndicatorCont>
            <p>
              {patient.firstName} {patient.lastName}
            </p>
            <Link to={`/${patient.id}`}>
              <Record>Record</Record>
            </Link>
          </PatientButton>
        ))}
      </PatientCont>

      <Route path="/:id">
        {/* <SinglePatient /> */}
      </Route>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    patients: state.patientReducer.childList,
    display: state.patientReducer.display
  }
}

export default connect(mapStateToProps, {})(DoctorHome);