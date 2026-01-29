import React, { useEffect } from 'react';
import './index.css';

// Option 1: If image is in public folder
const profilePic = 'src/assets/joell.jpeg';

// Option 2: If image is in src/assets
// import profilePic from './assets/joel.jpeg';

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
    id: 'github',
    label: 'GitHub',
    url: 'https://github.com/Jcyber-protect',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    )
  },
  {
    id: 'email',
    label: 'Email',
    url: 'mailto:joel.ibazebo@outlook.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    )
  }
];

const CORE_COMPETENCIES = [
  'Web Development',
  'Application Security',
  'API Development',
  'Threat Analysis',
  'Cloud Solutions',
  'Secure Coding'
];

const WEB_SKILLS = [
  'HTML5 & CSS3',
  'JavaScript (ES6+)',
  'React & Next.js',
  'RESTful APIs',
  'Responsive Design'
];

const WEB_TOOLS = [
  'Git & GitHub',
  'VS Code',
  'Webpack & Babel',
  'Docker',
  'MongoDB & PostgreSQL',
  'AI Integration (OpenAI API)',
  'Supabase',
  'Firebase',
];

const SECURITY_SKILLS = [
  'Network Security',
  'Threat Detection & Log Analysis',
  'SIEM & Incident Response',
  'Vulnerability Management',
  'Phishing Analysis',
  'Regulatory Compliance',
  'Email Security',
  'Microsoft 365 Administrator and Exchange Admin',
  'Security Awareness Training',
  'Incident Response Plan and Playbook',
  'Security Best Practices',
  'Phishing Detection and IOCs',
  'Business Email Compromise (BEC) Detection and Prevention',
];

const SECURITY_TOOLS = [
  'Microsoft 365 Security',
  'Exchange Admin Center',
  'AZure Security Center',
  'Entra ID',
  'MS Sentinel',
  'Splunk',
  
];

const EDUCATION = [
  {
    id: 1,
    degree: 'Bachelor of Science in Information Technology - Network and Security Engineering',
    institution: 'Eduvos University ',
    date: '2024 - 2027',
    description: 'Focused on Network and Security Engineering, Cybersecurity Architecture and Design, Information Security and Assurance, and Cybersecurity Policy and Compliance.'
  },
  
];

const CERTIFICATIONS = [
  {
    id: 1,
    name: 'EC-Council Certified SOC Analyst',
    issuer: 'EC-Council',
    date: '2025',
  },
  
  {
    id: 2,
    name: 'YashNic Academy - Ai web developer',
    issuer: 'YashNic Academy',
    date: '2026',
  },
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

const useScrollReveal = () => {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    
    const handleScroll = () => {
      reveals.forEach((element, index) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < windowHeight - 100) {
          setTimeout(() => {
            element.classList.add('active');
          }, index * 100);
        }
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};

// ==========================================
// MAIN APP COMPONENT
// ==========================================

function App() {
  useScrollReveal();

  return (
    <div className="portfolio-container">
      <Header />
      <main className="portfolio-content">
        <ProfileSidebar />
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

const Header = () => {
  const handleLogout = () => {
    sessionStorage.clear();
    window.location.href = '/login';
  };

  return (
    <header className="portfolio-header">
      <div className="header-left">
        <h1>Joel's Portfolio</h1>
        <p>FullStack AI Web Developer | Email Security Specialist | SOC Analyst | Cybersecurity Professional</p>
      </div>
      <div className="header-right">
        <div className="contact-buttons-header">
          {CONTACT_LINKS.map(({ id, label, url, icon }) => (
            <a
              key={id}
              href={url}
              target={id !== 'email' ? '_blank' : undefined}
              rel={id !== 'email' ? 'noopener noreferrer' : undefined}
            >
              <button className="contact-btn" aria-label={`Connect on ${label}`}>
                {icon}
                <span>{label}</span>
              </button>
            </a>
          ))}
        </div>
        <button 
          className="logout-button" 
          onClick={handleLogout}
          aria-label="Logout from portfolio"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

// ==========================================
// PROFILE SIDEBAR
// ==========================================

const ProfileSidebar = () => {
  return (
    <aside className="profile-section reveal">
      <div className="profile-header">
        <img 
          src={profilePic} 
          alt="Joel Ibazebo - Full Stack Developer" 
          loading="lazy"
        />
        <h2>Joel Ibazebo</h2>
        <span className="role">Developer & Security Specialist</span>
      </div>
      
      <div className="competencies-section">
        <h3>Core Competencies</h3>
        <ul>
          {CORE_COMPETENCIES.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

// ==========================================
// MAIN CONTENT
// ==========================================

const MainContent = () => {
  return (
    <div className="main-content">
      <AboutSection />
      <SkillsSection />
      <EducationSection />
      <CertificationsSection />
    </div>
  );
};

// ==========================================
// ABOUT SECTION
// ==========================================

const AboutSection = () => {
  return (
    <section className="content-section reveal">
      <h2>About Me</h2>
      <p>
        I'm an aspiring web and application developer with a growing interest in building 
        startup-ready products, supported by a foundation in cybersecurity. I'm currently 
        learning how to design and develop modern web and app applications, focusing on 
        writing clean and understandable code. My cybersecurity background influences how 
        I learn and practice development, especially around security and data handling.
      </p>
    </section>
  );
};

// ==========================================
// SKILLS SECTION
// ==========================================

const SkillsSection = () => {
  return (
    <>
      <section className="content-section reveal">
        <h2>Web Development</h2>
        <div className="skills-table">
          <div className="skills-category">
            <h4>Technical Skills</h4>
            <ul>
              {WEB_SKILLS.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="skills-category">
            <h4>Tools & Technologies</h4>
            <ul>
              {WEB_TOOLS.map((tool, index) => (
                <li key={index}>{tool}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="content-section reveal">
        <h2>Cybersecurity</h2>
        <div className="skills-table">
          <div className="skills-category">
            <h4>Security Skills</h4>
            <ul>
              {SECURITY_SKILLS.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="skills-category">
            <h4>Security Tools</h4>
            <ul>
              {SECURITY_TOOLS.map((tool, index) => (
                <li key={index}>{tool}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

// ==========================================
// EDUCATION SECTION
// ==========================================

const EducationSection = () => {
  return (
    <section className="content-section reveal">
      <h2>Education</h2>
      {EDUCATION.map(({ id, degree, institution, date, description }) => (
        <div key={id} className="education-item">
          <h3>{degree}</h3>
          <div className="institution">{institution}</div>
          <div className="date">{date}</div>
          <p>{description}</p>
        </div>
      ))}
    </section>
  );
};

// ==========================================
// CERTIFICATIONS SECTION
// ==========================================

const CertificationsSection = () => {
  return (
    <section className="content-section reveal">
      <h2>Certifications</h2>
      <div className="certifications-grid">
        {CERTIFICATIONS.map(({ id, name, issuer, date, icon }) => (
          <div key={id} className="certification-card">
            <div className="certification-icon">{icon}</div>
            <h4>{name}</h4>
            <div className="issuer">{issuer}</div>
            <div className="date">{date}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

// ==========================================
// PROJECTS SECTION
// ==========================================

const Projects = () => {
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
};

const ProjectCard = ({ title, description, tags }) => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log(`Project clicked: ${title}`);
  };

  return (
    <article className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      {tags && tags.length > 0 && (
        <div className="project-tags">
          {tags.map((tag, index) => (
            <span key={index} className="project-tag">
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
        View Project →
      </a>
    </article>
  );
};
