import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './PatientHome.css';

const PatientHome = props => {
    // console.log('PROPS: ', props);
    //console.log('PROPS IMMUNIZATIONS: ', props.childImunizations);

    const [active, setActive] = useState(-1);

    const tableHead = {
        display: 'flex',
        justifyContent: 'space-around'
    }

    const rowSpacing = {
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: '10px'
    }

    const statusContainer = {
        background: 'rgba(0, 0, 0, 0)',
        border: '1px solid #A1A1A1',
        width: '26px',
        height: '26px',
        borderRadius: '50%'
    }

    const statusGreen = {
        background: '#229449',
        borderRadius: '50%',
        width: '20px',
        height: '20px',
        margin: 'auto',
        marginTop: '3%'
    }

    const statusYellow = {
        background: '#DBD424',
        borderRadius: '50%',
        width: '20px',
        height: '20px',
        margin: 'auto',
        marginTop: '3%'
    }

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
        <div className='Patient-Container'>
            <button onClick={addChildButton}>Add Child</button>
            <button onClick={permissionButton}>Permissions</button>
            {  
                props.displayPatient && props.patientList.map((patient, index) => {
                
                // console.log('PATIENT: ', patient);
                return (
                    <>
                        <h1 onClick={() => displayVacc(index)}>{patient.firstName} {patient.lastName}</h1>
                        <div key={patient.id} style={{margin: '0 auto', width: '50%'}}>
                            <table key={patient.id}
                                className={active === index ? 'Show-Vaccines' : 'Hide-Vaccines'}>
                                <thead>
                                    <tr style={tableHead}>
                                        <th>Status</th>
                                        <th>Vaccine</th>
                                        <th>Date</th>
                                        <th>Location</th>
                                    </tr>
                                </thead>
                                <tbody style={{width: '100%'}}>
                                    {patient.immunizations && patient.immunizations.map(vac => {
                                        let convertDate = new Date(vac.date);
                                        return <tr key={vac.id} style={rowSpacing}>
                                                    <td>
                                                        <div style={statusContainer}>
                                                            <div style={vac.immunizationCompleted ? 
                                                            statusGreen : 
                                                            statusYellow}
                                                            className='Space-between-Table' />
                                                        </div>
                                                    </td>
                                                    <td className='Space-between-Table'>{vac.vaccine}</td>
                                                    <td className='Space-between-Table'>{convertDate.toDateString()}</td>
                                                    <td>{vac.location}</td>
                                                </tr>
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </>
                )
            })}
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