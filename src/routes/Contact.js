import React from 'react'

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg4 from '../components/HeroImg4';
import Form from "../components/Form.js"

const Contact = () => {
  return (
    <div>
       <Navbar/>
       <HeroImg4 heading="Contact" text="Let's have a chat!"/>
       <Form />
      <Footer />
    </div>
  )
}

export default Contact