import React from 'react'
import {motion} from 'framer-motion'
import { fadeUp,fadeUpChild } from '../../animations/Variants'
import { SkillsData } from './SkillsData'


import '../skills/style.css'

const Skills = ({theme}) => {



const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible:  {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: {  type: "tween", duration: 1.5, bounce: 0 },
        }
      
    }
  };


  return (
    <>
      <section className='skills-page' id='skills'>

        <motion.div 
          className="div-title"
          initial='initial'
          variants={fadeUp}
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
            />
          </motion.svg>

          <motion.p 
            id={theme}
            variants={fadeUpChild}
          >
            03 / Skills 
          </motion.p>  
        </motion.div>


        <div className='skills-wrapper'>
          <div className='skills-container'>
            <div className='thumbs-up-container'>

              <motion.svg 
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
                  d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
              </motion.svg>
            </div>
          </div>

          <div 
            className='skills-container'
            
            initial='initial'
            variants={fadeUp}
            whileInView='animate'
          >


            <h3  id={theme}>Technical: </h3>

                {SkillsData.Technical.map((skill, index) => {
                  return <span
                          id={theme}
                          key={index}
                          >{skill}</span>;
                })}
              
          </div>

          <div className='skills-container' >
            <h3  id={theme}>Interpersonal: </h3>


              
                {SkillsData.Interpersonal.map((skill, index) => {
                  return <span
                          id={theme}
                          key={index}
                          >{skill}</span>;
                })}
              
          </div>

          <div className='skills-container'>
            <h3  id={theme}>Extra: </h3>
              
                {SkillsData.Extra.map((skill, index) => {
                  return <span  
                          id={theme}
                          key={index}
                          >{skill}</span>;
                })}
              
          </div>
          
        </div>
  
     </section>




    </>
  )
}

export default Skills
