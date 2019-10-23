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
      // console.log('RES FROM LOGIN: ', res);
      localStorage.setItem("token", res.data.token);
      userId = res.data.user.id;
      dispatch({ type: SET_USER_ACTION, payload: userId });
      getChildrenAction(userId, props)(dispatch);
    })
    .catch(err => console.log("ERROR LOGIN: ", err));
};

export const getImmunizations = (childArr, history) => dispatch => {
  childArr.map((child, index) => {
    console.log("al;sdjfl;kajfdlja;fdsl");
    axiosWithAuth()
      .get(`/child/${child.id}/immunization`)
      .then(res => {
        dispatch({
          type: SET_IMMUNIZATION_ACTION,
          payload: { immuneObj: res.data, index: index }
        });
        if (index === childArr.length - 1) history.push(`/patient-home`);
      })
      .catch(err => console.log("ERROR IMMUNIZATION REQ: ", err));
  });
};

export const getChildrenAction = (parentId, props) => dispatch => {
  axiosWithAuth()
    .get(`/parent/${parentId}/children`)
    .then(res => {
      dispatch({ type: SET_CHILD_ACTION, payload: res.data });
      console.log("RES DATA: ", res.data);
      // console.log('SET CHILD');
      getImmunizations(res.data, props.history)(dispatch);
      //    console.log('RES_DATA: ', res.data);
    })
    .catch(err => console.log("ERROR CHILD REQ: ", err));
};

export const addChildAction = (parentId, childObj, props) => dispatch => {
  axiosWithAuth()
    .post(`/parent/${parentId}/children`, childObj)
    .then(res => {
      console.log("RES FROM ADD CHILD ACTION: ", res);
      getChildrenAction(parentId, props)(dispatch);
    })
    .catch(err => console.log("ERROR: ", err));
};

export const updateChildAction = (vacId, vacObj, props, userId) => dispatch => {
  const vaccineObjectReq = {
    vaccine: "Editedd",
    immunizationCompleted: false,
    date: vacObj.date,
    location: vacObj.location,
    grantPermission: false,
    nextImmunizationDate: vacObj.nextImmunizationDate || ""
  };

  const vaccineObjectText = {
    vaccine: "Editedd",
    date: "11/1k1ff555/17",
    location: "XXX Medical City",
    immunizationCompleted: false,
    grantPermission: true
  };
  console.log("VAC OBJ: ", vaccineObjectReq);
  console.log("VAC OBJ TEXT: ", vaccineObjectText);
  axiosWithAuth()
    .put(`/child/immunization/${vacId}`, vaccineObjectReq)
    .then(res => {
      console.log("Success Put: ", res);
      getChildrenAction(userId, props)(dispatch);
    })
    .catch(err => console.log("ERROR: ", err));
};
