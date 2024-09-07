import React from "react";
import Navbar from "./componenets/Navbar/Navbar"
import Hero from "./componenets/Hero/Hero"
import Program from "../src/componenets/Programs/Programs"
import Title from "./componenets/Title/Title";
import About from "./componenets/About/About"
import Campus from "./componenets/Campus/Campus"
import Testimonials from "./componenets/Testimonials/Testimonials";
import Contact from "./componenets/Contact/Contact"
import Footer from "./componenets/Footer/Footer"
function App(){
    return (
        <div >
           <Navbar/>
           <Hero/>
           <div className="container">
            <Title subtitle="Our PROGRAM" title="What We Offer" />
           <Program/>
           <About/>
            <Title subtitle="Gallery" title="Campus Photos" />
            <Campus />
            <Title subtitle="TESTIMONIALS" title="What Student Says" />
            <Testimonials/>
            <Title subtitle="Contact Us" title="Get in Touch" />
            <Contact/>
            <Footer/>

           </div>
        </div>
    )
}

export default App;