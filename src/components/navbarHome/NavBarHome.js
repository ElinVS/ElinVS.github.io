import React, { useState } from 'react'
import { Link } from "react-router-dom"
import '../navbarHome/style.css'

const NavBarHome = () => {

    const [toggleNav, setToggleNav] = useState(false)


  return (
    <>
        <nav className='navbar'>
            
            <div className='left-side'>
                <Link className="navbar-links" to="/"> home </Link>
                <a href="#contact" className="navbar-links">contact</a> 
            </div>
            <div className='right-side'>
                <a href="#work" 
                className="navbar-links"
                > work </a>
                <a href="#skills" 
                className="navbar-links"
                > skills </a>
            </div>
            <button>HELLO</button>
        </nav>
    
    
    </>
  )
}

export default NavBarHome
