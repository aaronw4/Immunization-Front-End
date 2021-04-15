import React, { useEffect, useState } from "react";
// import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { Link} from "react-router-dom";
import styled from "styled-components";
import Indicator from "./Indicator";
// import SinglePatient from "./SinglePatient";
import { connect } from "react-redux";

const DoctorHomeCont = styled.div`
  text-align: center;
  background-color: white;
  width: 80vw;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 100px;
  background: #f2f2f2;
  @media (max-width: 599px) {
    width: 100%;
  }
`;

const PatientStatus = styled.div`
  width: 100%;
  margin-bottom: 20px;
  padding: 10px;
  background: #c5c5c5;
  border-top: 1px solid #000;
  font-size: 20px;
  text-align: center;
`;

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

const Record = styled.button`
  background: #c67474;
  border: 1px solid #924646;
  border-radius: 20px;
  width: 80px;
  height: 25px;
  justify-content: center;
  margin-right: 10px;
`;

const IndicatorCont = styled.div`
  border-radius: 100%;
  width: 24px;
  height: 24px;
  background: #a1a1a1;
  margin-left: 10px;
`;

function DoctorHome({ patients, display }) {
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
        patient.firstName.toLowerCase().includes(searchTerm) ||
        patient.lastName.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  const handleChange = event => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  return (
    <DoctorHomeCont>
      {/* <Route exact path='/'> */}
      <PatientStatus>
        <h2>Patient Status</h2>
      </PatientStatus>
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
        {display &&
          searchResults.map(patient => (
            <PatientButton key={patient.id}>
              <IndicatorCont>
                {patient.immunizations ? <Indicator patient={patient} /> : null}
              </IndicatorCont>
              <p>
                {patient.firstName} {patient.lastName}
              </p>
              <Link to={`/patient/${patient.id}`}>
                <Record>Records</Record>
              </Link>
            </PatientButton>
          ))}
      </PatientCont>
      {/* </Route> */}
      {/* <Route path='/:id'><SinglePatient/></Route> */}
    </DoctorHomeCont>
  );
}

const mapStateToProps = state => {
  return {
    patients: state.patientReducer.childList,
    display: state.patientReducer.display
  };
};

export default connect(
  mapStateToProps,
  {}
)(DoctorHome);
