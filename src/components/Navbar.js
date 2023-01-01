import "./NavbarStyles.css"

import React, { useState } from 'react'
import { Link } from "react-router-dom"

import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {
// making menu active
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    // making transparent navbar active
    const [color, setColor] = useState(false)
    const changeColor = () =>{
        if(window.scrollY >=1){setColor(true);}
        else{setColor(false)}
    }
    // setting scrolling window functionnal
window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
        <Link to="/">
            <h1 className="main-title">Portfolio.</h1>
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/project">Project</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{ color: "#fff"}} />) : <FaBars size={20} style={{ color: "#fff"}} />}
        </div>
         </div>
  )
}

export default Navbar