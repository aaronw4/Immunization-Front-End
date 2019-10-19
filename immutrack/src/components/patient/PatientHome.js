import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginAction } from '../../actions';
import './PatientHome.css';

const PatientHome = props => {
    // console.log('PROPS: ', props);
    //console.log('PROPS IMMUNIZATIONS: ', props.childImunizations);

    const [active, setActive] = useState(-1);
    

    const backButton = () => {
        props.history.push('/');
    }

    const displayVacc = (index) => {
        setActive(index);
    }

    return(
        <div>
            {
                props.displayPatient && props.patientList.map((patient, index) => {
                    return (
                        <div key={patient.id} 
                             onClick={() => displayVacc(index)} >

                            <h1>{patient.firstName}</h1>

                            <div className={active === index ? 'Show-Vaccines' : 'Hide-Vaccines'} >
                                {patient['immunizations'].map(vac => {
                                    return <h2 key={vac.id}>{vac.vaccine}</h2>
                                })}
                            </div>
                    </div>)
            })}
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