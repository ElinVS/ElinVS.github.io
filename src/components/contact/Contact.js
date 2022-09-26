import React from 'react'
import { motion } from 'framer-motion'
import '../contact/style.css'
import {draw} from '../../animations/Variants'

const Contact = () => {
  return (
    <>

      <section className='contact-page' id='contact'>
        <div className='arrow-wrapper'>

        <motion.svg
      
      height="10"
      
      initial="hidden"
      whileInView="visible"
    >
       <motion.line
        x1="1"
        y1="10"
        x2="300"
        y2="10"
        stroke="#121212"
        variants={draw}
        // custom={0.5}
      />
      </motion.svg>

        <p>04 / say hello</p>
        
        <motion.div 
          className='contact-arrow'
        >
    
          <motion.svg 
          whileHover={{y:40, x:-40}}
          transition={{type:'spring'}}
          initial="hidden"
          whileInView="visible"
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth="0.2" 
          stroke="currentColor" 
          >
              <motion.path 
               variants={draw}
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M19.5 4.5l-15 15m0 0h11.25m-11.25 0V8.25" />
          </motion.svg>
        </motion.div>
        </div>


        <div className='contact-wrapper'>
          <div className='contact-container'>
          
          <span>elinvsvennberg@gmail.com</span>
          <span>linkedin</span>
    
        </div>
        

        </div>



      </section>
    
    </>
    )
}

export default Contact
