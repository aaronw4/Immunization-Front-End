//import axios form 'axios';
export const SET_CHILD_ACTION = 'SET_CHILD_ACTION';
export const SET_IMMUNIZATION_ACTION = 'SET_IMMUNIZATION_ACTION';

import { axiosWithAuth } from '../utils/axiosWithAuth';

export const loginAction = (credentials, userType) => dispatch => {
    axiosWithAuth()
        .post(`/auth/login${userType}`, credentials)
        .then(res => {
            console.log('LOGIN RES: ', res);
            axiosWithAuth()
                .get(`/parent/${res.id}/children`)
                .then(res => {
                    console.log('GET CHILDREN REQ RES: ', res);
                    //dispatch() Add child list to state
                    res.forEach((child, index) => {
                        axiosWithAuth()
                            .get(`/child/${child.id}/immunization`)
                            .then(res => {
                                console.log('GET IMMUNIZATION REQ RES: ', res)
                                //dispatch() Add immunization list to child in state
                                //dispatch({type: SET_IMMUNIZATION_ACTION, action: {immuneObj: res.data, index: index}})
                            })
                            .catch(err => console.log('ERROR: ', err.message));
                    })
                })
                .catch(err => console.log('ERROR: ', err.message));
        })
        .catch(err => console.log('ERROR: ', err.message));
}