import React from 'react'
import { motion } from 'framer-motion'
import '../about/style.css'
import { AboutData } from './AboutData'
import { fadeUp, fadeUpChild } from '../../animations/Variants'


const About = () => {

  return (
    <>

    <section className='about-page'>

    <motion.div 
      className='section-one'
      variants={fadeUp}
      initial='initial'
      whileInView='animate'
      >

      {/* <motion.p
      variants={item}
      >
      01 / hello  
      </motion.p> */}

    </motion.div>

    <div className='grid-wrapper'>

    <motion.div 
      className='portrait-img-wrapper'
      variants={fadeUp}
      initial='initial' 
      whileInView='animate'
      >

      <motion.p
      variants={fadeUpChild}
      > 02 / HELLO</motion.p>
        
      <motion.div 
        className='img'
        variants={fadeUpChild}
      ></motion.div>

      <motion.p
      variants={fadeUpChild}
      > tokyo 2019</motion.p>
      
    </motion.div>
    

    <motion.div 
      className='about-container'
      variants={fadeUp}
      initial='initial'
      whileInView='animate'
    >  
            
      <motion.p
        variants={fadeUpChild}>
        {AboutData.intro}
      </motion.p>

      <motion.p
        variants={fadeUpChild}>
        {AboutData.interest}
      </motion.p>

      <motion.p
        variants={fadeUpChild}>
        {AboutData.interest}
      </motion.p>

      <motion.p
        variants={fadeUpChild}>
        {AboutData.interest}
      </motion.p>

    </motion.div>

    </div>





    </section>
    
    </>
  )
}

export default About
