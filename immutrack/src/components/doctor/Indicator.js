import React, { useEffect, useState } from "react";
import {axiosWithAuth} from './axios';
import styled from 'styled-components';

const Green = styled.button`
border-radius: 100%;
width: 20px;
height: 20px;
border: 2px solid #FFFFFF;
padding-top: 5px;
background: #229449;
`;

const Yellow = styled.button`
border-radius: 100%;
width: 20px;
height: 20px;
padding-top: 5px;
background: #DBD424;
border: 2px solid #FFFFFF;
`;

const White = styled.button`
border-radius: 100%;
width: 20px;
height: 20px;
border: 2px solid #FFFFFF;
padding-top: 5px;
background: linear-gradient(0deg, #F3F3F3, #F3F3F3), #F3F3F3;
`;

export default function Indicator(props) {
    const [immunization, setImmunization] = useState([]);

useEffect(() => {
    const getShotInfo = () => {
        axiosWithAuth()
            .get(`https://immunization-tracker-bw.herokuapp.com/child/${props.id}/immunization`)
            .then(response => {
                setImmunization(response.data);
                console.log(response.data);
            })
            .catch(err => {
                console.log(err);
            });
    }
    getShotInfo();
    
}, [props.id])

var dates = immunization.map(date => date.dateCompleted);
var today = new Date();
var nextDate = dates.filter(date => today > date);
var number = dates.indexOf(nextDate);
var permisson = ((immunization || {})[number] || {}).grantPermission;
console.log(((immunization || {})[0] || {}).grantPermission)

    return(
        <div>
            {nextDate.length === 0 ? <White/> : null}
            {nextDate.length !== 0 && permisson === false ? <Yellow/> : null}
            {nextDate.length !== 0 && permisson === true ? <Green/> : null}
        </div>
    )
}