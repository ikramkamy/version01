import React from "react";

import { Button } from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './shapes.css';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import* as ReactBootStrap from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from 'react-i18next';
//import { useContext, useEffect, useState } from 'react';
import LanguageSelector from '../../LanguageSelector';
function Shapes(props) {
  const { t, i18n } = useTranslation();
  const matches = useMediaQuery('(min-width:320px)');
  return (
    <div className="top-nav">
    <div className="shapes" style={{ 
      backgroundImage: `url("/images/background_Plan de travail 1.png")` }}>
        <div className="second-laguage-selec"><LanguageSelector /> </div> 
<div className="nav-container">


<ReactBootStrap.Navbar collapseOnSelect expand="lg"  variant="dark">
  <ReactBootStrap.Navbar.Brand href="#home"><img src="./images/logo_Plan de travail 1.png" className="logo-nav"/></ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="mr-auto">
      <ReactBootStrap.Nav.Link href="#features" style={{ fontWeight:"bolder" }} id="my-nav">{t(`Accueil.label`)}</ReactBootStrap.Nav.Link>
     <ReactBootStrap.NavDropdown title={t("Services.label")} id="collasible-nav-dropdown" >
        <ReactBootStrap.NavDropdown.Item href="#action/3.1" style={{color:"black"}}><a href="#id1">{t(`Fabrication de cuves en inox.label`)} </a></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.2" style={{color:"black"}}><a href="#id1">{t(`Fabrication de produits sur-mesure.label`)}</a></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3" style={{color:"black"}}><a href="#id1">{t(`Fabrication.label`)}</a></ReactBootStrap.NavDropdown.Item>
    <ReactBootStrap.NavDropdown.Divider/>
    </ReactBootStrap.NavDropdown>
    
    <ReactBootStrap.NavDropdown title={t("Produits.label")} id="collasible-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="#id3" style={{color:"black"}}><a style={{textDecorationSkip:"none"}} href="#id3">{t("Lait.label")}</a></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#id3" style={{color:"black"}}><a href="#id3">{t(`Jus.label`)}</a></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#id3" style={{color:"black"}}><a href="#id3">{t(`Dattes.label`)}</a></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#id3" style={{color:"black"}}><a href="#id3">{t(`Chocolat.label`)}</a></ReactBootStrap.NavDropdown.Item>
    <ReactBootStrap.NavDropdown.Divider/>
    </ReactBootStrap.NavDropdown>


    <ReactBootStrap.Nav.Link href="#id4" style={{color:"white",fontWeight:"bolder"}} className="nav-item">{t(`Contact.label`)}</ReactBootStrap.Nav.Link>
  

    
</ReactBootStrap.Nav>
    
    
    
    <ReactBootStrap.Nav>

    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>

</div> 


<div className="comapany-name">{t(`ACIER INOXYDABLE.label`)}
<p>{t(`Très haute résistance mécanique`)}<br/> t{(`et thermique, durable et ne.label`)} <br/> {t(`requiére que peu d'entretien.label`)}</p>
</div>
<div className="button-container"><Button>{t(`Découvrir.label`)}</Button></div>
{/*document.getElementById('#13').style.display("none")*/}
<div className="langue-botton"> {/* window.innerWidth<900 ? document.getElementById('#13').style.display("flex") :"" */} </div>
    </div>
<div className="inox-back" style={{ 
      backgroundImage: `url("/images/image_Plan de travail 1.png")` }}>
     
<LanguageSelector/>


      </div>
      
     
    </div>
  );
}
export default Shapes;