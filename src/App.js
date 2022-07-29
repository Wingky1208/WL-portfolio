import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar2 from './components/Nav';
import Footer from './components/Footer';
import About from './components/Page/About';
import Contact from './components/Page/Contact';
import Porfolio from './components/Page/Porfolio';
import Resume from './components/Page/Resume';
import Home from './components/Home/Home';
import { HashRouter } from 'react-router-dom';

import './App.css';

function App() {


  return (
    <Router>
      <div>
        <Header />
        <Navbar2 />



        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/porfolio' element={<Porfolio />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/contact' element={<Contact />} />

        </Routes>

        <Footer />
      </div>
    </Router>

  );
}

export default App;
