import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import{motion} from 'framer-motion'


import '../navbar/style.css'

const Navbar = () => {

  const [time, setTime] = useState(new Date())

  useEffect(() => {
    setInterval(() => setTime(new Date()), 30000);
}, []); 



   

  return (
    <>

    <nav className='navbar'>
      <div className='navbar-container'>

        <motion.div className='navbar-left'
        initial={{ y: -400 }}
        animate={{ y: 0 }}
        transition={{
          duration: 1.2,
          type: "spring",
          ease: "easeInOut",
          delay: 0.5,
        }}
        
        >
            <Link className="navbar-links"to="/"> home </Link>
            <Link className="navbar-links" to="/contact"> contact </Link> 
        </motion.div>

        <motion.div 
        className='navbar-middle'
        initial={{ y: -400 }}
        animate={{ y: 0 }}
        transition={{
          duration: 1.2,
          type: "spring",
          ease: "easeInOut",
          delay: 0.5,
        }}
        >
          <span>   {time.toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
            })}
          </span>
        </motion.div>

        <motion.div className='navbar-right'
         initial={{ y: -400 }}
         animate={{ y: 0 }}
         transition={{
           duration: 1.2,
           type: "spring",
           ease: "easeInOut",
           delay: 0.5,
         }}
        
        >
            <Link className="navbar-links" to="/work"> work  </Link> 
            <Link className="navbar-links" to="/skills"> skills  </Link>           
        </motion.div>    

      </div>
    </nav>
    
    </>
  )
}

export default Navbar
