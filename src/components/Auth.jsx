import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login, signup } from '../actions/userActions';

import '../css/Auth.css';

class Auth extends Component {

    state = {
        isSignUp: false,
        name: "",
        email: "",
        password: "",
        re_password: "",
        notMatchingPassword: true
    }

    handleChangeLoginMode = () => {
        this.setState({
            isSignUp: !this.state.isSignUp
        })
    }

    handleChangeName = (e) => {
        let name = e.target.value;
        this.setState({
            name: name
        })
    }

    handleChangeEmail = (e) => {
        let email = e.target.value;
        this.setState({
            email: email
        })
    }

    handleChangePassword = (e) => {
        let password = e.target.value;
        this.setState({
            password: password
        })
    }

    handleChangeRePassword = (e) => {
        let re_password = e.target.value;
        this.setState({
            re_password: re_password
        })

        if(re_password === this.state.password){
            this.setState({notMatchingPassword: false})
        }
    }

    handleLogin = () => {
        let data = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.login(data)
        this.setState({
            loggedIn: true
        })

        this.props.history.push('/')
    }

    handleSignup = () => {

        if(this.state.notMatchingPassword){
            alert('Your password does not match')
        } else {
            let data = {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            }
            this.props.signup(data);
            this.setState({
                loggedIn: true
            })
    
            this.props.history.push('/');

        }
    }

    
    render() {

        const token = localStorage.getItem('token');
        let loginBoxStyle = {
            width: "400px",
            marginTop: '30px', 
            marginLeft: 'auto', 
            marginRight: 'auto'
        }
        if(!token) {
            const isSignUp = this.state.isSignUp;
            return (
                <div style={loginBoxStyle}>
                    {isSignUp ? (
                        <div>
                            <p>Creating new account.</p>
                            <form>
                                <label>name</label>
                                <input id="name" type="text" placeholder="Enter your name" onChange={this.handleChangeName}/>
                                <label>Email</label>
                                <input id="email" type="text" placeholder="Enter your email" onChange={this.handleChangeEmail}/>
                                <label>Password</label>
                                <input id="password" type="password" placeholder="Enter your password" onChange={this.handleChangePassword}/>
                                <label>Re-enter Password</label>
                                {this.state.notMatchingPassword? (
                                    <>
                                    <label className='re-enter-password-not-matched-label'>Password does not match</label>
                                    <input 
                                        className='re-enter-password-not-matched'
                                        id="re-enter-password" 
                                        type="password" 
                                        placeholder="Re-enter your password" 
                                        onChange={this.handleChangeRePassword}
                                    />
                                    </>
                                ):(
                                    <>
                                    <label className='re-enter-password-matched-label'>Password matches</label>
                                    <input 
                                        className='re-enter-password-matched'
                                        id="re-enter-password" 
                                        type="password" 
                                        placeholder="Re-enter your password" 
                                        onChange={this.handleChangeRePassword}
                                    />
                                    </>
                                )}
                                <a className="waves-effect blue btn" onClick={this.handleSignup}>Sign Up</a>
                                <p>Already have an account? Just <a style={{color: "blue"}} onClick={this.handleChangeLoginMode}>Login</a></p>
                            </form>
                        </div>
                    ):(
                        <div> 
                            <p>Login into your account to make purchase.</p>
                            <form>
                                <label>Email</label>
                                <input id="email" type="text" placeholder="Enter your email" onChange={this.handleChangeEmail}/>
                                <label>Password</label>
                                <input id="password" type="text" placeholder="Enter your password" onChange={this.handleChangePassword}/>
                                <a className="waves-effect blue btn" onClick={this.handleLogin}>Login</a>
                                <p>Do not have an account yet? <a style={{color: "blue"}} onClick={this.handleChangeLoginMode}>Create New</a></p>
                            </form>
                        </div>
                    )}
                    
                </div>
            )
        } else {
        
        }
    }

}

const mapStateToProps = (state) => {
    return {
        token: state.userReducer.token
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (data) => { dispatch(login(data)) },
        signup: (data) => { dispatch(signup(data)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);

Auth.propTypes = {
    loggedIn: PropTypes.bool,
    login: PropTypes.func,
    signup: PropTypes.func
}