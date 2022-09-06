
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';

import Navbar from './components/navbar/Navbar';
import HomePage from './pages/homepage/HomePage';



// import Message from './components/message/Message';

function App() {
  
  return (
    <>
      {/* <Message/> */}

      <Router>

      <Navbar/>

      <Routes>

      <Route exact path='/' element={
        <HomePage/>
      }>

      </Route>

      </Routes>


      </Router>

      

    </>
  );
}

export default App;
