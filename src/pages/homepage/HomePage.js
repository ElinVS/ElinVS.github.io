import React from 'react'
import '../homepage/style.css'
import Header from '../../components/header/Header'

const HomePage = ({text, text2, text3}) => {
  return (
    <>
      <section className='home-page'>
        <Header text="elin  " text2="svennberg" />
      </section>
    </>
  )
}

export default HomePage
