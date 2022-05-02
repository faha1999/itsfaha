import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Experience from './components/Experience';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonial from './components/Testimonial';

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonial />
    </>
  );
};

export default App;
