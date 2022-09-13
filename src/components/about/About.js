import React from 'react'
import { motion } from 'framer-motion'
import '../about/style.css'
import { AboutData } from './AboutData'

const About = () => {

 

  

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
            x: 200,
            opacity:0  
          },
          animation: {
            x: 0,
            opacity:1,

            transition: {
              duration: '1.2',
              type: "tween",
              ease: "easeInOut",
            },
          },
        };

      const item2 = {
        initial: {
            x: -200,
            opacity:0  
          },
          animation: {
            x: 0,
            opacity:1,

            transition: {
              duration: '1.2',
              type: "tween",
              ease: "easeInOut",
            },
          },
        };



  return (
    <>

    <section className='about-page'>

    <motion.div 
      className='section-one'
      variants={container}
      initial='initial'
      animate='animation'
      >

      <motion.p
      variants={item2}
      >
      01 / hello  
      </motion.p>

    </motion.div>

    <motion.div 
      className='about-container'
      variants={container}
      initial='initial'
      animate='animation'
    >  
            
      <motion.p
        variants={item}>
        {AboutData.intro}
      </motion.p>

      <motion.p
        variants={item}>
        {AboutData.interest}
      </motion.p>

    </motion.div>

    </section>
    
    </>
  )
}

export default About
