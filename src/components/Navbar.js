import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../logo_transparent.png';
const Navbar = () => {
  return (
    <nav className='navbar'>
    <div className='container'>
      <Link to='/'>
         <img src={logo} alt='logo' className='logo'></img>
      </Link>
       <ul className='nav-links'>
        <li> <Link to="/">Home</Link> </li>
        <li> <Link to="/">Page 1</Link> </li>
        <li> <Link to="/">Page 2</Link> </li>
       </ul>
    </div>
    </nav>
  )
}

export default Navbar
