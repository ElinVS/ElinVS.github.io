import React, { useState } from 'react'
import { Link } from "react-router-dom"
import '../navbarHome/style.css'

const NavBarHome = () => {

    const [toggleNav, setToggleNav] = useState(false)


  return (
    <>
        <nav className='navbar'>
            
            <div className='left-side'>
                <div className='links' id={toggleNav ? "hidden" : ""}>
                <Link to="/" 
                
                > home </Link>
                <a href="#contact" 
                    
                   
                    >contact</a> 
                  <a href="#work" 
                    
                    
                > work </a>
                <a href="#skills" 
                  
                    
                > skills </a>
                </div>
                <button onClick={() => setToggleNav (!toggleNav)}>HELLO</button>
            </div>
           
           

            <div className='right-side'>
              
            </div>
            
            
        </nav>
    
    
    </>
  )
}

export default NavBarHome
