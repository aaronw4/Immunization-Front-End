import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateChildAction } from '../../actions';

const Permissions = props => {
    const [permission, setPermission] = useState({vaccine: 'Measles', 
                                                  location: 'Unknown',
                                                  grantPermission: true,
                                                  immunizationCompleted: false,
                                                  date: 'asdfsafdsadf'})
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
        setPermission({...permission, [e.target.name]: e.target.value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.childList.forEach(child => {
            console.log(`list: ${child.firstName} ${child.lastName} === input: ${permission.childsName}`)
            if(`${child.firstName} ${child.lastName}` === permission.childsName){
                child.immunizations.forEach(vac => {
                    console.log(`VaccineList: ${vac.vaccine} === input: ${permission.vaccine}`)
                    if(vac.vaccine === permission.vaccine){
                        props.updateChildAction(vac.id, permission, props);
                    }
                })
            }
        })
        setFoundChild(false);
    }

    return(
        <form onSubmit={handleSubmit}>
            I, <input type='text' 
                name='fullName' 
                value={permission.fullName}
                onChange={handleChange}/>,
            grant, 
                <input type='text' 
                    name='doctorsOffice' 
                    value={permission.doctorsOffice}
                    onChange={handleChange}/>,
            Permission to update, 
                <input type='text' 
                    name='childsName' 
                    value={permission.childsName}
                    onChange={handleChange}/>
                <span>{foundChild ? null : <p>Child Name Not Found</p>}</span>
            for the following immunization:
                <select value={permission.vaccine} onChange={handleChange} name='vaccine'>
                    {typesofVaccines.map(vac => {
                        return <option value={vac}>{vac}</option>
                    })}
                </select>
                <button type='submit'>submit</button>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        childList: state.patientReducer.childList
    }
}

export default connect(mapStateToProps, {updateChildAction})(Permissions);