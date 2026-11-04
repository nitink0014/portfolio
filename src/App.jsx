
import { useState } from "react";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  ExternalLink,
  Mail,
  Menu,
  X,
} from "lucide-react";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaPython,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiPostman,
  SiSocketdotio,
  SiJavascript,
} from "react-icons/si";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React.js", icon: FaReact, color: "#61DAFB" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Vite", icon: SiVite, color: "#A78BFA" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: FaNodeJs, color: "#68A063" },
      { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Socket.IO", icon: SiSocketdotio, color: "#FFFFFF" },
      { name: "Python", icon: FaPython, color: "#3776AB" },
    ],
  },
  {
    category: "Tools & Workflow",
    items: [
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "GitHub", icon: FaGithub, color: "#FFFFFF" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    ],
  },
];

const projects = [
  {
    number: "01",
    title: "Connectly",
    category: "FULL-STACK DEVELOPMENT",
    description:
      "A real-time messaging application featuring authentication, online status, typing indicators, and instant messaging.",
    tags: ["React", "Node.js", "MongoDB", "Socket.IO"],
    style: "connectly",
    github: "https://github.com/nitink0014/connectly-mern-chat-app",
    demo: "",
  },
  {
    number: "02",
    title: "AI Virtual Assistant",
    category: "AI APPLICATION",
    description:
      "An interactive AI assistant featuring AI responses, speech recognition, speech synthesis, and a personalized interface.",
    tags: ["React", "Express.js", "Gemini API", "Cloudinary"],
    style: "assistant",
    github: "https://github.com/nitink0014/AI-virtual-Assistant-",
    demo: "",
  },
  {
    number: "03",
    title: "Multi-Model AI Research Assistant",
    category: "AI APPLICATION",
    description:
      "An AI-powered research application designed to help users explore information using multiple AI models.",
    tags: ["React", "JavaScript", "AI APIs", "Vercel"],
    style: "research",
    github: "",
    demo:
      "https://multi-model-ai-research-assistant-git-main-nitin-kumar4.vercel.app/",
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="navbar">
      <nav className="nav-container">
        <a
          className="nav-logo"
          href="#home"
          onClick={() => setMenuOpen(false)}
          aria-label="Nitin Kumar home"
        >
          N<span>.</span>K
        </a>

        <button
          className="mobile-menu-button"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>

        <div className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            className="nav-cta"
            href="#contact"
            onClick={() => setMenuOpen(false)}
          >
            Let's Talk <ArrowUpRight size={15} />
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section-container" id="home">
      <div className="hero-content">
        <div className="hero-status">
          <span className="status-dot" />
          Available for opportunities
        </div>

        <p className="hero-intro">HELLO, I'M NITIN KUMAR</p>

        <h1>
          Building digital
          <br />
          experiences with
          <br />
          <span className="gradient-text">code & creativity.</span>
        </h1>

        <p className="hero-description">
          B.Tech CSE graduate and aspiring full-stack developer building
          interactive web applications with React, Node.js, MongoDB, and AI
          technologies.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="button-primary">
            Explore My Work <ArrowDownRight size={18} />
          </a>
          <a href="#contact" className="button-secondary">
            Get In Touch <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="hero-socials">
          <a
            href="https://github.com/nitink0014"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
          >
           <FaGithub size={19} />
          </a>
          <a
            href="mailto:nitinkumarsoon@gmail.com"
            aria-label="Send email"
          >
            <Mail size={19} />
          </a>
          <span className="hero-social-divider" />
          <span>Based in India</span>
        </div>
      </div>

      <div className="hero-visual">
        <div className="visual-glow" />

        <div className="code-window">
          <div className="code-window-header">
            <div className="window-dots">
              <span />
              <span />
              <span />
            </div>
            <span>developer.js</span>
            <Code2 size={16} />
          </div>

          <div className="code-content">
            <p>
              <span className="code-purple">const</span> developer = {"{"}
            </p>
            <p className="code-indent">
              name: <span className="code-green">"Nitin Kumar"</span>,
            </p>
            <p className="code-indent">
              role: <span className="code-green">"Full-Stack Developer"</span>,
            </p>
            <p className="code-indent">
              stack: [
              <span className="code-orange">"React"</span>,
            </p>
            <p className="code-indent">
              <span className="code-orange">"Node.js"</span>,
              <span className="code-orange">" MongoDB"</span>
              ],
            </p>
            <p className="code-indent">
              passion: <span className="code-green">"Building"</span>,
            </p>
            <p className="code-indent">
              learning: <span className="code-green">"Always"</span>
            </p>
            <p>{"};"}</p>
            <p className="code-comment">// Turning ideas into reality ✨</p>
          </div>
          <div className="code-window-footer">
            <span><span className="status-dot" /> All systems operational</span>
            <span>JavaScript</span>
          </div>
        </div>

        <div className="floating-card floating-card-top">
          <span className="floating-card-icon">⚡</span>
          <div>
            <strong>Full Stack</strong>
            <p>Development</p>
          </div>
        </div>

        <div className="floating-card floating-card-bottom">
          <span className="floating-card-icon">✦</span>
          <div>
            <strong>AI Enthusiast</strong>
            <p>Building smarter apps</p>
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-indicator" aria-label="Scroll to about">
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown size={15} />
      </a>
    </section>
  );
}

