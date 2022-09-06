import React from 'react'
import '../homepage/style.css'
import Header from '../../components/header/Header'
import About from '../../components/about/About'

const HomePage = ({text}) => {
  return (
    <>
      <section className='home-page'>
        <Header text="elin svennberg "  />
        <About/>
      </section>
    </>
  )
}

export default HomePage
