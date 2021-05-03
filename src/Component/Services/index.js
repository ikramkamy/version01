import './service.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import useMediaQuery from '@material-ui/core/useMediaQuery';
//import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
function Services (props) {
  const { t, i18n } = useTranslation();
  const matches = useMediaQuery('(min-width:600px)');
  return (
    <div className="services" id="id1" style={{ 
      backgroundImage:`url("/images/fond-01.jpg")` }}>
    <div className="services-cont">
    <div className="servive-title" >{t("NOS SERVICES.label")}</div>
    <div className="service-one" style={{ 
      backgroundImage: `url("/images/forme 1_Plan de travail 1.png")` }}>
    <div className="service-container">
     <h1>{t(`FABRICATION.label`)} </h1>
     <h2 id="sp-one">{t(`DE CUVES EN INOX.label`)}</h2>
     <p>{t(`L'inox est trés recommandé dans l'industrie des agro-alimentaires et parapharmacetiques pour leur aspect d'hygiéne et leur durabilité.label`)} </p>
     </div>
     </div>

     <div className="service-one mid" style={{ 
      backgroundImage: `url("/images/formes 2_Plan de travail 1.png")` }}>
     <div className="service-container">
     <h1>{t(`FABRICATION.label`)} </h1>
     <h2>{t(`DE PRODUITS SUR MESURE.label`)}</h2>
     <p>{t(`Quel que soit votre besoin, vous pouvez faire appel à notre expertises pous vous confectionner des équipements sur-mesure selon votre besoin.label`)} </p>
     </div>
     </div>
     <div className="service-one" style={{ 
      backgroundImage: `url("/images/forme 1_Plan de travail 1.png")` }}>
     <div className="service-container">
     <h1>{t(`Installation.label`)}</h1>
     <p> {t(`Après la fabrication nous accompagnons nos clients dans l’installation de nos produits au sein de leur compartiments.label`)}</p>
     </div>
      </div>
      </div>

     
    </div>
  );
}
export default Services;