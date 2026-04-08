import React from 'react'
import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from './Components/Header/Header';
import About from './Components/About/About';

function App() {
  return (
    <Router>
    <Header/>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/about" element={<About/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
