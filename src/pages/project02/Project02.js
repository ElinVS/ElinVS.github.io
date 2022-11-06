import React, {useState} from 'react'
import '../project01/style.css'
import { Link } from "react-router-dom"
import {motion} from 'framer-motion'
import { draw, fadeInLeft, fadeInLeftChild, fadeUp, fadeUpChild } from '../../animations/Variants'
import { ProjectData } from '../ProjectData'
import NavbarProject from '../../components/projects/navbar/NavbarProject'
import Footer from '../../components/footer/Footer'


const Project02 = ({theme, navTheme, toggleTheme, word}) => {

  const [text, setText] = useState('next project')

  const defaultState = () => {
    setText('next project')
  }

  const displayText = () => {
    setText('Erik')
  }




  return (
    <>

<NavbarProject navTheme={navTheme} toggleTheme={toggleTheme} word={word}/>
      <section className='project02-page'  id={theme}>

     
  
      <motion.header 
          className="project-header"
          initial='initial'
          animate='animate'
          variants={fadeInLeft}
          >

          <motion.p
            variants={fadeUpChild}
            id={theme}
          > {ProjectData.project02.title}</motion.p>

        </motion.header>

    

        <div className='parent'>

        <div className='description-details'>
        <p id={theme} >website here</p>
        <p >  <a id={theme} href='https://github.com/ElinVS/mc_website' target='_blank'>2022 / github</a> </p>
        
        </div>

        <section className='description-section'>
          <p id={theme}>{ProjectData.project02.description} </p>
        </section>

        </div>

        <div className='parent'>

<motion.div 
  className='tech-stack'
  initial='initial'
  whileInView='animate'>
  <motion.span 
  id={theme} 
  > tech stack </motion.span>
  
</motion.div>

<motion.section 
  className='tech-description'
  >
  
  {ProjectData.project02.techstack.map((tech, index)=> {
    return <motion.span
            id={theme}
            key={index}
        > {tech}</motion.span>

  })} 

</motion.section>

</div>

        
        <motion.div 
        className='img-grid-wrapper'
        >

          
          <motion.div 
            className='image-div'
          >
            <img src={mcgif} alt="gif of website"  />
          </motion.div>

          <motion.div 
          className='image-div'
          > <img src={bio} alt="gif of website" />
          </motion.div>
          <motion.div 
          className='image-div'
          ><img src={intro} alt="gif of website" />
            
          </motion.div>
          <motion.div 
          className='image-div'
          ><img src={socials} alt="gif of website" /></motion.div>
          
          <motion.div 
          className='image-div'
          ><img src={requiem} alt="gif of website" /></motion.div>
          
          <motion.div 
          className='image-div'
          ><img src={releases} alt="gif of website" /></motion.div>
          
          <motion.div 
          className='image-div'
          ><img src={contact} alt="gif of website" /></motion.div>
          
         
        </motion.div>


  

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

      <Footer theme={theme}/>
      
      
    </>
  )
}

export default Project02
