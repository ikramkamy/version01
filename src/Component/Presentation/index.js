import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './presentation.css';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTranslation } from 'react-i18next';
import Figure from 'react-bootstrap/Figure'
import FigureImage from 'react-bootstrap/FigureImage'
import FigureCaption from 'react-bootstrap/FigureCaption'
import '../Undernav/undernav.css';
function Presentation(props) {

  const { t, i18n } = useTranslation();

  const matches=useMediaQuery(('(min-width:600px)'));
  return (
    <div className="first" >
      
    <div className="presentation" style={{ 
      backgroundImage: `url("/images/6.jpg")` }}>
<h1>Energie <br/> Renouvelable <br/>Developpement durable<br/> Efficacité energitique</h1>



</div>

<div>

{/*<Figure>
  <Figure.Image
    width={171}
    height={180}
    alt="171x180"
    src="/images/1.svg"
  />
  <Figure.Caption>
    Nulla vitae elit libero, a pharetra augue mollis interdum.
  </Figure.Caption>
</Figure>*/}




</div>
</div>
);
}
export default  Presentation;