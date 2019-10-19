import React, { useEffect, useState } from "react";
import {axiosWithAuth} from './axios';
import {Link, Route} from 'react-router-dom';

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
    console.log(searchTerm);
  };

return (
    <div>
        <Route exact path='/'>
        <form className='form'>
            <input
            id="name"
            type="text"
            name="textfield"
            placeholder="Search"
            value={searchTerm}
            onChange={handleChange}
            className='input'
            />
        </form>     
        
        {searchResults.map(patient => (
            <Link to='#'>
                <p>{patient.firstName} {patient.lastName}</p>
            </Link>
        ))}
         </Route>
    </div>
)
}