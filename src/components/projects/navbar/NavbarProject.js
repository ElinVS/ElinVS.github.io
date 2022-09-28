import React from 'react'
import { Link } from "react-router-dom"
import {motion} from 'framer-motion'
import { draw, fadeInLeft, fadeInLeftChild, fadeUp, fadeUpChild, moveDown } from '../../../animations/Variants'
import '../../projects/navbar/style.css'


const NavbarProject = () => {
  return (
    <>
        <nav className='navbar-project'>
          

                <motion.div 
                className='navbar-left'
                initial='initial'
                animate= 'animate'
                variants={moveDown}
                >
                <Link className="project-links"to="/"> home </Link>
                </motion.div>

            

        </nav>

    
    </>
  )
}

export default NavbarProject
