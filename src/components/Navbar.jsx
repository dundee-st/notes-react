import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
    <nav className='navbar navbar-dark navbar-expand-sm bg-primary'>
        <div className="navbar-brand">
            Note App
        </div>
        <ul className="navbar-nav">
            <li className="nav-item" >
                <NavLink to='/' exact className="nav-link" activeClassName='active'>Главная</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to='/about' className="nav-link" activeClassName='active'>О нас</NavLink>
            </li>
        </ul>
    </nav>
)

export default Navbar;