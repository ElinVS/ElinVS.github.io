import React from 'react'
import { motion } from 'framer-motion'
import '../jobtitle/style.css'

const Title = ({titletext}) => {

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
            x: 80,
            opacity:0  
          },
          animation: {
            x: 0,
            opacity:1,

            transition: {
              duration: 1.2,
              type: "spring",
              ease: "easeInOut",
            },
          },
        };



  return (
   <>

        <motion.div
            className='title-container'
            variants={container}
            initial='initial'
            animate='animation'
            >
                
            <motion.p 
            className='title-text'
            variants={item}
            >
              {titletext}
            </motion.p>


        </motion.div> 
   
   </>
  )
}

export default Title
