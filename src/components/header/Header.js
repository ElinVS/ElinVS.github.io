import React from 'react'
import { motion } from 'framer-motion'
import { fadeInLeft , fadeInLeftChild } from '../../animations/Variants'
import '../header/style.css'

const Header = ({text, theme}) => {

  return (
    <>
        <motion.div
          className='header-container'
          variants={fadeInLeft}
          initial='initial'
          animate='animate'
        >
       
          <motion.p 
            className='header-name-text'
            id={theme}
            variants={fadeInLeftChild}
          >
            {text}
          </motion.p>

       


        </motion.div>    
    </>
  )
}

export default Header
