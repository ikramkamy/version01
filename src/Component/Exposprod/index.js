import React from 'react';
import './exposprod.css';
import { useTranslation } from 'react-i18next';

const Expos =(props)=>{
      const { t, i18n } = useTranslation();
return (<div className="colme">


      <div className="expos-item" >
      <div className="image"><img src={props.url} className="products-size"/></div>
     
      </div>
     <div className="image-title" style={{cursor:"pointer"}}>{document.querySelector('#frn:checked')!==null?props.name : document.querySelector('#arb:checked')!==null ? props.namear : props.nameeng}</div>
     {console.log("this is the name",props.name)}
</div>
)

}
export default Expos;