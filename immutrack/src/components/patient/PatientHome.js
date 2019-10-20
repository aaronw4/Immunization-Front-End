import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getParentAction } from '../../actions';
import { getChildrenAction } from '../../actions';
import { getImmunizations } from '../../actions';
import './PatientHome.css';

const PatientHome = props => {
    // console.log('PROPS: ', props);
    //console.log('PROPS IMMUNIZATIONS: ', props.childImunizations);

    const [active, setActive] = useState(-1);

    // useEffect(() => {
    //     props.getChildrenAction(props.parentId);
    // }, []);
    

    const addChild = () => {
        setTimeout(() => props.history.push('/add-child'), 1000);
    }

    const displayVacc = (index) => {
        setActive(index);
    }

    return(
        <div>
            {
                props.displayPatient && props.patientList.map((patient, index) => {
                    
                    // console.log('PATIENT: ', patient);
                    return (
                        <div key={patient.id} 
                             onClick={() => displayVacc(index)} >

                            <h1>{patient.firstName}</h1>
                            {/* {console.log('SECOND')} */}
                            <div className={active === index ? 'Show-Vaccines' : 'Hide-Vaccines'} >
                                {patient['immunizations'].map(vac => {
                                    return <h2 key={vac.id}>{vac.vaccine}</h2>
                                })}
                            </div>
                    </div>)
            })}
            <button onClick={addChild}>Add Child</button>
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
connect(mapStateToProps, {getParentAction, getChildrenAction, getImmunizations})
(PatientHome);