import React from 'react'
import '../homepage/style.css'
// import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header'
import About from '../../components/about/About'
import Work from '../../components/work/Work'
import Title from '../../components/jobtitle/Title'
import Skills from '../../components/skills/Skills'
import Contact from '../../components/contact/Contact'
import NavBarHome from '../../components/navbarHome/NavBarHome'


const HomePage = ({text, titletext}) => {
  
  return (
    <>
      <section className='home-page'>
        <NavBarHome/>
       
        {/* <Navbar/> */}
        <Header text="elin svennberg "  />
        <Title titletext="creative developer"/>
        <Work />
        <About/>
        <Skills />
        {/* <Contact /> */}
        
      </section>
    </>
  )
}

export default HomePage
