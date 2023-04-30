import React from "react";
import IntroImg from "../Images/backgroundd.jpg";
import { Link } from "react-router-dom";
import "../components/HeroImgStyles.css";

const HeroImg = () => {
    return (
      <div className="hero">
          <div className="mask">
              <img className="intro-img" 
              src={IntroImg} 
              alt="IntroImg"
              /> 
          </div>
          <div className="content">
              <p>Hello, I'm</p>
              <h1 className="first">Kratik Sharma</h1>
              <div>
                  <Link to="/project" 
                  className="btn">Projects
                  </Link>
                  <Link to="/contact" 
                  className="btn btn-light">Contact
                  </Link>
              </div>
          </div>
      </div>
    )
  };
  
export default HeroImg;