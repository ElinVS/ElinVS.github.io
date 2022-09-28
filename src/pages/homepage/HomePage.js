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
        <Contact />
        <Footer />
        
      </section>
    </>
  )
}

export default HomePage
