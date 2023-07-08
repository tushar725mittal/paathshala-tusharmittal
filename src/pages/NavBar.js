import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
    return (
        <div className="navbar">
            <Link to="/"><button>Form</button></Link>
            <Link to="/display"><button>Display</button></Link>
        </div>
    );
}