import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <Container fluid className="footer">
      <Row className="align-items-center">
        <Col md={4} className="footer-copywright">
          <h3>Designed and developed by Mahmoud Bymassen</h3>
        </Col>
        <Col md={4} className="footer-copywright">
          <h3>Copyright © {year} MB</h3>
        </Col>
        <Col md={4} className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a href="mailto:mahmoudbymassen1@gmail.com" target="_blank" rel="noreferrer" aria-label="Email">
                <FiMail />
              </a>
            </li>
            <li className="social-icons">
              <a href="https://github.com/mahmoudbymassen" style={{ color: "white" }} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a href="https://www.linkedin.com/in/mahmoud-bymassen-001b6b33b/" style={{ color: "white" }} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
