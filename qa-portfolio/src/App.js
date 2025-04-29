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
          <p className="animate-text delay-1">Software Testing Engineer</p>
          <div className="hero-headline animate-text delay-1">
            <span>Mid-Level QA Engineer</span>
            <span className="separator">|</span>
            <span>Manual & Automation Testing</span>
            <span className="separator">|</span>
            <span>MBA in AI</span>
            <span className="separator">|</span>
            <span>Cypress Automation</span>
          </div>
          <div className="hero-details animate-text delay-2">
            <p>📍 Ramallah, Palestine</p>
            <p>💼 Software Testing Engineer</p>
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
            <p>A dedicated Software Testing Engineer with over 3 years of practical experience in manual and automation testing, specializing in ensuring product quality, optimizing testing processes, and delivering exceptional user experiences.</p>
          </div>
          
          <div className="profile-summary">
            <div className="summary-section">
              <h3>Professional Summary</h3>
              <p>As a Quality Assurance Engineer skilled in both manual and automation testing, I ensure high-quality software delivery through thorough planning, execution, and documentation. I create detailed test plans and cases, conduct regression and sanity testing, and handle ad-hoc hotfix checks. I document new features, perform performance and usability testing, and develop automation frameworks using Cypress integrated into CI/CD pipelines. I also validate backend services through comprehensive API testing.</p>
            </div>

            <div className="summary-section">
              <h3>Academic Pursuit</h3>
              <p>Currently pursuing a Master's in Public Administration with a focus on Artificial Intelligence, I am expanding my expertise in data-driven decision-making, AI strategy, and business analysis. This interdisciplinary background strengthens my ability to align QA processes with organizational goals, improve system efficiency, and contribute to strategic planning in tech-driven environments.</p>
            </div>

            <div className="summary-section">
              <h3>Career Focus</h3>
              <p>I am eager to leverage my expertise in quality assurance, manual testing, and automation using Cypress to contribute to innovative projects and drive excellence in software development processes.</p>
            </div>
          </div>
          
          <div className="section-container">
            <div className="section-header">
              <h3>Professional Experience</h3>
              <div className="section-divider"></div>
            </div>
            
            <div className="experience-section">
              <div className="experience-card">
                <div className="experience-header">
                  <h4>Mid-Level Software Testing Engineer</h4>
                  <span className="experience-date">April 2023 – Present</span>
                </div>
                <p className="company">Coretava Company - San Francisco, California, USA</p>
                <ul className="experience-details">
                  <li>Designing and implementing AI-driven product testing strategies</li>
                  <li>Developing comprehensive test suites using Cypress</li>
                  <li>Conducting API testing using Postman</li>
                  <li>Performing performance testing and optimization</li>
                </ul>
              </div>

              <div className="experience-card">
                <div className="experience-header">
                  <h4>Software Testing Engineer</h4>
                  <span className="experience-date">April 2023 – Present</span>
                </div>
                <p className="company">Coretava Company - San Francisco, California, USA</p>
                <ul className="experience-details">
                  <li>✅ Test Planning & Case Creation: Designed detailed test plans/cases covering all functional and non-functional requirements</li>
                  <li>🔄 Regression Testing: Regularly validated existing features after code changes to ensure stability</li>
                  <li>🔍 Functional Testing: Validated new features against business requirements to ensure correct behavior and flow</li>
                  <li>⚡ Sanity & Hotfix Testing: Performed quick checks on new builds and urgent ad-hoc testing for hotfixes</li>
                  <li>📝 Feature Documentation: Documented new features with specs, scenarios, and expected outcomes for team alignment</li>
                  <li>📊 Performance Testing: Executed tests to evaluate responsiveness, scalability, and system load handling</li>
                  <li>👥 Usability Testing: Evaluated user-friendliness and suggested UX/UI improvements</li>
                  <li>🤖 Automation Testing (Cypress): Built and maintained Cypress-based test framework; integrated with CI/CD pipelines for continuous testing</li>
                  <li>🔌 API Testing: Created and ran API tests to ensure backend services are functional, secure, and reliable</li>
                </ul>
              </div>

              <div className="experience-card">
                <div className="experience-header">
                  <h4>Software Testing Engineer</h4>
                  <span className="experience-date">January 2022 – April 2023</span>
                </div>
                <p className="company">Experts Turnkey Solutions - Ramallah, Palestine</p>
                <ul className="experience-details">
                  <li>✅ Ensured quality and reliability of automated solutions for core business processes</li>
                  <li>🤝 Collaborated closely with stakeholders to meet requirements and boost effectiveness</li>
                  <li>📈 Contributed to productivity improvements through systematic testing approaches</li>
                  <li>🏥 Tested web-based Electronic Health Insurance System (HIS)</li>
                  <li>🔒 Ensured seamless provider and patient data management</li>
                  <li>📋 Developed and executed comprehensive test plans</li>
                  <li>🔍 Performed thorough validation of system functionality</li>
                  <li>📊 Monitored and reported on system performance metrics</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="section-container">
            <div className="section-header">
              <h3>Education</h3>
              <div className="section-divider"></div>
            </div>
            
            <div className="education-section">
              <div className="education-card">
                <div className="education-header">
                  <h4>MBA in Artificial Intelligence</h4>
                  <span className="education-date">2024 - Present</span>
                </div>
                <p className="institution">Talal Abu-Ghazaleh Global Digital University, Jordan [Online]</p>
              </div>
              
              <div className="education-card">
                <div className="education-header">
                  <h4>Computer System Engineering</h4>
                  <span className="education-date">2016 - 2021</span>
                </div>
                <p className="institution">Birzeit University - Birzeit, Palestine</p>
              </div>
            </div>
          </div>

          <div className="section-container">
            <div className="section-header">
              <h3>Skills & Expertise</h3>
              <div className="section-divider"></div>
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
                  <li>Selenium</li>
                  <li>TestNG</li>
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
                  <li>Python</li>
                  <li>SQL</li>
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
                  <li>Jira</li>
                  <li>Confluence</li>
                </ul>
                <div className="coverage-bar">
                  <div className="coverage-fill" style={{ width: '80%' }}></div>
                </div>
              </div>

              <div className="skill-card">
                <div className="skill-icon">📊</div>
                <h3>Testing & QA</h3>
                <ul className="skill-list">
                  <li>Manual Testing</li>
                  <li>Automation Testing</li>
                  <li>API Testing</li>
                  <li>Performance Testing</li>
                  <li>Mobile Testing</li>
                  <li>Security Testing</li>
                </ul>
                <div className="coverage-bar">
                  <div className="coverage-fill" style={{ width: '95%' }}></div>
                </div>
              </div>

              <div className="skill-card">
                <div className="skill-icon">🤖</div>
                <h3>AI & Analytics</h3>
                <ul className="skill-list">
                  <li>Machine Learning</li>
                  <li>Data Analysis</li>
                  <li>AI Testing</li>
                  <li>Predictive Analytics</li>
                  <li>Natural Language Processing</li>
                  <li>Computer Vision</li>
                </ul>
                <div className="coverage-bar">
                  <div className="coverage-fill" style={{ width: '75%' }}></div>
                </div>
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
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="section-header">
        <h2>Get in Touch</h2>
        <div className="section-divider"></div>
      </div>
      <div className="contact-form">
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="contact-info-footer">
          <h3>Contact Information</h3>
          <div className="contact-details">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <a href="mailto:malak.ibrahim@coretava.com">malak.ibrahim@coretava.com</a>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <a href="tel:+201000000000">+20 100 000 0000</a>
            </div>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>Alexandria, Egypt</span>
            </div>
          </div>
          <div className="social-links">
            <a href="https://github.com/malak-ibrahim" className="social-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/malak-ibrahim" className="social-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default App;
