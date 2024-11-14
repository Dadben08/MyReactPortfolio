import React from 'react'
import "./Footer.css"
import footer_logo from "../../assets/footer_logo.svg"
import user_icon from "../../assets/user_icon.svg"
import theme_pattern from "../../assets/theme_pattern.svg"

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <div className="footer-logo">
                    <h1>DadA</h1>
                    <img src={theme_pattern} alt="" />
                </div>
                
                <p>I am a full stack Developer from Lagos, Nigeria and very eager to showcase my skills </p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt=""  />
                    <input type="email" placeholder='Enter your email'/>
                </div>
                 <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
             <p className="footer-bottom-left">&copy; 2024 Dada Benjamin. All rights reserved.</p>
             <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy </p>
                <p>Connect with me</p>
             </div>
        </div>
    </div>
  )
}

export default Footer