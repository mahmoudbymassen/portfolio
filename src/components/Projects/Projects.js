import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ecom from "../../Assets/Projects/ecom.png"
import managment from "../../Assets/Projects/managment.png";
import resume from "../../Assets/Projects/resume.png";
import chatify from "../../Assets/Projects/chatify.png";
import station from "../../Assets/Projects/";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="WeChat"
              description="This beginner-level Chatbot is a simple yet functional application designed to simulate basic conversational interactions. Built with PHP for backend logic, CSS for a clean and user-friendly interface, and SQL for data storage, the chatbot serves as an introductory project to explore the fundamentals of web development and AI-driven interactions."
              ghLink="https://github.com/mahmoudbymassen/we-chat"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={managment}
              isBlog={false}
              title="projects management"
              description="This Project Management System is a powerful tool designed to streamline task organization, team collaboration, and project tracking. Built with Laravel for robust backend functionality, SQL for efficient database management, and a combination of CSS and JavaScript for a dynamic and responsive user interface, the system provides a seamless experience for managing projects and their associated tasks."
              ghLink="https://github.com/mahmoudbymassen/project-management"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecom}
              isBlog={false}
              title="E-commerce"
              description="This E-Commerce Platform is a feature-rich, full-stack web application designed to deliver a seamless online shopping experience. Built with React.js for a fast and interactive frontend, Express.js for a scalable and efficient backend, and MongoDB Atlas for cloud-based database management, the platform combines modern web development technologies to create a robust and user-friendly solution."
              ghLink="https://github.com/mahmoudbymassen/e-commerce"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={resume}
              isBlog={false}
              title="Resume Creator"
              description="Developed a user-friendly Resume Creator web application using React.js to help users build professional resumes effortlessly. The application allows users to input their personal, educational, and professional details, which are dynamically rendered into a well-structured and visually appealing resume template."
              ghLink="https://github.com/mahmoudbymassen/Resume"

            />
          </Col>
                <Col md={4} className="project-card">
            <ProjectCard
              imgPath={station}
              isBlog={false}
              title="station managment"
              description="Skilled developer who built a gas station management system in 2025 using React, Node.js, Express, and MongoDB. This web application optimizes stock, employee, and sales management with role-based access, showcasing my expertise in full-stack development and problem-solving ."
              ghLink="https://github.com/mahmoudbymassen/Resume"

            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
