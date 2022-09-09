import React from 'react'
import { motion } from 'framer-motion'
import '../header/style.css'


const Header = ({text,text2}) => {

  

    const container = {
        initial: {
            x: 0,
            opacity:0,

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
            x: -200,
            opacity:0  
          },
          animation: {
            x: 0,
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

    <header className='header'>
    
        <motion.div
            className='header-container'
            variants={container}
            initial='initial'
            animate='animation'
            >

            <motion.p 
            className='header-text'
            variants={item}

            >
              {text}
            </motion.p>

        </motion.div>    

        </header>    
    
    </>
  )
}

export default Header
