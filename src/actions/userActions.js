import axios from 'axios';
import jwt from 'jsonwebtoken';
import { HOST_URL } from '../constants';

// name: req.body.name,
// email: req.body.email,
// role: req.body.role,
// password: hash,

export const signup = (data) => (dispatch) => {
    
    let name = data.name;
    let email = data.email;
    let password = data.password;
    if(email === '' || password === '') {
        alert('Enter your email and password first.')
    } else {
        axios.post(`${HOST_URL}/user/signup`, {name: name, email: email, password: password, role: 'basic'})
            .then(result => {
                
                let token = result.data.token;
                localStorage.setItem('token', token);
                console.log(token)
                // let decoded = jwt.decode(token);
                // let userId = decoded.userId;
                // let email = decoded.email;
                // let userName = decoded.name;

                //localStorage.setItem('userId', userId);
                
                dispatch({type: "USER_AUTH", payload: {token: token}})
                console.log(localStorage.getItem('token'))
                
            })
            .catch(err => {
                console.log('auth error: ' + err)
            })  
    }
     
}

export const login = (data) => (dispatch) => {
    
    let email = data.email;
    let password = data.password;
    if(email === '' || password === '') {
        alert('Enter your email and password first.')
    } else {
        axios.post(`${HOST_URL}/user/login`, {email: email, password: password})
            .then(result => {
                
                let token = result.data.token;
                localStorage.setItem('token', token);
                
                // let decoded = jwt.decode(token);
                // let userId = decoded.userId;
                // let email = decoded.email;
                // let userName = decoded.name;

                //localStorage.setItem('userId', userId);
                
                dispatch({type: "USER_AUTH", payload: {token: token}})
                console.log(localStorage.getItem('token'))
                
            })
            .catch(err => {
                console.log('auth error: ' + err)
            })  
    }
     
}

export const logout = () => (dispatch) => {
    dispatch({type: "USER_AUTH", payload: {token: ''}})
}