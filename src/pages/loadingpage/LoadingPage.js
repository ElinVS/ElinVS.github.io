import React, {useState, useEffect} from 'react'
import '../loadingpage/style.css'
import {motion} from 'framer-motion'
import { fadeInLeft , fadeInLeftChild} from '../../animations/Variants';

const LoaderVariant = {
  initial: { left: "-100vw" },
  animate: {
    left: "0",
    transition: { duration: 2.5, type: "tween", ease: "linear" },
  },
};




const LoadingPage = () => {



    return (
      <>
        <div className="loader-container">
          <motion.div className="loader-wrap">

            <p>hej</p>

            <motion.div
            className="loader-bar"
            variants={LoaderVariant}
            initial="initial"
            animate="animate"
            ></motion.div>
            
          </motion.div>
        </div>
      </>
    );
  };
export default LoadingPage
