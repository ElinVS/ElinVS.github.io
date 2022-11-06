import React from 'react'
import { motion } from 'framer-motion'
import '../about/style.css'
import { AboutData } from './AboutData'
import { fadeUp, fadeUpChild, draw } from '../../animations/Variants'


const About = ({theme}) => {

 
  return (
    <>

    <section className='about-page'>

    <div className='grid-wrapper'>

    <motion.div 
      className='portrait-img-wrapper'
      variants={fadeUp}
      initial='initial' 
      whileInView='animate'
      >
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
        stroke="currentColor" 
        variants={draw}
        // custom={0.5}
      />
      </motion.svg>

      <motion.p
       id={theme}
        variants={fadeUpChild}
     
      > 02 / ABOUT </motion.p>
        
      <motion.div 
        className='img'
        variants={fadeUpChild}
      ></motion.div>


      <motion.p
      variants={fadeUpChild}
      id={theme}
      > tokyo 2019</motion.p>
    </motion.div>
    

    <motion.div 
      className='about-container'
      variants={fadeUp}
      initial='initial'
      whileInView='animate'
    >  
            
      <motion.p
        id={theme}
        variants={fadeUpChild}> 
       {AboutData.intro}
      </motion.p>

      <motion.p
        id={theme}
        variants={fadeUpChild}>
        {AboutData.interest}
      </motion.p>

      <motion.p
        id={theme}
        variants={fadeUpChild}>
        {AboutData.mission}
      </motion.p>

      <motion.p
        id={theme}
        variants={fadeUpChild}>
        {AboutData.outro}
      </motion.p>

    </motion.div>
    </div>
    </section>
    
    </>
  )
}

export default About
