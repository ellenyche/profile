import React from "react";
import {Button, Container, Col, Row} from 'react-bootstrap';

function Contact() {
    return (
      <section id="contact">
      <img className="top-right yellow-corner" src="images/yellow-corner.png" alt=""/>
       <img className="bottom-left" src="images/pink-corner.png" alt=""/>
      <Container fluid className="contact-container"> 
      <h1>Contact Me</h1>
      <h3>I’m interested in freelance opportunities and Junior Web Devleoping positions. However, feel free to reach out to me for any other requests or questions!</h3>
    
      <div className="contact-form">
                  <form method="POST" action="mailto:ellenyche@gmail.com" id="contactForm" name="contactForm">
										<div className="row">
											<div className="col-md-6  pb-2">
												<div className="form-group">
													<input type="text" className="form-control" name="name" id="name" placeholder="Name"/>
												</div>
											</div>
											<div className="col-md-6 pb-2"> 
												<div className="form-group">
													<input type="email" className="form-control" name="email" id="email" placeholder="Email"/>
												</div>
											</div>
											<div className="col-md-12 pb-2">
												<div className="form-group">
													<input type="text" className="form-control" name="subject" id="subject" placeholder="Subject"/>
												</div>
											</div>
											<div className="col-md-12 pb-3">
												<div className="form-group">
													<textarea name="message" className="form-control" id="message" cols="30" rows="7" placeholder="Message"></textarea>
												</div>
											</div>
											<div className="col-md-12">
												<div className="form-group">
													<input type="submit" value="Send Message" className="btn btn-lg btn-secondary open-sans"/>
													<div className="submitting"></div>
												</div>
											</div>
										</div>
									</form>
                  </div>
      </Container>
      </section>
    );
  }

export default Contact;