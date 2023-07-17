import React from 'react';
import '../Rightdiv/RightDiv.css';
import backgroundImage from '../Rightdiv/background.avif';
import Lottie from 'lottie-react'
import animationData from '../Assets/animation_lk5mn6mp.json'

const RightDiv = () => {
  const divStyle = {
    backgroundImage: `url(${backgroundImage})`
  };

  return (
    <div className='rightdiv' style={divStyle}>
      <div className="heading">
      <div className='heading1'>Hi..</div>
      <div className='heading2'>My Name Is..</div>
      <div className='heading2'>Anandhu.</div>
      </div>
      
      <div className="computer">
        <Lottie animationData={animationData} className='animation'/>
      </div>
    <div className="description">
      <p>
        
      "I am an experienced web developer skilled in creating captivating online experiences.
       I specialize in crafting user-friendly websites using HTML, CSS, and JavaScript.
       
I bring ideas to life with expertise in front-end development, 
ensuring compatibility across devices and optimized performance.
 Committed to delivering high-quality projects, I collaborate closely to achieve exceptional results. 
 Let's build the future of the web together."
      </p>
    </div>
    </div>
  );
};

export default RightDiv;
