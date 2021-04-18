import React from 'react';
import './contact.css';
import useMediaQuery from '@material-ui/core/useMediaQuery';
const Conatct=(props)=>{
    const matches = useMediaQuery('(min-width:600px)');
    return(
<div className="contact" id="id4">

<div className="all-contact">
<div className="map">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102527.69240155486!2d3.1043758471477276!3d36.57844946346099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128e558a34858019%3A0x3800bb0fe7e27865!2sLarbaa!5e0!3m2!1sen!2sdz!4v1618138945332!5m2!1sen!2sdz" className="map-size" />

    </div>

<div className="rotate-text"> 
<div className="logo-container"><img src="/images/logo_Plan de travail 1.png" className="logo-contact"/></div>  
<div className="coordonees">
<div className="item-contact" id="item-id"><img src="./images/icons_Plan de travail 1.png " className="icon-size"/>Société Barkets-inox,sise route de Larabâa, Ouled Slama, Daïra de Bougara (Wilaya de Blida)</div>
<div className="item-contact" id="item-id"><img src="./images/icons-02.png" className="icon-size"/>+213 (0) 25 46 31 67 /+213 (0) 540 00 00 24/25</div>
<div className="item-contact"><img src="./images/icons-03.png" className="icon-size"/>contact@barkets-inox.com</div>
<div className="item-contact"><img src="./images/icons-04.png" className="icon-size"/>www.barkats-inox.com</div>
</div>


</div>
</div>
</div>
  )
  };
  export default Conatct;


