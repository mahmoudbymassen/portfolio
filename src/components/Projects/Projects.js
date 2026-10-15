import React from "react";
import { Container } from "react-bootstrap";
import {
  FiArrowUpRight,
  FiCheckCircle,
  FiEdit3,
  FiMonitor,
  FiServer,
} from "react-icons/fi";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import stationPreview from "../../Assets/Projects/station.png";

const webProjects = [
  {
    title: "E-Commerce Website",
    description:
      "A Laravel storefront with product pages, shopping-cart operations, order views, and a PayPal checkout flow.",
    technologies: ["PHP", "Laravel 5.3", "Eloquent", "PayPal"],
    ghLink: "https://github.com/mahmoudbymassen/ecom",
    visualKind: "store",
    visualLabel: "Products · Cart · Checkout",
    icon: FiMonitor,
  },
  {
    title: "Gas Station Management",
    description:
      "A gas-station operations app covering fuel, tanks, pumps, stock, sales, suppliers, employees, and attendance.",
    technologies: ["React", "TypeScript", "Express", "MongoDB"],
    ghLink: "https://github.com/mahmoudbymassen/station-managment",
    image: stationPreview,
    imageAlt: "Stock management screen in the gas station application",
    visualLabel: "Station operations",
  },
  {
    title: "Project Management",
    description:
      "An authenticated project and task tracker with a dashboard, project management, and task creation and removal.",
    technologies: ["PHP", "Laravel 9", "Blade", "Tailwind CSS"],
    ghLink: "https://github.com/mahmoudbymassen/project-management",
    visualKind: "management",
    visualLabel: "Projects · Tasks · Dashboard",
    icon: FiCheckCircle,
  },
  {
    title: "E-Commerce Application",
    description:
      "A shopping interface with product listings and details, sign-in and sign-up pages, a cart, and a product-management screen.",
    technologies: ["React", "JavaScript", "Express", "MongoDB"],
    ghLink: "https://github.com/mahmoudbymassen/e-commerce",
    visualKind: "commerce",
    visualLabel: "Catalog · Accounts · Cart",
    icon: FiServer,
  },
];

const toolProjects = [
  {
    title: "Quiz Application",
    description:
      "A five-question React fundamentals quiz that presents multiple-choice questions and a final score.",
    technologies: ["React", "JavaScript", "Vite"],
    ghLink: "https://github.com/mahmoudbymassen/quiz",
    visualKind: "quiz",
    visualLabel: "Five questions · Score",
    icon: FiCheckCircle,
  },
  {
    title: "CV Builder",
    description:
      "A CV-building interface for entering contact, education, work, and skills information and viewing a formatted CV.",
    technologies: ["React", "JavaScript", "React Router", "Vite"],
    ghLink: "https://github.com/mahmoudbymassen/Resume",
    visualKind: "resume",
    visualLabel: "CV details · Preview",
    icon: FiEdit3,
  },
  {
    title: "Programming Q&A Chatbot",
    description:
      "A PHP chatbot that matches programming questions to stored replies and keeps the displayed conversation in a session.",
    technologies: ["PHP", "MySQL", "HTML", "CSS"],
    ghLink: "https://github.com/mahmoudbymassen/we-chat",
    visualKind: "chat",
    visualLabel: "Question · Stored answer",
    icon: FiMonitor,
  },
];

function NetworkPreview() {
  return (
    <div className="network-preview" aria-label="Illustrative network topology">
      <div className="network-preview-bar">
        <span>NETWORK TOPOLOGY</span>
        <span className="preview-note">ILLUSTRATIVE PREVIEW</span>
      </div>
      <svg
        className="network-diagram"
        viewBox="0 0 720 300"
        role="img"
        aria-label="A gateway connected to a switch and several network devices"
      >
        <path className="network-link" d="M360 78v62M360 140 165 214M360 140 285 214M360 140 435 214M360 140 555 214" />
        <g className="network-device network-device--main">
          <circle cx="360" cy="48" r="30" />
          <text x="360" y="53" textAnchor="middle">GW</text>
          <text className="network-device-label" x="360" y="94" textAnchor="middle">Gateway</text>
        </g>
        <g className="network-device network-device--switch">
          <rect x="325" y="112" width="70" height="56" rx="16" />
          <text x="360" y="146" textAnchor="middle">SW</text>
          <text className="network-device-label" x="360" y="190" textAnchor="middle">Switch</text>
        </g>
        <g className="network-device">
          <circle cx="165" cy="226" r="23" />
          <text x="165" y="231" textAnchor="middle">PC</text>
          <circle cx="285" cy="226" r="23" />
          <text x="285" y="231" textAnchor="middle">PC</text>
          <circle cx="435" cy="226" r="23" />
          <text x="435" y="231" textAnchor="middle">NAS</text>
          <circle cx="555" cy="226" r="23" />
          <text x="555" y="231" textAnchor="middle">AP</text>
        </g>
      </svg>
      <div className="network-preview-caption">
        <span><i /> Discovery</span>
        <span><i /> Device status</span>
        <span><i /> Topology map</span>
      </div>
    </div>
  );
}

