import React, { useEffect, useState } from "react";
import axios from "axios";
import {Route} from "react-router-dom";
import {axiosWithAuth} from '../../utils';

export default function DoctorHome() {
    const [patients, setPatients] = useState({});


useEffect(() => {
    const getPatients = () => {
        axiosWithAuth()
            .get()
            .then(response => {
                setPatients(response.data);
                console.log(response.data);
            })
            .catch(err => {
                console.log(err);
            });
    }
    getPatients();
})


}