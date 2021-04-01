import React from 'react';
import logo from '../../src/img/logo.svg';
import './Homepage.css';
import {Link} from 'react-router-dom'

function Homepage() {
    return (
        <div className="Home">
            <div className="Home-body">
                    <Link to = "/Step1"><img src={logo} className="Home-logo" alt="logo" /></Link>
            </div>
        </div>
    );  
}

export default Homepage;
