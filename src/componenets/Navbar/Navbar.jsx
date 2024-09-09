import "./Navbar.css" ;
import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png"
import { Link } from "react-scroll";
import menu_icon from "../../assets/menu-icon.png"
const Navbar =()=>{

const [mobileMenu,setMobileMenu] = useState(false);
const [sticky,setSticky]= useState(false);

const toggleMenu =()=>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
}


useEffect(()=>{
    window.addEventListener("scroll",()=>{
        window.scrollY>50 ? setSticky(true) : setSticky(false);
    })
},[])

    return (
        <nav className={`container ${sticky ? 'dark-navbar' : ""}`}>
        <img src={logo} alt="" className="logo" />
        <ul className={mobileMenu? '' : "hide-mobile-menu"}>
            <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to="program" smooth={true} offset={-260} duration={500}>Program</Link></li>
            <li><Link to="about" smooth={true} offset={-150} duration={500}>About Us</Link></li>
            <li><Link to="campus" smooth={true} offset={-260} duration={500}>Campus</Link></li>
            <li><Link to="testimonials" smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
            <li><Link to="contact" smooth={true} offset={-260} duration={500}><button className="btn">Contact us</button></Link></li>
        </ul>
        <img src={menu_icon} onClick={toggleMenu}  className='menu-icon' alt="" />
        </nav>
    )
}


export default Navbar;