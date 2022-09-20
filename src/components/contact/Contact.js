import React from 'react'
import { motion } from 'framer-motion'
import '../contact/style.css'
import {draw} from '../../animations/Variants'

const Contact = () => {
  return (
    <>

      <section className='contact-page'>
        <div className='arrow-wrapper'>
        <p>04 / get in touch</p>
        
        <motion.div 
          className='contact-arrow'
        >
    
          <motion.svg 
          whileHover={{y:40, x:-40 }}
          transition={{type:'tween'}}
          initial="hidden"
          whileInView="visible"
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" viewBox="0 0 24 24" 
          stroke-width="0.2" stroke="currentColor" 
          class="w-6 h-6">
              <motion.path 
               variants={draw}
              stroke-linecap="round" 
              stroke-linejoin="round" 
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
