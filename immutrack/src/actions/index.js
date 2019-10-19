//import axios form 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export const SET_CHILD_ACTION = 'SET_CHILD_ACTION';
export const SET_IMMUNIZATION_ACTION = 'SET_IMMUNIZATION_ACTION';


export const loginAction = (userType, credentials) => dispatch => {
    return axiosWithAuth()
        .post(`/auth/login/${userType}`, credentials)
        .then(res => {
            console.log('RES FROM LOGIN: ', res);
            localStorage.setItem('token', res.data.token);
            axiosWithAuth()
                .get(`/parent/${res.data.user.id}/children`)
                .then(res => {
                    dispatch({type: SET_CHILD_ACTION, payload: res.data});
                    res.data.forEach((child, index) => {
                        axiosWithAuth()
                            .get(`/child/${child.id}/immunization`)
                            .then(res => {
                                dispatch({type: SET_IMMUNIZATION_ACTION, payload: {immuneObj: res.data, index: index}})
                            })
                            .catch(err => console.log('ERROR IMMUNE REQ: ', err.message));
                    })
                })
                .catch(err => console.log('ERROR CHILD REQ: ', err.message));
        })
        .catch(err => console.log('ERROR LOGIN: ', err.message));
}