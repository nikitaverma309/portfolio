import React, { useMemo } from 'react';
import './AnimatedBackground.css';

const AnimatedBackground = () => {
  const particles = useMemo(() => {
    // Reduce density for a lightweight, modern feel
    return Array.from({ length: 50 }).map((_, i) => ({
      id: `dot-${i}`,
      left: `${Math.random() * 100}vw`,
      top: `${Math.random() * 100}vh`,
      size: `${1 + Math.random() * 2}px`, 
      duration: `${20 + Math.random() * 40}s`, // Smooth, slow drift
      delay: `-${Math.random() * 40}s`, 
      opacity: 0.1 + Math.random() * 0.4, 
    }));
  }, []);

  const streaks = useMemo(() => {
    // Add subtle light streaks
    return Array.from({ length: 5 }).map((_, i) => ({
      id: `streak-${i}`,
      left: `${Math.random() * 100}vw`,
      top: `${Math.random() * 100}vh`,
      duration: `${7 + Math.random() * 15}s`,
      delay: `-${Math.random() * 15}s`,
    }));
  }, []);

  return (
    <div className="animated-bg">
      <div className="gradient-overlay"></div>
      
      <div className="particle-container">
        {particles.map(particle => (
          <div 
            key={particle.id} 
            className="particle"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              animationDuration: particle.duration,
              animationDelay: particle.delay,
              '--p-opacity': particle.opacity
            }}
          ></div>
        ))}

        {streaks.map(streak => (
          <div
            key={streak.id}
            className="streak"
            style={{
              left: streak.left,
              top: streak.top,
              animationDuration: streak.duration,
              animationDelay: streak.delay,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedBackground;
