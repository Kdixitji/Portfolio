import React from 'react';
import "../components/AboutContentStyles.css";
import { Link } from 'react-router-dom';
import Mern2 from "../Images/mern2.jpg";

const AboutContent = () => {
    return (
      <div className='about'>
          <div className='left'>
              <h1>Who am I</h1>
              <p>I am a Web Developer. I create responsive Websites. I enjoy discussing new projects.</p>
              <Link to="/contact">
                  <button className='btn'>Contact</button>
              </Link>
          </div>
          <div className='right'>
              <div className='img-container'>
                <div className='img-stack bottom'>
                  <img src={Mern2} alt='true'/>
                </div>
              </div>
          </div>
      </div>
    )
};

export default AboutContent;