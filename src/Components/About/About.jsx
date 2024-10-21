import React from 'react'
import "./About.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import profile_img  from "../../assets/mynew.jpg"

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                 <div className="about-para">
                    <p>A self-motivated and detail-oriented Full Stack Developer with hands-on experience in building responsive
                    web applications.  </p>
                    <p></p>
                 </div>
                 <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{width: "90%"}}/></div>
            <div className="about-skill"><p>React.js</p><hr style={{width: "70%"}}/></div>
            <div className="about-skill"><p>Javascript</p><hr style={{width: "60%"}}/></div>
            <div className="about-skill"><p>Next.js</p><hr style={{width: "50%"}}/></div>
            <div className="about-skill"><p>Postman API</p><hr style={{width: "70%"}}/></div>
            <div className="about-skill"><p>MongoDB</p><hr style={{width: "60%"}}/></div>
            <div className="about-skill"><p>Node.js</p><hr style={{width: "65%"}}/></div>
            <div className="about-skill"><p>Express.js</p><hr style={{width: "50%"}}/></div>
            </div>
            </div>
            
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>1 +</h1>
                <p>YEAR OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>20 +</h1>
                <p>PROJECT COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>68 +</h1>
                <p>COMMITS</p>
            </div>
        </div>
    </div>
  )
}

export default About