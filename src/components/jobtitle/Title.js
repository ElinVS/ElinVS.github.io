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

        <motion.div
              className='arrow-container'
              initial={{ y: 400 }}
              animate={{ y: 0 }}
              transition={{
                duration: 1.2,
                type: "spring",
                ease: "easeInOut",
                delay: 0.8,
              }}
            >
            <svg  
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <motion.path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
            </svg>
        </motion.div>
   
   </>
  )
}

export default Title
