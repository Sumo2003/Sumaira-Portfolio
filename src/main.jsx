import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDownRight, ArrowUpRight, Mail, Menu, X, Code2, BrainCircuit, Leaf, ShieldCheck, ExternalLink, Download, BriefcaseBusiness, GraduationCap, Award, ChevronRight, MapPin } from "lucide-react";
import './styles.css';

const profile = {
  name: 'Sumaira Ashfaque',
  role: 'Software Engineer | Web Development & Applied AI',
  email: 'sumairaashfaque2@gmail.com',
  github: 'https://github.com/Sumo2003',
  linkedin: 'https://www.linkedin.com/in/sumaira-ashfaque0/',
  leetcode: 'https://leetcode.com/u/sumaira760',
};

const projects = [
  {
    number: '01',
    name: 'Carbon Footprint Tracker',
    type: 'Full-stack web application',
    description: 'A personal sustainability tracker that estimates emissions from everyday activities and turns the results into clear, useful insights.',
    details: ['Vue.js', 'Node.js', 'Firebase / Firestore', 'Chart.js'],
    icon: Leaf,
    tone: 'green',
    bullets: ['Track electricity, travel and shopping activity', 'View footprint history and dashboard summaries', 'Explore charts, tips and leaderboard features'],
    link: 'https://deploy-preview-1--sumaira-carbon-tracker-2026.netlify.app/',
    linkLabel: 'Live preview',
  },
  {
    number: '02',
    name: 'Real-time Deepfake Detection',
    type: 'AI / Computer Vision research project',
    description: 'A live video analysis prototype designed to flag potentially manipulated faces and present detection confidence in a clear interface.',
    details: ['Python', 'OpenCV', 'TensorFlow / CNN', 'Streamlit'],
    icon: ShieldCheck,
    tone: 'violet',
    bullets: ['Live webcam/video-call workflow prototype', 'Authentic vs. suspicious confidence display', 'Detection session summary and report workflow'],
    link: 'https://real-time-deepfake-detection-in-video-calls-hq7veunnsvrxxac85y.streamlit.app/',
    repo: 'https://Code2.com/Sumo2003/Real-time-Deepfake-Detection-in-video-calls',
    linkLabel: 'Open app',
  },
  {
    number: '03',
    name: 'Real-time Chat Application',
    type: 'Full-stack internship project',
    description: 'A chat application built during full-stack internship work, focused on authenticated users, messaging flow and API validation.',
    details: ['JavaScript', 'Node.js', 'Firebase', 'WebSockets', 'JWT'],
    icon: Code2,
    tone: 'blue',
    bullets: ['Registration and login flow with JWT', 'Messaging APIs with validation and error handling', 'Firebase query and data-flow improvements'],
    link: 'https://deploy-preview-1--sumaira-realtime-chat.netlify.app/',
    linkLabel: 'Live preview',
  },
  {
    number: '04',
    name: 'Recipe Finder',
    type: 'Frontend internship project',
    description: 'A responsive recipe discovery interface that uses a public recipe API to help users explore meal ideas.',
    details: ['HTML', 'CSS', 'JavaScript', 'TheMealDB API'],
    icon: BrainCircuit,
    tone: 'orange',
    bullets: ['Search and browse recipes from an API', 'Responsive layouts for different screen sizes', 'Practice with async requests and UI states'],
    link: 'https://sumo2003.github.io/Recipe-Finder/',
    linkLabel: 'Live demo',
  },
  {
    number: '05',
    name: 'Team Task Manager',
    type: 'Full-stack web application · In progress',
    description: 'A task management project with frontend and backend components, currently awaiting deployment.',
    details: ['Frontend', 'Backend', 'JavaScript'],
    icon: BriefcaseBusiness,
    tone: 'blue',
    bullets: ['Organize tasks in one place', 'Frontend and backend project structure', 'Deployment link will be added when available'],
    link: null,
    linkLabel: 'Deployment pending',
  },
];

const skills = [
  { title: 'Frontend', items: ['JavaScript', 'React.js', 'Vue.js', 'HTML5', 'CSS3', 'Responsive UI'] },
  { title: 'Backend & APIs', items: ['Node.js', 'REST APIs', 'WebSockets', 'JWT basics'] },
  { title: 'Database & Tools', items: ['Firebase / Firestore', 'MongoDB', 'Git', 'GitHub', 'Chart.js'] },
  { title: 'Programming & CS', items: ['C++', 'Python fundamentals', 'OOP', 'DBMS', 'Operating Systems', 'DSA fundamentals'] },
  { title: 'AI & Computer Vision', items: ['OpenCV', 'TensorFlow / CNN concepts', 'Deepfake detection', 'Streamlit'] },
];

