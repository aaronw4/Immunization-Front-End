<<<<<<< HEAD
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateChildAction } from '../../actions';
import { PatientButton } from '../../styles/muiStyledButtons';
import styled from 'styled-components';

const Permissions = props => {
    const [permission, setPermission] = useState({vaccine: 'Measles', 
                                                  location: '',
                                                  grantPermission: false});
    const [foundChild, setFoundChild] = useState(true);

    const typesofVaccines = [
        "Measles",
        "Rotavirus",
        "Smallpox",
        "Chickenpox",
        "Yellow Fever",
        "Heapatitis A",
        "Polio",
        "Rabies"
      ];

    const FormContainer = styled.div`
      display: flex;
      flex-direction: column;
      width: 80%;
      margin: 0 auto;
      background: #F2F2F2;
      height: 100vh;
    `;

    const Form = styled.form`
      width: 24%;
      margin: 0 auto;
      font-size: 230%;
    `;

    const Input = styled.input`
      font-size: 50%;
      max-width: 55%;
      border-radius: 2%;
    `;

    const Label = styled.label`
      width: 100%;
    `;

    const submitButton = {
        marginLeft: '16%'
    }
    
    const handleChange = e => {
        setPermission({...permission, [e.target.name]: e.target.value});
    }
=======
import React, { useState } from "react";
import { connect } from "react-redux";
import { updateChildAction } from "../../actions";
import styled from "styled-components";
import { Grid, Box } from "@material-ui/core";
import { useStyles } from "../../styles/muiFormStyles";
import { LoginButton } from "../../styles/muiStyledButtons";

const Permissions = props => {
  const [permission, setPermission] = useState({
    vaccine: "Measles",
    location: "Unknown",
    grantPermission: false
  });
  const [foundChild, setFoundChild] = useState(true);

  const typesofVaccines = [
    "Measles",
    "Rotavirus",
    "Smallpox",
    "Chickenpox",
    "Yellow Fever",
    "Heapatitis A",
    "Polio",
    "Rabies"
  ];

  const handleChange = e => {
    setPermission({ ...permission, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    let completeImmunizationValues = {};
    e.preventDefault();
    props.childList.forEach(child => {
      // console.log(`list: ${child.firstName} ${child.lastName} === input: ${nonImportant.childsName}`)
      if (`${child.firstName} ${child.lastName}` === permission.childsName) {
        child.immunizations.forEach(vac => {
          // console.log(`VaccineList: ${vac.vaccine} === input: ${permission.vaccine}`)
          if (vac.vaccine === permission.vaccine) {
            completeImmunizationValues = {
              ...vac,
              vaccine: permission.vaccine,
              location: permission.location,
              grantPermission: permission.grantPermission
            };
            props.updateChildAction(
              vac.id,
              completeImmunizationValues,
              props,
              props.userId
            );
          }
        });
      }
    });
    setFoundChild(false);
  };
>>>>>>> staging

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

<<<<<<< HEAD
    return(
        <FormContainer>
            <Form onSubmit={handleSubmit}>
                <Label>
                    I,<Input type='text' 
                    name='fullName' 
                    value={permission.fullName}
                    onChange={handleChange}
                    placeholder='Guardian Name'/>,
                </Label>
                <Label>
                    grant,
                    <Input type='text' 
                        name='location' 
                        value={permission.location}
                        onChange={handleChange}
                        placeholder='Doctors Location'/>,
                </Label>
                <Label>
                    Permission to update,
                    <Input type='text' 
                        name='childsName' 
                        value={permission.childsName}
                        onChange={handleChange}
                        placeholder='Childs Name'/>
                </Label>
                    <span>{foundChild ? null : <p>Child Name Not Found</p>}</span>
                <Label>
                    for the following immunization:
                    <select value={permission.vaccine} onChange={handleChange} name='vaccine'>
                        {typesofVaccines.map(vac => {
                            return <option value={vac}>{vac}</option>
                        })}
                    </select>
                </Label>
                    <PatientButton style={submitButton} type='submit'>submit</PatientButton>
            </Form>
        </FormContainer>
    )
}
=======
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
            <label className={classes.labels} htmlFor="fullName">
              I,{" "}
            </label>
            <input
              type="text"
              name="fullName"
              value={permission.fullName}
              onChange={handleChange}
              className={classes.inputs}
            />
            <label className={classes.labels} htmlFor="location">
              , grant,
            </label>
            <input
              type="text"
              name="location"
              value={permission.location}
              onChange={handleChange}
              className={classes.inputs}
            />
            <label className={classes.labels} htmlFor="childsName">
              , Permission to update,
            </label>
            <input
              type="text"
              name="childsName"
              value={permission.childsName}
              onChange={handleChange}
              className={classes.inputs}
            />
            <span>{foundChild ? null : <p>Child Name Not Found</p>}</span>
            <label className={classes.labels} htmlFor="vaccine">
              for the following immunization:
            </label>
            <select
              value={permission.vaccine}
              onChange={handleChange}
              name="vaccine"
              className={classes.inputs}
            >
              {typesofVaccines.map(vac => {
                return <option value={vac}>{vac}</option>;
              })}
            </select>
            <LoginButton variant="contained" type="submit">
              submit
            </LoginButton>
          </Grid>
        </form>
      </Box>
    </>
  );
};
>>>>>>> staging

const mapStateToProps = state => {
  return {
    childList: state.patientReducer.childList,
    userId: state.patientReducer.userId,
    user: state.loginReducer.user
  };
};

export default connect(
  mapStateToProps,
  { updateChildAction }
)(Permissions);
