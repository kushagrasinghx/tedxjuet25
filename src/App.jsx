import React from "react";
import './App.css';
import Navbar from './components/Navbar';
import SplitText from "./components/SplitText";
import HeroSubtitle from "./components/HeroSubtitle";
import Threads from "./components/Threads";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <div className="hero-section">
          <div className="threads">
          <Threads
            amplitude={1}
            distance={0}
            enableMouseInteraction={true}
          />
          </div>
          
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
            <div className="hero-links">
              <button className="hero-btn">Get Passes!</button>
              <div className="link-list"><a href="https://www.google.com">Contact Us</a></div>
              <div className="link-list"><a href="https://www.google.com">Sponsorship Brochure</a></div>
              <div className="link-list"><a href="https://www.google.com">Our Team</a></div>
            </div>
            <div className="address">
              <div className="line1">Jaypee University of Engineering & Technology,</div>
              <div className="line1">Guna, Madhya Pradesh - 473226.</div>
            </div>
            <div className="schedule">3rd May 2025 - 03 PM Onwards</div>
          </div>
        </div>
        <div className="section1"></div>
      </main>
    </>
  );
}

export default App;
