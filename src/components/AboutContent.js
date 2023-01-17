import "./AboutContentStyles.css"

import React from 'react'
import { Link } from "react-router-dom"
import React1 from "../assets/react1.jpg"
import React2 from "../assets/react2.jpg"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I ?</h1>
            <p>I aim to work in the field of IT or digital media after having discovered this universe through self-taught projects. Passionate about new technologies, art and problem solving, I am convinced that this professional reorientation will give me the opportunity to use my skills and experience to evolve in a field that better suits me.  </p>
            <Link to="/contact">
                <button className="btn1">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={React1} 
                    className="img" 
                    alt="true"/>
                </div>
                <div className="img-stack bottom">
                    <img src={React2} 
                    className="img" 
                    alt="true"/>
                </div>
            </div>

        </div>
    </div>
  )
}

export default AboutContent