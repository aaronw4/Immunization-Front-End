import React, { useEffect, useState } from "react";
import {axiosWithAuth} from './axios';
import {Link, Route} from 'react-router-dom';
import styled from 'styled-components';

const PatientCont = styled.div`
    margin-top: 40px;
`;

const PatientButton = styled.div`
    width: 350px;
    height: 50px;
    left: 32px;
    top: 191px;    
    background: #C4C4C4;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
`;

const Record = styled.button`
    background: #848484;
    border-radius: 20px;
    width: 80px;
    height: 25px;
    justify-content: center;
    margin-right: 10px;
`;


export default function DoctorHome() {
    const [patients, setPatients] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

useEffect(() => {
    const getPatients = () => {
        axiosWithAuth()
            .get('https://immunization-tracker-bw.herokuapp.com/provider/1/children')
            .then(response => {
                setPatients(response.data);
                setSearchResults(response.data);
                console.log(response.data);
            })
            .catch(err => {
                console.log(err);
            });
    }
    getPatients();
}, [])

useEffect (() => {    
    const results = patients.filter(patient =>
        
        patient.firstName.includes(searchTerm) || patient.lastName.includes(searchTerm)
    );
    setSearchResults(results);
}, [searchTerm]);

const handleChange = event => {
    setSearchTerm(event.target.value);
  };

return (
    <div>
        <Route exact path='/'>
        <h2>Patient Status</h2>
        <form className='form'>
            <input
            id="name"
            type="text"
            name="textfield"
            placeholder="&#x1F50D;"
            value={searchTerm}
            onChange={handleChange}
            className='input'
            />
        </form>     
        <PatientCont>
            {searchResults.map(patient => (            
                <PatientButton>
                <button>xxxx</button>
                <p>{patient.firstName} {patient.lastName}</p>
                <Record>Record</Record>
                </PatientButton>            
            ))}
        </PatientCont>
         </Route>
    </div>
)
}