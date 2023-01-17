import React from 'react'

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg3 from '../components/HeroImg3';
import AboutContent from '../components/AboutContent';

const About = () => {
  return (
    <div>
       <Navbar/>
       <HeroImg3 heading="About" text="I'm a self-directed Front-End Developer."/>
       <AboutContent/>
      <Footer />
    </div>
  )
}


export default About