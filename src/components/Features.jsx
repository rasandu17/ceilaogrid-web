const Features = () => {
  const features = [
    {
      number: "1",
      title: "AR-Based Land Analysis",
      description: "Scan and measure your garden space with augmented reality technology",
      icon: "🔍",
      date: "Phase 1 - Planning"
    },
    {
      number: "2",
      title: "Smart Garden Planning",
      description: "Get personalized crop and seed suggestions based on your garden conditions",
      icon: "🌱",
      date: "Phase 2 - Design"
    },
    {
      number: "3",
      title: "Weather-Based Insights",
      description: "Smart irrigation and climate data to optimize your garden care",
      icon: "☀️",
      date: "Phase 3 - Monitoring"
    },
    {
      number: "4",
      title: "Garden Health Monitoring",
      description: "Proactive gardening tips and yield predictions for better results",
      icon: "🌿",
      date: "Phase 4 - Maintenance"
    },
    {
      number: "5",
      title: "Marketplace",
      description: "Connect with local buyers to sell your surplus produce",
      icon: "🏪",
      date: "Phase 5 - Distribution"
    }
  ];

  return (
    <section className="features" id="features">
      <div className="container">
        <h2>Key Features</h2>
        <p className="section-desc">
          Discover how our AR technology revolutionizes home gardening
        </p>

        <div className="timeline">
          {features.map((feature, index) => (
            <div key={index} className="timeline-item reveal">
              <div className="timeline-marker">
                <div className="timeline-number">
                  <span className="feature-icon">{feature.icon}</span>
                </div>
                <div className="timeline-line"></div>
              </div>
              <div className="timeline-content">
                <div className="timeline-date">{feature.date}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
