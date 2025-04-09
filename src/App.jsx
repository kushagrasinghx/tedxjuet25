import React from "react";
import './App.css';
import Navbar from './components/Navbar';
import SplitText from "./components/SplitText";
import HeroSubtitle from "./components/HeroSubtitle";
import CircularText from './components/CircularText';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <div className="hero-section">
          <CircularText
            text="2025*JUET*X*TED*"
            onHover="speedUp"
            spinDuration={20}
            className="circular-text"
          />
          <div className="title-subtitle">
            <SplitText
              text="RESONANCE."
              className="hero-title"
              delay={150}
              animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
            />
            <HeroSubtitle />
          </div>
        </div>
        <div className="section1"></div>
      </main>
    </>
  );
}

export default App;
