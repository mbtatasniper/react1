import React from 'react'
import Navbar from './Navbar/Navbar.jsx';
import Home from './home/Home';
import Portofolio from './portofolio/Portofolio';
import About from './about/About.jsx';
import Contact from './contact/Contact';
import Footer from './footer/Footer.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Portofolio />
      <About></About>
      <Contact></Contact>
      <Footer></Footer>
    </>
  )
}

