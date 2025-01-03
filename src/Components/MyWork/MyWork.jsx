import React from 'react'
import './MyWork.css'
import theme_pattern from "../../assets/theme_pattern.svg"
import mywork_Data from "../../assets/mywork_data"
import arrow_icon from "../../assets/arrow_icon.svg"

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>My latest Work</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="mywork-container">
            {mywork_Data.map((work, index) => {
                return (
                  <a key={index}  href={work.url} target="_blank" rel="noopener noreferrer">
                    <img src={work.w_img} alt={`Work item ${index + 1}`} />
                    <p>{work.w_name}</p>
                    
                  </a>
                );
            })}
        </div>
        <div className="mywork-showmore">
            <p>Show More</p>
            <img src={arrow_icon} alt="" />
        </div>
    </div>
  )
}

export default MyWork