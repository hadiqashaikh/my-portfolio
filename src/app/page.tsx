import React from 'react';
import Hero from './components/hero';
import About from './components/about';
import Project from './components/project';
import Contact from './components/contact';
import Skills from './components/skills';

const Home = () => {
  return (
    <div>
      < Hero/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
    </div>
  );
}

export default Home;
