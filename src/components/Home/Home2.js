import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaServer, FaNetworkWired, FaShieldAlt, FaLaptopCode } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const focusAreas = [
  {
    title: "Systems Administration",
    text: "Linux and Windows Server administration, virtualization, and service continuity planning.",
    icon: <FaServer />,
  },
  {
    title: "Networking",
    text: "TCP/IP, VLANs, DNS, DHCP, routing, and network diagnosis for reliable communication flows.",
    icon: <FaNetworkWired />,
  },
  {
    title: "Monitoring & Security",
    text: "Network analysis, firewall fundamentals, and security awareness in lab environments.",
    icon: <FaShieldAlt />,
  },
  {
    title: "Practical Development",
    text: "React, FastAPI, and infrastructure-focused tooling to support monitoring and automation.",
    icon: <FaLaptopCode />,
  },
];

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container className="content-shell">
        <Row className="about-grid align-items-center">
          <Col lg={7} className="home-about-description">
            <div className="section-tag">About me</div>
            <h2>
              Infrastructure-minded, <span className="accent-text">network-focused</span>, and ready to contribute.
            </h2>
            <p className="home-about-body">
              I hold a Professional Bachelor&apos;s degree in Computer Systems and Networks Engineering and a Specialized Technician diploma in Full Stack Web Development. My background combines practical IT operations with software development, which helps me understand both infrastructure challenges and the applications that depend on them.
            </p>
            <p className="home-about-body">
              I am especially interested in system administration, troubleshooting, monitoring, and automation. I enjoy analyzing how networks, servers, and services work together, and I apply development skills to build tools that support better visibility and operational control.
            </p>
            <div className="mini-cta">
              <span>Open to opportunities</span>
              <a href="mailto:mahmoudbymassen1@gmail.com">Contact me <FiArrowRight /></a>
            </div>
          </Col>

          <Col lg={5} className="focus-panel">
            <div className="focus-list">
              {focusAreas.map((item) => (
                <div className="focus-card" key={item.title}>
                  <div className="focus-icon">{item.icon}</div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
