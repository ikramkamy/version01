import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './presentation.css';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTranslation } from 'react-i18next';
function Presentation(props) {

  const { t, i18n } = useTranslation();

  const matches=useMediaQuery(('(min-width:600px)'));
  return (
    <div className="presentation" style={{ 
      backgroundImage: `url("/images/images 2_Plan de travail 1.png")` }}>
<h1>{t(`PRÉSENTATION DE L'ENTREPRISE.label`)}</h1>

<p>{t(`Comptant plus de 21 ans d'éxpériences.label`)}, {t(`Barckat Inox se spécialise dans la fabrication de cuves et d'équipements à base de matiére inoxydable déstinée pour la collecte de lait et la production fromagére.label`)}</p>

</div>

);
}
export default  Presentation;