import React, { useState } from 'react';

const AddChild = () => {
    const [child, setChild] = useState({});

    const handleInput = e => {
        setChild({...child, [e.target.name]: e.target.value});
    }

    const handlSubmit = e => {
        e.preventDefault();
    }
    return (
    <form>
        <input type='text' 
               name='name' 
               placeholder='Childs Name'
               onChange={handleInput}/>
        <input type='text' 
               name='name' 
               placeholder='Childs Name'
               onChange={handleInput}/>
        <input type='text' 
               name='name' 
               placeholder='Childs Name'
               onChange={handleInput}/>
        <input type='text' 
               name='name' 
               placeholder='Childs Name'
               onChange={handleInput}/>
        <butto type='submit'>submit</butto>
    </form>)
}

export default AddChild;