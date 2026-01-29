import React, { useEffect, useRef, useState } from 'react';
import './index.css';
import profilePic from './assets/joel.jpeg';

// ==========================================
// CONSTANTS & DATA
// ==========================================

const CONTACT_LINKS = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/joel-ibazebo-567752371',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    )
  },
  {
    id: 'email',
    label: 'Email Me',
    url: 'mailto:joel.ibazebo@outlook.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    )
  },
  {
    id: 'github',
    label: 'GitHub',
    url: 'https://github.com/Jcyber-protect',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    )
  }
];

const WEB_SKILLS = [
  'HTML5 & CSS3',
  'JavaScript (ES6+)',
  'React & Next.js',
  'Node.js & Express',
  'RESTful APIs',
  'Responsive Design'
];

const WEB_TOOLS = [
  'Git & GitHub',
  'VS Code',
  'Webpack & Babel',
  'Docker',
  'MongoDB & PostgreSQL',
  'AI Integration (OpenAI API)'
];

const SECURITY_SKILLS = [
  'Network Security',
  'Threat Detection & Log Analysis',
  'SIEM & Incident Response',
  'Vulnerability Management',
  'Phishing Analysis',
  'Regulatory Compliance'
];

const SECURITY_TOOLS = [
  'Microsoft 365 Security',
  'Exchange Admin Center',
  'Wireshark',
  'Nmap',
  'Metasploit',
  'Splunk'
];

const PROJECTS = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce site with features like product management, user authentication, and a secure payment gateway integration.',
    tags: ['React', 'Node.js', 'MongoDB']
  },
  {
    id: 2,
    title: 'Logistics Tracking Dashboard',
    description: 'A real-time logistics and fleet management dashboard for tracking shipments and vehicle locations with live updates.',
    tags: ['React', 'WebSocket', 'Maps API']
  },
  {
    id: 3,
    title: 'Mining Operations Monitor',
    description: 'A web application for monitoring and managing heavy machinery and roadwork operations in real-time with IoT integration.',
    tags: ['Next.js', 'IoT', 'Real-time']
  },
  {
    id: 4,
    title: 'Qoventis: Email Intelligence SaaS',
    description: 'Co-founded and built a SaaS platform for advanced email threat detection and prevention using AI-powered analysis.',
    tags: ['AI/ML', 'Security', 'SaaS']
  },
  {
    id: 5,
    title: 'Automated Phishing Reporter',
    description: 'A tool that allows users to report suspicious emails and automates the process of analysis and remediation workflows.',
    tags: ['Security', 'Automation', 'Python']
  },
  {
    id: 6,
    title: 'Network Anomaly Detector',
    description: 'A custom tool that monitors network traffic and uses machine learning to detect and alert on unusual patterns and threats.',
    tags: ['ML', 'Security', 'Analytics']
  }
];

// ==========================================
// CUSTOM HOOKS
// ==========================================

/**
 * Custom hook for scroll reveal animations
 * @param {number} threshold - Scroll threshold for reveal
 */
const useScrollReveal = (threshold = 100) => {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    
    const handleScroll = () => {
      reveals.forEach((element, index) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < windowHeight - threshold) {
          setTimeout(() => {
            element.classList.add('active');
          }, index * 100);
        }
      });
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);
};

/**
 * Custom hook for page fade-in animation
 */
const usePageFadeIn = () => {
  useEffect(() => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';
    
    const timer = setTimeout(() => {
      document.body.style.opacity = '1';
    }, 10);

    return () => clearTimeout(timer);
  }, []);
};

// ==========================================
// MAIN APP COMPONENT
// ==========================================

function App() {
  useScrollReveal();
  usePageFadeIn();

  return (
    <div className="portfolio-container">
      <Header />
      <main className="portfolio-content">
        <Profile />
        <MainContent />
      </main>
      <Projects />
    </div>
  );
}

export default App;

// ==========================================
// HEADER COMPONENT
// ==========================================

const Header = React.memo(() => {
  const handleLogout = () => {
    // Clear session
    sessionStorage.clear();
    
    // Add fade-out animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';
    
    // Redirect after animation
    setTimeout(() => {
      window.location.href = '/login';
    }, 300);
  };

  return (
    <header className="portfolio-header">
      <div>
        <h1>Joel's Portfolio Dashboard</h1>
        <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: 'var(--font-size-sm)' }}>
          Web Developer & Cybersecurity Professional
        </p>
      </div>
      <button 
        className="logout-button" 
        onClick={handleLogout}
        aria-label="Logout from portfolio dashboard"
      >
        <span>Logout</span>
      </button>
    </header>
  );
});

Header.displayName = 'Header';

// ==========================================
// PROFILE COMPONENT
// ==========================================

const Profile = React.memo(() => {
  return (
    <aside className="profile-section reveal" role="complementary">
      <div style={{ textAlign: 'center' }}>
        <img 
          src={profilePic} 
          alt="Joel Ibazebo - Full Stack Developer" 
          loading="lazy"
          width="140"
          height="140"
        />
        <h2>Joel Ibazebo</h2>
        <p style={{ 
          color: 'var(--text-secondary)', 
          fontSize: 'var(--font-size-sm)',
          marginBottom: 'var(--spacing-lg)'
        }}>
          Full Stack Developer & Security Specialist
        </p>
      </div>
      
      <CoreCompetencies />
      <ContactButtons />
    </aside>
  );
});

