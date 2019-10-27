import { SET_IMMUNIZATION_ACTION } from "../actions";
import { SET_CHILD_ACTION } from "../actions";
import { SET_USER_ACTION } from "../actions";

const initialState = {
  childList: [
    {
      firstName: "Brandon",
      immunizations: [
        {
          vaccine: "stuff"
        }
      ]
    }
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
  ],
  display: false,
  userId: -1
};

export const patientReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHILD_ACTION:
      return {
        ...state,
        childList: action.payload,
        display: false
      };
    case SET_IMMUNIZATION_ACTION:
      let tempArr = [...state.childList];
      tempArr[action.payload.index].immunizations = action.payload
        .immuneObj || { Empty: 0 };
      return {
        ...state,
        childList: [...tempArr],
        display: true
      };
    case SET_USER_ACTION:
      return {
        ...state,
        userId: action.payload,
        display: false
      };
    default:
      return state;
  }
};
