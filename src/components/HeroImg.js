import "./HeroimgStyles.css"

import React from 'react'

import IntroImg from "../assets/background-4.jpg"
import { Link } from "react-router-dom"

const HeroImg = () => {
  return <div className="hero">
    <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg" />
    </div>
    <div className="content">
        <p> Hi! I'm a novice</p>
        <h1 className="main-title"> Multimedia Creator. </h1>
        <div>
            <Link to="/project" className="btn">Projects</Link>
            <Link to="/contact" className="btn-light">Contact</Link>
        </div>
    </div>
  </div>
  
  
}

export default HeroImg