import React from 'react'
import { Link } from "react-router-dom"
import {motion} from 'framer-motion'
import { moveDown } from '../../../animations/Variants'
import '../../projects/navbar/style.css'


const NavbarProject = ({navTheme,toggleTheme, word}) => {
  return (
    <>
        <nav className='navbar-project'>
          
         
                <motion.div 
                className='navbar-left'
                
                initial='initial'
                animate= 'animate'
                variants={moveDown}
                >
                <Link className="project-links" id={navTheme} to="/" > home </Link>
                </motion.div>

                <motion.div 
                className='navbar-right'
                
                initial='initial'
                animate= 'animate'
                variants={moveDown}
                >

                <span id={navTheme} onClick={toggleTheme}> {word} </span> 


                <Link className="project-links" id={navTheme} to="/project01" > 01 </Link>
                <Link className="project-links" id={navTheme} to="/project02" > 02 </Link>
                <Link className="project-links" id={navTheme} to="/project03" > 03 </Link>
                </motion.div>

        

        </nav>

    
    </>
  )
}

export default NavbarProject
