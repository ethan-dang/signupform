import React from 'react';
import { Link } from 'react-router-dom';


function NavBar() {
  return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container'>
            {/* <Link to='/home' className='navbar-brand'>Home</Link> */}
            <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
                <Link to='/Read' className='nav-link'>View Data</Link>
            </li>
            <li className='nav-item'>
                <Link to='/signup' className='nav-link'>Signup</Link>
            </li>
            <li className='nav-item'>
                <Link to='/' className='nav-link'>Login</Link>
            </li>
            </ul>
        </div>
        </nav>
  )
};

export default NavBar