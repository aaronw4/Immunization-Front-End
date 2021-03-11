import React from "react";
// import {useEffect, useState} from 'react';
// import ReactDOM from "react-dom";
import { withFormik, Form, Field } from "formik";
// import * as Yup from "yup";
// import axios from "axios";
import styled from 'styled-components';
import './AddChild.css';
import { connect } from 'react-redux';
import { addImmunizationUpdate } from '../../actions';


const Background = styled.div`
display: flex;
flex-flow: row;
justify-content: center;
background-color: lightgrey;
height: 40rem;
width:40rem;
margin-left: auto;
margin-right: auto;
padding:8rem;
`

const UpdateButton =styled.button`
width: 12rem;
height:3rem;
margin-top: 5rem;
margin-left:4rem;
border-radius: 3px;
justify-conent: center;
font-size: 20px;
text-align:center;
padding-top: .3rem;
background-color: #6b8496;

`

function UpdateImmune(props) {
//  const [immunization, setImmunization] = useState({});
  
//   const handleInput =e=> {
//     setImmunization({...immunization,[e.target.name]: e.target.value});
// }
  
  return (
    
    <Background>
    <Form>
      <div>
        <h6> Vaccine </h6>
        <Field id= 'vaccine'type="text" value={props.vaccine} name="vaccine" placeholder="Enter the Vaccine" />
      </div>
      <div>
        <h6> Date</h6>
        <Field id='vDate'type="text" value={props.date} name="date" placeholder="Enter the Date" />
      </div>
      <div>
        <h6>Next Immunization</h6>
        <Field type="text" value={props.nextImmunizationDate} name="nextImmunizationDate" placeholder="Enter date of next immunization" />
      </div>
      <div>
        <h6>Location</h6>
        <Field id="location" type="text" value={props.vLocation} name="location" placeholder="Enter the location" />
      </div>
      <UpdateButton type="submit">Update</UpdateButton>
    </Form>
    {/*{immunization.map(immunizations => (
      <div key={immunizations.id}> 
        <h1>{immunizations.vaccine} </h1> 
        <p> Date: {immunizations.date}</p>
        <p>Location: {immunizations.location}</p>
     </div>
    ))} */}
    </Background>
  );
}

const FormikUpdate = withFormik({
  mapPropsToValues({ vaccine, date, vLocation, nextImmunizationDate }) {
    return {
      vaccine: vaccine || "",
      date: date || "",
      location: vLocation || "",
      nextImmunizationDate: nextImmunizationDate || "",
      grantPermission: false,
      immunizationCompleted: false
    };
  },
  // validationSchema: Yup.object().shape({
  //   vaccine: Yup.string().required("Vaccine is required"),
  //   date: Yup.string().required("The date is required"),
  //   location: Yup.string().required("Location is required"),

   
  // }),
  handleSubmit(values,{props}) {
      console.log('VALUES: ', values);
      props.addImmunizationUpdate(values, props.match.params.id, props.userId, props);
      // axios
      //   .post("https://immunization-tracker-bw.herokuapp.com/child/${props.id}/immunization/${this.props.id}", values)
      //   .then(res => {
      //     console.log(res); 
      //     resetForm();
      //     setSubmitting(false);
      //   })
      //   .catch(err => {
      //     console.log(err); 
      //     setSubmitting(false);
      //   });
    
  }
})(UpdateImmune);

//export default FormikUpdate;

const mapStateToProps = state => {
  return {
    userId: state.patientReducer.userId
  }
}

export default 
connect(mapStateToProps, {addImmunizationUpdate})(FormikUpdate);