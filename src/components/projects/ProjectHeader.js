import React from 'react'
import '../projects/style.css'
import { motion } from 'framer-motion'




const ProjectHeader = ({projecttext}) => {

    const sentence = projecttext.split("")

    const container = {
        initial: { opacity: 0 },
        animation: (i = 1) => ({
          opacity: 1,
          transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
        }),
      };
    
      const item = {
        animation: {
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
          },
        },
        initial: {
          opacity: 0,
          y: 20,
          transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
          },
        },
      };






  return (

    <section className='project-page'>

    <motion.div
    className='project-container'
    variants={container}
    initial='initial'
    animate='animation'
    >

    {sentence.map((letter,index) => (
        
    <motion.p 
    className='project-text'
    variants={item}
    key={index}
    >
        {letter}
    </motion.p>

))}


    </motion.div> 

    </section>

  );
    
};

export default ProjectHeader
