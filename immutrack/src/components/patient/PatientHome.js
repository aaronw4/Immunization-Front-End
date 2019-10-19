import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loginAction } from '../../actions';

const PatientHome = props => {
    console.log('PROPS: ', props);

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
                props.patientList && props.patientList.map(patient => {
                    console.log('NAME: ', patient);
                    //debugger;
                    return (
                        <div key={patient.id}>
                            <h1>{patient.firstName}</h1>
                            {console.log('PATIENT: ', patient)}
                            {/* {console.log('PATIENT IMMUNIZATION: ', patient.immunizations[0])} */}
                            {patient.immunizations && patient.immunizations.map(vac => {
                                console.log('VAC: ', vac);
                            return (
                                <>
                                    <p>{vac.vaccine}</p>
                                    <p>{`${vac.immunizationCompleted}`}</p>
                                    <p>{vac.date}</p>
                                </>)
                            })}
                    </div>)
            })}
            Patient Home
            <button onClick={backButton}>Back</button>
        </div>
    )
}

const mapStateToProps = state => {
    console.log('STATE: ', state);
    return {
        patientList: state.patientReducer.childList
    }
}

export default connect(mapStateToProps, {loginAction})(PatientHome);