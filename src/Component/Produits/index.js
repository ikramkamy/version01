import useMediaQuery from '@material-ui/core/useMediaQuery';
import 'bootstrap/dist/css/bootstrap.min.css';
import './produit.css';
//import { useContext, useEffect, useState } from 'react';

function Produits (props) {
  const matches = useMediaQuery('(min-width:1200px)');
  return (
    <div className="produit" style={{ 
      backgroundImage: `url("/images/fond-01.jpg")` }}>
        <div className=" product-title" style={{color:"grey"}}>NOS PRODUITS
        <div className="products-discreption">Tous nos produits sont classés selon le secteur d'activité </div>
       
        </div>
        
<div className="org-product">
        <div className="liste-prod">
        <div className="pro-item">Laits</div>
        <div className="pro-item">Jus</div>
        <div className="pro-item">Dattes</div>
        <div className="pro-item">Chocolat</div>
        </div>

    <div className="exposing-prod">
      <div className="expos-item">
          <div className="image" style={{borderRight:"2px solid  blue"}}><img src="/images/4_Plan de travail 1.png "  className="products-size"/></div>
          <div className="image-title">Cuve simple paroi</div>
      </div>
      <div className="expos-item">
      <div className="image" style={{borderRight:"2px solid  blue"}}><img src="/images/3_Plan de travail 1.png " className="products-size"/></div>
      <div className="image-title">Cuve double paroi</div>
      </div>
      <div className="expos-item">
      <div className="image" style={{borderRight:"2px solid  blue"}}><img src="/images/2_Plan de travail 1.png " className="products-size"/></div>
      <div className="image-title">Cuve réfrigérée</div>

      </div>
      <div className="expos-item">
      <div className="image"><img src={props.url} className="products-size"/></div>
    <div className="image-title">Mixeur</div>
      </div>


    </div>
  
    </div>
    </div>
  );
}
export default Produits;