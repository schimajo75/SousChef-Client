import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => {
    return (
        <div className="navbar">
            {props.activeUser.name ? 
            <>
            <Link className="navlinks" to="/">Home</Link>
            <Link className="navlinks" to={`/dashboard/${props.activeUser.id}`}>
                {props.activeUser.name}'s Dashboard</Link> 
                </>
            :
            <>
            <Link className="navlinks" to="/">Home</Link>
            <Link className="navlinks" to="/">Dashboard</Link> 
            </>          
            }
        </div>
    )
}

export default Navbar;