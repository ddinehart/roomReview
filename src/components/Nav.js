import React from 'react';
import '../App.css';
import  { Link } from 'react-router-dom';
import review from './../assets/review.png'

function Nav() {
  return (
    <nav>
        <img src={review} alt="Logo" className="logoImage" style={{width: 70, padding: 10}}/>
        <ul className="nav-links">
            <Link to="/login" className="nav-links">
                <li>Login</li>
            </Link>
            <Link to="/home" className="nav-links">
                <li>Home</li> 
            </Link>
            {/* <Link to="/home" className="nav-links">
                <li>Logout</li>
            </Link> */}
        </ul>
    </nav>
  );
}

export default Nav;
