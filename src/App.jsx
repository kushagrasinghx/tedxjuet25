import React, { useEffect } from "react";
import './App.css';
import Lenis from '@studio-freight/lenis';

import Navbar from './components/Navbar';
import SplitText from "./components/SplitText";
import HeroSubtitle from "./components/HeroSubtitle";
import AnimatedTextContent from './components/AnimatedTextContent';
import AnimatedTextContentSmall from './components/AnimatedTextContentSmall';
import ProfileCard from "./components/ProfileCard";
import Footer from "./components/Footer";
import ImageSlider from "./components/ImageSlider";

function App() {

  // Ssmooth Scroll Effect
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      smooth: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <div className="hero-section">
          <div className="hero-background"></div>
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
              <div className="link-list"><a href="https://www.google.com">Sponsorship Brochure</a></div>
            </div>
            <div className="schedule">3rd May 2025 - 15:00 Onwards</div>
            <div className="address">
              <div className="line1">Jaypee University of Engineering & Technology,</div>
              <div className="line2">Guna, Madhya Pradesh - 473226.</div>
            </div>
          </div>
        </div>

        <div className="section-light">
          <AnimatedTextContent text="We witness profound social, communicational, ecological, economic, and technological changes. Through resonance, we explore how these shifts echo through individuals and communities. We aim to highlight the deep connections between these changes—and how each individual, through their actions and voice, becomes the resonance at the heart of transformation." />
          <AnimatedTextContentSmall text="We want to highlight both the impact and the ripple effects that arise from these transformations—and why it's vital to voice them. Changes occur across many dimensions, resonating differently through people and places. The idea of Resonance captures and connects all these shifts, reflecting how both individuals and society echo and respond to change." />
        </div>

        <div className="section-image"></div>

        <div className="section-dark">
          <AnimatedTextContent text="Join inspiring speakers and over a hundred guests!" />
          <div className="speaker-section">
            <div className="title-bar">
              <div className="title-heading">Our Speakers</div>
              <div className="link-list"><a href="https://www.google.com">View Event Details</a></div>
            </div>
            <div className="speaker-cards">
              {[...Array(7)].map((_, i) => (
                <ProfileCard key={i} image="/images/profile.png" name="Someone Interesting" occupation="Coming Soon" />
              ))}
            </div>
          </div>
        </div>

        <div className="section-red">
          <AnimatedTextContent text="TEDxJUET will take place on 5th May 2025, 15:00 onwards with an afterparty in the evening." />
          <AnimatedTextContentSmall text="Fifteen speakers and one hundred guests will join us at Jaypee University of Engineering and Technology — including representatives from academic and creative communities, entrepreneurs closely connected with innovation and culture, and influential intellectuals from across India." />
        </div>

        <div className="section-light-small">
          <AnimatedTextContent text="TEDxJUET-23 Photo Gallery" />
          <div style={{ width: "100%" }}>
            <ImageSlider />
          </div>
        </div>

        <div className="section-dark">
          <AnimatedTextContent text="Meet the passionate team behind the magic — a group of driven minds dedicated to crafting an unforgettable TEDxJUET experience!" />
          <div className="speaker-section">
            <div className="title-bar">
              <div className="title-heading">Know Our Team</div>
              <div className="link-list"><a href="/team">View Team</a></div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
