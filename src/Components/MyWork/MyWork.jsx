import React, { useState, useEffect } from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_Data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const MyWork = () => {
  const [rotation, setRotation] = useState(0);

  const handleNext = () => setRotation((prev) => prev + 45);
  const handlePrev = () => setRotation((prev) => prev - 45);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => prev + 45);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="pattern" />
      </div>

      <div
        className="mywork-container rotating-container"
        style={{ transform: `rotateY(${rotation}deg)` }}
      >
        {mywork_Data.map((work, index) => (
          <span key={index} style={{ '--i': index + 1 }}>
            <a href={work.url} target="_blank" rel="noopener noreferrer">
              <div className="img-box">
                <img src={work.w_img} alt={`Work item ${index + 1}`} />
                <div className="img-caption">{work.w_name}</div>
              </div>
            </a>
          </span>
        ))}
      </div>

      <div className="btn-container">
        <button className="btn" onClick={handlePrev}>Prev</button>
        <button className="btn" onClick={handleNext}>Next</button>
      </div>

      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="arrow icon" />
      </div>
    </div>
  );
};

export default MyWork;
