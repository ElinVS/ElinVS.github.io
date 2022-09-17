import React from 'react'
import { motion } from 'framer-motion'
import '../header/style.css'
import { fadeInLeft , fadeInLeftChild} from '../../animations/Variants'


const Header = ({text}) => {


  return (
    <>
        <motion.div
            className='header-container'
            variants={fadeInLeft}
            initial='initial'
            animate='animate'
            >

            <motion.p 
            className='header-text'
            variants={fadeInLeftChild}
            >
              {text}
            </motion.p>
        </motion.div>    
    </>
  )
}

export default Header
