import "../components/FooterStyles.css";
import React from 'react';
import { 
    FaGithub, 
    FaHome, 
    FaLinkedinIn, 
    FaMailBulk, 
    FaPhone, 
    FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome 
                        size={20} 
                        style={{ color : "#fff", 
                        marginRight : "2rem"}}/>
                    <div>
                        <p>197-D, Alkapuri</p>
                        <p>Ujjain, M.P. (India)</p>
                    </div>
                </div>
                <div className="phone">
                    <h4>
                        <FaPhone 
                            size={20} 
                            style={{ color : "#fff", 
                            marginRight : "2rem"}}/>
                            +91 - 99930-83792
                    </h4>
                </div>
                <div className="email">
                    <h4>
                        <FaMailBulk 
                            size={20} 
                            style={{ color : "#fff", 
                            marginRight : "2rem"}}/>
                            kdixitji@gmail.com
                    </h4>
                </div>
            </div>
            <div className="right">
                <h4>About me</h4>
                <p>This is me Kratik Sharma, 
                    an enthusiastic Web-Developer. 
                    I enjoy discussing new projects.
                </p>
                <div className="social">
                    <FaLinkedinIn 
                        size={20} 
                        style={{ color : "#fff", 
                        marginRight : "1rem"}}/>
                    <FaGithub 
                        size={20} 
                        style={{ color : "#fff", 
                        marginRight : "1rem"}}/>
                    <FaTwitter 
                        size={20} 
                        style={{ color : "#fff", 
                        marginRight : "1rem"}}/>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Footer;