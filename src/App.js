import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar2 from './components/Nav';
import Footer from './components/Footer';
import About from './components/Page/About';
import Contact from './components/Page/Contact';
import Porfolio from './components/Page/Porfolio';
import Resume from './components/Page/Resume';
import Home from './components/Home/Home';


import './App.css';

function App() {


  return (

    <div>
      <Header />
      <Navbar2 />
      <Route path="/" element={<Home />} />
      <Route exact path='/about' element={<About />} />
      <Route exact path='/porfolio' element={<Porfolio />} />
      <Route exact path='/resume' element={<Resume />} />
      <Route exact path='/contact' element={<Contact />} />
      <Route exact path='/contact' element={<Contact />} />
      <Footer />
    </div>


  );
}

export default App;
