import React from 'react'
import { Link } from "react-router-dom"
import '../project01/style.css'
import {motion} from 'framer-motion'
import { draw, fadeInLeft, fadeInLeftChild, fadeUp, fadeUpChild } from '../../animations/Variants'
import { ProjectData } from '../ProjectData'
import NavbarProject from '../../components/projects/navbar/NavbarProject'
import Footer from '../../components/footer/Footer'
import duck from '../../assets/project03/duck.png'
import frontpage from '../../assets/project03/frontpage.png'
import links from '../../assets/project03/links.png'
import pinboard from '../../assets/project03/pinboard.png'
import reacting from '../../assets/project03/reacting.png'


const Project03 = ({theme, navTheme, toggleTheme,word}) => {
  return (
    <>

<NavbarProject navTheme={navTheme} toggleTheme={toggleTheme} word={word}/>

<section className='project03-page'  id={theme}>

      
 


<motion.header 
className="project-header"
initial='initial'
animate='animate'
variants={fadeInLeft}
>

<motion.p
  variants={fadeUpChild}
  id={theme}
> {ProjectData.project03.title}</motion.p>

</motion.header>



<div className='parent'>

<div className='description-details'>
<p >  <a id={theme} href='https://github.com/ElinVS/Erik_Educational_App' target='_blank' rel="noreferrer">2022 / github</a> </p>

</div>

<section className='description-section'>
<p id={theme}>{ProjectData.project03.description} </p>
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

{ProjectData.project03.techstack.map((tech, index)=> {
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
> <img src={frontpage} alt="gif of website" />
</motion.div>
<motion.div 
className='image-div'
><img src={duck} alt="gif of website" />
  
</motion.div>
<motion.div 
className='image-div'
><img src={pinboard} alt="gif of website" /></motion.div>

<motion.div 
className='image-div'
><img src={links} alt="gif of website" /></motion.div>

<motion.div 
className='image-div'
><img src={reacting} alt="gif of website" /></motion.div>



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

  
>
  <Link className="next-project-links"  id={theme} to="/">
     home
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

export default Project03
