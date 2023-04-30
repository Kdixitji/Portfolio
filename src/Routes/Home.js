import React from 'react';
import Navbar from '../components/Navbar';
import HeroImg from "../components/HeroImg.js";
import AboutContent from '../components/AboutContent';
import Work from "../components/Work.js";
import Form from "../components/Form.js";
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
        <Navbar />
        <HeroImg />
        <AboutContent />
        <Work />
        <Form />
        <Footer />
    </div>
  )
}

export default Home;