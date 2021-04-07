import './produit.css';

import 'bootstrap/dist/css/bootstrap.min.css';

//import { useContext, useEffect, useState } from 'react';

function Produits (props) {
  return (
    <div className="produit">
        <div className="servive-title product-title" style={{color:"grey"}}>NOS PRODUITS
        <div className="products-discreption">Tous nosd produits sont classés selon le secteur d'activité </div>
        <div className="liste-prod">
        <div className="pro-item">Laits</div>
        <div className="pro-item">Jus</div>
        <div className="pro-item">Dattes</div>
        <div className="pro-item">Chocolat</div>
        </div>
        </div>
        
    <div className="exposing-prod">
      <div className="expos-item">
          <div className="image"></div>
          <div className="image-title"></div>
      </div>
      <div className="expos-item">
      <div className="image"></div>
      <div className="image-title"></div>
      </div>
      <div className="expos-item">
      <div className="image"></div>
      <div className="image-title"></div>

      </div>
      <div className="expos-item">
      <div className="image"></div>
    <div className="image-title"></div>
      </div>


    </div>
    </div>
  );
}
export default Produits;