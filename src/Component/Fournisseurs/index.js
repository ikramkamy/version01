import React from 'react';
import './fourni.css';
import Footer from '../Footer'
import Navbar  from '../Navbar/index';
//cette page est un espace commun qui regroupe les différent unités de productions, burreaux d'études..
//les fournisseur ont un accées admin pour metres des services ici
const Fournisseurs=(props)=>{
return(<div className="fournisseurs">
<Navbar secteur="Filiéres" activity1="Client" activity2="Fournisseurs"/>
<h1>bienvenue à votre espace </h1>
<h2>ici vous trouverez les meilleurs offres </h2>
<h4>Ajouter un service :)</h4>
<div className="service-fourni">
  <div className="image-fourni">
      <img src=""  className="image-fourni-styling"/>
      <div contact-fourni>
          Email: blabla@gmail.com<br/>
          Télèphone:0123456789

      </div>
      </div>  
  <div className="list-services">
      <div className="company-name">Nom de L'entreprise</div>
      <div className="company-name">description et présentation</div>
      <div className="list">
          <ol>
           <li>Ventes des panneaux PV 80w,100w..</li>
           <li>Service de livraison</li>
           <li>Service d'entretient aprés vente</li>
           <li>Consultation et devis</li>
           </ol>



          
      </div>
  </div>
</div>





<form method="post" className="form-fourni">
<div className="row center">
formulaire d'iscription

</div>
    <div className="row">
<label>Nom et Prénom</label>
<input placeholder="Nom et Prénom"></input>
</div>
<div className="row">
<label>Domainde d'activité</label>
<select>
<option value="">Choisir un service</option>
</select>
</div>
<div className="row">
<label>Région</label>
<select>
<option value="">Choisir la région</option>
</select>
</div>
<div className="row">
<label>Numéro télèphone</label>
<input placeholder="numéro"></input>
</div>
<div className="row">
<label>Email</label>
<input placeholder="Email"></input>
</div>
<button type="submit">S'inscrir</button>
</form>
<Footer/>
</div>)
}
export default Fournisseurs;