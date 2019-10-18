import { SET_IMMUNIZATION_ACTION } from '../actions';
import { SET_CHILD_ACTION } from '../actions';

const initialState = {
    childList: [
        /* 
            {
                name: [type text]
                age: [type text]
                social: [type text]
                signUpCode: [type text] //do I need to keep this in state?
                immunizations: [
                    {
                        immunizationName: [type text]
                        DateOfVaccination: [type text]
                        hasShot: [type bool]
                    }
                ]
            }
        */
    ]
}

export const reducer = (state = initialState, action) => {
    
    switch(action.type){
        case SET_CHILD_ACTION:
            return {
                childList: action.payload
            }
        case SET_IMMUNIZATION_ACTION:
            let tempArr = state.childList;
            tempArr[action.payload.index].immunizations = action.payload.immuneObj;
            return {
                childList: tempArr
            }
        default:
            return state;
    }
}