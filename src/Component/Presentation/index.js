import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './presentation.css';
import useMediaQuery from '@material-ui/core/useMediaQuery';

function Presentation(props) {
  const matches=useMediaQuery(('(min-width:600px)'));
  return (
    <div className="presentation" style={{ 
      backgroundImage: `url("/images/images 2_plan de travail 1.png")` }}>
<h1>PRESENTATION DE L'ENTREPRISE </h1>
<p>Comptant plus de 21 ans d'éxpériences, Barcket Inox se spécialise dans la fabrication de cuves et d'équipements à base de matiére inoxydable déstinée pour la collect de lait et la fabrication fromagére</p>

</div>


  










);
}
export default  Presentation;