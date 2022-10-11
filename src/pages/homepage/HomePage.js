import React from 'react'
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



const HomePage = ({text, titletext, theme, navTheme, word, setWord, toggleTheme}) => {

  
  return (
    <>

        <section className='home-page' id={theme}>
          <NavBarHome navTheme={navTheme} toggleTheme={toggleTheme} word={word} />
        
          {/* <Navbar/> */}
          <Header text="elin svennberg " theme={theme} />
          <Title titletext="creative developer" theme={theme} />
          <Work theme={theme} />
          <About theme={theme} />
          <Skills theme={theme}  />
          <Contact theme={theme} />
          <Footer theme={theme}  toggleTheme={toggleTheme} word={word} setWord={setWord}/>

        </section>

    </>
  )
}

export default HomePage
