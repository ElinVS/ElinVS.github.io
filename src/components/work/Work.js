import React from 'react'
import {motion} from 'framer-motion'
import '../work/style.css'

const Work = () => {

    const container = {
        initial: {
            scale: 0,
            
          },
          visible: {
            scale: 1,
            
            transition: {
              staggerChildren: 0.1,
            },
          },
        };


    const item = {
        hidden: {
            scale: 0,
            
          },
          visible: {
            scale: 1,
            // opacity:1,
            transition: {
              duration: 1.2,
              type: "spring",
              ease: "easeInOut",
            },
          },
        };



  return (
    <>

    <section className='work-page'>

        <motion.div className='section-two'>
            <p> 02 / selected work</p>
            <div className='test'>
            <div className='one'>
            </div>
            <div className='two'>
                project 01

                muscisians website
            </div>
            </div>
        </motion.div>

        <motion.div 
            className='work-wrapper'
            initial='hidden'
            whileInView='visible'
            variants={container}
            >
        <motion.p
             variants={item}
        > MATTHEW COLLINGS</motion.p>
        <motion.p
             variants={item}
        > MIND SPACE </motion.p>
        <motion.p
             variants={item}
        > ERIK </motion.p>
       
        </motion.div>



    </section>




    </>
  )
}

export default Work
