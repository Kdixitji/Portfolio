import React from 'react';
import Navbar from '../components/Navbar';
import HeroImg2 from '../components/HeroImg2';
import Form from '../components/Form';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="Contact " text="Have a question or want to work together?" />
      <Form />
      <Footer/>
    </div>
  )
}

export default Contact;