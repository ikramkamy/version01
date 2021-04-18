import React from 'react';
import './exposprod.css';
const Expos =(props)=>{

return (<div className="colme">


      <div className="expos-item" >
      <div className="image" ><div className="image-desc"><img src={props.url}  className="products-size"/></div></div>
      </div>
     <div className="image-title" style={{cursor:"pointer"}}>{props.name}</div>
</div>
)

}
export default Expos;