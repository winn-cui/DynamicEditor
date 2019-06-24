import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Editor } from 'slate-react';
import { Value } from 'slate';
import { BoldMark, ItalicMark } from './index';

import Interactable from './components/Interactable';

// import Resizeable from './components/Resizeable';



import interact from 'interactjs';







// ========================================

const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        nodes: [
          {
            object: 'text',
            text: 'A line of text in a paragraph.',
          },
        ],
      },
    ],
  },
})


function App() {
  const [state, setState] = React.useState({
    value: initialValue,
    x: 0,
    y: 0,
    width: 400,
    height: 400,
    angle: 0,
    interactable_string: 'hello',

    }
  );
  
  const onKeyDown = (e, change) => {
    if (!e.metaKey) {return}
    e.preventDefault()
    console.log('what')
    switch (e.key) {
      case 'b': {
        console.log('here??')
        change.toggleMark('bold')
        return true
      }
      case 'i': {
        change.toggleMark('italic')
        return true
      }
    }
  }

  const renderMark = props => {
    switch (props.mark.type) {
      case 'bold':
        return <BoldMark {...props} />
      case 'italic':
        return <ItalicMark {...props} />
    }
  }
  

//  Testing Reactable Event handler functions
//  ================================================

  const handleDragMove = (e) => {
    const { dx, dy } = e
    setState({
      x: state.x + dx,
      y: state.y + dy,
    })
  }
  const handleGestureMove = (e) => {
    const { da } = e
    setState(state => ({
      angle: state.angle + da
    }))
  }
  // const handleResizeMove = (e) => {
  //   const { width, height } = e.rect
  //   const { left, top } = e.deltaRect
  //   setState(({state}) => ({
  //       x: state.x + left,
  //       y: state.y + top,
  //       width,
  //       height
  //     }
  //   ))
  // }




//  ================================================


  return (
    <div className="App">
      <Interactable interactable_string={ state.interactable_string } />
      <Editor 
        value={state.value} 
        onChange={ ({value}) => setState({value}) } 
        onKeyDown={ onKeyDown }
        renderMark={ renderMark }
        />
    </div>
  );
}


export default App;
