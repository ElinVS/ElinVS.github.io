import React from 'react'
import '../loadingpage/style.css'
import {motion} from 'framer-motion'
import {  draw, loader} from '../../animations/Variants';


const LoadingPage = () => {

    return (
      <>
        <div className="loader-container">
          <motion.div 
            className="loader-wrap"
            variants={draw}
            initial='initial'
            animate='animate'
            
            >


<p> hej </p>



            <motion.div
            className="loader-bar"
            variants={loader}
            initial="initial"
            animate="animate"
            ></motion.div>

          

          
            
          </motion.div>
        </div>
      </>
    );
  };
export default LoadingPage
