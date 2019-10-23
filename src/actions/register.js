import { axiosWithAuth } from "../utils/axiosWithAuth";

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const register = (props, resetForm, values) => dispatch => {
  dispatch({ type: REGISTER_REQUEST });
  axiosWithAuth()
    .post(`/auth/register/parents`, values)
    .then(res => {
      dispatch({ type: REGISTER_SUCCESS, payload: res.data.message });
      props.history.push("/login");
    })
    .catch(err => {
      dispatch({
        type: REGISTER_FAILURE,
        payload: `${err.response.status} - ${err.response.statusText}`
      });
      resetForm();
    });
};
