import React from 'react'
import '../homepage/style.css'
import Header from '../../components/header/Header'
import About from '../../components/about/About'
import Work from '../../components/work/Work'
import Title from '../../components/jobtitle/Title'


const HomePage = ({text, titletext}) => {
  return (
    <>
      <section className='home-page'>
        <Header text="elin svennberg "  />
        <Title titletext="creative developer"/>
        
        <About/>
        <Work/>
      </section>
    </>
  )
}

export default HomePage
