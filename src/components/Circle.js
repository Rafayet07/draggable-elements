// import DraggableCard from './draggableCard';

import React, { useEffect, useState } from 'react';

export default function Circle() {

  const localDiffX=localStorage.getItem("diffXC");
  const localDiffY=localStorage.getItem("diffYC");
  const localDragging=localStorage.getItem("draggingC");
  const localStyle=localStorage.getItem("styleC");
  const[diffX,setDiffX]=useState(localDiffX?JSON.parse(localDiffX):0);
  const[diffY,setDiffY]=useState(localDiffY?JSON.parse(localDiffY):0);
  const[dragging,setDragging]=useState(localDragging?JSON.parse(localDragging):false);
  const[style,setStyle]=useState(localStyle?JSON.parse(localStyle):{});

  useEffect(()=>{
    localStorage.setItem("diffXC",JSON.stringify(diffX));
    localStorage.setItem("diffYC",JSON.stringify(diffY));
    localStorage.setItem("draggingC",JSON.stringify(dragging));
    localStorage.setItem("styleC",JSON.stringify(style));
  },[diffX,diffY,dragging,style]);

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

    <div className='circle' style={style} onMouseDown={_dragStart} onMouseMove={_dragging} onMouseUp={_dragEnd}>

    {console.log("i am circle")}
    </div>
  )
}
