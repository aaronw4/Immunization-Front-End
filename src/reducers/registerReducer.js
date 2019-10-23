import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE
} from "../actions/register";

const initialState = {
  values: {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: ""
  },
  isRequesting: false,
  error: ""
};

export const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return {
        ...state,
        isRequesting: true
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        values: action.payload,
        isRequesting: false
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        isRequesting: false,
        error: action.payload
      };
    default:
      return state;
  }
};
