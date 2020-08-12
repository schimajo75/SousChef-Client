import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => {
    return (
        <div className="navbar">
            <Link to="/">Home</Link>
            {props.activeUser.name ? <Link to={`/dashboard/${props.activeUser.id}`}>
                {props.activeUser.name}'s Dashboard</Link> 
            :
            <Link to="/dashboard">Dashboard</Link>
            }
        </div>
    )
}

export default Navbar;