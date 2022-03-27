import React from "react";
import { Row, Col, Card, Button, Container} from 'react-bootstrap';

function Projects() {
    return (
      <section id="projects">
      <Container fluid className="project-container">
      <h1>Projects</h1>
      <br/>
      <Row xs={1} md={3} className="g-4">
 
    <Col>
    <Card border="info">
  <Card.Img variant="top" src="images/project1.png" />
  <Card.Body>
    <Card.Title>Valentine's Letter</Card.Title>
    <Card.Text >
     This is the first personal project I built and designed for fun on Valentine's Day. It primarily uses <strong><u>HTML5</u></strong> and <strong><u>CSS3</u></strong>. I play with CSS animations and positioning.
    </Card.Text>
    <Button variant="secondary">Go to website!</Button>
  </Card.Body>
</Card>
      </Col>
      <Col>
      <Card border="warning">
  <Card.Img variant="top" src="images/project2.png" />
  <Card.Body>
    <Card.Title>To-do List</Card.Title>
    <Card.Text >
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button className="open-sans" variant="secondary">Go to website!</Button>
  </Card.Body>
</Card>
</Col>
<Col>
   <Card border="info">
  <Card.Img variant="top" src="images/project3.png" />
  <Card.Body>
    <Card.Title>Note Keeper</Card.Title>
    <Card.Text className="open-sans">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button className="open-sans" variant="secondary">Go to website!</Button>
  </Card.Body>
</Card>
</Col>
</Row>
 </Container>
</section>
    );
  }

export default Projects;