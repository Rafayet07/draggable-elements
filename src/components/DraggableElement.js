import React, { useEffect, useState } from 'react';

export default function DraggableElement({ consoleMsg,className ,DiffX, DiffY,Dragging,Style}) {

  const localDiffX=localStorage.getItem(DiffX);
  const localDiffY=localStorage.getItem(DiffY);
  const localDragging=localStorage.getItem(Dragging);
  const localStyle=localStorage.getItem(Style);
  const[diffX,setDiffX]=useState(localDiffX?JSON.parse(localDiffX):0);
  const[diffY,setDiffY]=useState(localDiffY?JSON.parse(localDiffY):0);
  const[dragging,setDragging]=useState(localDragging?JSON.parse(localDragging):false);
  const[style,setStyle]=useState(localStyle?JSON.parse(localStyle):{});

  useEffect(()=>{
    localStorage.setItem(DiffX,JSON.stringify(diffX));
    localStorage.setItem(DiffY,JSON.stringify(diffY));
    localStorage.setItem(Dragging,JSON.stringify(dragging));
    localStorage.setItem(Style,JSON.stringify(style));
  },[diffX,diffY,dragging,style,DiffX, DiffY,Dragging,Style]);

  function _dragStart(e){
    setDiffX(e.screenX-e.currentTarget.getBoundingClientRect().left);
    setDiffY(e.screenY-e.currentTarget.getBoundingClientRect().top);
    setDragging(true);
  }

  function _dragging(e){
    if(dragging){
      let left=e.screenX-diffX;
      let top=e.screenY-diffY;
      setStyle({
        left: left,
        top: top
      })
    }
  }

  function _dragEnd(){
    setDragging(false);
  }
   
  return (
   <div className={className} style={style} onMouseDown={_dragStart} onMouseMove={_dragging} onMouseUp={_dragEnd}>
    {console.log(consoleMsg)}
    </div>
  )
}