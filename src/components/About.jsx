import React from "react";
import {Button, Container, Col, Row} from 'react-bootstrap';

function About() {
    return (
      <section id="about">
           <img className="top-right pink-top" src="images/pink-top-corner.png" alt=""/>
           
      <Container fluid className="center-container">
      <Row>
      <Col lg className="about-text">
      <h1>About me</h1>
      <h3>I’m an aspiring Junior Front-End Web Developer currently based in Tokyo 🇯🇵 .
I absolutely love creating web designs and building them from scratch with code.
I’m a <em>self-motivated learner</em> with strong organization, communication skills, and attention to detail. 
I’m interested in working both independently and collaboratively in a team to produce amazing projects!
</h3>
      <Button className="open-sans" variant="secondary" size="lg">Download My Resume!</Button>{' '}
      </Col>
      <Col lg className="order-first order-lg-0">
      <img className="profile-img" src="images/profile-img.jpg" alt=""/>
          </Col>
      </Row>
      </Container>
      </section>
    );
  }

export default About;