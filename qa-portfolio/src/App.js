import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Add scroll animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));

    // Add floating test bugs
    const qaContainer = document.querySelector('.qa-test-elements');
    for (let i = 0; i < 5; i++) {
      const bug = document.createElement('div');
      bug.className = 'test-bug';
      bug.style.left = `${Math.random() * 100}%`;
      bug.style.top = `${Math.random() * 100}%`;
      bug.style.animationDelay = `${Math.random() * 5}s`;
      qaContainer.appendChild(bug);
    }

    // Handle scroll events
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active nav link
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('.nav-link');

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const id = section.getAttribute('id');

        if (window.scrollY >= sectionTop - 60 && window.scrollY < sectionTop + sectionHeight - 60) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            }
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.querySelector('.nav-links').classList.toggle('active');
    document.querySelector('.mobile-menu-btn').classList.toggle('active');
  };

  return (
    <div className="App">
      <div className="qa-test-elements"></div>
      
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-content">
          <div className="logo">
            <span className="logo-text">Malak's QA Portfolio</span>
            <span className="logo-dot">.</span>
          </div>
          <div className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#home" className="nav-link" onClick={toggleMenu}>Home</a></li>
            <li><a href="#about" className="nav-link" onClick={toggleMenu}>About</a></li>
            <li><a href="#projects" className="nav-link" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#contact" className="nav-link" onClick={toggleMenu}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content animate-on-scroll">
          <h1 className="animate-text">Hi, I'm Malak Ibrahim</h1>
          <p className="animate-text delay-1">Mid-Level Quality Assurance Engineer</p>
          <div className="hero-details animate-text delay-2">
            <p>📍 Ramallah, Palestine</p>
            <p>💼 Mid-Level QA Engineer</p>
            <p>🌐 Software Testing Professional</p>
          </div>
          <button className="cta-button animate-text delay-2">View My Work</button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="about-content animate-on-scroll">
          <h2>About Me</h2>
          <div className="personal-info">
            <p>A dedicated QA Engineer with over 3 years of practical experience in manual and automation testing, specializing in ensuring product quality, optimizing testing processes, and delivering exceptional user experiences.</p>
          </div>
          
          <div className="experience-section">
            <h3>Professional Experience</h3>
            <div className="experience-card">
              <h4>Mid-Level Quality Assurance Engineer</h4>
              <p className="company">Coretava Company - San Francisco, California, USA</p>
              <p className="duration">April 2023 – Present</p>
              <ul className="experience-details">
                <li>Designing and implementing AI-driven product testing strategies</li>
                <li>Developing comprehensive test suites using Cypress</li>
                <li>Conducting API testing using Postman</li>
                <li>Performing performance testing and optimization</li>
              </ul>
            </div>

            <div className="experience-card">
              <h4>Quality Assurance Engineer</h4>
              <p className="company">Experts Turnkey Solutions - Ramallah, Palestine</p>
              <p className="duration">October 2021 – April 2023</p>
              <ul className="experience-details">
                <li>Led testing efforts for multiple enterprise applications</li>
                <li>Implemented automated testing solutions</li>
                <li>Managed test documentation and reporting</li>
                <li>Conducted regression testing and defect tracking</li>
              </ul>
            </div>
          </div>

          <div className="education-section">
            <h3>Education</h3>
            <div className="education-card">
              <h4>MBA in Artificial Intelligence</h4>
              <p className="institution">Talal Abu-Ghazaleh Global Digital University, Jordan [Online]</p>
              <p className="duration">2024 - Present</p>
            </div>
            <div className="education-card">
              <h4>Computer System Engineering</h4>
              <p className="institution">Birzeit University - Birzeit, Palestine</p>
              <p className="duration">2016 - 2021</p>
            </div>
          </div>

          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon">🔍</div>
              <h3>Testing Tools</h3>
              <ul className="skill-list">
                <li>Cypress</li>
                <li>Postman</li>
                <li>JMeter</li>
                <li>Appium-Studio</li>
              </ul>
              <div className="coverage-bar">
                <div className="coverage-fill" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div className="skill-card">
              <div className="skill-icon">💻</div>
              <h3>Development</h3>
              <ul className="skill-list">
                <li>JavaScript</li>
                <li>React</li>
                <li>HTML/CSS</li>
                <li>Java</li>
              </ul>
              <div className="coverage-bar">
                <div className="coverage-fill" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div className="skill-card">
              <div className="skill-icon">🛠️</div>
              <h3>Tools & Platforms</h3>
              <ul className="skill-list">
                <li>Git/GitHub</li>
                <li>Jenkins</li>
                <li>AWS</li>
                <li>Docker/K8S</li>
              </ul>
              <div className="coverage-bar">
                <div className="coverage-fill" style={{ width: '80%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <h2 className="animate-on-scroll">Featured Projects</h2>
        <div className="project-grid">
          <div className="project-card animate-on-scroll">
            <div className="qa-status passed">Completed</div>
            <div className="project-image"></div>
            <h3>AI-Driven Customer Loyalty Platform</h3>
            <p>Designed and implemented a product leveraging AI-driven data and analytics to enhance customer loyalty and gamification experiences. The platform encourages user engagement and drives frequent purchases across various platforms.</p>
            <div className="project-tags">
              <span>AI/ML</span>
              <span>Analytics</span>
              <span>Gamification</span>
            </div>
          </div>
          <div className="project-card animate-on-scroll">
            <div className="qa-status passed">Completed</div>
            <div className="project-image"></div>
            <h3>Coreteams Mobile Application</h3>
            <p>E-commerce store team management application where employees can view profiles, rewards, and track performance through missions, challenges, and training modules.</p>
            <div className="project-tags">
              <span>Mobile</span>
              <span>E-commerce</span>
              <span>React</span>
            </div>
          </div>
          <div className="project-card animate-on-scroll">
            <div className="qa-status passed">Completed</div>
            <div className="project-image"></div>
            <h3>Health Insurance System</h3>
            <p>Web-based Electronic Health Insurance System (HIS) covering provider management, financial management, and patient data handling processes.</p>
            <div className="project-tags">
              <span>Healthcare</span>
              <span>Enterprise</span>
              <span>Testing</span>
            </div>
          </div>
          <div className="project-card animate-on-scroll">
            <div className="qa-status passed">Completed</div>
            <div className="project-image"></div>
            <h3>Document Management System</h3>
            <p>Implemented a system to archive and manage all types of documents, enabling dynamic metadata and workflow creation.</p>
            <div className="project-tags">
              <span>Documentation</span>
              <span>Workflow</span>
              <span>Management</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2 className="animate-on-scroll">Get in Touch</h2>
        <div className="contact-info animate-on-scroll">
          <p>📧 Email: Mlkibrahem6@gmail.com</p>
          <p>📱 Phone: +970 595453052</p>
          <p>💼 LinkedIn: <a href="https://www.linkedin.com/in/malak-ibrahim-7342921a9/" target="_blank" rel="noopener noreferrer">Malak Ibrahim</a></p>
        </div>
        <div className="contact-form animate-on-scroll">
          <form>
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
              <span className="focus-border"></span>
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
              <span className="focus-border"></span>
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" required></textarea>
              <span className="focus-border"></span>
            </div>
            <button type="submit" className="submit-button">
              <span>Send Message</span>
              <div className="button-border"></div>
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/malak-ibrahim-7342921a9/" className="social-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:Mlkibrahem6@gmail.com" className="social-link">Email</a>
        </div>
        <p>&copy; 2024 Malak Ibrahim's QA Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
