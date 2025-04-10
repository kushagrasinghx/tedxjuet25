import React, { useEffect, useRef, useState } from 'react';
import '../styles/AnimatedTextContentSmall.css';

function AnimatedTextContentSmall({ text }) {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="text-content animated-small" ref={containerRef}>
      {text.split(' ').map((word, index) => (
        <span
          key={index}
          className={`word ${visible ? 'show' : ''}`}
          style={{ transitionDelay: `${index * 40}ms` }}
        >
          {word}&nbsp;
        </span>
      ))}
    </div>
  );
}

export default AnimatedTextContentSmall;
