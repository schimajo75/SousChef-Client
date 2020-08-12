import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => {
    return (
        <div className="navbar">
            <Link to="/">Home</Link>
            {props.currentUser ? <Link to={`/dashboard/${props.currentUser}`}>
                {props.currentUser}'s Dashboard</Link> 
            :
            <Link to="/dashboard">Dashboard</Link>
            }
        </div>
    )
}

export default Navbar;