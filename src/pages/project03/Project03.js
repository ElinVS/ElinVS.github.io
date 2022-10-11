import React from 'react'
import { Link } from "react-router-dom"
import '../project01/style.css'
import {motion} from 'framer-motion'
import { draw, fadeInLeft, fadeInLeftChild, fadeUp, fadeUpChild } from '../../animations/Variants'
import { ProjectData } from '../ProjectData'
import NavbarProject from '../../components/projects/navbar/NavbarProject'

const Project03 = ({theme, navTheme}) => {
  return (
    <>

<NavbarProject navTheme={navTheme}/>

<section className='project03-page'  id={theme}>

      
<motion.header 
  className="project-header"
  initial='initial'
  animate='animate'
  variants={fadeInLeft}
> 
  <motion.p
   id={theme}
    variants={fadeUpChild}
  > project02 / mind space</motion.p>
</motion.header>

<section className='description-section'>
  <p  id={theme}>Lorem ipsum dolor sit amet. Ut fuga omnis ex facilis facilis hic beatae obcaecati est aperiam quaerat rem internos consequatur sed blanditiis laboriosam nam enim molestiae. Sit obcaecati facere est impedit doloribus est culpa cupiditate non vero nemo? Est molestiae eveniet et nemo officia est mollitia illo? </p><p>In repudiandae iste et deleniti facilis  deserunt galisum aut suscipit nesciunt. Eum atque laboriosam non enim deleniti ut fuga sint ea consectetur soluta qui libero veritatis. </p>
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
  <span  id={theme}>@github</span>
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
               Home
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
    
    
    </>
  )
}

export default Project03
