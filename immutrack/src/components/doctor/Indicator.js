import React, { useEffect, useState } from "react";
import {axiosWithAuth} from './axios';
import styled from 'styled-components';

const Green = styled.button`
margin-left: 5px;
width: 40px;
height: 40px;
left: 39px;
top: 196px;
background: #19602D
`;

const Yellow = styled.button`
margin-left: 5px;
width: 40px;
height: 40px;
left: 39px;
top: 250px;
background: linear-gradient(0deg, #DBF829, #DBF829), #F3F3F3;
`;

const White = styled.button`
margin-left: 5px;
width: 40px;
height: 40px;
left: 39px;
top: 304px;
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
}, [])

    return(
        <Green/>
    )

}