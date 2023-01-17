import "./FooterStyles.css"

import React from 'react'
import { FaHome, FaPhone, FaMailBulk, FaLinkedin, FaDiscord } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={22} style={{ color:"#fff", marginRight: "2rem" }} />
                    <div>
                        <p> Bordeaux, France.</p>
                    </div>
                </div>
                <div className="phone">
                    <h4> <FaPhone size={20} style={{ color:"#fff", marginRight: "2rem" }} /> (+33) 06.13.43.55.71 </h4>
                </div>
                <div className="email">
                <a href="mailto:ines.bouakkaoui@gmail.com"><h4> <FaMailBulk size={20} style={{ color:"#fff", marginRight: "2rem" }} /> ines.bouakkaoui@gmail.com </h4></a>
                </div>
            </div>

            <div className="right">
                <h4> About my objectives </h4>
                <p> Call me Inès! I enjoy undertaking new projects and I am always eager to learn. I have developed this website in order to share my personal self-taught projects. Do not hesitate to contact me to discuss it! </p>
                <div className="social"> 
                <a href="https://www.linkedin.com/in/ines-bouakkaoui/" target="_blank"> <FaLinkedin size={30} style={{ color:"#fff", marginRight: "1rem" }} /> </a>
                <a href="https://www.discord.com/Ines#2839" target="_blank"> <FaDiscord size={30} style={{ color:"#fff", marginRight: "1rem" }} /></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer