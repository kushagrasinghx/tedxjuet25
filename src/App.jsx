import React from "react";
import './App.css';
import Navbar from './components/Navbar';
import SplitText from "./components/SplitText";
import HeroSubtitle from "./components/HeroSubtitle";
import Threads from "./components/Threads";
import AnimatedTextContent from './components/AnimatedTextContent';
import AnimatedTextContentSmall from './components/AnimatedTextContentSmall';
import ProfileCard from "./components/ProfileCard";
import Footer from "./components/Footer";
import Masonry from "./components/Masonry";

const data = [
  { id: 1, image: '/assets/image1.png', height: 400 },
  { id: 2, image: '/assets/image1.png', height: 300 },
  { id: 3, image: '/assets/image1.png', height: 300 },
  { id: 4, image: '/assets/image1.png', height: 300 },
  { id: 5, image: '/assets/image1.png', height: 300 },
  { id: 6, image: '/assets/image1.png', height: 300 },
  { id: 7, image: '/assets/image1.png', height: 200 },
  { id: 8, image: '/assets/image1.png', height: 300 },
  { id: 9, image: '/assets/image1.png', height: 200 },
  { id: 10, image: '/assets/image1.png', height: 400 }
];


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
            <div className="schedule">3rd May 2025 - 15:00 Onwards</div>
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
              <ProfileCard image="/images/kushagra.jpg" name="Kushagra Singh" occupation="Developer" />
              <ProfileCard image="/images/kushagra1.jpg" name="Hardik Sharma" occupation="Developer" />
              <ProfileCard image="/images/profile1.jpg" name="Aditya Vyas" occupation="Developer" />
              <ProfileCard image="/images/profile1.jpg" name="Devesh Kumar" occupation="Developer" />
              <ProfileCard image="/images/profile1.jpg" name="Yash Jain" occupation="Developer" />
              <ProfileCard image="/images/profile1.jpg" name="Vidit Tamrakar" occupation="Developer" />
              <ProfileCard image="/images/profile1.jpg" name="Ali Shaharyar Abbas" occupation="Developer" />
            </div>
          </div>
        </div>
        <div className="section-red">
          <AnimatedTextContent text="TEDxJUET will take place on 5th May 2025, 15:00 onwards with an afterparty in the evening." />
          <AnimatedTextContentSmall text="Fifteen speakers and one hundred guests will join us at Jaypee University of Engineering and Technology — including representatives from academic and creative communities, entrepreneurs closely connected with innovation and culture, and influential intellectuals from across India." />
        </div>
        <div className="section-light">
          <AnimatedTextContent text="TEDxJUET-23 Photo Gallery" />
          <Masonry data={data} />
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
