import DraggableElement from './DraggableElement';
import React from 'react';

export default function Circle() {

  return (
    <DraggableElement 
     DiffX={"diffXC"} 
     DiffY={"diffYC"} 
     Dragging={"draggingC"}
     Style={"styleC"}
     className={"circle"}
     consoleMsg={"i am circle"}
     />
  )
}
