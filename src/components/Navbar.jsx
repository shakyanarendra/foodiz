import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

function Navbar() {
    return (
        <nav className="navbar">
            <h1>Foodie's Paradise</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
