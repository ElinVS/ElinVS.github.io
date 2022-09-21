import React from 'react'
import {motion} from 'framer-motion'
import { draw, fadeInLeft, fadeInLeftChild, fadeInRightChild, moveUp } from '../../animations/Variants'
import './style.css'
import image1 from '../../assets/about/forrest.jpeg'
import { ProjectData } from '../ProjectData'


const Project01 = ({}) => {
  return (
    <>
      <section className='project01-page'>
  
        <header class="project-header"> 
          <p> project01 / Matthew Collings</p>
        </header>

        <section className='description-section'>
          <p>Lorem ipsum dolor sit amet. Ut fuga omnis ex facilis facilis hic beatae obcaecati est aperiam quaerat rem internos consequatur sed blanditiis laboriosam nam enim molestiae. Sit obcaecati facere est impedit doloribus est culpa cupiditate non vero nemo? Est molestiae eveniet et nemo officia est mollitia illo? </p><p>In repudiandae iste et deleniti facilis  deserunt galisum aut suscipit nesciunt. Eum atque laboriosam non enim deleniti ut fuga sint ea consectetur soluta qui libero veritatis. </p>


        </section>
    

        <motion.div 
        className='img-grid-wrapper'
        
        >
          <motion.div 
            className='a'
            
          ></motion.div>
          <motion.div 
          className='b'
          
          ></motion.div>
          <motion.div 
          className='c'
          
          ></motion.div>
          <motion.div 
          className='d'
         
          
          ></motion.div>
          <div className='e'></div>
          <div className='f'></div>
        </motion.div>

        <section className='tech-description'>
          <ul>

          {ProjectData.techstack01.map((tech, index)=> {
            return <li
                    key={index}
                > {tech}</li>

          })} 

          </ul>    


        </section>

        <section className='next-project'>

        <span>next project</span>

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

        </section>
       


      </section>
      
      
    </>
  )
}

export default Project01
