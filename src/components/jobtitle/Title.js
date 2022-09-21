import React from 'react'
import { motion } from 'framer-motion'
import { draw, fadeInRight, fadeInRightChild, moveUp } from '../../animations/Variants'
import '../jobtitle/style.css'

const Title = ({titletext}) => {


  return (
   <>
      <motion.div
        className='title-container'
        variants={fadeInRight}
        initial='initial'
        animate='animate'
      >
        <motion.p 
          className='title-text'
          variants={fadeInRightChild}
        >
          {titletext}
        </motion.p>
      </motion.div> 

      <motion.div
        className='arrow-container'
        initial='initial'
        animate='animate'
        variants={moveUp}
        >
        <motion.svg 
          whileHover={{y:40}}
          transition={{type:'tween'}}
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
              d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </motion.svg>
      </motion.div>
      
   
   </>
  )
}

export default Title
