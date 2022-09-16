import React from 'react'
import {Link} from "react-router-dom"
import {motion} from 'framer-motion'
import '../work/style.css'

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
            <p>02 / selected work</p>
      </motion.div>

      <div className='work-grid-wrapper'>

        
        <Link to='/project01' className="work-link">
        
        <div className='work-selection'>
        
          <p>matthew collings</p>
          <p> 01 </p>

        </div>

        </Link>

    

        
          
            
          
      






        <div className='work-selection'>
          
          <p>mind space</p>
          <p> 02 </p>
        </div>
        <div className='work-selection'>
          
          <p>erik</p>
          <p> 03 </p>
        </div>
      

      </div>
   

        


    </section>




    </>
  )
}

export default Work
