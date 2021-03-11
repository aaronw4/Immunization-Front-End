import React, { useState, useEffect } from "react";
// import { axiosWithAuth } from "../../utils/axiosWithAuth";
import Indicator from "./Indicator";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function SinglePatient(props) {
  const [patient, setPatient] = useState({});
  // const [immunization, setImmunization] = useState([]);
  // const id = window.location.pathname;
  
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 80%;
    margin: 0 auto;
    padding-bottom: 50px;
    background: #f2f2f2;
    border-top: 1px solid #000;
    @media (max-width: 599px) {
      width: 100%;
    }
  `;

  const Header = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
  `;

  const PatientCont = styled.div`
    margin-top: 40px;
  `;

  const PatientButton = styled.div`
    width: 750px;
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

    @media (max-width: 500px) {
      width: 350px;
    }
  `;

  const PatientString = styled.span`
    width: 750px;
    display: flex;
    justify-content: space-between;
    padding: 10px;

    @media (max-width: 500px) {
      width: 350px;
    }
  `;

  const Button = styled.button`
    background: #87a9b0;
    border: 1px solid #527f89;
    width: 200px;
    height: 50px;
    margin: 25px auto 0 auto;
  `;

  useEffect(() => {
    const id = props.match.params.id;
    const childObj = props.childList.filter(child => {
      // console.log('CHILD_ID: ', child.id);
      if (`${child.id}` === id) {
        // console.log('CHILD: ', child);
        return child;
      }
    });
    // console.log('ID: ', id)
    console.log("GOT REF: ", childObj[0]);
    setPatient(childObj[0]);
  }, []);

  return (
    <Container>
      <Header>
        <div>
          {patient.immunizations ? (
            <h2>
              {patient.lastName}, {patient.firstName} &nbsp;
            </h2>
          ) : null}
        </div>
        <div>
          {patient.immunizations ? <Indicator patient={patient} /> : null}
        </div>
      </Header>
      <PatientCont>
        {patient.immunizations &&
          patient.immunizations.map(shot =>
            shot.immunizationCompleted === true ? null : (
              <PatientButton key={shot.id}>
                <PatientString>
                  <div>{shot.vaccine}</div> due{" "}
                  {shot.nextImmunizationDate.slice(0, 10)}
                </PatientString>
              </PatientButton>
            )
          )}
        {patient.immunizations &&
          patient.immunizations.map(shot =>
            shot.immunizationCompleted === true ? (
              <PatientButton key={shot.id}>
                <PatientString>
                  <div>{shot.vaccine}</div>{" "}
                  <div> completed on {shot.date.slice(0, 10)}</div>
                </PatientString>
              </PatientButton>
            ) : null
          )}
      </PatientCont>{" "}
      <Link to={`/UpdateImmune/${props.match.params.id}`}>
        <Button>Add Record</Button>
      </Link>
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    childList: state.patientReducer.childList
  };
};

export default connect(
  mapStateToProps,
  {}
)(SinglePatient);
