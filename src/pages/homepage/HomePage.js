import React from 'react'
import '../homepage/style.css'
import Header from '../../components/header/Header'
import About from '../../components/about/About'
import Work from '../../components/work/Work'

const HomePage = ({text, text2}) => {
  return (
    <>
      <section className='home-page'>
        <Header text="elin svennberg"  />
        <About/>
        <Work/>
      </section>
    </>
  )
}

export default HomePage
