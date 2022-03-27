import React from "react";
import { ProgressBar, Container, Col, Row} from 'react-bootstrap';

function Skills() {
    return (
      <section id="skills">
 <Container fluid className="center-container">
 <Row>
 <Col lg className="center-text">
 <h1>Skills& Experience</h1>
 <h3>Although I recently started my journey as a developer, I’ve studied and become proficient and well-practiced in HTML5, CSS3, Bootstrap 5, JavaScript, and React.js. I am also currently refining my skills in Node.js, MongoDB, SQL, and more. My goal is to become a full-stack web developer in the future 💫 
</h3>
 </Col>
 <Col lg className="progress-padding">
 <h2>HTML</h2>
 <ProgressBar variant="yellow" now={100} />
 <br/>
 <h2>CSS</h2>
  <ProgressBar variant="pink" now={90} />
  <br/>
  <h2>JavaScript</h2>
  <ProgressBar variant="yellow" now={80} />
  <br/>
  <h2>React.js</h2>
  <ProgressBar variant="pink" now={80} />
     </Col>
 </Row>
 </Container>
 </section>
    );
  }

export default Skills;