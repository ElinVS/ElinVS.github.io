import React from 'react'
import { motion } from 'framer-motion'
import '../header/style.css'


const Header = ({text, text2}) => {

    const container = {
        initial: {
            x: 0,
            opacity:0

          },
          animation: {
            y: 0,
            opacity:1,
            transition: {
              staggerChildren: 0.1,
            },
          },
        };
      
      const item = {
        initial: {
            y: 80,
            opacity:0  
          },
          animation: {
            y: 0,
            opacity:1,

            transition: {
              duration: 1.2,
              type: "tween",
              ease: "easeInOut",
            },
          },
        };





  return (
    <>
        <motion.div
            className='header-container'
            variants={container}
            initial='initial'
            animate='animation'
            >

            <motion.h1 
                className='header-text'
                variants={item}
                >
                {text}
            </motion.h1>

          
        </motion.div>
    
    </>
  )
}

export default Header
