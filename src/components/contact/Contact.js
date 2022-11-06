import React from 'react'
import { motion } from 'framer-motion'
import '../contact/style.css'
import {draw} from '../../animations/Variants'

const Contact = ({theme}) => {
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
        id={theme}
        x1="1"
        y1="10"
        x2="300"
        y2="10"
        stroke="currentColor" 
        variants={draw}
        // custom={0.5}
      />
      </motion.svg>

        <p id={theme}>04 / contact</p>
        
        <motion.div 
          className='contact-arrow'
          
        >

    
          <motion.svg 
            id={theme}
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
          
          <motion.p
          
              whileHover={{x:10}}
              transition={{type:'tween'}}
          > <a id={theme} href='mailto: elinvsvennberg@gmail.com'>elinvsvennberg @gmail.com</a>
            </motion.p>
          <motion.p
              whileHover={{x:10}}
              transition={{type:'tween'}}
          > <a id={theme} href='https://www.linkedin.com/in/elin-svennberg-331605108/' target='_blank' rel="noreferrer">linkedin</a></motion.p>
    
        </div>
        

        </div>



      </section>
    
    </>
    )
}

export default Contact
