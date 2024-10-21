import React from 'react'
import "./Hero.css"
import profile_img from "../../assets/mynew.jpg"
import AnchorLink from "react-anchor-link-smooth-scroll"
import MyCV from "../../assets/My-CV.pdf"



const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Dada Benjamin,</span> <br />A Fullstack developer based in Nigeria.</h1>
        <p>I am a full stack Developer from Lagos, Nigeria and very eager to showcase my skills. </p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href= "#contact">Connect with me</AnchorLink></div>
            <div className="hero-resume"><a href={MyCV} download="My-CV.pdf">My resume</a></div>
        </div>
    </div>
  )
}

export default Hero