import React from 'react';
import './Hero.css';
import profile_img from '../../assets/mynew.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import MyCV from '../../assets/My-CV.pdf';
import Typewriter from 'react-typewriter-effect';

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="Dada Benjamin Profile" />
      <h1>
        <Typewriter
          textStyle={{
            fontFamily: 'Outfit, sans-serif',
            fontWeight: 'bold',
            fontSize: '3rem',
            color: '#fff',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '0 auto',
            display: 'flex',
            textAlign: 'center',

          }}
          startDelay={500}
          cursorColor="#007acc"
          multiText={[
            "I'm Dada Benjamin,",
            'A Fullstack developer.',
            'I am a computer science graduate.',
            'I am a Computer Technician.',
            'I specialize in web development.',
            'I create user-friendly websites.',
            'I am passionate about building web apps.',
            'I am a fast learner.',
            'I am a problem solver.',
            'I am a team player.',
            'I am a self-motivated developer.',
            'I am a detail-oriented developer.',
            'I am a creative developer.',
            'A JavaScript Enthusiast.',
            'A React Enthusiast.',
            'A Node.js Enthusiast.',
            'A MongoDB Enthusiast.',
            'A Express.js Enthusiast.',
            'A Next.js Enthusiast.',
            'A Postman Enthusiast.',
            'A Git Enthusiast.',
            
          ]}
          multiTextDelay={1000}
          typeSpeed={80}
          deleteSpeed={50}
          multiTextLoop
        />
      </h1>
      <p>
        I am a full stack Developer from Lagos, Nigeria and very eager to
        showcase my skills.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <a href={MyCV} download="My-CV.pdf">
            My resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
