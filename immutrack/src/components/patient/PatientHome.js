import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loginAction } from '../../actions';

const PatientHome = props => {
    // console.log('PROPS: ', props);
    //console.log('PROPS IMMUNIZATIONS: ', props.childImunizations);

    const backButton = () => {
        props.history.push('/');
    }

    // useEffect(() => {
    //     props.loginAction('parents', {email: 'parent1@test.com', password: '1234'});
    // }, [props]);

    return(
        <div>
            {
                //props.patientList.length === 0 ? null :
                props.displayPatient && props.patientList.map((patient, index) => {
                    // console.log('NAME: ', patient);
                    //debugger;
                    // console.log('INDEX PATIENT HOME: ', index);
                    return (
                        <div key={patient.id}>
                            <h1>{patient.firstName}</h1>
                            {/* {console.log('PATIENT: ', patient)} */}
                            {/* {console.log('PATIENT IMMUNIZATION: ', patient.immunizations[0])} */}
                            {/* {JSON.stringify(patient)} */}
                            {/* <h2>{patient.vaccine}</h2> */}
                            {patient['immunizations'].map(vac => {
                                return <div key={vac.id}>
                                            <h2>{vac.vaccine}</h2>
                                        </div>
                            })}
                            {/* <h2>{props.childImunizations.length > 0 && props.childImunizations[index]['vaccine']}</h2> */}
                    </div>)
            })}
            Patient Home
            <button onClick={backButton}>Back</button>
        </div>
    )
}

const mapStateToProps = state => {
    // console.log('STATE: ', state);
    return {
        patientList: state.patientReducer.childList,
        // immunizationList: state.patientReducer.childList.immunizations,
        displayPatient: state.patientReducer.display
    }
}

export default connect(mapStateToProps, {loginAction})(PatientHome);