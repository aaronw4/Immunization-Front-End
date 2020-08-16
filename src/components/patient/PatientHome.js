import React, { useState} from 'react';
// import {useEffect} from 'react';
import { connect } from 'react-redux';
import './PatientHome.css';
import { PatientButton } from '../../styles/muiStyledButtons';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

library.add(faAngleRight);
library.add(faAngleDown);

const PatientHome = props => {
    // console.log('PROPS: ', props);
    //console.log('PROPS IMMUNIZATIONS: ', props.childImunizations);

    const [active, setActive] = useState(-1);

    const PatientContainer = styled.div`
        background: #f2f2f2;
        width: 80%;
        margin: 0 auto;
        min-height: 100vh;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-content: center;
        margin-bottom: 62px;
        @media(max-width: 599px){
              margin: 0;
              width: 100%;
          }
    `;

    const IconAlignment = styled.div`
          margin-top: 10px;
          margin-right: 36px;
          margin-bottom: 0;
    `;

    const TableHead = styled.div`
        display: flex;
        justify-content: space-around;
    `;

    const RowSpacing = styled.div`
        display: flex;
    `;

    const StatusContainer = styled.div`
        background: rgba(0, 0, 0, 0);
        border: 1px solid #A1A1A1;
        width: 26px;
        height: 26px;
        border-radius: 50%;
    `;

    const VacContainer = styled.div`
        margin: 0 auto;
        width: 50%;
        @media (max-width: 599px){
            width: 100%;
            margin: 0;
        }
    `;

    const Names = styled.p`
        margin: 10px 10%;
        display: flex;
        justify-content: space-between;
        background: #C5C5C5;
        font-size: 20px;
        font-weight: bold;
        p{
            margin-left: 10px;
            margin-top: 10px
        }
    `;

    const VacStyle = styled.p`
        min-width: 24%;
        margin-left: 10%;
        @media(max-width: 599px){    
            margin-left: 4%;
        }
    `;

    const ButtonContainer = styled.div`
          display: flex;
          width: 38%;
          margin: 0 auto;
          @media(max-width: 599px){    
            width: 100%;
          }
    `;

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
        props.history.push('/add-child');
    }

    const displayVacc = (index) => {
        setActive(index);
    }

    const permissionButton = () => {
        props.history.push('/permissions');
    }

    return(
        <PatientContainer>
            <ButtonContainer>
                <PatientButton onClick={addChildButton}>Add Child</PatientButton>
                <PatientButton onClick={permissionButton}>Permissions</PatientButton>
            </ButtonContainer>
            {  
                props.displayPatient && props.patientList.map((patient, index) => {
                
                // console.log('PATIENT: ', patient);
                return (
                    <>
                        <Names onClick={() => displayVacc(index)}>
                            <p>{patient.firstName} {patient.lastName}</p>
                            <IconAlignment>
                                {active === index ? 
                                <FontAwesomeIcon icon='angle-down' /> :
                                <FontAwesomeIcon icon='angle-right' />}
                            </IconAlignment>
                        </Names>
                        <VacContainer key={patient.id}>
                            <div key={patient.id}
                                className={active === index ? 'Show-Vaccines' : 'Hide-Vaccines'}>
                                <div>
                                    <TableHead>
                                        <h2>Status</h2>
                                        <h2>Vaccine</h2>
                                        <h2>Date</h2>
                                        <h2>Location</h2>
                                    </TableHead>
                                </div>
                                <div style={{width: '100%'}}>
                                     {patient.immunizations && patient.immunizations.map(vac => {
                                         let convertDate = new Date(vac.date);
                                       return <RowSpacing key={vac.id}>
                                                <div style={{margin: '0 11%'}}>
                                                    <StatusContainer>
                                                        <div style={vac.immunizationCompleted ? 
                                                        statusGreen : 
                                                        statusYellow}/>
                                                    </StatusContainer>
                                                </div>
                                                <VacStyle>{vac.vaccine}</VacStyle>
                                                <p style={{minWidth: '23%'}}>{convertDate.toDateString()}</p>
                                                <p>{vac.location}</p>
                                            </RowSpacing>
                                    })} 
                                        
                                </div>
                            </div>
                        </VacContainer>
                    </>
                )
            })}
        </PatientContainer>
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