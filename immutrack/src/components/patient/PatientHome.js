import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './PatientHome.css';

const PatientHome = props => {
    // console.log('PROPS: ', props);
    //console.log('PROPS IMMUNIZATIONS: ', props.childImunizations);

    const [active, setActive] = useState(-1);
    

    const addChildButton = () => {
        setTimeout(() => props.history.push('/add-child'), 1000);
    }

    const displayVacc = (index) => {
        setActive(index);
    }

    const permissionButton = () => {
        props.history.push('/permissions');
    }

    return(
        <div>
            {
                props.displayPatient && props.patientList.map((patient, index) => {
                    
                    // console.log('PATIENT: ', patient);
                    return (
                        <div key={patient.id} 
                             onClick={() => displayVacc(index)} >

                            <h1>{patient.firstName} {patient.lastName}</h1>
                            {/* {console.log('SECOND')} */}
                            <div className={active === index ? 'Show-Vaccines' : 'Hide-Vaccines'} >
                                {patient['immunizations'].map(vac => {
                                    return <h2 key={vac.id}>{vac.vaccine}</h2>
                                })}
                            </div>
                    </div>)
            })}
            <button onClick={addChildButton}>Add Child</button>
            <button onClick={permissionButton}>Permissions</button>
        </div>
    )
}

const mapStateToProps = state => {
    // console.log('STATE: ', state);
    return {
        patientList: state.patientReducer.childList,
        // immunizationList: state.patientReducer.childList.immunizations,
        displayPatient: state.patientReducer.display,
        parentId: state.patientReducer.parentId
    }
}

export default 
connect(mapStateToProps, {})
(PatientHome);