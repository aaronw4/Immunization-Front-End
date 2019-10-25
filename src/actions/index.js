import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export const SET_CHILD_ACTION = 'SET_CHILD_ACTION';
export const SET_IMMUNIZATION_ACTION = 'SET_IMMUNIZATION_ACTION';
export const SET_USER_ACTION = 'SET_USER_ACTION';

<<<<<<< HEAD
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
=======
export function loginAction (props, credentials){
    return function(dispatch){
        let userId = -1;
        axiosWithAuth()
            .post(`/auth/login/${props.user}`, credentials)
            .then(res => {
                // console.log('RES FROM LOGIN: ', res);
                localStorage.setItem('token', res.data.token);
                userId = res.data.user.id;
                dispatch({type: SET_USER_ACTION, payload: userId});
                getChildrenAction(userId, props)(dispatch);
            })
            .catch(err => console.log('ERROR LOGIN: ', err));
    }
}

export function getImmunizations(childArr, history) {
    return function(dispatch){
        childArr.map((child, index) => {
            axiosWithAuth().get(`/child/${child.id}/immunization`)
            .then(res => {
                    dispatch({type: SET_IMMUNIZATION_ACTION, payload: {immuneObj: res.data, index: index}});
                    if(index === childArr.length - 1)
                        setTimeout(() => history.push(`/patient-home`), 1000);
                })
            .catch(err => console.log('ERROR IMMUNIZATION REQ: ', err));
        });
    }
}

export function getChildrenAction(parentId, props){
    return function(dispatch){
        axiosWithAuth()
           .get(`/parent/${parentId}/children`)
           .then(res => {
               dispatch({type: SET_CHILD_ACTION, payload: res.data});
               // console.log('SET CHILD');
               getImmunizations(res.data, props.history)(dispatch);
           })
           .catch(err => console.log('ERROR CHILD REQ: ', err));
    }
}

export const addChildAction = (parentId, childObj, props) => dispatch => {
    axiosWithAuth()
        .post(`/parent/${parentId}/children`, childObj)
        .then(res => {
            console.log('RES FROM ADD CHILD ACTION: ', res);
            getChildrenAction(parentId, props)(dispatch);
        })
        .catch(err => console.log('ERROR: ', err));
}

export const updateChildAction = (vacId, vacObj, props) => dispatch => {
    // const vaccineObjectReq = {vaccine: vacObj.vaccine, 
    //                           immunizationCompleted: vacObj.immunizationCompleted,
    //                           date: vacObj.date,
    //                           location: vacObj.location,
    //                           grantPermission: vacObj.grantPermission};
    const vaccineObjectReq = {
                                "vaccine": 'asdfasdfsafd',
                                "date": 'asdfsadf',
                                "location": 'asdf',
                                "immunizationCompleted": true,
                                "grantPermission": true
                            }
    console.log('VAC OBJ: ', vaccineObjectReq);
    axiosWithAuth()
        .put(`/child/immunization/${vacId}`, vaccineObjectReq)
        .then(res => {
            console.log('Success Put: ', res);
            getChildrenAction(vacId, props)(dispatch);
        })
        .catch(err => console.log('ERROR: ', err));
}
>>>>>>> 7aa28d37aa2042ed4ed77f65e86bed0c0ff0bbe8
