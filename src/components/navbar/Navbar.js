import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { motion } from 'framer-motion'
import { moveDown } from '../../animations/Variants'
import '../navbar/style.css'

const Navbar = () => {

  const [showLinks, setShowLinks] = useState(false);

  const [date, setDate] = useState(new Date())

  useEffect(() => {
    setInterval(() => setDate(new Date()), 30000);
  }, []); 

  return (
    <>

    <nav className='navbar'>
      <div className='navbar-container'>

        <motion.div 
          className='navbar-left'
         
          initial='initial'
          animate= 'animate'
          variants={moveDown}
        >
          <Link 
          className="navbar-links"to="/"
          id={showLinks ? 'hidden' : ""}
          
          
          > home </Link>
          <span>
            <a href="#contact" 
            className="navbar-links"
            id={showLinks ? 'hidden' : ""}
            
            >contact</a>
          </span>
        </motion.div>

        <motion.div 
          className='navbar-middle'
          initial='initial'
          animate= 'animate'
          variants={moveDown}
        >
          <span>   
          {date.toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                })}
          </span>
        </motion.div>

        <motion.div 
          className='navbar-right'
          initial='initial'
          animate= 'animate'
          variants={moveDown}
        >
          <span>
            <a href="#work" 
            className="navbar-links"
            id={showLinks ? 'hidden' : ""}
            > work </a>
          </span>
          <span>
            <a href="#skills" 
            className="navbar-links"
            id={showLinks ? 'hidden' : ""}
            > skills </a>
          </span>          
        </motion.div> 

        <button>Open</button>   

      </div>
    </nav>
    
    </>
  )
}

export default Navbar
