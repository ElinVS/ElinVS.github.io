import React from 'react'
import '../footer/style.css'

const Footer = ({theme, toggleTheme, word}) => {
  return (
    <>

        <footer className='footer' id={theme}>
            <div className='footer-container'>

                <div className='footer-left' >
                    <p id={theme} onClick={toggleTheme}> {word} </p>

                </div>

                <div className='footer-right' >
                    <p id={theme} >code & design by Elin Svennberg</p>
                </div>

            </div>
        </footer>

    </>
  )
}

export default Footer
