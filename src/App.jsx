import { useState } from "react";
import {
  FaArrowDown,
  FaArrowRight,
  FaBars,
  FaBolt,
  FaBriefcase,
  FaCheck,
  FaCode,
  FaDatabase,
  FaEnvelope,
  FaGithub,
  FaGraduationCap,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhone,
  FaReact,
  FaShieldAlt,
  FaTimes,
  FaTools,
} from "react-icons/fa";

const navigation = [
  ["Home", "home"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Education", "education"],
  ["Certifications", "certifications"],
  ["Contact", "contact"],
];

const skillGroups = [
  {
    title: "Frontend",
    icon: FaCode,
    skills: ["React.js", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS"],
  },
  {
    title: "React",
    icon: FaReact,
    skills: ["React Hooks", "Custom Hooks", "Redux Toolkit", "Redux", "Context API", "React Router"],
  },
  {
    title: "API & security",
    icon: FaShieldAlt,
    skills: ["REST APIs", "Axios", "Fetch API", "Postman", "JWT Authentication", "Protected Routes", "Role-Based Access Control"],
  },
  {
    title: "Testing",
    icon: FaCheck,
    skills: ["Jest", "React Testing Library", "Vitest", "Unit Testing", "Component Testing", "Integration Testing", "Mocking"],
  },
  {
    title: "Tools",
    icon: FaTools,
    skills: ["Git", "GitHub", "VS Code", "NPM", "Vite", "Tortoise SVN"],
  },
  {
    title: "Backend & database",
    icon: FaDatabase,
    skills: ["Core Java", "Spring Boot", "MS SQL"],
  },
  {
    title: "AI tools",
    icon: FaBolt,
    skills: ["GitHub Copilot", "OpenAI Codex"],
  },
  {
    title: "Practices",
    icon: FaBriefcase,
    skills: ["Agile/Scrum", "Code Reviews", "Debugging", "Performance Optimization", "Lazy Loading", "Code Splitting", "React.memo", "useMemo", "useCallback", "Responsive Web Design"],
  },
];

const experienceHighlights = [
  "Developed React.js modules for tracking, inventory, and user management in an enterprise application.",
  "Built 20+ reusable UI components with React Hooks and Bootstrap, contributing to a 40% gain in code reuse.",
  "Improved frontend performance by 35% using lazy loading, code splitting, and memoization.",
  "Integrated REST APIs using Axios and Fetch API, and managed shared application state with Redux Toolkit.",
  "Implemented JWT authentication, role-based access control, and protected routes with React Router.",
  "Delivered responsive interfaces and collaborated with backend and QA teams in Agile/Scrum teams.",
];

const projectTechnologies = [
  "React.js",
  "JavaScript",
  "Redux Toolkit",
  "React Router",
  "Axios",
  "Bootstrap",
  "HTML",
  "CSS",
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <nav className="navbar portfolio-nav" aria-label="Main navigation">
        <div className="container nav-inner">
          <a className="brand" href="#home" onClick={closeMenu} aria-label="Hareesh Ravilala, home">
            <span className="brand-mark">HR</span>
            <span>Hareesh Ravilala<span className="brand-period">.</span></span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
          </button>

          <div id="primary-navigation" className={`nav-links${menuOpen ? " is-open" : ""}`}>
            {navigation.map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={closeMenu}>
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

function Home() {
  return (
    <section className="hero-section section-anchor" id="home">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-7">
            <div className="hero-copy">
              <span className="availability"><span /> React.js Developer <span className="availability-divider">·</span> Hyderabad, India</span>
              <h1>Hi, I’m <span>Hareesh Ravilala.</span></h1>
              <p className="hero-role">I build thoughtful, reliable web experiences.</p>
              <p className="hero-description">
                React.js Developer at TCS, creating responsive enterprise interfaces with reusable components,
                well-structured state, and performance in mind.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">
                  View Projects <FaArrowRight aria-hidden="true" />
                </a>
                <a className="button button-secondary" href="/resume.pdf" download="Hareesh-Ravilala-Resume.pdf">
                  Download Resume <FaArrowDown aria-hidden="true" />
                </a>
                <a className="text-link" href="#contact">Contact Me</a>
              </div>
              <div className="hero-socials" aria-label="Social profiles">
                <a href="https://linkedin.com/in/hareesh-ravilala-980958202" target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><FaLinkedinIn /></a>
                <a href="https://github.com/HareeshRavilala" target="_blank" rel="noreferrer" aria-label="GitHub profile"><FaGithub /></a>
                <a href="mailto:ravilalahareesh3@gmail.com" aria-label="Email Hareesh"><FaEnvelope /></a>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="hero-visual" aria-label="React frontend development">
              <div className="hero-orbit orbit-one" />
              <div className="hero-orbit orbit-two" />
              <div className="code-card">
                <div className="code-card-top"><span /><span /><span /><span className="code-file">portfolio.jsx</span></div>
                <div className="code-lines" aria-hidden="true">
                  <p><span className="code-purple">const</span> developer = {"{"}</p>
                  <p className="code-indent"><span className="code-blue">name</span>: <span className="code-green">"Hareesh"</span>,</p>
                  <p className="code-indent"><span className="code-blue">role</span>: <span className="code-green">"React Developer"</span>,</p>
                  <p className="code-indent"><span className="code-blue">focus</span>: [</p>
                  <p className="code-indent code-indent-two"><span className="code-green">"Great UX"</span>,</p>
                  <p className="code-indent code-indent-two"><span className="code-green">"Reusable UI"</span>,</p>
                  <p className="code-indent code-indent-two"><span className="code-green">"Performance"</span></p>
                  <p className="code-indent">],</p>
                  <p>{"};"}</p>
                  <p className="code-muted"><span className="code-purple">export default</span> developer;</p>
                </div>
                <div className="code-card-footer"><FaReact aria-hidden="true" /> Building with React</div>
              </div>
              <div className="visual-note note-components"><span className="note-icon"><FaCode /></span><span><strong>Reusable UI</strong><small>Built to scale</small></span></div>
              <div className="visual-note note-performance"><span className="note-icon"><FaBolt /></span><span><strong>Performance</strong><small>35% improvement</small></span></div>
            </div>
          </div>
        </div>
        <div className="hero-stats row g-3">
          <div className="col-4"><div className="stat-item"><strong>20<span>+</span></strong><span>Reusable components</span></div></div>
          <div className="col-4"><div className="stat-item"><strong>40<span>%</span></strong><span>Code reuse gain</span></div></div>
          <div className="col-4"><div className="stat-item"><strong>35<span>%</span></strong><span>Frontend performance improvement</span></div></div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section section-tinted section-anchor" id="about">
      <div className="container">
        <SectionHeading eyebrow="A little about me" title="Building for people and performance" />
        <div className="row g-4 align-items-stretch">
          <div className="col-lg-7">
            <article className="about-card card-surface h-100">
              <span className="card-kicker">Frontend engineering</span>
              <h3>Clean interfaces. Thoughtful implementation.</h3>
              <p>
                I’m a React.js Developer at Tata Consultancy Services, Hyderabad. I build enterprise web
                application interfaces with React.js, JavaScript (ES6+), and TypeScript, with a focus on
                reusable UI and clear component architecture.
              </p>
              <p>
                My work includes Redux Toolkit state management, REST API integration, JWT-secured routing,
                responsive UI, and practical frontend performance optimization. I enjoy working closely with
                backend and QA teams to ship dependable features.
              </p>
              <a className="inline-link" href="#experience">Explore my experience <FaArrowRight aria-hidden="true" /></a>
            </article>
          </div>
          <div className="col-lg-5">
            <div className="about-facts">
              <div className="fact-card card-surface"><span className="fact-icon"><FaBriefcase /></span><div><strong>Enterprise web apps</strong><p>Tracking, inventory, and user-management modules</p></div></div>
              <div className="fact-card card-surface"><span className="fact-icon"><FaReact /></span><div><strong>React-first development</strong><p>Hooks, reusable components, and structured state</p></div></div>
              <div className="fact-card card-surface"><span className="fact-icon"><FaMapMarkerAlt /></span><div><strong>Based in Hyderabad</strong><p>India</p></div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section section-anchor" id="skills">
      <div className="container">
        <SectionHeading eyebrow="My toolkit" title="Technical skills" description="Tools and technologies reflected in my frontend development work." />
        <div className="row g-4">
          {skillGroups.map(({ title, icon: Icon, skills }) => (
            <div className="col-md-6 col-xl-4" key={title}>
              <article className="skill-card card-surface h-100">
                <div className="skill-card-heading"><span className="skill-icon"><Icon aria-hidden="true" /></span><h3>{title}</h3></div>
                <ul className="skill-list">
                  {skills.map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section section-tinted section-anchor" id="experience">
      <div className="container">
        <SectionHeading eyebrow="Where I’ve worked" title="Experience" />
        <article className="experience-card card-surface">
          <div className="experience-marker"><FaBriefcase aria-hidden="true" /></div>
          <div className="experience-main">
            <div className="experience-heading">
              <div><span className="card-kicker">Systems Engineer · React.js Developer</span><h3>Tata Consultancy Services <span>(TCS)</span></h3><p className="experience-location"><FaMapMarkerAlt aria-hidden="true" /> Hyderabad, India</p></div>
              <span className="date-pill">May 2022 – Present</span>
            </div>
            <ul className="highlight-list">
              {experienceHighlights.map((highlight) => <li key={highlight}><FaCheck aria-hidden="true" /> <span>{highlight}</span></li>)}
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section section-anchor" id="projects">
      <div className="container">
        <SectionHeading eyebrow="Selected work" title="Project highlight" description="A temple services and management platform built for public-facing and administrative workflows." />
        <article className="project-card card-surface">
          <div className="project-banner">
            <div className="project-symbol"><FaReact aria-hidden="true" /></div>
            <span className="project-label">Featured project</span>
            <div className="project-banner-lines" aria-hidden="true"><span /><span /><span /></div>
          </div>
          <div className="project-content">
            <div className="project-heading">
              <div><span className="card-kicker">Tirumala Tirupati Devasthanams</span><h3>TTD Online Services</h3></div>
              <span className="project-type">Temple services platform</span>
            </div>
            <p className="project-description">
              An online temple management platform bringing key visitor services and administrative operations
              together, including darshan bookings, seva reservations, accommodation, donations, Panchagavya
              products, and inventory.
            </p>
            <div className="project-details">
              <div><h4>My contributions</h4><ul className="project-list">
                <li>Built booking, dashboard, and administration modules using a component-based React architecture.</li>
                <li>Integrated REST APIs with Axios and implemented protected routes.</li>
                <li>Optimized Redux selectors and state structure, reducing unnecessary re-renders by 30%.</li>
                <li>Delivered a responsive interface for desktop, tablet, and mobile.</li>
              </ul></div>
              <div className="project-stack"><h4>Technologies</h4><div className="tech-badges">{projectTechnologies.map((tech) => <span key={tech}>{tech}</span>)}</div></div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="section section-tinted section-anchor" id="education">
      <div className="container">
        <SectionHeading eyebrow="Academic background" title="Education" />
        <article className="education-card card-surface">
          <span className="education-icon"><FaGraduationCap aria-hidden="true" /></span>
          <div><span className="card-kicker">Bachelor of Technology</span><h3>Mechanical Engineering</h3><p>Mother theresa institute of engineering and technology</p></div>
          <span className="date-pill">2021</span>
        </article>
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section className="section section-anchor" id="certifications">
      <div className="container">
        <SectionHeading eyebrow="Learning & credentials" title="Certifications" />
        <div className="row g-4">
          <div className="col-md-6"><article className="certification-card card-surface"><span className="certification-icon"><FaCheck aria-hidden="true" /></span><div><span className="card-kicker">Google Cloud</span><h3>Associate Cloud Engineer</h3></div><FaArrowRight className="certification-arrow" aria-hidden="true" /></article></div>
          <div className="col-md-6"><article className="certification-card card-surface"><span className="certification-icon"><FaReact aria-hidden="true" /></span><div><span className="card-kicker">Udemy</span><h3>React.js Developer Certification</h3></div><FaArrowRight className="certification-arrow" aria-hidden="true" /></article></div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section section-tinted section-anchor" id="contact">
      <div className="container">
        <SectionHeading eyebrow="Let’s connect" title="Get in touch" description="Have a role or project in mind? I’d be glad to hear from you." />
        <div className="contact-panel">
          <span className="card-kicker">Contact details</span>
          <h3>Let’s start a conversation.</h3>
          <p>Reach out directly or connect with me online.</p>
          <div className="contact-links">
            <a href="mailto:ravilalahareesh3@gmail.com"><span><FaEnvelope aria-hidden="true" /></span><span><small>Email</small><strong>ravilalahareesh3@gmail.com</strong></span></a>
            <a href="tel:+919703394274"><span><FaPhone aria-hidden="true" /></span><span><small>Phone</small><strong>+91-9703394274</strong></span></a>
            <a href="https://www.google.com/maps/search/?api=1&query=Hyderabad%2C%20India" target="_blank" rel="noreferrer"><span><FaMapMarkerAlt aria-hidden="true" /></span><span><small>Location</small><strong>Hyderabad, India</strong></span><FaArrowRight className="contact-link-arrow" aria-hidden="true" /></a>
            <a href="https://linkedin.com/in/hareesh-ravilala-980958202" target="_blank" rel="noreferrer"><span><FaLinkedinIn aria-hidden="true" /></span><span><small>LinkedIn</small><strong>Connect with me</strong></span><FaArrowRight className="contact-link-arrow" aria-hidden="true" /></a>
            <a href="https://github.com/HareeshRavilala" target="_blank" rel="noreferrer"><span><FaGithub aria-hidden="true" /></span><span><small>GitHub</small><strong>See my profile</strong></span><FaArrowRight className="contact-link-arrow" aria-hidden="true" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <a className="brand footer-brand" href="#home"><span className="brand-mark">HR</span><span>Hareesh Ravilala<span className="brand-period">.</span></span></a>
        <p>React.js Developer · Hyderabad, India</p>
        <a className="back-to-top" href="#home">Back to top <FaArrowDown aria-hidden="true" /></a>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} Hareesh Ravilala</span><span>Built with React</span></div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <main id="main-content">
        <Home />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
