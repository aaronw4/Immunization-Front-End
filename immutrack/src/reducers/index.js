import { combineReducers } from "redux";
import { loginReducer } from "./loginReducers";
import { patientReducer } from "./patientReducers";
import { registerReducer } from "./registerReducer";

export default combineReducers({
  loginReducer,
  patientReducer,
  registerReducer
});
