import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export const SET_CHILD_ACTION = "SET_CHILD_ACTION";
export const SET_IMMUNIZATION_ACTION = "SET_IMMUNIZATION_ACTION";
export const SET_USER_ACTION = "SET_USER_ACTION";

export const loginAction = (props, credentials) => dispatch => {
  let userId = -1;
  axiosWithAuth()
    .post(`/auth/login/${props.user}`, credentials)
    .then(res => {
      localStorage.setItem("token", res.data.token);
      userId = res.data.user.id;
      dispatch({ type: SET_USER_ACTION, payload: userId });
      getChildrenAction(userId, props)(dispatch);
    })
    .catch(err => console.log("ERROR LOGIN: ", err));
};

export const getImmunizations = (childArr, history, user) => dispatch => {
  childArr.map((child, index) => {
    axiosWithAuth()
      .get(`/child/${child.id}/immunization`)
      .then(res => {
        dispatch({
          type: SET_IMMUNIZATION_ACTION,
          payload: { immuneObj: res.data, index: index }
        });
        history.push(`/${user}-home`);
      })
      .catch(err => console.log("ERROR IMMUNIZATION REQ: ", err));
  });
};

export const getChildrenAction = (userId, props) => dispatch => {
  if(props.user === 'parents'){
    axiosWithAuth()
      .get(`/parent/${userId}/children`)
      .then(res => {
        dispatch({ type: SET_CHILD_ACTION, payload: res.data });
        getImmunizations(res.data, props.history, 'patient')(dispatch);
      })
      .catch(err => console.log("ERROR CHILD REQ: ", err));
  } else {
    axiosWithAuth()
      .get(`/provider/${userId}/children`)
      .then(res => {
        dispatch({ type: SET_CHILD_ACTION, payload: res.data });
        getImmunizations(res.data, props.history, 'doctor')(dispatch);
      })
      .catch(err => console.log("ERROR CHILD REQ: ", err));
  }
};

export const addChildAction = (parentId, childObj, props) => dispatch => {
  axiosWithAuth()
    .post(`/parent/${parentId}/children`, childObj)
    .then(res => {
      getChildrenAction(parentId, props)(dispatch);
    })
    .catch(err => console.log("ERROR: ", err));
};

export const updateChildAction = (vacId, vacObj, props, userId) => dispatch => {

  axiosWithAuth()
    .put(`/child/immunization/${vacId}`, vacObj)
    .then(res => {
      console.log("Success Put: ", res);
      getChildrenAction(userId, props)(dispatch);
    })
    .catch(err => console.log("ERROR: ", err));
};
