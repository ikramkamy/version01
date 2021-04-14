import useMediaQuery from '@material-ui/core/useMediaQuery';
import 'bootstrap/dist/css/bootstrap.min.css';
import './produit.css';
import {  useEffect, useState } from 'react';
import React from 'react';
import {Link} from 'react-router-dom';

function Produits (props) {
  const matches = useMediaQuery('(min-width:1200px)');
  const {addlait}=props;
  return (
    <div className="produit" style={{ 
      backgroundImage: `url("/images/fond-01.jpg")` }}>
        <div className=" product-title" style={{color:"grey"}}>NOS PRODUITS
        <div className="products-discreption">Tous nos produits sont classés selon le secteur d'activité </div>
       
        </div>
        
<div className="org-product">
      <div className="liste-prod">
       <Link to="/lait" className="pro-item"><div className="pro-item"  >Laits</div></Link> 
      <Link to="/jus" className="pro-item">  <div className="pro-item">Jus</div></Link> 
       <Link to="/dattes" className="pro-item"> <div className="pro-item">Dattes</div>  </Link> 
       <Link to="/chocolat" className="pro-item"> <div className="pro-item">Chocolat</div> </Link> 
       
</div>
    
      {/*
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

      */}
     


    
  
    </div>
    </div>
  );
}
export default Produits;