const experience = [
  {
    role: 'Full Stack Developer Intern',
    company: 'TechnoHacks',
    date: 'Nov 2025 – Dec 2025',
    points: [
      'Worked on a real-time chat application using JavaScript, Node.js, Firebase and WebSockets.',
      'Implemented authentication and messaging API flows with validation and error handling.',
      'Worked on improving Firebase query patterns and application data flow.',
    ],
  },
  {
    role: 'Frontend Web Developer Intern',
    company: 'CodTech',
    date: 'Aug 2024 – Sep 2024',
    points: [
      'Built responsive web interfaces with HTML, CSS and JavaScript.',
      'Created a Recipe Finder using TheMealDB API and practiced API-driven UI states.',
      'Focused on usable layouts and core frontend development fundamentals.',
    ],
  },
];

const certifications = [
  { title: 'Cisco Networking / Packet Tracer', note: 'Networking fundamentals' },
  { title: 'Oracle Java & DBMS', note: 'Programming and database fundamentals' },
  { title: 'CodTech Frontend Development', note: 'Frontend development internship / credential' },
  { title: 'CODE4CAUSE 2.0 — NSUT', note: '30-hour hackathon · AI healthcare prototype · Sep 2024' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <div className="site-shell">
      <div className="grain" aria-hidden="true" />
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Sumaira home">
          <span className="brand-mark">S<span>A</span></span>
          <span className="brand-name">SUMAIRA<span>.</span></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          {[['About', '#about'], ['Projects', '#projects'], ['Experience', '#experience'], ['Skills', '#skills'], ['Achievements', '#credentials'], ['Contact', '#contact']].map(([label, href]) => (
            <a key={label} href={href} onClick={closeMenu}>{label}</a>
          ))}
          <a className="nav-cta" href={`mailto:${profile.email}`} onClick={closeMenu}>Let's talk <ArrowUpRight size={14} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> OPEN TO SOFTWARE ROLES & FREELANCE PROJECTS</div>
            <h1>Software Engineer<br /><span className="gold-text">building digital experiences.</span></h1>
            <p className="hero-sub">I’m Sumaira — a Computer Science graduate who enjoys building useful web applications and exploring AI-powered ideas.</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#projects">Explore my work <ArrowDownRight size={17} /></a>
              <a className="btn btn-secondary" href={`mailto:${profile.email}`}>Contact me <ArrowUpRight size={16} /></a>
            </div>
            <div className="hero-meta">
              <span><MapPin size={14} /> India · Open to remote opportunities</span>
              <span className="meta-divider" />
              <span>React · JavaScript · Web & AI</span>
            </div>
          </div>
          <div className="hero-art">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="hero-glow" />
            <div className="monogram-card">
              <span className="monogram-small">DEVELOPER PORTFOLIO</span>
              <div className="monogram">S<span>A</span></div>
              <div className="monogram-line" />
              <p>Curiosity into<br />working solutions.</p>
              <span className="monogram-index">2026 / PORTFOLIO</span>
            </div>
            <div className="float-chip chip-code"><Code2 size={16} /> Clean UI</div>
            <div className="float-chip chip-ai"><BrainCircuit size={16} /> AI projects</div>
            <div className="hero-star star-one">✳</div>
            <div className="hero-star star-two">✳</div>
          </div>
          <a className="scroll-cue" href="#about"><span /> SCROLL TO EXPLORE</a>
        </section>

        <section className="section-wrap section-block about-section" id="about">
          <div className="section-label"><span>01</span> ABOUT ME</div>
          <div className="about-grid">
            <h2>Curious by nature.<br /><span className="muted-heading">Builder by practice.</span></h2>
            <div className="about-text">
              <p>I’m a B.Tech Computer Science graduate from Galgotias University (2026). I enjoy taking an idea, understanding the problem behind it, and shaping it into a useful digital experience.</p>
              <p>My work spans frontend development, full-stack fundamentals and AI/computer-vision projects. I’m currently strengthening React, JavaScript and software engineering fundamentals while looking for opportunities to learn, contribute and build for real users.</p>
              <div className="quick-facts">
                <div><strong>8.33</strong><span>CGPA</span></div>
                <div><strong>2026</strong><span>Graduate</span></div>
                <div><strong>Web + AI</strong><span>Focus areas</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-wrap section-block" id="projects">
          <div className="section-heading-row">
            <div>
              <div className="section-label"><span>02</span> SELECTED WORK</div>
              <h2>Projects with a <span className="gold-text">purpose.</span></h2>
            </div>
            <p className="section-aside">A mix of web development, real-time applications and applied AI exploration.</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <article className={`project-card ${project.tone}`} key={project.number}>
                  <div className="project-top">
                    <span className="project-number">{project.number} / PROJECT</span>
                    <span className="project-icon"><Icon size={22} /></span>
                  </div>
                  <div className="project-visual" aria-hidden="true">
                    <div className="visual-window">
                      <div className="window-bar"><i /><i /><i /><span>{project.name}</span></div>
                      <div className="visual-content">
                        <div className="visual-line line-long" /><div className="visual-line line-mid" />
                        <div className="visual-panels"><b /><b /><b /></div>
                        <div className="visual-line line-short" />
                      </div>
                    </div>
                    <span className="visual-orb" />
                  </div>
                  <div className="project-type">{project.type}</div>
                  <h3>{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  <ul className="project-points">{project.bullets.map((point) => <li key={point}>{point}</li>)}</ul>
                  <div className="tag-row">{project.details.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <div className="project-actions">
                    {project.link ? <a href={project.link} target="_blank" rel="noreferrer">{project.linkLabel || 'View project'} <ExternalLink size={13} /></a> : <span className="project-pending">{project.linkLabel || 'Link coming soon'}</span>}
                    {project.repo && <a href={project.repo} target="_blank" rel="noreferrer">GitHub repo <Code2 size={13} /></a>}
                  </div>
                </article>
              );
            })}
          </div>
          <p className="project-note"><span className="note-dot" /> Live demos are linked where available. Team Task Manager deployment is still pending.</p>
        </section>

        <section className="section-wrap section-block" id="experience">
          <div className="section-label"><span>03</span> EXPERIENCE</div>
          <div className="experience-layout">
            <div><h2>Learning by<br /><span className="muted-heading">building things.</span></h2><p className="experience-intro">Internship experience focused on frontend work, API integration and application features.</p></div>
            <div className="timeline">
              {experience.map((item) => (
                <article className="timeline-item" key={item.company}>
                  <div className="timeline-marker" />
                  <div className="timeline-head"><div><h3>{item.role}</h3><p>{item.company}</p></div><span>{item.date}</span></div>
                  <ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-wrap section-block" id="skills">
          <div className="section-heading-row">
            <div><div className="section-label"><span>04</span> TOOLKIT</div><h2>Skills I’m <span className="gold-text">building with.</span></h2></div>
            <p className="section-aside">A practical toolkit across frontend, APIs, databases and applied AI. I keep learning through hands-on practice.</p>
          </div>
          <div className="skills-grid">
            {skills.map((group, index) => (
              <div className="skill-card" key={group.title}>
                <span className="skill-index">0{index + 1}</span>
                <h3>{group.title}</h3>
                <div className="skill-tags">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="section-wrap section-block credentials-section" id="credentials">
          <div className="section-label"><span>05</span> CREDENTIALS & ACHIEVEMENTS</div>
          <h2>Milestones along <span className="gold-text">the way.</span></h2>
          <div className="credential-grid">
            {certifications.map((item, index) => (
              <div className="credential-card" key={item.title}>
                <div className="credential-icon">{index === 3 ? <Award size={19} /> : <GraduationCap size={19} />}</div>
                <div><h3>{item.title}</h3><p>{item.note}</p></div>
                <ChevronRight size={17} className="credential-arrow" />
              </div>
            ))}
          </div>
          <p className="small-disclaimer">Please verify exact certificate titles and dates against your certificates before publishing.</p>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <div className="section-label"><span>06</span> GET IN TOUCH</div>
            <div className="contact-grid">
              <div><h2>Have an idea?<br /><span className="gold-text">Let’s build it.</span></h2><p>I’m open to entry-level software opportunities, collaborative projects and suitable freelance work.</p></div>
              <div className="contact-card">
                <span className="contact-overline">START A CONVERSATION</span>
                <a className="email-link" href={`mailto:${profile.email}`}>{profile.email} <ArrowUpRight size={17} /></a>
                <button className="copy-email" onClick={copyEmail}>{copied ? 'Email copied ✓' : 'Copy email address'}</button>
                <div className="social-links">
<a href={profile.github} target="_blank" rel="noreferrer">
  <Code2 size={17} /> GitHub <ExternalLink size={13} />
</a><a href={profile.linkedin} target="_blank" rel="noreferrer">
  <ExternalLink size={17} /> LinkedIn <ExternalLink size={13} />
</a>                  <a href={profile.leetcode} target="_blank" rel="noreferrer"><Code2 size={17} /> LeetCode <ExternalLink size={13} /></a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="brand" href="#home"><span className="brand-mark">S<span>A</span></span><span className="brand-name">SUMAIRA<span>.</span></span></a>
        <p>Designed with intention. Built to keep growing.</p>
        <a className="back-top" href="#home">BACK TO TOP <ArrowUpRight size={14} /></a>
        <span className="copyright">© {new Date().getFullYear()} Sumaira Ashfaque</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);