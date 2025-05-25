import React from 'react';
import './Background.css';
import video1 from '../../Assets/video1.mp4';
import image1 from '../../Assets/image1.png';
import image2 from '../../Assets/image2.png';   
import image3 from '../../Assets/image3.png';   

const Background = ({ herocount, play }) => {
  if (play) {
    return (
      <div className="background-container">
        <video autoPlay loop muted className="background-video">
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay"></div>
      </div>
    );
  } else if (herocount === 0) {
    return <img src={image1} className="background" alt="" />;
  } else if (herocount === 1) {
    return <img src={image2} className="background" alt="" />;
  } else if (herocount === 2) {
    return <img src={image3} className="background" alt="" />;
  } else {
    return null;
  }
};

export default Background;
