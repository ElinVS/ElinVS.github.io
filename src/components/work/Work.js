import React from 'react'
import {Link} from "react-router-dom"
import {motion} from 'framer-motion'
import '../work/style.css'
import Marquee from './marquee/Marquee'

import test from '../../assets/about/dark-handshake.jpeg'

const Work = () => {



  return (
    <>

    <section className='work-page'>

      {/* <motion.div 
      className="div-title"
      > 
            <p>02 / selected work</p>
      </motion.div>

      <div class="parent">

        <div className='work-img'>

          <p>matthew collings</p>
          <p>musicians website</p>

          
        </div>
        <div className='work-img'>
        <p>matthew collings</p>
          <p>musicians website</p>

        </div>
        <div className='work-img'>
        <p>matthew collings</p>
          <p>musicians website</p>

        </div>

      </div> */}


      <motion.div 
        className="div-title"
        > 
            <p>01 / selected work</p>
      </motion.div>

      <div className='work-grid-wrapper'>

      <div className="feature">
        <Link to='/project01' className="work-link">
        
          <div className='work-selection'>
            {/* <img src={test} className="feature-img" alt="breath"/> */}
            <p>matthew collings</p> 
            <span className="feature-img">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan facilisis quam, in tristique lorem. Fusce consequat nisi in nisl elementum bibendum. </span>
            <p> 01 </p>  
          </div>
          
        </Link>
        </div>                            
                            
        <Link to='/project02' className="work-link">
          <div className='work-selection'>
            <p>mind space</p>
            <p> 02 </p>
          </div>
        </Link>

        <Link to='/project03' className="work-link">
          <div className='work-selection'>
            <p>erik</p>
            <p> 03 </p>
          </div>  
        </Link>

      </div>
   

        


    </section>




    </>
  )
}

export default Work
