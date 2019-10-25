
import { combineReducers } from "redux";
import { loginReducer } from "./loginReducers";
import { patientReducer } from './patientReducers';

export default combineReducers({
  loginReducer, patientReducer
});
