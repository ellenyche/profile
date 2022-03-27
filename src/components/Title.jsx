import React from "react";
import Button from 'react-bootstrap/Button';
import {
    Routes,
    Route,
    Link
  } from "react-router-dom";
import Contact from "./Contact";

function Title() {
    return (
    
     <section id="home" >
     <img className="title-background" src="images/background-texture.png" alt=""/>
     <img className="bottom-left" src="images/pink-corner.png" alt=""/>
     <img className="top-right yellow-corner" src="images/yellow-corner.png" alt=""/>
     
    <div className="title-center">
   
     
     <h1 className="title-h1-size">Hi, I'm Ellen.</h1>
     <h2 className="title-h2-size">a Web Developer.</h2>
    
     <Button as={Link} to="/contact" className="open-sans" variant="secondary" size="lg">Contact Me!</Button>{' '}
     
   
     </div>
<div>
<Routes>
      <Route path="/contact" element={<Contact />} />
      </Routes>
</div>
     
     </section>
     
    );
  }

export default Title;