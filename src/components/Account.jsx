import React, { Component } from 'react'
import { connect } from 'react-redux';
import { logout } from '../actions/userActions';

class Account extends Component {

    state = {
        loggedIn: true
    }

    handleLogout = () => {
        localStorage.setItem('token', '')
        this.props.logout()
        this.props.history.push('/auth')
    }
    
    render() {
        let loginBoxStyle = {
            width: "400px",
            marginTop: '30px', 
            marginLeft: 'auto', 
            marginRight: 'auto'
        }
        return (
            <div style={loginBoxStyle}>
                <p>You are logged in.</p>
                <a className="waves-effect blue btn" onClick={this.handleLogout}>Logout</a>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        //loggedIn: state.loggedIn
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout())
        // signup: (data) => { dispatch(signup(data)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);