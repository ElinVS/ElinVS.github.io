
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';

import Navbar from './components/navbar/Navbar';
import HomePage from './pages/homepage/HomePage';
import Work from './components/work/Work';
import Footer from './components/footer/Footer';
import Project01 from './pages/project1/Project01';



// import Message from './components/message/Message';

function App() {


  return (
    <>
      {/* <Message/> */}

      

      <Router>

      <Navbar/>

      <Routes>

        <Route exact path='/' element={
          <HomePage />
        }>
        </Route>

        <Route  path='/work' element={
          <Work/>
        }>
        </Route>

        <Route  path='/project01' element={
          <Project01/>
        }>
        </Route>

      </Routes>
      <Footer />

      </Router>

      

      

    </>
  );
}

export default App;
