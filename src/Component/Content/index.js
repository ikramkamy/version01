import React from 'react';
import './content.css';
const Content=(props)=>{

return(<div className="content">
<div className="item title">{props.title}
<div className="item text">{props.text}</div>
<a href="/"> more... {props.suite}</a>

</div>
<div className=" item "><img src={props.url} className="illustaration"/></div>






</div>)
}
export default Content;