function AirDrawingPreview() {
  return (
    <div className="air-preview" aria-label="Illustrative air drawing canvas">
      <div className="air-preview-toolbar">
        <span><FiEdit3 /> AIR CANVAS</span>
        <div className="air-color-dots" aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
        <span className="air-mode">DRAW</span>
      </div>
      <div className="air-canvas">
        <svg viewBox="0 0 620 220" role="img" aria-label="Colorful sample strokes on a drawing canvas">
          <path className="air-stroke air-stroke--cyan" d="M52 166c72-115 130-90 184-48s86 52 132-8 111-57 203 10" />
          <path className="air-stroke air-stroke--pink" d="M103 74c49 35 91 92 140 80s65-75 113-72 67 37 102 30" />
          <path className="air-stroke air-stroke--green" d="M218 174c28-20 32-67 62-72s55 28 83 17" />
          <circle className="air-cursor-ring" cx="488" cy="119" r="15" />
          <circle className="air-cursor-dot" cx="488" cy="119" r="4" />
        </svg>
        <span className="air-canvas-label">Gesture sketch · illustrative</span>
      </div>
      <div className="gesture-legend">
        <span><b>1</b> Draw</span>
        <span><b>2</b> Select color</span>
        <span><b>5</b> Erase</span>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container className="content-shell project-showcase">
        <header className="project-intro">
          <div className="section-tag">Projects</div>
          <h1 className="project-heading">
            Selected <span className="accent-text">work</span>
          </h1>
          <p className="project-subtitle">
            Hands-on projects focused on infrastructure first, alongside computer vision,
            web applications, and practical tools.
          </p>
        </header>

        <section className="project-group" aria-labelledby="systems-projects">
          <div className="project-group-heading">
            <span className="project-group-kicker">Featured project</span>
            <h2 id="systems-projects">Systems &amp; Networking</h2>
          </div>
          <article className="featured-project-card">
            <NetworkPreview />
            <div className="featured-project-copy">
              <span className="project-eyebrow">Network monitoring · Infrastructure</span>
              <h3>Network Infrastructure Monitoring</h3>
              <p>
                Discover devices across an IP range, review detected device details,
                and explore network topology. The application also includes dashboards,
                alerts, reports, and data export.
              </p>
              <ul className="featured-project-points">
                <li><FiCheckCircle /> ARP discovery with optional deeper Nmap scans</li>
                <li><FiCheckCircle /> Device and topology views with alert handling</li>
                <li><FiCheckCircle /> Dashboard, reporting, and export endpoints</li>
              </ul>
              <div className="project-tech-list" aria-label="Technologies">
                {["React", "TypeScript", "FastAPI", "SQLAlchemy", "Scapy", "Nmap", "React Flow"].map((technology) => (
                  <span className="project-tech" key={technology}>{technology}</span>
                ))}
              </div>
              <a
                className="project-link project-link--featured"
                href="https://github.com/mahmoudbymassen/network-monitoring"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiMonitor aria-hidden="true" />
                View on GitHub
                <FiArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </article>
        </section>

        <section className="project-group" aria-labelledby="vision-projects">
          <div className="project-group-heading">
            <span className="project-group-kicker">Computer vision &amp; Python</span>
            <h2 id="vision-projects">Air Drawing</h2>
          </div>
          <article className="air-project-card">
            <AirDrawingPreview />
            <div className="air-project-copy">
              <span className="project-eyebrow">Webcam · Hand gestures</span>
              <h3>Draw in the air</h3>
              <p>
                A webcam-based drawing application that tracks one hand and turns
                finger gestures into canvas controls: draw with one finger, select
                colors with two, and erase with five.
              </p>
              <div className="project-tech-list" aria-label="Technologies">
                {["Python", "OpenCV", "MediaPipe", "NumPy"].map((technology) => (
                  <span className="project-tech" key={technology}>{technology}</span>
                ))}
              </div>
              <a
                className="project-link"
                href="https://github.com/mahmoudbymassen/air-drawing"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub <FiArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </article>
        </section>

        <section className="project-group" aria-labelledby="web-projects">
          <div className="project-group-heading">
            <span className="project-group-kicker">Web Development</span>
            <h2 id="web-projects">Web applications</h2>
          </div>
          <div className="project-card-grid">
            {webProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>

        <section className="project-group" aria-labelledby="tools-projects">
          <div className="project-group-heading">
            <span className="project-group-kicker">Applications &amp; Tools</span>
            <h2 id="tools-projects">Useful interfaces</h2>
          </div>
          <div className="project-card-grid">
            {toolProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>
      </Container>
    </Container>
  );
}

export default Projects;
