import React, { useState , useEffect} from 'react'
import { moveDown } from '../../animations/Variants';
import { motion } from 'framer-motion'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import '../navbarHome/style.css'

const NavBarHome = ({navTheme, theme, toggleTheme, word}) => {

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
                <div  className='links' id={ toggleNav ? "hidden"  : ""} >
                
                  <a id={navTheme} onClick={() => setToggleNav (!toggleNav)} href="#contact" 
                    >contact</a> 
                  <a id={navTheme}  onClick={() => setToggleNav (!toggleNav)} href="#work" 
                  > work </a>
                  <a id={navTheme} onClick={() => setToggleNav (!toggleNav)}  href="#skills" 
                    
                > skills </a>
                </div>
                <button id={navTheme}  onClick={() => setToggleNav (!toggleNav)} >
                    <MenuOutlinedIcon
                    />
                </button>
            </motion.div>
           
            

            <motion.div 
                initial='initial'
                animate= 'animate'
                variants={moveDown}
              className='right-side' 
              id={navTheme} >
          
                <span id={navTheme} onClick={toggleTheme}> {word} </span>

                <span>   
                  {date.toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                    })}
            </span>
              
            </motion.div>
        </nav>
    
    
    </>
  )
}

export default NavBarHome
