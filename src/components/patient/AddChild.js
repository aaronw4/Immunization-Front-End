<<<<<<< HEAD
import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import { withFormik, Form, Field } from "formik";
import styled from 'styled-components';
import axios from 'axios';
import * as Yup from "yup";
import './AddChild.css';

const Background = styled.div`
display: flex;
flex-flow: row;
justify-content: center;
background-color: lightgrey;
height: 40rem;
width:40rem;
margin-left: 30rem;
margin-right:15rem;
padding:5rem;
`
const SubmitButton =styled.div`
width: 12rem;
height:3rem;
margin-top: 3rem;
margin-left:3.5rem;
border-radius: 3px;
justify-conent: center;
font-size: 20px;
text-align:center;
padding-top: .3rem;
background-color: #6b8496;

`


function AddChild(props) {
  const [child, setChild] = useState([])
  
  const handleInput =e=> {
      setChild({...child,[e.target.name]: e.target.value});
  }
  return (
    <Background>
    <Form>

      <div>
        <h6> Child's Name </h6>
        
        <Field onChange={handleInput} id="childName" value={props.firstName, props.lastName} type="text" name="name" placeholder="Enter your Child's Name"  /> 
      </div>
      <div>
        <h6> Date of Birth</h6>
        <Field onChange={handleInput} id='dateOfBirth' value= {props.dateOfBirth} type="text" name="dateOfBirth" placeholder="Enter your Childs's Date of Birth"  />
      </div>
      <div>
        <h6>Social Security</h6>
        <Field onChange={handleInput} id="socialSecurityNumber" value={props.socialSecurityNumber} type="text" name="socialSecurityNumber" placeholder="Enter your Child's SSN"  />
      </div>
      <div>
        <h6>Sign Up Code</h6>
        <Field onChange={handleInput} id="parent_id" value={props.parent_id} type="text" name="parent_id" placeholder="Enter your Sign up Code"  />
      </div>
      <SubmitButton type="submit">Submit</SubmitButton>
      
    </Form>
    {/*{child.map(child => (
        <div key={child.id}> 
          <h1>{child.name} </h1> 
          <p>DOB: {child.dateOfBirth}</p>
          <p>SSN: {child.size}</p>
       </div>
      ))}*/}
    
    </Background>
  );
}

const FormikAddChild = withFormik({
  mapPropsToValues({ name, dateOfBirth, socialSecurityNumber,parent_id}) {
    return {
      name: name || "",
      dateOfBirth: dateOfBirth || "",
      socialSecurityNumber: socialSecurityNumber || "",
      parent_id: parent_id || "",
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required("Name is required"),
    dateOfBirth: Yup.string().required("DOB is required"),
    socialSecurityNumber: Yup.string().required("SSN is required"),
    parent_id: Yup.string().required("Code is required"),

   
  }),
  handleSubmit(values,props, { resetForm, setErrors, setSubmitting }) {
      
    axios
        .post(`https://immunization-tracker-bw.herokuapp.com/parent/${props.id}/children`, values)
        .then(res => {
          console.log(res); 
          resetForm();
          setSubmitting(true);
        })
        .catch(err => {
          console.log(err); 
          setSubmitting(false);
        });
    
  }
})(AddChild);

export default FormikAddChild;
=======
import React, { useState } from "react";
import { connect } from "react-redux";
import { addChildAction } from "../../actions";
import styled from "styled-components";
import { Grid, Box } from "@material-ui/core";
import { useStyles } from "../../styles/muiFormStyles";
import { LoginButton } from "../../styles/muiStyledButtons";

const AddChild = props => {
  const [child, setChild] = useState({});

  const handleInput = e => {
    setChild({ ...child, [e.target.name]: e.target.value });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    await props.addChildAction(props.userId, child, props);
  }

  const Title = styled.div`
    width: 80%;
    margin: 0 auto;
    padding: 10px;
    background: #c5c5c5;
    border-top: 1px solid #000;
    font-size: 20px;
    text-align: center;
    @media (max-width: 599px) {
      width: 100%;
    }
  `;

  const classes = useStyles();

  return (
    <>
      <Title>Add Child</Title>
      <Box className={classes.root}>
        <form onSubmit={handleSubmit}>
          <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
          >
            <label className={classes.labels} htmlFor="firstName">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              //   placeholder="First Name"
              onChange={handleInput}
              value={child.firstName}
              className={classes.inputs}
            />
            <label className={classes.labels} htmlFor="lastName">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              //   placeholder="Last Name"
              onChange={handleInput}
              value={child.lastName}
              className={classes.inputs}
            />
            <label className={classes.labels} htmlFor="dateOfBirth">
              Date of Birth
            </label>
            <input
              type="text"
              name="dateOfBirth"
              //   placeholder="Date Of Birth"
              onChange={handleInput}
              value={child.dateOfBirth}
              className={classes.inputs}
            />
            <label className={classes.labels} htmlFor="socialSecurityNumber">
              Social Security Number
            </label>
            <input
              type="text"
              name="socialSecurityNumber"
              //   placeholder="Social Security Number"
              onChange={handleInput}
              value={child.socialSecuirtyNumber}
              className={classes.inputs}
            />
            <LoginButton variant="contained" type="submit">
              submit
            </LoginButton>
          </Grid>
        </form>
      </Box>
    </>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    userId: state.patientReducer.userId
  };
};

export default connect(
  mapStateToProps,
  { addChildAction }
)(AddChild);
>>>>>>> staging
