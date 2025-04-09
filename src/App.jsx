import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import SplitText from "./components/SplitText";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <main>
        <div className="hero-section">
          <div className="hero-image"></div>
          <div className="hero-content">
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
            <div className="hero-subtitle">Ideas That Echo Impact That Lasts</div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
