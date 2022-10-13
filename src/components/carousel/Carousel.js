import React from 'react'
import {motion} from "framer-motion";
import '../carousel/style.css'
import Project01Images from '../carousel/Project01Images'

const Carousel = () => {
  return (
    <motion.div className="carousel">

    <motion.div layoutScroll style={{ overflow: "scroll" }} className="inner-carousel">
        {Project01Images.map(image =>{
            return (
                <motion.div className="image-item" key={image}>
                    <img src={image} alt=""/>
                </motion.div>
            )
        })}
    </motion.div>

</motion.div>
  )
}

export default Carousel
