import React from 'react'
import '../project01/style.css'
import {motion} from 'framer-motion'
import { draw, fadeInLeft, fadeInLeftChild, fadeUp, fadeUpChild } from '../../animations/Variants'
import { ProjectData } from '../ProjectData'


const Project02 = () => {
  return (
    <>

      <section className='project02-page'>

     
  
  <header class="project-header"> 
    <p> project02 / mind space</p>
  </header>

  <section className='description-section'>
    <p>Lorem ipsum dolor sit amet. Ut fuga omnis ex facilis facilis hic beatae obcaecati est aperiam quaerat rem internos consequatur sed blanditiis laboriosam nam enim molestiae. Sit obcaecati facere est impedit doloribus est culpa cupiditate non vero nemo? Est molestiae eveniet et nemo officia est mollitia illo? </p><p>In repudiandae iste et deleniti facilis  deserunt galisum aut suscipit nesciunt. Eum atque laboriosam non enim deleniti ut fuga sint ea consectetur soluta qui libero veritatis. </p>
  </section>


  <motion.div 
  className='img-grid-wrapper'
  >
    <motion.div 
      className='div1'
    >
    </motion.div>
    <motion.div 
    className='div2'
    > 
    </motion.div>
    <motion.div 
    className='div3'
    >
    </motion.div>
    <motion.div 
    className='div4'
    ></motion.div>
    <div className='div5'></div>
    <div className='div6'></div>
    <span>@github</span>
  </motion.div>

  <motion.section 
    className='tech-description'
    initial='initial'
    whileInView='animate'
    >
    
    {ProjectData.techstack01.map((tech, index)=> {
      return <motion.span
              variants={fadeUpChild}
              key={index}
          > {tech}</motion.span>

    })} 

  </motion.section>

  <motion.section 
    className='next-project'
    whileHover={{x:50}}
    transition={{type:'tween'}}
    initial='initial'
    whileInView='animate'
    variants={fadeInLeft}
  >

    <motion.span
      variants={fadeInLeftChild}
    >next project</motion.span>

    <motion.svg 
      initial='hidden'
      whileInView='visible'
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke-width="0.3" 
      stroke="white" 
      class="w-6 h-6"
    >
      <motion.path 
        variants={draw}
        stroke-linecap="round" 
        stroke-linejoin="round" 
        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </motion.svg>

  </motion.section>
 




   

      </section>
    
    
    </>
  )
}

export default Project02
