import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineDownload } from "react-icons/ai";
import { FiArrowRight, FiGithub, FiMail, FiLinkedin } from "react-icons/fi";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import cvPdf from "../../Assets/Mahmoud_Bymassen_CV_EN.pdf";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content shell-panel">
          <Row className="align-items-center text-left">
            <Col lg={7} className="home-header">
              <div className="eyebrow">IT infrastructure • systems • networking</div>
              <h1 className="heading-name">Mahmoud Bymassen</h1>
              <h2 className="heading-role">Junior Systems &amp; Network Administrator</h2>
              <div className="typewriter-wrap">
                <Type />
              </div>

              <p className="hero-copy">
                I support reliable IT environments, troubleshoot network issues, monitor infrastructure,
                and build practical tools that improve system operations and service continuity.
              </p>

              <div className="cta-row">
                <a className="primary-btn" href={cvPdf} target="_blank" rel="noreferrer">
                  <AiOutlineDownload /> Download CV
                </a>
                <Link className="secondary-btn" to="/project">
                  View Projects <FiArrowRight />
                </Link>
              </div>

              <div className="contact-row">
                <a href="mailto:mahmoudbymassen1@gmail.com" className="inline-link">
                  <FiMail /> mahmoudbymassen1@gmail.com
                </a>
                <a href="https://github.com/mahmoudbymassen" target="_blank" rel="noreferrer" className="inline-link">
                  <FiGithub /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/mahmoud-bymassen-001b6b33b/" target="_blank" rel="noreferrer" className="inline-link">
                  <FiLinkedin /> LinkedIn
                </a>
              </div>
            </Col>

            <Col lg={5} className="home-visual">
              <div className="network-scene" aria-label="Network infrastructure illustration">
                <div className="signal signal-one"></div>
                <div className="signal signal-two"></div>
                <div className="signal signal-three"></div>
                <div className="node core-node">Core</div>
                <div className="node node-one">Linux</div>
                <div className="node node-two">AD</div>
                <div className="node node-three">VMware</div>
                <div className="node node-four">Firewall</div>
                <div className="node node-five">Users</div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
