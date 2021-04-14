import React from "react";

import { Button } from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './shapes.css';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import* as ReactBootStrap from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { useContext, useEffect, useState } from 'react';

function Shapes(props) {
  const matches = useMediaQuery('(min-width:320px)');
  return (
    <div className="top-nav">
    <div className="shapes" style={{ 
      backgroundImage: `url("/images/background_Plan de travail 1.png")` }}>
<div className="nav-container">


<ReactBootStrap.Navbar collapseOnSelect expand="lg"  variant="dark">
  <ReactBootStrap.Navbar.Brand href="#home"><img src="./images/logo_Plan de travail 1.png" className="logo-nav" /></ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="mr-auto">
      <ReactBootStrap.Nav.Link href="#features" style={{color:"white"}}>Accueil</ReactBootStrap.Nav.Link>
     <ReactBootStrap.NavDropdown title="Services" id="collasible-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="#action/3.1" style={{color:"black"}}>Fabrication de cuves en inox</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.2" style={{color:"black"}}>Fabrication de produits sur-mesure</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3" style={{color:"black"}}>Fabrication</ReactBootStrap.NavDropdown.Item>
    <ReactBootStrap.NavDropdown.Divider/>
    </ReactBootStrap.NavDropdown>

    <ReactBootStrap.NavDropdown title="Produits" id="collasible-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="#action/3.1" style={{color:"black"}}>Lait</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.2" style={{color:"black"}}>Jus</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3" style={{color:"black"}}>Dattes</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3" style={{color:"black"}}>Chocolat</ReactBootStrap.NavDropdown.Item>
    <ReactBootStrap.NavDropdown.Divider/>
    </ReactBootStrap.NavDropdown>


    <ReactBootStrap.Nav.Link href="#features" style={{color:"white"}}>Contact</ReactBootStrap.Nav.Link>
  

    
</ReactBootStrap.Nav>
    
    
    
    <ReactBootStrap.Nav>

    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
{/*<Nav 
  activeKey="/home">
    <Nav.Item>
    <Nav.Link href="/home" ><img src="/images/logo_Plan de travail 1.png"  className="logo-nav" /></Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/home" className="shapes-item">Accueil</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1" className="shapes-item">Services</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2" className="shapes-item">Produits</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1" className="shapes-item">Contact</Nav.Link>
  </Nav.Item>
  
</Nav>*/}
</div> 


<div className="comapany-name">ACIER INOXYDABLE
<p>Très haute résistance mécanique<br/> et thermique, durable et ne <br/> requiére que peu d'entretien.</p>
</div>
<div className="button-container"><Button>Découvrire</Button></div>

    </div>
    
    
    <div className="inox-back" style={{ 
      backgroundImage: `url("/images/image_Plan de travail 1.png")` }}></div>
      
     
    </div>
  );
}
export default Shapes;