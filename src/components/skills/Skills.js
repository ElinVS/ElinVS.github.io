import React from 'react'
import {motion} from 'framer-motion'
import { fadeUp,fadeUpChild } from '../../animations/Variants'
import '../skills/style.css'

const Skills = () => {



const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible:  {
      
     
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: {  type: "spring", duration: 1.5, bounce: 0 },
        //   opacity: { delay, duration: 0.01 }
        }
      
    }
  };


  return (
    <>

    <section className='skills-page'>

    

    <motion.div 
        className="div-title"
        initial='initial'
        variants={fadeUp}
        animate='animate'
      > 

<motion.svg
      width="1000"
      height="10"
      viewBox="0 0 1000 10"
      initial="hidden"
      whileInView="visible"
    >
       <motion.line
        x1="1"
        y1="10"
        x2="140"
        y2="10"
        stroke="#121212"
        variants={draw}
        // custom={0.5}
      />
      </motion.svg>


        <motion.p 
        variants={fadeUpChild}
        >03 / Skills</motion.p>  
      </motion.div>



      <p>hello</p>

    </section>




    </>
  )
}

export default Skills
