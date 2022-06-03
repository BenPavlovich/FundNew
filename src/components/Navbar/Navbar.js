import React from 'react';
import './Navbar.css';
import logo from './fundly.png';
import LoginButton from '../LoginButton';
import { LogoutButton } from '../LogoutButton';

export const Navbar = () => {
  return (
    <>
        <nav className='navbar'>
            <img src={logo} alt="Fundly" width='120px' className='navlogo' />
            <ul href='/' className='nav-links'  >
                <li>
                    <a href='/' className='nav-link'>
                        Home
                    </a>
                </li>
                <li>
                    <a href='/' className='nav-link'>
                        About
                    </a>
                </li>
                <li>
                    <a href='/' className='nav-link'>
                        Ratings
                    </a>
                </li>
                <li>
                    <a href='/' className='nav-link'>
                        Contact
                    </a>
                </li>
                <li>Login{LoginButton}</li>
            </ul>
        </nav>
        <div className='navbarSpacer'/>
    </>
  )
}
