import * as React from 'react';
import '../Navbar/Navbar.css'
import logo from '../Navbar/web developer (1).png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logodiv">
      <img src={logo} alt='logo'/>
      </div>
       
      
    </div>
  )
}

export default Navbar
