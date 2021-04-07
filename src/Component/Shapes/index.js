import React from "react";
import './shapes.css';
import { Button } from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//import { useContext, useEffect, useState } from 'react';

function Shapes(props) {
  return (
    <div className="shapes">
<div className="nav-container">
<Nav
  activeKey="/home"
><Nav.Item>
    <Nav.Link href="/home" className="shapes-item">LOGO INOX</Nav.Link>
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
  
</Nav>
</div> 

<div className="comapany-name">ACIER INOXYDABLE
<p>Très haute résistance mécanique<br/> et thermique, durable et ne <br/> requiére que peu d'entretien.</p>
</div>
<div className="button-container"><Button>Découvrire</Button></div>

    </div>
  );
}
export default Shapes;