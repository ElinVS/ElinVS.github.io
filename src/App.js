
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import React, {useState, useEffect, createContext}from 'react'


import HomePage from './pages/homepage/HomePage';

import Project01 from './pages/project01/Project01';
import Project02 from './pages/project02/Project02';
import Project03 from './pages/project03/Project03';
import LoadingPage from './pages/loadingpage/LoadingPage';


export const ThemeContext = createContext(null)


// import Message from './components/message/Message';

function App() {

  const [theme, setTheme] = useState('light')
  const [navTheme, setNavTheme] = useState ('light-nav')
  const [word, setWord] = useState('dark')

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark': 'light'))
    setWord((curr) => (curr === 'dark' ? 'light': 'dark'))
    setNavTheme((curr) => (curr === 'light-nav' ? 'dark-nav': 'light-nav'))
  }


  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);


  return (
    <>
    
    
      <ThemeContext.Provider value={{theme, toggleTheme}}>

      <Router> 
        
      <Routes>

      
        <Route exact path='/' element={
          loading ? <LoadingPage/> : <HomePage navTheme={navTheme} theme={theme}  toggleTheme={toggleTheme} word={word} setWord={setWord} />
        }>
        </Route>

        <Route  path='/project01' element={
          <Project01 theme={theme} navTheme={navTheme} toggleTheme={toggleTheme} word={word}/>
        }>
        </Route>

        <Route  path='/project02' element={
          <Project02 theme={theme} navTheme={navTheme} toggleTheme={toggleTheme} word={word}/>
        }>
        </Route>

        <Route  path='/project03' element={
          <Project03 theme={theme} navTheme={navTheme} toggleTheme={toggleTheme} word={word}/>
        }>
        </Route>

      </Routes>
     
      
     

      </Router>

      </ThemeContext.Provider>

      

      

    </>
  );
}

export default App;
