import React from 'react';
import jwt from 'jsonwebtoken';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Navbar = (props) => {
    let token = localStorage.getItem('token');

    let decoded = jwt.decode(token);
    let email = ''
    if (token.length > 0) {
        email = decoded.email
    }
    // let userId = decoded.userId;
    // let userName = decoded.name;

    
    if(email !== undefined && email.length > 0) {
        email = email.split('@')
        email = email[0]
    }
    let greeting = `Hi, ${email}`;

    return (
        <nav>
            <div className="nav-wrapper blue">
                <a href="#" className="brand-logo">&nbsp; My New Word</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <Link to='/'>My Words List</Link>
                    </li>

                    <li>
                        <Link to='/newword'><b>+ New Word</b></Link>
                    </li>

                    <li>
                        <Link to='/topics'>Topics</Link>
                    </li>

                    <li>
                        <Link to='/connections'>Connections</Link>
                    </li>

                    <li>
                        {token.length > 0 ? (
                            <Link to='/account'>{greeting}</Link>
                        ) : (
                            <Link to='/auth'>Login/Signup</Link>
                        )}
                        
                    </li>
                    
                </ul>
            </div>
        </nav>
    )
}

const MapStateToProps = (state) => {
    return {
        token: state.userReducer.token
    }
}

const MapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(MapStateToProps, MapDispatchToProps)(Navbar);