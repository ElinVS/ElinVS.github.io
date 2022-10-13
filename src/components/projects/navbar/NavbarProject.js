import React from 'react'
import { Link } from "react-router-dom"
import {motion} from 'framer-motion'
import { draw, fadeInLeft, fadeInLeftChild, fadeUp, fadeUpChild, moveDown } from '../../../animations/Variants'
import '../../projects/navbar/style.css'


const NavbarProject = ({navTheme}) => {
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
                {/* <span className="project-links" id={navTheme}>project :</span> */}
                <Link className="project-links" id={navTheme} to="/project01" > 01 </Link>
                <Link className="project-links" id={navTheme} to="/project02" > 02 </Link>
                <Link className="project-links" id={navTheme} to="/project03" > 03 </Link>
                </motion.div>

        

        </nav>

    
    </>
  )
}

export default NavbarProject
