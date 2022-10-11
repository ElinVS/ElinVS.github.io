import React, {useState, createContext}from 'react'
import '../homepage/style.css'
// import Navbar from '../../components/navbar/Navbar';
import NavBarHome from '../../components/navbarHome/NavBarHome'
import Header from '../../components/header/Header'
import Title from '../../components/jobtitle/Title'
import Work from '../../components/work/Work'
import About from '../../components/about/About'
import Skills from '../../components/skills/Skills'
import Contact from '../../components/contact/Contact'
import Footer from '../../components/footer/Footer';

export const ThemeContext = createContext(null)

const HomePage = ({text, titletext}) => {

  const [theme, setTheme] = useState('light')
  const [navTheme, setNavTheme] = useState ('light-nav')
  const [word, setWord] = useState('dark')

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark': 'light'))
    setWord((curr) => (curr === 'dark' ? 'light': 'dark'))
    setNavTheme((curr) => (curr === 'light-nav' ? 'dark-nav': 'light-nav'))
  }

  
  
  return (
    <>
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        <section className='home-page' id={theme}>
          <NavBarHome navTheme={navTheme} />
        
          {/* <Navbar/> */}
          <Header text="elin svennberg " theme={theme} />
          <Title titletext="creative developer" theme={theme} />
          <Work theme={theme} />
          <About theme={theme} />
          <Skills theme={theme}  />
          <Contact theme={theme} />
          <Footer theme={theme}  toggleTheme={toggleTheme} word={word} setWord={setWord}/>


    
          
        </section>




      </ThemeContext.Provider>
    </>
  )
}

export default HomePage
