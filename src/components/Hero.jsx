import { useState, useEffect } from 'react';
import { FaLeaf, FaEye, FaSeedling } from 'react-icons/fa';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const features = [
    'AR Technology',
    'Smart Planning',
    'Weather Insights',
    'Health Monitoring',
    'Local Marketplace'
  ];

  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % features.length;
      const fullText = features[current];

      setDisplayText(isDeleting 
        ? fullText.substring(0, displayText.length - 1)
        : fullText.substring(0, displayText.length + 1)
      );

      setTypingSpeed(isDeleting ? 100 : 150);

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed]);

  useEffect(() => {
    const stats = document.querySelectorAll('.stat-card');
    
    const animateStats = () => {
      // First reset all animations immediately
      stats.forEach(stat => {
        stat.classList.remove('animate');
        const icon = stat.querySelector('.stat-icon');
        const value = stat.querySelector('.stat-value');
        const indicator = stat.querySelector('.stat-indicator');
        const highlight = stat.querySelector('.stat-highlight');
        
        // Reset to initial state
        icon.style.opacity = '1';
        icon.style.transform = 'translate(-50%, -50%) scale(1)';
        value.style.opacity = '0';
        value.style.transform = 'translateY(20px)';
        indicator.style.transform = 'translateX(-50%) scaleX(0)';
        highlight.style.opacity = '0';
        highlight.style.transform = 'translateY(10px)';
      });

      // Start animation sequence with longer delays
      setTimeout(() => {
        stats.forEach((stat, index) => {
          setTimeout(() => {
            const icon = stat.querySelector('.stat-icon');
            const value = stat.querySelector('.stat-value');
            const indicator = stat.querySelector('.stat-indicator');
            const highlight = stat.querySelector('.stat-highlight');
            
            // Animate to show value
            stat.classList.add('animate');
            icon.style.opacity = '0';
            icon.style.transform = 'translate(-50%, -80%) scale(0.8)';
            value.style.opacity = '1';
            value.style.transform = 'translateY(0)';
            indicator.style.transform = 'translateX(-50%) scaleX(1)';
            highlight.style.opacity = '1';
            highlight.style.transform = 'translateY(0)';

            // Reset back to icon after longer delay
            setTimeout(() => {
              stat.classList.remove('animate');
              icon.style.opacity = '1';
              icon.style.transform = 'translate(-50%, -50%) scale(1)';
              value.style.opacity = '0';
              value.style.transform = 'translateY(20px)';
              indicator.style.transform = 'translateX(-50%) scaleX(0)';
              highlight.style.opacity = '0';
              highlight.style.transform = 'translateY(10px)';
            }, 3000); // Increased from 2000 to 3000ms
          }, index * 3000); // Increased from 2000 to 3000ms
        });
      }, 100);
    };

    // Run initial animation
    animateStats();

    // Set up interval for continuous animation with longer cycle
    const interval = setInterval(animateStats, 12000); // Increased from 8000 to 12000ms

    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      icon: <FaLeaf />,
      value: "Design",
      label: "Your Dream Garden",
      highlight: "AI-Powered Planning"
    },
    {
      icon: <FaEye />,
      value: "Visualize",
      label: "In Real Time",
      highlight: "AR Technology"
    },
    {
      icon: <FaSeedling />,
      value: "Grow",
      label: "With Confidence",
      highlight: "Smart Insights"
    }
  ];

  return (
    <section className="hero">
      <div className="floating-logo">
        <img src="/logo.png" alt="Ceilao.Grid Logo" />
      </div>
      <div className="container">
        <div className="hero-content">
          <span className="pre-heading">SDGP CS 82</span>
          <h1>
            Smart Garden Planning with
            <br />
            <span className="typing-wrapper">
              <span className="typing-text">
                {displayText}
                <span className="cursor">|</span>
              </span>
            </span>
          </h1>
          <p className="hero-description">
            Experience the future of gardening with Ceilao.Grid. Our AR-powered platform 
            helps you design, plan, and maintain your perfect garden with real-time 
            guidance and expert recommendations.
          </p>

          <div className="hero-stats-container">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-content">
                  <div className="stat-value-container">
                    <span className="stat-icon">{stat.icon}</span>
                    <span className="stat-value">{stat.value}</span>
                    <div className="stat-indicator"></div>
                  </div>
                  <span className="stat-label">{stat.label}</span>
                  <span className="stat-highlight">{stat.highlight}</span>
                </div>
                {index < stats.length - 1 && <div className="stat-separator" />}
              </div>
            ))}
          </div>

          <div className="hero-buttons">
            <button className="btn btn-primary">Try Demo</button>
            <a href="https://www.youtube.com/watch?v=Qk-gr_tEzkU" target="_blank" rel="noopener noreferrer">
              <button className="btn btn-secondary">Learn More</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
