import React, { useState } from 'react'
import { motion } from 'framer-motion'
import '../about/style.css'
import { AboutData } from './AboutData'
import { fadeUp, fadeUpChild } from '../../animations/Variants'
import edinburgh  from '../../assets/about/edinburgh1.jpeg'
import reykjavik from '../../assets/about/volcano.jpeg'
import jonkoping from '../../assets/about/forrest.jpeg'

const About = () => {

  
  const images= [edinburgh, reykjavik, jonkoping]

  const [image, setImage] = useState('img');
  const [text, setText] = useState(AboutData.img.portrait)

  const defaultState = () => {
    setImage('img')
    setText(AboutData.img.portrait)
  }

  const selectedEdinburgh = () =>{ 
      setImage(images[0]) 
      setText(AboutData.img.edinburgh)  
  }

  const selectedReykjavik = () =>{ 
      setImage(images[1]) 
      setText(AboutData.img.reykjavik)  
  }

  const selectedJonkoping = () =>{ 
      setImage(images[2]) 
      setText(AboutData.img.jonkoping)  
  }

 

 


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

      <motion.p
      variants={fadeUpChild}
      > 02 / HELLO</motion.p>
        
      <motion.div 
        className='img'
        variants={fadeUpChild}
      >
        <img src={image} width={300} height={300}/>
      </motion.div>

      <motion.p
      variants={fadeUpChild}
      > {text}</motion.p>
    </motion.div>
    

    <motion.div 
      className='about-container'
      variants={fadeUp}
      initial='initial'
      whileInView='animate'
    >  
            
      <motion.p
        variants={fadeUpChild}> 
        I am a software developer based in
         <span onMouseEnter={selectedEdinburgh}  onMouseLeave={defaultState}> Edinburgh  </span>
         , by way of 
         <span onMouseEnter={selectedReykjavik } onMouseLeave={defaultState}> Reykjavik </span>  
          and originally from 
         <span onMouseEnter={selectedJonkoping } onMouseLeave={defaultState}> Jonkoping </span> 
      </motion.p>

      <motion.p
        variants={fadeUpChild}>
        {AboutData.interest}
      </motion.p>

      <motion.p
        variants={fadeUpChild}>
        {AboutData.interest}
      </motion.p>

      <motion.p
        variants={fadeUpChild}>
        {AboutData.interest}
      </motion.p>

    </motion.div>

    </div>





    </section>
    
    </>
  )
}

export default About
