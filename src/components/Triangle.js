import DraggableElement from './DraggableElement';
import React from 'react';

export default function Triangle() {

 
  return (
    <DraggableElement 
     DiffX={"diffX"} 
     DiffY={"diffY"} 
     Dragging={"dragging"}
     Style={"style"}
     className={"triangle"}
     consoleMsg={"i am Triangle"}
     />
  );
}
