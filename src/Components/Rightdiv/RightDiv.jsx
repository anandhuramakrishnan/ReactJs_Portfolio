import React from 'react';
import '../Rightdiv/RightDiv.css';
import backgroundImage from '../Rightdiv/background.avif';

const RightDiv = () => {
  const divStyle = {
    backgroundImage: `url(${backgroundImage})`
  };

  return (
    <div className='rightdiv' style={divStyle}>
      <div className='heading'>Web Developer</div>
    <div className="myphoto">
      <img src='' alt='myphoto' />
    </div>
    </div>
  );
};

export default RightDiv;
