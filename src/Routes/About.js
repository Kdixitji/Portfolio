import React from 'react';
import Navbar from '../components/Navbar';
import HeroImg2 from "../components/HeroImg2.js";
import AboutContent from "../components/AboutContent.js";
import Footer from "../components/Footer.js";

const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="About " text="I am a Full Stack Developer"/>
      <AboutContent />
      <Footer/>
    </div>
  )
}

export default About;