import React from 'react';
import HeroImg from '../components/HeroImg';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg />
      <Footer />
    </div>
  )
}

export default Home