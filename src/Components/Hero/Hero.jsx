import React from 'react';
import pause_icon from '../../Assets/pause_icon.png';
  import play_icon from '../../Assets/play_icon.png';
import arrow_btn from  '../../Assets/arrow_btn.png';
import './Hero.css';

const Hero = ({ play, setPlay, herodata, herocount, setHerocount }) => {
  // Helper to go to next hero, wrapping around
  const handleNext = () => {
    setHerocount((herocount + 1) % 3);
  };

  return (
    <div className="hero">
      <div className="hero-text">
        <p>{herodata.text1}</p>
        <p>{herodata.text2}</p>
      </div>
      <div className="hero-explore">
        <p>Explore The Feature</p>
        <img src={arrow_btn} alt="" onClick={handleNext} style={{ cursor: "pointer" }} />
      </div>
      <div className="hero-dot-play">
        <ul className="hero-dots" style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", gap: "10px" }}>
          <li onClick={() => setHerocount(0)} className={herocount === 0 ? "hero-dot orange" : "hero-dot"}></li>
          <li onClick={() => setHerocount(1)} className={herocount === 1 ? "hero-dot orange" : "hero-dot"}></li>
          <li onClick={() => setHerocount(2)} className={herocount === 2 ? "hero-dot orange" : "hero-dot"}></li>
        </ul>
        <div className="hero-play">
          <img onClick={() => setPlay(!play)} src={play ? pause_icon : play_icon} alt="" />
          <p>See the video</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
