import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addChildAction } from '../../actions';

const AddChild = props => {
    const [child, setChild] = useState({});

    const handleInput = e => {
        setChild({...child, [e.target.name]: e.target.value});
    }

    async function handleSubmit(e){
        e.preventDefault();
        await props.addChildAction(props.parentId, {
            "firstName": "Added Child",
            "lastName": "123",
            "dateOfBirth": "11/11/11",
            "socialSecuirtyNumber": "222-22-2222"
        }, props);
        
    }

    return (
    <form onSubmit={handleSubmit}>
        <input type='text' 
               name='firstName' 
               placeholder='First Name'
               onChange={handleInput}
               value={child.firstName}/>
        <input type='text' 
               name='lastName' 
               placeholder='Last Name'
               onChange={handleInput}
               value={child.lastName}/>
        <input type='text' 
               name='dateOfBirth' 
               placeholder='Date Of Birth'
               onChange={handleInput}
               value={child.dateOfBirth}/>
        <input type='text' 
               name='socialSecurityNumber' 
               placeholder='Social Security Number'
               onChange={handleInput}
               value={child.socialSecurityNumber}/>
        <button type='submit'>submit</button>
    </form>)
}

const mapStateToProps = state => {
    return {
        parentId: state.patientReducer.parentId
    }
}

export default connect(mapStateToProps, {addChildAction})(AddChild);