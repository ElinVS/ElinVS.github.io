import React, { useState } from 'react'
import { motion } from 'framer-motion'
import '../about/style.css'
import { AboutData } from './AboutData'
import { fadeUp, fadeUpChild, draw } from '../../animations/Variants'
import edinburgh  from '../../assets/about/edinburgh1.jpeg'
import reykjavik from '../../assets/about/volcano.jpeg'
import jonkoping from '../../assets/about/forrest.jpeg'

const About = ({theme}) => {

  
  // const images= [edinburgh, reykjavik, jonkoping]

  // const [image, setImage] = useState('img');
  // const [text, setText] = useState(AboutData.img.portrait)

  // const defaultState = () => {
  //   setImage('img')
  //   setText(AboutData.img.portrait)
  // }

  // const selectedEdinburgh = () =>{ 
  //     setImage(images[0]) 
  //     setText(AboutData.img.edinburgh)  
  // }

  // const selectedReykjavik = () =>{ 
  //     setImage(images[1]) 
  //     setText(AboutData.img.reykjavik)  
  // }

  // const selectedJonkoping = () =>{ 
  //     setImage(images[2]) 
  //     setText(AboutData.img.jonkoping)  
  // }

 
  return (
    <>

    <section className='about-page'>

    {/* <motion.div 
      className='section-one'
      variants={fadeUp}
      initial='initial'
      whileInView='animate'
      >

      <motion.p
      variants={fadeUpChild}
      >
      01 / hello  
      </motion.p>

    </motion.div> */}

    <div className='grid-wrapper'>

    <motion.div 
      className='portrait-img-wrapper'
      variants={fadeUp}
      initial='initial' 
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
        // custom={0.5}
      />
      </motion.svg>

      <motion.p
       id={theme}
        variants={fadeUpChild}
     
      > 02 / ABOUT </motion.p>
        
      <motion.div 
        className='img'
        variants={fadeUpChild}
      >
        {/* <img src={image} width={300} height={300}/> */}
      </motion.div>

    

      <motion.p
      variants={fadeUpChild}
      id={theme}
      > tokyo 2019</motion.p>
    </motion.div>
    

    <motion.div 
      className='about-container'
      variants={fadeUp}
      initial='initial'
      whileInView='animate'
    >  
            
      <motion.p
        id={theme}
        variants={fadeUpChild}> 
       {AboutData.intro}
      </motion.p>

      <motion.p
        id={theme}
        variants={fadeUpChild}>
        {AboutData.interest}
      </motion.p>

      <motion.p
        id={theme}
        variants={fadeUpChild}>
        {AboutData.mission}
      </motion.p>

      <motion.p
        id={theme}
        variants={fadeUpChild}>
        {AboutData.outro}
      </motion.p>

    </motion.div>
    </div>
    </section>
    
    </>
  )
}

export default About
