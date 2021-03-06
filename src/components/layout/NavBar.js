import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className='nav-wrapper gray darken-3'>
            <div className='container'>
                <Link to='/' className='brand-logo'>MarioPlan</Link>
            </div>
        </nav>
    )
}

export default NavBar;