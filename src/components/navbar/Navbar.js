import React from 'react'
import {Link} from "react-router-dom"


import '../navbar/style.css'

const Navbar = () => {

   

  return (
    <>

    <nav className='navbar'>
      <div className='navbar-container'>

        <div className='navbar-right'>
            <Link id="home-link" to="/"> elin svennberg  </Link>
            <Link className="navbar-links" to="/about"> about </Link> 
            <Link className="navbar-links" to="/contact"> contact </Link> 
            <Link className="navbar-links" to="/releases"> work </Link> 
            <Link className="navbar-links" to="/work"> skills  </Link>           
        </div>    

      </div>
    </nav>
    
    </>
  )
}

export default Navbar
