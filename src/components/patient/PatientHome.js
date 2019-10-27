import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./PatientHome.css";
import { PatientButton } from "../../styles/muiStyledButtons";

const PatientHome = props => {
  //console.log('PROPS IMMUNIZATIONS: ', props.childImunizations);

  const [active, setActive] = useState(-1);

  const tableHead = {
    display: "flex",
    justifyContent: "space-around"
  };

  const rowSpacing = {
    display: "flex"
    //justifyContent: 'space-around',
  };

  const statusContainer = {
    background: "rgba(0, 0, 0, 0)",
    border: "1px solid #A1A1A1",
    width: "26px",
    height: "26px",
    borderRadius: "50%"
  };

  const statusGreen = {
    background: "#229449",
    borderRadius: "50%",
    width: "20px",
    height: "20px",
    margin: "auto",
    marginTop: "3%"
  };

  const statusYellow = {
    background: "#DBD424",
    borderRadius: "50%",
    width: "20px",
    height: "20px",
    margin: "auto",
    marginTop: "3%"
  };

  const addChildButton = () => {
    setTimeout(() => props.history.push("/add-child"), 1000);
  };

  const displayVacc = index => {
    setActive(index);
  };

  const permissionButton = () => {
    props.history.push("/permissions");
  };

<<<<<<< HEAD
    return(
        <div className='Patient-Container'>
            <PatientButton onClick={addChildButton}>Add Child</PatientButton>
            <PatientButton onClick={permissionButton}>Permissions</PatientButton>
            {  
                props.displayPatient && props.patientList.map((patient, index) => {
                
                // console.log('PATIENT: ', patient);
                return (
                    <>
                        <h1 onClick={() => displayVacc(index)}>{patient.firstName} {patient.lastName}</h1>
                        <div key={patient.id} style={{margin: '0 auto', width: '50%'}}>
                            <div key={patient.id}
                                className={active === index ? 'Show-Vaccines' : 'Hide-Vaccines'}>
                                <div>
                                    <div style={tableHead}>
                                        <h2>Status</h2>
                                        <h2>Vaccine</h2>
                                        <h2>Date</h2>
                                        <h2>Location</h2>
                                    </div>
                                </div>
                                <div style={{width: '100%'}}>
                                     {patient.immunizations && patient.immunizations.map(vac => {
                                         let convertDate = new Date(vac.date);
                                       return <div key={vac.id} style={rowSpacing}>
                                       <div style={{margin: '0 11%'}}>
                                           <div style={statusContainer}>
                                               <div style={vac.immunizationCompleted ? 
                                               statusGreen : 
                                               statusYellow}/>
                                           </div>
                                       </div>
                                       <p className='vacStyle'>{vac.vaccine}</p>
                                       <p style={{minWidth: '23%'}}>{convertDate.toDateString()}</p>
                                       <p>{vac.location}</p>
                                   </div>
                                    })} 
                                        
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}
        </div>
    )
}
=======
  return (
    <div className="Patient-Container">
      <div className="buttons">
        <PatientButton variant="contained" onClick={addChildButton}>
          Add Child
        </PatientButton>
        <PatientButton variant="contained" onClick={permissionButton}>
          Permissions
        </PatientButton>
      </div>
      {props.displayPatient &&
        props.patientList.map((patient, index) => {
          // console.log('PATIENT: ', patient);
          return (
            <>
              <h1 className="patient-name" onClick={() => displayVacc(index)}>
                {patient.firstName} {patient.lastName}
              </h1>
              <div key={patient.id} style={{ margin: "0 auto", width: "50%" }}>
                <div
                  key={patient.id}
                  className={
                    active === index ? "Show-Vaccines" : "Hide-Vaccines"
                  }
                >
                  <div>
                    <div style={tableHead}>
                      <h2>Status</h2>
                      <h2>Vaccine</h2>
                      <h2>Date</h2>
                      <h2>Location</h2>
                    </div>
                  </div>
                  <div style={{ width: "100%" }}>
                    {patient.immunizations &&
                      patient.immunizations.map(vac => {
                        let convertDate = new Date(vac.date);
                        return (
                          <div key={vac.id} style={rowSpacing}>
                            <div style={{ margin: "0 11%" }}>
                              <div style={statusContainer}>
                                <div
                                  style={
                                    vac.immunizationCompleted
                                      ? statusGreen
                                      : statusYellow
                                  }
                                />
                              </div>
                            </div>
                            <p className="vacStyle">{vac.vaccine}</p>
                            <p style={{ minWidth: "23%" }}>
                              {convertDate.toDateString()}
                            </p>
                            <p>{vac.location}</p>
                          </div>
                        );
                      })}
                    {/* <div>
                                        {vacValues.status && vacValues.status.map(value => {
                                            return <div>{value.status}</div>
                                        })}
                                    </div>
                                    <div>
                                        {vacValues.vaccine && vacValues.vaccine.map(value => {
                                            return <div>{value.vaccine}</div>
                                        })}
                                    </div>
                                    <div>
                                        {vacValues.date && vacValues.date.map(value => {
                                            return <div>{value.date}</div>
                                        })}
                                    </div>
                                    <div>
                                        {vacValues.location && vacValues.location.map(value => {
                                            return <div>{value.location}</div>
                                        })}
                                    </div> */}
                  </div>
                </div>
              </div>
            </>
          );
        })}
    </div>
  );
};
>>>>>>> staging

const mapStateToProps = state => {
  // console.log('STATE: ', state);
  return {
    patientList: state.patientReducer.childList,
    // immunizationList: state.patientReducer.childList.immunizations,
    displayPatient: state.patientReducer.display,
    parentId: state.patientReducer.parentId
  };
};

export default connect(
  mapStateToProps,
  {}
)(PatientHome);