Profile.displayName = 'Profile';

// ==========================================
// CORE COMPETENCIES COMPONENT
// ==========================================

const CoreCompetencies = React.memo(() => {
  const competencies = [
    'Web Development',
    'Application Security',
    'API Development',
    'Threat Analysis',
    'Cloud Solutions'
  ];

  return (
    <div className="skills-section">
      <h3>Core Competencies</h3>
      <ul>
        {competencies.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
});

CoreCompetencies.displayName = 'CoreCompetencies';

// ==========================================
// CONTACT BUTTONS COMPONENT
// ==========================================

const ContactButtons = React.memo(() => {
  return (
    <nav className="contact-buttons" aria-label="Contact and social media links">
      {CONTACT_LINKS.map(({ id, label, url, icon }) => (
        <a
          key={id}
          href={url}
          target={id !== 'email' ? '_blank' : undefined}
          rel={id !== 'email' ? 'noopener noreferrer' : undefined}
          style={{ textDecoration: 'none' }}
        >
          <button aria-label={`Connect on ${label}`}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              {icon}
              {label}
            </span>
          </button>
        </a>
      ))}
    </nav>
  );
});

ContactButtons.displayName = 'ContactButtons';

// ==========================================
// MAIN CONTENT COMPONENT
// ==========================================

const MainContent = React.memo(() => {
  return (
    <div className="main-content">
      <AboutSection />
      <SkillsSection 
        title="Web/App Development"
        skills={WEB_SKILLS}
        tools={WEB_TOOLS}
      />
      <SkillsSection 
        title="Cybersecurity Expertise"
        skills={SECURITY_SKILLS}
        tools={SECURITY_TOOLS}
      />
    </div>
  );
});

MainContent.displayName = 'MainContent';

// ==========================================
// ABOUT SECTION COMPONENT
// ==========================================

const AboutSection = React.memo(() => {
  return (
    <section className="reveal" style={{ marginBottom: 'var(--spacing-xl)' }}>
      <h2 style={{ 
        fontFamily: 'Syne, sans-serif',
        fontSize: 'var(--font-size-2xl)',
        marginBottom: 'var(--spacing-md)',
        color: 'var(--text-primary)'
      }}>
        About Me
      </h2>
      <p style={{ 
        color: 'var(--text-secondary)',
        lineHeight: '1.8'
      }}>
        I'm an aspiring web and application developer with a growing interest in building 
        startup-ready products, supported by a foundation in cybersecurity. I'm currently 
        learning how to design and develop modern web and app applications, focusing on 
        writing clean and understandable code. My cybersecurity background influences how 
        I learn and practice development, especially around security and data handling.
      </p>
    </section>
  );
});

AboutSection.displayName = 'AboutSection';

// ==========================================
// SKILLS SECTION COMPONENT
// ==========================================

const SkillsSection = React.memo(({ title, skills, tools }) => {
  return (
    <section className="reveal" style={{ marginBottom: 'var(--spacing-xl)' }}>
      <h2 style={{
        fontFamily: 'Syne, sans-serif',
        fontSize: 'var(--font-size-2xl)',
        marginBottom: 'var(--spacing-md)',
        color: 'var(--text-primary)',
        paddingBottom: 'var(--spacing-sm)',
        borderBottom: '2px solid var(--border-color)'
      }}>
        {title}
      </h2>
      <div className="skills-table">
        <SkillsCategory title="Technical Skills" items={skills} />
        <SkillsCategory title="Tools & Technologies" items={tools} />
      </div>
    </section>
  );
});

SkillsSection.displayName = 'SkillsSection';

// ==========================================
// SKILLS CATEGORY COMPONENT
// ==========================================

const SkillsCategory = React.memo(({ title, items }) => {
  return (
    <div className="skills-category">
      <h4>{title}</h4>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
});

SkillsCategory.displayName = 'SkillsCategory';

// ==========================================
// PROJECTS SECTION COMPONENT
// ==========================================

const Projects = React.memo(() => {
  return (
    <section className="projects-section reveal">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
});

Projects.displayName = 'Projects';

// ==========================================
// PROJECT CARD COMPONENT
// ==========================================

const ProjectCard = React.memo(({ title, description, tags }) => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log(`Project clicked: ${title}`);
    // TODO: Implement project detail view or navigation
  };

  return (
    <article className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      {tags && tags.length > 0 && (
        <div style={{ 
          display: 'flex', 
          gap: 'var(--spacing-xs)', 
          flexWrap: 'wrap',
          marginBottom: 'var(--spacing-sm)'
        }}>
          {tags.map((tag, index) => (
            <span 
              key={index}
              style={{
                fontSize: 'var(--font-size-xs)',
                padding: '0.25rem 0.75rem',
                background: 'rgba(0, 240, 255, 0.1)',
                border: '1px solid rgba(0, 240, 255, 0.3)',
                borderRadius: 'var(--radius-sm)',
                color: 'var(--primary-color)',
                fontWeight: 600
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      <a 
        href="#" 
        onClick={handleClick}
        aria-label={`View details for ${title}`}
      >
        View Project
      </a>
    </article>
  );
});

ProjectCard.displayName = 'ProjectCard';
