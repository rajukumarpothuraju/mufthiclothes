import React from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './AllComponents/navbar';
import Home from './AllComponents/home';
import SpringSummer from './AllComponents/SpringSummer';
import Shirts from './AllComponents/shirts';
import Jeansall from './AllComponents/jeans';




function App() {
  return (
    <>
    
    <Navbar/>
   
      <Routes> 
        <Route path='/' element={<Home />} />               {/* Home with Carousel */}
   
        <Route path='/SpringSummer' element={<SpringSummer />} /> {/* Spring Summer */}
        <Route path='/Shirts' element={<Shirts />} /> {/* Shirts */}
        <Route path='/Jeans' element={<Jeansall />} /> {/* Jeans */}
      </Routes>
    </>
  );
}

export default App;

