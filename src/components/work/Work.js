import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import {motion} from 'framer-motion'
import '../work/style.css'
import { fadeUp,fadeUpChild } from '../../animations/Variants'




const Work = () => {

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

    <motion.section className='work-page' id='work'>

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
        x2="250"
        y2="10"
        stroke="#121212"
        variants={draw}
        // custom={0.5}
      />
      </motion.svg>

        <motion.p 
        variants={fadeUpChild}
        >01 / selected work</motion.p>  
      </motion.div>

      <div className='work-grid-wrapper'>

      <div className="feature">
        <Link to='/project01' className="work-link">
          <motion.div 
          className='work-selection'
          whileHover={{x:80}}
          transition={{type:'tween'}}
          >
            <p>matthew collings</p> 
            <span className="feature-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan facilisis quam, in tristique lorem. Fusce consequat nisi in nisl elementum bibendum. </span>
            <p> 01 </p>  
          </motion.div> 
        </Link>
      </div>  

      <div className="feature">
        <Link to='/project02' className="work-link">
          <motion.div 
          className='work-selection'
          whileHover={{x:80}}
          transition={{type:'tween'}}
          >
            <p>mind space</p> 
            <span className="feature-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan facilisis quam, in tristique lorem. Fusce consequat nisi in nisl elementum bibendum. </span>
            <p> 02 </p>  
          </motion.div>
        </Link>
      </div> 

      <div className="feature">
        <Link to='/project03' className="work-link">
          <motion.div 
          className='work-selection'
          whileHover={{x:80}}
          transition={{type:'tween'}}
          >
            <p>erik</p> 
            <span className="feature-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan facilisis quam, in tristique lorem. Fusce consequat nisi in nisl elementum bibendum. </span>
            <p> 03 </p>  
          </motion.div>
        </Link>
      </div>                            
                            


      </div>
   

        


    </motion.section>




    </>
  )
}

export default Work
