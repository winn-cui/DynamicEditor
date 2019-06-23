import React from 'react';
import reactable from 'reactablejs';

// check https://github.com/beizhedenglong/reactablejs

const Reactable = props => (
	<div
    style={{
      fontSize: '30px',
      position: 'relative',
      left: props.x,
      top: props.y,
      width: props.width,
      height: props.height,
      background: 'grey',
      transform: `rotate(${props.angle}deg)`,
	    }}
	    ref={props.getRef}
	  >
      Reactable is a react hight-order component for interactjs.
  </div>
);

const Resizeable = reactable(Reactable);

export default Resizeable;