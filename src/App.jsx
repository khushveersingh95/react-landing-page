import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Background from './Components/Background/Background';
import './App.css';

const App = () => {
  const herodata = [
    { text1: "Welcome to Our Landing Page", text2: "Start your journey with us." },
    { text1: "Discover Our Features", text2: "Explore what we offer." },
    { text1: "Join Our Community", text2: "Be a part of something great." }
  ];

  const [herocount, setHerocount] = useState(1);
  const [play, setPlay] = useState(false);

  return (
    <div>
      <Background herocount={herocount} play={play} />
      <Navbar />
<Hero
  play={play}
  setPlay={setPlay}
  herodata={herodata[herocount]}
  herocount={herocount}
  setHerocount={setHerocount}
/>
    </div>
  );
}

export default App;
