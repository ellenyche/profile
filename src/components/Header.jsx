import React from "react";
import {Navbar, Nav, Container, Button} from 'react-bootstrap';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import Title from "./Title";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

function Header() {
    return (
        <div>
       <div>
        <Navbar fixed="top" className="navbar" variant="light" expand="lg">
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="nav-brand px-3">ellenc .</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
             <Nav.Link as={Link} to="/about" className="nav-link px-4">About</Nav.Link>
              <Nav.Link as={Link} to="/skills" className="nav-link px-4">My Skills</Nav.Link>
              <Nav.Link as={Link} to="/projects" className="nav-link px-4">Projects</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="nav-link px-4">Contact</Nav.Link>
          
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
    <div>
      <Routes>
      <Route path="/" element={<Title />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      </Routes>
      
      </div>
      </div>
    );
  }

export default Header;