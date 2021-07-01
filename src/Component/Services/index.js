import './service.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import useMediaQuery from '@material-ui/core/useMediaQuery';
//import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Carousel from 'react-bootstrap/Carousel';

function Services (props) {
  const { t, i18n } = useTranslation();
  const matches = useMediaQuery('(min-width:600px)');
  return (
    <div className="services" id="id1">


{/*--------------------------------my carousel-------------------------------------------*/}
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/andreas-gucklhorn-Ilpf2eUPpUE-unsplash.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Energie solaire Photovoltaiques </h3>
      <p>la source d'énergie du futur .</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/riccardo-annandale-7e2pe9wjL9M-unsplash.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Efficacité Energitique </h3>
      <p>Minimiser les pertes, optimiser la consommation, preserver l'énergie</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/10.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Recyclage</h3>
      <p>Pour exploiter le maximum des resources non exploitées.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
{/*----------------------------------end of carousel-------------------------------------------*/}





   

     
    </div>
  );
}
export default Services;