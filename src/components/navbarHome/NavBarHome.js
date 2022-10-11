import React, { useState , useEffect} from 'react'
import { Link } from "react-router-dom"
import { moveDown } from '../../animations/Variants';
import { motion } from 'framer-motion'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import '../navbarHome/style.css'

const NavBarHome = () => {

    const [toggleNav, setToggleNav] = useState(false)

      const [date, setDate] = useState(new Date())

  useEffect(() => {
    setInterval(() => setDate(new Date()), 30000);
  }, []); 


  return (
    <>
        <nav className='navbar'>
            
            <motion.div 
              className='left-side'
              initial='initial'
              animate= 'animate'
              variants={moveDown}
              >
                <div className='links' id={toggleNav ? "hidden" : ""}>
                {/* <Link to="/" 
                
                > home </Link> */}
                <a href="#contact" 
                    
                   
                    >contact</a> 
                  <a href="#work" 
                    
                    
                > work </a>
                <a href="#skills" 
                  
                    
                > skills </a>
                </div>
                <button onClick={() => setToggleNav (!toggleNav)}>
                    <MenuOutlinedIcon
                    
                    />
                </button>
            </motion.div>
           
           

            <div className='right-side'>
                <span>   
            {date.toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                    })}
            </span>
              
            </div>
        </nav>
    
    
    </>
  )
}

export default NavBarHome
