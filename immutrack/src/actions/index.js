import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export const SET_CHILD_ACTION = 'SET_CHILD_ACTION';
export const SET_IMMUNIZATION_ACTION = 'SET_IMMUNIZATION_ACTION';
export const SET_PARENT_ACTION = 'SET_PARENT_ACTION';

export function getParentAction (props, credentials){
    return function(dispatch){
        let parentId = -1;
        axiosWithAuth()
            .post(`/auth/login/${props.user}`, credentials)
            .then(res => {
                // console.log('RES FROM LOGIN: ', res);
                localStorage.setItem('token', res.data.token);
                parentId = res.data.user.id;
                dispatch({type: SET_PARENT_ACTION, payload: parentId});
                getChildrenAction(parentId, props)(dispatch);
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
                    console.log('INDEX: ', index);
                    console.log('CHILD ARRAY LENGTH: ', childArr.length - 1);
                    if(index === childArr.length - 1)
                        setTimeout(() => history.push(`/patient-home`), 1000);
                })
                .catch(err => console.log('ERROR IMMUNIZATION REQ: ', err));
        })
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