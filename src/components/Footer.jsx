import React from "react";
import { Github, Linkedin, EnvelopeFill} from 'react-bootstrap-icons';

function Footer() {
    const year = new Date().getFullYear();
    return (
      <footer>
      <div className="footer">
      <a className="link-dark btn btn-lg" href="https://www.linkedin.com/"><Linkedin /> </a>
      <a className="link-dark btn btn-lg" href=""><Github /></a>
      <a className="link-dark btn btn-lg" href=""><EnvelopeFill /></a>
        <p>Copyright ⓒ {year} Ellen Cheng</p>
        </div>
      </footer>
    );
  }

export default Footer;