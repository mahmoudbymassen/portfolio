import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaNetworkWired, FaDatabase, FaShieldAlt, FaCode, FaServer, FaGitAlt } from "react-icons/fa";
import Particle from "../Particle";
import Aboutcard from "./AboutCard";

const skillGroups = [
  {
    title: "Systems Administration",
    icon: <FaServer />,
    items: ["Linux", "Windows Server", "Active Directory", "Virtualization with VMware and VirtualBox"],
  },
  {
    title: "Networking",
    icon: <FaNetworkWired />,
    items: ["TCP/IP", "VLAN", "DHCP", "DNS", "Routing", "Network troubleshooting and diagnostics"],
  },
  {
    title: "Monitoring and Security",
    icon: <FaShieldAlt />,
    items: ["Nmap", "Scapy", "Network analysis", "Firewall fundamentals", "JWT authentication", "ARP spoofing in a lab environment"],
  },
  {
    title: "Development",
    icon: <FaCode />,
    items: ["Python", "JavaScript", "PHP", "HTML5 and CSS3", "React.js", "FastAPI", "Laravel", "Node.js and Express.js", "React Flow"],
  },
  {
    title: "Databases",
    icon: <FaDatabase />,
    items: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Tools",
    icon: <FaGitAlt />,
    items: ["Git and GitHub", "Docker", "VS Code", "Postman"],
  },
];

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container className="content-shell">
        <Row className="about-intro align-items-center">
          <Col lg={7} className="about-copy">
            <div className="section-tag">Profile</div>
            <h1>About <span className="accent-text">Me</span></h1>
            <Aboutcard />
          </Col>
          <Col lg={5} className="about-profile-panel">
            <div className="profile-card">
              <span className="profile-label">Location</span>
              <strong>Casablanca / Nouaceur, Morocco</strong>
              <span className="profile-label">Focus</span>
              <strong>Systems, networks, monitoring, and IT support</strong>
              <span className="profile-label">Core strengths</span>
              <ul>
                <li>Linux and Windows administration</li>
                <li>Network diagnosis and troubleshooting</li>
                <li>Infrastructure monitoring and automation</li>
              </ul>
            </div>
          </Col>
        </Row>

        <section className="timeline-section">
          <div className="section-tag">Education</div>
          <h2>Academic background</h2>
          <div className="timeline-list">
            <div className="timeline-item">
              <div className="timeline-badge"></div>
              <div className="timeline-content">
                <span className="timeline-date">2025–2026</span>
                <h3>Professional Bachelor&apos;s Degree in Computer Systems and Networks Engineering</h3>
                <p>ESTEM, Casablanca</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-badge"></div>
              <div className="timeline-content">
                <span className="timeline-date">2023–2025</span>
                <h3>Specialized Technician Diploma in Full Stack Web Development</h3>
                <p>OFPPT – HASSANIA, Casablanca</p>
              </div>
            </div>
          </div>
        </section>

        <section className="skills-section">
          <div className="section-tag">Skills</div>
          <h2>Technical capabilities</h2>
          <Row className="skill-grid">
            {skillGroups.map((group) => (
              <Col lg={4} md={6} key={group.title} className="skill-col">
                <div className="skill-card">
                  <div className="skill-header">
                    <span className="skill-icon">{group.icon}</span>
                    <h3>{group.title}</h3>
                  </div>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </Col>
            ))}
          </Row>
        </section>
      </Container>
    </Container>
  );
}

export default About;
