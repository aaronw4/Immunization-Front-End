import React, {useState, useEffect} from "react";
import {axiosWithAuth} from './axios';
import Indicator from './Indicator';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

export default function SinglePatient() {
    const [patient, setPatient] = useState({});
    const [immunization, setImmunization] = useState([]);
    const id = window.location.pathname;

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
    background: #E1F2F6;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
    align-items: center;

    @media (max-width: 500px) {
        width: 350px
    }
    `;

    const PatientString = styled.div`
    width: 750px;
    display: flex;
    justify-content: space-between;
    padding: 10px;

    @media (max-width: 500px) {
        width: 350px
    }
    `;

    const Button = styled.button`
    background: #87A9B0;
    border: 1px solid #527F89;
    width: 200px;
    height: 50px;
    margin: 25px auto 0 auto;
    `;

    useEffect(() => {
        const getPatient = () => {
            axiosWithAuth()
                .get(`https://immunization-tracker-bw.herokuapp.com/parent/children${id}`)
                .then(response => {
                    setPatient(response.data);
                    console.log(response.data);
                })
                .catch(err => {
                    console.log(err);
                });
        }
        getPatient();
    }, [id])    

    useEffect(() => {
        const getShotInfo = () => {
            axiosWithAuth()
                .get(`https://immunization-tracker-bw.herokuapp.com/child${id}/immunization`)
                .then(response => {
                    setImmunization(response.data);
                    console.log(response.data);
                })
                .catch(err => {
                    console.log(err);
                });
        }
        getShotInfo();
        
    }, [id])

    return(
        <div>
            <Header>
                <div><h2>{patient.lastName}, {patient.firstName}</h2></div>
                <div><Indicator id={patient.id}/></div>
            </Header>            
            <PatientCont>
                {immunization.map(shot => (
                    shot.immunizationCompleted === true ? null : <PatientButton key={shot.id}><PatientString><div>{shot.vaccine}</div> due {shot.nextImmunizationDate.slice(0,10)}</PatientString></PatientButton>
                ))}
                {immunization.map(shot => (  
                    shot.immunizationCompleted === true ? <PatientButton key={shot.id}><PatientString><div>{shot.vaccine}</div> <div> completed on {shot.date.slice(0,10)}</div></PatientString></PatientButton> : null
                ))}
            </PatientCont>
            <Link to='/UpdateImmune'><Button>Add Record</Button></Link>
        </div>
    )
}