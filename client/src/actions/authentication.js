import axios from 'axios';
import { GET_ERRORS } from './types';

export const registerUser = (user, history) => dispatch => {
    axios.post('/api/users/register', user)
        .then(res => history.push('./login'))
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
}

export const loginUser = (user) => dispatch => {
    axios.post('/api/users/login', user)
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
}

//trying to use the auth project index.js to make this work
// export const registerUser=() => {
//     return function(dispatch){
//         fetch("/api/users/register")
//         .then((res)=>{
//             return res.text();
//         }).then((user)=>{
//             dispatch(loadUser(user));
//         });
//     };
// }

// export const loadUser=(user) => {
//     return {
//         type: "GET_ERRORS",
//         value: user,
//         payload: errors.res.data
//     }
// }

// export function loginUser(){
//     return function(dispatch){
//         fetch("/api/users/login")
//         .then((res)=>{
//             return res.text();
//         }).then((userId)=>{
//             dispatch(setCurrentUserId(userId));
//         });
//     };
// }