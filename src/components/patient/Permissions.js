import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateChildAction } from '../../actions';
import { container } from '../../styles/muiFormStyles';
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
      max-width: 10%;
    `;
    
    const handleChange = e => {
        setPermission({...permission, [e.target.name]: e.target.value});
    }

    const handleSubmit = e => {
        let completeImmunizationValues = {};
        e.preventDefault();
        props.childList.forEach(child => {
            // console.log(`list: ${child.firstName} ${child.lastName} === input: ${nonImportant.childsName}`)
            if(`${child.firstName} ${child.lastName}` === permission.childsName){
                child.immunizations.forEach(vac => {
                    // console.log(`VaccineList: ${vac.vaccine} === input: ${permission.vaccine}`)
                    if(vac.vaccine === permission.vaccine){
                        completeImmunizationValues = {...vac, 
                                                      vaccine: permission.vaccine,
                                                      location: permission.location,
                                                      grantPermission: permission.grantPermission}
                        props.updateChildAction(vac.id, completeImmunizationValues, props, props.userId);
                    }
                })
            }
        })
        setFoundChild(false);
    }

    return(
        <FormContainer>
            <Form onSubmit={handleSubmit}>
                I, <input type='text' 
                    name='fullName' 
                    value={permission.fullName}
                    onChange={handleChange}
                    placeholder='Guardian Name'/>,
                grant, 
                    <input type='text' 
                        name='location' 
                        value={permission.location}
                        onChange={handleChange}
                        placeholder='Doctors Location'/>,
                Permission to update, 
                    <input type='text' 
                        name='childsName' 
                        value={permission.childsName}
                        onChange={handleChange}
                        placeholder='Childs Name'/>
                    <span>{foundChild ? null : <p>Child Name Not Found</p>}</span>
                for the following immunization:
                    <select value={permission.vaccine} onChange={handleChange} name='vaccine'>
                        {typesofVaccines.map(vac => {
                            return <option value={vac}>{vac}</option>
                        })}
                    </select>
                    <button type='submit'>submit</button>
            </Form>
        </FormContainer>
    )
}

const mapStateToProps = state => {
    return {
        childList: state.patientReducer.childList,
        userId: state.patientReducer.userId,
        user: state.loginReducer.user
    }
}

export default connect(mapStateToProps, {updateChildAction})(Permissions);