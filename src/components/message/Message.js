import React from 'react'
import '../message/style.css'
import { motion } from 'framer-motion'

const Message = () => {

    const line1 = 'Hello'
    const line2 = '.'
    const line3 = 'Elin Svennberg\'\s portfolio coming soon'
    

    const container = {
        initial: {
            x: 0,
            opacity:0

          },
          show: {
            y: 0,
            opacity:1,
            transition: {
              staggerChildren: 0.1,
            },
          },
        };
      
      const itemA = {
        initial: {
            y: 80,
            opacity:0  
          },
          show: {
            y: 0,
            opacity:1,

            transition: {
              duration: 1.2,
              type: "tween",
              ease: "easeInOut",
            },
          },
        };

      const itemB = {
        initial: {
            y: -80,
            opacity:0  
          },
          show: {
            y: 0,
            opacity:1,

            transition: {
              duration: 1.2,
              type: "tween",
              ease: "easeInOut",
            },
          },
        };

      const itemC = {
        initial: {
            x: 80,
            opacity:0  
          },
          show: {
            x: 0,
            opacity:1,

            transition: {
              duration: 1.5,
              type: "spring",
              ease: "easeInOut",
            },
          },
        };


  return (

    <>

    <section 
        className='message-page'>
        
        <motion.div
            className='text-container'
            variants={container}
            initial='initial'
            animate='show'
            >
                
            <motion.h1 
                variants={itemA}
                >
                    {line1}
            </motion.h1>
            
            <motion.h1 
                variants={itemB}
                >
                    {line2}
            </motion.h1>
            <motion.h1 
                variants={itemB}
                >
                    {line2}
            </motion.h1>
            <motion.h1 
                variants={itemB}
                >
                    {line2}
            </motion.h1>

            <motion.p
            variants={itemC}
            >
                {line3}
            </motion.p>
        
        </motion.div>

    </section>
    
    </>
  )
}

export default Message
