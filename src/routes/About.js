import React from 'react'

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg3 from '../components/HeroImg3';

const About = () => {
  return (
    <div>
       <Navbar/>
       <HeroImg3 heading="About" text="I'm a self-directed Front-End Developer."/>
      <Footer />
    </div>
  )
}


export default About