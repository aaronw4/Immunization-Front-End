import { PARENT, PROVIDER } from "../actions/loginType";

export const loginReducer = (state = { user: "" }, action) => {
  switch (action.type) {
    case PARENT:
      return {
        ...state,
        user: action.payload
      };
    case PROVIDER:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};
