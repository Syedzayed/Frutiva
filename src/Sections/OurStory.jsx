import { useEffect, useState, useRef } from 'react';
import './OurStory.css';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [typewriterComplete, setTypewriterComplete] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setTypewriterComplete(true);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
          }
        });
      },
      { 
        threshold: 0.1, 
        rootMargin: '0px 0px -100px 0px' 
      }
    );

    // Delay observer setup to ensure DOM is ready
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="app-container" id='about'>
      {/* Brand Story Section */}
      <section className="brand-story-section">
        {/* Enhanced Floating Elements */}
        <div className="parallax-elements">
          <div 
            className="floating-fruit floating-orange"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          />
          <div 
            className="floating-fruit floating-berry"
            style={{ transform: `translateY(${scrollY * -0.15}px)` }}
          />
          <div 
            className="floating-fruit floating-mint"
            style={{ transform: `translateY(${scrollY * 0.08}px)` }}
          />
          <div 
            className="floating-fruit floating-grape"
            style={{ transform: `translateY(${scrollY * -0.12}px)` }}
          />
        </div>

        {/* Particle Effects */}
        <div className="particle-container">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="particle" />
          ))}
        </div>

        <div className="container">
          {/* Main Headline with Typewriter Effect */}
          <div className="section-header animate-on-scroll">
            <h2 className="main-headline">
              <span className="typewriter-text">
                Where Nature Meets <span className="accent-text">Craft</span>
              </span>
              {!typewriterComplete && <span className="typewriter-cursor"></span>}
            </h2>
            <p className="section-subtitle animate-on-scroll stagger-1">
              Every bottle of Frutivá tells a story of patience, passion, and the ancient art of natural fermentation
            </p>
          </div>

          {/* Origin Story with Founder Section */}
          <div className="two-column-grid">
            <div className="content-block animate-on-scroll animate-fade-in-left">
              <h3 className="content-title">Our Beginning</h3>
              <p className="content-text">
                Frutivá was born from a simple belief: that nature knows best. Founded by passionate health advocates who witnessed the transformative power of naturally fermented beverages, we embarked on a mission to bring authentic, living nutrition to your table.
              </p>
              <p className="content-text">
                What started as a small-batch experiment in our kitchen has grown into a celebration of traditional fermentation methods, where time-honored techniques meet modern quality standards.
              </p>
              
              {/* Founder Section */}
              <div className="founder-section">
                <img 
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200" 
                  alt="Founder Maria Santos" 
                  className="founder-image"
                />
                <p className="founder-quote">
                  "I believe that the best things in life come from patience and respect for natural processes. Every bottle we create is a testament to this philosophy."
                </p>
                <p className="founder-name">- Maria Santos, Founder & Master Fermenter</p>
              </div>
            </div>
            
            <div className="image-container animate-on-scroll animate-fade-in-right">
              <img 
                src="https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Fresh organic fruits sourced from California's Central Valley" 
                className="main-image"
              />
              <div className="image-decoration decoration-top-right" />
              
              {/* Customer Quote */}
              <div className="customer-quote">
                "The difference is incredible - you can actually taste the living quality in every sip!"
                <div className="quote-author">- Sarah M., Wellness Coach</div>
              </div>
            </div>
          </div>

          {/* Mission & Values */}
          <div className="glass-card animate-on-scroll animate-scale-in">
            <div className="glass-card-header">
              <h3 className="glass-card-title">Our Mission</h3>
              <p className="glass-card-subtitle">
                To craft the purest, most authentic fermented juices that nourish your body and delight your senses, 
                while honoring the natural processes that have sustained humanity for millennia.
              </p>
            </div>

            <div className="four-column-grid">
              <div className="value-card animate-on-scroll stagger-1">
                <div className="value-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
                    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
                  </svg>
                </div>
                <h4 className="value-title">Sustainability</h4>
                <p className="value-description">Eco-conscious practices from farm to bottle</p>
                <div className="value-card-expanded">
                  <p>100% recyclable packaging, carbon-neutral shipping, and partnerships with regenerative farms</p>
                </div>
              </div>
              
              <div className="value-card animate-on-scroll stagger-2">
                <div className="value-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"/>
                  </svg>
                </div>
                <h4 className="value-title">Health</h4>
                <p className="value-description">Living probiotics for your wellbeing</p>
                <div className="value-card-expanded">
                  <p>Clinically proven strains that support digestive health and immune function</p>
                </div>
              </div>
              
              <div className="value-card animate-on-scroll stagger-3">
                <div className="value-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="8" r="7"/>
                    <path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12"/>
                  </svg>
                </div>
                <h4 className="value-title">Authenticity</h4>
                <p className="value-description">Traditional methods, pure ingredients</p>
                <div className="value-card-expanded">
                  <p>Time-honored fermentation techniques passed down through generations</p>
                </div>
              </div>
              
              <div className="value-card animate-on-scroll stagger-4">
                <div className="value-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="13,2 3,14 12,14 11,22 21,10 12,10"/>
                  </svg>
                </div>
                <h4 className="value-title">Quality</h4>
                <p className="value-description">Uncompromising excellence in every batch</p>
                <div className="value-card-expanded">
                  <p>Third-party tested for purity, potency, and safety standards</p>
                </div>
              </div>
            </div>

            {/* Sustainability Metrics */}
            <div className="sustainability-metrics">
              <div className="metric-item">
                <span className="metric-number">100%</span>
                <span className="metric-label">Organic Certified</span>
              </div>
              <div className="metric-item">
                <span className="metric-number">0</span>
                <span className="metric-label">Carbon Footprint</span>
              </div>
              <div className="metric-item">
                <span className="metric-number">50+</span>
                <span className="metric-label">Partner Farms</span>
              </div>
              <div className="metric-item">
                <span className="metric-number">95%</span>
                <span className="metric-label">Waste Reduction</span>
              </div>
            </div>
          </div>

          {/* Farm to Bottle Journey */}
          <div className="animate-on-scroll">
            <h3 className="content-title" style={{textAlign: 'center', marginBottom: '32px'}}>
              From Farm to Bottle Journey
            </h3>
            <div className="journey-map">
              <div className="journey-step">
                <div className="journey-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
                  </svg>
                </div>
                <div className="journey-label">Organic Farms<br/>California Central Valley</div>
              </div>
              <div className="journey-step">
                <div className="journey-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
                    <line x1="3" x2="21" y1="6" y2="6"/>
                    <path d="M16 10a4 4 0 0 1-8 0"/>
                  </svg>
                </div>
                <div className="journey-label">48-Hour<br/>Cold Pressing</div>
              </div>
              <div className="journey-step">
                <div className="journey-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12,6 12,12 16,14"/>
                  </svg>
                </div>
                <div className="journey-label">14-Day Natural<br/>Fermentation</div>
              </div>
              <div className="journey-step">
                <div className="journey-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 7h1a2 2 0 0 0 0-4H5a2 2 0 0 0 0 4Z"/>
                    <path d="M21 9H3l2 8h14l2-8Z"/>
                    <path d="M7 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
                    <path d="M17 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
                  </svg>
                </div>
                <div className="journey-label">Quality Testing<br/>& Bottling</div>
              </div>
              <div className="journey-step">
                <div className="journey-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"/>
                  </svg>
                </div>
                <div className="journey-label">Delivered Fresh<br/>To Your Door</div>
              </div>
            </div>
          </div>

          {/* The Process with Timeline */}
          <div className="two-column-grid">
            <div className="image-container animate-on-scroll animate-fade-in-left">
              <img 
                src="https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="14-day natural fermentation process in temperature-controlled environment" 
                className="main-image"
              />
              <div className="image-decoration decoration-bottom-left" />
            </div>
            
            <div className="content-block animate-on-scroll animate-fade-in-right">
              <h3 className="content-title">The Art of Fermentation</h3>
              <p className="content-text">
                Our fermentation process is where magic happens. We carefully select the finest organic fruits at peak ripeness, 
                then allow nature's own beneficial microorganisms to work their alchemy.
              </p>
              
              <div className="stats-highlight">
                <span className="stat-number">14</span>
                <span className="stat-label">Days of natural fermentation</span>
              </div>
              
              <div className="process-features">
                <div className="process-feature">
                  <svg className="process-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
                    <path d="m9 12 2 2 4-4"/>
                  </svg>
                  <div className="process-feature-content">
                    <h4>Natural Fermentation</h4>
                    <p>No artificial accelerants, just time and patience</p>
                    <div className="process-detail">
                      Temperature-controlled environment at 68-72°F with natural wild yeasts and beneficial bacteria cultures
                    </div>
                  </div>
                </div>
                
                <div className="process-feature">
                  <svg className="process-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                  <div className="process-feature-content">
                    <h4>Living Probiotics</h4>
                    <p>Over 10 billion beneficial cultures in every bottle</p>
                    <div className="process-detail">
                      Including Lactobacillus acidophilus, Bifidobacterium bifidum, and Saccharomyces boulardii strains
                    </div>
                  </div>
                </div>
                
                <div className="process-feature">
                  <svg className="process-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="8" r="7"/>
                    <path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12"/>
                  </svg>
                  <div className="process-feature-content">
                    <h4>Pure Ingredients</h4>
                    <p>No preservatives, no artificial flavors, just nature</p>
                    <div className="process-detail">
                      USDA Organic certified fruits, filtered spring water, and traditional sea salt for mineral balance
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fermentation Timeline */}
          <div className="fermentation-journey animate-on-scroll">
            <h3 className="content-title" style={{textAlign: 'center', marginBottom: '48px'}}>
              14-Day Fermentation Journey
            </h3>
            <p className="journey-subtitle">
              Watch nature work its magic as our carefully selected fruits transform into living nutrition
            </p>
            
            <div className="fermentation-stages">
              <div className="stage-card animate-on-scroll stagger-1">
                <div className="stage-header">
                  <div className="stage-number">1-3</div>
                  <div className="stage-title">Activation</div>
                </div>
                <div className="stage-visual">
                  <div className="fermentation-bubbles">
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                  </div>
                  <div className="stage-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                    </svg>
                  </div>
                </div>
                <div className="stage-description">
                  Natural yeasts awaken and begin their work, creating the foundation for beneficial bacteria to flourish
                </div>
                <div className="stage-metrics">
                  <span className="metric">pH: 4.2-4.5</span>
                  <span className="metric">Temp: 68°F</span>
                </div>
              </div>
              
              <div className="stage-card animate-on-scroll stagger-2">
                <div className="stage-header">
                  <div className="stage-number">4-8</div>
                  <div className="stage-title">Multiplication</div>
                </div>
                <div className="stage-visual">
                  <div className="fermentation-bubbles active">
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                  </div>
                  <div className="stage-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="3"/>
                      <path d="M12 1v6m0 6v6"/>
                      <path d="m21 12-6-3-6 3-6-3"/>
                    </svg>
                  </div>
                </div>
                <div className="stage-description">
                  Probiotic cultures multiply exponentially, developing complex flavors and increasing bioavailability
                </div>
                <div className="stage-metrics">
                  <span className="metric">Probiotics: 1B+</span>
                  <span className="metric">Activity: Peak</span>
                </div>
              </div>
              
              <div className="stage-card animate-on-scroll stagger-3">
                <div className="stage-header">
                  <div className="stage-number">9-12</div>
                  <div className="stage-title">Maturation</div>
                </div>
                <div className="stage-visual">
                  <div className="fermentation-bubbles mature">
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                  </div>
                  <div className="stage-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
                      <path d="M12 16v6"/>
                    </svg>
                  </div>
                </div>
                <div className="stage-description">
                  Enzymes refine flavors while beneficial compounds reach optimal concentration levels
                </div>
                <div className="stage-metrics">
                  <span className="metric">Flavor: Balanced</span>
                  <span className="metric">Enzymes: Active</span>
                </div>
              </div>
              
              <div className="stage-card animate-on-scroll stagger-4">
                <div className="stage-header">
                  <div className="stage-number">13-14</div>
                  <div className="stage-title">Perfection</div>
                </div>
                <div className="stage-visual">
                  <div className="fermentation-bubbles complete">
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                  </div>
                  <div className="stage-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 12l2 2 4-4"/>
                      <circle cx="12" cy="12" r="9"/>
                    </svg>
                  </div>
                </div>
                <div className="stage-description">
                  Final quality testing ensures 10B+ probiotics and perfect flavor balance in every bottle
                </div>
                <div className="stage-metrics">
                  <span className="metric">Probiotics: 10B+</span>
                  <span className="metric">Quality: ✓ Tested</span>
                </div>
              </div>
            </div>
            
            <div className="journey-progress">
              <div className="progress-bar">
                <div className="progress-fill"></div>
              </div>
              <div className="progress-labels">
                <span>Day 1</span>
                <span>Day 7</span>
                <span>Day 14</span>
              </div>
            </div>
          </div>

          {/* Why Fermented */}
          <div className="benefits-card animate-on-scroll animate-scale-in">
            <div className="glass-card-header">
              <h3 className="glass-card-title">Why Choose Fermented?</h3>
              <p className="glass-card-subtitle">
                Fermented juices aren't just delicious – they're a gateway to better health and vitality
              </p>
            </div>
            
            <div className="benefits-grid">
              <div className="benefit-item animate-on-scroll stagger-1">
                <span className="benefit-emoji">🦠</span>
                <h4 className="benefit-title">Living Probiotics</h4>
                <p className="benefit-description">Support your digestive health with beneficial bacteria that promote gut wellness and immune function</p>
              </div>
              <div className="benefit-item animate-on-scroll stagger-2">
                <span className="benefit-emoji">⚡</span>
                <h4 className="benefit-title">Enhanced Nutrition</h4>
                <p className="benefit-description">Fermentation unlocks nutrients and creates new vitamins like B12 and K2 that your body can easily absorb</p>
              </div>
              <div className="benefit-item animate-on-scroll stagger-3">
                <span className="benefit-emoji">🌱</span>
                <h4 className="benefit-title">Natural Energy</h4>
                <p className="benefit-description">Sustained vitality without the crash – just pure, natural fuel for your day with balanced electrolytes</p>
              </div>
            </div>

            {/* Additional Customer Quote */}
            <div className="customer-quote" style={{marginTop: '32px'}}>
              "I've been drinking Frutivá for 6 months and my energy levels have never been better. My digestive issues are completely gone!"
              <div className="quote-author">- Dr. James Chen, Nutritionist</div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="cta-section animate-on-scroll">
            <h3 className="cta-title">Experience the Frutivá Difference</h3>
            <p className="cta-subtitle">
              Join thousands who have discovered the perfect blend of taste, health, and authenticity
            </p>
            <button className="cta-button">
              Shop Our Collection
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;