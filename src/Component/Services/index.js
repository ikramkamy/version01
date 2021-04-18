import './service.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import useMediaQuery from '@material-ui/core/useMediaQuery';
//import { useContext, useEffect, useState } from 'react';

function Services (props) {
  const matches = useMediaQuery('(min-width:600px)');
  return (
    <div className="services" id="id1" style={{ 
      backgroundImage: `url("/images/fond-01.jpg")` }}>
    <div className="services-cont">
    <div className="servive-title" >NOS SERVICES</div>
    <div className="service-one" style={{ 
      backgroundImage: `url("/images/forme 1_Plan de travail 1.png")` }}>
    <div className="service-container">
     <h1>FABRICATION </h1>
     <h2 id="sp-one">DE CUVED EN INOX</h2>
     <p>L'inox est trés recommandé dans l'industrie des agro-alimentaire ou parapharmacetique pour leur aspect d'hygiéne et leur durabilité. </p>
     </div>
     </div>

     <div className="service-one mid" style={{ 
      backgroundImage: `url("/images/formes 2_Plan de travail 1.png")` }}>
     <div className="service-container">
     <h1>FABRICATION </h1>
     <h2>DE PRODUITS SUR MESURE</h2>
     <p>Quel que soit votre besoin, vous pouvez faire appelle à notre expertises pous vous confectionner des équipement sur-mesure selon votre besoin. </p>
     </div>
     </div>
     <div className="service-one" style={{ 
      backgroundImage: `url("/images/forme 1_Plan de travail 1.png")` }}>
     <div className="service-container">
     <h1>Installation</h1>
     <p> Après la fabrication nous accompagnons nos clients dans l’installation de nos produits au sein de leur compartiments.</p>
     </div>
      </div>
      </div>

     
    </div>
  );
}
export default Services;