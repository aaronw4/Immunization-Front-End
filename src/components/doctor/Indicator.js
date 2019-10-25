import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import styled from "styled-components";

const Green = styled.button`
  border-radius: 100%;
  width: 20px;
  height: 20px;
  border: 2px solid #ffffff;
  padding-top: 5px;
  background: #229449;
`;

const Yellow = styled.button`
  border-radius: 100%;
  width: 20px;
  height: 20px;
  padding-top: 5px;
  background: #dbd424;
  border: 2px solid #ffffff;
`;

const White = styled.button`
  border-radius: 100%;
  width: 20px;
  height: 20px;
  border: 2px solid #ffffff;
  padding-top: 5px;
  background: linear-gradient(0deg, #f3f3f3, #f3f3f3), #f3f3f3;
`;

const IndicatorCont = styled.div`
  border-radius: 100%;
  width: 24px;
  height: 24px;
  background: #a1a1a1;
  margin-left: 10px;
`;

export default function Indicator(props) {
  // console.log('INDICATOR  _PATIENT: ', props.patient);
  const [immunization, setImmunization] = useState(props.patient.immunizations);

  // useEffect(() => {
  //   const getShotInfo = () => {
  //     axiosWithAuth()
  //       .get(
  //         `https://immunization-tracker-bw.herokuapp.com/child/${props.id}/immunization`
  //       )
  //       .then(response => {
  //         setImmunization(response.data);
  //         console.log(response.data);
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       });
  //   };
  //   getShotInfo();
  // }, [props.id]);

  var dates = immunization.map(date => new Date(date.nextImmunizationDate));
  var today = new Date();
  var nextDates = dates.filter(date => today >= date);
  var nextDate = nextDates.sort((a, b) => a - b);
  var number = dates.indexOf(nextDate[0]);
  var permisson = ((immunization || {})[number] || {}).grantPermission;
  
  return (    
    <IndicatorCont>
      {nextDate.length === 0 ? <White /> : null}
      {nextDate.length !== 0 && permisson === false ? <Yellow /> : null}
      {nextDate.length !== 0 && permisson === true ? <Green /> : null}
    </IndicatorCont>  
  );
}