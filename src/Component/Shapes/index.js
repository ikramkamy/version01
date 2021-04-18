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
  <ReactBootStrap.Navbar.Brand href="#home"><img src="./images/logo_Plan de travail 1.png" className="logo-nav"/></ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="mr-auto">
      <ReactBootStrap.Nav.Link href="#features" style={{ fontWeight:"bolder" , fontSize:"1.5vw"}} id="my-nav">Accueil</ReactBootStrap.Nav.Link>
     <ReactBootStrap.NavDropdown title="Services" id="collasible-nav-dropdown" >
        <ReactBootStrap.NavDropdown.Item href="#action/3.1" style={{color:"black"}}><a href="#id1">Fabrication de cuves en inox </a></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.2" style={{color:"black"}}><a href="#id1">Fabrication de produits sur-mesure</a></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3" style={{color:"black"}}><a href="#id1">Fabrication</a></ReactBootStrap.NavDropdown.Item>
    <ReactBootStrap.NavDropdown.Divider/>
    </ReactBootStrap.NavDropdown>
    
    <ReactBootStrap.NavDropdown title="Produits" id="collasible-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="#id3" style={{color:"black"}}><a style={{textDecorationSkip:"none"}} href="#id3">Lait</a></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#id3" style={{color:"black"}}><a href="#id3">Jus</a></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#id3" style={{color:"black"}}><a href="#id3">Dattes</a></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#id3" style={{color:"black"}}><a href="#id3">Chocolat</a></ReactBootStrap.NavDropdown.Item>
    <ReactBootStrap.NavDropdown.Divider/>
    </ReactBootStrap.NavDropdown>


    <ReactBootStrap.Nav.Link href="#id4" style={{color:"white",fontWeight:"bolder"}} className="nav-item">Contact</ReactBootStrap.Nav.Link>
  

    
</ReactBootStrap.Nav>
    
    
    
    <ReactBootStrap.Nav>

    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>

</div> 


<div className="comapany-name">ACIER INOXYDABLE
<p>Très haute résistance mécanique<br/> et thermique, durable et ne <br/> requiére que peu d'entretien.</p>
</div>
<div className="button-container"><Button>Découvrir</Button></div>

    </div>
<div className="inox-back" style={{ 
      backgroundImage: `url("/images/image_Plan de travail 1.png")` }}></div>
      
     
    </div>
  );
}
export default Shapes;