import React from 'react'
import './Navbar.css';
import logo from '../Assets/logo.png'


function Navbar() {
  return (
    <div>
       <nav>
         <img className='logo' src={logo} alt="" />
         <h3 className='name-app' >Healthyweb</h3>
      <ul className="nav-links">
       <div className='navhead'  ><li><a href="/">Home</a></li></div> 
       <div className='navhead'  > <li><a href="/booking">Booking</a></li></div> 
       <div className='navhead'  > <li><a href="/consult">Consult</a></li></div> 
       <div className='navhead'  ><li><a href="/about">About</a></li></div> 
       <div className='navhead'  > <li><a href="/profile">Profile</a></li></div> 
       <div className='navhead'  ><li><a href="/library">Library</a></li></div> 
       <div className='navhead'  > <li><a href="/contact">Contact</a></li></div> 
      </ul>
    </nav>
    </div>
  )
}

export default Navbar