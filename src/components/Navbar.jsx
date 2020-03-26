import React, { Component } from 'react';
import jwt from 'jsonwebtoken';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// import 'materialize-css/dist/css/materialize.min.css';
import M from  'materialize-css/dist/js/materialize.min.js';

import BrandLogo from './navbar/BrandLogo';

class Navbar extends Component {

    componentDidMount() {
        let sidenav = document.querySelector('#slide-out');
        M.Sidenav.init(sidenav, {});
    }

    render() {
        let token = localStorage.getItem('token');
        let email = ''
        if (token) {
            let decoded = jwt.decode(token);
            email = decoded.email
        }
        
        if(email !== undefined && email.length > 0) {
            email = email.split('@')
            email = email[0]
        }
        let greeting = `Hi, ${email}`;

        return (
            <>
            <nav className="nav-wrapper blue" style={{padding: '0px 10px'}}>
                <div >
                    <a href="#" data-target="slide-out" class="sidenav-trigger show-on-large"><i class="material-icons">menu</i></a>
                    <a href="#"  style={{fontSize: '25px'}}>&nbsp; My New Word</a>
                    <ul id="mnw-navbar-desktop" className="right hide-on-med-and-down">
                        <li><Link to='/'>My Words List</Link></li>
                        <li><Link to='/newword'><b>+ New Word</b></Link></li>
                        <li><Link to='/topics'>Topics</Link></li>
                        <li><Link to='/connections'>Connections</Link>
                        </li>
                        <li>
                            {token ? (
                                <Link to='/account'>{greeting}</Link>
                            ) : (
                                <Link to='/auth'>Login/Signup</Link>
                            )}  
                        </li> 
                    </ul>
                </div>
            </nav>
            <ul id="slide-out" className="sidenav">
                <li><Link to='/'>My Words List</Link></li>
                <li><Link to='/newword'><b>+ New Word</b></Link></li>
                <li><Link to='/topics'>Topics</Link></li>
                <li><Link to='/connections'>Connections</Link>
                </li>
                <li>
                    {token ? (
                        <Link to='/account'>{greeting}</Link>
                    ) : (
                        <Link to='/auth'>Login/Signup</Link>
                    )}  
                </li> 
            </ul>
            </>
        )
    }
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