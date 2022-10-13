import React, {useState} from 'react'
import { Link } from "react-router-dom"
import {motion} from 'framer-motion'
import { draw, fadeInLeft, fadeInLeftChild, fadeUp, fadeUpChild } from '../../animations/Variants'
import './style.css'
import { ProjectData } from '../ProjectData'
import NavbarProject from '../../components/projects/navbar/NavbarProject'
import Footer from '../../components/footer/Footer'


const Project01 = ({theme, navTheme}) => {

  const [text, setText] = useState('next project')

  const defaultState = () => {
    setText('next project')
  }

  const displayText = () => {
    setText('Mind Space')
  }


  return (
    <>

      <NavbarProject navTheme={navTheme}/>
      <section className='project01-page'
      id={theme}
      >
  
        <motion.header 
          className="project-header"
          initial='initial'
          animate='animate'
          variants={fadeInLeft}
          >

          <motion.p
            variants={fadeUpChild}
            id={theme}
          > project01 / Matthew Collings</motion.p>

        </motion.header>

    

        <div className='parent'>

        <div className='description-details'>
          <p id={theme} >2022 github </p>
        </div>

        <section className='description-section'>
          <p id={theme}>In repudiandae iste et deleniti facilis  deserunt galisum aut suscipit nesciunt. Eum atque laboriosam non enim deleniti ut fuga sint ea consectetur soluta qui libero veritatis. </p>
        </section>

        </div>

        
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
         
        </motion.div>


        <div className='parent'>

        <motion.div 
          className='tech-stack'
          initial='initial'
          whileInView='animate'>
          <motion.span 
          id={theme} 
          variants={fadeUpChild}
          > tech stack </motion.span>
          
        </motion.div>

        <motion.section 
          className='tech-description'
          initial='initial'
          whileInView='animate'
          >
          
          {ProjectData.techstack01.map((tech, index)=> {
            return <motion.span
                    id={theme}
                    variants={fadeUpChild}
                    key={index}
                > {tech}</motion.span>

          })} 

        </motion.section>

        </div>


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
            onMouseEnter={displayText}
            onMouseLeave={defaultState}
            
          >
            <Link className="next-project-links"  id={theme} to="/project02">
               {text}
            </Link>
            
          </motion.span>

          <motion.svg 
            id={theme}
            initial='hidden'
            whileInView='visible'
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth="0.3" 
            stroke="currentColor" 
          >
            <motion.path 
              variants={draw}
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </motion.svg>
        </motion.section>

      </section>

      <Footer/>
      
      
    </>
  )
}

export default Project01
