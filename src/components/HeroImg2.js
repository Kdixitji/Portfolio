import React from 'react';
import "../components/HeroImg2Styles.css";
import { Component } from 'react';
import IntroImg1 from "../Images/backgroundd2.jpg";

class HeroImg2 extends Component{
    render(){
        return (
            <div className="hero-img">
                <div className="mask1">
                    <img className="intro-img1" 
                        src={IntroImg1} 
                        alt="IntroImg1"
                    /> 
                </div>
                <div className="heading">
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
        )
    };
};

export default HeroImg2;