function About() {
  const highlights = [
    { number: "03+", label: "Personal Projects" },
    { number: "MERN", label: "Development Stack" },
    { number: "∞", label: "Curiosity to Learn" },
  ];

  return (
    <section className="section-container about-section" id="about">
      <SectionHeading eyebrow="A LITTLE ABOUT ME" title="Turning curiosity into code." />

      <div className="about-grid">
        <div className="about-copy">
          <p>
            I'm a computer science graduate passionate about building useful,
            modern, and intuitive digital products.
          </p>
          <p>
            My focus is full-stack web development, where I work with React on
            the frontend and Node.js, Express, and MongoDB on the backend. I'm
            also exploring AI-powered applications and ways to make software
            more helpful.
          </p>
          <p>
            I enjoy learning by building projects, solving problems, and
            improving my development workflow one step at a time.
          </p>
          <a href="#contact" className="text-link">
            Let's build something together <ArrowRight size={17} />
          </a>
        </div>

        <div className="about-highlights">
          {highlights.map((item) => (
            <div className="highlight-card" key={item.label}>
              <span className="highlight-number">{item.number}</span>
              <span className="highlight-label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section-container skills-section" id="skills">
      <SectionHeading
        eyebrow="MY TOOLKIT"
        title="Technologies I work with."
        description="Tools and technologies I use to build and improve web applications."
      />

      <div className="skill-groups">
        {skills.map((group) => (
          <div className="skill-group" key={group.category}>
            <h3 className="skill-category">{group.category}</h3>
            <div className="skills-grid">
              {group.items.map((skill) => {
                const Icon = skill.icon;

                return (
                  <div className="skill-card" key={skill.name}>
                    <Icon
                      className="skill-icon"
                      style={{ color: skill.color }}
                      aria-hidden="true"
                    />
                    <h4>{skill.name}</h4>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProjectPreview({ style }) {
  if (style === "connectly") {
    return (
      <div className="project-preview connectly-preview">
        <div className="preview-topbar">
          <span className="preview-app-icon">C</span>
          <span>Connectly</span>
          <span className="preview-online"><span /> Online</span>
        </div>
        <div className="preview-chat">
          <div className="preview-message received">Hey! Are you available?</div>
          <div className="preview-message sent">Yes, let's connect! ✨</div>
          <div className="preview-message received preview-short">Sounds good!</div>
          <div className="preview-typing"><span /><span /><span /> typing...</div>
        </div>
      </div>
    );
  }

  if (style === "assistant") {
    return (
      <div className="project-preview assistant-preview">
        <div className="assistant-orb">✦</div>
        <div className="assistant-ring assistant-ring-one" />
        <div className="assistant-ring assistant-ring-two" />
        <p>How can I help you today?</p>
        <div className="assistant-input">
          <span>Ask me anything...</span>
          <span className="assistant-send">↑</span>
        </div>
      </div>
    );
  }

  return (
    <div className="project-preview research-preview">
      <div className="research-header">
        <span className="research-mark">✳</span>
        <span>AI Research Assistant</span>
      </div>
      <div className="research-search">
        <span>⌕</span> Explore a topic...
      </div>
      <div className="research-models">
        <span>AI Model 01</span>
        <span>AI Model 02</span>
        <span>Research</span>
      </div>
      <div className="research-lines">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

function ProjectActions({ project }) {
  return (
    <div className="project-actions">
      {project.demo ? (
        <a
          className="project-button-primary"
          href={project.demo}
          target="_blank"
          rel="noreferrer"
        >
          Live Demo <ExternalLink size={15} />
        </a>
      ) : (
        <span className="project-button-disabled" title="Demo link not added yet">
          Demo coming soon
        </span>
      )}

      {project.github ? (
        <a
          className="project-button-secondary"
          href={project.github}
          target="_blank"
          rel="noreferrer"
        >
         <FaGithub size={16} /> Source Code
        </a>
      ) : (
        <span className="project-button-disabled" title="Repository link not added yet">
         <FaGithub size={16} /> Source Code
        </span>
      )}
    </div>
  );
}

function Projects() {
  return (
    <section className="section-container projects-section" id="projects">
      <SectionHeading
        eyebrow="SELECTED WORK"
        title="Things I've been building."
        description="A selection of personal projects exploring full-stack development and AI."
      />

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-card-top">
              <span className="project-number">{project.number}</span>
              <span className="project-category">{project.category}</span>
            </div>

            <ProjectPreview style={project.style} />

            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <ProjectActions project={project} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "nitinkumarsoon@gmail.com";

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <section className="section-container contact-section" id="contact">
      <div className="contact-orb" />

      <SectionHeading
        eyebrow="LET'S CONNECT"
        title="Have an idea? Let's talk."
        description="Looking for a fresher developer or someone to build your next project? I'd love to hear from you."
      />

      <div className="contact-card">
        <div className="contact-card-icon"><Mail size={25} /></div>
        <p>Drop me an email and let's start a conversation.</p>
        <div className="contact-actions">
          <a className="button-primary" href={`mailto:${email}`}>
            Say Hello <ArrowUpRight size={18} />
          </a>
          <button className="button-secondary" type="button" onClick={copyEmail}>
            {copied ? <Check size={17} /> : <Mail size={17} />}
            {copied ? "Email Copied" : "Copy Email"}
          </button>
        </div>
        <span className="contact-email">{email}</span>
      </div>

      <div className="social-links">
        <a href="https://github.com/nitink0014" target="_blank" rel="noreferrer">
         <FaGithub size={18} /> GitHub <ArrowUpRight size={14} />
        </a>
        <a href="mailto:nitinkumarsoon@gmail.com">
          <Mail size={18} /> Email <ArrowUpRight size={14} />
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <a href="#home" className="footer-logo">N<span>.</span>K</a>
        <p>Designed & built with care by Nitin Kumar.</p>
        <a href="#home" className="back-to-top">
          Back to top <ArrowUpRight size={15} />
        </a>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Nitin Kumar</span>
        <span>Built with React <span className="footer-heart">♥</span></span>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
