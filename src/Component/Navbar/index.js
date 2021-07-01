import React, { useState ,useEffect} from "react";

import { Button } from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './shapes.css';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import* as ReactBootStrap from 'react-bootstrap';

import { useTranslation } from 'react-i18next';
//import { useContext, useEffect, useState } from 'react';
import LanguageSelector from '../../LanguageSelector';
    
const  Navbar=(props)=> {
 




  return (
    <div className="top-nav">
      
    <div className="shapes">
       
<div className="nav-container">


<ReactBootStrap.Navbar collapseOnSelect expand="lg"  variant="dark">
  <ReactBootStrap.Navbar.Brand href="#home"><img src="" className="logo-nav"/></ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="mr-auto">
    <ReactBootStrap.Nav.Link href="/" style={{color:"black",fontWeight:"bolder"}} className="nav-item">Accueil</ReactBootStrap.Nav.Link>
    <ReactBootStrap.Nav.Link href="#id4" style={{color:"black",fontWeight:"bolder"}} className="nav-item">{props.activity1}</ReactBootStrap.Nav.Link>
    <ReactBootStrap.Nav.Link href="#id4" style={{color:"black",fontWeight:"bolder"}} className="nav-item">{props.activity2}</ReactBootStrap.Nav.Link> 

     <ReactBootStrap.NavDropdown title={props.secteur} id="collasible-nav-dropdown" style={{color:"black"}}>
      <ReactBootStrap.NavDropdown.Item href="#action/3.1" style={{color:"black"}}><a href="#id1">Solaire PV</a></ReactBootStrap.NavDropdown.Item>
      <ReactBootStrap.NavDropdown.Item href="#action/3.1" style={{color:"black"}}><a href="#id1">Recyclage</a></ReactBootStrap.NavDropdown.Item>
      <ReactBootStrap.NavDropdown.Item href="#action/3.1" style={{color:"black"}}><a href="#id1">Efficacité Energitique</a></ReactBootStrap.NavDropdown.Item>
    <ReactBootStrap.NavDropdown.Divider/>
    </ReactBootStrap.NavDropdown>
  
    {/*<ReactBootStrap.NavDropdown title="Etudiants" id="collasible-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="#id3" style={{color:"black"}}><a style={{textDecorationSkip:"none"}} href="#id3">{t("Lait.label")}</a></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#id3" style={{color:"black"}}><a href="#id3">Stages pratique</a></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#id3" style={{color:"black"}}><a href="#id3">visites sur terrain</a></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#id3" style={{color:"black"}}><a href="#id3">volantaire</a></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#id3" style={{color:"black"}}><a href="#id3">Ajouter votre CV</a></ReactBootStrap.NavDropdown.Item>
    <ReactBootStrap.NavDropdown.Divider/>
    </ReactBootStrap.NavDropdown>

    <ReactBootStrap.NavDropdown title="Fournisseurs" id="collasible-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="#id3" style={{color:"black"}}><a style={{textDecorationSkip:"none"}} href="#id3">{t("Lait.label")}</a></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#id3" style={{color:"black"}}><a href="#id3">Produits et Services</a></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#id3" style={{color:"black"}}><a href="#id3">A props de notre entreprise</a></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#id3" style={{color:"black"}}><a href="#id3">volantaire</a></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#id3" style={{color:"black"}}><a href="#id3">Ajouter votre CV</a></ReactBootStrap.NavDropdown.Item>
    <ReactBootStrap.NavDropdown.Divider/>
    </ReactBootStrap.NavDropdown>*/}



<ReactBootStrap.Nav.Link href="#id4" style={{color:"black",fontWeight:"bolder"}} className="nav-item">log in</ReactBootStrap.Nav.Link>
    <ReactBootStrap.Nav.Link href="#id4" style={{color:"black",fontWeight:"bolder"}} className="nav-item">Contact</ReactBootStrap.Nav.Link>
    

    
</ReactBootStrap.Nav>
    
    
    
    
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>

</div> 

</div>


     
     

    </div>
  );
}
export default Navbar;