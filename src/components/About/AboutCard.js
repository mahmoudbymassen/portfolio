import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            I am <span className="accent-text">Mahmoud Bymassen</span>, based in Casablanca / Nouaceur, Morocco,
            and I am building a career in systems administration, networking, and IT support.
          </p>
          <p>
            My academic background in computer systems and networks engineering, combined with my full-stack development experience,
            allows me to approach infrastructure work with both technical depth and practical problem-solving skills.
          </p>
          <p>
            I enjoy working with Linux and Windows environments, diagnosing network issues, and improving infrastructure visibility
            through monitoring, automation, and structured troubleshooting.
          </p>
          <p className="quote-mark">
            “I am motivated by reliable systems, clean network design, and solutions that make day-to-day IT operations smoother.”
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
