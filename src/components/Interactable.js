import React from 'react';


const Interactable = props => (
  <div className="resize-container draggable">
    <div className="resize-drag">
       {props.interactable_string}
    </div>
  </div>

);


export default Interactable;